
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Calendar, Ship, ShieldAlert, Package, Wrench, Globe } from 'lucide-react';

const GuidePratiquePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <Hero 
        title="Guide Pratique"
        subtitle="Conseils, astuces et informations essentielles pour préparer et profiter pleinement de votre voyage à moto en Corse."
        imagePath="https://images.unsplash.com/photo-1468818438311-4bab781ab9b8?auto=format&fit=crop&q=80"
      />

      {/* Main Content */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="saisons">
              <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 w-full h-auto mb-8">
                <TabsTrigger value="saisons" className="flex flex-col py-3 items-center">
                  <Calendar className="h-5 w-5 mb-1" />
                  <span>Saisons</span>
                </TabsTrigger>
                <TabsTrigger value="traversee" className="flex flex-col py-3 items-center">
                  <Ship className="h-5 w-5 mb-1" />
                  <span>Traversée</span>
                </TabsTrigger>
                <TabsTrigger value="securite" className="flex flex-col py-3 items-center">
                  <ShieldAlert className="h-5 w-5 mb-1" />
                  <span>Sécurité</span>
                </TabsTrigger>
                <TabsTrigger value="equipement" className="flex flex-col py-3 items-center">
                  <Package className="h-5 w-5 mb-1" />
                  <span>Équipement</span>
                </TabsTrigger>
                <TabsTrigger value="moto" className="flex flex-col py-3 items-center">
                  <Wrench className="h-5 w-5 mb-1" />
                  <span>Motos</span>
                </TabsTrigger>
                <TabsTrigger value="lexique" className="flex flex-col py-3 items-center">
                  <Globe className="h-5 w-5 mb-1" />
                  <span>Lexique</span>
                </TabsTrigger>
              </TabsList>

              {/* Saisons */}
              <TabsContent value="saisons" className="bg-white rounded-lg shadow-sm p-6 border border-border">
                <h2 className="text-2xl font-bold mb-4">Meilleures périodes pour visiter</h2>
                <p className="mb-4">
                  La Corse bénéficie d'un climat méditerranéen avec des étés chauds et secs et des hivers doux et humides. 
                  Le choix de la période de visite influencera grandement votre expérience.
                </p>

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

                <div className="mt-8 p-4 bg-muted rounded-lg">
                  <h3 className="font-bold mb-2">Bon à savoir</h3>
                  <p>
                    Quelle que soit la saison choisie, n'oubliez pas que la météo en montagne peut changer rapidement. 
                    Prévoyez toujours un équipement adapté aux variations de température et à la pluie, 
                    même en plein été.
                  </p>
                </div>
              </TabsContent>

              {/* Traversée */}
              <TabsContent value="traversee" className="bg-white rounded-lg shadow-sm p-6 border border-border">
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
              </TabsContent>

              {/* Autres sections (contenu similaire) */}
              <TabsContent value="securite" className="bg-white rounded-lg shadow-sm p-6 border border-border">
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
              </TabsContent>

              <TabsContent value="equipement" className="bg-white rounded-lg shadow-sm p-6 border border-border">
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
              </TabsContent>

              <TabsContent value="moto" className="bg-white rounded-lg shadow-sm p-6 border border-border">
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
              </TabsContent>

              <TabsContent value="lexique" className="bg-white rounded-lg shadow-sm p-6 border border-border">
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
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GuidePratiquePage;
