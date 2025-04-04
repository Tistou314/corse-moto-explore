
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

const DEFAULT_MAPBOX_TOKEN = 'pk.eyJ1IjoidGlzdG91ODAiLCJhIjoiY205MnQwc2N5MGJ5NTJscXRjZWl5OTI2OCJ9.gOC3-fgs2N_XvKDag37waA';

type MapContextType = {
  mapboxToken: string;
  setMapboxToken: (token: string) => void;
  isMapConfigured: boolean;
};

const MapContext = createContext<MapContextType | undefined>(undefined);

export const MapProvider = ({ children }: { children: ReactNode }) => {
  const [mapboxToken, setMapboxToken] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('mapbox_token') || DEFAULT_MAPBOX_TOKEN;
    }
    return DEFAULT_MAPBOX_TOKEN;
  });

  const [isMapConfigured, setIsMapConfigured] = useState<boolean>(true);

  useEffect(() => {
    if (mapboxToken && mapboxToken !== DEFAULT_MAPBOX_TOKEN) {
      localStorage.setItem('mapbox_token', mapboxToken);
    }
    setIsMapConfigured(true);
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
