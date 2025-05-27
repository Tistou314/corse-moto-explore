
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Layers, Users, Droplet, Hotel, Map } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { capCorseStations } from "@/data/gas-stations";
import { strategicGasStations } from "@/data/gas-stations/strategic";
import { allRegionalStations } from "@/data/gas-stations/regions";
import { accommodations } from "@/data/accommodations";
import { itineraries } from "@/data/itineraries";

const AdminDashboard = () => {
  // Récupération des catégories uniques des articles
  const categories = Array.from(new Set(blogPosts.map(post => post.category)));
  
  // Count all gas stations
  const gasStationsCount = [
    ...capCorseStations, 
    ...strategicGasStations, 
    ...allRegionalStations
  ].length;
  
  // Count all accommodations
  const accommodationsCount = accommodations.length;
  
  // Count all itineraries
  const itinerariesCount = itineraries.length;
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Tableau de bord</h1>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-corsica-azure text-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-white">Articles</CardTitle>
            <FileText className="h-4 w-4 text-white" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">{blogPosts.length}</div>
            <p className="text-xs text-corsica-azure100">
              Articles publiés
            </p>
            <Button asChild className="w-full mt-4 bg-white text-corsica-azure hover:bg-corsica-azure50" size="sm">
              <Link to="/admin/posts">Gérer les articles</Link>
            </Button>
          </CardContent>
        </Card>
        
        <Card className="bg-corsica-emerald text-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-white">Hébergements</CardTitle>
            <Hotel className="h-4 w-4 text-white" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">{accommodationsCount}</div>
            <p className="text-xs text-corsica-emerald100">
              Hébergements disponibles
            </p>
            <Button asChild className="w-full mt-4 bg-white text-corsica-emerald hover:bg-corsica-emerald50" size="sm">
              <Link to="/admin/accommodations">Gérer les hébergements</Link>
            </Button>
          </CardContent>
        </Card>
        
        <Card className="bg-corsica-coral text-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-white">Itinéraires</CardTitle>
            <Map className="h-4 w-4 text-white" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">{itinerariesCount}</div>
            <p className="text-xs text-orange-100">
              Itinéraires proposés
            </p>
            <Button asChild className="w-full mt-4 bg-white text-corsica-coral hover:bg-orange-50" size="sm">
              <Link to="/admin/itineraries">Gérer les itinéraires</Link>
            </Button>
          </CardContent>
        </Card>
        
        <Card className="bg-corsica-slate text-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-white">Stations-service</CardTitle>
            <Droplet className="h-4 w-4 text-white" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">{gasStationsCount}</div>
            <p className="text-xs text-slate-200">
              Stations-service référencées
            </p>
            <Button asChild className="w-full mt-4 bg-white text-corsica-slate hover:bg-slate-50" size="sm">
              <Link to="/admin/gas-stations">Gérer les stations</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="col-span-2 bg-white">
          <CardHeader className="bg-corsica-azure text-white">
            <CardTitle className="text-white">Activité récente</CardTitle>
            <CardDescription className="text-corsica-azure100">
              Dernières modifications sur le site
            </CardDescription>
          </CardHeader>
          <CardContent className="bg-white">
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="mr-4 bg-corsica-azure100 p-2 rounded-full">
                  <FileText className="h-4 w-4 text-corsica-azure" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none text-black">
                    Article modifié: Circuit Cap Corse
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Il y a 2 jours
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="mr-4 bg-corsica-emerald100 p-2 rounded-full">
                  <FileText className="h-4 w-4 text-corsica-emerald" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none text-black">
                    Nouvel article: Préparation de moto pour la Corse
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Il y a 5 jours
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="mr-4 bg-corsica-azure/20 p-2 rounded-full">
                  <Droplet className="h-4 w-4 text-corsica-azure" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none text-black">
                    Nouvelle station: Station du Col de Bavella
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Il y a 3 jours
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
