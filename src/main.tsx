
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Précharger les images pour de meilleures performances
const preloadImages = [
  '/lovable-uploads/4c22176c-2d3f-4b83-8257-5eee50dd9f03.png',
  '/lovable-uploads/5ea8afd3-56bf-4cc9-9c65-e164671c24f9.png',
  '/lovable-uploads/2120b253-8c47-4a6f-8c9c-7b6cb386889b.png',
  '/lovable-uploads/ee310cca-8fe2-4a65-9a95-6549e83f4913.png',
  '/lovable-uploads/7510c501-c422-488c-8e85-d2b2ce36ff2c.png',
  '/lovable-uploads/d3f6ed84-01e0-4d12-92f6-4c2dca6128fe.png',
  '/lovable-uploads/c219acb8-fe75-4f50-9267-14fc85bcc095.png',
];

preloadImages.forEach((src) => {
  const img = new Image();
  img.src = src;
});

createRoot(document.getElementById("root")!).render(<App />);
