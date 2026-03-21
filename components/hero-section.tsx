import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-12 md:px-8">
      {/* Tonal bloom background */}
      <div className="tonal-bloom pointer-events-none absolute inset-0" />

      {/* Left column */}
      <div className="z-10 py-16 md:col-span-7 md:py-0">
        <div className="mb-6 flex items-center gap-3">
          <span className="bg-primary h-[1px] w-12 flex-shrink-0" />
          <span className="text-primary text-[0.6875rem] font-medium tracking-[0.2em] uppercase">
            Full Stack Developer
          </span>
        </div>

        <h1 className="text-foreground mb-8 text-5xl leading-[0.95] font-extrabold tracking-tight md:text-6xl lg:text-7xl">
          Building <br />
          Digital <br />
          <span className="text-primary">Experiences.</span>
        </h1>

        <p className="text-muted-foreground mb-10 max-w-lg text-base leading-relaxed md:text-lg">
          Crafting fast, scalable web applications with React, Node.js, and
          modern frameworks. Focused on clean architecture, performance, and
          outstanding user experiences.
        </p>

        <div className="flex flex-wrap gap-4">
          <Link
            href="#projects"
            className="bg-primary-container text-on-primary-container hover:bg-primary hover:text-primary-foreground inline-flex items-center gap-2 rounded-md px-6 py-3 font-semibold transition-colors duration-200">
            View Projects
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="#contact"
            className="text-primary hover:bg-accent inline-flex items-center rounded-md px-6 py-3 font-semibold transition-colors duration-200">
            Contact Me
          </Link>
        </div>
      </div>

      {/* Right column — portrait */}
      <div className="bg-card relative aspect-square overflow-hidden rounded-xl contrast-125 grayscale md:col-span-5 md:aspect-auto md:h-[520px]">
        <Image
          src="/tp.jpg"
          alt="Tehaan Perera"
          fill
          className="object-cover object-top opacity-80 mix-blend-luminosity"
          priority
        />
        <div className="from-background absolute inset-0 bg-gradient-to-t via-transparent to-transparent" />
      </div>
    </section>
  );
}
