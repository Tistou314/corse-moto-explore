
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type MapContextType = {
  mapboxToken: string;
  setMapboxToken: (token: string) => void;
  isMapConfigured: boolean;
};

const MapContext = createContext<MapContextType | undefined>(undefined);

export const MapProvider = ({ children }: { children: ReactNode }) => {
  const [mapboxToken, setMapboxToken] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('mapbox_token') || '';
    }
    return '';
  });

  const [isMapConfigured, setIsMapConfigured] = useState<boolean>(false);

  useEffect(() => {
    if (mapboxToken && mapboxToken.startsWith('pk.')) {
      localStorage.setItem('mapbox_token', mapboxToken);
      setIsMapConfigured(true);
    } else {
      setIsMapConfigured(false);
    }
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
