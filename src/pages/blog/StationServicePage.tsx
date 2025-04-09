
import React, { useEffect, useState } from 'react';
import { ArrowUp, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Fuel } from 'lucide-react';
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
  const [isVisible, setIsVisible] = useState(false);
  const [activeRegion, setActiveRegion] = useState('all');
  
  // Group stations by region
  const regionMap = {
    'all': [...bastiaStations, ...nebbioStations, ...ajaccioStations, ...balagneStations, 
           ...extremeSudStations, ...centreStations, ...castagnacciaStations, ...valincoStations, 
           ...luccianaBigugliaStations, ...plaineOrientaleStations],
    'Bastia': bastiaStations,
    'Nebbio': nebbioStations,
    'Ajaccio': ajaccioStations,
    'Balagne': balagneStations,
    'Extrême Sud': extremeSudStations,
    'Centre': centreStations,
    'Castagniccia': castagnacciaStations,
    'Valinco': valincoStations,
    'Lucciana-Biguglia': luccianaBigugliaStations,
    'Plaine Orientale': plaineOrientaleStations
  };
  
  // Get stations for current active region
  const displayedStations = regionMap[activeRegion] || regionMap.all;
  
  // Count strategic stations
  const strategicStations = displayedStations.filter(station => station.isStrategic);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <Hero 
        title="Stations-service en Corse" 
        subtitle="Trouvez facilement où faire le plein lors de votre road trip moto sur l'Île de Beauté"
        imagePath="/lovable-uploads/137f7ca8-9347-4597-acb8-7f92a1430224.png"
      />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link 
            to="/blog" 
            className="inline-flex items-center text-corsica-blue hover:text-corsica-blue/80 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour aux articles
          </Link>
          
          <h1 className="text-3xl font-bold mb-2">Stations-service en Corse</h1>
          <p className="text-muted-foreground mb-6">
            Liste complète des stations-service pour les motards en Corse.
          </p>

          {/* Section des recommandations */}
          <div className="mb-6 space-y-6">
            <Alert className="bg-amber-50 border-amber-200">
              <AlertTitle className="text-amber-800 text-lg font-medium">
                Stations stratégiques à connaître
              </AlertTitle>
              <AlertDescription className="text-amber-700">
                Certaines stations sont essentielles lors de votre road trip à moto en Corse, 
                car elles sont situées dans des zones où les alternatives sont rares. 
                Elles sont identifiées par un badge spécial dans notre liste.
              </AlertDescription>
            </Alert>
            
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Conseils pour votre ravitaillement en Corse</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Préparez votre itinéraire</h3>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                    <li>Planifiez vos arrêts carburant à l'avance, surtout dans les zones montagneuses</li>
                    <li>Ne laissez jamais votre réservoir descendre en dessous de la moitié en régions isolées</li>
                    <li>Considérez l'autonomie réelle de votre moto sur routes sinueuses (souvent 20-30% inférieure)</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Horaires et disponibilité</h3>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                    <li>Les stations des petits villages peuvent avoir des horaires réduits, surtout hors saison</li>
                    <li>Certaines stations peuvent être fermées le dimanche ou les jours fériés</li>
                    <li>En haute saison (juillet-août), prévoyez plus de temps pour faire le plein dans les zones touristiques</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Liste des stations par région</h2>
            <div className="mb-4 flex flex-wrap gap-2">
              <Button 
                variant={activeRegion === 'all' ? "default" : "outline"}
                onClick={() => setActiveRegion('all')}
              >
                Toutes ({regionMap.all.length})
              </Button>
              {Object.keys(regionMap).filter(key => key !== 'all').map(region => (
                <Button 
                  key={region}
                  variant={activeRegion === region ? "default" : "outline"}
                  onClick={() => setActiveRegion(region)}
                >
                  {region} ({regionMap[region].length})
                </Button>
              ))}
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow mb-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-medium">
                  {activeRegion === 'all' ? 'Toutes les stations' : `Stations en ${activeRegion}`}
                </h3>
                <Badge variant="outline" className="flex items-center gap-1">
                  <Fuel className="h-3 w-3" />
                  <span>{displayedStations.length} stations</span>
                  {strategicStations.length > 0 && (
                    <span> • {strategicStations.length} stratégiques</span>
                  )}
                </Badge>
              </div>
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
        
        <div className="mt-10 text-center">
          <Link to="/blog">
            <Button className="bg-corsica-blue hover:bg-corsica-blue/90">
              <ArrowLeft className="w-4 h-4 mr-2" /> Retour aux articles du blog
            </Button>
          </Link>
        </div>

        {isVisible && (
          <button 
            onClick={scrollToTop} 
            className="fixed bottom-6 right-6 bg-corsica-blue text-white p-3 rounded-full shadow-lg hover:bg-corsica-blue/90 transition-colors z-50"
            aria-label="Retour en haut de page"
          >
            <ArrowUp className="w-6 h-6" />
          </button>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default StationServicePage;
