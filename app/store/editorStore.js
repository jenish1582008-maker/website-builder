import { create } from 'zustand';

export const useEditorStore = create((set) => ({
  elements: [],
  currentElement: null,
  
  addElement: (element) =>
    set((state) => ({
      elements: [...state.elements, { ...element, id: Date.now() + Math.random() }],
    })),
  
  updateElement: (id, updates) =>
    set((state) => ({
      elements: state.elements.map((el) =>
        el.id === id ? { ...el, ...updates } : el
      ),
    })),
  
  deleteElement: (id) =>
    set((state) => ({
      elements: state.elements.filter((el) => el.id !== id),
    })),
  
  setCurrentElement: (id) =>
    set(() => ({
      currentElement: id,
    })),
  
  resetElements: () =>
    set(() => ({
      elements: [],
      currentElement: null,
    })),
}));
