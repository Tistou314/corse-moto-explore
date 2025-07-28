
import { itineraries } from '@/data/itineraries';

const ItineraryTable = () => {
  return (
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
                      itinerary.difficulty === 'moyen' ? 'bg-corsica-coral/10 text-corsica-coral' : 
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
  );
};

export default ItineraryTable;
