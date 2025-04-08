
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
  authorTitle?: string;
  authorAvatar?: string;
  category: string;
  slug?: string;
  readingTime?: string;
  tags?: string[];
}
