# Website Builder - Visual Architecture & Diagrams

## 🏗️ High-Level System Architecture

```
┌─────────────────────────────────────────────────────────┐
│                   WEBSITE BUILDER                        │
│                      (Next.js App)                       │
├─────────────────────────────────────────────────────────┤
│                                                           │
│  ┌─────────────────────────────────────────────────┐   │
│  │          USER INTERFACE LAYER                     │   │
│  │  ┌────────────────────────────────────────────┐ │   │
│  │  │ Sidebar        │ Editor Header │ Preview    │ │   │
│  │  │                │               │            │ │   │
│  │  │ Templates      │ Edit/Preview  │ Canvas     │ │   │
│  │  │ Add Elements   │ Toggle Button │ Display    │ │   │
│  │  │ Download HTML  │               │ Elements   │ │   │
│  │  │                │               │            │ │   │
│  │  └────────────────────────────────────────────┘ │   │
│  └─────────────────────────────────────────────────┘   │
│           ↓            ↓             ↓                  │
│  ┌─────────────────────────────────────────────────┐   │
│  │        COMPONENT LAYER                           │   │
│  │  • Sidebar (React Component)                    │   │
│  │  • Preview (React Component)                    │   │
│  │  • ElementRenderer (React Component)            │   │
│  │  • Editor (Main Container)                      │   │
│  └─────────────────────────────────────────────────┘   │
│           ↑            ↑             ↑                  │
│           └────────────┬─────────────┘                  │
│                        │                                 │
│  ┌─────────────────────▼──────────────────────────┐   │
│  │         STATE MANAGEMENT LAYER                   │   │
│  │         (Zustand Store)                          │   │
│  │                                                   │   │
│  │  State:                                          │   │
│  │  • elements[] - Array of all elements           │   │
│  │  • currentElement - Selected element ID         │   │
│  │                                                   │   │
│  │  Actions:                                        │   │
│  │  • addElement()                                  │   │
│  │  • updateElement()                              │   │
│  │  • deleteElement()                              │   │
│  │  • setCurrentElement()                          │   │
│  │  • resetElements()                              │   │
│  └─────────────────────────────────────────────────┘   │
│           ↑            ↑             ↑                  │
│  ┌─────────────────────────────────────────────────┐   │
│  │         DATA & TEMPLATES LAYER                   │   │
│  │                                                   │   │
│  │  • Template Objects (Portfolio, Business, Blog) │   │
│  │  • Element Type Definitions                      │   │
│  │  • Default Styles & Colors                       │   │
│  │  • Element Configurations                        │   │
│  └─────────────────────────────────────────────────┘   │
│           ↑            ↑             ↑                  │
│  ┌─────────────────────────────────────────────────┐   │
│  │         EXPORT LAYER                             │   │
│  │                                                   │   │
│  │  • HTML Generator                                │   │
│  │  • CSS Inliner                                   │   │
│  │  • File Download                                 │   │
│  │  • GitHub Integration (Ready)                    │   │
│  └─────────────────────────────────────────────────┘   │
│                                                           │
└─────────────────────────────────────────────────────────┘
           ↓                          ↓
      LOCAL STORAGE              WEB BROWSER
      (Browser Only)          (Display & Download)
```

---

## 📊 Component Relationship Diagram

```
                    ┌──────────────┐
                    │  app/page.js │
                    │  (Entry Pt)  │
                    └──────┬───────┘
                           │
                    ┌──────▼───────┐
                    │  Editor.js   │
                    │ (Main Layout)│
                    └────┬─────┬───┘
                         │     │
              ┌──────────┘     └──────────┐
              │                           │
        ┌─────▼──────┐           ┌───────▼────┐
        │ Sidebar.js │           │ Preview.js │
        │ (Controls) │           │ (Display)  │
        └─────┬──────┘           └───────┬────┘
              │                          │
              │                  ┌───────▼────────┐
              │                  │ ElementRenderer│
              │                  │ (4 element     │
              │                  │  types)        │
              │                  └────────────────┘
              │
        ┌─────▼──────────────┐
        │  Both components   │
        │   use Zustand      │
        │    store for       │
        │   state sharing    │
        └────────────────────┘
```

---

## 🔄 Data Flow Diagram

### Creating an Element

```
User clicks "Add Header"
        ↓
Button onClick triggered
        ↓
Sidebar.handleAddElement('header', defaultData)
        ↓
useEditorStore.addElement() called
        ↓
Zustand updates: elements = [...elements, newElement]
        ↓
All subscribed components re-render
        ↓
Preview receives new elements array
        ↓
Preview maps through elements
        ↓
ElementRenderer created for each element
        ↓
New header element appears on canvas
        ↓
User sees result instantly
```

### Editing an Element

```
User in Edit mode clicks on text
        ↓
Input field appears
        ↓
User types new text
        ↓
onChange event fires
        ↓
ElementRenderer.handleTextChange()
        ↓
updateElement(id, { text: newText })
        ↓
Zustand updates store
        ↓
All components re-render
        ↓
Preview shows updated text
        ↓
User sees change instantly (no delay)
```

### Exporting to HTML

```
User clicks "Download HTML"
        ↓
Sidebar.downloadHTML() called
        ↓
generateHTML(elements) function
        ↓
Loop through each element
        ↓
Convert to HTML string based on type:
  header → <header style="...">
  hero → <section style="...">
  section → <section style="...">
  contact → <form style="...">
        ↓
Create complete HTML document:
  <!DOCTYPE html>
  <head>
    <title>
    <style>
  <body>
    [all sections]
        ↓
Create Blob from HTML string
        ↓
Create download link
        ↓
Trigger browser download
        ↓
File saved: index.html
        ↓
User has downloadable website
```

---

## 🎨 UI Layout Diagram

```
┌──────────────────────────────────────────────────────────┐
│  Website Builder              [👁️ Preview / ✏️ Edit]    │
├──────────────────────────────────────────────────────────┤
│                                                            │
│  ┌─────────────────┐  ┌───────────────────────────────┐  │
│  │    SIDEBAR      │  │        PREVIEW CANVAS         │  │
│  │                 │  │                               │  │
│  │  TEMPLATES      │  │ ┌─────────────────────────┐   │  │
│  │  ├─ Portfolio   │  │ │  [Header Element]       │   │  │
│  │  ├─ Business    │  │ │  Dark, Large Text       │   │  │
│  │  ├─ Blog        │  │ └─────────────────────────┘   │  │
│  │                 │  │ ┌─────────────────────────┐   │  │
│  │  ADD ELEMENTS   │  │ │  [Hero Element]         │   │  │
│  │  ├─ + Header    │  │ │  Title, Subtitle        │   │  │
│  │  ├─ + Hero      │  │ │  Blue Background        │   │  │
│  │  ├─ + Section   │  │ └─────────────────────────┘   │  │
│  │  ├─ + Contact   │  │ ┌─────────────────────────┐   │  │
│  │                 │  │ │  [Section Element]      │   │  │
│  │  ACTIONS        │  │ │  Content Area           │   │  │
│  │  ├─ 📥 Download │  │ │  White Background       │   │  │
│  │     HTML        │  │ └─────────────────────────┘   │  │
│  │                 │  │ ┌─────────────────────────┐   │  │
│  │                 │  │ │  [Contact Form]         │   │  │
│  │                 │  │ │  Email Input            │   │  │
│  │                 │  │ │  Send Button            │   │  │
│  │                 │  │ └─────────────────────────┘   │  │
│  │                 │  │                               │  │
│  └─────────────────┘  └───────────────────────────────┘  │
│   Width: ~256px      Width: Remaining space              │
│   Background: Gray   Background: White/Colors             │
└──────────────────────────────────────────────────────────┘
```

---

## 📱 Element Type Structure

```
Element Object Structure:
{
  id: "header-1234567890",           // Unique ID
  type: "header|hero|section|contact", // Element type
  
  // Shared properties
  bgColor: "#1f2937",                 // Background color
  textColor: "#ffffff",                // Text color
  
  // Type-specific properties
  // For header:
  text: "Header Text"
  
  // For hero:
  text: "Title",
  description: "Subtitle"
  
  // For section:
  title: "Section Title",
  content: "Section content"
  
  // For contact:
  title: "Get In Touch"
}
```

---

## 🔀 State Management Flow

```
Zustand Store (editorStore.js)
│
├─ State Properties
│  ├─ elements: []          // All elements
│  └─ currentElement: null  // Selected element
│
├─ Mutation Methods (Actions)
│  ├─ addElement(element)
│  ├─ updateElement(id, updates)
│  ├─ deleteElement(id)
│  ├─ setCurrentElement(id)
│  └─ resetElements()
│
├─ Subscribers
│  ├─ Sidebar
│  │  └─ Uses: addElement, resetElements
│  ├─ Preview
│  │  └─ Uses: elements, updateElement, deleteElement
│  └─ ElementRenderer
│     └─ Uses: element, onUpdate, onDelete
│
└─ Benefit: No prop drilling needed!
```

---

## 🌐 Browser to Export Flow

```
┌─────────────────────────────────────┐
│   Browser State                     │
│   (Zustand Store)                   │
│                                     │
│  elements: [                        │
│    { type: 'header', ... },        │
│    { type: 'hero', ... },          │
│    { type: 'section', ... }        │
│  ]                                  │
└─────────────────────────────────────┘
          ↓ User clicks Download
┌─────────────────────────────────────┐
│   HTML Generation                   │
│                                     │
│   For each element:                 │
│   - type: 'header' → <header>      │
│   - Styles inline → style="..."    │
│   - Colors from store → bgColor    │
│   - Text from store → element.text │
└─────────────────────────────────────┘
          ↓
┌─────────────────────────────────────┐
│   Complete HTML File                │
│                                     │
│   <!DOCTYPE html>                   │
│   <head>                            │
│     <style>...</style>             │
│   </head>                           │
│   <body>                            │
│     [all elements as HTML]          │
│   </body>                           │
│   </html>                           │
└─────────────────────────────────────┘
          ↓
┌─────────────────────────────────────┐
│   Browser Download                  │
│                                     │
│   Blob created                      │
│   → Download link generated         │
│   → File downloaded: index.html     │
│   → User has standalone website     │
└─────────────────────────────────────┘
```

---

## 🔧 Technology Stack Visualization

```
┌─────────────────────────────────────────────────┐
│              DEPLOYMENT LAYER                    │
│  Vercel / GitHub Pages / Netlify                 │
└─────────────────────────────────────────────────┘
                      ↑
┌─────────────────────────────────────────────────┐
│              BUILD TOOLS LAYER                   │
│  Next.js Build | Node.js Runtime                │
└─────────────────────────────────────────────────┘
                      ↑
┌─────────────────────────────────────────────────┐
│           FRAMEWORK & LIBRARY LAYER              │
│  Next.js 14 | React 18 | Zustand                │
└─────────────────────────────────────────────────┘
                      ↑
┌─────────────────────────────────────────────────┐
│          STYLING & UTILITIES LAYER               │
│  Tailwind CSS | PostCSS | CSS Modules           │
└─────────────────────────────────────────────────┘
                      ↑
┌─────────────────────────────────────────────────┐
│           APPLICATION LAYER                      │
│  Components | State | Templates | Export        │
└─────────────────────────────────────────────────┘
                      ↑
┌─────────────────────────────────────────────────┐
│          RUNTIME & ENVIRONMENT                   │
│  Node.js | npm | Browser APIs                   │
└─────────────────────────────────────────────────┘
```

---

## 🎯 Feature Implementation Map

```
CURRENT FEATURES (Phase 1) ✅
├─ Templates
│  ├─ Blank
│  ├─ Portfolio
│  ├─ Business
│  └─ Blog
│
├─ Elements
│  ├─ Header
│  ├─ Hero
│  ├─ Section
│  └─ Contact Form
│
├─ Editing
│  ├─ Text editing
│  ├─ Color selection
│  ├─ Delete elements
│  └─ Preview mode
│
└─ Export
   ├─ HTML download
   ├─ Inline CSS
   └─ Standalone file

PLANNED FEATURES (Phase 2) 🔄
├─ Authentication
│  ├─ User accounts
│  ├─ Project saving
│  └─ Login/signup
│
├─ Database
│  ├─ Store projects
│  ├─ Load projects
│  └─ Project list
│
└─ Advanced Editing
   ├─ Drag-to-reorder
   ├─ Undo/redo
   └─ Multi-select

FUTURE FEATURES (Phase 3+) 🚀
├─ Team Collaboration
├─ Analytics Dashboard
├─ Premium Templates
├─ AI Features
└─ Mobile App
```

---

## 📈 Growth Architecture

```
USERS
  └─ 100 (Phase 1)
     └─ 1,000 (Phase 2)
        └─ 10,000 (Phase 3)
           └─ 100,000 (Phase 4)
              └─ 1,000,000 (Phase 5)

ARCHITECTURE EVOLUTION
  └─ Static Site (Phase 1)
     └─ + User Auth (Phase 2)
        └─ + Database (Phase 3)
           └─ + APIs & Microservices (Phase 4)
              └─ + AI & Scaling (Phase 5)

REVENUE
  └─ $0 (Phase 1)
     └─ $5K/month (Phase 2)
        └─ $50K/month (Phase 3)
           └─ $500K/month (Phase 4)
              └─ $5M/month (Phase 5)
```

---

## 🔐 Data Security Flow

```
USER INPUT
    ↓
[Client-side Validation]
    ↓
[Sanitization]
    ↓
[Zustand Store]
    ↓
[Export as HTML]
    ↓
[Download / Upload]
    ↓
[User's Server]

Note: Phase 2 adds database security
```

---

## 🧪 Testing Architecture (Future)

```
UNIT TESTS
├─ Store logic (Zustand)
├─ Component rendering
└─ Utility functions

INTEGRATION TESTS
├─ Component interaction
├─ State updates
└─ User workflows

E2E TESTS (Phase 3)
├─ Complete user journeys
├─ Template loading
├─ Export functionality
└─ Authentication

PERFORMANCE TESTS
├─ Bundle size
├─ Load time
└─ Render performance
```

---

## 📊 Performance Metrics

```
METRICS TO TRACK
├─ Page Load Time
│  └─ Target: <1s (First Contentful Paint)
├─ Time to Interactive
│  └─ Target: <2s
├─ Bundle Size
│  └─ Target: <100KB (gzipped)
├─ Lighthouse Score
│  └─ Target: 90+
└─ User Performance
   ├─ Edit delay: <100ms
   ├─ Preview update: <200ms
   └─ Export time: <1s
```

---

## 🚀 Deployment Pipeline

```
LOCAL DEVELOPMENT
    ↓
GIT COMMIT
    ↓
PUSH TO GITHUB
    ↓
GITHUB ACTIONS TRIGGER
    ↓
BUILD VERIFICATION
    ↓
AUTOMATED TESTS
    ↓
PRODUCTION DEPLOYMENT
    ↓
LIVE ON VERCEL
    ↓
CDN DISTRIBUTION
    ↓
USERS ACCESS
```

---

This visual documentation helps understand how all pieces fit together!

**For more details, see:**
- DEVELOPER.md - Code architecture
- ROADMAP.md - Growth architecture
- README.md - Feature overview
