
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

const BookingTips = () => {
  return (
    <section className="bg-muted py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">Conseils pour votre réservation</h2>
          
          <Collapsible className="mb-4">
            <CollapsibleTrigger className="flex items-center justify-between w-full rounded-lg border bg-card p-4 text-left font-medium">
              <div>Quand réserver pour un voyage à moto en Corse ?</div>
            </CollapsibleTrigger>
            <CollapsibleContent className="bg-card px-4 pb-4 pt-2 rounded-b-lg border border-t-0">
              <p>Pour un voyage à moto en Corse, il est recommandé de réserver votre hébergement <strong>au moins 3 à 4 mois à l'avance</strong> si vous prévoyez de voyager pendant la haute saison (juin à septembre). La Corse est une destination très prisée pendant l'été et les hébergements adaptés aux motards peuvent être rapidement complets.</p>
            </CollapsibleContent>
          </Collapsible>
          
          <Collapsible className="mb-4">
            <CollapsibleTrigger className="flex items-center justify-between w-full rounded-lg border bg-card p-4 text-left font-medium">
              <div>Quels critères privilégier pour un hébergement motard ?</div>
            </CollapsibleTrigger>
            <CollapsibleContent className="bg-card px-4 pb-4 pt-2 rounded-b-lg border border-t-0">
              <p>Pour un voyage à moto, privilégiez les hébergements offrant :<br />
              - Un parking sécurisé ou garage pour votre moto<br />
              - La proximité des itinéraires motards intéressants<br />
              - Des équipements pour le séchage de vos vêtements<br />
              - Un espace pour l'entretien basique de votre moto<br />
              - Des conseils d'itinéraires adaptés aux motards</p>
            </CollapsibleContent>
          </Collapsible>
          
          <Collapsible>
            <CollapsibleTrigger className="flex items-center justify-between w-full rounded-lg border bg-card p-4 text-left font-medium">
              <div>Quelle est la meilleure période pour rouler en Corse ?</div>
            </CollapsibleTrigger>
            <CollapsibleContent className="bg-card px-4 pb-4 pt-2 rounded-b-lg border border-t-0">
              <p>Les meilleures périodes pour un voyage à moto en Corse sont :<br />
              - <strong>Mai-Juin</strong> : température agréable, routes moins fréquentées<br />
              - <strong>Septembre-Octobre</strong> : climat doux, prix plus abordables<br />
              <br />
              Évitez si possible juillet-août (forte affluence, chaleur, prix élevés) et l'hiver (routes en montagne parfois fermées).</p>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>
    </section>
  );
};

export default BookingTips;
