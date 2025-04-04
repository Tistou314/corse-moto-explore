
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Hotel, MapPin, ShieldCheck, Clock, Bike } from 'lucide-react';

interface AccommodationTypeInfo {
  title: string;
  description: string;
  icon: React.ElementType;
}

const accommodationTypesInfo: AccommodationTypeInfo[] = [
  {
    title: 'Hôtels moto-friendly',
    description: 'Hébergements proposant des services adaptés aux motards : parking sécurisé, atelier de réparation, lavage de moto.',
    icon: Hotel
  },
  {
    title: 'Gîtes et chambres d\'hôtes',
    description: 'Hébergements authentiques offrant un accueil chaleureux et des conseils locaux pour les motards.',
    icon: MapPin
  },
  {
    title: 'Campings pour motards',
    description: 'Emplacements spacieux, équipements adaptés et ambiance conviviale pour les voyageurs à moto.',
    icon: Bike
  },
  {
    title: 'Critères de sélection',
    description: 'Découvrez nos recommandations basées sur la sécurité, la proximité des routes, et l\'accueil des motards.',
    icon: ShieldCheck
  },
  {
    title: 'Réservation et disponibilités',
    description: 'Conseils pour réserver votre hébergement en Corse, notamment pendant la haute saison.',
    icon: Clock
  }
];

const AccommodationTypeCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
      {accommodationTypesInfo.map((type, index) => (
        <Card key={index} className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center space-x-4">
              <type.icon className="w-8 h-8 text-primary" />
              <CardTitle>{type.title}</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{type.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default AccommodationTypeCards;
