
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { FileX, ArrowLeft } from 'lucide-react';

const BlogPostNotFound = () => {
  return (
    <div className="flex-grow flex items-center justify-center bg-gray-50 py-12">
      <div className="text-center p-8 max-w-md">
        <div className="bg-muted w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
          <FileX className="h-10 w-10 text-corsica-red" />
        </div>
        <h1 className="text-3xl font-bold mb-4">Article non trouvé</h1>
        <p className="text-muted-foreground mb-8">
          L'article que vous recherchez n'existe pas ou a été supprimé. 
          Explorez d'autres articles sur notre blog.
        </p>
        <Link to="/blog">
          <Button className="rounded-full px-6 flex items-center mx-auto">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour au blog
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default BlogPostNotFound;
