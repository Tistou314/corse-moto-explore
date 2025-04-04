
const SecuriteTab = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-border">
      <h2 className="text-2xl font-bold mb-4">Sécurité sur les routes corses</h2>
      <p className="mb-6">
        Les routes corses offrent des panoramas exceptionnels mais présentent aussi des spécificités 
        qui nécessitent une vigilance particulière.
      </p>

      <h3 className="text-xl font-semibold mb-3">Particularités des routes corses</h3>
      <ul className="list-disc pl-5 mb-6 space-y-2 text-muted-foreground">
        <li>Routes souvent étroites et sinueuses, particulièrement en montagne</li>
        <li>Virages en épingle parfois très serrés et peu visibles</li>
        <li>Qualité variable du revêtement (gravillons, nids-de-poule)</li>
        <li>Présence possible d'animaux en liberté (vaches, cochons, chèvres)</li>
        <li>Microclimats avec changements météo rapides en altitude</li>
        <li>Peu de barrières de sécurité sur certaines sections à risque</li>
      </ul>

      <h3 className="text-xl font-semibold mb-3">Conseils de conduite</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="border rounded-lg p-4">
          <h4 className="font-bold mb-2">Adaptez votre vitesse</h4>
          <p className="text-muted-foreground">Réduisez votre allure, particulièrement dans les virages serrés et les descentes</p>
        </div>
        <div className="border rounded-lg p-4">
          <h4 className="font-bold mb-2">Anticipez</h4>
          <p className="text-muted-foreground">Soyez attentif aux panneaux indiquant les virages dangereux et rétrécissements</p>
        </div>
        <div className="border rounded-lg p-4">
          <h4 className="font-bold mb-2">Prudence avec les locaux</h4>
          <p className="text-muted-foreground">Les conducteurs locaux connaissent les routes et peuvent rouler plus rapidement</p>
        </div>
        <div className="border rounded-lg p-4">
          <h4 className="font-bold mb-2">Faites des pauses</h4>
          <p className="text-muted-foreground">La conduite en montagne est fatigante, prévoyez des arrêts réguliers</p>
        </div>
      </div>

      <div className="p-4 bg-corsica-red/10 rounded-lg mb-6 border border-corsica-red/20">
        <h3 className="font-bold text-corsica-red mb-2">Points de vigilance particuliers</h3>
        <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
          <li>Les routes du Cap Corse et des Calanches de Piana sont très étroites par endroits</li>
          <li>Le col de Bavella peut être sujet à des brouillards soudains</li>
          <li>La traversée du centre de l'île offre peu de stations-service</li>
          <li>En été, méfiez-vous des camping-cars qui occupent parfois toute la largeur de la route</li>
        </ul>
      </div>
      
      <h3 className="text-xl font-semibold mb-3">Numéros utiles</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="text-center p-3 border rounded-lg">
          <p className="font-bold">15</p>
          <p className="text-sm text-muted-foreground">SAMU</p>
        </div>
        <div className="text-center p-3 border rounded-lg">
          <p className="font-bold">17</p>
          <p className="text-sm text-muted-foreground">Police</p>
        </div>
        <div className="text-center p-3 border rounded-lg">
          <p className="font-bold">18</p>
          <p className="text-sm text-muted-foreground">Pompiers</p>
        </div>
        <div className="text-center p-3 border rounded-lg">
          <p className="font-bold">112</p>
          <p className="text-sm text-muted-foreground">Urgences</p>
        </div>
      </div>
    </div>
  );
};

export default SecuriteTab;
