
import BlogPostCard from '@/components/BlogPostCard';
import { Button } from '@/components/ui/button';
import { BlogPost } from '@/data/blog/types';

interface BlogPostsListProps {
  posts: BlogPost[];
  searchTerm: string;
  selectedCategory: string;
}

const BlogPostsList = ({ posts, searchTerm, selectedCategory }: BlogPostsListProps) => {
  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === '' || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const sortedPosts = [...filteredPosts].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  // Filter out any potential duplicates by id
  const uniquePosts = sortedPosts.filter(
    (post, index, self) => index === self.findIndex((p) => p.id === post.id)
  );

  return (
    <>
      <div className="mb-8">
        <h2 className="text-2xl font-bold">
          {uniquePosts.length} 
          {uniquePosts.length === 1 ? ' article trouvé' : ' articles trouvés'}
          {selectedCategory && ` dans "${selectedCategory}"`}
        </h2>
      </div>
      
      {uniquePosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {uniquePosts.map((post) => (
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
              window.location.href = '/blog';
            }}
          >
            Afficher tous les articles
          </Button>
        </div>
      )}
    </>
  );
};

export default BlogPostsList;
