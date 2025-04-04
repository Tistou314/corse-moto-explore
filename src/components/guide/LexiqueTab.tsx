
const LexiqueTab = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-border">
      <h2 className="text-2xl font-bold mb-4">Lexique français-corse utile</h2>
      <p className="mb-6">
        Quelques mots et expressions en corse pour enrichir votre voyage et faciliter 
        les échanges avec les habitants de l'île.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mb-8">
        <div className="border-b pb-2">
          <span className="font-medium">Bonjour</span>
          <span className="float-right text-muted-foreground">Bonghjornu</span>
        </div>
        <div className="border-b pb-2">
          <span className="font-medium">Au revoir</span>
          <span className="float-right text-muted-foreground">Avvedeci</span>
        </div>
        <div className="border-b pb-2">
          <span className="font-medium">Merci</span>
          <span className="float-right text-muted-foreground">Grazie</span>
        </div>
        <div className="border-b pb-2">
          <span className="font-medium">S'il vous plaît</span>
          <span className="float-right text-muted-foreground">Per piacè</span>
        </div>
        <div className="border-b pb-2">
          <span className="font-medium">Oui / Non</span>
          <span className="float-right text-muted-foreground">Iè / Innò</span>
        </div>
        <div className="border-b pb-2">
          <span className="font-medium">Excusez-moi</span>
          <span className="float-right text-muted-foreground">Scusatemi</span>
        </div>
        <div className="border-b pb-2">
          <span className="font-medium">Je ne comprends pas</span>
          <span className="float-right text-muted-foreground">Ùn capiscu</span>
        </div>
        <div className="border-b pb-2">
          <span className="font-medium">Où est... ?</span>
          <span className="float-right text-muted-foreground">Induve hè... ?</span>
        </div>
        <div className="border-b pb-2">
          <span className="font-medium">La route</span>
          <span className="float-right text-muted-foreground">A strada</span>
        </div>
        <div className="border-b pb-2">
          <span className="font-medium">La moto</span>
          <span className="float-right text-muted-foreground">A moto</span>
        </div>
        <div className="border-b pb-2">
          <span className="font-medium">L'essence</span>
          <span className="float-right text-muted-foreground">A benzina</span>
        </div>
        <div className="border-b pb-2">
          <span className="font-medium">Le restaurant</span>
          <span className="float-right text-muted-foreground">U risturante</span>
        </div>
        <div className="border-b pb-2">
          <span className="font-medium">L'hôtel</span>
          <span className="float-right text-muted-foreground">L'albergu</span>
        </div>
        <div className="border-b pb-2">
          <span className="font-medium">La plage</span>
          <span className="float-right text-muted-foreground">A marina</span>
        </div>
        <div className="border-b pb-2">
          <span className="font-medium">La montagne</span>
          <span className="float-right text-muted-foreground">A muntagna</span>
        </div>
        <div className="border-b pb-2">
          <span className="font-medium">Gauche / Droite</span>
          <span className="float-right text-muted-foreground">Manca / Diritta</span>
        </div>
      </div>

      <h3 className="text-xl font-semibold mb-3">Expressions utiles</h3>
      <div className="space-y-4 mb-6">
        <div className="p-3 bg-muted rounded-lg">
          <p className="font-medium">À votre santé !</p>
          <p className="text-muted-foreground">Salute !</p>
        </div>
        <div className="p-3 bg-muted rounded-lg">
          <p className="font-medium">C'est une belle journée</p>
          <p className="text-muted-foreground">Hè una bella ghjurnata</p>
        </div>
        <div className="p-3 bg-muted rounded-lg">
          <p className="font-medium">La Corse est magnifique</p>
          <p className="text-muted-foreground">A Corsica hè bellissima</p>
        </div>
        <div className="p-3 bg-muted rounded-lg">
          <p className="font-medium">Je viens de France/Italie/etc.</p>
          <p className="text-muted-foreground">Vengu di Francia/Italia/etc.</p>
        </div>
      </div>

      <div className="p-4 bg-corsica-green/10 rounded-lg border border-corsica-green/20">
        <h3 className="font-bold text-corsica-green mb-2">Bon à savoir</h3>
        <p className="text-muted-foreground">
          La langue corse est une langue romane proche de l'italien, avec des variations dialectales 
          selon les régions de l'île. Même si tout le monde parle français en Corse, utiliser quelques 
          mots en corse est toujours apprécié par les habitants et peut être un excellent moyen 
          d'engager la conversation.
        </p>
      </div>
    </div>
  );
};

export default LexiqueTab;
