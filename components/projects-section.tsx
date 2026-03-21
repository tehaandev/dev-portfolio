"use client";

import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Alchemist",
    description:
      "A research-focused RAG application enabling natural language querying of academic PDFs using LLMs and vector search for grounded, citation-based answers.",
    image: "/projects/alchemist.png",
    demoUrl: "https://alchemist-rho.vercel.app/",
  },
  {
    id: 2,
    title: "Fosterli",
    description:
      "A foster care CRM with dynamic assessment flows, role-based access, and collaboration between applicants, assessors, and managers.",
    image: "/projects/fosterli.png",
    demoUrl: "https://fosterli.com",
  },
  {
    id: 3,
    title: "The Legal Database",
    description:
      "A legal research platform for Sri Lanka, enabling fast access to laws, linked judgments, and automated cross-references.",
    image: "/projects/legal-database.png",
    demoUrl: "https://thelegaldatabase.com",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-8 md:px-8">
      <h2 className="mb-12 text-3xl font-bold tracking-tight">
        Selected Projects
      </h2>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <Link
            key={project.id}
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group cursor-pointer">
            {/* Image */}
            <div className="bg-card relative mb-6 aspect-video overflow-hidden rounded-lg">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover opacity-60 grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
              />
              <div className="bg-primary/10 absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </div>

            {/* Info */}
            <div className="flex items-start justify-between">
              <div>
                <h3 className="group-hover:text-primary mb-2 text-xl font-bold transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-muted-foreground max-w-sm text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
              <ExternalLink className="text-muted-foreground group-hover:text-primary mt-0.5 ml-4 h-5 w-5 flex-shrink-0 transition-colors duration-200" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
