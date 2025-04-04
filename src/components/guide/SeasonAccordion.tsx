
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const SeasonAccordion = () => {
  return (
    <Accordion type="single" collapsible className="mt-6">
      <AccordionItem value="printemps">
        <AccordionTrigger className="text-lg font-medium">
          Printemps (Avril à Juin)
        </AccordionTrigger>
        <AccordionContent className="text-muted-foreground">
          <p className="mb-2">
            <strong>Avantages :</strong> Considérée comme la période idéale pour visiter la Corse à moto. 
            Le maquis est en fleur, les températures sont agréables (15-25°C) et l'affluence touristique est modérée.
          </p>
          <p className="mb-2">
            <strong>À savoir :</strong> Certains cols en haute montagne peuvent encore être fermés en avril. 
            Les prix sont plus abordables qu'en été.
          </p>
          <p>
            <strong>Recommandation :</strong> Mai est particulièrement recommandé pour le parfait équilibre 
            entre météo, affluence et beauté des paysages.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="ete">
        <AccordionTrigger className="text-lg font-medium">
          Été (Juillet à Août)
        </AccordionTrigger>
        <AccordionContent className="text-muted-foreground">
          <p className="mb-2">
            <strong>Avantages :</strong> Tous les cols sont ouverts, la mer est chaude pour la baignade, 
            et les journées sont longues.
          </p>
          <p className="mb-2">
            <strong>Inconvénients :</strong> Forte affluence touristique, routes côtières encombrées, 
            et températures parfois très chaudes (25-35°C). Les prix sont au plus haut.
          </p>
          <p>
            <strong>Conseils :</strong> Roulez tôt le matin pour éviter la chaleur et le trafic. 
            Réservez votre hébergement longtemps à l'avance.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="automne">
        <AccordionTrigger className="text-lg font-medium">
          Automne (Septembre à Octobre)
        </AccordionTrigger>
        <AccordionContent className="text-muted-foreground">
          <p className="mb-2">
            <strong>Avantages :</strong> Période sous-estimée mais excellente. Températures encore douces (15-25°C), 
            mer chaude et affluence en nette baisse dès mi-septembre.
          </p>
          <p className="mb-2">
            <strong>À savoir :</strong> Les couleurs automnales donnent une beauté particulière aux paysages. 
            Les tarifs redeviennent plus raisonnables.
          </p>
          <p>
            <strong>Recommandation :</strong> Septembre offre presque tous les avantages de l'été sans ses inconvénients.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="hiver">
        <AccordionTrigger className="text-lg font-medium">
          Hiver (Novembre à Mars)
        </AccordionTrigger>
        <AccordionContent className="text-muted-foreground">
          <p className="mb-2">
            <strong>Avantages :</strong> Très peu de touristes, routes désertes, prix bas. 
            Températures encore douces sur la côte (8-15°C).
          </p>
          <p className="mb-2">
            <strong>Inconvénients :</strong> Précipitations plus fréquentes, certains cols fermés pour neige, 
            beaucoup d'établissements fermés hors saison.
          </p>
          <p>
            <strong>À qui s'adresse cette période :</strong> Aux motards expérimentés qui ne craignent pas 
            les conditions changeantes et qui cherchent la tranquillité.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default SeasonAccordion;
