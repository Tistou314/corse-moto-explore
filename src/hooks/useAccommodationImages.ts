
import { useState, useEffect } from 'react';

export const useAccommodationImages = (accommodationId: string) => {
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadImage = async () => {
      try {
        // Vérifier d'abord s'il y a une image uploadée pour cet hébergement
        const uploadedImageKey = `accommodation_${accommodationId}_image`;
        const uploadedImage = localStorage.getItem(uploadedImageKey);
        
        if (uploadedImage) {
          setImage(uploadedImage);
        } else {
          // Fallback vers l'image par défaut si pas d'image uploadée
          setImage(null);
        }
      } catch (error) {
        console.error('Erreur lors du chargement de l\'image:', error);
        setImage(null);
      } finally {
        setLoading(false);
      }
    };

    loadImage();
  }, [accommodationId]);

  return { image, loading };
};
