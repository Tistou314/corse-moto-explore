
interface PoiDetail {
  name: string;
  description: string;
  image: string;
}

// Predefined POI data for specific locations
const poiData: Record<string, PoiDetail> = {
  "Erbalunga": {
    name: "Erbalunga",
    description: "Village de pêcheurs pittoresque avec son port miniature encadré de maisons colorées et sa tour génoise partiellement effondrée sur un promontoire rocheux. Idéal pour une pause café en terrasse face à la mer.",
    image: "https://cdn.pixabay.com/photo/2017/08/22/10/47/corsica-2668760_1280.jpg"
  },
  "Nonza": {
    name: "Nonza",
    description: "Joyau de la côte ouest du Cap Corse, perché sur une falaise de schiste noir. Ne manquez pas la tour paoline carrée offrant une vue panoramique, et admirez sa plage de galets noirs visible depuis le village.",
    image: "https://cdn.pixabay.com/photo/2014/11/01/18/46/corsica-513495_1280.jpg"
  },
  "Barcaggio": {
    name: "Barcaggio",
    description: "Le village le plus septentrional de Corse, petit hameau authentique peu fréquenté et point de départ vers le phare de la Giraglia. Spot idéal pour observer les oiseaux migrateurs dans la réserve naturelle.",
    image: "https://cdn.pixabay.com/photo/2016/10/30/20/14/sea-1784117_1280.jpg"
  },
  "Macinaggio": {
    name: "Macinaggio",
    description: "Dernier port important avant la pointe nord du Cap. Point de départ du sentier des douaniers et lieu incontournable pour faire le plein d'essence et déguster des fruits de mer dans ses restaurants.",
    image: "https://cdn.pixabay.com/photo/2014/11/01/18/46/corsica-513495_1280.jpg"
  },
  "Centuri": {
    name: "Centuri",
    description: "L'un des plus beaux ports de pêche du Cap Corse, réputé pour la pêche aux langoustes. Sa configuration circulaire protégée par une jetée et ses restaurants de fruits de mer en font un arrêt incontournable.",
    image: "https://cdn.pixabay.com/photo/2018/10/19/12/14/motor-3758180_1280.jpg"
  },
  "Bastia": {
    name: "Bastia",
    description: "Deuxième ville de Corse et point de départ idéal pour explorer le Cap Corse. Son vieux port pittoresque et sa citadelle génoise offrent un cadre magnifique pour débuter votre voyage.",
    image: "https://cdn.pixabay.com/photo/2017/07/14/18/55/corsica-2504692_1280.jpg"
  },
  "Calvi": {
    name: "Calvi",
    description: "Magnifique cité balnéaire dominée par sa citadelle génoise. La légende raconte que c'est la ville natale de Christophe Colomb. Sa longue plage de sable fin et ses eaux cristallines en font une étape incontournable.",
    image: "https://cdn.pixabay.com/photo/2016/05/15/18/32/corsica-1394321_1280.jpg"
  },
  "Porto": {
    name: "Porto",
    description: "Petit port de pêche niché au fond d'un golfe spectaculaire, entouré de montagnes rouges. C'est le point d'accès aux célèbres calanques de Piana et à la réserve naturelle de Scandola.",
    image: "https://cdn.pixabay.com/photo/2017/07/14/18/55/corsica-2504693_1280.jpg"
  },
  "Piana": {
    name: "Piana",
    description: "Village perché à flanc de montagne avec une vue imprenable sur le golfe de Porto. Célèbre pour ses calanches, formations rocheuses rouges sculptées par l'érosion, classées au patrimoine mondial de l'UNESCO.",
    image: "https://cdn.pixabay.com/photo/2016/05/15/18/37/corsica-1394327_1280.jpg"
  },
  "Corte": {
    name: "Corte",
    description: "Ancienne capitale de la Corse indépendante, nichée au cœur des montagnes. Sa citadelle surplombant la ville offre une vue spectaculaire sur les vallées environnantes et son université apporte une ambiance jeune et dynamique.",
    image: "https://cdn.pixabay.com/photo/2018/10/31/22/42/corsica-3786129_1280.jpg"
  },
  "Bonifacio": {
    name: "Bonifacio",
    description: "Cité médiévale spectaculaire perchée sur des falaises de calcaire blanc. Son port naturel et ses maisons suspendues au-dessus de la mer en font l'une des destinations les plus photographiées de Méditerranée.",
    image: "https://cdn.pixabay.com/photo/2014/07/22/09/59/corsica-399883_1280.jpg"
  },
  "Porto-Vecchio": {
    name: "Porto-Vecchio",
    description: "Station balnéaire renommée, surnommée la 'Saint-Tropez corse'. Elle combine un centre historique animé et des plages de sable blanc parmi les plus belles de l'île, comme Palombaggia et Santa Giulia.",
    image: "https://cdn.pixabay.com/photo/2021/08/02/11/03/beach-6516993_1280.jpg"
  }
};

export const defaultImage = "https://cdn.pixabay.com/photo/2017/07/14/18/55/corsica-2504688_1280.jpg";

export default poiData;
