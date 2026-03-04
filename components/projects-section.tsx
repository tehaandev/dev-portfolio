"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Lock } from "lucide-react";
import { motion } from "motion/react";

const projects = [
  {
    id: 1,
    title: "Alchemist",
    description:
      "A research-focused RAG application enabling natural language querying of academic PDFs using LLMs and vector search for grounded, citation-based answers.",
    image: "/projects/alchemist.png",
    tags: [
      "Next.js",
      "PostgreSQL",
      "Supabase",
      "Pinecone",
      "LangChain",
      "OpenAI",
      "Tanstack Query",
    ],
    demoUrl: "https://alchemist-rho.vercel.app/",
    repoUrl: "https://github.com/tehaandev/alchemist",
  },
  {
    id: 2,
    title: "Fosterli",
    description:
      "A foster care CRM with dynamic assessment flows, role-based access, and collaboration between applicants, assessors, and managers.",
    image: "/projects/fosterli.png",
    tags: [
      "Next.js",
      "PostgreSQL",
      "Prisma",
      "Amazon S3",
      "Resend",
      "JWT",
      "React-Hook-Form",
      "Zod",
      "Tanstack Query",
      "Docker",
      "Docker Compose",
    ],
    demoUrl: "https://fosterli.com",
    repoUrl: null,
  },
  {
    id: 3,
    title: "The Legal Database",
    description:
      "A legal research platform for Sri Lanka, enabling fast access to laws, linked judgments, and automated cross-references.",
    image: "/projects/legal-database.png",
    tags: [
      "Next.js",
      "React.js",
      "NestJS",
      "Mongo DB",
      "Mongoose",
      "Amazon S3",
      "LaTeX",
      "Docker",
      "Docker Compose",
    ],
    demoUrl: "https://thelegaldatabase.com",
    repoUrl: null,
    external: true,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number],
    },
  },
};

function ProjectButtons({
  repoUrl,
  demoUrl,
}: {
  repoUrl: string | null;
  demoUrl: string;
}) {
  return (
    <div className="flex gap-2">
      <Button
        variant="outline"
        size="sm"
        className="text-xs font-medium border-border/70 hover:border-primary/40 hover:bg-primary/5 transition-colors"
        asChild={!!repoUrl}
        disabled={!repoUrl}
      >
        {repoUrl ? (
          <Link href={repoUrl} target="_blank" rel="noopener noreferrer">
            <Github className="mr-1.5 h-3.5 w-3.5" />
            Code
          </Link>
        ) : (
          <span className="flex items-center">
            <Lock className="mr-1.5 h-3.5 w-3.5" />
            Private
          </span>
        )}
      </Button>
      <Button size="sm" className="text-xs font-medium shadow-sm" asChild>
        <Link href={demoUrl} target="_blank" rel="noopener noreferrer">
          <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
          Live Demo
        </Link>
      </Button>
    </div>
  );
}

export function ProjectsSection() {
  const featured = projects[0];
  const rest = projects.slice(1);

  return (
    <section id="projects" className="py-20 md:py-28 bg-background">
      <div className="container px-4 md:px-6 mx-auto">
        {/* Section header */}
        <div className="flex flex-col items-center justify-center text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            Portfolio
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
            My Projects
          </h2>
          <p className="max-w-[600px] text-muted-foreground md:text-lg">
            A selection of my recent work and personal projects.
          </p>
          <div className="mt-5 h-1 w-16 bg-gradient-to-r from-primary to-primary/30 rounded-full" />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Featured card */}
          <motion.div
            variants={cardVariants}
            className="group flex flex-col lg:flex-row overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm hover:shadow-xl hover:shadow-primary/8 hover:border-primary/30 transition-all duration-300 mb-7"
          >
            {/* Image */}
            <div className="relative aspect-video lg:aspect-auto lg:w-[45%] overflow-hidden bg-muted flex-shrink-0">
              <Image
                src={featured.image || "/placeholder.svg"}
                alt={featured.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Info */}
            <div className="flex-1 p-8 md:p-10 relative flex flex-col justify-between overflow-hidden">
              {/* Background number */}
              <span className="absolute -top-6 right-4 text-[9rem] font-black text-border/20 leading-none select-none pointer-events-none">
                01
              </span>

              <div className="space-y-4 relative z-10">
                <p className="text-xs font-semibold text-primary uppercase tracking-widest">
                  Featured Project
                </p>
                <h3 className="text-2xl md:text-3xl font-bold">
                  {featured.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {featured.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {featured.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="text-xs bg-muted/80 hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="mt-6 relative z-10">
                <ProjectButtons
                  repoUrl={featured.repoUrl}
                  demoUrl={featured.demoUrl}
                />
              </div>
            </div>
          </motion.div>

          {/* Grid for remaining projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {rest.map((project, idx) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm hover:shadow-lg hover:shadow-primary/8 hover:border-primary/30 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative aspect-video overflow-hidden bg-muted">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {project.external && (
                    <div className="absolute top-3 right-3 bg-foreground/85 text-background text-xs font-medium py-1 px-2.5 rounded-full opacity-0 max-md:opacity-100 md:group-hover:opacity-100 transition-opacity duration-200">
                      Professional Work
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-6 gap-4">
                  <div className="flex items-start gap-3">
                    <span className="text-4xl font-black text-border/30 leading-none select-none flex-shrink-0 mt-0.5">
                      0{idx + 2}
                    </span>
                    <div>
                      <h3 className="text-lg font-bold leading-tight">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {project.tags.slice(0, 5).map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="text-xs bg-muted/80 hover:bg-primary/10 hover:text-primary transition-colors"
                      >
                        {tag}
                      </Badge>
                    ))}
                    {project.tags.length > 5 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.tags.length - 5}
                      </Badge>
                    )}
                  </div>

                  <ProjectButtons
                    repoUrl={project.repoUrl}
                    demoUrl={project.demoUrl}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Footer link */}
        <div className="flex justify-center mt-12">
          <Button
            variant="outline"
            className="font-medium border-border/70 hover:border-primary/40 hover:bg-primary/5 transition-colors"
            asChild
          >
            <Link
              href="https://github.com/tehaandev?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-4 w-4" />
              View More on GitHub
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
