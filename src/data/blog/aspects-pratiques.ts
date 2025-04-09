import { BlogPost } from '../blog/types';
import { v4 as uuidv4 } from 'uuid';
import { standardAuthor } from '../blogPosts';

// Keep only legitimate posts in this category
export const aspectsPratiquesArticles: BlogPost[] = [
  {
    id: uuidv4(),
    title: "Traversée en ferry avec sa moto : guide complet",
    slug: "traversee-ferry-moto-guide",
    excerpt: "Tout ce que vous devez savoir pour préparer votre traversée maritime vers la Corse avec votre deux-roues.",
    content: `
# Traversée en ferry avec sa moto : guide complet

## Réserver sa traversée

Pour rejoindre la Corse à moto, plusieurs compagnies maritimes proposent des traversées depuis le continent :

- **Corsica Linea** : Départs de Marseille, Toulon et Nice
- **Corsica Ferries** : Départs de Toulon, Nice et Savona (Italie)
- **La Méridionale** : Départs principalement de Marseille
- **Moby Lines** : Liaisons depuis l'Italie (Livourne, Gênes)

Il est fortement conseillé de réserver plusieurs mois à l'avance, particulièrement en haute saison (juillet-août), car les places pour les motos peuvent être limitées.

## Tarifs spécifiques moto

La plupart des compagnies proposent des tarifs spécifiques pour les deux-roues, généralement moins élevés que pour les voitures. Le prix varie selon :

- La période de l'année
- La taille/cylindrée de la moto
- Le type de traversée (de jour ou de nuit)
- Les options d'hébergement à bord (siège, cabine)

En moyenne, comptez entre 30€ et 60€ pour le transport de la moto seule (hors passager).

## Préparer votre moto pour la traversée

Avant d'embarquer, quelques précautions s'imposent :

1. **Réservoir** : Ne remplissez pas complètement votre réservoir, limitez-vous à la moitié ou aux 3/4 par mesure de sécurité.
2. **Batterie** : Débranchez-la si la traversée est longue.
3. **Équipements** : Retirez tous les accessoires fragiles ou qui pourraient se détacher.
4. **Arrimage** : Prévoyez des sangles supplémentaires en cas de mer agitée.
5. **Documents** : Ayez à portée de main votre carte grise et votre assurance.

## L'embarquement à moto

Lors de l'embarquement, vous serez généralement parmi les premiers ou derniers véhicules à monter à bord. Points à noter :

- Portez votre équipement complet même pour l'embarquement (risque de sol glissant)
- Suivez attentivement les consignes du personnel de bord
- Roulez lentement sur les ponts métalliques, souvent glissants
- Sur certains ferries, vous devrez vous garer sur une zone dédiée aux deux-roues

## Arrimage de la moto

Le personnel du ferry vous indiquera où vous garer. Généralement, vous devrez :

1. Placer votre moto sur béquille latérale (plutôt que centrale)
2. L'arrimer avec des sangles fournies par le personnel
3. Vérifier la tension des sangles (ni trop ni trop peu)
4. Mettre la moto au point mort et non pas en première

Si la mer est agitée, n'hésitez pas à demander des sangles supplémentaires.

## Pendant la traversée

Une fois votre moto arrimée :

- Récupérez les objets de valeur et documents importants
- Notez l'emplacement exact de votre véhicule (pont, zone)
- Il est généralement interdit de redescendre aux ponts véhicules pendant la traversée

## Le débarquement

Au moment du débarquement :

1. Rejoignez votre moto 15-20 minutes avant l'arrivée au port
2. Vérifiez qu'elle n'a pas été endommagée
3. Retirez soigneusement les sangles avec l'aide du personnel
4. Préparez-vous à sortir dans l'ordre indiqué

## Conseils pratiques

- **Réservez tôt** : Les places pour les motos sont limitées, surtout en haute saison
- **Choisissez la bonne traversée** : Les traversées de nuit permettent de gagner du temps
- **Optez pour une cabine** : Pour les longues traversées, c'est plus confortable
- **Arrivez en avance** : Au moins 2h avant le départ pour les formalités
- **Prévoyez de quoi protéger votre moto** : Housse, cadenas supplémentaires

En suivant ces conseils, votre traversée maritime vers la Corse se déroulera dans les meilleures conditions pour débuter votre aventure à moto sur l'Île de Beauté.
    `,
    category: "Aspects pratiques",
    author: standardAuthor,
    date: "2025-04-05",
    imageUrl: "https://cdn.pixabay.com/photo/2018/09/22/17/05/corsica-3695755_1280.jpg",
    readingTime: "7 min",
    tags: ["ferry", "traversée", "préparation", "conseils", "transport"]
  }
];
