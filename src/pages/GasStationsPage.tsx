
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import { Fuel, Map, List, Info } from 'lucide-react';
import { 
  allGasStations, 
  strategicGasStations 
} from '@/data/gas-stations';

const GasStationsPage = () => {
  // État pour le filtrage des stations
  const [activeRegion, setActiveRegion] = useState('all');
  
  // Compteurs pour la page
  const totalStations = allGasStations.length;
  const strategicStationsCount = strategicGasStations.length;
  
  // Groupement par région pour l'affichage
  const groupedByRegion = allGasStations.reduce((acc, station) => {
    if (!acc[station.region]) {
      acc[station.region] = [];
    }
    acc[station.region].push(station);
    return acc;
  }, {} as Record<string, typeof allGasStations>);
  
  const regions = Object.keys(groupedByRegion).sort();
  
  // Stations à afficher selon le filtre actif
  const displayedStations = activeRegion === 'all' 
    ? allGasStations 
    : groupedByRegion[activeRegion] || [];

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
            <TabsTrigger value="tips">Conseils pratiques</TabsTrigger>
            <TabsTrigger value="list">Liste des stations</TabsTrigger>
            <TabsTrigger value="regions">Régions</TabsTrigger>
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
                    <span>{strategicStationsCount} stations stratégiques</span>
                  </Badge>
                  <Badge variant="outline">
                    {totalStations} stations au total
                  </Badge>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-3">Stations importantes</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Station de Vivario</strong> : Point de ravitaillement crucial avant de traverser le centre montagneux</li>
                  <li><strong>Station de Venaco</strong> : Indispensable si vous empruntez la route du centre</li>
                  <li><strong>Station de Calacuccia</strong> : La seule option dans la région du Niolu</li>
                  <li><strong>Station du Col de Bavella</strong> : Essentielle avant de s'aventurer dans la région de l'Alta Rocca</li>
                  <li><strong>Station de Porto</strong> : Dernière station avant plusieurs heures de route côtière</li>
                </ul>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="tips">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-3">Conseils pour les motards</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Faites toujours le plein avant de vous engager dans les routes de montagne ou les régions isolées</li>
                  <li>Les stations des zones rurales peuvent avoir des horaires réduits, notamment hors saison</li>
                  <li>Certaines stations peuvent être fermées le dimanche</li>
                  <li>L'autonomie réelle de votre moto sur routes sinueuses est souvent 20-30% inférieure à celle annoncée</li>
                  <li>Prévoyez un plan B pour votre ravitaillement lors de longs trajets</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-3">Planification et itinéraires</h3>
                <p className="mb-4">Pour bien planifier vos pleins :</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Identifiez les stations stratégiques sur votre itinéraire avant de partir</li>
                  <li>Ne laissez jamais votre réservoir descendre en dessous de la moitié dans les zones isolées</li>
                  <li>Consultez les horaires d'ouverture des stations en dehors des villes principales</li>
                  <li>Les grands axes et les villes principales (Bastia, Ajaccio, Calvi, Porto-Vecchio) disposent de stations ouvertes plus tard, voire 24h/24</li>
                </ul>
              </div>
              
              <div className="md:col-span-2 bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-3">Spécificités saisonnières</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium mb-2">Haute saison (Juin-Septembre)</h4>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      <li>Files d'attente possibles dans les zones touristiques</li>
                      <li>Horaires étendus pour la plupart des stations</li>
                      <li>Prix légèrement plus élevés dans certaines stations côtières</li>
                      <li>Presque toutes les stations sont ouvertes</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Basse saison (Octobre-Mai)</h4>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      <li>Horaires réduits dans les zones rurales et montagneuses</li>
                      <li>Certaines stations fermées dans les villages très touristiques</li>
                      <li>Planification plus importante nécessaire pour les longs trajets</li>
                      <li>Stations des axes principaux toujours ouvertes</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="list">
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-4">Liste complète des stations</h3>
                <div className="mb-4 flex flex-wrap gap-2">
                  <Button 
                    variant={activeRegion === 'all' ? "default" : "outline"}
                    onClick={() => setActiveRegion('all')}
                  >
                    Toutes ({allGasStations.length})
                  </Button>
                  {regions.map(region => (
                    <Button 
                      key={region}
                      variant={activeRegion === region ? "default" : "outline"}
                      onClick={() => setActiveRegion(region)}
                    >
                      {region} ({groupedByRegion[region].length})
                    </Button>
                  ))}
                </div>
                
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Nom</TableHead>
                        <TableHead>Marque</TableHead>
                        <TableHead>Adresse</TableHead>
                        <TableHead>Horaires</TableHead>
                        <TableHead>Carburants</TableHead>
                        <TableHead>Services</TableHead>
                        <TableHead>Stratégique</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {displayedStations.map((station) => (
                        <TableRow key={station.id}>
                          <TableCell className="font-medium">{station.name}</TableCell>
                          <TableCell>{station.brand}</TableCell>
                          <TableCell>{station.address}</TableCell>
                          <TableCell>{station.hours}{station.seasonalHours ? ' (saisonnier)' : ''}</TableCell>
                          <TableCell>
                            <div className="flex flex-wrap gap-1">
                              {station.fuelTypes.map(fuel => (
                                <Badge key={fuel} variant="outline" className="text-xs">
                                  {fuel}
                                </Badge>
                              ))}
                            </div>
                          </TableCell>
                          <TableCell>
                            {station.services && station.services.length > 0 ? (
                              <div className="flex flex-wrap gap-1">
                                {station.services.map(service => (
                                  <Badge key={service} variant="secondary" className="text-xs">
                                    {service}
                                  </Badge>
                                ))}
                              </div>
                            ) : (
                              "-"
                            )}
                          </TableCell>
                          <TableCell>
                            {station.isStrategic ? (
                              <Badge variant="warning" className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200">Oui</Badge>
                            ) : (
                              "Non"
                            )}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="regions">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3">Stations-service par région</h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {regions.map((region) => (
                  <Button
                    key={region}
                    variant="outline"
                    className="justify-start h-auto py-4 px-4" 
                    onClick={() => setActiveRegion(region)}
                  >
                    <div className="text-left">
                      <h4 className="font-medium">{region}</h4>
                      <p className="text-sm text-muted-foreground">{groupedByRegion[region].length} stations</p>
                    </div>
                  </Button>
                ))}
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
