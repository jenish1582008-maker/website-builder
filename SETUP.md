# Setup Instructions

## Prerequisites

Make sure you have the following installed:
- Node.js 18.0 or higher
- npm (comes with Node.js)
- Git

## Installation Steps

### 1. Install Dependencies

```bash
cd "c:\Users\jenis\Desktop\JENISH\Website\04"
npm install
```

This will install all required packages including:
- Next.js
- React
- Zustand (state management)
- Tailwind CSS
- React DnD (drag-and-drop)

### 2. Run Development Server

```bash
npm run dev
```

The application will start at `http://localhost:3000`

### 3. Build for Production

```bash
npm run build
npm start
```

## Project Setup Complete ✅

Your website builder is ready to use!

### What You Have:

1. **Drag-and-Drop Editor** - Fully functional UI for editing
2. **Pre-built Templates** - 3 starter templates (Portfolio, Business, Blog)
3. **Element System** - Header, Hero, Section, Contact Form components
4. **Live Preview** - Real-time editing with Edit/Preview modes
5. **HTML Export** - Download complete website files
6. **GitHub Integration Ready** - Deploy workflows configured

### Quick Start:

1. Open http://localhost:3000
2. Choose a template or start blank
3. Add elements from the left sidebar
4. Switch to Edit mode to customize colors and text
5. Click "Download HTML" to export your website
6. Or use GitHub to publish

## Features Explained

### Templates
- **Blank** - Start from scratch
- **Portfolio** - Perfect for showcasing work
- **Business** - For business/service websites
- **Blog** - For content-focused sites

### Elements
- **Header** - Top navigation section
- **Hero** - Large eye-catching banner
- **Section** - Content sections with title and description
- **Contact Form** - Email contact section

### Editing
- Switch between **Edit** (customize) and **Preview** (view) modes
- Edit text, colors, and layout
- Delete elements with the Delete button
- All changes are instant

### Export
- Click **Download HTML** to get:
  - Complete HTML file with all content
  - Inline CSS with styling
  - Ready to upload to hosting
  - Compatible with GitHub Pages

## Deployment Options

### Option 1: GitHub Pages (Free)

```bash
# Initialize git
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/website-builder.git
git branch -M main
git push -u origin main
```

Then enable GitHub Pages in your repository settings.

### Option 2: Vercel (Free & Easy)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Click Deploy
5. Get live URL immediately

### Option 3: Netlify (Free & Easy)

1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Connect GitHub repository
4. Auto-deploys on every push

## Troubleshooting

### Port Already in Use
```bash
# Use different port
npm run dev -- -p 3001
```

### Dependencies Not Installing
```bash
# Clear cache and reinstall
rm -r node_modules package-lock.json
npm install
```

### Build Errors
```bash
# Clear Next.js cache
rm -r .next
npm run build
```

## Next Steps

### To Add More Features:

1. **User Authentication** - Add NextAuth.js
2. **Database** - Add Firebase or PostgreSQL
3. **More Templates** - Add more in `app/data/templates.js`
4. **More Elements** - Create new element types in components
5. **AI Features** - Add OpenAI integration for auto-generation

## File Structure

```
website-builder/
├── app/
│   ├── components/     # React components
│   ├── store/          # Zustand state
│   ├── data/           # Templates
│   ├── globals.css     # Styles
│   ├── layout.js       # Root layout
│   └── page.js         # Home page
├── public/             # Static files
├── .github/            # GitHub workflows
├── package.json        # Dependencies
├── next.config.js      # Next.js config
├── tailwind.config.js  # Tailwind config
└── README.md           # Documentation
```

## Support

For issues or questions:
1. Check README.md
2. Review code comments
3. Check Next.js docs: https://nextjs.org/docs
4. Check Tailwind docs: https://tailwindcss.com/docs

## Happy Building! 🚀

You now have a fully functional website builder. Start customizing and adding features!
