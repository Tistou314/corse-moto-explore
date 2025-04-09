import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import BlogPostCard from '@/components/BlogPostCard';
import { blogPosts } from '@/data/blogPosts';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Filter, X } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { Fuel } from 'lucide-react';

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [showCategoryMenu, setShowCategoryMenu] = useState(false);

  const categories = Array.from(new Set(blogPosts.map(post => post.category))).sort();

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === '' || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const sortedPosts = [...filteredPosts].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  const getCategoryColor = (category: string) => {
    switch(category) {
      case 'Itinéraires et circuits':
        return 'bg-amber-500 hover:bg-amber-600';
      case 'Aspects pratiques':
        return 'bg-sky-500 hover:bg-sky-600';
      case 'Culture et découverte':
        return 'bg-emerald-500 hover:bg-emerald-600';
      case 'Équipement et préparation':
        return 'bg-rose-500 hover:bg-rose-600';
      case 'Expériences et récits':
        return 'bg-violet-500 hover:bg-violet-600';
      case 'Conseils saisonniers':
        return 'bg-orange-500 hover:bg-orange-600';
      case 'Aspects techniques':
        return 'bg-blue-500 hover:bg-blue-600';
      case 'Ressources locales':
        return 'bg-green-500 hover:bg-green-600';
      default:
        return 'bg-corsica-blue hover:bg-corsica-blue/90';
    }
  };

  useEffect(() => {
    const handleClickOutside = () => {
      setShowCategoryMenu(false);
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <Hero 
        title="Blog & Expériences"
        subtitle="Conseils, récits et expériences pour enrichir votre aventure à moto en Corse."
        imagePath="https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&q=80"
      />

      <section className="bg-muted py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link to="/blog/stations-service-corse" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow flex items-center">
              <Fuel className="w-8 h-8 mr-4 text-corsica-blue" />
              <div>
                <h3 className="text-lg font-semibold">Stations-service en Corse</h3>
                <p className="text-muted-foreground text-sm">Guide complet des stations pour motards</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-8 bg-white sticky top-16 z-10 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Rechercher un article..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="w-full md:w-auto relative">
              <Button
                variant="outline"
                className="w-full flex justify-between items-center"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowCategoryMenu(!showCategoryMenu);
                }}
              >
                {selectedCategory || 'Toutes les catégories'}
                <Filter className="ml-2 h-4 w-4" />
              </Button>
              
              {showCategoryMenu && (
                <div className="absolute z-50 mt-2 w-full md:w-64 bg-white rounded-md shadow-lg overflow-y-auto max-h-80">
                  <div className="py-1">
                    <button
                      className="w-full text-left px-4 py-2 text-sm hover:bg-muted"
                      onClick={() => {
                        setSelectedCategory('');
                        setShowCategoryMenu(false);
                      }}
                    >
                      Toutes les catégories
                    </button>
                    {categories.map(category => (
                      <button
                        key={category}
                        className="w-full text-left px-4 py-2 text-sm hover:bg-muted flex items-center justify-between"
                        onClick={() => {
                          setSelectedCategory(category);
                          setShowCategoryMenu(false);
                        }}
                      >
                        {category}
                        {category === selectedCategory && (
                          <span className="text-primary">✓</span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            {(searchTerm || selectedCategory) && (
              <Button
                variant="ghost"
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('');
                }}
                className="w-full md:w-auto"
              >
                <X className="mr-2 h-4 w-4" />
                Réinitialiser les filtres
              </Button>
            )}
          </div>
          
          <div className="mt-4 flex flex-wrap gap-2">
            {categories.map(category => (
              <Badge
                key={category}
                className={`cursor-pointer ${
                  selectedCategory === category 
                    ? getCategoryColor(category)
                    : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
                } text-white`}
                onClick={() => setSelectedCategory(category === selectedCategory ? '' : category)}
              >
                {category}
                {selectedCategory === category && (
                  <X className="ml-1 h-3 w-3" onClick={(e) => {
                    e.stopPropagation();
                    setSelectedCategory('');
                  }} />
                )}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-muted flex-grow">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-2xl font-bold">
              {sortedPosts.length} 
              {sortedPosts.length === 1 ? ' article trouvé' : ' articles trouvés'}
              {selectedCategory && ` dans "${selectedCategory}"`}
            </h2>
          </div>
          
          {sortedPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedPosts.map((post) => (
                <BlogPostCard 
                  key={post.id}
                  id={post.id}
                  title={post.title}
                  excerpt={post.excerpt}
                  image={post.imageUrl}
                  date={post.date}
                  author={post.author.name}
                  category={post.category}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-medium mb-2">Aucun article trouvé</h3>
              <p className="text-muted-foreground mb-4">
                Essayez d'ajuster vos critères de recherche ou de sélectionner une autre catégorie.
              </p>
              <Button 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('');
                }}
              >
                Afficher tous les articles
              </Button>
            </div>
          )}
        </div>
      </section>

      <section className="py-12 bg-corsica-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-3">Abonnez-vous à notre newsletter</h2>
            <p className="mb-6">
              Recevez nos derniers articles, conseils et itinéraires directement dans votre boîte mail.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Input 
                type="email" 
                placeholder="Votre adresse email" 
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <Button className="bg-white text-corsica-blue hover:bg-white/90">
                S'abonner
              </Button>
            </div>
            <p className="text-sm mt-3 text-white/80">
              Nous respectons votre vie privée et ne partageons jamais vos informations.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPage;
