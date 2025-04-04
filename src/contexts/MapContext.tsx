
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Remplacez cette valeur par votre clé API Mapbox
const DEFAULT_MAPBOX_TOKEN = 'pk.eyJ1IjoiZXhhbXBsZSIsImEpIjoiY2xAMUJDZGVmZ2gxaWprbG1ub3BxcnN0dXZ3eHl6In0.89KloJ4E5J9NSt_HznQs9A';

type MapContextType = {
  mapboxToken: string;
  setMapboxToken: (token: string) => void;
  isMapConfigured: boolean;
};

const MapContext = createContext<MapContextType | undefined>(undefined);

export const MapProvider = ({ children }: { children: ReactNode }) => {
  const [mapboxToken, setMapboxToken] = useState<string>(() => {
    // Try to load from localStorage on initial render or use default token
    if (typeof window !== 'undefined') {
      return localStorage.getItem('mapbox_token') || DEFAULT_MAPBOX_TOKEN;
    }
    return DEFAULT_MAPBOX_TOKEN;
  });

  const [isMapConfigured, setIsMapConfigured] = useState<boolean>(true); // Always configured now

  useEffect(() => {
    // Persist token to localStorage when it changes
    if (mapboxToken && mapboxToken !== DEFAULT_MAPBOX_TOKEN) {
      localStorage.setItem('mapbox_token', mapboxToken);
    }
    setIsMapConfigured(true); // Always set to true
  }, [mapboxToken]);

  return (
    <MapContext.Provider value={{ mapboxToken, setMapboxToken, isMapConfigured }}>
      {children}
    </MapContext.Provider>
  );
};

export const useMap = (): MapContextType => {
  const context = useContext(MapContext);
  if (context === undefined) {
    throw new Error('useMap must be used within a MapProvider');
  }
  return context;
};
