
import { Accommodation } from './types';

export const portovecchioAccommodations: Accommodation[] = [
  {
    id: "acc4",
    name: "Hôtel Résidence Olmuccio",
    type: "hotel",
    location: "Sainte-Lucie-de-Porto-Vecchio",
    region: "portovecchio",
    description: "Relais Motards 3★ situé à 4 km de Sainte-Lucie (région de Porto-Vecchio). Grand domaine avec parking gratuit et hébergements variés (chambres et mini-villas) à 300 m de la plage. Calme et verdoyant, idéal pour faire étape avant/après les célèbres routes de l'Alta Rocca ou de Bavella. Piscine, restaurant sur place et même borne de recharge e-bike en libre-service.",
    priceRange: "90€ - 150€",
    rating: 9.0,
    image: "https://cdn.pixabay.com/photo/2016/10/13/09/06/travel-1737168_1280.jpg",
    amenities: ["Piscine", "Restaurant", "Wifi gratuit", "Mini-golf"],
    bikerAmenities: ["Parking sécurisé", "Proche routes panoramiques", "Itinéraires moto"],
    contact: {
      phone: "+33 4 95 71 46 40",
      website: "olmuccio.com"
    },
    bookingLink: "https://www.booking.com/hotel/fr/olmuccio.fr.html",
    address: "Lieu-dit La Testa, 20144 Sainte-Lucie-de-Porto-Vecchio",
    latitude: 41.7033,
    longitude: 9.3656
  },
  {
    id: "acc5",
    name: "Hôtel A Madonetta",
    type: "hotel",
    location: "Bonifacio",
    region: "portovecchio",
    description: "Hôtel 3★ idéalement situé à 100 m du port de Bonifacio. Facile d'accès, avec grand parking gratuit sur place et même un garage couvert – pratique pour mettre les motos à l'abri la nuit. Établissement moderne avec ascenseur, clim et même borne de recharge pour véhicules électriques. À 500 m de la citadelle (haute-ville) et proche des superbes routes vers Sartène ou l'Alta Rocca.",
    priceRange: "95€ - 160€",
    rating: 8.6,
    image: "https://cdn.pixabay.com/photo/2014/07/10/17/17/hotel-389256_1280.jpg",
    amenities: ["Climatisation", "Ascenseur", "Wifi gratuit", "Borne recharge électrique"],
    bikerAmenities: ["Parking sécurisé", "Garage fermé", "Proche routes panoramiques"],
    contact: {
      phone: "+33 4 95 10 36 39",
      email: "contact@amadonetta.com",
      website: "amadonetta.com"
    },
    bookingLink: "https://www.booking.com/hotel/fr/a-madonetta-bonifacio.fr.html",
    address: "5 rue Paul Nicolai, 20169 Bonifacio",
    latitude: 41.3866,
    longitude: 9.1583
  },
  {
    id: "acc6",
    name: "Lodge de Charme A Cheda",
    type: "hotel",
    location: "Bonifacio",
    region: "portovecchio",
    description: "Hôtel 4★ de charme aux portes de Bonifacio (4 km), accessible facilement par la route provinciale. Grand parc avec parking privé gratuit sur place. Ambiance calme avec piscine chauffée, jacuzzi, spa – idéal pour se détendre après de longues étapes à moto. Restaurant gastronomique sur place (recommandé Michelin). Les motos peuvent stationner à l'intérieur de la propriété en toute sécurité (lieu clôturé et discret).",
    priceRange: "150€ - 300€",
    rating: 9.3,
    image: "https://cdn.pixabay.com/photo/2016/08/26/20/30/travel-1623028_1280.jpg",
    amenities: ["Piscine chauffée", "Spa", "Jacuzzi", "Restaurant gastronomique", "Climatisation"],
    bikerAmenities: ["Parking sécurisé", "Proche routes panoramiques"],
    contact: {
      phone: "+33 4 95 73 03 82",
      email: "acheda@acheda-hotel.com",
      website: "acheda-hotel.com"
    },
    bookingLink: "https://www.acheda-hotel.com",
    address: "Cavallo Morto, 20169 Bonifacio",
    latitude: 41.3958,
    longitude: 9.1306
  },
  {
    id: "acc19",
    name: "Camping des Pins",
    type: "camping",
    location: "Porto-Vecchio",
    region: "portovecchio",
    description: "Situé à proximité des plus belles plages du sud de la Corse, ce camping offre des emplacements ombragés et spacieux. Un espace spécial est réservé aux motards avec des installations pour l'entretien des motos et un abri couvert en cas de pluie.",
    priceRange: "25€ - 40€",
    rating: 4.2,
    image: "https://cdn.pixabay.com/photo/2018/01/17/07/06/travel-3087953_1280.jpg",
    amenities: ["Piscine", "Épicerie", "Sanitaires modernes", "Espace barbecue"],
    bikerAmenities: ["Espace motards dédié", "Atelier de réparation", "Location de motos"],
    latitude: 41.6095,
    longitude: 9.2941
  }
];
