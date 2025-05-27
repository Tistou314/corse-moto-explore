
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const BackToBlogs = () => {
  return (
    <div className="mt-10 text-center">
      <Link to="/blog">
        <Button className="bg-corsica-azure hover:bg-corsica-azure/90 text-white">
          <ArrowLeft className="w-4 h-4 mr-2" /> Retour aux articles du blog
        </Button>
      </Link>
    </div>
  );
};

export default BackToBlogs;
