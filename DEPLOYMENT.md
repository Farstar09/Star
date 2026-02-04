# Deployment Guide for Star Website

This guide will help you deploy the Star developer website to production.

## GitHub Pages (Current Setup)

The website is configured to deploy automatically to GitHub Pages at `https://farstar09.github.io/Star`.

### How It Works

1. **Automatic Deployment**: Every push to the `main` branch triggers a GitHub Actions workflow
2. **Build Process**: The workflow builds the Next.js app as a static export
3. **Deployment**: The static files are deployed to GitHub Pages

### First-Time Setup

If you haven't deployed to GitHub Pages yet, follow these steps:

1. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click "Settings" → "Pages" (in the left sidebar)
   - Under "Build and deployment" → "Source", select "GitHub Actions"
   - Click "Save"

2. **Trigger Deployment**
   - Make a commit to the `main` branch (or merge a PR)
   - The workflow will run automatically
   - Check the "Actions" tab to monitor the deployment progress

3. **Access Your Site**
   - Once deployed, visit `https://farstar09.github.io/Star`
   - Note: The first deployment may take a few minutes

### Configuration Details

The GitHub Pages deployment uses:
- **Workflow**: `.github/workflows/deploy.yml`
- **Base Path**: `/Star` (configured in `next.config.js`)
- **Output**: Static export to `out/` directory
- **Node Version**: 20.x

### Updating Content

To update the live site:
1. Make your changes locally
2. Commit and push to `main` branch
3. The workflow will automatically rebuild and redeploy

### Monitoring Deployments

- View workflow runs in the "Actions" tab
- Check deployment status in Settings → Pages
- See deployment history and URLs

### Troubleshooting

**Site shows 404**
- Verify GitHub Pages is enabled in repository Settings → Pages
- Ensure "Source" is set to "GitHub Actions"
- Check that the workflow completed successfully in the Actions tab

**Build Fails**
- Check the Actions tab for error logs
- Verify `npm run build` works locally
- Ensure all dependencies are listed in `package.json`

**Styles/Assets Not Loading**
- The site uses `/Star` as the base path
- All asset paths are automatically prefixed by Next.js
- Check browser console for 404 errors

## Quick Deploy to Vercel (Recommended)

Vercel is the easiest and fastest way to deploy Next.js applications.

### Steps:

1. **Push to GitHub** (already done)
   - Your code is already in the repository

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with your GitHub account
   - Click "Add New Project"
   - Import the `Farstar09/Star` repository

3. **Configure Project**
   - Framework Preset: Next.js (auto-detected)
   - Root Directory: `./`
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)

4. **Deploy**
   - Click "Deploy"
   - Vercel will build and deploy your site
   - You'll get a production URL like `star.vercel.app`

5. **Custom Domain**
   - In Vercel dashboard, go to your project
   - Click "Settings" → "Domains"
   - Add `builtbystar.com`
   - Follow DNS configuration instructions

## Environment Variables

Currently, no environment variables are required. If you add backend functionality later:

1. Create `.env.local` file (already in .gitignore)
2. Add your variables
3. In Vercel dashboard, add them under "Settings" → "Environment Variables"

## Build Verification

Before deploying, always verify the build works:

```bash
npm run build
npm run start
```

Visit `http://localhost:3000` to test the production build locally.

## Performance Optimization Checklist

- ✅ Static generation for all pages
- ✅ Optimized images (Next.js Image component ready)
- ✅ Minified CSS and JavaScript
- ✅ Font optimization (Google Fonts with next/font)
- ✅ Code splitting (automatic with Next.js)

## Post-Deployment

After deployment:

1. **Test all sections**: Hero, Services, Portfolio, Blog, Contact
2. **Test mobile responsiveness**
3. **Test form submission** (update form handler if needed)
4. **Verify SEO meta tags** in browser dev tools
5. **Check page load speed** with Lighthouse

## Updating Content

To update content after deployment:

1. Edit the relevant component files
2. Commit and push to GitHub
3. Vercel will automatically redeploy

## Custom Domain DNS Configuration

For `builtbystar.com`:

### A Records (for root domain):
```
Type: A
Name: @
Value: 76.76.21.21
```

### CNAME Records (for www):
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

Wait 24-48 hours for DNS propagation.

## Troubleshooting

### Build Fails
- Check `npm run build` locally first
- Review build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`

### Images Not Loading
- Verify image paths are correct
- Check `next.config.js` remotePatterns
- Ensure images are in `public/` directory

### Styles Not Applied
- Clear browser cache
- Verify Tailwind CSS configuration
- Check build output for CSS errors

## Support

For deployment issues:
- Vercel Documentation: https://vercel.com/docs
- Next.js Documentation: https://nextjs.org/docs

---

Built with 💜 by Star
