import { getPostBySlug, getAllPostSlugs } from "@/lib/posts";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowLeft, Calendar, User, Clock, Share2 } from "lucide-react";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params).slug;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.metadata.title,
    description: post.metadata.excerpt,
    openGraph: {
      title: post.metadata.title,
      description: post.metadata.excerpt,
      url: `https://tehaan.me/blog/${slug}`,
      type: "article",
      publishedTime: new Date(post.metadata.date).toISOString(),
      authors: post.metadata.author ? [post.metadata.author] : undefined,
      tags: post.metadata.tags,
      images: post.metadata.cover
        ? [
            {
              url: post.metadata.cover,
              width: 1200,
              height: 630,
              alt: post.metadata.title,
            },
          ]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title: post.metadata.title,
      description: post.metadata.excerpt,
      images: post.metadata.cover ? [post.metadata.cover] : [],
    },
  };
}

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

export default async function BlogPost({ params }: Props) {
  const resolvedParams = await params;
  const post = await getPostBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="container max-w-4xl mx-auto px-4 py-8">
      {/* Back to blog link */}
      <Button variant="ghost" asChild className="mb-8 -ml-4">
        <Link href="/blog" className="inline-flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" />
          Back to Blog
        </Link>
      </Button>

      <article className="space-y-8">
        {/* Article Header */}
        <Card>
          <CardHeader className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight leading-tight">
                {post.metadata.title}
              </h1>

              {/* Metadata */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <time dateTime={post.metadata.date}>
                    {formatDate(post.metadata.date)}
                  </time>
                </div>

                {post.metadata.author && (
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    <span>{post.metadata.author}</span>
                  </div>
                )}

                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{getReadingTime(post.content)} min read</span>
                </div>
              </div>

              {/* Tags */}
              {post.metadata.tags && post.metadata.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {post.metadata.tags.map((tag: string) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}

              {/* Excerpt */}
              {post.metadata.excerpt && (
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {post.metadata.excerpt}
                </p>
              )}
            </div>

            <Separator />

            {/* Share button */}
            <div className="flex justify-between items-center">
              <div className="text-sm text-muted-foreground">
                Published on {formatDate(post.metadata.date)}
              </div>
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
          </CardHeader>
        </Card>

        {/* Featured Image/Carousel */}
        {(post.metadata.cover || post.metadata.carousel) && (
          <Card>
            <CardContent className="p-6">
              {post.metadata.carousel && post.metadata.carousel.length > 0 ? (
                <Carousel className="w-full">
                  <CarouselContent>
                    {post.metadata.carousel.map((image, index) => (
                      <CarouselItem key={index}>
                        <div className="relative aspect-video overflow-hidden rounded-lg">
                          <Image
                            src={image || "/placeholder.svg"}
                            alt={`${post.metadata.title} - Image ${index + 1}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  {post.metadata.carousel.length > 1 && (
                    <>
                      <CarouselPrevious className="left-4" />
                      <CarouselNext className="right-4" />
                    </>
                  )}
                </Carousel>
              ) : post.metadata.cover ? (
                <div className="relative aspect-video overflow-hidden rounded-lg">
                  <Image
                    src={post.metadata.cover || "/placeholder.svg"}
                    alt={post.metadata.title}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : null}
            </CardContent>
          </Card>
        )}

        {/* Article Content */}
        <Card>
          <CardContent className="pt-8">
            <div
              className="prose-content"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </CardContent>
        </Card>

        {/* Article Footer */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="space-y-1">
                <p className="text-sm font-medium">Thanks for reading!</p>
                <p className="text-sm text-muted-foreground">
                  Have thoughts or questions? Feel free to reach out.
                </p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" asChild>
                  <Link href="/blog">More Posts</Link>
                </Button>
                <Button size="sm" asChild>
                  <Link href="/contact">Get in Touch</Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </article>
    </div>
  );
}

