
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  date: string;
  author: {
    name: string;
    avatar?: string;
    bio?: string;
  };
  category: string;
  slug: string; // Changed from optional to required
  readingTime?: string;
  tags?: string[];
  authorTitle?: string;
  authorAvatar?: string;
}
