
import { useMemo, useState, useCallback } from 'react';
import { itineraries } from '@/data/itineraires';
import { accommodations } from '@/data/accommodations';
import { MapLocation, isWithinCorsica } from '@/components/map/types';

export function useMapLocations() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('all');

  const prepareMapLocations = useCallback(() => {
    const locations: MapLocation[] = [];
    
    // Add itineraries
    itineraries.forEach(itinerary => {
      if (itinerary.latitude && itinerary.longitude) {
        if (isWithinCorsica(itinerary.latitude, itinerary.longitude)) {
          locations.push({
            id: itinerary.id,
            title: itinerary.title,
            latitude: itinerary.latitude,
            longitude: itinerary.longitude,
            type: 'itinerary',
            description: `${itinerary.distance} - ${itinerary.duration} - ${itinerary.difficulty}`,
            image: itinerary.image
          });
        }
      }
      
      // Add points of interest from each itinerary
      if (Array.isArray(itinerary.pointsOfInterest)) {
        itinerary.pointsOfInterest.forEach((poi, index) => {
          // Check if POI is already an object with coordinates
          if (typeof poi === 'object' && poi.latitude && poi.longitude) {
            if (isWithinCorsica(poi.latitude, poi.longitude)) {
              locations.push({
                id: `poi-${itinerary.id}-${index}`,
                title: poi.name,
                latitude: poi.latitude,
                longitude: poi.longitude,
                type: 'pointOfInterest',
                description: poi.description || '',
                isPrimary: true,
                image: poi.image
              });
            }
          }
        });
      }
    });

    // Add accommodations with valid coordinates
    accommodations.forEach(accommodation => {
      if (accommodation.latitude && accommodation.longitude) {
        if (isWithinCorsica(accommodation.latitude, accommodation.longitude)) {
          locations.push({
            id: accommodation.id,
            title: accommodation.name,
            latitude: accommodation.latitude,
            longitude: accommodation.longitude,
            type: 'accommodation',
            description: `${accommodation.type} - ${accommodation.location}`,
            image: accommodation.image,
            address: accommodation.address
          });
        }
      }
    });

    return locations;
  }, []);

  const allLocations = useMemo(() => prepareMapLocations(), [prepareMapLocations]);

  const filteredLocations = useMemo(() => {
    let filtered = allLocations;
    
    // Filter by tab first
    if (activeTab !== 'all') {
      filtered = filtered.filter(location => {
        if (activeTab === 'itineraries') return location.type === 'itinerary';
        if (activeTab === 'accommodations') return location.type === 'accommodation';
        if (activeTab === 'poi') return location.type === 'pointOfInterest';
        return true;
      });
    }
    
    // Then apply any additional filters
    if (activeFilter) {
      filtered = filtered.filter(location => location.type === activeFilter);
    }
    
    // Finally, apply search term
    if (searchTerm) {
      const lowercaseSearch = searchTerm.toLowerCase();
      filtered = filtered.filter(location => {
        return location.title.toLowerCase().includes(lowercaseSearch) ||
          (location.description && location.description.toLowerCase().includes(lowercaseSearch));
      });
    }
    
    return filtered;
  }, [allLocations, activeTab, activeFilter, searchTerm]);

  const locationStats = useMemo(() => {
    return {
      total: allLocations.length,
      itineraries: allLocations.filter(loc => loc.type === 'itinerary').length,
      accommodations: allLocations.filter(loc => loc.type === 'accommodation').length,
      poi: allLocations.filter(loc => loc.type === 'pointOfInterest').length
    };
  }, [allLocations]);

  return {
    allLocations,
    filteredLocations,
    locationStats,
    activeFilter,
    setActiveFilter,
    searchTerm,
    setSearchTerm,
    activeTab,
    setActiveTab
  };
}
