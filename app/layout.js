import type { Metadata } from 'next';
import './globals.css';

export const metadata = {
  title: 'Website Builder - Create Your Website',
  description: 'Easy drag-and-drop website builder with template support',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
