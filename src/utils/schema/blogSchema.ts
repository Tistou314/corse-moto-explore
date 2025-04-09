
import { BlogPost } from '@/types/blog';
import { defaultSiteData } from './common';

export const generateBlogSchema = (url: string) => {
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${url}#blog`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    },
    "headline": "Blog Corse Moto Explore - Conseils et récits de voyage moto en Corse",
    "description": "Découvrez nos articles sur les itinéraires moto en Corse, conseils de préparation, et récits d'expériences à deux roues sur l'Île de Beauté.",
    "publisher": {
      "@type": "Organization",
      "@id": `${defaultSiteData.url}#organization`,
      "name": defaultSiteData.name,
      "logo": {
        "@type": "ImageObject",
        "url": defaultSiteData.logo
      }
    }
  };
  return JSON.stringify(blogSchema);
};

export const generateBlogPostSchema = (blogPost: BlogPost, url: string) => {
  if (!blogPost) return null;

  const blogPostSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#blogpost`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    },
    "headline": blogPost.title,
    "description": blogPost.excerpt,
    "image": blogPost.imageUrl,
    "datePublished": blogPost.date,
    "dateModified": blogPost.date, // Using the same date as publication for now
    "author": {
      "@type": "Person",
      "name": blogPost.author.name
    },
    "publisher": {
      "@type": "Organization",
      "@id": `${defaultSiteData.url}#organization`,
      "name": defaultSiteData.name,
      "logo": {
        "@type": "ImageObject",
        "url": defaultSiteData.logo
      }
    }
  };
  return JSON.stringify(blogPostSchema);
};
