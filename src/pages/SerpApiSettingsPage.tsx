
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const SerpApiSettingsPage = () => {
  const [apiKey, setApiKey] = useState<string>(localStorage.getItem("SERP_API_KEY") || "");
  const [status, setStatus] = useState<"idle" | "saved">("idle");

  // Support ?apiKey=... for quick setup
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get("apiKey");
    if (key) {
      localStorage.setItem("SERP_API_KEY", key);
      setApiKey(key);
      setStatus("saved");
    }
  }, []);

  const handleSave = () => {
    if (!apiKey) return;
    localStorage.setItem("SERP_API_KEY", apiKey);
    setStatus("saved");
    // Petit feedback visuel natif
    setTimeout(() => setStatus("idle"), 2000);
  };

  return (
    <main className="min-h-screen flex items-center justify-center p-6 bg-background">
      <Helmet>
        <title>Configurer SerpAPI | Images hébergements</title>
        <meta name="description" content="Saisir la clé SerpAPI pour activer les photos réelles des hébergements." />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href={window.location.origin + "/serp-key"} />
      </Helmet>
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle className="text-xl">Activer les photos réelles (SerpAPI)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Collez votre clé SerpAPI. Elle est stockée uniquement dans votre navigateur (localStorage).
            Une fois enregistrée, revenez sur la page d’accueil ou les hébergements: les images se mettront à jour automatiquement.
          </p>
          <div className="space-y-2">
            <label className="text-sm font-medium" htmlFor="serp-key">Clé SerpAPI</label>
            <Input
              id="serp-key"
              type="password"
              placeholder="Votre clé SerpAPI"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-3">
            <Button onClick={handleSave} className="bg-corsica-azure hover:bg-corsica-azure600">
              Enregistrer
            </Button>
            {status === "saved" && (
              <span className="text-sm text-corsica-emerald">Clé enregistrée. Actualisez la page des hébergements.</span>
            )}
          </div>
          <div className="text-xs text-muted-foreground">
            Astuce: vous pouvez aussi ouvrir cette page avec ?apiKey=VOTRE_CLE pour l’enregistrer automatiquement.
          </div>
        </CardContent>
      </Card>
    </main>
  );
};

export default SerpApiSettingsPage;
