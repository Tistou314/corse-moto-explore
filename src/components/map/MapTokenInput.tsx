
import { useState } from 'react';
import { useMap } from '@/contexts/MapContext';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useToast } from "@/hooks/use-toast";
import { Key, Shield } from 'lucide-react';

const MapTokenInput = () => {
  const { mapboxToken, setMapboxToken, isMapConfigured } = useMap();
  const [tokenInput, setTokenInput] = useState('');
  const [showToken, setShowToken] = useState(false);
  const { toast } = useToast();
  
  const handleSaveToken = () => {
    if (tokenInput.trim().startsWith('pk.')) {
      setMapboxToken(tokenInput.trim());
      toast({
        title: "Configuration mise à jour",
        description: "La carte est maintenant configurée avec votre clé API.",
      });
      setTokenInput('');
    } else {
      toast({
        variant: "destructive",
        title: "Clé API invalide",
        description: "Veuillez fournir une clé API Mapbox valide commençant par 'pk.'",
      });
    }
  };

  const handleResetToken = () => {
    localStorage.removeItem('mapbox_token');
    setMapboxToken('');
    toast({
      title: "Configuration réinitialisée",
      description: "La clé API a été supprimée.",
    });
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-sm mb-8">
      <h2 className="text-xl font-bold mb-4 flex items-center">
        <Key className="w-5 h-5 mr-2 text-corsica-blue" />
        Configuration de la carte
      </h2>
      
      {isMapConfigured ? (
        <div>
          <Alert className="mb-4 bg-green-50 border-green-200">
            <Shield className="h-4 w-4 text-green-600" />
            <AlertDescription className="text-green-700">
              La carte est configurée avec une clé API valide.
            </AlertDescription>
          </Alert>
          
          <div className="mt-4">
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex-grow">
                <Input
                  type={showToken ? "text" : "password"} 
                  value={mapboxToken || ''} 
                  readOnly
                  className="font-mono bg-gray-50"
                />
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowToken(!showToken)}
              >
                {showToken ? 'Masquer' : 'Afficher'}
              </Button>
            </div>
            
            <div className="flex justify-between">
              <Button variant="outline" onClick={handleResetToken}>
                Réinitialiser
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <p className="text-muted-foreground mb-4">
            Pour utiliser la carte interactive, vous avez besoin d'une clé API Mapbox. 
            Veuillez entrer votre clé publique (commençant par pk.).
          </p>
          
          <div className="space-y-4">
            <div>
              <Input
                type={showToken ? "text" : "password"}
                value={tokenInput}
                onChange={(e) => setTokenInput(e.target.value)}
                placeholder="pk.eyJ1..."
                className="font-mono"
              />
              <div className="flex justify-end mt-2">
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setShowToken(!showToken)}
                >
                  {showToken ? 'Masquer' : 'Afficher'}
                </Button>
              </div>
            </div>
            
            <Button 
              className="w-full bg-corsica-blue hover:bg-corsica-blue/90"
              onClick={handleSaveToken}
              disabled={!tokenInput.trim()}
            >
              Configurer la carte
            </Button>
            
            <p className="text-xs text-muted-foreground">
              Votre clé API est stockée uniquement dans votre navigateur et n'est jamais partagée.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MapTokenInput;
