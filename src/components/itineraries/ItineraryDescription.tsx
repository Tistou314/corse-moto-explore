
import { Itinerary } from '@/data/itineraires';
import { Clock, Route, Mountain, Flag, MapPin, Bike } from 'lucide-react';
import { formatContent } from '@/utils/markdownFormatter';

interface ItineraryDescriptionProps {
  itinerary: Itinerary;
}

const ItineraryDescription = ({ itinerary }: ItineraryDescriptionProps) => {
  // Format the description as markdown to support rich text
  const formattedDescription = formatContent(itinerary.fullDescription);
  
  return (
    <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
      <h2 className="text-2xl font-bold mb-8 text-corsica-blue">Description de l'itinéraire</h2>
      
      {/* Description with rich text formatting and increased line height */}
      <div 
        className="prose prose-lg max-w-none mb-12 prose-headings:text-corsica-blue prose-headings:mt-8 prose-headings:mb-4 prose-p:text-gray-700 prose-p:leading-loose prose-p:my-6 prose-a:text-corsica-blue prose-li:my-2 prose-ul:my-6"
        dangerouslySetInnerHTML={{ __html: formattedDescription }}
      />
      
      {/* Info badges with more spacing */}
      <div className="flex flex-wrap gap-5 mb-12">
        <span className="inline-flex items-center px-5 py-2.5 rounded-full bg-corsica-blue/10 text-corsica-blue text-sm font-medium">
          <MapPin className="w-4 h-4 mr-2.5" />
          Région: {itinerary.region}
        </span>
        <span className="inline-flex items-center px-5 py-2.5 rounded-full bg-corsica-blue/10 text-corsica-blue text-sm font-medium">
          <Bike className="w-4 h-4 mr-2.5" />
          Type: {itinerary.roadType}
        </span>
        <span className="inline-flex items-center px-5 py-2.5 rounded-full bg-corsica-blue/10 text-corsica-blue text-sm font-medium">
          <Clock className="w-4 h-4 mr-2.5" />
          Durée: {itinerary.duration}
        </span>
        <span className="inline-flex items-center px-5 py-2.5 rounded-full bg-corsica-blue/10 text-corsica-blue text-sm font-medium">
          <Route className="w-4 h-4 mr-2.5" />
          Distance: {itinerary.distance}
        </span>
        <span className="inline-flex items-center px-5 py-2.5 rounded-full bg-corsica-blue/10 text-corsica-blue text-sm font-medium">
          <Mountain className="w-4 h-4 mr-2.5" />
          Dénivelé: {itinerary.elevation}
        </span>
      </div>
      
      {/* Start/End points with more spacing */}
      <div className="border-t pt-10">
        <h3 className="text-xl font-bold mb-8 text-corsica-blue">Points de départ et d'arrivée</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-7 border border-green-200">
            <div className="flex items-start">
              <div className="bg-green-500 rounded-full p-2.5 mr-5">
                <Flag className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-medium text-green-800 mb-3 text-lg">Point de départ</h4>
                <p className="text-green-700 leading-relaxed">{itinerary.startPoint}</p>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-lg p-7 border border-red-200">
            <div className="flex items-start">
              <div className="bg-red-500 rounded-full p-2.5 mr-5">
                <Flag className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-medium text-red-800 mb-3 text-lg">Point d'arrivée</h4>
                <p className="text-red-700 leading-relaxed">{itinerary.endPoint}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItineraryDescription;
