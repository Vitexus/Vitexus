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
    const { data } = await octokit.repos.listCommits({
      owner: repo.owner.login,
      repo: repo.name,
      since: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(), // Last week
    });
    return data.map(commit => ({
      message: commit.commit.message,
      url: commit.html_url,
    }));
  }

  async function compileUpdate(orgs) {
    const repos = await getAllRepos(orgs);
    let updateText = 'Weekly GitHub Commits:\n\n';
    for (const repo of repos) {
      const commits = await getCommits(repo);
      updateText += `Repository: ${repo.name}\n`;
      commits.forEach(commit => {
        updateText += `- ${commit.message} Link\n`;
      });
      updateText += '\n';
    }
    console.log(updateText);
    // You can add code here to send the update to Teams or save it to a file
  }

  const organizations = ['org1', 'org2']; // Replace with your organizations
  compileUpdate(organizations);
})();
