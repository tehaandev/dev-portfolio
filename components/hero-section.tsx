import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin } from "lucide-react";

export function HeroSection() {
  return (
    <section id="hero" className="relative py-10 md:py-14 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 dot-pattern" />
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/8 rounded-full blur-3xl -translate-y-1/3 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />
      </div>

      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-4">

          {/* Left column */}
          <div className="flex flex-col gap-4">

            {/* Name tile */}
            <div className="rounded-3xl bg-card border border-border/60 p-8 md:p-10 shadow-sm">
              {/* Status badge */}
              <div className="mb-6">
                <span className="inline-flex items-center gap-2.5 rounded-full border border-primary/30 bg-primary/8 px-4 py-1.5 text-sm font-medium text-primary">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-primary opacity-70" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                  </span>
                  Open to new opportunities
                </span>
              </div>

              <h1 className="text-[clamp(2.8rem,6vw,5.5rem)] font-black tracking-tight leading-[1] mb-4">
                TEHAAN<br />
                <span className="gradient-text">PERERA</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground font-medium">
                Full Stack Developer
              </p>
            </div>

            {/* Bio + CTA row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

              {/* Bio tile */}
              <div className="rounded-3xl bg-card border border-border/60 p-6 shadow-sm flex flex-col justify-center">
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  Crafting fast, scalable web applications with React, Node.js,
                  and modern frameworks. I build solutions that prioritize
                  performance, clean architecture, and great UX.
                </p>
              </div>

              {/* CTA tile */}
              <div className="rounded-3xl bg-primary p-6 shadow-sm flex flex-col justify-center gap-3">
                <p className="text-sm font-medium text-primary-foreground/80">
                  Ready to collaborate?
                </p>
                <Button
                  size="sm"
                  className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold h-10"
                  asChild
                >
                  <Link href="#projects">
                    View My Work
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground font-semibold h-10"
                  asChild
                >
                  <Link href="#contact">Contact Me</Link>
                </Button>
              </div>

            </div>
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-4">

            {/* Photo tile */}
            <div className="relative flex-1 rounded-3xl overflow-hidden min-h-[280px] bg-muted">
              <Image
                src="/tp.jpg"
                alt="Tehaan Perera"
                fill
                className="object-cover object-top"
                priority
              />
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-primary/10 border border-primary/20 p-4 text-center">
                <p className="text-3xl font-black text-primary">3+</p>
                <p className="text-xs text-muted-foreground mt-1 font-medium">Years Exp.</p>
              </div>
              <div className="rounded-2xl bg-primary/10 border border-primary/20 p-4 text-center">
                <p className="text-3xl font-black text-primary">10+</p>
                <p className="text-xs text-muted-foreground mt-1 font-medium">Projects</p>
              </div>
            </div>

            {/* Social tile */}
            <div className="rounded-2xl bg-muted/60 border border-border/50 p-4 flex items-center justify-around">
              <Link
                href="https://github.com/tehaandev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-5 w-5" />
                GitHub
              </Link>
              <div className="w-px h-4 bg-border" />
              <Link
                href="https://www.linkedin.com/in/tehaan-perera/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                LinkedIn
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
