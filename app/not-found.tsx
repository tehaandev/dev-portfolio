import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[80vh] max-w-7xl flex-col justify-center px-6 pt-32 pb-24 md:px-10">
      <p className="eyebrow">Error - 404</p>
      <h1 className="mt-8 font-serif text-6xl leading-[0.95] tracking-tight md:text-8xl">
        This page has <em className="text-muted-foreground">wandered off.</em>
      </h1>
      <p className="text-muted-foreground mt-8 max-w-md text-[0.9375rem] leading-relaxed">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <div className="mt-12 flex items-center gap-10">
        <Link
          href="/"
          className="bg-foreground text-background hover:bg-foreground/85 px-7 py-4 text-[0.8125rem] tracking-wide transition-colors duration-300">
          Return home
        </Link>
        <Link href="/#contact" className="link-draw pb-0.5 text-[0.8125rem]">
          Contact me
        </Link>
      </div>
    </main>
  );
}
