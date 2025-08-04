export interface PostMetadata {
  title: string;
  date: string;
  excerpt: string;
  tags?: string[];
  author?: string;
  published?: boolean;
  cover?: string; // Single cover image
  carousel?: string[]; // Multiple images for carousel
}

export interface Post {
  slug: string;
  metadata: PostMetadata;
  content: string;
}

