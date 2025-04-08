
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MapBox from '@/components/map/MapBox';
import MapContainer from '@/components/map/MapContainer';
import { allGasStations } from '@/data/gas-stations';
import { MapLocation } from '@/components/map/types';

const GasStationsPage = () => {
  const [gasStationLocations, setGasStationLocations] = useState<MapLocation[]>([]);
  
  useEffect(() => {
    // Transform gas stations data into map locations
    const locations = allGasStations.map(station => ({
      id: station.id,
      title: station.name,
      latitude: station.latitude,
      longitude: station.longitude,
      description: `${station.brand} - ${station.fuelTypes.join(', ')}`,
      type: 'gasStation' as const,
      isPrimary: station.isStrategic
    }));
    
    setGasStationLocations(locations);
    console.log('Loaded gas stations:', locations.length);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Stations-service en Corse</h1>
          <p className="text-muted-foreground">
            Trouvez toutes les stations-service sur l'Île de Beauté pour planifier vos pleins lors de votre voyage à moto.
          </p>
          <div className="flex gap-2 mt-4">
            <Link to="/" className="text-muted-foreground hover:text-foreground">
              Accueil
            </Link>
            <span className="text-muted-foreground">/</span>
            <span>Stations-service</span>
          </div>
        </div>

        <MapContainer locations={gasStationLocations} />
        
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">À propos des stations-service en Corse</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3">Stations stratégiques</h3>
              <p className="mb-2">
                Les stations marquées comme stratégiques sont essentielles pour les motards traversant la Corse. 
                Elles sont situées à des points clés où le ravitaillement peut être difficile.
              </p>
              <p>
                Il est recommandé de faire le plein à ces stations pour éviter de se retrouver en panne sèche 
                dans les zones montagneuses ou isolées.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3">Conseils pour les motards</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Vérifiez toujours votre niveau de carburant avant de partir pour les routes montagneuses</li>
                <li>Les stations dans les zones rurales peuvent avoir des horaires réduits, surtout hors saison</li>
                <li>Certaines stations peuvent être fermées le dimanche ou les jours fériés</li>
                <li>Prévoyez un plan B pour le ravitaillement lors de longs trajets</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default GasStationsPage;
