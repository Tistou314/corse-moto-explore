
import { Itinerary } from '@/data/itineraries';
import { Clock, RouteIcon, Mountain, Flag, MapPin, Bike, Calendar, MapIcon, AlertTriangle, Award } from 'lucide-react';
import { formatContent } from '@/utils/markdownFormatter';

interface ItineraryDescriptionProps {
  itinerary: Itinerary;
}

const ItineraryDescription = ({ itinerary }: ItineraryDescriptionProps) => {
  // Format the description as markdown to support rich text
  const formattedDescription = formatContent(itinerary.fullDescription);
  
  // Improved paragraph and text formatting
  const processedDescription = formattedDescription
    .replace(/<p>/g, '<p class="mb-6 leading-relaxed text-gray-700 text-base">')
    .replace(/<ul>/g, '<ul class="list-disc pl-6 mb-6 space-y-3 text-gray-600">')
    .replace(/<h2>/g, '<h2 class="text-2xl font-bold mt-10 mb-6 text-corsica-blue border-b pb-3 border-gray-200">')
    .replace(/<h3>/g, '<h3 class="text-xl font-semibold mt-8 mb-4 text-corsica-blue pl-2 border-l-4 border-corsica-blue">')
    .replace(/<h4>/g, '<h4 class="text-lg font-medium mt-6 mb-3 text-gray-800">')
    .replace(/<strong>/g, '<strong class="font-semibold text-corsica-blue">');
  
  return (
    <div className="bg-white rounded-lg shadow-sm p-8 mb-8 space-y-8">
      <h2 className="text-3xl font-bold mb-6 text-corsica-blue border-b-2 border-corsica-blue pb-4">
        Description de l'itinéraire
      </h2>
      
      {/* Description with enhanced typography and spacing */}
      <div 
        className="prose prose-lg max-w-none mb-12 
        prose-headings:text-corsica-blue 
        prose-headings:mt-10 prose-headings:mb-6 
        prose-p:text-gray-700 prose-p:leading-loose prose-p:my-6 
        prose-a:text-corsica-blue 
        prose-li:my-3 prose-li:leading-relaxed 
        prose-ul:my-8 prose-ul:space-y-3 
        prose-strong:text-corsica-blue"
        dangerouslySetInnerHTML={{ __html: processedDescription }}
      />
      
      {/* Info badges with improved layout */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
        {[
          { icon: MapPin, label: 'Région', value: itinerary.region },
          { icon: Bike, label: 'Type', value: itinerary.roadType },
          { icon: Clock, label: 'Durée', value: itinerary.duration },
          { icon: RouteIcon, label: 'Distance', value: itinerary.distance },
          { icon: Mountain, label: 'Dénivelé', value: itinerary.elevation },
          ...(itinerary.bestSeason ? [{ icon: Calendar, label: 'Saison', value: itinerary.bestSeason }] : []),
          ...(itinerary.roadCondition ? [{ icon: MapIcon, label: 'État', value: itinerary.roadCondition }] : [])
        ].map(({ icon: Icon, label, value }, index) => (
          <div 
            key={index} 
            className="bg-corsica-blue/10 rounded-lg p-4 flex items-center space-x-4 hover:bg-corsica-blue/20 transition-colors"
          >
            <div className="bg-corsica-blue/20 p-3 rounded-full">
              <Icon className="w-5 h-5 text-corsica-blue" />
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wider">{label}</p>
              <p className="font-semibold text-corsica-blue">{value}</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Start/End points with more visual hierarchy */}
      <div className="border-t pt-10">
        <h3 className="text-2xl font-bold mb-8 text-corsica-blue">
          Points de départ et d'arrivée
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { 
              color: 'green', 
              icon: Flag, 
              title: 'Point de départ', 
              description: itinerary.startPoint 
            },
            { 
              color: 'red', 
              icon: Flag, 
              title: 'Point d\'arrivée', 
              description: itinerary.endPoint 
            }
          ].map(({ color, icon: Icon, title, description }, index) => (
            <div 
              key={index} 
              className={`bg-gradient-to-br from-${color}-50 to-${color}-100 rounded-lg p-8 border border-${color}-200 hover:shadow-lg transition-shadow`}
            >
              <div className="flex items-start">
                <div className={`bg-${color}-500 rounded-full p-3 mr-5`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className={`font-medium text-${color}-800 mb-4 text-lg`}>{title}</h4>
                  <p className={`text-${color}-700 leading-relaxed font-semibold`}>{description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Highlights and Tips with more prominent sections */}
      {(itinerary.highlights || itinerary.tips) && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {itinerary.highlights && itinerary.highlights.length > 0 && (
            <div className="bg-blue-50 rounded-lg p-8 border border-blue-200">
              <div className="flex items-center mb-6 space-x-4">
                <div className="bg-blue-500 rounded-full p-3">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-bold text-xl text-blue-800">Points forts</h4>
              </div>
              <ul className="space-y-3 pl-2">
                {itinerary.highlights.map((highlight, index) => (
                  <li 
                    key={index} 
                    className="text-blue-700 leading-relaxed flex items-start group"
                  >
                    <span className="mr-3 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {itinerary.tips && itinerary.tips.length > 0 && (
            <div className="bg-amber-50 rounded-lg p-8 border border-amber-200">
              <div className="flex items-center mb-6 space-x-4">
                <div className="bg-amber-500 rounded-full p-3">
                  <AlertTriangle className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-bold text-xl text-amber-800">Conseils utiles</h4>
              </div>
              <ul className="space-y-3 pl-2">
                {itinerary.tips.map((tip, index) => (
                  <li 
                    key={index} 
                    className="text-amber-700 leading-relaxed flex items-start group"
                  >
                    <span className="mr-3 text-amber-500 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    {tip}
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
