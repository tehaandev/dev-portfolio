import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import remarkGfm from "remark-gfm";
import { Post, PostMetadata } from "@/types/blog";
import { cache } from "react";

const postsDirectory = path.join(process.cwd(), "_posts");

// Cache the file system operations
export const getAllPosts = cache((): Post[] => {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      // Validate required fields
      if (!data.title || !data.date || !data.excerpt) {
        throw new Error(`Missing required frontmatter in ${fileName}`);
      }

      return {
        slug,
        metadata: {
          title: data.title,
          date: data.date,
          excerpt: data.excerpt,
          tags: data.tags || [],
          author: data.author,
          published: data.published !== false, // default to true
          cover: data.cover,
          carousel: data.carousel,
        } as PostMetadata,
        content,
      };
    })
    .filter((post) => {
      const onlyPublished = process.env.NODE_ENV !== "development";
      if (onlyPublished) {
        return post.metadata.published !== false; // Only include published posts
      }
      return true; // Include all posts in development mode
    }) // Only include published posts
    .sort((a, b) =>
      new Date(a.metadata.date) > new Date(b.metadata.date) ? -1 : 1
    );

  return allPostsData;
});

export const getPostBySlug = cache(
  async (slug: string): Promise<Post | null> => {
    try {
      const fullPath = path.join(postsDirectory, `${slug}.md`);

      if (!fs.existsSync(fullPath)) {
        return null;
      }

      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      // Process markdown to HTML
      const processedContent = await remark()
        .use(remarkGfm)
        .use(html, { sanitize: false })
        .process(content);

      const contentHtml = processedContent.toString();

      return {
        slug,
        metadata: {
          title: data.title,
          date: data.date,
          excerpt: data.excerpt,
          tags: data.tags || [],
          author: data.author,
          published: data.published !== false,
          cover: data.cover,
          carousel: data.carousel,
        } as PostMetadata,
        content: contentHtml,
      };
    } catch (error) {
      console.error(`Error reading post ${slug}:`, error);
      return null;
    }
  }
);

export const getAllPostSlugs = cache((): string[] => {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => fileName.replace(/\.md$/, ""));
});

export const getPostsByTag = cache((tag: string): Post[] => {
  const allPosts = getAllPosts();
  return allPosts.filter((post) =>
    post.metadata.tags?.some(
      (postTag) => postTag.toLowerCase() === tag.toLowerCase()
    )
  );
});

