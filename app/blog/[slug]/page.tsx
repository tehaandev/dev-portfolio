import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { getPostBySlug, getAllPostSlugs } from "@/lib/posts";
import { ArrowLeft } from "lucide-react";
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
    <main className="mx-auto max-w-7xl px-6 pt-32 pb-32 md:px-10 md:pt-44">
      <Link
        href="/blog"
        className="eyebrow hover:text-foreground group inline-flex items-center gap-3 transition-colors duration-300">
        <ArrowLeft
          className="h-3.5 w-3.5 transition-transform duration-500 ease-(--ease-lux) group-hover:-translate-x-1"
          strokeWidth={1.5}
        />
        All writing
      </Link>

      <article>
        <header className="mx-auto mt-16 max-w-3xl text-center md:mt-24">
          <p className="eyebrow">
            <time dateTime={date}>{formatDate(date)}</time>
            <span className="mx-3">·</span>
            {getReadingTime(post.content)} min read
          </p>
          <h1 className="mt-8 font-serif text-5xl leading-[1.02] tracking-tight text-balance md:text-7xl">
            {title}
          </h1>
          {excerpt && (
            <p className="text-muted-foreground mx-auto mt-8 max-w-xl font-serif text-xl leading-snug italic md:text-2xl">
              {excerpt}
            </p>
          )}
          <p className="eyebrow mt-10">
            {author && <>By {author}</>}
            {author && tags && tags.length > 0 && (
              <span className="mx-3">-</span>
            )}
            {tags?.join(" / ")}
          </p>
        </header>

        {(cover || (carousel && carousel.length > 0)) && (
          <div className="mt-16 md:mt-24">
            {carousel && carousel.length > 0 ? (
              <Carousel className="w-full">
                <CarouselContent>
                  {carousel.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="bg-card relative aspect-video overflow-hidden">
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
                    <CarouselPrevious className="left-4" />
                    <CarouselNext className="right-4" />
                  </>
                )}
              </Carousel>
            ) : (
              <div className="bg-card relative aspect-video overflow-hidden">
                <Image src={cover!} alt={title} fill className="object-cover" />
              </div>
            )}
          </div>
        )}

        <div
          className="prose-content mx-auto mt-16 max-w-2xl md:mt-24"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <footer className="border-border mx-auto mt-24 flex max-w-2xl flex-col gap-8 border-t pt-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-serif text-3xl">Thanks for reading.</p>
            <p className="text-muted-foreground mt-2 text-sm">
              Thoughts or questions? I&apos;d love to hear them.
            </p>
          </div>
          <div className="flex items-center gap-8">
            <Link href="/blog" className="link-draw pb-0.5 text-[0.8125rem]">
              More writing
            </Link>
            <Link
              href="/#contact"
              className="bg-foreground text-background hover:bg-foreground/85 px-6 py-3 text-[0.8125rem] tracking-wide transition-colors duration-300">
              Get in touch
            </Link>
          </div>
        </footer>
      </article>
    </main>
  );
}
