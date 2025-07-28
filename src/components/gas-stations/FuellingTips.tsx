
import React from 'react';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const FuellingTips = () => {
  return (
    <div className="mb-6 space-y-6">
      <Alert className="bg-corsica-azure/10 border-corsica-azure/20">
        <AlertTitle className="text-corsica-azure text-lg font-medium">
          Stations stratégiques à connaître
        </AlertTitle>
        <AlertDescription className="text-corsica-azure">
          Certaines stations sont essentielles lors de votre road trip à moto en Corse, 
          car elles sont situées dans des zones où les alternatives sont rares. 
          Elles sont identifiées par un badge spécial dans notre liste.
        </AlertDescription>
      </Alert>
      
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Conseils pour votre ravitaillement en Corse</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-medium mb-2">Préparez votre itinéraire</h3>
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
              <li>Planifiez vos arrêts carburant à l'avance, surtout dans les zones montagneuses</li>
              <li>Ne laissez jamais votre réservoir descendre en dessous de la moitié en régions isolées</li>
              <li>Considérez l'autonomie réelle de votre moto sur routes sinueuses (souvent 20-30% inférieure)</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-2">Horaires et disponibilité</h3>
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
              <li>Les stations des petits villages peuvent avoir des horaires réduits, surtout hors saison</li>
              <li>Certaines stations peuvent être fermées le dimanche ou les jours fériés</li>
              <li>En haute saison (juillet-août), prévoyez plus de temps pour faire le plein dans les zones touristiques</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FuellingTips;
