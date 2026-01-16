'use client';

import React from 'react';
import { useEditorStore } from '@/app/store/editorStore';
import TEMPLATES from '@/app/data/templates';

const Sidebar = () => {
  const addElement = useEditorStore((state) => state.addElement);
  const resetElements = useEditorStore((state) => state.resetElements);
  const elements = useEditorStore((state) => state.elements);

  const elementTypes = [
    { type: 'header', label: 'Header', defaultData: { text: 'Header Text', bgColor: '#1f2937', textColor: '#ffffff' } },
    { type: 'hero', label: 'Hero Section', defaultData: { text: 'Hero Title', description: 'Hero Subtitle', bgColor: '#3b82f6', textColor: '#ffffff' } },
    { type: 'section', label: 'Section', defaultData: { title: 'Section Title', content: 'Section content goes here', bgColor: '#ffffff' } },
    { type: 'contact', label: 'Contact Form', defaultData: { title: 'Get In Touch', bgColor: '#f3f4f6' } },
  ];

  const handleAddElement = (type, defaultData) => {
    addElement({ type, ...defaultData });
  };

  const handleLoadTemplate = (templateName) => {
    resetElements();
    const template = TEMPLATES[templateName];
    template.elements.forEach((el) => {
      addElement(el);
    });
  };

  const downloadHTML = () => {
    const html = generateHTML(elements);
    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'index.html';
    a.click();
    URL.revokeObjectURL(url);
  };

  const generateHTML = (elements) => {
    const styles = `
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif; }
        .container { width: 100%; }
        .section { padding: 2rem; width: 100%; }
        h1, h2, h3 { margin-bottom: 1rem; }
        p { margin-bottom: 1rem; line-height: 1.6; }
        input, textarea { padding: 0.5rem; margin: 0.5rem 0; border: 1px solid #ccc; border-radius: 4px; }
        button { padding: 0.5rem 1rem; background: #3b82f6; color: white; border: none; border-radius: 4px; cursor: pointer; }
        button:hover { background: #2563eb; }
      </style>
    `;

    const body = elements
      .map((el) => {
        let content = '';
        const style = `style="background-color: ${el.bgColor || '#ffffff'}; color: ${el.textColor || '#000000'};"`;

        if (el.type === 'header') {
          content = `<header class="section" ${style}><h1>${el.text}</h1></header>`;
        } else if (el.type === 'hero') {
          content = `<section class="section" ${style}><h2>${el.text}</h2><p>${el.description}</p></section>`;
        } else if (el.type === 'section') {
          content = `<section class="section" ${style}><h3>${el.title}</h3><p>${el.content}</p></section>`;
        } else if (el.type === 'contact') {
          content = `<section class="section" ${style}><h3>${el.title}</h3><form><input type="email" placeholder="Email" required><textarea placeholder="Message" required></textarea><button type="submit">Send</button></form></section>`;
        }

        return content;
      })
      .join('\n');

    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Website</title>
    ${styles}
</head>
<body>
    ${body}
</body>
</html>`;
  };

  return (
    <div className="w-64 bg-gray-100 p-4 overflow-y-auto h-screen flex flex-col">
      <h2 className="text-2xl font-bold mb-4">Website Builder</h2>

      {/* Templates */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3">Templates</h3>
        <div className="space-y-2">
          {Object.keys(TEMPLATES).map((key) => (
            <button
              key={key}
              onClick={() => handleLoadTemplate(key)}
              className="w-full px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"
            >
              {TEMPLATES[key].name}
            </button>
          ))}
        </div>
      </div>

      {/* Add Elements */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3">Add Elements</h3>
        <div className="space-y-2">
          {elementTypes.map((el) => (
            <button
              key={el.type}
              onClick={() => handleAddElement(el.type, el.defaultData)}
              className="w-full px-3 py-2 bg-green-500 text-white rounded hover:bg-green-600 text-sm"
            >
              + {el.label}
            </button>
          ))}
        </div>
      </div>

      {/* Export */}
      <div className="mt-auto">
        <button
          onClick={downloadHTML}
          className="w-full px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 font-semibold"
        >
          📥 Download HTML
        </button>
        <p className="text-xs text-gray-600 mt-2">
          Download your website as HTML/CSS files ready to use.
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
