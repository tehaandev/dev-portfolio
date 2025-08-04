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
    url: "https://tehaan.me/blog",
    type: "website",
    images: [
      {
        url: "https://tehaan.me/tp-og-image.jpg",
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
      <div className="container max-w-4xl mx-auto px-4 py-16 h-[80vh]">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Blog</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My thoughts on web development, technology, and the digital world.
          </p>
        </div>
        <Card className="mt-12">
          <CardContent className="flex flex-col items-center justify-center py-16">
            <div className="text-6xl mb-4">
              <Edit2 />
            </div>
            <h2 className="text-2xl font-semibold mb-2">No posts yet</h2>
            <p className="text-muted-foreground text-center">
              {`I'm working on some great content. Check back soon for my latest
              thoughts and insights!`}
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container max-w-6xl mx-auto px-4 py-16">
      <div className="text-center space-y-4 mb-16">
        <h1 className="text-4xl font-bold tracking-tight">Blog</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          My thoughts on web development, technology, and the digital world.
        </p>
      </div>

      <div className="space-y-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block"
          >
            <Card className="transition-all duration-200 hover:shadow-lg hover:scale-[1.01] border-2 hover:border-primary/20 overflow-hidden">
              <CardContent className="p-0">
                <div className="flex flex-col lg:flex-row">
                  {/* Image Section */}
                  {(post.metadata.cover || post.metadata.carousel) && (
                    <div className="relative w-full lg:w-80 h-48 lg:h-auto lg:min-h-[200px] flex-shrink-0">
                      {post.metadata.cover ? (
                        <Image
                          src={post.metadata.cover || "/placeholder.svg"}
                          alt={post.metadata.title}
                          fill
                          className="object-cover transition-transform group-hover:scale-105"
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
                            className="object-cover transition-transform group-hover:scale-105"
                          />
                          {post.metadata.carousel.length > 1 && (
                            <div className="absolute top-3 right-3 bg-black/80 text-white text-xs font-medium py-1 px-2 rounded flex items-center gap-1">
                              <Images className="h-3 w-3" />
                              {post.metadata.carousel.length}
                            </div>
                          )}
                        </>
                      ) : null}
                    </div>
                  )}

                  {/* Content Section */}
                  <div className="flex-1 p-6">
                    <div className="space-y-3">
                      {/* Title */}
                      <h2 className="text-xl lg:text-2xl font-semibold group-hover:text-primary transition-colors line-clamp-2">
                        {post.metadata.title}
                      </h2>

                      {/* Metadata */}
                      <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <time dateTime={post.metadata.date}>
                            {formatDate(post.metadata.date)}
                          </time>
                        </div>

                        {post.metadata.author && (
                          <div className="flex items-center gap-1">
                            <User className="h-3 w-3" />
                            <span>{post.metadata.author}</span>
                          </div>
                        )}

                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>
                            {getReadingTime(post.content || "")} min read
                          </span>
                        </div>
                      </div>

                      {/* Excerpt */}
                      <p className="text-muted-foreground leading-relaxed line-clamp-2 lg:line-clamp-3">
                        {post.metadata.excerpt}
                      </p>

                      {/* Tags */}
                      {post.metadata.tags && post.metadata.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 pt-2">
                          {post.metadata.tags.slice(0, 4).map((tag) => (
                            <Badge
                              key={tag}
                              variant="secondary"
                              className="text-xs"
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
        <p className="text-muted-foreground">
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

