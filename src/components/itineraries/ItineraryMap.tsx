
import React from 'react';

interface ItineraryMapProps {
  itinerary: {
    id: string;
    title: string;
    latitude: number;
    longitude: number;
    pointsOfInterest?: any[];
  };
}

const ItineraryMap = ({ itinerary }: ItineraryMapProps) => {
  // Carte supprimée sur demande
  return null;
};

export default ItineraryMap;
