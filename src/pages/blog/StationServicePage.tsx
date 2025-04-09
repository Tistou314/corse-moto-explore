
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

  const strategicStations = allStations.filter(station => station.isStrategic);
  
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
          <div className="mb-12 space-y-6">
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
            
            <Card>
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

                <div>
                  <h3 className="font-medium mb-2">Stations à privilégier</h3>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                    <li><strong>Centre montagneux</strong> : ne manquez pas les stations de Vivario ou Venaco avant de traverser</li>
                    <li><strong>Région du Niolu</strong> : la station de Calacuccia est souvent la seule option</li>
                    <li><strong>Alta Rocca</strong> : ravitaillez-vous au Col de Bavella avant de parcourir cette région</li>
                    <li><strong>Côte Ouest</strong> : la station de Porto est essentielle avant la route côtière sinueuse</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-2xl font-semibold mb-4">Liste des stations par région</h2>
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
              {station.address && (
                <p className="text-muted-foreground mb-2">
                  <strong>Adresse:</strong> {station.address}
                </p>
              )}
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
