# GitHub Pages Deployment Setup

## Quick Setup Guide

### 1. Push to GitHub

```bash
cd /Users/vinayak.chiluka/workspace/Profile-1/portfolio-app

# Initialize git (if not already done)
git init
git add .
git commit -m "Initial portfolio commit"

# Add your GitHub repo
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

### 2. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**

### 3. Configure Custom Domain (Optional)

1. In Settings → Pages, add your custom domain
2. Create a `CNAME` file in the `public/` folder:
   ```
   echo "your-domain.com" > public/CNAME
   ```

### 4. Update next.config.js for GitHub Pages

If using a custom domain, no changes needed.

If using `username.github.io/repo-name`:

```javascript
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  assetPrefix: '/your-repo-name',
  basePath: '/your-repo-name',
  // ... rest of config
}
```

### 5. Trigger Deployment

Push any change to main branch:
```bash
git add .
git commit -m "Update portfolio"
git push
```

The GitHub Action will automatically build and deploy!

## Deployment Status

Check deployment status in:
- GitHub → Actions tab
- GitHub → Settings → Pages

## Troubleshooting

### 404 errors on refresh
Add this to `public/404.html` (already included)

### Images not loading
Ensure images are in `public/` folder, not `src/`

### PDFs not accessible
Verify PDFs are in `dist/articles/` after build

## Your Site URL

After deployment, your site will be at:
- `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME`
- Or your custom domain
