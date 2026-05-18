import { Clock, RouteIcon, Mountain, Flag, MapPin, Bike, Calendar, MapIcon, Lightbulb, Award, ArrowRight } from 'lucide-react';
import { formatContent } from '../../../../src/utils/markdownFormatter';
import type { Itinerary } from '@/lib/data';

interface Props {
  itinerary: Itinerary;
}

/**
 * v2 override of the legacy ItineraryDescription. Markdown body and the
 * info-badges grid are visually identical to the legacy component. Only
 * the start/end and highlights/tips blocks are redesigned: white cards,
 * thin colored left border, soft shadow, and a unified timeline banner
 * for the route endpoints.
 */
export default function ItineraryDescription({ itinerary }: Props) {
  const it = itinerary as Itinerary & { fullDescription?: string };
  const formatted = formatContent(it.fullDescription ?? itinerary.description);
  const processed = formatted
    .replace(/<p>/g, '<p class="mb-6 leading-relaxed text-gray-700 text-base">')
    .replace(/<ul>/g, '<ul class="list-disc pl-6 mb-6 space-y-3 text-gray-600">')
    .replace(/<h2>/g, '<h2 class="text-2xl font-bold mt-10 mb-6 text-corsica-blue border-b pb-3 border-gray-200">')
    .replace(/<h3>/g, '<h3 class="text-xl font-semibold mt-8 mb-4 text-corsica-blue pl-2 border-l-4 border-corsica-blue">')
    .replace(/<h4>/g, '<h4 class="text-lg font-medium mt-6 mb-3 text-gray-800">')
    .replace(/<strong>/g, '<strong class="font-semibold text-corsica-blue">');

  const infoBadges = [
    { icon: MapPin, label: 'Région', value: itinerary.region },
    { icon: Bike, label: 'Type', value: (itinerary as Itinerary & { roadType?: string }).roadType },
    { icon: Clock, label: 'Durée', value: itinerary.duration },
    { icon: RouteIcon, label: 'Distance', value: itinerary.distance },
    { icon: Mountain, label: 'Dénivelé', value: itinerary.elevation },
    ...(itinerary.bestSeason ? [{ icon: Calendar, label: 'Saison', value: itinerary.bestSeason }] : []),
    ...((itinerary as Itinerary & { roadCondition?: string }).roadCondition
      ? [{ icon: MapIcon, label: 'État', value: (itinerary as Itinerary & { roadCondition: string }).roadCondition }]
      : []),
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-8 mb-8 space-y-8">
      <h2 className="text-3xl font-bold mb-6 text-corsica-blue border-b-2 border-corsica-blue pb-4">
        Description de l'itinéraire
      </h2>

      {/* Markdown body — unchanged */}
      <div
        className="prose prose-lg max-w-none mb-12
        prose-headings:text-corsica-blue
        prose-headings:mt-10 prose-headings:mb-6
        prose-p:text-gray-700 prose-p:leading-loose prose-p:my-6
        prose-a:text-corsica-blue
        prose-li:my-3 prose-li:leading-relaxed
        prose-ul:my-8 prose-ul:space-y-3
        prose-strong:text-corsica-blue"
        dangerouslySetInnerHTML={{ __html: processed }}
      />

      {/* Info badges grid — single column on mobile to let long values breathe */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-12">
        {infoBadges.map(({ icon: Icon, label, value }, index) => (
          <div
            key={index}
            className="bg-corsica-blue/10 rounded-lg p-4 flex items-center gap-4 hover:bg-corsica-blue/20 transition-colors min-w-0"
          >
            <div className="bg-corsica-blue/20 p-3 rounded-full flex-shrink-0">
              <Icon className="w-5 h-5 text-corsica-blue" />
            </div>
            <div className="min-w-0">
              <p className="text-xs text-gray-500 uppercase tracking-wider">{label}</p>
              <p className="font-semibold text-corsica-blue break-words">{value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* === REDESIGN: Timeline banner Départ → Arrivée === */}
      <div className="border-t pt-10">
        <h3 className="text-2xl font-bold mb-8 text-corsica-blue">Points de départ et d'arrivée</h3>

        <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
          <div className="flex flex-col md:flex-row items-stretch">
            {/* Départ */}
            <div className="flex-1 border-l-4 border-corsica-emerald p-6 flex items-center gap-5">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-corsica-emerald/10 flex items-center justify-center">
                <Flag className="w-5 h-5 text-corsica-emerald" strokeWidth={2.5} />
              </div>
              <div className="min-w-0">
                <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">Point de départ</p>
                <p className="text-lg font-semibold text-corsica-charcoal break-words">{itinerary.startPoint}</p>
              </div>
            </div>

            {/* Connector */}
            <div className="hidden md:flex items-center px-6 text-corsica-slate" aria-hidden="true">
              <span className="h-px w-12 bg-gradient-to-r from-corsica-emerald via-gray-300 to-corsica-coral" />
              <ArrowRight className="w-5 h-5 mx-2 text-gray-400" strokeWidth={2} />
              <span className="h-px w-12 bg-gradient-to-r from-corsica-emerald via-gray-300 to-corsica-coral" />
            </div>
            <div className="md:hidden flex justify-center py-3 text-corsica-slate" aria-hidden="true">
              <ArrowRight className="w-5 h-5 rotate-90 text-gray-400" strokeWidth={2} />
            </div>

            {/* Arrivée */}
            <div className="flex-1 border-l-4 border-corsica-coral p-6 flex items-center gap-5">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-corsica-coral/10 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-corsica-coral" strokeWidth={2.5} />
              </div>
              <div className="min-w-0">
                <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">Point d'arrivée</p>
                <p className="text-lg font-semibold text-corsica-charcoal break-words">{itinerary.endPoint}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* === REDESIGN: Highlights & Tips grid === */}
      {(itinerary.highlights?.length || itinerary.tips?.length) ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {itinerary.highlights && itinerary.highlights.length > 0 && (
            <article className="bg-white rounded-lg shadow-sm border border-gray-100 border-l-4 border-l-corsica-azure p-7 hover:shadow-medium transition-shadow">
              <header className="flex items-center gap-4 mb-5">
                <div className="w-10 h-10 rounded-full bg-corsica-azure/10 flex items-center justify-center">
                  <Award className="w-5 h-5 text-corsica-azure" strokeWidth={2.5} />
                </div>
                <h4 className="font-bold text-lg text-corsica-charcoal">Points forts</h4>
              </header>
              <ul className="space-y-3">
                {itinerary.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700 leading-relaxed">
                    <span aria-hidden="true" className="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-corsica-azure" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </article>
          )}

          {itinerary.tips && itinerary.tips.length > 0 && (
            <article className="bg-white rounded-lg shadow-sm border border-gray-100 border-l-4 border-l-corsica-blue p-7 hover:shadow-medium transition-shadow">
              <header className="flex items-center gap-4 mb-5">
                <div className="w-10 h-10 rounded-full bg-corsica-blue/10 flex items-center justify-center">
                  <Lightbulb className="w-5 h-5 text-corsica-blue" strokeWidth={2.5} />
                </div>
                <h4 className="font-bold text-lg text-corsica-charcoal">Conseils utiles</h4>
              </header>
              <ul className="space-y-3">
                {itinerary.tips.map((tip, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700 leading-relaxed">
                    <span aria-hidden="true" className="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-corsica-blue" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </article>
          )}
        </div>
      ) : null}
    </div>
  );
}
