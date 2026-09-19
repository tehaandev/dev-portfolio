import { getAllPosts } from "@/lib/posts";
import { ArrowUpRight } from "lucide-react";
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
    <main className="mx-auto min-h-[80vh] max-w-7xl px-6 pt-36 pb-32 md:px-10 md:pt-48">
      <header className="mb-20 grid grid-cols-1 gap-6 md:mb-28 md:grid-cols-12">
        <p className="eyebrow md:col-span-3">
          Journal - {posts.length} {posts.length === 1 ? "entry" : "entries"}
        </p>
        <div className="md:col-span-9">
          <h1 className="font-serif text-6xl leading-[0.95] tracking-tight md:text-8xl">
            Writing
          </h1>
          <p className="text-muted-foreground mt-8 max-w-md text-[0.9375rem] leading-relaxed">
            Notes on web development, technology, and the craft of building
            software that lasts.
          </p>
        </div>
      </header>

      {posts.length === 0 ? (
        <p className="border-border text-muted-foreground border-t pt-8 font-serif text-2xl italic">
          New entries are in progress. Check back soon.
        </p>
      ) : (
        <ol className="border-border border-b">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group border-border grid grid-cols-1 gap-3 border-t py-10 md:grid-cols-12 md:gap-10">
                <div className="eyebrow md:col-span-3">
                  <time dateTime={post.metadata.date}>
                    {formatDate(post.metadata.date)}
                  </time>
                  <span className="mx-2">·</span>
                  {getReadingTime(post.content || "")} min
                </div>
                <div className="md:col-span-8">
                  <h2 className="font-serif text-3xl leading-tight transition-opacity duration-300 group-hover:opacity-70 md:text-4xl">
                    {post.metadata.title}
                  </h2>
                  <p className="text-muted-foreground mt-4 line-clamp-2 max-w-2xl text-[0.9375rem] leading-relaxed">
                    {post.metadata.excerpt}
                  </p>
                  {post.metadata.tags && post.metadata.tags.length > 0 && (
                    <p className="eyebrow mt-5">
                      {post.metadata.tags.slice(0, 4).join(" / ")}
                    </p>
                  )}
                </div>
                <ArrowUpRight
                  className="text-muted-foreground group-hover:text-foreground hidden h-6 w-6 justify-self-end transition-[transform,color] duration-500 ease-(--ease-lux) group-hover:translate-x-1 group-hover:-translate-y-1 md:col-span-1 md:block"
                  strokeWidth={1.25}
                />
              </Link>
            </li>
          ))}
        </ol>
      )}
    </main>
  );
}
