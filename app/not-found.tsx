import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[80vh] max-w-6xl flex-col items-center justify-center px-5 pt-28 pb-24 text-center md:px-8">
      <p className="eyebrow">404</p>
      <h1 className="mt-3 text-5xl leading-[1.05] font-semibold tracking-[-0.035em] text-balance md:text-7xl">
        This page has wandered off.
      </h1>
      <p className="text-muted-foreground mt-6 max-w-md text-lg leading-relaxed">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-3">
        <Link href="/" className="btn-primary">
          Return home
        </Link>
        <Link href="/#contact" className="btn-secondary">
          Contact me
        </Link>
      </div>
    </main>
  );
}
