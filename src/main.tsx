
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
  // Images précédemment ajoutées
  '/lovable-uploads/7c63f699-ad4b-4ddb-88fd-4d2dbb506352.png',
  '/lovable-uploads/86524e16-e146-4eea-bc02-8cbb668a7205.png',
  '/lovable-uploads/a96b2fab-3ff7-4f98-8400-0dc93f7457d4.png',
  '/lovable-uploads/0e248deb-e0c7-4afb-b4fe-2dfdef43fa71.png',
  '/lovable-uploads/62ada3d0-f81e-4c6c-a666-479d8f4e3f1f.png',
  '/lovable-uploads/e6af0d1c-dcb3-4d02-941d-0ab737ffad83.png',
  '/lovable-uploads/242a6241-e3c9-4628-9bee-4c81262eeb3e.png',
  // Nouvelles images ajoutées
  '/lovable-uploads/d9155718-b957-403e-8ede-ff4f0383aee0.png', // Port avec citadelle
  '/lovable-uploads/f5508c8b-0710-4a1c-9a17-b941b7e50496.png', // Port avec citadelle (2)
  '/lovable-uploads/381bb3e5-8c88-48aa-8685-829520b4e247.png', // Village perché
  '/lovable-uploads/c6d7abd5-3720-46c1-bd10-b5e3edd6a715.png', // Route avec pont
  '/lovable-uploads/5a4881ff-0af8-4998-81d1-f13d1fc1b7d1.png', // Vue aérienne côte
  '/lovable-uploads/8feaf7ab-0f70-42d5-9b80-fbbcf2f96595.png', // Bastia port coloré
  '/lovable-uploads/6823cebb-1b87-4aac-9835-1d227adb1e2a.png', // Port ville
  '/lovable-uploads/6f930ced-66d6-4bfe-adb7-246828fa75a7.png', // Route corniche côtière
  '/lovable-uploads/e9b8e1a0-fb14-4e33-8e6c-e8f85a71d326.png', // Crique sauvage
  '/lovable-uploads/a8d33cf4-446a-408a-aeaa-65f7cb21ee9c.png', // Gorges avec rivière
  '/lovable-uploads/6f675042-fc8c-4549-8373-529418f50f8d.png', // Forêt montagnes
  '/lovable-uploads/1786ff52-abb7-4c35-9599-de33995c0358.png', // Route calanques
  '/lovable-uploads/2b677267-ec65-4c83-ae90-9301d10f5a90.png', // Montagnes rocheuses
  // Nouvelle image pour la Castagniccia
  '/lovable-uploads/2653c886-6632-476f-b90a-f498f2b8ca2e.png', // Vue de la Castagniccia avec village perché
  // Nouvelle image pour les Calanques de Piana
  '/lovable-uploads/d60eaef4-6e63-4386-860b-c02648902533.png', // Calanques de Piana route côtière
];

preloadImages.forEach((src) => {
  const img = new Image();
  img.src = src;
});

createRoot(document.getElementById("root")!).render(<App />);
