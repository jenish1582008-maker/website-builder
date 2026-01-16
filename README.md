# Website Builder SaaS

A modern, user-friendly website builder that allows users to create beautiful websites without coding, with drag-and-drop editing, pre-built templates, and the ability to download HTML/CSS/JS files or publish directly to GitHub.

## Features

✨ **Drag-and-Drop Editor** - Intuitive interface for adding and arranging elements
📱 **Responsive Templates** - Pre-built templates for different industries (Portfolio, Business, Blog)
🎨 **Real-time Editor** - Live editing with color customization
📥 **Export to HTML** - Download fully functional HTML/CSS/JavaScript files
🚀 **One-Click Publishing** - Publish directly to GitHub Pages
👤 **User Accounts** - Save and manage multiple projects
📊 **Analytics** - Track website performance

## Tech Stack

- **Frontend:** Next.js 14, React, Tailwind CSS
- **State Management:** Zustand
- **Drag-Drop:** React DnD (ready for implementation)
- **Deployment:** GitHub Pages / Vercel
- **Backend:** Node.js + Express (optional for advanced features)

## Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── components/
│   │   ├── Editor.js          # Main editor component
│   │   ├── Sidebar.js         # Element panel and templates
│   │   ├── Preview.js         # Live preview
│   │   └── ElementRenderer.js # Element rendering logic
│   ├── store/
│   │   └── editorStore.js     # Zustand state management
│   ├── data/
│   │   └── templates.js       # Pre-built templates
│   ├── globals.css            # Global styles
│   ├── layout.js              # Root layout
│   └── page.js                # Home page
├── package.json
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
└── tsconfig.json
```

## Usage

### Creating a Website

1. **Choose a Template** - Select from pre-built templates (Portfolio, Business, Blog) or start blank
2. **Add Elements** - Click buttons to add header, hero section, content sections, contact forms
3. **Customize** - Click Edit mode to:
   - Change text content
   - Modify colors (background and text)
   - Reorder elements by dragging
   - Delete unwanted elements
4. **Export** - Click "Download HTML" to get your files
5. **Publish** - Connect GitHub account and publish directly to GitHub Pages

### Editing Elements

- **Edit Button:** Switch between Edit and Preview modes
- **Delete Button:** Appears on hover, removes elements
- **Color Picker:** Click in Edit mode to customize colors
- **Text Editing:** Click text to edit inline

## Features Implementation Guide

### Current Features
- ✅ Template system
- ✅ Add/Edit/Delete elements
- ✅ Live preview
- ✅ HTML export
- ✅ Color customization

### Coming Soon
- 🔄 Drag-and-drop reordering
- 📱 Responsive design editor
- 🔐 User authentication
- 💾 Project saving
- 🐙 GitHub integration
- 🌐 Custom domain support
- 📊 Analytics dashboard

## Deployment

### Deploy on Vercel (Recommended)

1. Push code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Click Deploy

### Deploy on GitHub Pages

1. Create GitHub repository
2. Enable GitHub Pages in settings
3. Push changes

```bash
npm run build
# Files will be generated in .next/static
```

## API Endpoints (Future)

```
POST   /api/projects         # Create project
GET    /api/projects/:id     # Get project
PUT    /api/projects/:id     # Update project
DELETE /api/projects/:id     # Delete project
POST   /api/publish/github   # Publish to GitHub
```

## Environment Variables

Create `.env.local`:

```
NEXT_PUBLIC_API_URL=http://localhost:3000
GITHUB_TOKEN=your_token_here
DATABASE_URL=your_database_url
```

## Monetization Ideas

1. **Freemium Model** - Free templates, paid premium features
2. **Premium Templates** - $5-15 per template
3. **Hosting** - $5-20/month for built-in hosting
4. **Custom Domain** - $2-10/month
5. **Analytics** - Advanced analytics for $10/month
6. **Priority Support** - $20/month

## Roadmap

- **Phase 1 (MVP):** Basic editor, templates, HTML export ✅
- **Phase 2:** User auth, project saving, GitHub integration
- **Phase 3:** Premium templates marketplace
- **Phase 4:** Analytics and SEO tools
- **Phase 5:** Team collaboration features
- **Phase 6:** Mobile app

## Contributing

Contributions welcome! Please:
1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## License

MIT License - feel free to use for personal and commercial projects

## Support

- 📧 Email: support@websitebuilder.com
- 💬 Discord: [Join Community](#)
- 📖 Docs: [https://docs.websitebuilder.com](#)

## Acknowledgments

- Next.js team for amazing framework
- Zustand for state management
- Tailwind CSS for styling
- React community

---

**Happy Building! 🚀**

Questions? Open an issue on GitHub or reach out to the community.
