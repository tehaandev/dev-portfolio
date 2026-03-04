import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/lib/posts";
import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, Clock, Images, Edit2 } from "lucide-react";
import SocialIcons from "@/components/ui/social-icons";

export const metadata: Metadata = {
  title: "Blog | Tehaan Perera",
  description:
    "My thoughts on web development, technology, and the digital world.",
  openGraph: {
    title: "Blog | Tehaan Perera",
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
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function getReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}

export default function BlogPage() {
  const posts = getAllPosts();

  if (posts.length === 0) {
    return (
      <div className="container max-w-4xl mx-auto px-4 py-20 min-h-[80vh] flex flex-col">
        <div className="text-center space-y-3 mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Writing
          </p>
          <h1 className="text-4xl font-bold tracking-tight">Blog</h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            My thoughts on web development, technology, and the digital world.
          </p>
          <div className="h-1 w-16 bg-gradient-to-r from-primary to-primary/30 rounded-full mx-auto mt-4" />
        </div>
        <Card className="border-border/60">
          <CardContent className="flex flex-col items-center justify-center py-20">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-5">
              <Edit2 className="h-7 w-7 text-muted-foreground" />
            </div>
            <h2 className="text-xl font-semibold mb-2">No posts yet</h2>
            <p className="text-muted-foreground text-center text-sm max-w-xs">
              {`I'm working on some great content. Check back soon for my latest
              thoughts and insights!`}
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container max-w-6xl mx-auto px-4 py-20">
      <div className="text-center space-y-3 mb-14">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
          Writing
        </p>
        <h1 className="text-4xl font-bold tracking-tight">Blog</h1>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto">
          My thoughts on web development, technology, and the digital world.
        </p>
        <div className="h-1 w-16 bg-gradient-to-r from-primary to-primary/30 rounded-full mx-auto mt-4" />
      </div>

      <div className="space-y-5">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block"
          >
            <Card className="border-border/60 hover:border-primary/30 hover:shadow-md hover:shadow-primary/5 transition-all duration-300 overflow-hidden">
              <CardContent className="p-0">
                <div className="flex flex-col lg:flex-row">
                  {/* Image */}
                  {(post.metadata.cover || post.metadata.carousel) && (
                    <div className="relative w-full lg:w-72 h-48 lg:h-auto lg:min-h-[200px] flex-shrink-0 overflow-hidden">
                      {post.metadata.cover ? (
                        <Image
                          src={post.metadata.cover || "/placeholder.svg"}
                          alt={post.metadata.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : post.metadata.carousel &&
                        post.metadata.carousel.length > 0 ? (
                        <>
                          <Image
                            src={
                              post.metadata.carousel[0] || "/placeholder.svg"
                            }
                            alt={post.metadata.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          {post.metadata.carousel.length > 1 && (
                            <div className="absolute top-3 right-3 bg-foreground/85 text-background text-xs font-medium py-1 px-2.5 rounded-full flex items-center gap-1">
                              <Images className="h-3 w-3" />
                              {post.metadata.carousel.length}
                            </div>
                          )}
                        </>
                      ) : null}
                    </div>
                  )}

                  {/* Content */}
                  <div className="flex-1 p-6">
                    <div className="space-y-3">
                      {/* Title */}
                      <h2 className="text-xl lg:text-2xl font-bold group-hover:text-primary transition-colors duration-200 line-clamp-2 leading-snug">
                        {post.metadata.title}
                      </h2>

                      {/* Metadata */}
                      <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="h-3.5 w-3.5" />
                          <time dateTime={post.metadata.date}>
                            {formatDate(post.metadata.date)}
                          </time>
                        </div>

                        {post.metadata.author && (
                          <div className="flex items-center gap-1.5">
                            <User className="h-3.5 w-3.5" />
                            <span>{post.metadata.author}</span>
                          </div>
                        )}

                        <div className="flex items-center gap-1.5">
                          <Clock className="h-3.5 w-3.5" />
                          <span>
                            {getReadingTime(post.content || "")} min read
                          </span>
                        </div>
                      </div>

                      {/* Excerpt */}
                      <p className="text-muted-foreground leading-relaxed line-clamp-2 lg:line-clamp-3 text-sm">
                        {post.metadata.excerpt}
                      </p>

                      {/* Tags */}
                      {post.metadata.tags && post.metadata.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {post.metadata.tags.slice(0, 4).map((tag) => (
                            <Badge
                              key={tag}
                              variant="secondary"
                              className="text-xs font-medium bg-muted/80 hover:bg-primary/10 hover:text-primary transition-colors"
                            >
                              {tag}
                            </Badge>
                          ))}
                          {post.metadata.tags.length > 4 && (
                            <Badge variant="outline" className="text-xs">
                              +{post.metadata.tags.length - 4} more
                            </Badge>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <div className="mt-16 text-center">
        <p className="text-muted-foreground text-sm">
          Want to stay updated? Follow me on social media for the latest posts
          and insights.
        </p>
        <div className="mt-4 mx-auto flex items-center justify-center gap-4">
          <SocialIcons className="flex items-center gap-4" />
        </div>
      </div>
    </div>
  );
}
