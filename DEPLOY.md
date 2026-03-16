# Deployment Guide

## Quick Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
cd dist
vercel --prod
```

## Deploy to Netlify

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
cd dist
netlify deploy --prod --dir=.
```

## Manual Upload (Any Static Host)

1. Upload all files from `dist/` folder to your web server
2. Ensure `index.html` is at the root
3. Verify `_next/` folder is uploaded (contains JS/CSS chunks)

## File Structure

```
dist/
├── index.html              # Main page
├── 404.html                # Error page
├── _next/                  # Next.js chunks (required)
├── articles/               # PDF articles
├── cv/                     # Resume/CV PDFs
├── images/                 # Static images
├── _next/static/           # Static assets
├── manifest.json           # PWA manifest
├── robots.txt              # SEO
└── sitemap.xml             # SEO
```

## Pre-Deployment Checklist

- [ ] All PDFs in `articles/` folder
- [ ] All CVs in `cv/` folder
- [ ] `index.html` exists at root
- [ ] `_next/` folder present
- [ ] Total size ~8.5MB

## Post-Deployment Verification

Test these URLs:
- `/` - Homepage
- `/articles/` - Should list PDFs
- `/cv/` - Should list CV PDFs
- `/404` - Custom 404 page

## Domain Configuration

Add `CNAME` file for custom domain:
```
echo "your-domain.com" > CNAME
```

Or configure in hosting dashboard.
