
export interface Itinerary {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  duration: string;
  distance: string;
  difficulty: 'facile' | 'moyen' | 'difficile';
  region: string;
  pointsOfInterest: string[];
  startPoint: string;
  endPoint: string;
  elevation: string;
  roadType: string;
}

export const itineraries: Itinerary[] = [
  {
    id: 'capcorse',
    title: 'Le Cap Corse',
    description: 'Une boucle magnifique au nord de l\'île, avec des vues imprenables sur la mer et de charmants villages côtiers.',
    fullDescription: 'Le Cap Corse est une péninsule montagneuse qui s\'étend sur près de 40 km au nord de l\'île. Cette route offre l\'un des plus beaux parcours à moto de Corse avec des paysages maritimes à couper le souffle. Le circuit fait le tour du Cap en suivant la route D80, une route sinueuse qui longe la côte. Sur la côte ouest, vous découvrirez des plages de sable fin et des petits ports de pêche comme Centuri, réputé pour ses langoustes. La côte est, plus sauvage, est rythmée par les tours génoises qui surplombent la mer. Ne manquez pas les villages pittoresques de Nonza, Erbalunga et Macinaggio.',
    image: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&q=80',
    duration: '4-5 heures',
    distance: '110 km',
    difficulty: 'moyen',
    region: 'Nord',
    pointsOfInterest: ['Tour génoise de Santa Maria', 'Village de Nonza', 'Port de Centuri', 'Plage de Tamarone'],
    startPoint: 'Bastia',
    endPoint: 'Bastia',
    elevation: '0-360m',
    roadType: 'Route côtière sinueuse'
  },
  {
    id: 'calanche-piana',
    title: 'Les Calanches de Piana',
    description: 'Un parcours spectaculaire traversant les célèbres formations rocheuses rougeâtres de Piana, site classé au patrimoine mondial de l\'UNESCO.',
    fullDescription: 'Les Calanches de Piana sont parmi les sites les plus impressionnants de Corse. Cette route mythique traverse un paysage minéral unique, où les formations rocheuses de granite rouge plongent directement dans la mer Méditerranée. La route D81 entre Porto et Piana est étroite et sinueuse, offrant des panoramas spectaculaires à chaque virage. Prenez le temps de vous arrêter aux nombreux belvédères pour admirer ce paysage façonné par l\'érosion. Au coucher du soleil, les roches prennent une teinte flamboyante, créant un spectacle naturel inoubliable. Pour compléter l\'expérience, continuez jusqu\'au golfe de Porto pour admirer la réserve naturelle de Scandola, également classée à l\'UNESCO.',
    image: 'https://images.unsplash.com/photo-1572913017567-02f0649bc4fd?auto=format&fit=crop&q=80',
    duration: '3-4 heures',
    distance: '75 km',
    difficulty: 'difficile',
    region: 'Ouest',
    pointsOfInterest: ['Calanques de Piana', 'Golfe de Porto', 'Réserve de Scandola', 'Village de Piana'],
    startPoint: 'Ajaccio',
    endPoint: 'Porto',
    elevation: '0-1200m',
    roadType: 'Route de montagne à flanc de falaise'
  },
  {
    id: 'balagne',
    title: 'La Route des Artisans de Balagne',
    description: 'Découvrez les villages perchés de Balagne, surplombant la mer et réputés pour leur artisanat traditionnel.',
    fullDescription: 'La Balagne, surnommée le "Jardin de la Corse", est une région au nord-ouest de l\'île, parsemée de villages médiévaux perchés sur des collines. Cet itinéraire vous emmène sur la route des artisans, traversant une succession de villages authentiques où les traditions artisanales sont encore très vivantes. Partez de L\'Île-Rousse et montez vers les villages de Sant\'Antonino, Pigna, Corbara et Lumio. Ces villages offrent des panoramas exceptionnels sur la baie de Calvi et la côte. À Pigna, village des musiciens, vous pourrez découvrir les instruments traditionnels corses. Profitez des nombreuses boutiques d\'artisanat local qui proposent poteries, bijoux et produits du terroir.',
    image: 'https://images.unsplash.com/photo-1525874684015-58379d421a52?auto=format&fit=crop&q=80',
    duration: '4-6 heures',
    distance: '90 km',
    difficulty: 'facile',
    region: 'Nord-Ouest',
    pointsOfInterest: ['Sant\'Antonino', 'Village de Pigna', 'Calvi', 'L\'Île-Rousse'],
    startPoint: 'L\'Île-Rousse',
    endPoint: 'Calvi',
    elevation: '0-450m',
    roadType: 'Routes de montagne et côtières'
  },
  {
    id: 'bavella',
    title: 'Les Aiguilles de Bavella',
    description: 'Un itinéraire montagneux traversant l\'un des plus impressionnants massifs de Corse, entre forêts de pins et pics rocheux.',
    fullDescription: 'Le massif de Bavella est l\'un des joyaux naturels de la Corse. Cet itinéraire vous emmène au cœur de l\'Alta Rocca, traversant des paysages grandioses dominés par les majestueuses Aiguilles de Bavella, impressionnantes formations rocheuses qui culminent à plus de 1800 mètres d\'altitude. La route monte depuis Solenzara sur la côte est, à travers des forêts de pins laricio centenaires, jusqu\'au col de Bavella qui offre un panorama à 360° sur les montagnes environnantes. Plusieurs sentiers de randonnée partent du col pour explorer les environs. En redescendant vers Zonza, vous traverserez des villages traditionnels préservés. La route est sinueuse et parfois étroite mais offre une expérience de conduite exceptionnelle.',
    image: 'https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?auto=format&fit=crop&q=80',
    duration: '5-6 heures',
    distance: '120 km',
    difficulty: 'difficile',
    region: 'Sud-Est',
    pointsOfInterest: ['Col de Bavella', 'Aiguilles de Bavella', 'Forêt de l\'Ospedale', 'Village de Zonza'],
    startPoint: 'Porto-Vecchio',
    endPoint: 'Solenzara',
    elevation: '0-1218m',
    roadType: 'Route de montagne sinueuse'
  }
];
