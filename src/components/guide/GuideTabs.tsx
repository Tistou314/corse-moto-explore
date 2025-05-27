
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Link } from 'react-router-dom';
import { blogPosts } from '@/data/blogPosts';

// Filtrer les articles pertinents pour le guide
const getRelatedArticles = (category: string, limit = 3) => {
  return blogPosts
    .filter(post => post.category === category)
    .slice(0, limit);
};

const GuideTabs = () => {
  const [activeTab, setActiveTab] = useState("preparation");

  // Articles liés par catégorie
  const prepArticles = getRelatedArticles("Équipement et préparation");
  const aspectsArticles = getRelatedArticles("Aspects pratiques");
  const techArticles = getRelatedArticles("Aspects techniques");
  const saisonArticles = getRelatedArticles("Conseils saisonniers");

  return (
    <Tabs defaultValue="preparation" onValueChange={setActiveTab}>
      <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8 bg-corsica-pearl border border-corsica-azure/20">
        <TabsTrigger 
          value="preparation" 
          className="data-[state=active]:bg-corsica-azure data-[state=active]:text-white text-corsica-charcoal hover:bg-corsica-azure/10"
        >
          Préparation
        </TabsTrigger>
        <TabsTrigger 
          value="traversee"
          className="data-[state=active]:bg-corsica-azure data-[state=active]:text-white text-corsica-charcoal hover:bg-corsica-azure/10"
        >
          Traversée
        </TabsTrigger>
        <TabsTrigger 
          value="saisons"
          className="data-[state=active]:bg-corsica-azure data-[state=active]:text-white text-corsica-charcoal hover:bg-corsica-azure/10"
        >
          Saisons
        </TabsTrigger>
        <TabsTrigger 
          value="techniques"
          className="data-[state=active]:bg-corsica-azure data-[state=active]:text-white text-corsica-charcoal hover:bg-corsica-azure/10"
        >
          Aspects techniques
        </TabsTrigger>
      </TabsList>
      
      <TabsContent value="preparation">
        <Card className="p-6 bg-white border border-corsica-azure/20">
          <h2 className="text-2xl font-bold mb-4 text-corsica-charcoal">Préparer son voyage</h2>
          <p className="mb-4 text-corsica-slate">
            Pour profiter pleinement de votre séjour à moto en Corse, une bonne préparation est essentielle. 
            Voici nos conseils pour organiser votre voyage dans les meilleures conditions.
          </p>
          
          <h3 className="text-xl font-semibold mt-6 mb-3 text-corsica-charcoal">Documents essentiels</h3>
          <ul className="list-disc list-inside space-y-2 mb-6 text-corsica-slate">
            <li>Permis de conduire</li>
            <li>Carte grise du véhicule</li>
            <li>Attestation d'assurance</li>
            <li>Carte européenne d'assurance maladie</li>
          </ul>
          
          <h3 className="text-xl font-semibold mt-6 mb-3 text-corsica-charcoal">Planification</h3>
          <ul className="list-disc list-inside space-y-2 mb-6 text-corsica-slate">
            <li>Réservez votre traversée en ferry plusieurs mois à l'avance (surtout en haute saison)</li>
            <li>Établissez un itinéraire flexible tenant compte des distances et du relief</li>
            <li>Prévoyez des hébergements à intervalle raisonnable (150-200km par jour maximum)</li>
            <li>Renseignez-vous sur les conditions météo selon la saison choisie</li>
          </ul>
          
          {prepArticles.length > 0 && (
            <div className="mt-8 pt-4 border-t border-corsica-azure/20">
              <h3 className="text-lg font-semibold mb-3 text-corsica-charcoal">Articles complémentaires</h3>
              <ul className="space-y-2">
                {prepArticles.map(article => (
                  <li key={article.id}>
                    <Link to={`/blog/${article.id}`} className="text-corsica-azure hover:text-corsica-azure/80 hover:underline flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                      {article.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Card>
      </TabsContent>
      
      <TabsContent value="traversee">
        <Card className="p-6 bg-white border border-corsica-azure/20">
          <h2 className="text-2xl font-bold mb-4 text-corsica-charcoal">La traversée en ferry</h2>
          <p className="mb-4 text-corsica-slate">
            Rejoindre la Corse en ferry avec sa moto requiert quelques précautions particulières. 
            Découvrez comment préparer et vivre au mieux cette première étape de votre aventure.
          </p>
          
          <h3 className="text-xl font-semibold mt-6 mb-3 text-corsica-charcoal">Compagnies maritimes</h3>
          <ul className="list-disc list-inside space-y-2 mb-6 text-corsica-slate">
            <li>Corsica Linea (départs de Marseille, Nice et Toulon)</li>
            <li>Corsica Ferries (départs de Toulon, Nice et Savona)</li>
            <li>La Méridionale (départs de Marseille)</li>
            <li>Moby Lines (départs de Gênes et Livourne)</li>
          </ul>
          
          <h3 className="text-xl font-semibold mt-6 mb-3 text-corsica-charcoal">Conseils pour la traversée</h3>
          <ul className="list-disc list-inside space-y-2 mb-6 text-corsica-slate">
            <li>Arrivez au port au moins 2h avant le départ</li>
            <li>Préparez vos documents à l'avance pour l'embarquement</li>
            <li>Réduisez le niveau de carburant dans votre réservoir (3/4 maximum)</li>
            <li>Prévoyez des sangles supplémentaires pour l'arrimage</li>
            <li>Emportez vos objets de valeur avec vous pendant la traversée</li>
          </ul>
          
          {aspectsArticles.length > 0 && (
            <div className="mt-8 pt-4 border-t border-corsica-azure/20">
              <h3 className="text-lg font-semibold mb-3 text-corsica-charcoal">Articles complémentaires</h3>
              <ul className="space-y-2">
                {aspectsArticles.map(article => (
                  <li key={article.id}>
                    <Link to={`/blog/${article.id}`} className="text-corsica-azure hover:text-corsica-azure/80 hover:underline flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                      {article.title}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link to="/blog/traversee-ferry-moto-guide" className="text-corsica-azure hover:text-corsica-azure/80 hover:underline flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                    Traversée en ferry avec sa moto : guide complet
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </Card>
      </TabsContent>
      
      <TabsContent value="saisons">
        <Card className="p-6 bg-white border border-corsica-azure/20">
          <h2 className="text-2xl font-bold mb-4 text-corsica-charcoal">Quand partir en Corse à moto ?</h2>
          <p className="mb-4 text-corsica-slate">
            Chaque saison offre une expérience différente pour découvrir l'île de beauté à moto.
            Voici les principales caractéristiques de chaque période pour vous aider à choisir.
          </p>
          
          <h3 className="text-xl font-semibold mt-6 mb-3 text-corsica-charcoal">Printemps (avril-juin)</h3>
          <ul className="list-disc list-inside space-y-2 mb-6 text-corsica-slate">
            <li>Températures douces (15-25°C)</li>
            <li>Nature en fleurs, maquis odorant</li>
            <li>Affluence modérée</li>
            <li>Tarifs abordables</li>
          </ul>
          
          <h3 className="text-xl font-semibold mt-6 mb-3 text-corsica-charcoal">Été (juillet-août)</h3>
          <ul className="list-disc list-inside space-y-2 mb-6 text-corsica-slate">
            <li>Températures chaudes (25-35°C)</li>
            <li>Tous les cols accessibles</li>
            <li>Forte affluence, trafic dense</li>
            <li>Tarifs élevés</li>
          </ul>
          
          <h3 className="text-xl font-semibold mt-6 mb-3 text-corsica-charcoal">Automne (septembre-octobre)</h3>
          <ul className="list-disc list-inside space-y-2 mb-6 text-corsica-slate">
            <li>Températures agréables (15-25°C)</li>
            <li>Mer encore chaude</li>
            <li>Affluence faible dès mi-septembre</li>
            <li>Prix plus abordables</li>
          </ul>
          
          <h3 className="text-xl font-semibold mt-6 mb-3 text-corsica-charcoal">Hiver (novembre-mars)</h3>
          <ul className="list-disc list-inside space-y-2 mb-6 text-corsica-slate">
            <li>Températures fraîches (8-15°C sur la côte)</li>
            <li>Certains cols fermés</li>
            <li>Très peu de touristes</li>
            <li>Services limités</li>
          </ul>
          
          {saisonArticles.length > 0 && (
            <div className="mt-8 pt-4 border-t border-corsica-azure/20">
              <h3 className="text-lg font-semibold mb-3 text-corsica-charcoal">Articles détaillés par saison</h3>
              <ul className="space-y-2">
                {saisonArticles.map(article => (
                  <li key={article.id}>
                    <Link to={`/blog/${article.id}`} className="text-corsica-azure hover:text-corsica-azure/80 hover:underline flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                      {article.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Card>
      </TabsContent>
      
      <TabsContent value="techniques">
        <Card className="p-6 bg-white border border-corsica-azure/20">
          <h2 className="text-2xl font-bold mb-4 text-corsica-charcoal">Aspects techniques</h2>
          <p className="mb-4 text-corsica-slate">
            Les routes corses offrent des défis techniques spécifiques. Préparez-vous et 
            adaptez votre conduite pour profiter pleinement et en sécurité de votre voyage.
          </p>
          
          <h3 className="text-xl font-semibold mt-6 mb-3 text-corsica-charcoal">Caractéristiques des routes</h3>
          <ul className="list-disc list-inside space-y-2 mb-6 text-corsica-slate">
            <li>Routes sinueuses avec nombreux virages en épingle</li>
            <li>Revêtements de qualité variable selon les régions</li>
            <li>Dénivelés importants (0 à 1400m d'altitude)</li>
            <li>Passages étroits dans certains villages</li>
          </ul>
          
          <h3 className="text-xl font-semibold mt-6 mb-3 text-corsica-charcoal">Préparation de la moto</h3>
          <ul className="list-disc list-inside space-y-2 mb-6 text-corsica-slate">
            <li>Révision complète avant le départ</li>
            <li>Vérification approfondie des freins et suspensions</li>
            <li>Pneus en bon état adaptés aux routes sinueuses</li>
            <li>Kit de réparation et outils basiques</li>
          </ul>
          
          {techArticles.length > 0 && (
            <div className="mt-8 pt-4 border-t border-corsica-azure/20">
              <h3 className="text-lg font-semibold mb-3 text-corsica-charcoal">Articles techniques</h3>
              <ul className="space-y-2">
                {techArticles.map(article => (
                  <li key={article.id}>
                    <Link to={`/blog/${article.id}`} className="text-corsica-azure hover:text-corsica-azure/80 hover:underline flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                      {article.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          <div className="mt-8 p-4 bg-corsica-emerald/10 border border-corsica-emerald/30 rounded-lg">
            <h4 className="font-semibold text-corsica-emerald mb-2">Bon à savoir</h4>
            <p className="text-corsica-slate">
              La Corse compte peu de stations-service dans les zones montagneuses. 
              Prévoyez vos pleins en conséquence et n'attendez jamais la réserve pour faire le plein.
            </p>
          </div>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default GuideTabs;
