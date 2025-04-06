
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQPage = () => {
  const faqItems = [
    {
      question: "Quelle est la meilleure période pour visiter la Corse à moto ?",
      answer: (
        <div className="space-y-4">
          <p>La période idéale pour découvrir la Corse à moto s'étend de mai à octobre, avec quelques nuances importantes à connaître :</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Mai et juin</strong> : Ces mois offrent un excellent compromis avec des températures agréables (18-25°C), une nature en pleine floraison, et surtout des routes beaucoup moins fréquentées qu'en haute saison. La mer commence à se réchauffer, mais reste fraîche (16-18°C).</li>
            <li><strong>Juillet et août</strong> : C'est la haute saison touristique avec des températures chaudes (25-30°C) et une mer à température parfaite (22-24°C). Cependant, cette période présente plusieurs inconvénients pour les motards : trafic dense, prix des hébergements élevés, stationnement difficile dans les villes côtières, et chaleur parfois écrasante avec l'équipement moto.</li>
            <li><strong>Septembre et octobre</strong> : Une période particulièrement recommandée pour les motards. Le trafic diminue considérablement, les températures restent douces (20-25°C), la mer est encore chaude (20-22°C), et vous profiterez de tarifs plus avantageux pour les hébergements.</li>
          </ul>
          <p><strong>À éviter</strong> : La période de novembre à avril peut présenter des conditions météorologiques imprévisibles, avec des risques de pluie et de neige en montagne (certains cols sont fermés). Les températures peuvent descendre significativement en altitude, et de nombreux établissements touristiques sont fermés.</p>
          <p><strong>Conseil de motard</strong> : Si vous avez le choix, privilégiez la dernière quinzaine de juin ou le mois de septembre pour profiter pleinement de votre séjour avec un équilibre optimal entre bonnes conditions météo et faible affluence.</p>
        </div>
      )
    },
    {
      question: "Dois-je réserver le ferry à l'avance pour emmener ma moto en Corse ?",
      answer: (
        <div className="space-y-4">
          <p>Absolument, et c'est même fortement recommandé ! La réservation à l'avance de votre traversée en ferry est indispensable pour plusieurs raisons :</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Places limitées pour les motos</strong> : Le nombre d'emplacements pour les deux-roues sur les ferries est restreint, particulièrement en haute saison.</li>
            <li><strong>Variation saisonnière</strong> :
              <ul className="list-disc pl-5 mt-2">
                <li><em>Haute saison (juillet-août)</em> : Réservez idéalement 3 à 6 mois à l'avance pour garantir votre place et bénéficier des meilleurs tarifs.</li>
                <li><em>Moyenne saison (mai, juin, septembre)</em> : Une réservation 1 à 3 mois avant est recommandée.</li>
                <li><em>Basse saison (octobre à avril)</em> : Même en basse saison, une réservation 2-3 semaines à l'avance reste préférable.</li>
              </ul>
            </li>
            <li><strong>Économies substantielles</strong> : Les tarifs des traversées augmentent généralement à l'approche des dates de départ. Une réservation anticipée peut vous faire économiser entre 20% et 50% du prix.</li>
            <li><strong>Compagnies maritimes</strong> : Plusieurs compagnies desservent l'île (Corsica Linea, Corsica Ferries, La Méridionale). Comparez leurs offres car les tarifs, horaires et services peuvent varier significativement.</li>
            <li><strong>Ports de départ</strong> : Vous pouvez embarquer depuis Marseille, Toulon, Nice ou l'Italie (Savone, Livourne, Gênes). Le choix du port influence la durée de traversée et le prix.</li>
            <li><strong>Assurance annulation</strong> : Elle est vivement conseillée car les conditions météorologiques peuvent parfois entraîner des reports.</li>
          </ul>
          <p><strong>Conseil pratique</strong> : Pour les motos, prévoyez des sangles de qualité pour arrimer votre machine, même si les compagnies en fournissent généralement. Un bloc-disque ou un système antivol reste également recommandé pendant la traversée.</p>
        </div>
      )
    },
    {
      question: "Quel type de moto est recommandé pour explorer la Corse ?",
      answer: (
        <div className="space-y-4">
          <p>La Corse offre une diversité de routes qui peuvent convenir à différents types de motos, mais certaines caractéristiques sont particulièrement adaptées au terrain corse :</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Trails et maxi-trails</strong> : Indéniablement le choix le plus polyvalent pour la Corse. Ces motos (comme les BMW GS, Honda Africa Twin, Yamaha Ténéré, etc.) offrent une position de conduite haute, une bonne autonomie, un confort sur longue distance et peuvent affronter sans problème les portions de routes dégradées ou les petites pistes carrossables. Leur suspension à débattement généreux absorbe bien les imperfections fréquentes des routes corses.</li>
            <li><strong>Roadsters et routières sportives</strong> : Parfaitement adaptées pour les routes principales et les magnifiques routes côtières. Cependant, elles peuvent être moins confortables sur les petites routes sinueuses de l'intérieur où le revêtement est parfois irrégulier.</li>
            <li><strong>Grosses routières/GT</strong> : Confortables pour les longs trajets, mais leur gabarit imposant peut être un handicap dans les villages aux ruelles étroites ou sur les routes de montagne avec de nombreux virages en épingle.</li>
            <li><strong>Customs</strong> : Possibles mais moins recommandées en raison de leur garde au sol limitée et de leur maniabilité réduite dans les virages serrés qui abondent en Corse.</li>
            <li><strong>Sportives</strong> : Peu adaptées en raison des nombreux virages techniques qui sollicitent fortement les poignets et le dos, ainsi que de la qualité variable du revêtement.</li>
            <li><strong>Petites cylindrées (125-400cc)</strong> : Peuvent convenir pour un tour de l'île, mais peuvent manquer de puissance dans les cols ou pour doubler en toute sécurité.</li>
          </ul>
          <p><strong>Caractéristiques importantes à privilégier</strong> :</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Une bonne garde au sol</li>
            <li>Une autonomie d'au moins 200-250 km</li>
            <li>Un confort acceptable sur de longues distances</li>
            <li>Une maniabilité dans les virages serrés</li>
            <li>Une puissance suffisante pour les montées en altitude</li>
          </ul>
          <p><strong>Conseil d'expérience</strong> : Si vous louez une moto sur place, privilégiez un trail de moyenne cylindrée (650-800cc) qui offrira le meilleur compromis entre maniabilité dans les virages et puissance suffisante pour les montées.</p>
        </div>
      )
    },
    {
      question: "Quelles sont les limitations de vitesse en Corse ?",
      answer: (
        <div className="space-y-4">
          <p>Les limitations de vitesse en Corse sont identiques à celles du reste de la France, mais quelques spécificités locales méritent d'être soulignées :</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Autoroutes</strong> : 130 km/h (par temps sec) et 110 km/h (par temps de pluie)
              <div className="text-sm italic mt-1">À noter qu'il n'y a pas d'autoroute en Corse</div>
            </li>
            <li><strong>Routes à deux chaussées séparées</strong> : 110 km/h (temps sec) et 100 km/h (pluie)
              <div className="text-sm italic mt-1">Principalement la portion de voie rapide entre Bastia et Casamozza</div>
            </li>
            <li><strong>Routes hors agglomération</strong> : 80 km/h
              <div className="text-sm italic mt-1">La plupart des nationales et départementales de l'île</div>
            </li>
            <li><strong>Traversées d'agglomération</strong> : 50 km/h
              <div className="text-sm italic mt-1">Soyez vigilant aux entrées de villages qui peuvent survenir brusquement</div>
            </li>
            <li><strong>Zones spécifiques</strong> : 30 km/h ou 20 km/h (zones de rencontre)
              <div className="text-sm italic mt-1">De plus en plus fréquentes dans les centres historiques des villes et villages</div>
            </li>
          </ul>
          
          <p><strong>Points de vigilance spécifiques à la Corse</strong> :</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Routes sinueuses</strong> : Les limitations sont souvent théoriques car la configuration des routes (virages en épingle, épingles serrées) impose naturellement une vitesse bien inférieure.</li>
            <li><strong>Présence animale</strong> : Vaches, cochons et chèvres en liberté sont fréquents sur les routes, particulièrement dans le centre et le sud de l'île. Ils peuvent surgir à tout moment, même sur les grands axes.</li>
            <li><strong>Radars</strong> : Moins nombreux qu'en France continentale mais bien présents, notamment sur les tronçons rectilignes des nationales N193, N196 et N198.</li>
            <li><strong>État des routes</strong> : Variable selon les secteurs, avec parfois des nids-de-poule ou des éboulements qui imposent une vigilance accrue.</li>
            <li><strong>Rétrécissements fréquents</strong> : Dans les villages, les routes peuvent se rétrécir considérablement sans signalisation préalable.</li>
          </ul>
          
          <p><strong>Conseil de sécurité</strong> : La Corse n'est pas un terrain de jeu pour la vitesse. Les routes sinueuses peuvent être très techniques et exigeantes. Privilégiez le plaisir de la conduite plutôt que la performance pure, et gardez toujours une marge de sécurité importante.</p>
        </div>
      )
    },
    {
      question: "Faut-il un équipement spécifique pour rouler en Corse ?",
      answer: (
        <div className="space-y-4">
          <p>Bien que la Corse ne nécessite pas d'équipement radicalement différent de celui utilisé habituellement à moto, certaines adaptations et recommandations sont importantes pour profiter pleinement de votre séjour en toute sécurité :</p>
          
          <p><strong>Équipement essentiel et adaptations</strong> :</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Casque</strong> : Privilégiez un casque avec une bonne ventilation, voire un modulable qui offre plus de confort lors des arrêts fréquents pour admirer les paysages. Un écran solaire intégré est un plus appréciable face à la luminosité souvent intense de l'île.</li>
            <li><strong>Vêtements techniques</strong> :
              <ul className="list-disc pl-5 mt-1">
                <li>De mai à octobre, optez pour une veste et un pantalon bien ventilés avec membrane imperméable amovible</li>
                <li>Des gants mi-saison ou été avec protection</li>
                <li>Des bottes ou chaussures montantes imperméables mais respirantes</li>
              </ul>
            </li>
            <li><strong>Protection contre le soleil</strong> :
              <ul className="list-disc pl-5 mt-1">
                <li>Crème solaire haute protection (indispensable, même avec un équipement complet)</li>
                <li>Buff/tour de cou léger pour protéger la nuque</li>
                <li>Hydratation régulière (prévoir une poche à eau type Camelback ou des bouteilles)</li>
              </ul>
            </li>
            <li><strong>Équipement pour la moto</strong> :
              <ul className="list-disc pl-5 mt-1">
                <li>Support smartphone/GPS étanche et résistant aux vibrations</li>
                <li>Sacoches ou top-case pour transporter vos affaires</li>
                <li>Antivol de qualité (U ou chaîne) pour les stationnements dans les villes touristiques</li>
                <li>Kit anticrevaison et gonfleur (les stations-service peuvent être éloignées)</li>
                <li>Sangles élastiques et filet pour sécuriser vos bagages</li>
              </ul>
            </li>
          </ul>
          
          <p><strong>Recommandations spécifiques à la Corse</strong> :</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Vêtements civils</strong> : Prévoyez des tenues légères pour les arrêts et visites, mais aussi un pull ou une polaire légère pour les soirées en altitude où la température peut chuter.</li>
            <li><strong>Équipement de baignade</strong> : Un maillot de bain et une serviette compacte vous permettront de profiter des nombreuses criques accessibles depuis la route.</li>
            <li><strong>Mécanique préventive</strong> : Avant de partir, vérifiez particulièrement l'état de vos pneus, freins et suspension qui seront fortement sollicités sur les routes sinueuses.</li>
          </ul>
          
          <p><strong>Conseil d'expérience</strong> : Optez pour un équipement modulable qui s'adapte aux variations de température. Il peut faire très chaud sur la côte (plus de 30°C) mais nettement plus frais en montagne où la différence peut atteindre 10-15°C. La capacité à ajouter ou retirer des couches facilement est précieuse.</p>
        </div>
      )
    },
    {
      question: "Est-il possible de faire le tour de la Corse en moto en une semaine ?",
      answer: (
        <div className="space-y-4">
          <p>Oui, c'est tout à fait possible, mais avec des nuances importantes à prendre en compte pour profiter pleinement de l'expérience :</p>
          
          <p><strong>Faisabilité et planning</strong> :</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Distance totale</strong> : Le tour classique de la Corse (en suivant approximativement le littoral) représente environ 900-1000 km. Sur le papier, cette distance peut sembler courte pour une semaine.</li>
            <li><strong>Vitesse moyenne réelle</strong> : C'est le facteur clé à comprendre. En Corse, la vitesse moyenne sur une journée tourne généralement autour de 45-55 km/h en raison des routes sinueuses, des arrêts photos fréquents, et du trafic estival.</li>
            <li><strong>Temps de conduite quotidien</strong> : Pour un tour en 7 jours, comptez environ 2 à 3 heures effectives de moto par jour, ce qui est raisonnable et laisse du temps pour les visites.</li>
          </ul>
          
          <p><strong>Planning recommandé pour une semaine</strong> :</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Jour 1 : Arrivée et trajet vers première étape (selon port d'arrivée)</li>
            <li>Jour 2-6 : Tour de l'île avec étapes (détails ci-dessous)</li>
            <li>Jour 7 : Dernière étape et retour vers port de départ</li>
          </ul>
          
          <p><strong>Étapes suggérées pour un tour en 7 jours</strong> :</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Bastia → Saint-Florent → L'Île-Rousse (90 km)</li>
            <li>L'Île-Rousse → Calvi → Porto (115 km, route spectaculaire)</li>
            <li>Porto → Ajaccio (75 km, nombreux arrêts panoramiques)</li>
            <li>Ajaccio → Propriano → Bonifacio (130 km)</li>
            <li>Bonifacio → Porto-Vecchio → Solenzara (85 km)</li>
            <li>Solenzara → Aléria → Corte → Bastia (160 km, journée plus longue)</li>
          </ul>
          
          <p><strong>Limites et contraintes</strong> :</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Ce planning permet de voir les principales attractions côtières mais offre peu de temps pour explorer l'intérieur montagneux de l'île.</li>
            <li>Les temps indiqués ne tiennent pas compte des embouteillages potentiels en haute saison.</li>
            <li>Peu de marge pour les détours et randonnées.</li>
          </ul>
          
          <p><strong>Alternatives et recommandations</strong> :</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Option 8-10 jours</strong> : Fortement recommandée pour plus de confort et pour inclure des incursions vers l'intérieur des terres (Corte, Bavella, forêt d'Aïtone).</li>
            <li><strong>Option régionale</strong> : Si vous n'avez que 7 jours, envisagez de vous concentrer sur une région (Nord ou Sud) plutôt que de faire le tour complet.</li>
            <li><strong>Jour de repos</strong> : Intégrez au moins une journée sans moto pour récupérer et profiter d'une plage ou d'un village.</li>
          </ul>
          
          <p><strong>Conseil d'expérience</strong> : La Corse mérite qu'on prenne son temps. Si vous n'avez qu'une semaine, acceptez l'idée que vous reviendrez et choisissez vos priorités plutôt que de vouloir tout voir. La fatigue liée aux routes sinueuses est réelle et peut diminuer le plaisir si le rythme est trop soutenu.</p>
        </div>
      )
    },
    {
      question: "Où puis-je trouver des hébergements adaptés aux motards en Corse ?",
      answer: (
        <div className="space-y-4">
          <p>La Corse offre une variété d'options d'hébergement pour les motards, avec différents niveaux de services spécifiques. Voici un tour d'horizon complet :</p>
          
          <p><strong>Types d'hébergements adaptés aux motards</strong> :</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Hôtels labellisés "Motards Bienvenue"</strong> : Quelques établissements en Corse bénéficient de ce label qui garantit des services spécifiques (parking sécurisé, espace pour sécher l'équipement, informations sur les itinéraires).</li>
            <li><strong>Résidences de tourisme et appart'hôtels</strong> : Souvent équipés de parkings privés et offrant l'avantage de pouvoir cuisiner et laver vos affaires.</li>
            <li><strong>Chambres d'hôtes et agriturisme</strong> : Option particulièrement intéressante en Corse avec un accueil personnalisé. Les propriétaires sont généralement de bon conseil pour les itinéraires locaux.</li>
            <li><strong>Campings</strong> : De nombreux campings proposent des emplacements moto + tente à tarif préférentiel, ainsi que des mobile-homes ou bungalows pour ceux qui ne voyagent pas avec leur matériel de camping.</li>
          </ul>
          
          <p><strong>Où chercher et réserver</strong> :</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Plateformes spécialisées</strong> :
              <ul className="list-disc pl-5 mt-1">
                <li>Motoviajeros.net (section Corse)</li>
                <li>Gîtes de France Corse (filtrer par "accueil motards")</li>
              </ul>
            </li>
            <li><strong>Groupes Facebook</strong> : "Motards en Corse" et "Bikers de Corse" partagent régulièrement des recommandations d'hébergements testés et approuvés.</li>
            <li><strong>Office de tourisme</strong> : Le site visit-corsica.com permet de filtrer les hébergements avec parking moto.</li>
          </ul>
          
          <p><strong>Répartition géographique</strong> :</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Grandes villes</strong> (Bastia, Ajaccio, Porto-Vecchio) : Large choix mais stationnement parfois plus compliqué.</li>
            <li><strong>Villes côtières touristiques</strong> (Calvi, L'Île-Rousse, Propriano) : Nombreuses options avec souvent des parkings privés.</li>
            <li><strong>Villages de l'intérieur</strong> (Corte, Zonza, Evisa) : Moins d'options mais souvent plus adaptées aux motards, car moins urbaines.</li>
          </ul>
          
          <p><strong>Services à rechercher</strong> :</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Parking sécurisé, idéalement fermé ou couvert</li>
            <li>Proximité avec une station-service et un garage/concessionnaire moto (en cas de problème)</li>
            <li>Possibilité de laver l'équipement (machine à laver disponible)</li>
            <li>Petit-déjeuner copieux inclus ou disponible</li>
          </ul>
          
          <p><strong>Recommandations pratiques</strong> :</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Réservation</strong> : Indispensable en haute saison (juillet-août) et fortement recommandée en moyenne saison.</li>
            <li><strong>Itinéraire</strong> : Planifiez vos étapes en tenant compte des temps de trajet réels en Corse (souvent plus longs que ce qu'indiquent les GPS).</li>
            <li><strong>Groupes</strong> : Si vous voyagez en groupe, mentionnez-le lors de la réservation pour garantir un nombre suffisant de places de stationnement.</li>
          </ul>
          
          <p><strong>Conseil d'expérience</strong> : Les hébergements dans les petits villages légèrement à l'écart des zones ultra-touristiques offrent souvent le meilleur rapport qualité-prix et une expérience plus authentique. Privilégiez les établissements tenus par des locaux qui pourront vous conseiller des itinéraires et restaurants hors des sentiers battus.</p>
        </div>
      )
    },
    {
      question: "Quelles sont les routes à ne pas manquer en Corse ?",
      answer: (
        <div className="space-y-4">
          <p>La Corse regorge de routes spectaculaires qui font le bonheur des motards. Voici une sélection des itinéraires incontournables classés par région :</p>
          
          <p><strong>Nord-Ouest</strong></p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>La route des Agriates (D81)</strong> : Entre Saint-Florent et l'Île-Rousse, cette route offre des panoramas époustouflants sur le désert des Agriates et la mer. Peu ombragée, à éviter aux heures les plus chaudes en été.</li>
            <li><strong>Les Calanche de Piana (D81)</strong> : Classées au patrimoine mondial de l'UNESCO, ces formations rocheuses rougeoyantes créent un décor surnaturel entre Porto et Piana. Route étroite par endroits avec de nombreux points de vue.</li>
            <li><strong>La route de la Scala di Santa Regina (D84)</strong> : Entre Corte et le Niolu, cette route spectaculaire serpente dans des gorges impressionnantes. Technique et peu fréquentée, c'est un must pour les motards expérimentés.</li>
          </ul>
          
          <p><strong>Centre</strong></p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Le col de Bavella (D268)</strong> : L'un des plus beaux cols de Corse avec ses aiguilles rocheuses et ses forêts de pins. La route entre Zonza et Solenzara offre des paysages à couper le souffle et de nombreux points d'arrêt.</li>
            <li><strong>La route de la Restonica (D623)</strong> : Au départ de Corte, cette route étroite monte vers les lacs de montagne. Terminus à Grotelle où un sentier permet d'accéder aux lacs de Melo et Capitello. Route très fréquentée en été.</li>
            <li><strong>Le col de Vizzavona (N193)</strong> : Principal passage entre Ajaccio et Bastia, ce col à 1163m offre un bon revêtement et de beaux panoramas. La forêt de Vizzavona vaut le détour pour sa fraîcheur.</li>
          </ul>
          
          <p><strong>Sud et côte est</strong></p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>La corniche des Calanques de Piana (D81B)</strong> : Petite route serpentant entre mer et montagne offrant des vues spectaculaires sur les calanques.</li>
            <li><strong>La route des crêtes du Cap Corse (D80)</strong> : Tour complet de la péninsule du Cap Corse avec alternance de petits villages de pêcheurs côté ouest et plages côté est. Comptez une journée entière.</li>
            <li><strong>La route de Bonifacio (D58)</strong> : Entre Porto-Vecchio et Bonifacio, cette route côtière offre des vues imprenables sur les falaises calcaires et l'archipel des Lavezzi.</li>
          </ul>
          
          <p><strong>Routes moins connues mais remarquables</strong></p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>La route de la Castagniccia (D71)</strong> : Région authentique, peu touristique, avec des villages perchés et des châtaigneraies centenaires. Revêtement moyen mais paysages préservés.</li>
            <li><strong>Vallée de l'Asco (D147)</strong> : Route sauvage remontant jusqu'au parcours sportif d'Asco. Attention, route étroite mais paysages grandioses.</li>
            <li><strong>Col de Sorba (D69)</strong> : Entre Vivario et Ghisoni, cette route forestière offre des passages techniques et des vues sur le Monte Renoso.</li>
          </ul>
          
          <p><strong>Conseils pratiques pour ces routes</strong> :</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Meilleur moment</strong> : Tôt le matin pour éviter le trafic et profiter de la lumière (particulièrement pour les Calanche de Piana).</li>
            <li><strong>Carburant</strong> : Faites le plein avant d'emprunter les routes de l'intérieur où les stations sont rares.</li>
            <li><strong>Revêtement</strong> : Qualité variable selon les routes, surveillez particulièrement les gravillons en sorties de virages.</li>
            <li><strong>Trafic</strong> : Les routes côtières (D81, D80) peuvent être très fréquentées en juillet-août. Préférez les matinées.</li>
          </ul>
          
          <p><strong>Itinéraire "best of" sur 4-5 jours</strong> : Bastia → Cap Corse → Saint-Florent → Désert des Agriates → Île-Rousse → Calvi → Porto (via les Calanche) → Col de Vergio → Corte → Restonica → Col de Vizzavona → Ajaccio.</p>
          
          <p><strong>Conseil d'expérience</strong> : Ne vous limitez pas aux routes "stars". Entre deux tronçons célèbres, empruntez les petites routes départementales qui traversent des villages perchés. C'est souvent là que se trouvent les plus belles surprises et les rencontres authentiques.</p>
        </div>
      )
    },
    {
      question: "Y a-t-il des stations-service dans toute la Corse ?",
      answer: (
        <div className="space-y-4">
          <p>La distribution des stations-service en Corse présente des particularités importantes à connaître avant de parcourir l'île à moto :</p>
          
          <p><strong>Répartition géographique</strong> :</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Zones côtières et grandes villes</strong> : Bonne couverture avec stations régulières à Bastia, Ajaccio, Calvi, L'Île-Rousse, Porto-Vecchio, Bonifacio et sur les principaux axes routiers côtiers.</li>
            <li><strong>Intérieur des terres</strong> : Réseau beaucoup plus clairsemé avec parfois plus de 50-70 km entre deux stations, particulièrement dans les régions montagneuses comme le centre Corse, le Niolu ou l'Alta Rocca.</li>
          </ul>
          
          <p><strong>Points critiques</strong> : Certains itinéraires touristiques populaires disposent de peu de stations :</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Entre Porto et Cargèse (près de 40 km)</li>
            <li>Entre Corte et le Col de Vizzavona (environ 45 km)</li>
            <li>Dans le désert des Agriates (presque 60 km sans station)</li>
            <li>Entre Propriano et Sartène vers l'intérieur des terres</li>
          </ul>
          
          <p><strong>Spécificités et horaires</strong> :</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Stations automatiques 24/7</strong> : De plus en plus répandues sur l'île, certaines n'acceptent que les cartes bancaires (parfois uniquement françaises).</li>
            <li><strong>Stations traditionnelles</strong> : Souvent fermées entre 12h et 14h et le dimanche après-midi. Horaires d'été généralement plus étendus (7h-20h) que le reste de l'année.</li>
            <li><strong>Stations-villages</strong> : Dans certains villages de l'intérieur, la station peut être une simple pompe devant l'épicerie locale ou le garage du village, avec des horaires variables.</li>
          </ul>
          
          <p><strong>Prix du carburant</strong> :</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Surcoût insulaire</strong> : Les prix sont généralement plus élevés de 5 à 15 centimes par litre par rapport au continent.</li>
            <li><strong>Variation</strong> : Les stations dans les zones touristiques et isolées pratiquent souvent les tarifs les plus élevés.</li>
            <li><strong>SP95-E10</strong> : Moins répandu qu'en France continentale, privilégiez le SP98 ou SP95 disponibles partout.</li>
          </ul>
          
          <p><strong>Conseils pratiques</strong> :</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Règle d'or</strong> : Ne laissez jamais votre jauge descendre en dessous du quart, particulièrement lors des incursions dans l'intérieur des terres.</li>
            <li><strong>Autonomie</strong> : Les motos avec une autonomie d'au moins 200-250 km sont recommandées pour parcourir l'île sereinement.</li>
            <li><strong>Applications utiles</strong> :
              <ul className="list-disc pl-5 mt-1">
                <li>"Essence&Co" ou "Carbu.com" qui répertorient les stations en Corse avec les prix mis à jour</li>
                <li>"Maps.me" permet de télécharger des cartes hors-ligne avec les stations-service indiquées</li>
              </ul>
            </li>
            <li><strong>Jerrycan</strong> : Pour les itinéraires très isolés ou en cas de doute, un petit jerrycan de 5L peut être une sécurité appréciable (à transporter correctement arrimé).</li>
          </ul>
          
          <p><strong>Stations fiables dans les zones critiques</strong> :</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Intérieur</strong> : Corte, Ponte-Leccia, Venaco, Vizzavona (attention aux horaires)</li>
            <li><strong>Zones montagneuses</strong> : Evisa, Zonza, Cargèse (dernières stations avant traversées difficiles)</li>
            <li><strong>Cap Corse</strong> : Macinaggio et Centuri sont les principales stations, prévoyez votre itinéraire en conséquence</li>
          </ul>
          
          <p><strong>Conseil d'expérience</strong> : Avant de partir pour une journée dans l'intérieur des terres ou pour un col isolé, renseignez-vous localement sur les stations ouvertes. Certaines peuvent être temporairement fermées, notamment hors saison touristique. Et n'oubliez pas qu'en montagne, la consommation peut augmenter significativement sur les portions à fort dénivelé.</p>
        </div>
      )
    },
    {
      question: "La Corse est-elle adaptée aux débutants en moto ?",
      answer: (
        <div className="space-y-4">
          <p>La Corse présente des défis particuliers pour les motards débutants, mais reste accessible moyennant quelques précautions et un choix d'itinéraires adapté.</p>
          
          <p><strong>Défis pour les débutants</strong> :</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Routes sinueuses</strong> : La Corse compte parmi les territoires les plus denses en virages de France. Certaines routes comportent des enchaînements techniques de virages en épingle avec dévers, parfois sur des chaussées étroites.</li>
            <li><strong>État des routes</strong> : Qualité variable du revêtement, présence fréquente de gravillons en sortie de virages, nids-de-poule et parfois éboulements ponctuels sur certains tronçons.</li>
            <li><strong>Trafic et stationnement</strong> : En haute saison, certains axes côtiers sont très fréquentés avec un trafic dense de camping-cars et véhicules de location, ce qui peut être stressant pour un débutant.</li>
            <li><strong>Conditions climatiques</strong> : Vent latéral parfois fort sur les routes côtières ou les cols, chaleur intense en été qui peut affecter la concentration.</li>
            <li><strong>Animaux en liberté</strong> : Présence fréquente de vaches, cochons et chèvres sur les routes, particulièrement dans le sud et le centre de l'île.</li>
          </ul>
          
          <p><strong>Aspects favorables aux débutants</strong> :</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Limitations naturelles</strong> : La configuration des routes impose généralement une vitesse modérée, ce qui laisse le temps d'anticiper.</li>
            <li><strong>Respect des motards</strong> : Les conducteurs locaux sont habitués aux motos et généralement respectueux.</li>
            <li><strong>Variété de routes</strong> : De nombreux itinéraires plus faciles, particulièrement le long des côtes est et ouest, permettent une progression en douceur.</li>
            <li><strong>Paysages motivants</strong> : La beauté des paysages incite naturellement à adopter un rythme tranquille et contemplatif, idéal pour progresser.</li>
          </ul>
          
          <p><strong>Recommandations pour débutants</strong> :</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Choix de la moto</strong> : Privilégiez une moto légère et maniable, idéalement un trail de cylindrée moyenne (400-650cc) avec une hauteur de selle adaptée à votre taille.</li>
            <li><strong>Itinéraires progressifs</strong> :
              <ul className="list-disc pl-5 mt-1">
                <li><em>Débutez par</em> : La plaine orientale (N198), la région de Saint-Florent, la côte ouest entre Ajaccio et Propriano</li>
                <li><em>Évitez au début</em> : Les Calanche de Piana, le Cap Corse, la Restonica, les cols de l'intérieur</li>
                <li><em>Progressez vers</em> : Des routes légèrement plus techniques après quelques jours d'adaptation</li>
              </ul>
            </li>
            <li><strong>Organisation</strong> :
              <ul className="list-disc pl-5 mt-1">
                <li>Prévoyez des étapes plus courtes (50-80 km/jour) pour éviter la fatigue</li>
                <li>Voyagez hors haute saison si possible (juin ou septembre)</li>
                <li>Partez tôt le matin quand les routes sont moins fréquentées</li>
                <li>Faites des pauses toutes les 30-45 minutes</li>
              </ul>
            </li>
            <li><strong>Accompagnement</strong> : Idéalement, roulez avec des motards plus expérimentés mais compréhensifs qui peuvent vous conseiller et adapter leur rythme.</li>
          </ul>
          
          <p><strong>Itinéraire "spécial débutants" sur 5-7 jours</strong> :</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Jour 1-2 : Bastia → Moriani-Plage → Aléria (route côtière facile)</li>
            <li>Jour 3 : Aléria → Porto-Vecchio (route directe, peu technique)</li>
            <li>Jour 4-5 : Exploration des plages autour de Porto-Vecchio (trajets courts)</li>
            <li>Jour 6-7 : Porto-Vecchio → Solenzara → Bastia (retour par la côte)</li>
          </ul>
          <p>Cet itinéraire évite les passages les plus techniques tout en offrant de beaux paysages.</p>
          
          <p><strong>Conseil d'expérience</strong> : La Corse peut être une excellente école de pilotage si vous l'abordez avec humilité. Commencez par des itinéraires simples et augmentez progressivement la difficulté. N'hésitez pas à faire demi-tour si un tronçon vous semble trop difficile - c'est le signe d'un motard responsable, pas d'un échec. La Corse vous offrira toujours une route alternative tout aussi belle.</p>
        </div>
      )
    }
  ];

  return (
    <>
      <Helmet>
        <title>FAQ - Découvrir la Corse à Moto</title>
        <meta name="description" content="Réponses aux questions fréquentes sur la découverte de la Corse à moto." />
      </Helmet>

      <Navbar />

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-corsica-light py-16 min-h-screen"
      >
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="mb-12 text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-corsica-dark font-heading">
              Foire Aux Questions
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Retrouvez les réponses détaillées aux questions les plus fréquentes sur la découverte de la Corse à moto.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6 md:p-8">
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.05, duration: 0.5 }}
                >
                  <AccordionItem value={`item-${index}`} className="border-b border-gray-200">
                    <AccordionTrigger className="text-lg font-medium text-corsica-dark py-4 hover:text-corsica-blue">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 pb-6 pt-2 leading-relaxed">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </div>
      </motion.div>

      <Footer />
    </>
  );
};

export default FAQPage;
