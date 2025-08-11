
import { useState, useEffect } from 'react';
import { SerpApiService } from '@/services/serpApiService';
import { accommodations } from '@/data/accommodations';

export const useAccommodationImages = (accommodationId: string) => {
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isCancelled = false;
    const loadImage = async () => {
      try {
        // 1) Priorité: image uploadée localement (clé legacy + nouvelle clé dédiée)
        const uploadedLegacyKey = `accommodation_${accommodationId}_image`;
        const uploadedKey = `accommodation_${accommodationId}_uploaded_image`;
        const serpKey = `accommodation_${accommodationId}_serp_image`;

        const uploadedImage = localStorage.getItem(uploadedKey) || localStorage.getItem(uploadedLegacyKey);
        if (uploadedImage) {
          if (!isCancelled) setImage(uploadedImage);
          return;
        }

        // 2) Ensuite: image SerpAPI en cache
        const cachedSerpImage = localStorage.getItem(serpKey);
        if (cachedSerpImage) {
          if (!isCancelled) setImage(cachedSerpImage);
          return;
        }

        // 3) Sinon: tenter une récupération via SerpAPI si la clé est présente
        const apiKey = localStorage.getItem('SERP_API_KEY');
        if (!apiKey) {
          if (!isCancelled) setImage(null);
          return;
        }

        const acc = accommodations.find(a => a.id === accommodationId);
        if (!acc) {
          if (!isCancelled) setImage(null);
          return;
        }

        const serp = new SerpApiService(apiKey);
        const result = await serp.searchAccommodation(acc.name, acc.location);
        if (result?.image) {
          localStorage.setItem(serpKey, result.image);
          if (!isCancelled) setImage(result.image);
        } else {
          if (!isCancelled) setImage(null);
        }
      } catch (error) {
        console.error("Erreur lors du chargement de l'image:", error);
        if (!isCancelled) setImage(null);
      } finally {
        if (!isCancelled) setLoading(false);
      }
    };

    loadImage();
    return () => {
      isCancelled = true;
    };
  }, [accommodationId]);

  return { image, loading };
};
