
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Fonction améliorée de préchargement avec priorités
const preloadImages = (urls: string[], highPriority = false) => {
  urls.forEach((src, index) => {
    // Créer un nouvel objet Image pour précharger
    const img = new Image();
    
    // Définir la priorité (les plus importantes immédiatement, les autres différées)
    if (highPriority) {
      img.src = src;
    } else {
      // Pour les images moins prioritaires, utiliser un léger délai
      // pour ne pas bloquer le rendu initial de l'application
      setTimeout(() => {
        img.src = src;
      }, index * 100); // Délai progressif pour préserver la bande passante
    }
  });
};

// Images prioritaires (visibles à l'écran au chargement initial)
const priorityImages = [
  '/lovable-uploads/a96b2fab-3ff7-4f98-8400-0dc93f7457d4.png',
  '/lovable-uploads/d9155718-b957-403e-8ede-ff4f0383aee0.png',
  '/lovable-uploads/6f930ced-66d6-4bfe-adb7-246828fa75a7.png',
];

// Images secondaires (chargées après le rendu initial)
const secondaryImages = [
  '/lovable-uploads/1786ff52-abb7-4c35-9599-de33995c0358.png',
  '/lovable-uploads/4c22176c-2d3f-4b83-8257-5eee50dd9f03.png',
  '/lovable-uploads/5ea8afd3-56bf-4cc9-9c65-e164671c24f9.png',
  '/lovable-uploads/2120b253-8c47-4a6f-8c9c-7b6cb386889b.png',
  '/lovable-uploads/ee310cca-8fe2-4a65-9a95-6549e83f4913.png',
  '/lovable-uploads/7510c501-c422-488c-8e85-d2b2ce36ff2c.png',
  '/lovable-uploads/d3f6ed84-01e0-4d12-92f6-4c2dca6128fe.png',
  '/lovable-uploads/c219acb8-fe75-4f50-9267-14fc85bcc095.png',
  '/lovable-uploads/7c63f699-ad4b-4ddb-88fd-4d2dbb506352.png',
  '/lovable-uploads/86524e16-e146-4eea-bc02-8cbb668a7205.png',
  '/lovable-uploads/0e248deb-e0c7-4afb-b4fe-2dfdef43fa71.png',
  '/lovable-uploads/62ada3d0-f81e-4c6c-a666-479d8f4e3f1f.png',
  '/lovable-uploads/e6af0d1c-dcb3-4d02-941d-0ab737ffad83.png',
  '/lovable-uploads/242a6241-e3c9-4628-9bee-4c81262eeb3e.png',
  '/lovable-uploads/5a4881ff-0af8-4998-81d1-f13d1fc1b7d1.png',
  '/lovable-uploads/8feaf7ab-0f70-42d5-9b80-fbbcf2f96595.png',
  '/lovable-uploads/6823cebb-1b87-4aac-9835-1d227adb1e2a.png',
  '/lovable-uploads/e9b8e1a0-fb14-4e33-8e6c-e8f85a71d326.png',
  '/lovable-uploads/a8d33cf4-446a-408a-aeaa-65f7cb21ee9c.png',
  '/lovable-uploads/6f675042-fc8c-4549-8373-529418f50f8d.png',
  '/lovable-uploads/2b677267-ec65-4c83-ae90-9301d10f5a90.png',
  '/lovable-uploads/2653c886-6632-476f-b90a-f498f2b8ca2e.png',
  '/lovable-uploads/d60eaef4-6e63-4386-860b-c02648902533.png',
  '/lovable-uploads/ecea1661-19fa-49d7-8d7c-ab03fc569d77.png',
  '/lovable-uploads/55f44f7d-705e-4056-bef4-668d9934786b.png',
  '/lovable-uploads/c3d552bd-6818-4848-97dc-17a222a5b25a.png',
  '/lovable-uploads/c15d82fe-c722-44c8-979a-5305e6b1f0bd.png',
  '/lovable-uploads/60e4855d-f792-4984-a882-c9e763c83da6.png',
];

// Précharger les images prioritaires immédiatement
preloadImages(priorityImages, true);

// Précharger les images secondaires après le chargement initial de la page
window.addEventListener('load', () => {
  preloadImages(secondaryImages);
});

createRoot(document.getElementById("root")!).render(<App />);
