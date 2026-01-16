import React from 'react';

const ElementRenderer = ({ element, isEditing, onUpdate, onDelete }) => {
  const { id, type, text, description, title, content, bgColor, textColor } = element;

  const baseClasses = 'p-8 relative group';
  const commonStyle = {
    backgroundColor: bgColor || '#ffffff',
    color: textColor || '#000000',
  };

  const handleTextChange = (e) => {
    onUpdate(id, { text: e.target.value });
  };

  const handleDescriptionChange = (e) => {
    onUpdate(id, { description: e.target.value });
  };

  const handleTitleChange = (e) => {
    onUpdate(id, { title: e.target.value });
  };

  const handleContentChange = (e) => {
    onUpdate(id, { content: e.target.value });
  };

  const handleBgColorChange = (e) => {
    onUpdate(id, { bgColor: e.target.value });
  };

  const handleTextColorChange = (e) => {
    onUpdate(id, { textColor: e.target.value });
  };

  return (
    <div className={baseClasses} style={commonStyle}>
      <button
        onClick={() => onDelete(id)}
        className="opacity-0 group-hover:opacity-100 absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-xs transition"
      >
        Delete
      </button>

      {type === 'header' && (
        <div>
          <h1 className="text-4xl font-bold">
            {isEditing ? (
              <input
                type="text"
                value={text}
                onChange={handleTextChange}
                className="w-full bg-transparent border-b-2 border-white"
              />
            ) : (
              text
            )}
          </h1>
          {isEditing && (
            <div className="mt-4 space-y-2 text-sm">
              <div>
                <label>Background Color:</label>
                <input
                  type="color"
                  value={bgColor || '#1f2937'}
                  onChange={handleBgColorChange}
                  className="ml-2 cursor-pointer"
                />
              </div>
              <div>
                <label>Text Color:</label>
                <input
                  type="color"
                  value={textColor || '#ffffff'}
                  onChange={handleTextColorChange}
                  className="ml-2 cursor-pointer"
                />
              </div>
            </div>
          )}
        </div>
      )}

      {type === 'hero' && (
        <div className="text-center py-12">
          <h2 className="text-5xl font-bold mb-4">
            {isEditing ? (
              <input
                type="text"
                value={text}
                onChange={handleTextChange}
                className="w-full bg-transparent border-b-2 border-current"
              />
            ) : (
              text
            )}
          </h2>
          <p className="text-xl">
            {isEditing ? (
              <input
                type="text"
                value={description}
                onChange={handleDescriptionChange}
                className="w-full bg-transparent border-b-2 border-current"
              />
            ) : (
              description
            )}
          </p>
          {isEditing && (
            <div className="mt-4 space-y-2 text-sm">
              <div>
                <label>Background Color:</label>
                <input
                  type="color"
                  value={bgColor || '#3b82f6'}
                  onChange={handleBgColorChange}
                  className="ml-2 cursor-pointer"
                />
              </div>
              <div>
                <label>Text Color:</label>
                <input
                  type="color"
                  value={textColor || '#ffffff'}
                  onChange={handleTextColorChange}
                  className="ml-2 cursor-pointer"
                />
              </div>
            </div>
          )}
        </div>
      )}

      {type === 'section' && (
        <div>
          <h3 className="text-3xl font-bold mb-4">
            {isEditing ? (
              <input
                type="text"
                value={title}
                onChange={handleTitleChange}
                className="w-full bg-transparent border-b-2 border-current"
              />
            ) : (
              title
            )}
          </h3>
          <p className="text-lg">
            {isEditing ? (
              <input
                type="text"
                value={content}
                onChange={handleContentChange}
                className="w-full bg-transparent border-b-2 border-current"
              />
            ) : (
              content
            )}
          </p>
          {isEditing && (
            <div className="mt-4 space-y-2 text-sm">
              <div>
                <label>Background Color:</label>
                <input
                  type="color"
                  value={bgColor || '#ffffff'}
                  onChange={handleBgColorChange}
                  className="ml-2 cursor-pointer"
                />
              </div>
            </div>
          )}
        </div>
      )}

      {type === 'contact' && (
        <div>
          <h3 className="text-3xl font-bold mb-4">
            {isEditing ? (
              <input
                type="text"
                value={title}
                onChange={handleTitleChange}
                className="w-full bg-transparent border-b-2 border-current"
              />
            ) : (
              title
            )}
          </h3>
          <div className="mt-4">
            <input type="email" placeholder="Your email" className="w-full px-4 py-2 border rounded mb-2" />
            <textarea placeholder="Your message" className="w-full px-4 py-2 border rounded mb-2" />
            <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ElementRenderer;
