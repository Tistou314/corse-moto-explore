
const EquipementTab = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-border">
      <h2 className="text-2xl font-bold mb-4">Équipement recommandé</h2>
      <p className="mb-6">
        Un équipement adapté est essentiel pour profiter pleinement de votre voyage à moto en Corse,
        où les conditions peuvent changer rapidement entre mer et montagne.
      </p>

      <h3 className="text-xl font-semibold mb-3">Équipement du motard</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="border rounded-lg p-4">
          <h4 className="font-bold mb-2">Casque</h4>
          <p className="text-muted-foreground">Intégral ou modulable avec bonne ventilation. Privilégiez un écran solaire intégré.</p>
        </div>
        <div className="border rounded-lg p-4">
          <h4 className="font-bold mb-2">Vêtements</h4>
          <p className="text-muted-foreground">Veste et pantalon ventilés avec protections. Doublure imperméable recommandée.</p>
        </div>
        <div className="border rounded-lg p-4">
          <h4 className="font-bold mb-2">Gants</h4>
          <p className="text-muted-foreground">Une paire légère pour la chaleur et une imperméable pour la pluie/fraîcheur.</p>
        </div>
        <div className="border rounded-lg p-4">
          <h4 className="font-bold mb-2">Chaussures</h4>
          <p className="text-muted-foreground">Bottes ou chaussures montantes imperméables avec protection chevilles.</p>
        </div>
      </div>

      <h3 className="text-xl font-semibold mb-3">Accessoires essentiels</h3>
      <ul className="list-disc pl-5 mb-6 space-y-2 text-muted-foreground">
        <li>Tour de cou/bandana (protection poussière et soleil)</li>
        <li>Sous-vêtements techniques respirants</li>
        <li>Crème solaire haute protection</li>
        <li>Lunettes de soleil (même avec écran solaire)</li>
        <li>Sac à dos hydratation ou gourde accessible</li>
        <li>Cache de réservoir magnétique pour carte/smartphone</li>
        <li>Trousse de premiers secours basique</li>
      </ul>

      <h3 className="text-xl font-semibold mb-3">Bagagerie et chargement</h3>
      <div className="p-4 bg-muted rounded-lg mb-6">
        <h4 className="font-bold mb-2">Conseils de bagagerie</h4>
        <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
          <li>Privilégiez des solutions étanches (valises rigides ou sacoches avec housses imperméables)</li>
          <li>Répartissez les charges de façon équilibrée</li>
          <li>N'oubliez pas de sécuriser votre bagagerie avec des antivols lors des arrêts</li>
          <li>Pour les longs trajets, pensez à une selle confort ou un coussin d'appoint</li>
        </ul>
      </div>

      <div className="p-4 bg-corsica-blue/10 rounded-lg mb-6 border border-corsica-blue/20">
        <h3 className="font-bold text-corsica-blue mb-2">Équipement technologique</h3>
        <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
          <li>GPS ou support smartphone étanche</li>
          <li>Batterie externe/chargeur USB pour moto</li>
          <li>Système de communication entre pilotes (optionnel)</li>
          <li>Caméra d'action pour immortaliser les paysages</li>
        </ul>
      </div>
    </div>
  );
};

export default EquipementTab;
