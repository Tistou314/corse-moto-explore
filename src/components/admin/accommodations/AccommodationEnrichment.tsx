
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Zap, Download, AlertCircle, CheckCircle, RefreshCw } from "lucide-react";
import { SerpApiService } from "@/services/serpApiService";
import { accommodations } from "@/data/accommodations";
import { toast } from "sonner";
import type { Accommodation } from "@/data/accommodations/types";

const AccommodationEnrichment = () => {
  const [apiKey, setApiKey] = useState('842b3858bf9273f13432a352d7acbfbe58d09888c9f3593ee7025a349f27ab04');
  const [isEnriching, setIsEnriching] = useState(false);
  const [progress, setProgress] = useState(0);
  const [enrichedData, setEnrichedData] = useState<Accommodation[]>([]);
  const [stats, setStats] = useState({
    total: 0,
    processed: 0,
    improved: 0,
    errors: 0
  });

  const handleEnrichment = async () => {
    if (!apiKey) {
      toast.error("Veuillez saisir votre clé API SerpAPI");
      return;
    }

    setIsEnriching(true);
    setProgress(0);
    setStats({ total: accommodations.length, processed: 0, improved: 0, errors: 0 });

    try {
      const serpApi = new SerpApiService(apiKey);
      const enrichedAccommodations: Accommodation[] = [];
      
      for (let i = 0; i < accommodations.length; i++) {
        const accommodation = accommodations[i];
        
        try {
          console.log(`Traitement de ${accommodation.name} (${i + 1}/${accommodations.length})`);
          
          const enrichedData = await serpApi.searchAccommodation(accommodation.name, accommodation.location);
          
          let improved = false;
          const updatedAccommodation: Accommodation = { ...accommodation };
          
          if (enrichedData) {
            // Mise à jour de l'image si trouvée
            if (enrichedData.image && enrichedData.image !== accommodation.image) {
              updatedAccommodation.image = enrichedData.image;
              improved = true;
            }
            
            // Mise à jour du rating si meilleur
            if (enrichedData.rating && enrichedData.rating > accommodation.rating) {
              updatedAccommodation.rating = enrichedData.rating;
              improved = true;
            }
            
            // Mise à jour des contacts si manquants
            if (enrichedData.phone && !accommodation.contact?.phone) {
              updatedAccommodation.contact = {
                ...accommodation.contact,
                phone: enrichedData.phone
              };
              improved = true;
            }
            
            if (enrichedData.website && !accommodation.contact?.website) {
              updatedAccommodation.contact = {
                ...accommodation.contact,
                website: enrichedData.website
              };
              improved = true;
            }
            
            // Ajout des métadonnées d'enrichissement
            updatedAccommodation.enrichment = {
              lastUpdated: new Date().toISOString(),
              source: enrichedData.source,
              hasRealPhoto: !!enrichedData.image,
              hasValidatedContact: !!(enrichedData.phone || enrichedData.website)
            };
          }
          
          enrichedAccommodations.push(updatedAccommodation);
          
          setStats(prev => ({
            ...prev,
            processed: i + 1,
            improved: prev.improved + (improved ? 1 : 0)
          }));
          
        } catch (error) {
          console.error(`Erreur pour ${accommodation.name}:`, error);
          enrichedAccommodations.push(accommodation);
          setStats(prev => ({ ...prev, processed: i + 1, errors: prev.errors + 1 }));
        }
        
        setProgress(((i + 1) / accommodations.length) * 100);
        
        // Délai pour éviter la surcharge de l'API
        if (i < accommodations.length - 1) {
          await new Promise(resolve => setTimeout(resolve, 1500));
        }
      }
      
      setEnrichedData(enrichedAccommodations);
      toast.success(`Enrichissement terminé ! ${stats.improved} hébergements améliorés`);
      
    } catch (error) {
      console.error('Erreur lors de l\'enrichissement:', error);
      toast.error("Erreur lors de l'enrichissement des données");
    } finally {
      setIsEnriching(false);
    }
  };

  const downloadEnrichedData = () => {
    const dataStr = JSON.stringify(enrichedData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'accommodations-enriched.json';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-yellow-500" />
            Enrichissement automatique des hébergements
          </CardTitle>
          <CardDescription>
            Mise à jour automatique de tous les hébergements avec photos réelles et informations vérifiées via SerpAPI
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Clé API SerpAPI</label>
            <Input
              type="password"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="Votre clé API SerpAPI"
            />
          </div>
          
          <div className="flex items-center gap-4">
            <Button 
              onClick={handleEnrichment}
              disabled={isEnriching || !apiKey}
              className="flex items-center gap-2"
            >
              {isEnriching ? (
                <RefreshCw className="h-4 w-4 animate-spin" />
              ) : (
                <Zap className="h-4 w-4" />
              )}
              {isEnriching ? 'Enrichissement en cours...' : 'Enrichir tous les hébergements'}
            </Button>
            
            {enrichedData.length > 0 && (
              <Button 
                variant="outline" 
                onClick={downloadEnrichedData}
                className="flex items-center gap-2"
              >
                <Download className="h-4 w-4" />
                Télécharger les données enrichies
              </Button>
            )}
          </div>
          
          {isEnriching && (
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Progression</span>
                <span>{stats.processed}/{stats.total}</span>
              </div>
              <Progress value={progress} className="w-full" />
              
              <div className="flex gap-4 text-sm">
                <Badge variant="outline" className="flex items-center gap-1">
                  <CheckCircle className="h-3 w-3" />
                  Améliorés: {stats.improved}
                </Badge>
                {stats.errors > 0 && (
                  <Badge variant="destructive" className="flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" />
                    Erreurs: {stats.errors}
                  </Badge>
                )}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
      
      {enrichedData.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Résultats de l'enrichissement</CardTitle>
            <CardDescription>
              {enrichedData.length} hébergements traités, {stats.improved} améliorés
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-muted-foreground">
              Les données enrichies sont prêtes. Vous pouvez les télécharger et les intégrer dans votre base de données.
              Les améliorations incluent: photos réelles, contacts vérifiés, notes mises à jour.
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default AccommodationEnrichment;
