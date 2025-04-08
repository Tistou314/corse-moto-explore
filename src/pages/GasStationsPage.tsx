
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MapContainer from '@/components/map/MapContainer';
import { 
  gasStationPOIs, 
  strategicGasStationPOIs 
} from '@/data/points-of-interest/gas-stations-poi';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { MapPin, Info } from 'lucide-react';

const GasStationsPage = () => {
  const [showStrategic, setShowStrategic] = useState(true);
  const locationsToShow = showStrategic ? strategicGasStationPOIs : gasStationPOIs;
  
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

        <Tabs defaultValue="map" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="map">Carte</TabsTrigger>
            <TabsTrigger value="info">Informations</TabsTrigger>
          </TabsList>
          
          <TabsContent value="map" className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold">Carte des stations-service</h2>
              <div className="flex items-center gap-2">
                <Badge 
                  variant={showStrategic ? "default" : "outline"} 
                  className="cursor-pointer"
                  onClick={() => setShowStrategic(true)}
                >
                  <MapPin className="h-3 w-3 mr-1" />
                  Stations stratégiques
                </Badge>
                <Badge 
                  variant={!showStrategic ? "default" : "outline"} 
                  className="cursor-pointer"
                  onClick={() => setShowStrategic(false)}
                >
                  <MapPin className="h-3 w-3 mr-1" />
                  Toutes les stations
                </Badge>
              </div>
            </div>
            
            <MapContainer locations={locationsToShow} />
            
            <div className="bg-muted p-4 rounded-lg">
              <div className="flex items-center gap-2">
                <Info className="h-4 w-4 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">
                  {showStrategic 
                    ? "Les stations stratégiques sont essentielles pour les motards traversant des zones isolées."
                    : "Toutes les stations-service disponibles en Corse sont affichées sur la carte."}
                </p>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="info">
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
              
              <div className="md:col-span-2 bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-3">Article détaillé</h3>
                <p className="mb-4">
                  Pour plus d'informations sur les stations-service en Corse, consultez notre article dédié :
                </p>
                <Link 
                  to="/blog/stations-service-corse" 
                  className="inline-flex items-center text-corsica-blue hover:underline"
                >
                  Lire notre guide complet des stations-service
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
};

export default GasStationsPage;
