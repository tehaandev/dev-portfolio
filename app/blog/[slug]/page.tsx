import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { getPostBySlug, getAllPostSlugs } from "@/lib/posts";
import { ChevronLeft } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

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
      url: `https://www.tehaan.dev/blog/${slug}`,
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
  return new Date(dateString).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function getReadingTime(content: string): number {
  return Math.ceil(content.split(/\s+/).length / 200);
}

export default async function BlogPost({ params }: Props) {
  const resolvedParams = await params;
  const post = await getPostBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const { title, date, author, tags, excerpt, cover, carousel } = post.metadata;

  return (
    <main className="mx-auto max-w-5xl px-5 pt-24 pb-28 md:px-8 md:pt-28">
      <Link
        href="/blog"
        className="link press inline-flex items-center gap-0.5 text-[0.9375rem]">
        <ChevronLeft className="-ml-1 h-4 w-4" />
        Writing
      </Link>

      <article>
        <header className="mx-auto mt-12 max-w-3xl text-center md:mt-16">
          <p className="text-muted-foreground text-sm">
            <time dateTime={date}>{formatDate(date)}</time>
            <span className="mx-1.5">·</span>
            {getReadingTime(post.content)} min read
          </p>
          <h1 className="mt-4 text-4xl leading-[1.08] font-semibold tracking-[-0.032em] text-balance md:text-6xl">
            {title}
          </h1>
          {excerpt && (
            <p className="text-muted-foreground mx-auto mt-6 max-w-2xl text-xl leading-snug text-pretty md:text-[1.375rem]">
              {excerpt}
            </p>
          )}
          {(author || (tags && tags.length > 0)) && (
            <p className="text-muted-foreground mt-6 text-sm">
              {author && <>By {author}</>}
              {author && tags && tags.length > 0 && (
                <span className="mx-1.5">·</span>
              )}
              {tags?.join(", ")}
            </p>
          )}
        </header>

        {(cover || (carousel && carousel.length > 0)) && (
          <div className="mt-12 md:mt-16">
            {carousel && carousel.length > 0 ? (
              <Carousel className="w-full">
                <CarouselContent>
                  {carousel.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="bg-muted relative aspect-video overflow-hidden rounded-3xl">
                        <Image
                          src={image}
                          alt={`${title} - Image ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                {carousel.length > 1 && (
                  <>
                    <CarouselPrevious className="material left-4 size-10 border-0" />
                    <CarouselNext className="material right-4 size-10 border-0" />
                  </>
                )}
              </Carousel>
            ) : (
              <div className="bg-muted relative aspect-video overflow-hidden rounded-3xl">
                <Image src={cover!} alt={title} fill className="object-cover" />
              </div>
            )}
          </div>
        )}

        <div
          className="prose-content mx-auto mt-12 max-w-[42rem] md:mt-16"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <footer className="surface mx-auto mt-20 flex max-w-[42rem] flex-col gap-6 p-7 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xl font-semibold tracking-[-0.02em]">
              Thanks for reading.
            </p>
            <p className="text-muted-foreground mt-1 text-[0.9375rem]">
              Thoughts or questions? I&apos;d love to hear them.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/blog" className="btn-secondary">
              More writing
            </Link>
            <Link href="/#contact" className="btn-primary">
              Get in touch
            </Link>
          </div>
        </footer>
      </article>
    </main>
  );
}
