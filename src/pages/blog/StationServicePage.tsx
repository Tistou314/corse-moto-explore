
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  bastiaStations,
  nebbioStations,
  ajaccioStations,
  balagneStations,
  extremeSudStations,
  centreStations,
  castagnacciaStations,
  valincoStations,
  luccianaBigugliaStations,
  plaineOrientaleStations
} from '@/data/gas-stations/regions';

const StationServicePage = () => {
  const allStations = [
    ...bastiaStations,
    ...nebbioStations,
    ...ajaccioStations,
    ...balagneStations,
    ...extremeSudStations,
    ...centreStations,
    ...castagnacciaStations,
    ...valincoStations,
    ...luccianaBigugliaStations,
    ...plaineOrientaleStations
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Stations-service en Corse</h1>
          <p className="text-muted-foreground">
            Liste complète des stations-service pour les motards en Corse.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allStations.map((station) => (
            <div 
              key={station.id} 
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2">{station.name}</h3>
              <p className="text-muted-foreground mb-2">
                <strong>Marque:</strong> {station.brand}
              </p>
              <p className="text-muted-foreground mb-2">
                <strong>Région:</strong> {station.region}
              </p>
              <p className="text-muted-foreground mb-2">
                <strong>Horaires:</strong> {station.hours}
              </p>
              <div className="mt-4">
                <strong>Types de carburant:</strong>
                <ul className="list-disc list-inside text-sm">
                  {station.fuelTypes.map((fuel) => (
                    <li key={fuel}>{fuel}</li>
                  ))}
                </ul>
              </div>
              {station.isStrategic && (
                <div className="mt-4">
                  <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Station stratégique
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default StationServicePage;
