import { useState } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MapPin, Layers, Filter, Download } from 'lucide-react';
import { itineraries } from '@/data/itineraires';

const getPageMetadata = () => {
  return {
    title: "Carte Interactive | Moto en Corse",
    description: "Explorez les itinéraires et points d'intérêt pour votre aventure moto en Corse."
  };
};

const MapPage = () => {
  const [mapApiKey, setMapApiKey] = useState('');
  const [showApiInput, setShowApiInput] = useState(true);
  const metadata = getPageMetadata();

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Helmet>
      
      <Navbar />
      
      {/* Main Content */}
      <div className="flex-grow bg-muted py-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">Carte Interactive</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explorez les itinéraires et points d'intérêt pour votre aventure moto en Corse
            </p>
          </div>

          {showApiInput ? (
            <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-sm mb-8">
              <h2 className="text-xl font-bold mb-4">Configuration de la carte</h2>
              <p className="text-muted-foreground mb-4">
                Pour utiliser la carte interactive, vous avez besoin d'une clé API Mapbox. 
                Vous pouvez en obtenir une gratuitement sur <a href="https://mapbox.com" target="_blank" rel="noopener noreferrer" className="text-corsica-blue hover:underline">mapbox.com</a>.
              </p>
              <div className="space-y-4">
                <div>
                  <label htmlFor="mapApiKey" className="block text-sm font-medium mb-1">
                    Clé API Mapbox
                  </label>
                  <Input
                    id="mapApiKey"
                    type="text"
                    value={mapApiKey}
                    onChange={(e) => setMapApiKey(e.target.value)}
                    placeholder="pk.eyJ1Ijoi..."
                  />
                </div>
                <Button 
                  className="w-full bg-corsica-blue hover:bg-corsica-blue/90"
                  onClick={() => setShowApiInput(false)}
                  disabled={!mapApiKey}
                >
                  Configurer la carte
                </Button>
                <p className="text-xs text-muted-foreground">
                  Votre clé API est stockée uniquement dans votre navigateur et n'est jamais partagée.
                </p>
              </div>
            </div>
          ) : (
            <div className="mb-6 bg-white p-4 rounded-lg shadow-sm">
              <div className="flex flex-col md:flex-row justify-between gap-4">
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex items-center gap-1">
                    <Layers className="w-4 h-4" />
                    <span>Layers</span>
                  </Button>
                  <Button variant="outline" size="sm" className="flex items-center gap-1">
                    <Filter className="w-4 h-4" />
                    <span>Filtres</span>
                  </Button>
                  <Button variant="outline" size="sm" className="flex items-center gap-1">
                    <Download className="w-4 h-4" />
                    <span>Export</span>
                  </Button>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-corsica-red"
                  onClick={() => setShowApiInput(true)}
                >
                  Modifier la clé API
                </Button>
              </div>
            </div>
          )}

          {/* Map Container */}
          {!showApiInput ? (
            <div className="bg-white rounded-lg shadow-sm p-4 mb-8">
              <div className="map-container bg-corsica-light flex items-center justify-center border border-dashed border-gray-300">
                <div className="text-center p-6">
                  <MapPin className="w-12 h-12 text-corsica-slate mx-auto mb-4" />
                  <h3 className="text-xl font-medium mb-2">Carte en cours de chargement</h3>
                  <p className="text-muted-foreground max-w-md mx-auto mb-4">
                    La carte interactive s'afficherait ici avec votre clé API. 
                    Dans cette version de démonstration, nous utilisons un placeholder.
                  </p>
                  <Button 
                    variant="outline" 
                    className="bg-white"
                    onClick={() => alert("Cette fonctionnalité sera implémentée ultérieurement.")}
                  >
                    Charger la carte
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <h2 className="text-xl font-bold mb-4">À propos de la carte interactive</h2>
              <p className="text-muted-foreground mb-4">
                Une fois configurée, la carte interactive vous permettra de :
              </p>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground mb-4">
                <li>Visualiser tous les itinéraires moto en Corse</li>
                <li>Filtrer par type de route, difficulté, et durée</li>
                <li>Explorer les points d'intérêt (panoramas, plages, sites culturels)</li>
                <li>Localiser les stations-service et ateliers moto</li>
                <li>Exporter les tracés pour votre GPS</li>
              </ul>
            </div>
          )}

          {/* Itineraries Table */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-bold mb-4">Itinéraires disponibles</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-muted">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Nom</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Région</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Distance</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Durée</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Difficulté</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {itineraries.map((itinerary, index) => (
                    <tr key={itinerary.id} className={index % 2 === 0 ? "bg-white" : "bg-muted/20"}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-medium">{itinerary.title}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-muted-foreground">{itinerary.region}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-muted-foreground">{itinerary.distance}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-muted-foreground">{itinerary.duration}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                          ${itinerary.difficulty === 'facile' ? 'bg-green-100 text-green-800' : 
                            itinerary.difficulty === 'moyen' ? 'bg-yellow-100 text-yellow-800' : 
                            'bg-red-100 text-red-800'}`}>
                          {itinerary.difficulty.charAt(0).toUpperCase() + itinerary.difficulty.slice(1)}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MapPage;
