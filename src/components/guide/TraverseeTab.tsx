
const TraverseeTab = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-border">
      <h2 className="text-2xl font-bold mb-4">Traversées en ferry</h2>
      <p className="mb-6">
        La traversée en ferry est la première étape de votre aventure corse. Plusieurs compagnies 
        proposent des liaisons depuis la France continentale et l'Italie.
      </p>

      <h3 className="text-xl font-semibold mb-3">Compagnies maritimes</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="border rounded-lg p-4">
          <h4 className="font-bold mb-2">Corsica Linea</h4>
          <p className="text-muted-foreground">Départs de Marseille, Toulon et Nice</p>
          <a href="https://www.corsicalinea.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">www.corsicalinea.com</a>
        </div>
        <div className="border rounded-lg p-4">
          <h4 className="font-bold mb-2">Corsica Ferries</h4>
          <p className="text-muted-foreground">Départs de Toulon, Nice et Savone (Italie)</p>
          <a href="https://www.corsica-ferries.fr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">www.corsica-ferries.fr</a>
        </div>
        <div className="border rounded-lg p-4">
          <h4 className="font-bold mb-2">La Méridionale</h4>
          <p className="text-muted-foreground">Départs principalement de Marseille</p>
          <a href="https://www.lameridionale.fr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">www.lameridionale.fr</a>
        </div>
        <div className="border rounded-lg p-4">
          <h4 className="font-bold mb-2">Moby Lines</h4>
          <p className="text-muted-foreground">Liaisons depuis l'Italie (Livourne, Gênes)</p>
          <a href="https://www.mobylines.fr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">www.mobylines.fr</a>
        </div>
      </div>

      <h3 className="text-xl font-semibold mb-3">Conseils pour la réservation</h3>
      <ul className="list-disc pl-5 mb-6 space-y-2 text-muted-foreground">
        <li>Pour la haute saison (juillet-août), réservez 4 à 6 mois à l'avance</li>
        <li>Pour les autres périodes, 2 à 3 mois sont généralement suffisants</li>
        <li>Pour les traversées longues (ex: Marseille), privilégiez une cabine</li>
        <li>Comparez les prix et durées de traversée entre les différentes compagnies</li>
        <li>Une traversée de nuit vous permet d'économiser une nuit d'hébergement</li>
      </ul>

      <div className="p-4 bg-muted rounded-lg mb-6">
        <h3 className="font-bold mb-2">Tarifs indicatifs</h3>
        <p>
          Comptez entre 70€ et 150€ aller-retour pour une moto (hors passager), 
          selon la saison et la compagnie. Les tarifs sont plus élevés en haute saison.
        </p>
      </div>

      <h3 className="text-xl font-semibold mb-3">Ports d'arrivée en Corse</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="border rounded-lg p-4">
          <h4 className="font-bold mb-2">Bastia</h4>
          <p className="text-muted-foreground">Principal port au nord-est, idéal pour explorer le Cap Corse et la Castagniccia</p>
        </div>
        <div className="border rounded-lg p-4">
          <h4 className="font-bold mb-2">Ajaccio</h4>
          <p className="text-muted-foreground">Capitale de la Corse, parfaite pour débuter un circuit vers le sud ou l'ouest</p>
        </div>
        <div className="border rounded-lg p-4">
          <h4 className="font-bold mb-2">L'Île-Rousse</h4>
          <p className="text-muted-foreground">Au nord-ouest, point de départ idéal pour la Balagne</p>
        </div>
        <div className="border rounded-lg p-4">
          <h4 className="font-bold mb-2">Porto-Vecchio</h4>
          <p className="text-muted-foreground">Au sud-est, pour explorer l'extrême sud et l'Alta Rocca</p>
        </div>
      </div>
    </div>
  );
};

export default TraverseeTab;
