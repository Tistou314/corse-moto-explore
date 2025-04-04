
const MotoTab = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-border">
      <h2 className="text-2xl font-bold mb-4">Préparation de la moto</h2>
      <p className="mb-6">
        Une bonne préparation de votre machine est essentielle pour profiter sereinement
        des routes corses sans mauvaises surprises mécaniques.
      </p>

      <h3 className="text-xl font-semibold mb-3">Révision générale avant le départ</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="border rounded-lg p-4">
          <h4 className="font-bold mb-2">Pneumatiques</h4>
          <p className="text-muted-foreground">Vérifiez l'état et la pression. Privilégiez des pneus sport-touring ou trail en bon état.</p>
        </div>
        <div className="border rounded-lg p-4">
          <h4 className="font-bold mb-2">Freins</h4>
          <p className="text-muted-foreground">Contrôlez l'état des plaquettes et disques. Les descentes peuvent être longues.</p>
        </div>
        <div className="border rounded-lg p-4">
          <h4 className="font-bold mb-2">Suspension</h4>
          <p className="text-muted-foreground">Ajustez en fonction de la charge. Les routes peuvent être dégradées par endroits.</p>
        </div>
        <div className="border rounded-lg p-4">
          <h4 className="font-bold mb-2">Chaîne/Courroie</h4>
          <p className="text-muted-foreground">Vérifiez tension et graissage. Prévoyez de quoi l'entretenir pendant le séjour.</p>
        </div>
      </div>

      <h3 className="text-xl font-semibold mb-3">Types de motos recommandées</h3>
      <div className="p-4 bg-muted rounded-lg mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h4 className="font-bold mb-2">Routières/GT</h4>
            <p className="text-sm text-muted-foreground">
              Confort sur longues distances, protection contre les éléments, bonne capacité de bagagerie.
              <br /><span className="italic">Idéal pour : couples, longs trajets avec bagages.</span>
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-2">Roadsters/Naked</h4>
            <p className="text-sm text-muted-foreground">
              Bonnes sensations, maniabilité, position plus dynamique.
              <br /><span className="italic">Idéal pour : motards solo, bagagerie légère.</span>
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-2">Trails/Crossovers</h4>
            <p className="text-sm text-muted-foreground">
              Polyvalence, position droite confortable, suspensions adaptées aux routes dégradées.
              <br /><span className="italic">Idéal pour : découvrir toute l'île, y compris quelques pistes.</span>
            </p>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-semibold mb-3">Outils et pièces à emporter</h3>
      <ul className="list-disc pl-5 mb-6 space-y-2 text-muted-foreground">
        <li>Kit de base d'outils adaptés à votre machine</li>
        <li>Bombe anti-crevaison et kit de réparation tubeless</li>
        <li>Huile moteur (0,5L)</li>
        <li>Câbles d'accélérateur et d'embrayage (pour les motos concernées)</li>
        <li>Fusibles et ampoules de rechange</li>
        <li>Scotch américain et colliers de serrage</li>
        <li>WD-40 ou équivalent</li>
      </ul>

      <div className="p-4 bg-corsica-orange/10 rounded-lg border border-corsica-orange/20">
        <h3 className="font-bold text-corsica-orange mb-2">Carburant et autonomie</h3>
        <p className="text-muted-foreground mb-3">
          Les stations-service sont présentes dans toutes les grandes villes et sur les axes principaux,
          mais peuvent être plus rares dans l'intérieur des terres.
        </p>
        <p className="text-muted-foreground">
          <strong>Conseil :</strong> Faites le plein régulièrement et ne descendez jamais sous le quart de réservoir
          dans les zones montagneuses de l'intérieur. Certaines stations peuvent être fermées hors saison.
        </p>
      </div>
    </div>
  );
};

export default MotoTab;
