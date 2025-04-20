(async () => {
  const { Octokit } = await import("@octokit/rest");
  const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

  async function getAllRepos(orgs) {
    let repos = [];
    for (const org of orgs) {
      const { data } = await octokit.repos.listForOrg({ org });
      repos = repos.concat(data);
    }
    return repos;
  }

  async function getCommits(repo) {
    try {
      const { data } = await octokit.repos.listCommits({
        owner: repo.owner.login,
        repo: repo.name,
        since: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(), // Last week
      });
      return data.map(commit => ({
        message: commit.commit.message,
        url: commit.html_url,
      }));
    } catch (error) {
      if (error.status === 409) {
        console.log(`Repository ${repo.name} is empty.`);
        return [];
      } else {
        throw error;
      }
    }
  }

  async function compileUpdate(orgs) {
    const repos = await getAllRepos(orgs);
    console.log('Checking the following repositories:');
    repos.forEach(repo => console.log(`- ${repo.name}`));

    let updateText = 'Weekly GitHub Commits:\n\n';
    for (const repo of repos) {
      const commits = await getCommits(repo);
      if (commits.length > 0) {
        updateText += `Repository: ${repo.name}\n`;
        commits.forEach(commit => {
          updateText += `- ${commit.message} Link\n`;
        });
        updateText += '\n';
      }
    }
    console.log(updateText);
    // You can add code here to send the update to Teams or save it to a file
  }

  const organizations = ['Spoje-NET', 'VitexSoftware']; // Replace with your organizations
  compileUpdate(organizations);
})();
