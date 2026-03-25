# 🚀 Auto Deployment Setup

## GitHub Actions Workflow

The workflow `.github/workflows/deploy.yml` automatically builds and deploys your site on every push to `main` or `master`.

### How it works:
1. **Push to main** → Triggers the workflow
2. **Build job** → Runs `npm run build` to create the `dist/` folder
3. **Deploy job** → Deploys `dist/` to GitHub Pages
4. **Live site** → Updates immediately at https://vinayak-chiluka.me

## ⚙️ Required GitHub Settings

### 1. Enable GitHub Pages

Go to **Repository Settings** → **Pages**:

- **Source**: Select "GitHub Actions"
- **Branch**: Not applicable (uses Actions)

### 2. Verify CNAME

The `CNAME` file contains:
```
vinayak-chiluka.me
```

This ensures your custom domain is used.

### 3. Check DNS (if not already set)

Your domain DNS should have:
- **A Records**: Point to GitHub Pages IPs
  - 185.199.108.153
  - 185.199.109.153
  - 185.199.110.153
  - 185.199.111.153
- **OR CNAME**: Point `www` or subdomain to `chilukavinayak.github.io`

## 📝 Manual Deployment (if needed)

```bash
npm run build
# Then manually deploy dist/ folder to GitHub Pages
```

## 🔍 Troubleshooting

### Workflow not triggering?
- Check if GitHub Actions is enabled in repo settings
- Verify the workflow file is in `.github/workflows/deploy.yml`

### Domain not working?
- Check CNAME file exists in root
- Verify DNS settings with your domain provider
- Check GitHub Pages settings for custom domain

### Build fails?
- Check build script in `package.json`
- Ensure all files are committed before push
