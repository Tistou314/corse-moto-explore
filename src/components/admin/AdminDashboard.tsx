
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Layers, Users } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  // Récupération des catégories uniques des articles
  const categories = Array.from(new Set(blogPosts.map(post => post.category)));
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Tableau de bord</h1>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
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
            <CardTitle className="text-sm font-medium">Catégories</CardTitle>
            <Layers className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{categories.length}</div>
            <p className="text-xs text-muted-foreground">
              Catégories disponibles
            </p>
            <Button asChild className="w-full mt-4" size="sm">
              <Link to="/admin/categories">Gérer les catégories</Link>
            </Button>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pages</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">10</div>
            <p className="text-xs text-muted-foreground">
              Pages du site
            </p>
            <Button asChild className="w-full mt-4" size="sm">
              <Link to="/admin/pages">Gérer les pages</Link>
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
                  <Layers className="h-4 w-4 text-amber-700" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">
                    Nouvelle catégorie: Conseils saisonniers
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Il y a 1 semaine
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
