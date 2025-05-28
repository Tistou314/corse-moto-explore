import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Zap, Download, AlertCircle, CheckCircle, RefreshCw, Filter, Play } from "lucide-react";
import { SerpApiService } from "@/services/serpApiService";
import { accommodations } from "@/data/accommodations";
import { toast } from "sonner";
import type { Accommodation } from "@/data/accommodations/types";

const AccommodationEnrichment = () => {
  const [apiKey, setApiKey] = useState('842b3858bf9273f13432a352d7acbfbe58d09888c9f3593ee7025a349f27ab04');
  const [isEnriching, setIsEnriching] = useState(false);
  const [autoStarted, setAutoStarted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [enrichedData, setEnrichedData] = useState<Accommodation[]>([]);
  const [stats, setStats] = useState({
    total: 0,
    processed: 0,
    improved: 0,
    errors: 0,
    skipped: 0
  });

  // Filtrer les hébergements qui ont besoin d'être mis à jour
  const accommodationsToUpdate = accommodations.filter(acc => {
    // Skip ceux qui ont une image uploadée (commencent par /lovable-uploads/)
    return !acc.image.startsWith('/lovable-uploads/');
  });

  // Auto-start enrichment when component mounts and API key is available
  useEffect(() => {
    if (apiKey && !autoStarted && accommodationsToUpdate.length > 0) {
      setAutoStarted(true);
      setTimeout(() => {
        handleEnrichment();
      }, 1000);
    }
  }, [apiKey, autoStarted, accommodationsToUpdate.length]);

  const handleEnrichment = async () => {
    if (!apiKey) {
      toast.error("Veuillez saisir votre clé API SerpAPI");
      return;
    }

    setIsEnriching(true);
    setProgress(0);
    setStats({ 
      total: accommodationsToUpdate.length, 
      processed: 0, 
      improved: 0, 
      errors: 0, 
      skipped: accommodations.length - accommodationsToUpdate.length 
    });

    console.log(`🚀 Début de l'enrichissement automatique de ${accommodationsToUpdate.length} hébergements`);
    console.log(`✅ ${accommodations.length - accommodationsToUpdate.length} hébergements ignorés (déjà à jour)`);
    
    toast.info(`Enrichissement automatique démarré pour ${accommodationsToUpdate.length} hébergements`);

    console.log(`Début de l'enrichissement de ${accommodationsToUpdate.length} hébergements`);
    console.log(`${accommodations.length - accommodationsToUpdate.length} hébergements ignorés (déjà à jour)`);

    try {
      const serpApi = new SerpApiService(apiKey);
      const enrichedAccommodations: Accommodation[] = [];
      
      for (let i = 0; i < accommodationsToUpdate.length; i++) {
        const accommodation = accommodationsToUpdate[i];
        
        try {
          console.log(`Traitement de ${accommodation.name} (${i + 1}/${accommodationsToUpdate.length})`);
          
          const enrichedData = await serpApi.searchAccommodation(accommodation.name, accommodation.location);
          
          let improved = false;
          const updatedAccommodation: Accommodation = { ...accommodation };
          
          if (enrichedData) {
            // Mise à jour de l'image si trouvée et différente
            if (enrichedData.image && enrichedData.image !== accommodation.image) {
              updatedAccommodation.image = enrichedData.image;
              improved = true;
              console.log(`✓ Image mise à jour pour ${accommodation.name}`);
            }
            
            // Mise à jour du rating si meilleur
            if (enrichedData.rating && enrichedData.rating > accommodation.rating) {
              updatedAccommodation.rating = enrichedData.rating;
              improved = true;
              console.log(`✓ Rating amélioré pour ${accommodation.name}: ${enrichedData.rating}`);
            }
            
            // Mise à jour des contacts si manquants
            if (enrichedData.phone && !accommodation.contact?.phone) {
              updatedAccommodation.contact = {
                ...accommodation.contact,
                phone: enrichedData.phone
              };
              improved = true;
              console.log(`✓ Téléphone ajouté pour ${accommodation.name}`);
            }
            
            if (enrichedData.website && !accommodation.contact?.website) {
              updatedAccommodation.contact = {
                ...accommodation.contact,
                website: enrichedData.website
              };
              improved = true;
              console.log(`✓ Site web ajouté pour ${accommodation.name}`);
            }
            
            // Ajout des métadonnées d'enrichissement
            updatedAccommodation.enrichment = {
              lastUpdated: new Date().toISOString(),
              source: enrichedData.source || 'SerpAPI',
              hasRealPhoto: !!enrichedData.image,
              hasValidatedContact: !!(enrichedData.phone || enrichedData.website)
            };
            
            if (improved) {
              console.log(`✓ ${accommodation.name} enrichi avec succès`);
            }
          }
          
          enrichedAccommodations.push(updatedAccommodation);
          
          setStats(prev => ({
            ...prev,
            processed: i + 1,
            improved: prev.improved + (improved ? 1 : 0)
          }));
          
        } catch (error) {
          console.error(`❌ Erreur pour ${accommodation.name}:`, error);
          enrichedAccommodations.push(accommodation);
          setStats(prev => ({ ...prev, processed: i + 1, errors: prev.errors + 1 }));
        }
        
        setProgress(((i + 1) / accommodationsToUpdate.length) * 100);
        
        // Délai pour éviter la surcharge de l'API
        if (i < accommodationsToUpdate.length - 1) {
          await new Promise(resolve => setTimeout(resolve, 1500));
        }
      }
      
      setEnrichedData(enrichedAccommodations);
      toast.success(`Enrichissement terminé ! ${stats.improved} hébergements améliorés sur ${accommodationsToUpdate.length} traités`);
      
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
            {isEnriching && <RefreshCw className="h-4 w-4 animate-spin text-blue-500" />}
          </CardTitle>
          <CardDescription>
            Mise à jour automatique des hébergements avec photos réelles et informations vérifiées via SerpAPI.
            <br />
            <span className="text-green-600 font-medium">
              {accommodationsToUpdate.length} hébergements à traiter, {accommodations.length - accommodationsToUpdate.length} déjà à jour (ignorés)
            </span>
            {autoStarted && !isEnriching && (
              <div className="mt-2">
                <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                  <CheckCircle className="h-3 w-3 mr-1" />
                  Enrichissement terminé automatiquement
                </Badge>
              </div>
            )}
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
              disabled={isEnriching}
            />
          </div>

          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <div className="flex items-center gap-2 text-blue-800 mb-2">
              <Filter className="h-4 w-4" />
              <span className="font-medium">Filtrage intelligent activé</span>
            </div>
            <p className="text-sm text-blue-700">
              Traitement automatique en cours. Seuls les hébergements sans images uploadées sont traités. 
              Les hébergements avec des images dans "/lovable-uploads/" sont considérés comme à jour.
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <Button 
              onClick={handleEnrichment}
              disabled={isEnriching || !apiKey || accommodationsToUpdate.length === 0}
              className="flex items-center gap-2"
            >
              {isEnriching ? (
                <RefreshCw className="h-4 w-4 animate-spin" />
              ) : autoStarted ? (
                <Play className="h-4 w-4" />
              ) : (
                <Zap className="h-4 w-4" />
              )}
              {isEnriching ? 'Enrichissement en cours...' : 
               autoStarted ? 'Relancer l\'enrichissement' : 
               `Enrichir ${accommodationsToUpdate.length} hébergements`}
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
              
              <div className="flex gap-4 text-sm flex-wrap">
                <Badge variant="outline" className="flex items-center gap-1">
                  <CheckCircle className="h-3 w-3" />
                  Améliorés: {stats.improved}
                </Badge>
                <Badge variant="secondary" className="flex items-center gap-1">
                  <Filter className="h-3 w-3" />
                  Ignorés: {stats.skipped}
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
            <CardTitle>Résultats de l'enrichissement automatique</CardTitle>
            <CardDescription>
              {enrichedData.length} hébergements traités, {stats.improved} améliorés, {stats.skipped} ignorés
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
