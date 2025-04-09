
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Layers, Users, Droplet, Hotel, Map } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { capCorseStations } from "@/data/gas-stations";
import { strategicStations } from "@/data/gas-stations/strategic";
import { allRegionalStations } from "@/data/gas-stations/regions";
import { accommodations } from "@/data/accommodations";
import { itineraries } from "@/data/itineraries";

const AdminDashboard = () => {
  // Récupération des catégories uniques des articles
  const categories = Array.from(new Set(blogPosts.map(post => post.category)));
  
  // Count all gas stations
  const gasStationsCount = [
    ...capCorseStations, 
    ...strategicStations, 
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
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Articles</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{blogPosts.length}</div>
            <p className="text-xs text-muted-foreground">
              Articles publiés
            </p>
            <Button asChild className="w-full mt-4" size="sm">
              <Link to="/admin/posts">Gérer les articles</Link>
            </Button>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Hébergements</CardTitle>
            <Hotel className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{accommodationsCount}</div>
            <p className="text-xs text-muted-foreground">
              Hébergements disponibles
            </p>
            <Button asChild className="w-full mt-4" size="sm">
              <Link to="/admin/accommodations">Gérer les hébergements</Link>
            </Button>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Itinéraires</CardTitle>
            <Map className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{itinerariesCount}</div>
            <p className="text-xs text-muted-foreground">
              Itinéraires proposés
            </p>
            <Button asChild className="w-full mt-4" size="sm">
              <Link to="/admin/itineraries">Gérer les itinéraires</Link>
            </Button>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Stations-service</CardTitle>
            <Droplet className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{gasStationsCount}</div>
            <p className="text-xs text-muted-foreground">
              Stations-service référencées
            </p>
            <Button asChild className="w-full mt-4" size="sm">
              <Link to="/admin/gas-stations">Gérer les stations</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Activité récente</CardTitle>
            <CardDescription>
              Dernières modifications sur le site
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="mr-4 bg-blue-100 p-2 rounded-full">
                  <FileText className="h-4 w-4 text-blue-700" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">
                    Article modifié: Circuit Cap Corse
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Il y a 2 jours
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="mr-4 bg-green-100 p-2 rounded-full">
                  <FileText className="h-4 w-4 text-green-700" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">
                    Nouvel article: Préparation de moto pour la Corse
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Il y a 5 jours
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="mr-4 bg-amber-100 p-2 rounded-full">
                  <Droplet className="h-4 w-4 text-amber-700" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">
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
