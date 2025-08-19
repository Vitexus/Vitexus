# Dependabot Auto-Merger Setup

This repository contains a GitHub Action that automatically merges one Dependabot pull request every 30 minutes across all your repositories in the VitexSoftware, Vitexus, and Spoje-NET organizations.

## Setup Instructions

### 1. Create a Personal Access Token (PAT)

You need to create a Personal Access Token with the necessary permissions to merge PRs across all your organizations:

1. Go to GitHub Settings → Developer settings → Personal access tokens → Fine-grained tokens
2. Click "Generate new token"
3. Set the following:
   - **Token name**: `Dependabot Auto-Merger`
   - **Expiration**: Choose your preferred expiration (recommend 1 year)
   - **Resource owner**: Select each of your organizations (VitexSoftware, Vitexus, Spoje-NET)
   - **Repository access**: All repositories (or select specific ones you want to manage)
   
4. **Repository permissions** (set these to "Write"):
   - Contents
   - Metadata  
   - Pull requests
   - Actions (if you want to see workflow runs)

5. **Organization permissions**: None needed
6. **Account permissions**: None needed

### 2. Add the Token as a Secret

1. Go to this repository's Settings → Secrets and variables → Actions
2. Click "New repository secret"
3. Name: `DEPENDABOT_MERGER_TOKEN`
4. Value: Paste the PAT you created above
5. Click "Add secret"

### 3. Enable the Workflow

The workflow is scheduled to run automatically every 30 minutes, but you can also:

1. Go to the Actions tab in this repository
2. Find the "Auto-merge Dependabot PRs" workflow
3. Click "Run workflow" to test it manually

## How It Works

The GitHub Action:

1. **Runs every 30 minutes** (configured with cron: `*/30 * * * *`)
2. **Fetches all repositories** from your three organizations
3. **Shuffles the repository list** to distribute load evenly
4. **Checks each repository** for open Dependabot PRs
5. **Finds the first mergeable PR** (no conflicts, passing checks)
6. **Merges exactly one PR** per run using squash merge
7. **Deletes the merged branch** automatically
8. **Provides a summary** in the workflow run

## Features

- ✅ **Rate-limited**: Only merges one PR per 30-minute run
- ✅ **Safety checks**: Only merges if PR is mergeable and checks pass
- ✅ **Fair distribution**: Randomizes repository order
- ✅ **Cross-organization**: Works across VitexSoftware, Vitexus, and Spoje-NET
- ✅ **Logging**: Detailed logs and workflow summaries
- ✅ **Manual trigger**: Can be run manually when needed

## Monitoring

- Check the Actions tab to see workflow runs
- Each run shows which repository and PR was merged
- Failed runs will show detailed error information
- Workflow summaries provide quick status updates

## Customization

You can modify the workflow by editing `.github/workflows/auto-merge-dependabot.yml`:

- Change the schedule (currently `*/30 * * * *` for every 30 minutes)
- Modify merge strategy (currently using `--squash`)
- Add additional safety checks
- Change which organizations/repositories to include

## Troubleshooting

### Common Issues:

1. **No PRs being merged**: Check if Dependabot is enabled and creating PRs
2. **Authentication errors**: Verify the DEPENDABOT_MERGER_TOKEN secret is set correctly
3. **Permission errors**: Ensure the PAT has write access to pull requests in all organizations
4. **Rate limiting**: GitHub may temporarily limit API calls - the action will retry on the next run

### Debugging:

1. Go to Actions tab → Select a workflow run → View detailed logs
2. Check the "Find and merge Dependabot PR" step for detailed information
3. Look for error messages about permissions, rate limits, or API issues

## Security

- The PAT is stored securely as a GitHub secret
- The action only merges Dependabot PRs (authored by `app/dependabot`)
- All operations are logged for audit purposes
- The action runs in GitHub's secure runner environment
