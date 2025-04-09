
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  gasStationPOIs, 
  strategicGasStationPOIs,
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Info, Fuel } from 'lucide-react';

const GasStationsPage = () => {
  const totalStations = gasStationPOIs.length;
  const strategicStations = strategicGasStationPOIs.length;

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

        <Tabs defaultValue="info" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="info">Informations</TabsTrigger>
            <TabsTrigger value="list">Liste des régions</TabsTrigger>
          </TabsList>
          
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
                <div className="mt-4 flex items-center gap-2">
                  <Badge variant="outline" className="flex items-center gap-1">
                    <Fuel className="h-3 w-3" />
                    <span>{strategicStations} stations stratégiques</span>
                  </Badge>
                  <Badge variant="outline">
                    {totalStations} stations au total
                  </Badge>
                </div>
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
                <h3 className="text-xl font-semibold mb-3">Liste détaillée</h3>
                <p className="mb-4">
                  Pour plus d'informations et consulter la liste des stations-service par région en Corse :
                </p>
                <Link 
                  to="/blog/stations-service-corse" 
                  className="inline-flex items-center text-corsica-blue hover:underline"
                >
                  Consulter la liste complète des stations-service par région
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="list">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3">Stations-service par région</h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                <Link to="/blog/stations-service-corse" className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                  <h4 className="font-medium">Bastia</h4>
                  <p className="text-sm text-muted-foreground">{bastiaPOIs.length} stations</p>
                </Link>
                <Link to="/blog/stations-service-corse" className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                  <h4 className="font-medium">Ajaccio</h4>
                  <p className="text-sm text-muted-foreground">{ajaccioPOIs.length} stations</p>
                </Link>
                <Link to="/blog/stations-service-corse" className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                  <h4 className="font-medium">Cap Corse</h4>
                  <p className="text-sm text-muted-foreground">{capCorsePOIs.length} stations</p>
                </Link>
                <Link to="/blog/stations-service-corse" className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                  <h4 className="font-medium">Nebbio</h4>
                  <p className="text-sm text-muted-foreground">{nebbioPOIs.length} stations</p>
                </Link>
                <Link to="/blog/stations-service-corse" className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                  <h4 className="font-medium">Balagne</h4>
                  <p className="text-sm text-muted-foreground">{balagnePOIs.length} stations</p>
                </Link>
                <Link to="/blog/stations-service-corse" className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                  <h4 className="font-medium">Extrême Sud</h4>
                  <p className="text-sm text-muted-foreground">{extremeSudPOIs.length} stations</p>
                </Link>
                <Link to="/blog/stations-service-corse" className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                  <h4 className="font-medium">Centre</h4>
                  <p className="text-sm text-muted-foreground">{centrePOIs.length} stations</p>
                </Link>
                <Link to="/blog/stations-service-corse" className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                  <h4 className="font-medium">Castagniccia</h4>
                  <p className="text-sm text-muted-foreground">{castagnacciaPOIs.length} stations</p>
                </Link>
                <Link to="/blog/stations-service-corse" className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                  <h4 className="font-medium">Valinco</h4>
                  <p className="text-sm text-muted-foreground">{valincoPOIs.length} stations</p>
                </Link>
                <Link to="/blog/stations-service-corse" className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                  <h4 className="font-medium">Lucciana-Biguglia</h4>
                  <p className="text-sm text-muted-foreground">{luccianaBigugliaPOIs.length} stations</p>
                </Link>
                <Link to="/blog/stations-service-corse" className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                  <h4 className="font-medium">Plaine Orientale</h4>
                  <p className="text-sm text-muted-foreground">{plaineOrientalePOIs.length} stations</p>
                </Link>
              </div>
              
              <div className="mt-6 pt-4 border-t flex items-center">
                <Info className="h-4 w-4 text-muted-foreground mr-2" />
                <p className="text-sm text-muted-foreground">
                  Cliquez sur une région pour voir la liste détaillée des stations-service.
                </p>
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
