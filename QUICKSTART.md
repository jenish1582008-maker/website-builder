# Quick Start Guide

## 🚀 Get Started in 3 Steps

### Step 1: Install Dependencies (1 minute)

```bash
npm install
```

### Step 2: Start Development Server (30 seconds)

```bash
npm run dev
```

Open your browser: **http://localhost:3000**

### Step 3: Create Your First Website (5 minutes)

1. Click **"Portfolio"** button in the left sidebar
2. Toggle **"✏️ Edit"** button to enter edit mode
3. Click on text to edit it
4. Click color inputs to change colors
5. Click **"Delete"** button to remove sections
6. Click **"📥 Download HTML"** to download your website

That's it! You have a working website! 🎉

---

## 📚 What's Included?

### Templates (Get Started Instantly)
- **Portfolio** - Perfect for creatives and freelancers
- **Business** - For service providers
- **Blog** - For content creators

### Elements (Build Anything)
- **Header** - Navigation and branding
- **Hero Section** - Eye-catching banner
- **Content Section** - Text and descriptions
- **Contact Form** - Get customer inquiries

### Features
- ✅ Edit text, colors, and styling
- ✅ Add/remove elements
- ✅ Live preview
- ✅ Download as HTML file
- ✅ Ready for GitHub Pages

---

## 🔧 Available Commands

| Command | What it does |
|---------|-------------|
| `npm run dev` | Start development server (http://localhost:3000) |
| `npm run build` | Build for production |
| `npm start` | Run production build |
| `npm run lint` | Check code quality |

---

## 📁 Where to Make Changes?

### Add More Templates
File: `app/data/templates.js`
- Add new objects to the TEMPLATES constant

### Add More Element Types
Files: 
- `app/data/templates.js` - Add type definition
- `app/components/ElementRenderer.js` - Add rendering logic
- `app/components/Sidebar.js` - Add button to add element

### Change Styling
Files:
- `app/globals.css` - Global styles
- Individual components use Tailwind CSS classes

### Add Features
- State management: `app/store/editorStore.js` (uses Zustand)
- Components: `app/components/`
- Pages: `app/page.js`

---

## 🌐 Deploy Your Website

### Deploy to Vercel (Recommended, Free, 2 minutes)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repo
5. Click "Deploy"
6. Get live URL in 1 minute

### Deploy to GitHub Pages (Free, 5 minutes)

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/repo-name.git
git branch -M main
git push -u origin main
```

Then enable GitHub Pages in repository settings.

---

## 💡 Usage Tips

### Edit Colors Quickly
1. Click Edit button
2. Hover over a section
3. Click the color input fields
4. Select new colors from color picker

### Change Text
1. Click Edit button
2. Click on any text
3. Type new text
4. Changes appear instantly

### Rearrange Sections
1. Currently via Delete + Re-add (Drag-drop coming soon)
2. Delete unwanted section
3. Add new section in desired position

### Export Your Website
1. Click "📥 Download HTML"
2. Browser downloads `index.html`
3. Open HTML file in any browser
4. Ready to upload anywhere (GitHub, Netlify, etc.)

---

## 🎯 Next Steps

After creating your first site:

1. **Try Different Templates** - Each offers different layouts
2. **Customize Colors** - Make it match your brand
3. **Download HTML** - Get your files
4. **Publish** - Deploy to the web
5. **Share** - Send link to others

---

## 🆘 Need Help?

### Website Builder Won't Start?
```bash
npm install
npm run dev
```

### Can't Edit Content?
- Make sure "✏️ Edit" button shows you're in edit mode
- Hover over sections to see delete buttons

### Export Not Working?
- Try using Chrome or Firefox
- Check browser console for errors

### Need More Features?
- Check `README.md` for roadmap
- Explore `app/components/` to add custom elements
- Ask in GitHub issues

---

## 📞 Support

- 📖 Full Docs: See `README.md`
- 🔧 Setup Help: See `SETUP.md`
- 💬 Issues: Create GitHub issue
- 📧 Email: Your support email

---

**Enjoy building! Your website builder is ready to go. 🚀**

Start with the **Portfolio** template and customize it to your needs!
