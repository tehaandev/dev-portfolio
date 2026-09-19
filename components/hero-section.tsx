import { ArrowDownRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const facts = [
  { label: "Currently", value: "Software Engineer, Fosterli" },
  { label: "Discipline", value: "Full-stack web & cloud" },
  { label: "Availability", value: "Open to select collaborations" },
];

export function HeroSection() {
  return (
    <section
      id="hero"
      className="mx-auto flex min-h-svh max-w-7xl flex-col justify-end px-6 pt-28 pb-12 md:px-10 md:pt-36 md:pb-16">
      <div className="grid grid-cols-1 items-end gap-12 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-8">
          <p className="eyebrow mb-10 flex items-center gap-4">
            <span className="bg-foreground/40 h-px w-10" aria-hidden />
            Full-Stack Software Engineer
          </p>

          <h1 className="font-serif text-[3.25rem] leading-[0.95] tracking-[-0.02em] text-balance sm:text-7xl lg:text-[6.5rem]">
            Software, built with{" "}
            <em className="text-muted-foreground">quiet</em> precision.
          </h1>

          <p className="text-muted-foreground mt-10 max-w-md text-[0.9375rem] leading-relaxed">
            I&apos;m Tehaan - a full-stack engineer crafting fast, considered
            web applications with React, Node.js and the cloud. Clean
            architecture, lasting performance, no ornament without purpose.
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-6">
            <Link
              href="#work"
              className="bg-foreground text-background hover:bg-foreground/85 group inline-flex items-center gap-3 px-7 py-4 text-[0.8125rem] tracking-wide transition-colors duration-300">
              View selected work
              <ArrowDownRight
                className="h-4 w-4 transition-transform duration-500 ease-(--ease-lux) group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                strokeWidth={1.5}
              />
            </Link>
            <Link
              href="https://calendar.app.google/7VhtRKka3953z2hq5"
              target="_blank"
              rel="noopener noreferrer"
              className="link-draw pb-0.5 text-[0.8125rem] tracking-wide">
              Schedule a call
            </Link>
          </div>
        </div>

        <figure className="md:col-span-4">
          <div className="bg-card relative aspect-[4/5] overflow-hidden">
            <Image
              src="/tp.jpg"
              alt="Portrait of Tehaan Perera"
              fill
              sizes="(min-width: 768px) 33vw, 100vw"
              className="object-cover object-top grayscale transition-[filter] duration-1000 hover:grayscale-0"
              priority
            />
          </div>
          <figcaption className="eyebrow mt-3 flex justify-between">
            <span>Tehaan Perera</span>
            <span>Fig. 01</span>
          </figcaption>
        </figure>
      </div>

      <dl className="border-border mt-20 grid grid-cols-1 border-t sm:grid-cols-3 md:mt-28">
        {facts.map((fact) => (
          <div
            key={fact.label}
            className="border-border border-b py-5 sm:border-b-0 sm:py-6 sm:pr-6 sm:not-first:border-l sm:not-first:pl-6">
            <dt className="eyebrow mb-2">{fact.label}</dt>
            <dd className="text-sm">{fact.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
