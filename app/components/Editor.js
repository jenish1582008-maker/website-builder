'use client';

import React, { useState } from 'react';
import { useEditorStore } from '@/app/store/editorStore';
import Sidebar from './Sidebar';
import Preview from './Preview';

const Editor = () => {
  const [isEditing, setIsEditing] = useState(true);

  return (
    <div className="editor-container">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <div className="bg-gray-800 text-white p-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Editor</h1>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-600"
          >
            {isEditing ? '👁️ Preview' : '✏️ Edit'}
          </button>
        </div>
        <Preview isEditing={isEditing} />
      </div>
    </div>
  );
};

export default Editor;
