import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative py-20 md:py-28 lg:py-36 overflow-hidden"
    >
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_450px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Tehaan Perera
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                {`Full Stack Developer crafting fast, scalable, and user-centric
                web applications. With a strong foundation in React, Node.js,
                and modern frameworks like Next.js, I build robust solutions
                that prioritize performance, intuitive UX, and clean
                architecture. Whether it's real-time dashboards or complex
                form-driven platforms, I focus on solving real-world problems
                with practical, elegant code.`}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
              <Button asChild size="lg">
                <Link href="#projects">View Projects</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#contact">Contact Me</Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden border-4 border-background shadow-xl">
              <Image
                src="/tp.jpg?height=400&width=400"
                alt="Tehaan Perera"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-12">
          <Button variant="ghost" size="icon" asChild>
            <Link href="#projects" aria-label="Scroll to projects">
              <ArrowDown className="h-6 w-6 animate-bounce" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

