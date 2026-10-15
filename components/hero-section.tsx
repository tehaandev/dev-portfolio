import { FadeIn } from "@/components/FadeIn";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const facts = [
  { label: "Currently", value: "Software Engineer at Fosterli" },
  { label: "Discipline", value: "Full-stack web & cloud" },
  { label: "Availability", value: "Open to select collaborations" },
];

export function HeroSection() {
  return (
    <section
      id="hero"
      className="mx-auto flex min-h-svh max-w-6xl flex-col items-center justify-center px-5 pt-28 pb-16 text-center md:px-8">
      <FadeIn>
        <div className="relative mx-auto h-24 w-24 overflow-hidden rounded-full shadow-[0_0_0_1px_var(--border)] md:h-28 md:w-28">
          <Image
            src="/tp.jpg"
            alt="Portrait of Tehaan Perera"
            fill
            sizes="112px"
            className="object-cover object-top"
            priority
          />
        </div>
      </FadeIn>

      <FadeIn delay={60}>
        <p className="eyebrow mt-8">Full-Stack Software Engineer</p>
        <h1 className="mx-auto mt-3 max-w-4xl text-[2.75rem] leading-[1.05] font-semibold tracking-[-0.035em] text-balance sm:text-6xl lg:text-[5rem]">
          Software, built with <span className="text-wine">precision.</span>
        </h1>
      </FadeIn>

      <FadeIn delay={120}>
        <p className="text-muted-foreground mx-auto mt-6 max-w-xl text-lg leading-relaxed text-pretty md:text-xl">
          I&apos;m Tehaan, a full-stack engineer crafting fast, considered web
          applications with React, Node.js and the cloud.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link href="#work" className="btn-primary">
            View my work
          </Link>
          <Link
            href="https://calendar.app.google/7VhtRKka3953z2hq5"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary">
            Schedule a call
            <ChevronRight className="-mr-1 h-4 w-4" />
          </Link>
        </div>
      </FadeIn>

      <FadeIn delay={180} className="mt-20 w-full md:mt-24">
        <dl className="surface mx-auto grid max-w-4xl grid-cols-1 text-left sm:grid-cols-3">
          {facts.map((fact) => (
            <div
              key={fact.label}
              className="border-border px-6 py-5 not-first:border-t sm:not-first:border-t-0 sm:not-first:border-l">
              <dt className="text-muted-foreground text-[0.8125rem]">
                {fact.label}
              </dt>
              <dd className="mt-1 text-[0.9375rem] font-medium">
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>
      </FadeIn>
    </section>
  );
}
