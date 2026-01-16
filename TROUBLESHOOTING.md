# Troubleshooting Guide

## Installation Issues

### Issue: "npm: command not found"

**Cause:** Node.js is not installed

**Solution:**
1. Download Node.js from https://nodejs.org (LTS version)
2. Install Node.js
3. Restart your terminal/PowerShell
4. Run `npm --version` to verify

---

### Issue: "npx: command not found"

**Cause:** npm not properly installed

**Solution:**
```bash
# Update npm
npm install -g npm

# Try again
npm install
```

---

### Issue: "Port 3000 already in use"

**Cause:** Another application is using port 3000

**Solution:**
```bash
# Use different port
npm run dev -- -p 3001

# Or kill the process
# Windows PowerShell:
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux:
lsof -i :3000
kill -9 <PID>
```

---

## Dependency Issues

### Issue: Package installation fails

**Cause:** Network issue or dependency conflict

**Solution:**
```bash
# Clear cache
npm cache clean --force

# Delete node_modules
rm -r node_modules package-lock.json

# Reinstall
npm install
```

---

### Issue: "Module not found" error

**Cause:** Missing or incorrect import path

**Solution:**
1. Check spelling of imports
2. Verify file exists at that path
3. Use correct relative path: `../` or `@/`
4. Restart development server

---

## Development Server Issues

### Issue: Page shows "Cannot GET /"

**Cause:** Development server not running or Next.js not compiling

**Solution:**
```bash
# Stop server (Ctrl+C)
# Restart
npm run dev

# If still failing, clear cache:
rm -r .next
npm run dev
```

---

### Issue: Changes not reflecting in browser

**Cause:** Hot reload not working

**Solution:**
1. Hard refresh: `Ctrl+Shift+R` (Chrome) or `Cmd+Shift+R` (Mac)
2. Clear browser cache
3. Close developer tools
4. Restart development server

---

### Issue: Page is very slow

**Cause:** Too many elements, poor optimization

**Solution:**
1. Reduce number of elements (aim for <10)
2. Clear browser cache
3. Close unused tabs
4. Restart development server
5. Check browser console for errors

---

## Editing Issues

### Issue: Can't edit text

**Cause:** Not in Edit mode

**Solution:**
1. Click "✏️ Edit" button at top right
2. Button should show "👁️ Preview" instead
3. Try again

---

### Issue: Colors don't change

**Cause:** Color picker not opening or not saved

**Solution:**
1. Make sure you're in Edit mode
2. Refresh page
3. Try using hex color code directly
4. Check browser console for errors

---

### Issue: Delete button doesn't appear

**Cause:** Not hovering correctly or Edit mode not active

**Solution:**
1. Hover slowly over the section
2. Make sure "✏️ Edit" button is active
3. Try clicking the section first
4. Refresh page

---

## Export Issues

### Issue: Download button doesn't work

**Cause:** Browser blocking download or JavaScript disabled

**Solution:**
1. Check if downloads are blocked in browser
2. Allow downloads from localhost
3. Try different browser
4. Check browser console for errors

---

### Issue: Downloaded HTML looks broken

**Cause:** Missing styles or broken links

**Solution:**
1. Open HTML in browser (double-click)
2. Check if text appears (styles might not load)
3. All styles are inline, so it should work
4. Try in different browser

---

### Issue: Colors wrong in downloaded file

**Cause:** Color format issue

**Solution:**
1. Ensure you selected colors properly
2. Try hex codes instead of RGB
3. Re-download the file
4. Check browser console for errors

---

## Browser Issues

### Issue: Works in Chrome but not Firefox/Safari

**Cause:** Browser compatibility issue

**Solution:**
1. Update to latest browser version
2. Clear browser cache
3. Disable browser extensions
4. Try in another browser
5. Check console for specific errors

---

### Issue: Mobile view doesn't work

**Cause:** Responsive design not fully implemented

**Solution:**
1. Try on actual mobile device
2. Use Chrome DevTools mobile view
3. Current version has desktop focus
4. Mobile version coming in Phase 2

---

## GitHub Deployment Issues

### Issue: GitHub workflow failing

**Cause:** Workflow configuration error

**Solution:**
1. Check `.github/workflows/deploy.yml` file
2. Verify Node.js version
3. Check build output for errors
4. Enable GitHub Actions in repository settings

---

### Issue: Can't push to GitHub

**Cause:** Git not configured or authentication failing

**Solution:**
```bash
# Configure git
git config --global user.name "Your Name"
git config --global user.email "your@email.com"

# Set up SSH or HTTPS
git remote -v  # Check current URL
git remote set-url origin <new-url>

# Try again
git push origin main
```

---

## Data/State Issues

### Issue: Changes disappear after refresh

**Cause:** Data only stored in memory (no database yet)

**Solution:**
1. Download HTML before closing
2. Phase 2 will add database storage
3. For now, export your work
4. All data is lost on page refresh

---

### Issue: Can't add more elements

**Cause:** JavaScript state management issue

**Solution:**
1. Refresh page
2. Try again with fewer elements
3. Check browser console
4. Restart development server

---

## Performance Issues

### Issue: Editor is laggy/slow

**Cause:** Too many elements or browser issue

**Solution:**
1. Close unnecessary browser tabs
2. Reduce number of elements
3. Restart browser
4. Try with smaller HTML file
5. Update browser to latest version

---

### Issue: Takes forever to download

**Cause:** Large file size or network issue

**Solution:**
1. Check internet speed
2. Reduce number of elements
3. Remove large images
4. Try different network
5. Try different browser

---

## State Management Issues

### Issue: "Cannot read property of undefined"

**Cause:** Zustand store not initialized

**Solution:**
1. Refresh page
2. Clear browser cache
3. Check that store is imported correctly
4. Restart development server

---

## CSS/Styling Issues

### Issue: Styles look different than expected

**Cause:** Tailwind CSS not compiling or CSS conflict

**Solution:**
1. Rebuild Tailwind: `npm run dev`
2. Check `globals.css` for conflicts
3. Check browser inspector (F12)
4. Clear Tailwind cache: `rm -r .next`

---

### Issue: Custom colors don't apply

**Cause:** Inline styles being overridden

**Solution:**
1. Check that color is being passed correctly
2. Verify hex color format (#RRGGBB)
3. Ensure Edit mode is active
4. Try refreshing page

---

## Database/Backend Issues (Phase 2+)

### Issue: Can't save projects

**Cause:** Database not connected

**Solution:**
1. Check database connection string
2. Verify `.env.local` file exists
3. Check database service status
4. Review backend logs

---

### Issue: Login not working

**Cause:** Authentication service issue

**Solution:**
1. Check NextAuth configuration
2. Verify OAuth credentials
3. Check network tab in DevTools
4. Review application logs

---

## Terminal Commands Reference

### Useful Commands

```bash
# Development
npm run dev                    # Start dev server
npm run build                  # Build for production
npm start                      # Run production build
npm run lint                   # Check code quality

# Debugging
npm run dev -- --debug         # Debug mode
npm run build -- --profile     # Profile build

# Cleanup
rm -r node_modules             # Remove dependencies
rm -r .next                    # Clear Next.js cache
npm cache clean --force        # Clear npm cache

# Git commands
git status                     # Check changes
git add .                      # Stage all changes
git commit -m "message"        # Commit changes
git push origin main           # Push to GitHub
```

---

## Browser Console Commands

Open browser console (F12 → Console tab) and try:

```javascript
// Check if React is loaded
console.log(typeof React)

// Check Zustand store
import { useEditorStore } from '@/app/store/editorStore'
console.log(useEditorStore.getState())

// Check elements array
const state = useEditorStore.getState()
console.log(state.elements)
```

---

## Getting Help

### Check These First
1. **This guide** - Most issues covered
2. **Browser console** - F12 → Console tab
3. **Network tab** - See failed requests
4. **GitHub issues** - Search for similar problems

### Ask for Help
1. **Stack Overflow** - Tag: next.js, react
2. **GitHub Issues** - Create detailed issue
3. **Discord** - Next.js community
4. **Reddit** - r/reactjs, r/webdev

### Provide Information
When asking for help, include:
1. **Error message** - Exact error text
2. **Steps to reproduce** - How to cause issue
3. **Environment** - OS, Node version, browser
4. **Screenshots** - Visual of problem
5. **Code snippet** - Relevant code

---

## Emergency Quick Fixes

### Absolute Last Resort

```bash
# Nuclear option: Complete reset
rm -r node_modules
rm package-lock.json
rm -r .next
npm cache clean --force
npm install
npm run dev
```

If that doesn't work:
1. Delete entire folder
2. Clone from GitHub again
3. Follow installation steps fresh

---

## Still Stuck?

1. **Read the docs** - QUICKSTART.md, README.md, SETUP.md
2. **Check DEMO.md** - Visual guide to features
3. **Review code comments** - Files have helpful comments
4. **Search GitHub** - Check existing issues
5. **Post issue** - Detailed description with steps

Remember: Every error is solvable. Google the error message first!

---

**Last Updated:** January 2026
**Status:** V0.1.0 MVP
**Support:** Open source community supported
