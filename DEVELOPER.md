# Developer's Guide - Website Builder

## Welcome, Developer! 👨‍💻

This guide explains how the website builder is built and how to extend it.

---

## Architecture Overview

### High-Level Architecture

```
┌─────────────────────────────────────────┐
│         Next.js Application             │
│  (app/ directory, App Router)           │
├─────────────────────────────────────────┤
│                                         │
│  ┌──────────────────────────────────┐  │
│  │     React Components Layer        │  │
│  │  ├─ Editor (Main layout)         │  │
│  │  ├─ Sidebar (Controls)           │  │
│  │  ├─ Preview (Display)            │  │
│  │  └─ ElementRenderer (Elements)   │  │
│  └──────────────────────────────────┘  │
│           ↑              ↑              │
│           └──────────────┘              │
│                 │                       │
│  ┌──────────────▼──────────────┐      │
│  │  State Management Layer      │      │
│  │  ├─ Zustand Store           │      │
│  │  ├─ Elements Array          │      │
│  │  └─ Current Selection       │      │
│  └──────────────────────────────┘      │
│                                         │
│  ┌──────────────────────────────────┐  │
│  │     Data & Templates Layer        │  │
│  │  ├─ TEMPLATES constant           │  │
│  │  ├─ Element Types               │  │
│  │  └─ Default Styles              │  │
│  └──────────────────────────────────┘  │
│                                         │
│  ┌──────────────────────────────────┐  │
│  │    Styling Layer                  │  │
│  │  ├─ Tailwind CSS                │  │
│  │  ├─ globals.css                 │  │
│  │  └─ Inline Styles               │  │
│  └──────────────────────────────────┘  │
│                                         │
└─────────────────────────────────────────┘
```

---

## File Structure Deep Dive

### app/page.js - Entry Point

```javascript
'use client';  // Client-side component

import Editor from './components/Editor';

export default function Home() {
  return <Editor />;
}
```

**Purpose:** Root page component. Renders the main Editor.

---

### app/components/Editor.js - Main Layout

```javascript
// Props: none
// State: isEditing (boolean)
// Children: Sidebar, Preview

const Editor = () => {
  const [isEditing, setIsEditing] = useState(true);
  
  return (
    <div className="editor-container">
      <Sidebar />              {/* Left panel - controls */}
      <div className="flex-1">
        <Header />             {/* Top bar with button */}
        <Preview />            {/* Right panel - preview */}
      </div>
    </div>
  );
};
```

**Purpose:** Main layout container. Manages Edit/Preview mode toggle.

---

### app/components/Sidebar.js - Controls Panel

```javascript
// Props: none
// State: uses Zustand store
// Functions:
//   - handleAddElement()      - Add element to canvas
//   - handleLoadTemplate()    - Load pre-built template
//   - downloadHTML()          - Export as HTML

const Sidebar = () => {
  const addElement = useEditorStore(s => s.addElement);
  const resetElements = useEditorStore(s => s.resetElements);
  
  return (
    <div className="w-64 bg-gray-100">
      {/* Templates section */}
      {/* Add Elements section */}
      {/* Download button */}
    </div>
  );
};
```

**Purpose:** Left control panel. Contains template buttons and export button.

---

### app/components/Preview.js - Canvas Display

```javascript
// Props: isEditing (boolean)
// State: uses Zustand store
// Displays: All elements from store

const Preview = ({ isEditing }) => {
  const elements = useEditorStore(s => s.elements);
  const updateElement = useEditorStore(s => s.updateElement);
  const deleteElement = useEditorStore(s => s.deleteElement);
  
  return (
    <div className="flex-1">
      {elements.map(el => (
        <ElementRenderer
          key={el.id}
          element={el}
          isEditing={isEditing}
          onUpdate={updateElement}
          onDelete={deleteElement}
        />
      ))}
    </div>
  );
};
```

**Purpose:** Canvas area. Renders all elements and passes editing callbacks.

---

### app/components/ElementRenderer.js - Element Types

```javascript
// Props:
//   - element: { id, type, text, bgColor, ... }
//   - isEditing: boolean
//   - onUpdate: (id, updates) => void
//   - onDelete: (id) => void

const ElementRenderer = ({ element, isEditing, onUpdate, onDelete }) => {
  // Returns different JSX based on element.type:
  // - 'header'   - Large heading section
  // - 'hero'     - Banner with title + subtitle
  // - 'section'  - Content area with title
  // - 'contact'  - Form with inputs
};
```

**Purpose:** Renders elements based on type. Handles editing for each type.

---

### app/store/editorStore.js - State Management

```javascript
// Zustand store
// State:
//   - elements[]        - Array of all elements
//   - currentElement    - Currently selected element ID

// Methods:
//   - addElement()      - Create new element
//   - updateElement()   - Modify element
//   - deleteElement()   - Remove element
//   - setCurrentElement() - Select element
//   - resetElements()   - Clear all

export const useEditorStore = create((set) => ({
  elements: [],
  currentElement: null,
  
  addElement: (element) => set((state) => ({
    elements: [...state.elements, { ...element, id: Date.now() + Math.random() }],
  })),
  // ... other methods
}));
```

**Purpose:** Central state management. All components read/write here.

---

### app/data/templates.js - Pre-built Templates

```javascript
const TEMPLATES = {
  blank: {
    name: 'Blank',
    elements: [],  // Empty
  },
  portfolio: {
    name: 'Portfolio',
    elements: [
      { type: 'header', text: 'My Portfolio', ... },
      { type: 'hero', text: 'Welcome', ... },
      // ... more elements
    ],
  },
  // ... more templates
};
```

**Purpose:** Pre-built element configurations for quick start.

---

## Data Flow

### Adding an Element

```
User clicks "Add Header" button
    ↓
Sidebar.handleAddElement('header', defaultData) called
    ↓
useEditorStore.addElement() called
    ↓
Zustand store state updated: elements = [...elements, newElement]
    ↓
ALL components using store re-render
    ↓
Preview.js gets new elements array
    ↓
ElementRenderer components created for each element
    ↓
User sees new element on canvas
```

### Editing an Element

```
User clicks in edit mode on element text
    ↓
Input field appears (or text becomes editable)
    ↓
User types new text
    ↓
onChange event fires
    ↓
ElementRenderer.handleTextChange() called
    ↓
useEditorStore.updateElement(id, { text: newText }) called
    ↓
Zustand store updates: elements.find(el => el.id === id).text = newText
    ↓
Preview re-renders with new text
    ↓
User sees text update instantly
```

### Exporting to HTML

```
User clicks "Download HTML" button
    ↓
Sidebar.downloadHTML() called
    ↓
generateHTML(elements) processes each element:
   - Creates <header> for 'header' type
   - Creates <section> for 'section' type
   - Creates <form> for 'contact' type
    ↓
Creates complete HTML document string with:
   - <!DOCTYPE html>
   - <head> with styles
   - <body> with elements
   - All colors inline
    ↓
Creates blob from HTML string
    ↓
Creates download link
    ↓
Triggers browser download
    ↓
Browser saves file: index.html
    ↓
User has HTML file ready to use
```

---

## Component Communication

### Without Props (Using Zustand)

```
Sidebar ─┐
         ├─ useEditorStore()
Preview ─┤
         └─ Both read/write same store
         
No props drilling needed!
```

### With Props (Parent to Child)

```
Preview (parent)
    ↓
    ├─ ElementRenderer (child)
    │     Props: element, isEditing, onUpdate, onDelete
    │
    └─ Callbacks to parent methods
        └─ onUpdate → Preview.updateElement()
        └─ onDelete → Preview.deleteElement()
```

---

## Styling System

### Tailwind CSS

```css
/* Used in component classNames */
<div className="w-64 bg-gray-100 p-4 overflow-y-auto h-screen">
  /* w-64 = width 256px */
  /* bg-gray-100 = background gray-100 */
  /* p-4 = padding 1rem */
  /* overflow-y-auto = scroll if needed */
  /* h-screen = height 100vh */
</div>
```

**Files:**
- `tailwind.config.js` - Tailwind configuration
- `globals.css` - Global styles + @tailwind imports
- Components - Use className for Tailwind

### Inline Styles

```javascript
// For dynamic colors from user input
const style = {
  backgroundColor: bgColor || '#ffffff',
  color: textColor || '#000000',
};

<div style={style}>Content</div>
```

### CSS Classes

```css
/* From globals.css */
.editor-container {
  display: flex;
  height: 100vh;
}

.draggable-item {
  cursor: move;
  border: 2px solid #e5e7eb;
  padding: 10px;
}
```

---

## How to Extend the Builder

### Adding a New Element Type

**Step 1: Update templates.js**

```javascript
// app/data/templates.js
const elementTypes = [
  // ... existing types
  {
    type: 'button',
    label: 'CTA Button',
    defaultData: {
      text: 'Click Me',
      bgColor: '#3b82f6',
      textColor: '#ffffff'
    }
  }
];
```

**Step 2: Add rendering logic**

```javascript
// app/components/ElementRenderer.js
if (el.type === 'button') {
  return (
    <button style={commonStyle}>
      {isEditing ? (
        <input value={text} onChange={handleTextChange} />
      ) : (
        text
      )}
    </button>
  );
}
```

**Step 3: Add to Sidebar**

```javascript
// app/components/Sidebar.js
elementTypes: [
  // ... existing
  { type: 'button', label: 'CTA Button', defaultData: {...} }
]
```

### Adding a New Template

```javascript
// app/data/templates.js
const TEMPLATES = {
  // ... existing
  saas: {
    name: 'SaaS Landing',
    elements: [
      { type: 'header', text: 'My SaaS', bgColor: '#1f2937', textColor: '#ffffff' },
      { type: 'hero', text: 'Solve a Problem', description: 'Instantly', bgColor: '#3b82f6', textColor: '#ffffff' },
      // ... more elements
    ]
  }
};
```

### Adding New Features

#### Example: Undo/Redo

```javascript
// Extend store
export const useEditorStore = create((set) => ({
  // ... existing
  history: [],
  historyIndex: 0,
  
  undo: () => set((state) => ({
    historyIndex: Math.max(0, state.historyIndex - 1),
    elements: state.history[state.historyIndex - 1] || []
  })),
  
  redo: () => set((state) => ({
    historyIndex: Math.min(state.history.length - 1, state.historyIndex + 1),
    elements: state.history[state.historyIndex + 1] || []
  }))
}));
```

#### Example: Keyboard Shortcuts

```javascript
// In Editor.js
useEffect(() => {
  const handleKeyPress = (e) => {
    if (e.ctrlKey && e.key === 'z') {
      undoAction();
    }
    if (e.ctrlKey && e.key === 'y') {
      redoAction();
    }
  };
  
  window.addEventListener('keydown', handleKeyPress);
  return () => window.removeEventListener('keydown', handleKeyPress);
}, []);
```

---

## Performance Optimization Tips

### 1. Memoization

```javascript
import { memo } from 'react';

const ElementRenderer = memo(({ element, isEditing, onUpdate, onDelete }) => {
  // Component only re-renders if props change
  // Prevents unnecessary renders
});

export default ElementRenderer;
```

### 2. useCallback Hook

```javascript
const handleAddElement = useCallback((element) => {
  addElement(element);
}, [addElement]);
```

### 3. Zustand Selectors

```javascript
// Good - subscribes only to elements
const elements = useEditorStore(state => state.elements);

// Avoid - subscribes to entire store
const store = useEditorStore();
```

---

## Testing

### Manual Testing Checklist

- [ ] Add element - appears on canvas
- [ ] Edit text - text updates instantly
- [ ] Change color - color updates instantly
- [ ] Delete element - element removed
- [ ] Switch modes - Preview works without edit controls
- [ ] Load template - all elements appear
- [ ] Download HTML - file downloads and opens in browser

### Unit Tests Example

```javascript
// __tests__/editorStore.test.js
import { renderHook, act } from '@testing-library/react';
import { useEditorStore } from '../app/store/editorStore';

test('addElement adds element to store', () => {
  const { result } = renderHook(() => useEditorStore());
  
  act(() => {
    result.current.addElement({ type: 'header', text: 'Test' });
  });
  
  expect(result.current.elements).toHaveLength(1);
  expect(result.current.elements[0].type).toBe('header');
});
```

---

## Deployment Checklist

### Before Deploying

- [ ] All tests pass
- [ ] No console errors
- [ ] Build succeeds: `npm run build`
- [ ] Works in production: `npm start`
- [ ] README updated
- [ ] Environment variables set

### Deploy to Vercel

```bash
# Push to GitHub
git push origin main

# Go to vercel.com
# Connect GitHub repo
# Auto-deploys on push
```

---

## Common Patterns

### Getting Store Data

```javascript
// In component
const elements = useEditorStore(state => state.elements);
const addElement = useEditorStore(state => state.addElement);

// Outside component (e.g., in function)
const state = useEditorStore.getState();
```

### Updating Store

```javascript
// Simple update
updateElement(elementId, { text: 'New Text' });

// Complex update
updateElement(elementId, {
  text: 'New Text',
  bgColor: '#3b82f6',
  textColor: '#ffffff'
});
```

### Handling Events

```javascript
const handleChange = (e) => {
  const value = e.target.value;
  onUpdate(id, { text: value });
};
```

---

## Debugging Tips

### React DevTools

1. Install React DevTools browser extension
2. Open DevTools (F12)
3. Go to "Components" tab
4. Inspect component tree
5. See props and state

### Console Logging

```javascript
console.log('Elements:', elements);
console.log('Store state:', useEditorStore.getState());
console.log('Updated element:', { ...element, text: newText });
```

### Next.js DevTools

```bash
# Enable source maps
npm run dev  # Already enabled in dev mode

# Check Next.js build info
npm run build  # Shows build stats
```

---

## Best Practices

1. **Keep components small** - One responsibility per component
2. **Use Zustand for global state** - Avoid prop drilling
3. **Memoize expensive components** - Use React.memo
4. **Use semantic HTML** - <header>, <section>, <button>
5. **Style with Tailwind** - Use className first
6. **Comment complex logic** - Explain why, not what
7. **Test important features** - Unit tests for store
8. **Document as you code** - README updates
9. **Version control** - Regular commits
10. **Monitor performance** - DevTools profiler

---

## Resources

### Official Docs
- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [Zustand Docs](https://github.com/pmndrs/zustand)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

### Learning
- "React: The Definitive Guide" - David Flanagan
- "Learning Next.js" - Lee Robinson
- Next.js YouTube tutorials
- React Conf talks

### Tools
- React DevTools
- Next.js DevTools
- VS Code Debugger
- Chrome DevTools
- Lighthouse audits

---

## Contributing

Want to add features?

1. Fork repository
2. Create feature branch: `git checkout -b feature/amazing`
3. Make changes with clear commits
4. Add tests for new features
5. Update README with changes
6. Submit pull request

---

## Architecture Decisions

### Why Zustand?
- ✅ Lightweight (2KB)
- ✅ Simple API
- ✅ No provider needed for basic usage
- ✅ Great for managing editor state

### Why Next.js?
- ✅ Built on React
- ✅ Easy deployment on Vercel
- ✅ File-based routing
- ✅ Built-in optimization

### Why Tailwind CSS?
- ✅ Utility-first approach
- ✅ Rapid development
- ✅ Responsive design built-in
- ✅ Great customization

---

## Future Architecture Plans

### Phase 2: Database Integration
- Backend: Node.js + Express
- Database: PostgreSQL or MongoDB
- Authentication: NextAuth.js

### Phase 3: Real-time Collaboration
- WebSockets for real-time sync
- Operational transformation for conflict resolution
- User presence indicators

### Phase 4: AI Integration
- OpenAI API for content generation
- Image optimization pipeline
- Auto-layout suggestions

---

Enjoy building! If you have questions, check the code comments or reach out to the community. 🚀

---

**Last Updated:** January 2026
**Author:** Website Builder Team
**Version:** 0.1.0 MVP
