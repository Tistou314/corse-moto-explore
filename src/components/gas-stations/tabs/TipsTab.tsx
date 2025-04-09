
import React from 'react';

const TipsTab = () => {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-3">Conseils pour les motards</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>Faites toujours le plein avant de vous engager dans les routes de montagne ou les régions isolées</li>
          <li>Les stations des zones rurales peuvent avoir des horaires réduits, notamment hors saison</li>
          <li>Certaines stations peuvent être fermées le dimanche</li>
          <li>L'autonomie réelle de votre moto sur routes sinueuses est souvent 20-30% inférieure à celle annoncée</li>
          <li>Prévoyez un plan B pour votre ravitaillement lors de longs trajets</li>
        </ul>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-3">Planification et itinéraires</h3>
        <p className="mb-4">Pour bien planifier vos pleins :</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Identifiez les stations stratégiques sur votre itinéraire avant de partir</li>
          <li>Ne laissez jamais votre réservoir descendre en dessous de la moitié dans les zones isolées</li>
          <li>Consultez les horaires d'ouverture des stations en dehors des villes principales</li>
          <li>Les grands axes et les villes principales (Bastia, Ajaccio, Calvi, Porto-Vecchio) disposent de stations ouvertes plus tard, voire 24h/24</li>
        </ul>
      </div>
      
      <div className="md:col-span-2 bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-3">Spécificités saisonnières</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <h4 className="font-medium mb-2">Haute saison (Juin-Septembre)</h4>
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
              <li>Files d'attente possibles dans les zones touristiques</li>
              <li>Horaires étendus pour la plupart des stations</li>
              <li>Prix légèrement plus élevés dans certaines stations côtières</li>
              <li>Presque toutes les stations sont ouvertes</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Basse saison (Octobre-Mai)</h4>
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
              <li>Horaires réduits dans les zones rurales et montagneuses</li>
              <li>Certaines stations fermées dans les villages très touristiques</li>
              <li>Planification plus importante nécessaire pour les longs trajets</li>
              <li>Stations des axes principaux toujours ouvertes</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TipsTab;
