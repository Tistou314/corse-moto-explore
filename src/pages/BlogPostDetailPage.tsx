
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { blogPosts } from '@/data/blogPosts';
import { BlogPost } from '@/data/blog/types';
import { useToast } from "@/hooks/use-toast";

import BlogPostHeader from '@/components/blog/BlogPostHeader';
import BlogPostContent from '@/components/blog/BlogPostContent';
import AuthorCard from '@/components/blog/AuthorCard';
import CommentsSection from '@/components/blog/CommentsSection';
import RelatedPosts from '@/components/blog/RelatedPosts';
import BlogPostNotFound from '@/components/blog/BlogPostNotFound';
import { Link } from 'react-router-dom';

const BlogPostDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [liked, setLiked] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (slug) {
      const foundPost = blogPosts.find(item => item.id === slug);
      if (foundPost) {
        setPost(foundPost);
        console.log(`Blog post loaded: ${foundPost.title}`);
      } else {
        console.error(`Blog post with id ${slug} not found`);
      }
    }
    
    window.scrollTo(0, 0);
  }, [slug]);
  
  const handleLike = () => {
    setLiked(!liked);
    toast({
      title: liked ? "J'aime retiré" : "Article ajouté à vos favoris",
      description: liked ? "Vous n'aimez plus cet article" : "Merci d'avoir aimé cet article !",
    });
  };

  const handleShare = () => {
    toast({
      title: "Lien copié !",
      description: "Le lien a été copié dans votre presse-papier.",
    });
  };

  // L'article sur les stations service est uniquement accessible via /blog/stations-service-corse
  const isGasStationPost = slug === 'stations-service-corse';

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
      
      <BlogPostHeader post={post} />

      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white py-12 rounded-t-3xl shadow-xl -mt-10 relative z-10"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-10">
            <BlogPostContent 
              post={post} 
              liked={liked} 
              onLike={handleLike} 
              onShare={handleShare} 
            />
            
            {isGasStationPost && (
              <div className="my-12 border-t border-b border-gray-100 py-8">
                <h2 className="text-2xl font-bold mb-6">Stations-service en Corse</h2>
                <p className="mb-4">Consultez notre liste complète des stations-service par région pour planifier vos ravitaillements pendant votre voyage à moto en Corse.</p>
                <Link 
                  to="/gas-stations" 
                  className="inline-flex items-center px-4 py-2 bg-corsica-blue text-white rounded-md hover:bg-corsica-blue/90 transition-colors"
                >
                  Voir les stations-service
                </Link>
              </div>
            )}
            
            <AuthorCard author={post.author} />
            
            <CommentsSection />
            
            <RelatedPosts currentPostId={post.id} category={post.category} posts={blogPosts} />
          </div>
        </div>
      </motion.div>

      <Footer />
    </motion.div>
  );
};

export default BlogPostDetailPage;
