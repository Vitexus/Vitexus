const fs = require('fs');
const { execSync } = require('child_process');

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

    // Calculate date range in SQL format
    const endDate = new Date();
    const startDate = new Date();
    startDate.setDate(endDate.getDate() - 7);
    const dateRange = `Date Range: ${startDate.toISOString().split('T')[0]} to ${endDate.toISOString().split('T')[0]}\n\n`;

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

    // Combine date range and update text
    const finalText = dateRange + updateText;
    console.log(finalText);

    // Write the final text to weekly.md
    fs.writeFileSync('weekly.md', finalText);

    // Commit the file to the repository
    execSync('git add weekly.md');
    execSync('git commit -m "Weekly update"');
    execSync('git push');
  }

  const organizations = ['Spoje-NET', 'VitexSoftware']; // Replace with your organizations
  compileUpdate(organizations);
})();
