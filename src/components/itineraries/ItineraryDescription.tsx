
import { Itinerary } from '@/data/itineraries';
import { Clock, Route, Mountain, Flag, MapPin, Bike, Calendar, Road, AlertTriangle, Award } from 'lucide-react';
import { formatContent } from '@/utils/markdownFormatter';

interface ItineraryDescriptionProps {
  itinerary: Itinerary;
}

const ItineraryDescription = ({ itinerary }: ItineraryDescriptionProps) => {
  // Format the description as markdown to support rich text
  const formattedDescription = formatContent(itinerary.fullDescription);
  
  // Add paragraph breaks for better readability
  const processedDescription = formattedDescription
    .replace(/<p>/g, '<p class="mb-6 leading-relaxed">')
    .replace(/<ul>/g, '<ul class="list-disc pl-6 mb-6 space-y-2">')
    .replace(/<h2>/g, '<h2 class="text-2xl font-bold mt-10 mb-6 text-corsica-blue">')
    .replace(/<h3>/g, '<h3 class="text-xl font-bold mt-8 mb-4 text-corsica-blue">')
    .replace(/<h4>/g, '<h4 class="text-lg font-bold mt-6 mb-3 text-corsica-blue">')
    .replace(/<strong>/g, '<strong class="font-semibold text-corsica-blue">');
  
  return (
    <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
      <h2 className="text-2xl font-bold mb-8 text-corsica-blue">Description de l'itinéraire</h2>
      
      {/* Description with rich text formatting and increased line height */}
      <div 
        className="prose prose-lg max-w-none mb-12 prose-headings:text-corsica-blue prose-headings:mt-10 prose-headings:mb-6 
        prose-p:text-gray-700 prose-p:leading-loose prose-p:my-6 prose-a:text-corsica-blue 
        prose-li:my-3 prose-li:leading-relaxed prose-ul:my-8 prose-ul:space-y-3 prose-strong:text-corsica-blue"
        dangerouslySetInnerHTML={{ __html: processedDescription }}
      />
      
      {/* Info badges with more spacing */}
      <div className="flex flex-wrap gap-6 mb-12">
        <span className="inline-flex items-center px-6 py-3 rounded-full bg-corsica-blue/10 text-corsica-blue text-sm font-medium">
          <MapPin className="w-5 h-5 mr-3" />
          Région: {itinerary.region}
        </span>
        <span className="inline-flex items-center px-6 py-3 rounded-full bg-corsica-blue/10 text-corsica-blue text-sm font-medium">
          <Bike className="w-5 h-5 mr-3" />
          Type: {itinerary.roadType}
        </span>
        <span className="inline-flex items-center px-6 py-3 rounded-full bg-corsica-blue/10 text-corsica-blue text-sm font-medium">
          <Clock className="w-5 h-5 mr-3" />
          Durée: {itinerary.duration}
        </span>
        <span className="inline-flex items-center px-6 py-3 rounded-full bg-corsica-blue/10 text-corsica-blue text-sm font-medium">
          <Route className="w-5 h-5 mr-3" />
          Distance: {itinerary.distance}
        </span>
        <span className="inline-flex items-center px-6 py-3 rounded-full bg-corsica-blue/10 text-corsica-blue text-sm font-medium">
          <Mountain className="w-5 h-5 mr-3" />
          Dénivelé: {itinerary.elevation}
        </span>
        
        {itinerary.bestSeason && (
          <span className="inline-flex items-center px-6 py-3 rounded-full bg-corsica-blue/10 text-corsica-blue text-sm font-medium">
            <Calendar className="w-5 h-5 mr-3" />
            Saison: {itinerary.bestSeason}
          </span>
        )}
        
        {itinerary.roadCondition && (
          <span className="inline-flex items-center px-6 py-3 rounded-full bg-corsica-blue/10 text-corsica-blue text-sm font-medium">
            <Road className="w-5 h-5 mr-3" />
            État: {itinerary.roadCondition}
          </span>
        )}
      </div>
      
      {/* Start/End points with more spacing */}
      <div className="border-t pt-10">
        <h3 className="text-xl font-bold mb-8 text-corsica-blue">Points de départ et d'arrivée</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-8 border border-green-200">
            <div className="flex items-start">
              <div className="bg-green-500 rounded-full p-3 mr-5">
                <Flag className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-medium text-green-800 mb-4 text-lg">Point de départ</h4>
                <p className="text-green-700 leading-relaxed">{itinerary.startPoint}</p>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-lg p-8 border border-red-200">
            <div className="flex items-start">
              <div className="bg-red-500 rounded-full p-3 mr-5">
                <Flag className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-medium text-red-800 mb-4 text-lg">Point d'arrivée</h4>
                <p className="text-red-700 leading-relaxed">{itinerary.endPoint}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Highlights and Tips */}
      {(itinerary.highlights || itinerary.tips) && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {itinerary.highlights && itinerary.highlights.length > 0 && (
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-8 border border-blue-200">
              <div className="flex items-start mb-6">
                <div className="bg-blue-500 rounded-full p-3 mr-5">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-medium text-blue-800 text-lg">Points forts</h4>
                </div>
              </div>
              <ul className="space-y-3 pl-4">
                {itinerary.highlights.map((highlight, index) => (
                  <li key={index} className="text-blue-700 leading-relaxed flex items-start">
                    <span className="text-blue-500 mr-2">•</span> {highlight}
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {itinerary.tips && itinerary.tips.length > 0 && (
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg p-8 border border-amber-200">
              <div className="flex items-start mb-6">
                <div className="bg-amber-500 rounded-full p-3 mr-5">
                  <AlertTriangle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-medium text-amber-800 text-lg">Conseils utiles</h4>
                </div>
              </div>
              <ul className="space-y-3 pl-4">
                {itinerary.tips.map((tip, index) => (
                  <li key={index} className="text-amber-700 leading-relaxed flex items-start">
                    <span className="text-amber-500 mr-2">•</span> {tip}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ItineraryDescription;
