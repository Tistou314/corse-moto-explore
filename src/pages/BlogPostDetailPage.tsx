
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { blogPosts, BlogPost } from '@/data/blogPosts';
import { ChevronLeft, Calendar, User, Tag, Share2, Heart, MessageCircle } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const BlogPostDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [liked, setLiked] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (id) {
      const foundPost = blogPosts.find(item => item.id === id);
      if (foundPost) {
        setPost(foundPost);
      }
      // If not found, we will show a not found message
    }
  }, [id]);

  const handleLike = () => {
    setLiked(!liked);
    toast({
      title: liked ? "J'aime retiré" : "Article ajouté à vos favoris",
      description: liked ? "Vous n'aimez plus cet article" : "Merci d'avoir aimé cet article !",
    });
  };

  const handleShare = () => {
    // In a real app, this would open a share dialog
    toast({
      title: "Lien copié !",
      description: "Le lien a été copié dans votre presse-papier.",
    });
  };

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center bg-muted">
          <div className="text-center p-8">
            <h1 className="text-3xl font-bold mb-4">Article non trouvé</h1>
            <p className="text-muted-foreground mb-6">
              L'article que vous recherchez n'existe pas ou a été supprimé.
            </p>
            <Link to="/blog">
              <Button>Retour au blog</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Format the content (convert markdown to proper HTML with styling)
  const formatContent = (content: string) => {
    // First, split the content into lines for processing
    let lines = content.split('\n');
    let formattedContent = '';
    let inList = false;
    let inParagraph = false;
    
    // Process each line
    for (let i = 0; i < lines.length; i++) {
      let line = lines[i].trim();
      
      // Skip empty lines but close current paragraph
      if (line === '') {
        if (inParagraph) {
          formattedContent += '</p>\n';
          inParagraph = false;
        }
        continue;
      }
      
      // Process headers
      if (line.startsWith('# ')) {
        if (inParagraph) {
          formattedContent += '</p>\n';
          inParagraph = false;
        }
        if (inList) {
          formattedContent += '</ul>\n';
          inList = false;
        }
        formattedContent += `<h1 class="text-3xl font-bold my-6">${line.substring(2)}</h1>\n`;
      } 
      else if (line.startsWith('## ')) {
        if (inParagraph) {
          formattedContent += '</p>\n';
          inParagraph = false;
        }
        if (inList) {
          formattedContent += '</ul>\n';
          inList = false;
        }
        formattedContent += `<h2 class="text-2xl font-bold my-5">${line.substring(3)}</h2>\n`;
      } 
      else if (line.startsWith('### ')) {
        if (inParagraph) {
          formattedContent += '</p>\n';
          inParagraph = false;
        }
        if (inList) {
          formattedContent += '</ul>\n';
          inList = false;
        }
        formattedContent += `<h3 class="text-xl font-bold my-4">${line.substring(4)}</h3>\n`;
      } 
      else if (line.startsWith('#### ')) {
        if (inParagraph) {
          formattedContent += '</p>\n';
          inParagraph = false;
        }
        if (inList) {
          formattedContent += '</ul>\n';
          inList = false;
        }
        formattedContent += `<h4 class="text-lg font-bold my-3">${line.substring(5)}</h4>\n`;
      } 
      // Process list items
      else if (line.startsWith('* ') || line.startsWith('- ')) {
        if (inParagraph) {
          formattedContent += '</p>\n';
          inParagraph = false;
        }
        if (!inList) {
          formattedContent += '<ul class="my-4">\n';
          inList = true;
        }
        formattedContent += `<li class="ml-6 list-disc my-1">${line.substring(2)}</li>\n`;
      } 
      // Regular paragraph text
      else {
        if (inList) {
          formattedContent += '</ul>\n';
          inList = false;
        }
        
        // Format bold and italic text
        let formattedLine = line
          .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
          .replace(/__(.*?)__/g, '<strong>$1</strong>')
          .replace(/\*(.*?)\*/g, '<em>$1</em>')
          .replace(/_(.*?)_/g, '<em>$1</em>');
          
        if (!inParagraph) {
          formattedContent += `<p class="my-4 text-base leading-relaxed">`;
          inParagraph = true;
        } else {
          formattedContent += ' '; // Add space between lines in the same paragraph
        }
        
        formattedContent += formattedLine;
      }
    }
    
    // Close any open tags
    if (inParagraph) {
      formattedContent += '</p>\n';
    }
    if (inList) {
      formattedContent += '</ul>\n';
    }
    
    return formattedContent;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Image */}
      <div 
        className="h-[40vh] md:h-[50vh] relative bg-cover bg-center"
        style={{ backgroundImage: `url(${post.image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12">
          <div className="container mx-auto">
            <Link to="/blog" className="inline-flex items-center text-white mb-4 hover:underline">
              <ChevronLeft className="w-4 h-4 mr-1" />
              Retour au blog
            </Link>
            <span className="inline-block bg-corsica-blue text-white text-sm px-3 py-1 rounded-full mb-3">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-white/90">
              <span className="inline-flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                {post.date}
              </span>
              <span className="inline-flex items-center">
                <User className="w-4 h-4 mr-1" />
                {post.author}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Article Content */}
            <div className="bg-white rounded-lg shadow-sm p-6 md:p-8 mb-8">
              <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-corsica-blue" 
                   dangerouslySetInnerHTML={{ __html: formatContent(post.content) }} />
              
              <div className="mt-8 pt-6 border-t flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className={`flex items-center ${liked ? 'text-corsica-red' : ''}`}
                    onClick={handleLike}
                  >
                    <Heart className={`w-5 h-5 mr-1 ${liked ? 'fill-corsica-red' : ''}`} />
                    <span>{liked ? 'Aimé' : 'J\'aime'}</span>
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="flex items-center"
                    onClick={handleShare}
                  >
                    <Share2 className="w-5 h-5 mr-1" />
                    <span>Partager</span>
                  </Button>
                </div>
                <div className="flex items-center">
                  <Tag className="w-5 h-5 mr-2 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{post.category}</span>
                </div>
              </div>
            </div>
            
            {/* Author Info */}
            <div className="bg-white rounded-lg shadow-sm p-6 md:p-8 mb-8">
              <h2 className="text-xl font-bold mb-4">À propos de l'auteur</h2>
              <div className="flex items-start space-x-4">
                <div className="bg-muted rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
                  <User className="w-8 h-8 text-muted-foreground" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{post.author}</h3>
                  <p className="text-muted-foreground">
                    Passionné de moto et de la Corse, {post.author} partage son expertise et ses expériences 
                    à travers des articles détaillés et informatifs.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Comments Section */}
            <div className="bg-white rounded-lg shadow-sm p-6 md:p-8 mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold">Commentaires</h2>
                <Button variant="outline" size="sm" className="flex items-center">
                  <MessageCircle className="w-4 h-4 mr-1" />
                  <span>Laisser un commentaire</span>
                </Button>
              </div>
              
              <div className="text-center py-8">
                <MessageCircle className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
                <h3 className="text-lg font-medium mb-2">Aucun commentaire pour l'instant</h3>
                <p className="text-muted-foreground mb-4">
                  Soyez le premier à partager votre avis sur cet article !
                </p>
              </div>
            </div>
            
            {/* Related Posts */}
            <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
              <h2 className="text-xl font-bold mb-6">Articles similaires</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogPosts
                  .filter(item => item.id !== post.id && item.category === post.category)
                  .slice(0, 3)
                  .map(relatedPost => (
                    <Link 
                      key={relatedPost.id} 
                      to={`/blog/${relatedPost.id}`}
                      className="group"
                    >
                      <div className="h-40 rounded-lg overflow-hidden mb-3">
                        <img 
                          src={relatedPost.image} 
                          alt={relatedPost.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <h3 className="font-bold group-hover:text-corsica-blue transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPostDetailPage;
