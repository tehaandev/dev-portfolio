import { getAllPosts } from "@/lib/posts";
import { ChevronRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Writing | Tehaan Perera",
  description:
    "My thoughts on web development, technology, and the digital world.",
  openGraph: {
    title: "Writing | Tehaan Perera",
    description:
      "Explore my latest blog posts on software development and technology.",
    url: "https://www.tehaan.dev/blog",
    type: "website",
    images: [
      {
        url: "https://www.tehaan.dev/tp-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tehaan Perera - Blog",
      },
    ],
  },
};

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function getReadingTime(content: string): number {
  return Math.ceil(content.split(/\s+/).length / 200);
}

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="mx-auto min-h-[80vh] max-w-4xl px-5 pt-32 pb-28 md:px-8 md:pt-40">
      <header className="mb-12 md:mb-16">
        <p className="eyebrow">Journal</p>
        <h1 className="mt-3 text-5xl leading-[1.05] font-semibold tracking-[-0.035em] md:text-7xl">
          Writing
        </h1>
        <p className="text-muted-foreground mt-5 max-w-md text-lg leading-relaxed">
          Notes on web development, technology, and the craft of building
          software that lasts.
        </p>
      </header>

      {posts.length === 0 ? (
        <p className="surface text-muted-foreground p-8 text-center text-lg">
          New entries are in progress. Check back soon.
        </p>
      ) : (
        <ol className="surface overflow-hidden">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group after:bg-border hover:bg-secondary/50 active:bg-secondary relative flex items-center gap-6 px-6 py-7 transition-colors after:absolute after:inset-x-6 after:bottom-0 after:h-px md:px-8 md:after:inset-x-8 [li:last-child_&]:after:hidden">
                <div className="min-w-0 flex-1">
                  <p className="text-muted-foreground text-sm">
                    <time dateTime={post.metadata.date}>
                      {formatDate(post.metadata.date)}
                    </time>
                    <span className="mx-1.5">·</span>
                    {getReadingTime(post.content || "")} min read
                  </p>
                  <h2 className="mt-1.5 text-2xl font-semibold tracking-[-0.022em] md:text-[1.75rem]">
                    {post.metadata.title}
                  </h2>
                  <p className="text-muted-foreground mt-2 line-clamp-2 max-w-2xl text-[0.9375rem] leading-relaxed">
                    {post.metadata.excerpt}
                  </p>
                  {post.metadata.tags && post.metadata.tags.length > 0 && (
                    <ul className="mt-4 flex flex-wrap gap-1.5">
                      {post.metadata.tags.slice(0, 4).map((tag) => (
                        <li
                          key={tag}
                          className="bg-secondary text-muted-foreground rounded-full px-2.5 py-0.5 text-xs font-medium">
                          {tag}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <ChevronRight className="text-muted-foreground/60 group-hover:text-foreground h-5 w-5 shrink-0 transition-[translate,color] duration-300 ease-(--ease-spring) group-hover:translate-x-0.5" />
              </Link>
            </li>
          ))}
        </ol>
      )}
    </main>
  );
}
