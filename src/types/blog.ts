
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  author: string;
  authorTitle?: string;  // Optional property
  authorAvatar?: string; // Optional property
  category: string;
}
