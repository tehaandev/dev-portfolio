import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

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

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              My Projects
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              A selection of my recent work and personal projects.
            </p>
          </div>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="flex flex-col overflow-hidden border-2 transition-all hover:shadow-lg"
            >
              <div className="relative aspect-video overflow-hidden group">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
                {project.external && (
                  <div className="absolute z-50 top-2 right-2 bg-black/60 text-white text-xs font-medium py-1 px-2 rounded opacity-0 max-md:opacity-100 md:group-hover:opacity-100 transition-opacity">
                    Professional Work
                  </div>
                )}
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between mt-auto">
                <Button
                  variant="outline"
                  size="sm"
                  asChild={!!project.repoUrl}
                  disabled={!project.repoUrl}
                >
                  {project.repoUrl ? (
                    <Link
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Link>
                  ) : (
                    <span className="flex items-center">
                      <Github className="mr-2 h-4 w-4" />
                      Private
                    </span>
                  )}
                </Button>
                <Button size="sm" asChild>
                  <Link
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <Button variant="outline" asChild>
            <Link
              href="https://github.com/tehaandev?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              View More on GitHub
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

