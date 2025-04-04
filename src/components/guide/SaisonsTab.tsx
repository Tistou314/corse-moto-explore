
import SeasonAccordion from './SeasonAccordion';

const SaisonsTab = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-border">
      <h2 className="text-2xl font-bold mb-4">Meilleures périodes pour visiter</h2>
      <p className="mb-4">
        La Corse bénéficie d'un climat méditerranéen avec des étés chauds et secs et des hivers doux et humides. 
        Le choix de la période de visite influencera grandement votre expérience.
      </p>

      <SeasonAccordion />

      <div className="mt-8 p-4 bg-muted rounded-lg">
        <h3 className="font-bold mb-2">Bon à savoir</h3>
        <p>
          Quelle que soit la saison choisie, n'oubliez pas que la météo en montagne peut changer rapidement. 
          Prévoyez toujours un équipement adapté aux variations de température et à la pluie, 
          même en plein été.
        </p>
      </div>
    </div>
  );
};

export default SaisonsTab;
