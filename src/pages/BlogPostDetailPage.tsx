
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { blogPosts, BlogPost } from '@/data/blogPosts';
import { useToast } from "@/hooks/use-toast";

// Imports existants
import BlogPostHeader from '@/components/blog/BlogPostHeader';
import BlogPostContent from '@/components/blog/BlogPostContent';
import AuthorCard from '@/components/blog/AuthorCard';
import CommentsSection from '@/components/blog/CommentsSection';
import RelatedPosts from '@/components/blog/RelatedPosts';
import BlogPostNotFound from '@/components/blog/BlogPostNotFound';

// Import pour la carte des stations service
import GasStationsMap from '@/components/blog/GasStationsMap';

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

  // Vérifier si c'est l'article des stations-service
  const isGasStationPost = id === 'stations-service-corse';

  // Log pour le debug
  console.log('BlogPostDetailPage - isGasStationPost:', isGasStationPost);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <BlogPostNotFound />
        <Footer />
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col bg-gray-50"
    >
      <Navbar />
      
      {/* Hero Image & Post Header */}
      <BlogPostHeader post={post} />

      {/* Main Content */}
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white py-12 rounded-t-3xl shadow-xl -mt-10 relative z-10"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-10">
            {/* Article Content */}
            <BlogPostContent 
              post={post} 
              liked={liked} 
              onLike={handleLike} 
              onShare={handleShare} 
            />
            
            {/* Carte des stations service pour l'article spécifique */}
            {isGasStationPost && (
              <div>
                <GasStationsMap />
                <div className="text-center text-sm text-muted-foreground mt-2">
                  Carte interactive des stations-service de Corse
                </div>
              </div>
            )}
            
            {/* Author Info */}
            <AuthorCard author={post.author} />
            
            {/* Comments Section */}
            <CommentsSection />
            
            {/* Related Posts */}
            <RelatedPosts currentPostId={post.id} category={post.category} posts={blogPosts} />
          </div>
        </div>
      </motion.div>

      <Footer />
    </motion.div>
  );
};

export default BlogPostDetailPage;
