
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { blogPosts, BlogPost } from '@/data/blogPosts';
import { useToast } from "@/hooks/use-toast";

// Import the components we created
import BlogPostHeader from '@/components/blog/BlogPostHeader';
import BlogPostContent from '@/components/blog/BlogPostContent';
import AuthorCard from '@/components/blog/AuthorCard';
import CommentsSection from '@/components/blog/CommentsSection';
import RelatedPosts from '@/components/blog/RelatedPosts';
import BlogPostNotFound from '@/components/blog/BlogPostNotFound';

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
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Image & Post Header */}
      <BlogPostHeader post={post} />

      {/* Main Content */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Article Content */}
            <BlogPostContent 
              post={post} 
              liked={liked} 
              onLike={handleLike} 
              onShare={handleShare} 
            />
            
            {/* Author Info */}
            <AuthorCard author={post.author} />
            
            {/* Comments Section */}
            <CommentsSection />
            
            {/* Related Posts */}
            <RelatedPosts currentPostId={post.id} category={post.category} posts={blogPosts} />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPostDetailPage;
