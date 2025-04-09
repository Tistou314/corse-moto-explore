
import { BlogPost } from '@/data/blog/types';
import { defaultSiteData } from './common';

export const generateBlogSchema = (post: BlogPost, url: string) => {
  if (!post) return null;
  
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    "headline": post.title,
    "description": post.excerpt,
    "image": post.imageUrl,
    "datePublished": post.date,
    "author": {
      "@type": "Person",
      "name": post.author.name
    },
    "publisher": {
      "@type": "Organization",
      "name": defaultSiteData.name,
      "logo": {
        "@type": "ImageObject",
        "url": defaultSiteData.logo
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    },
    "keywords": post.tags?.join(", "),
    "articleSection": post.category
  };
  
  return JSON.stringify(blogSchema);
};
