
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, FileText, Layers, Menu, X, LogOut } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  // Navigation items
  const navItems = [
    { 
      name: "Tableau de bord", 
      icon: <LayoutDashboard className="w-5 h-5 mr-2" />, 
      path: "/admin" 
    },
    { 
      name: "Articles", 
      icon: <FileText className="w-5 h-5 mr-2" />, 
      path: "/admin/posts" 
    },
    { 
      name: "Catégories", 
      icon: <Layers className="w-5 h-5 mr-2" />, 
      path: "/admin/categories" 
    },
    { 
      name: "Pages", 
      icon: <FileText className="w-5 h-5 mr-2" />, 
      path: "/admin/pages" 
    },
  ];

  // Check if current path matches
  const isActive = (path: string) => {
    if (path === "/admin") {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Navigation pour bureau */}
      <aside className="hidden md:flex flex-col w-64 bg-white shadow-md">
        <div className="p-4 border-b">
          <h1 className="text-xl font-bold text-corsica-blue">Administration</h1>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center px-4 py-3 rounded-md transition-colors ${
                isActive(item.path)
                  ? "bg-corsica-blue text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>
        <div className="p-4 border-t">
          <Link to="/" className="flex items-center text-gray-600 hover:text-black">
            <LogOut className="w-5 h-5 mr-2" />
            <span>Retour au site</span>
          </Link>
        </div>
      </aside>

      {/* Navigation pour mobile */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild className="md:hidden block p-4">
          <Button variant="outline" size="icon">
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 p-0">
          <div className="p-4 border-b flex justify-between items-center">
            <h1 className="text-xl font-bold text-corsica-blue">Administration</h1>
          </div>
          <nav className="flex-1 p-4 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className={`flex items-center px-4 py-3 rounded-md transition-colors ${
                  isActive(item.path)
                    ? "bg-corsica-blue text-white"
                    : "hover:bg-gray-100"
                }`}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>
          <div className="p-4 border-t">
            <Link 
              to="/" 
              className="flex items-center text-gray-600 hover:text-black"
              onClick={() => setOpen(false)}
            >
              <LogOut className="w-5 h-5 mr-2" />
              <span>Retour au site</span>
            </Link>
          </div>
        </SheetContent>
      </Sheet>

      {/* Contenu principal */}
      <main className="flex-1 p-6">
        <div className="md:hidden flex justify-between items-center mb-6">
          <h1 className="text-xl font-bold text-corsica-blue">Administration</h1>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
        </div>
        {children}
      </main>
    </div>
  );
};

export default AdminLayout;
