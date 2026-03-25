# MCP Servers Setup

This project uses Model Context Protocol (MCP) servers to extend Claude Code's capabilities.

## Configured MCP Servers

### 1. GitHub MCP Server
**Package:** `@modelcontextprotocol/server-github@latest`

**Features:**
- Search repositories
- Create/read/update issues
- Create pull requests
- List commits
- Get file contents
- Create branches

**Setup Requirements:**
```bash
# Set your GitHub Personal Access Token
export GITHUB_TOKEN="your_github_token_here"
```

**How to get a GitHub token:**
1. Go to GitHub → Settings → Developer settings → Personal access tokens
2. Generate a new token (classic) with these scopes:
   - `repo` (full control of private repositories)
   - `workflow` (optional, for GitHub Actions)
   - `read:org` (optional, for organization access)

---

### 2. Context7 MCP Server (Upstash)
**Package:** `@upstash/context7-mcp@latest`

**Features:**
- Vector database operations
- Semantic search
- Document embeddings
- AI-powered context retrieval

**Setup Requirements:**
```bash
# Set your Upstash credentials (if required)
export UPSTASH_REDIS_REST_URL="your_upstash_url"
export UPSTASH_REDIS_REST_TOKEN="your_upstash_token"
```

**Note:** Check the [Context7 documentation](https://github.com/upstash/context7) for the latest setup requirements.

---

### 3. Playwright MCP Server
**Package:** `@playwright/mcp@latest`

**Features:**
- Browser automation
- Web scraping
- UI testing
- Screenshot capture
- Page navigation

**Setup Requirements:**
```bash
# Install Playwright browsers (run once)
npx playwright install

# The MCP runs with --allow-unrestricted-file-access flag
# to enable file uploads and downloads
```

---

## Configuration File

The MCP servers are configured in `.claude/settings.json`:

```json
{
  "mcpServers": {
    "github": { ... },
    "context7": { ... },
    "playwright": { ... }
  }
}
```

## Usage

Once configured, restart Claude Code or reload the window. The MCP tools will be available automatically.

### Example Usage

**GitHub:**
- "Search for repositories about React"
- "Create an issue in my portfolio repo"
- "List my recent commits"

**Context7:**
- "Search my documentation for authentication patterns"
- "Store this code snippet for later reference"

**Playwright:**
- "Take a screenshot of my website"
- "Test the contact form submission"
- "Scrape data from this URL"

## Troubleshooting

### Server not connecting?
1. Check that the environment variables are set
2. Run `npx` commands manually to verify they work:
   ```bash
   npx -y @modelcontextprotocol/server-github@latest
   ```
3. Check Claude Code's MCP logs in the Output panel

### GitHub token issues?
- Ensure token has correct scopes
- Token should not be expired
- For SSO organizations, authorize the token

### Playwright issues?
- Make sure browsers are installed: `npx playwright install`
- Check that Node.js version is 18+

## Security Notes

- Never commit `.claude/settings.json` with hardcoded tokens
- Use environment variables for sensitive data
- The `.claude/` directory is in `.gitignore` by default
