
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { MapPlaceholder } from '@/components/MapPlaceholder';
import { itineraries, Itinerary } from '@/data/itineraires';
import { ChevronLeft, Clock, Route, Mountain, Flag, Download, Star, Share2 } from 'lucide-react';

const ItineraryDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [itinerary, setItinerary] = useState<Itinerary | null>(null);
  const [rating, setRating] = useState<number | null>(null);
  const [hoverRating, setHoverRating] = useState<number | null>(null);

  useEffect(() => {
    if (id) {
      const foundItinerary = itineraries.find(item => item.id === id);
      if (foundItinerary) {
        setItinerary(foundItinerary);
      }
      // If not found, we will show a not found message
    }
  }, [id]);

  const handleRating = (rate: number) => {
    setRating(rate);
    // In a real app, we would send this to the backend
    alert(`Merci pour votre note de ${rate} étoiles !`);
  };

  if (!itinerary) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center bg-muted">
          <div className="text-center p-8">
            <h1 className="text-3xl font-bold mb-4">Itinéraire non trouvé</h1>
            <p className="text-muted-foreground mb-6">
              L'itinéraire que vous recherchez n'existe pas ou a été supprimé.
            </p>
            <Link to="/itineraires">
              <Button>Retour aux itinéraires</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Image */}
      <div 
        className="h-[50vh] relative bg-cover bg-center"
        style={{ backgroundImage: `url(${itinerary.image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12">
          <div className="container mx-auto">
            <Link to="/itineraires" className="inline-flex items-center text-white mb-4 hover:underline">
              <ChevronLeft className="w-4 h-4 mr-1" />
              Retour aux itinéraires
            </Link>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
              {itinerary.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-white">
              <span className="inline-flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                {itinerary.duration}
              </span>
              <span className="inline-flex items-center">
                <Route className="w-4 h-4 mr-1" />
                {itinerary.distance}
              </span>
              <span className="inline-flex items-center">
                <Mountain className="w-4 h-4 mr-1" />
                {itinerary.elevation}
              </span>
              <span className={`px-3 py-1 rounded-full text-sm font-medium
                ${itinerary.difficulty === 'facile' ? 'bg-green-500' : 
                  itinerary.difficulty === 'moyen' ? 'bg-yellow-500' : 
                  'bg-red-500'}`}>
                {itinerary.difficulty.charAt(0).toUpperCase() + itinerary.difficulty.slice(1)}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Main Description */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                <h2 className="text-2xl font-bold mb-4">Description</h2>
                <p className="text-muted-foreground mb-6 whitespace-pre-line">
                  {itinerary.fullDescription}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="inline-flex items-center px-3 py-1 rounded-md bg-muted text-sm">
                    Région: {itinerary.region}
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-md bg-muted text-sm">
                    Type de route: {itinerary.roadType}
                  </span>
                </div>
                
                <div className="border-t pt-6">
                  <h3 className="text-xl font-bold mb-3">Points de départ et d'arrivée</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="border rounded-lg p-4">
                      <div className="flex items-start">
                        <Flag className="w-5 h-5 text-corsica-green mr-2 mt-1" />
                        <div>
                          <h4 className="font-medium">Point de départ</h4>
                          <p className="text-muted-foreground">{itinerary.startPoint}</p>
                        </div>
                      </div>
                    </div>
                    <div className="border rounded-lg p-4">
                      <div className="flex items-start">
                        <Flag className="w-5 h-5 text-corsica-red mr-2 mt-1" />
                        <div>
                          <h4 className="font-medium">Point d'arrivée</h4>
                          <p className="text-muted-foreground">{itinerary.endPoint}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Section */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                <h2 className="text-2xl font-bold mb-4">Carte de l'itinéraire</h2>
                <MapPlaceholder />
                <div className="mt-4 flex justify-end">
                  <Button variant="outline" className="flex items-center">
                    <Download className="w-4 h-4 mr-2" />
                    Télécharger le GPX
                  </Button>
                </div>
              </div>

              {/* Points of Interest */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                <h2 className="text-2xl font-bold mb-4">Points d'intérêt</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {itinerary.pointsOfInterest.map((poi, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="flex items-start">
                        <MapPin className="w-5 h-5 text-corsica-blue mr-2 mt-1" />
                        <p>{poi}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Rating Section */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-2xl font-bold mb-4">Évaluez cet itinéraire</h2>
                <div className="flex flex-col items-center">
                  <div className="flex space-x-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        onClick={() => handleRating(star)}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(null)}
                        className="focus:outline-none"
                      >
                        <Star 
                          className={`w-8 h-8 ${
                            (hoverRating !== null ? star <= hoverRating : star <= (rating || 0))
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                  <p className="text-muted-foreground">
                    {rating ? `Vous avez noté ${rating} étoile${rating > 1 ? 's' : ''}` : 'Cliquez pour noter'}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Sidebar */}
            <div>
              {/* Quick Info */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                <h2 className="text-xl font-bold mb-4">Informations pratiques</h2>
                <ul className="space-y-3">
                  <li className="flex justify-between py-2 border-b">
                    <span className="text-muted-foreground">Durée</span>
                    <span className="font-medium">{itinerary.duration}</span>
                  </li>
                  <li className="flex justify-between py-2 border-b">
                    <span className="text-muted-foreground">Distance</span>
                    <span className="font-medium">{itinerary.distance}</span>
                  </li>
                  <li className="flex justify-between py-2 border-b">
                    <span className="text-muted-foreground">Dénivelé</span>
                    <span className="font-medium">{itinerary.elevation}</span>
                  </li>
                  <li className="flex justify-between py-2 border-b">
                    <span className="text-muted-foreground">Difficulté</span>
                    <span className={`font-medium
                      ${itinerary.difficulty === 'facile' ? 'text-green-600' : 
                        itinerary.difficulty === 'moyen' ? 'text-yellow-600' : 
                        'text-red-600'}`}>
                      {itinerary.difficulty.charAt(0).toUpperCase() + itinerary.difficulty.slice(1)}
                    </span>
                  </li>
                  <li className="flex justify-between py-2">
                    <span className="text-muted-foreground">Région</span>
                    <span className="font-medium">{itinerary.region}</span>
                  </li>
                </ul>
                
                <div className="mt-6 flex flex-col space-y-3">
                  <Button className="w-full bg-corsica-blue hover:bg-corsica-blue/90">
                    <Download className="w-4 h-4 mr-2" />
                    Télécharger le GPX
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Share2 className="w-4 h-4 mr-2" />
                    Partager
                  </Button>
                </div>
              </div>
              
              {/* Weather Info */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                <h2 className="text-xl font-bold mb-4">Météo recommandée</h2>
                <p className="text-muted-foreground mb-4">
                  Conditions optimales pour parcourir cet itinéraire :
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center">
                    <span className="w-6 h-6 mr-2 flex items-center justify-center bg-blue-100 text-blue-800 rounded-full">
                      ☀️
                    </span>
                    <span>Temps sec et ensoleillé</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-6 h-6 mr-2 flex items-center justify-center bg-blue-100 text-blue-800 rounded-full">
                      🌡️
                    </span>
                    <span>Température entre 15°C et 25°C</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-6 h-6 mr-2 flex items-center justify-center bg-blue-100 text-blue-800 rounded-full">
                      🌬️
                    </span>
                    <span>Peu ou pas de vent</span>
                  </li>
                </ul>
              </div>
              
              {/* Nearby Itineraries */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-bold mb-4">Itinéraires à proximité</h2>
                <div className="space-y-4">
                  {itineraries
                    .filter(item => item.id !== itinerary.id && item.region === itinerary.region)
                    .slice(0, 3)
                    .map(nearby => (
                      <Link 
                        key={nearby.id} 
                        to={`/itineraires/${nearby.id}`}
                        className="flex items-start space-x-3 p-3 rounded-md hover:bg-muted transition-colors"
                      >
                        <div className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
                          <img 
                            src={nearby.image} 
                            alt={nearby.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-medium line-clamp-1">{nearby.title}</h3>
                          <p className="text-sm text-muted-foreground line-clamp-2">
                            {nearby.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ItineraryDetailPage;
