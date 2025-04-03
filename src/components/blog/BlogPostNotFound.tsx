
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const BlogPostNotFound = () => {
  return (
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
  );
};

export default BlogPostNotFound;
