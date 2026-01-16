const TEMPLATES = {
  blank: {
    name: 'Blank',
    elements: [],
  },
  portfolio: {
    name: 'Portfolio',
    elements: [
      {
        id: 'header-' + Date.now(),
        type: 'header',
        text: 'My Portfolio',
        bgColor: '#1f2937',
        textColor: '#ffffff',
      },
      {
        id: 'hero-' + Date.now(),
        type: 'hero',
        text: 'Welcome to my portfolio',
        description: 'Showcasing my best work',
        bgColor: '#3b82f6',
        textColor: '#ffffff',
      },
      {
        id: 'section-' + Date.now(),
        type: 'section',
        title: 'My Projects',
        content: 'Featured projects and achievements',
        bgColor: '#ffffff',
      },
    ],
  },
  business: {
    name: 'Business',
    elements: [
      {
        id: 'header-' + Date.now(),
        type: 'header',
        text: 'My Business',
        bgColor: '#065f46',
        textColor: '#ffffff',
      },
      {
        id: 'hero-' + Date.now(),
        type: 'hero',
        text: 'Professional Services',
        description: 'Quality and Excellence',
        bgColor: '#059669',
        textColor: '#ffffff',
      },
      {
        id: 'contact-' + Date.now(),
        type: 'contact',
        title: 'Get In Touch',
        bgColor: '#f3f4f6',
      },
    ],
  },
  blog: {
    name: 'Blog',
    elements: [
      {
        id: 'header-' + Date.now(),
        type: 'header',
        text: 'My Blog',
        bgColor: '#7c3aed',
        textColor: '#ffffff',
      },
      {
        id: 'hero-' + Date.now(),
        type: 'hero',
        text: 'Thoughts & Stories',
        description: 'Sharing my insights and experiences',
        bgColor: '#a855f7',
        textColor: '#ffffff',
      },
    ],
  },
};

export default TEMPLATES;
