# 🚀 Deployment Checklist & Guide

## Pre-Deployment Checklist

### Code Quality
- [ ] No console errors: Run `npm run dev` and check browser console
- [ ] No linting errors: Run `npm run lint`
- [ ] All files saved: Save all open files
- [ ] No TODO comments left: Search for "TODO" in code
- [ ] Code is formatted: No weird spacing or indentation

### Functionality Testing
- [ ] Add elements works
- [ ] Edit text works
- [ ] Change colors works
- [ ] Delete elements works
- [ ] Load templates works
- [ ] Download HTML works
- [ ] Downloaded HTML opens in browser
- [ ] Refresh page doesn't break anything
- [ ] No infinite loops or crashes

### Documentation
- [ ] README.md is complete
- [ ] QUICKSTART.md is accurate
- [ ] All docs are proofread
- [ ] Links in docs work
- [ ] Code examples are correct

### Git Repository
- [ ] All files are staged: `git add .`
- [ ] Meaningful commit message
- [ ] GitHub repository is public (if desired)
- [ ] .gitignore is configured
- [ ] .env.example includes all vars

---

## Deployment Option 1: Vercel (Recommended)

### Why Vercel?
- ✅ Built for Next.js
- ✅ Free tier generous
- ✅ Auto-deploys on push
- ✅ Preview deployments
- ✅ Lightning fast CDN
- ✅ Automatic HTTPS

### Step-by-Step Deployment

#### Step 1: Push to GitHub
```bash
# Initialize git if not done
git init

# Add all files
git add .

# Commit with message
git commit -m "Website builder MVP - ready for deployment"

# Add GitHub remote
git remote add origin https://github.com/YOUR_USERNAME/website-builder.git

# Set main branch
git branch -M main

# Push to GitHub
git push -u origin main
```

#### Step 2: Create Vercel Account
1. Go to https://vercel.com
2. Click "Sign up"
3. Choose "Continue with GitHub"
4. Authorize Vercel to access GitHub
5. Create account

#### Step 3: Import Project
1. After signup, you'll see dashboard
2. Click "Add New..." → "Project"
3. Select GitHub repository: "website-builder"
4. Accept default settings
5. Click "Deploy"

#### Step 4: Wait for Deployment
- Vercel will automatically build your project
- Takes ~1-2 minutes
- You'll see build logs in real-time
- Once complete, you get live URL

#### Step 5: Visit Your Site
```
Your live URL will be something like:
https://website-builder-7j2k.vercel.app

Share this link with anyone!
```

### Post-Deployment Vercel

**Test your deployment:**
- [ ] Site loads without errors
- [ ] All features work
- [ ] Download HTML still works
- [ ] Performance is good
- [ ] Mobile view works

**Share your deployment:**
- Copy the URL
- Share on Twitter/LinkedIn
- Post on GitHub
- Send to friends
- Submit to Product Hunt

---

## Deployment Option 2: GitHub Pages

### Why GitHub Pages?
- ✅ Completely free
- ✅ GitHub handles hosting
- ✅ Custom domain support
- ✅ HTTPS included
- ✅ Great for portfolios

### Step-by-Step Deployment

#### Step 1: Push to GitHub
```bash
git init
git add .
git commit -m "Website builder"
git remote add origin https://github.com/YOUR_USERNAME/website-builder.git
git branch -M main
git push -u origin main
```

#### Step 2: Configure GitHub Actions
We already included `.github/workflows/deploy.yml`

#### Step 3: Enable GitHub Pages
1. Go to your GitHub repository
2. Settings → Pages
3. Source: "GitHub Actions"
4. Click "Configure"
5. Select "Next.js" workflow (if prompted)

#### Step 4: Wait for Deployment
1. Go to Actions tab
2. Watch the workflow run
3. Once completed, check your GitHub Pages URL
4. Should be: `https://YOUR_USERNAME.github.io/website-builder/`

#### Step 5: Custom Domain (Optional)
1. Buy domain (Namecheap, GoDaddy, etc.)
2. GitHub Settings → Pages
3. Add custom domain
4. Update DNS records (follow GitHub instructions)
5. Wait for DNS propagation (24-48 hours)

---

## Deployment Option 3: Netlify

### Why Netlify?
- ✅ Free tier
- ✅ Easy GitHub integration
- ✅ Preview deployments
- ✅ Custom domain support
- ✅ Good performance

### Step-by-Step Deployment

#### Step 1: Push to GitHub (same as above)

#### Step 2: Create Netlify Account
1. Go to https://netlify.com
2. Click "Sign up"
3. Choose "GitHub"
4. Authorize Netlify
5. Create account

#### Step 3: Connect Repository
1. Click "Add new site"
2. Select "Import an existing project"
3. Choose GitHub provider
4. Select your "website-builder" repo
5. Click "Connect account"

#### Step 4: Configure Build
- Build command: `npm run build`
- Publish directory: `.next`
- Leave other settings default
- Click "Deploy site"

#### Step 5: Wait for Deployment
- Netlify builds and deploys automatically
- Takes ~2-3 minutes
- You'll get a live URL like: `https://zealous-mcnulty-abc123.netlify.app`

---

## Post-Deployment Setup

### Add Custom Domain

**For any platform (Vercel, GitHub Pages, Netlify):**

1. Buy a domain (recommended registrars):
   - Namecheap (cheap)
   - GoDaddy (popular)
   - Domain.com (easy)

2. Update DNS records:
   - Log into domain registrar
   - Add CNAME record pointing to deployment URL
   - Or add A record (exact steps vary by platform)

3. Configure hosting platform:
   - Enter domain in settings
   - Platform provides DNS settings
   - Wait 24-48 hours for DNS propagation

4. Test domain:
   - Visit yourdomain.com
   - Should load your website builder
   - Might take 24 hours to work

### Add Google Analytics (Optional)

1. Go to https://analytics.google.com
2. Click "Create property"
3. Enter your domain
4. Get tracking ID
5. Add to code:
   ```html
   <!-- In app/layout.js <head> -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXX"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-XXXXX');
   </script>
   ```

### Add Meta Tags (SEO)

Edit `app/layout.js`:
```javascript
export const metadata = {
  title: 'Website Builder - Create Sites Without Coding',
  description: 'Easy drag-and-drop website builder with templates. Export HTML/CSS. No coding required.',
  keywords: 'website builder, drag drop, templates, HTML export',
  author: 'Your Name',
  openGraph: {
    title: 'Website Builder',
    description: 'Create beautiful websites without coding',
    image: 'https://yoursite.com/og-image.png',
  },
};
```

---

## Continuous Deployment Setup

### Auto-Deploy on Push (Already Configured!)

```
Local Changes
    ↓
git commit -m "message"
    ↓
git push origin main
    ↓
GitHub receives push
    ↓
(Vercel/Netlify) Webhook triggered
    ↓
Automatic build starts
    ↓
Tests run
    ↓
Auto-deploy to production
    ↓
Live in 1-3 minutes
```

No manual deployment needed after first setup!

---

## Monitoring & Maintenance

### Weekly Checks
- [ ] Site is loading
- [ ] Features work
- [ ] No errors in console
- [ ] Performance is good
- [ ] Check analytics if enabled

### Monthly Tasks
- [ ] Review error logs
- [ ] Check uptime (if using status page)
- [ ] Update dependencies: `npm update`
- [ ] Check for security vulnerabilities: `npm audit`
- [ ] Backup any important data

### Quarterly Tasks
- [ ] Major dependency updates
- [ ] Code review
- [ ] Performance optimization
- [ ] User feedback review
- [ ] Plan new features

---

## Troubleshooting Deployment

### Build Fails on Vercel/Netlify

**Problem:** Red X on deployment
**Solution:**
1. Check build logs (click on failed deployment)
2. Look for errors in output
3. Common fixes:
   ```bash
   # Clear dependencies
   rm -r node_modules
   npm install
   
   # Clear build cache
   rm -r .next
   npm run build
   
   # Push again
   git push origin main
   ```

### Site Shows Old Version

**Problem:** You pushed changes but site still shows old version
**Solution:**
1. Clear browser cache: `Ctrl+Shift+Delete`
2. Hard refresh: `Ctrl+Shift+R`
3. Wait for deployment to complete (check Actions/Deployments)
4. Clear CDN cache (if using custom domain)

### Download Not Working on Production

**Problem:** Download HTML doesn't work on live site
**Solution:**
- Likely browser security issue
- Try different browser
- Check browser console for errors
- Might need to serve over HTTPS (most platforms do this)

### Environment Variables Not Working

**Problem:** App uses env vars but they're not set
**Solution:**
1. Create `.env.local` file locally (copy from `.env.example`)
2. For Vercel/Netlify:
   - Settings → Environment Variables
   - Add each variable
   - Redeploy

---

## Performance Optimization Pre-Deployment

### Check Bundle Size
```bash
npm run build
# Output shows bundle size breakdown
```

### Lighthouse Audit
```bash
# Test locally
npm run dev
# Then:
1. Open http://localhost:3000
2. F12 → Lighthouse tab
3. Click "Analyze page load"
```

### Optimize Images
- Use Next.js Image component
- Compress images before upload
- Use modern formats (WebP)

### Minify Code
```bash
# Already done by Next.js in production build
npm run build
```

---

## Security Checklist Pre-Launch

- [ ] No API keys in code
- [ ] No passwords in files
- [ ] All env vars in .env.example only
- [ ] No console.log() debug statements
- [ ] HTTPS enabled (automatic on Vercel/Netlify)
- [ ] No eval() or dangerous functions
- [ ] Input validation for any forms
- [ ] Check for XSS vulnerabilities

---

## Launch Announcement

### Template Announcement Post

```
🎉 Excited to announce Website Builder!

A drag-and-drop website builder that lets you create beautiful websites without any code.

Features:
• Drag-and-drop editor
• Pre-built templates
• Export as HTML
• Live preview

Try it now: [YOUR_URL]

#WebDevelopment #NoCode #SaaS #JavaScript
```

### Where to Announce
1. **Twitter/X** - Tech community
2. **Product Hunt** - Get featured
3. **GitHub** - Link to repo
4. **Reddit** - r/webdev, r/reactjs
5. **Hacker News** - Show HN
6. **Dev.to** - Write blog post
7. **Email** - Send to contacts

---

## Cost Analysis

### Hosting Costs

| Platform | Cost/Month | Features |
|----------|-----------|----------|
| Vercel Free | $0 | Perfect for MVP |
| Vercel Pro | $20 | Advanced analytics |
| GitHub Pages | $0 | Basic hosting |
| Netlify Free | $0 | Good alternative |
| Netlify Pro | $19 | More bandwidth |
| Custom Server | $5-50+ | More control |

**Recommendation:** Start with Vercel Free ($0)

### Domain Costs

| Registrar | .com/year | Plus features |
|-----------|-----------|---------------|
| Namecheap | $8.88 | Cheap, reliable |
| GoDaddy | $14.99 | Popular, support |
| Domain.com | $9.99 | Easy setup |
| Google Domains | $12 | Simple, integrated |

**Recommendation:** Namecheap ($9/year)

### Total Monthly Cost (Minimal)
- Vercel: $0
- Domain: $1/month (roughly)
- **Total: ~$1/month**

---

## Next Steps After Deployment

### Week 1
- [ ] Share with 5 friends
- [ ] Get feedback
- [ ] Fix any bugs
- [ ] Monitor performance

### Week 2-4
- [ ] Announce on social media
- [ ] Submit to Product Hunt
- [ ] Write blog post
- [ ] Build community

### Month 2+
- [ ] Gather user feedback
- [ ] Plan Phase 2 features
- [ ] Start development
- [ ] Build email list

---

## Quick Commands Reference

```bash
# Development
npm run dev

# Production Build
npm run build
npm start

# Deployment
git add .
git commit -m "message"
git push origin main

# Cleanup
npm cache clean --force
rm -r node_modules
npm install
```

---

## Support & Help

- **Vercel Docs:** https://vercel.com/docs
- **Next.js Deployment:** https://nextjs.org/docs/deployment
- **GitHub Pages:** https://pages.github.com
- **Netlify Docs:** https://docs.netlify.com

---

## Deployment Complete! 🎉

You now have your website builder:
- ✅ Live on the internet
- ✅ Accessible to the world
- ✅ Auto-deploying on changes
- ✅ Professional infrastructure
- ✅ Ready for users

**What's next?**
- Share with users
- Gather feedback
- Plan Phase 2
- Build your business

---

**Deployment Guide Version:** 1.0
**Last Updated:** January 2026
**Status:** Ready for Production
