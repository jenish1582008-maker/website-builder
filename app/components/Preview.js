'use client';

import React from 'react';
import { useEditorStore } from '@/app/store/editorStore';
import ElementRenderer from './ElementRenderer';

const Preview = ({ isEditing }) => {
  const elements = useEditorStore((state) => state.elements);
  const updateElement = useEditorStore((state) => state.updateElement);
  const deleteElement = useEditorStore((state) => state.deleteElement);

  return (
    <div className="flex-1 overflow-auto bg-white">
      {elements.length === 0 ? (
        <div className="flex items-center justify-center h-full text-gray-400">
          <p className="text-xl">Add elements from the left panel to get started</p>
        </div>
      ) : (
        <div className="w-full">
          {elements.map((element) => (
            <div
              key={element.id}
              className="border-b-4 border-gray-200 hover:border-blue-400 transition"
            >
              <ElementRenderer
                element={element}
                isEditing={isEditing}
                onUpdate={updateElement}
                onDelete={deleteElement}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Preview;
