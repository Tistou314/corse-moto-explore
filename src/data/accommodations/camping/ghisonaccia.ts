
import { Accommodation } from '../types';

export const ghisonacciaCampings: Accommodation[] = [
  {
    id: "camp-ghisonaccia1",
    name: "Camping Europa Beach",
    type: "camping",
    location: "Sorbo-Ocagnano",
    region: "ghisonaccia",
    description: "Camping 3★ en bord de mer dans une grande pinède sur la Costa Serena. Accès direct plage, bar-restaurant et supérette sur place. Terrain de sport, piscine. Parking sécurisé pour motos et accès facile depuis la RN198.",
    priceRange: "20€ - 70€",
    rating: 3.9,
    image: "https://cdn.pixabay.com/photo/2016/11/21/16/36/motorhome-1846328_1280.jpg",
    amenities: ["Accès plage", "Bar-restaurant", "Supérette", "Piscine", "Terrain de sport"],
    bikerAmenities: ["Parking sécurisé", "Accès facile RN198"],
    contact: {
      phone: "+33 7 88 10 77 25",
      website: "https://www.corsicacamping-europabeach.fr/",
      email: "contact@europabeach-camping.com"
    },
    bookingLink: "https://www.corsicacamping-europabeach.fr/reservation",
    address: "RN198, 20240 Sorbo-Ocagnano",
    latitude: 42.47,
    longitude: 9.53
  },
  {
    id: "camp-ghisonaccia2",
    name: "Camping U Casone",
    type: "camping",
    location: "Ghisonaccia",
    region: "ghisonaccia",
    description: "Camping 3★ nature au bord d'un étang sur la Costa Serena. Cadre calme et naturel avec bungalows, restaurant sur place. Parking facile et accès pratique pour les motos. Wifi dans les zones communes.",
    priceRange: "18€ - 65€",
    rating: 4.0,
    image: "https://cdn.pixabay.com/photo/2016/02/18/22/16/tent-1208201_1280.jpg",
    amenities: ["Bord d'étang", "Bungalows", "Restaurant", "Cadre nature"],
    bikerAmenities: ["Parking gratuit", "Accès facile motos"],
    contact: {
      phone: "+33 4 95 56 04 78"
    },
    address: "Route de la Mer, 20240 Ghisonaccia",
    latitude: 42.01,
    longitude: 9.41
  },
  {
    id: "camp-ghisonaccia3",
    name: "Camping Santa Lucia",
    type: "camping",
    location: "Santa-Lucia-di-Moriani",
    region: "ghisonaccia",
    description: "Camping 3★ en Costa Verde avec accès direct à la plage. Bar, épicerie sur place. Parking pour motos et wifi à l'accueil. Idéal pour une étape sur la côte Est.",
    priceRange: "15€ - 55€",
    rating: 3.8,
    image: "https://cdn.pixabay.com/photo/2018/06/14/21/15/the-beach-3475305_1280.jpg",
    amenities: ["Accès plage", "Bar", "Épicerie", "Costa Verde"],
    bikerAmenities: ["Parking motos", "Étape côte Est"],
    contact: {
      phone: "+33 4 95 38 53 70"
    },
    address: "Route de la Plage, 20220 Santa-Lucia-di-Moriani",
    latitude: 42.38,
    longitude: 9.53
  },
  {
    id: "camp-ghisonaccia4",
    name: "Camping Le Soleil",
    type: "camping",
    location: "Aléria",
    region: "ghisonaccia",
    description: "Petit camping 2★ simple sur la côte Est avec accueil familial. Accès plage, café-snack sur place. Idéal pour une étape moto économique et conviviale. Parking sécurisé.",
    priceRange: "12€ - 35€",
    rating: 3.5,
    image: "https://cdn.pixabay.com/photo/2014/11/27/00/58/beach-547750_1280.jpg",
    amenities: ["Accès plage", "Café-snack", "Accueil familial"],
    bikerAmenities: ["Parking gratuit", "Étape moto économique"],
    contact: {
      phone: "+33 4 95 57 01 42"
    },
    address: "Route d'Aléria, 20270 Aléria",
    latitude: 42.10,
    longitude: 9.52
  }
];
