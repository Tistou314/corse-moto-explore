
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { blogPosts } from '@/data/blogPosts';
import { BlogPost } from '@/data/blog/types';
import { useToast } from "@/hooks/use-toast";
import SchemaOrg from '@/components/seo/SchemaOrg';

import BlogPostHeader from '@/components/blog/BlogPostHeader';
import BlogPostContent from '@/components/blog/BlogPostContent';
import AuthorCard from '@/components/blog/AuthorCard';
import CommentsSection from '@/components/blog/CommentsSection';
import RelatedPosts from '@/components/blog/RelatedPosts';
import BlogPostNotFound from '@/components/blog/BlogPostNotFound';
import { ArrowLeft } from 'lucide-react';
import { getRelatedPosts } from '@/utils/markdown/internalLinking';

const BlogPostDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [liked, setLiked] = useState(false);
  const { toast } = useToast();
  const [nextPost, setNextPost] = useState<BlogPost | null>(null);
  const [prevPost, setPrevPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    if (slug) {
      const foundPost = blogPosts.find(item => item.id === slug);
      if (foundPost) {
        setPost(foundPost);
        console.log(`Blog post loaded: ${foundPost.title}`);
        
        // Find next and previous posts for navigation
        const currentIndex = blogPosts.findIndex(p => p.id === slug);
        setNextPost(currentIndex > 0 ? blogPosts[currentIndex - 1] : null);
        setPrevPost(currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null);
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
    // Copier l'URL dans le presse-papier
    navigator.clipboard.writeText(window.location.href);
    
    toast({
      title: "Lien copié !",
      description: "Le lien a été copié dans votre presse-papier.",
    });
  };

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Helmet>
          <title>Article Non Trouvé - Blog Moto Corse</title>
          <meta name="description" content="Cet article de blog n'existe pas ou a été supprimé." />
          <meta name="robots" content="noindex, follow" />
        </Helmet>
        
        <Navbar />
        <BlogPostNotFound />
        <Footer />
      </div>
    );
  }

  // Prepare meta tags for article
  const pageTitle = `${post.title} | Blog Moto Corse`;
  const pageDescription = post.excerpt || post.content.substring(0, 155).replace(/<[^>]*>/g, '');

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col bg-gray-50"
    >
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="author" content={post.author.name} />
        <meta property="article:published_time" content={post.date} />
        <meta property="article:author" content={post.author.name} />
      </Helmet>
      
      <SchemaOrg type="article" data={post} />
      
      <Navbar />
      
      <div className="container mx-auto px-4 py-4">
        <Link to="/blog" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-4">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Retour aux articles
        </Link>
      </div>
      
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
            
            <AuthorCard author={post.author} />
            
            {/* Navigation entre articles */}
            <div className="flex flex-col sm:flex-row justify-between gap-4 py-6 border-t border-b">
              {prevPost && (
                <Link to={`/blog/${prevPost.id}`} className="flex-1">
                  <div className="group p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="text-sm text-muted-foreground mb-1">Article précédent</div>
                    <div className="font-medium group-hover:text-corsica-blue transition-colors line-clamp-2">{prevPost.title}</div>
                  </div>
                </Link>
              )}
              
              {nextPost && (
                <Link to={`/blog/${nextPost.id}`} className="flex-1">
                  <div className="group p-4 border rounded-lg hover:bg-gray-50 transition-colors text-right">
                    <div className="text-sm text-muted-foreground mb-1">Article suivant</div>
                    <div className="font-medium group-hover:text-corsica-blue transition-colors line-clamp-2">{nextPost.title}</div>
                  </div>
                </Link>
              )}
            </div>
            
            <CommentsSection />
            
            <RelatedPosts currentPostId={post.id} posts={blogPosts} />
          </div>
        </div>
      </motion.div>

      <Footer />
    </motion.div>
  );
};

export default BlogPostDetailPage;
