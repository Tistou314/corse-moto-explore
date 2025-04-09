
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  gasStationPOIs, 
  bastiaPOIs,
  ajaccioPOIs,
  capCorsePOIs,
  nebbioPOIs,
  balagnePOIs,
  extremeSudPOIs,
  centrePOIs,
  castagnacciaPOIs,
  valincoPOIs,
  luccianaBigugliaPOIs,
  plaineOrientalePOIs
} from '@/data/points-of-interest/gas-stations-poi';
import { MapLocation } from '@/components/map/types';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Fuel, MapPin, Info } from 'lucide-react';

// Helper components for station listings
const StationsList = ({ stations }: { stations: MapLocation[] }) => {
  return (
    <div className="space-y-2">
      {stations.map((station) => (
        <Card key={station.id} className="hover:shadow-md transition-shadow">
          <CardContent className="p-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium">{station.title}</h3>
                <p className="text-sm text-muted-foreground">{station.address}</p>
                {station.description && (
                  <p className="text-sm mt-1">{station.description}</p>
                )}
              </div>
              {station.isPrimary && (
                <Badge className="bg-amber-500 hover:bg-amber-600 flex items-center gap-1">
                  <Fuel className="h-3 w-3" />
                  Stratégique
                </Badge>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
      
      {stations.length === 0 && (
        <div className="text-center p-4 text-muted-foreground">
          Aucune station dans cette région
        </div>
      )}
    </div>
  );
};

const RegionTabs = () => {
  return (
    <Tabs defaultValue="bastia" className="w-full">
      <TabsList className="mb-4 flex flex-wrap h-auto">
        <TabsTrigger value="bastia">Bastia ({bastiaPOIs.length})</TabsTrigger>
        <TabsTrigger value="ajaccio">Ajaccio ({ajaccioPOIs.length})</TabsTrigger>
        <TabsTrigger value="cap-corse">Cap Corse ({capCorsePOIs.length})</TabsTrigger>
        <TabsTrigger value="nebbio">Nebbio ({nebbioPOIs.length})</TabsTrigger>
        <TabsTrigger value="balagne">Balagne ({balagnePOIs.length})</TabsTrigger>
        <TabsTrigger value="extreme-sud">Extrême Sud ({extremeSudPOIs.length})</TabsTrigger>
        <TabsTrigger value="centre">Centre ({centrePOIs.length})</TabsTrigger>
        <TabsTrigger value="castagniccia">Castagniccia ({castagnacciaPOIs.length})</TabsTrigger>
        <TabsTrigger value="valinco">Valinco ({valincoPOIs.length})</TabsTrigger>
        <TabsTrigger value="lucciana-biguglia">Lucciana-Biguglia ({luccianaBigugliaPOIs.length})</TabsTrigger>
        <TabsTrigger value="plaine-orientale">Plaine Orientale ({plaineOrientalePOIs.length})</TabsTrigger>
      </TabsList>
      <TabsContent value="bastia">
        <h3 className="text-xl font-semibold mb-3">Stations-service à Bastia</h3>
        <StationsList stations={bastiaPOIs} />
      </TabsContent>
      <TabsContent value="ajaccio">
        <h3 className="text-xl font-semibold mb-3">Stations-service à Ajaccio</h3>
        <StationsList stations={ajaccioPOIs} />
      </TabsContent>
      <TabsContent value="cap-corse">
        <h3 className="text-xl font-semibold mb-3">Stations-service du Cap Corse</h3>
        <StationsList stations={capCorsePOIs} />
      </TabsContent>
      <TabsContent value="nebbio">
        <h3 className="text-xl font-semibold mb-3">Stations-service du Nebbio</h3>
        <StationsList stations={nebbioPOIs} />
      </TabsContent>
      <TabsContent value="balagne">
        <h3 className="text-xl font-semibold mb-3">Stations-service de Balagne</h3>
        <StationsList stations={balagnePOIs} />
      </TabsContent>
      <TabsContent value="extreme-sud">
        <h3 className="text-xl font-semibold mb-3">Stations-service de l'Extrême Sud</h3>
        <StationsList stations={extremeSudPOIs} />
      </TabsContent>
      <TabsContent value="centre">
        <h3 className="text-xl font-semibold mb-3">Stations-service du Centre</h3>
        <StationsList stations={centrePOIs} />
      </TabsContent>
      <TabsContent value="castagniccia">
        <h3 className="text-xl font-semibold mb-3">Stations-service de Castagniccia</h3>
        <StationsList stations={castagnacciaPOIs} />
      </TabsContent>
      <TabsContent value="valinco">
        <h3 className="text-xl font-semibold mb-3">Stations-service du Valinco</h3>
        <StationsList stations={valincoPOIs} />
      </TabsContent>
      <TabsContent value="lucciana-biguglia">
        <h3 className="text-xl font-semibold mb-3">Stations-service de Lucciana-Biguglia</h3>
        <StationsList stations={luccianaBigugliaPOIs} />
      </TabsContent>
      <TabsContent value="plaine-orientale">
        <h3 className="text-xl font-semibold mb-3">Stations-service de la Plaine Orientale</h3>
        <StationsList stations={plaineOrientalePOIs} />
      </TabsContent>
    </Tabs>
  );
};

const StationServicePage = () => {
  const totalStations = gasStationPOIs.length;
  const strategicStations = gasStationPOIs.filter(station => station.isPrimary).length;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Stations-service en Corse</h1>
          <p className="text-muted-foreground">
            Guide complet des stations-service sur l'Île de Beauté pour planifier vos pleins lors de votre voyage à moto.
          </p>
          <div className="flex gap-2 mt-4">
            <Link to="/" className="text-muted-foreground hover:text-foreground">
              Accueil
            </Link>
            <span className="text-muted-foreground">/</span>
            <Link to="/blog" className="text-muted-foreground hover:text-foreground">
              Blog
            </Link>
            <span className="text-muted-foreground">/</span>
            <span>Stations-service</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="col-span-3 md:col-span-2">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Stations-service par région</h2>
              <p className="mb-6">
                La Corse compte environ {totalStations} stations-service réparties sur l'ensemble du territoire, 
                dont {strategicStations} considérées comme stratégiques pour les motards. 
                Consultez la liste par région pour planifier vos ravitaillements.
              </p>
              
              <div className="bg-amber-50 border border-amber-200 p-4 rounded-md mb-6">
                <div className="flex items-start gap-3">
                  <Info className="h-5 w-5 text-amber-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-amber-800">À savoir avant de partir</h3>
                    <p className="text-sm text-amber-700 mt-1">
                      Les stations marquées comme stratégiques sont essentielles pour les motards traversant la Corse.
                      Elles sont situées à des points clés où le ravitaillement peut être difficile.
                      Vérifiez toujours vos niveaux avant de vous engager dans les zones montagneuses.
                    </p>
                  </div>
                </div>
              </div>
              
              <RegionTabs />
              
              <div className="mt-6 border-t pt-4">
                <Link 
                  to="/gas-stations" 
                  className="inline-flex items-center text-corsica-blue hover:underline"
                >
                  <MapPin className="h-4 w-4 mr-1" />
                  Voir la carte interactive des stations-service
                </Link>
              </div>
            </CardContent>
          </Card>
          
          <Card className="col-span-3 md:col-span-1">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Conseils pour les motards</h3>
              
              <ul className="space-y-3">
                <li className="flex gap-2">
                  <Fuel className="h-5 w-5 text-amber-600 flex-shrink-0" />
                  <span>Faites le plein avant de partir pour les routes montagneuses</span>
                </li>
                <li className="flex gap-2">
                  <Fuel className="h-5 w-5 text-amber-600 flex-shrink-0" />
                  <span>Les stations rurales peuvent avoir des horaires réduits</span>
                </li>
                <li className="flex gap-2">
                  <Fuel className="h-5 w-5 text-amber-600 flex-shrink-0" />
                  <span>Certaines stations peuvent être fermées le dimanche</span>
                </li>
                <li className="flex gap-2">
                  <Fuel className="h-5 w-5 text-amber-600 flex-shrink-0" />
                  <span>Prévoyez un plan B pour le ravitaillement</span>
                </li>
                <li className="flex gap-2">
                  <Fuel className="h-5 w-5 text-amber-600 flex-shrink-0" />
                  <span>Les prix sont généralement plus élevés qu'en France continentale</span>
                </li>
              </ul>
              
              <div className="mt-6 pt-4 border-t">
                <h4 className="font-medium mb-2">Distances moyennes entre stations</h4>
                <p className="text-sm text-muted-foreground">
                  Sur les axes principaux: ~30-40 km<br />
                  Dans les zones montagneuses: ~50-80 km<br />
                  En zone rurale: Jusqu'à 100 km
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default StationServicePage;
