import { SectionHeading } from "@/components/section-heading";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Alchemist",
    category: "AI · Research tooling",
    description:
      "A research-focused RAG application enabling natural language querying of academic PDFs using LLMs and vector search for grounded, citation-based answers.",
    image: "/projects/alchemist.png",
    demoUrl: "https://alchemist-rho.vercel.app/",
  },
  {
    id: 2,
    title: "Fosterli",
    category: "SaaS · Social care",
    description:
      "A foster care CRM with dynamic assessment flows, role-based access, and collaboration between applicants, assessors, and managers.",
    image: "/projects/fosterli.png",
    demoUrl: "https://fosterli.com",
  },
  {
    id: 3,
    title: "The Legal Database",
    category: "Platform · Legal research",
    description:
      "A legal research platform for Sri Lanka, enabling fast access to laws, linked judgments, and automated cross-references.",
    image: "/projects/legal-database.png",
    demoUrl: "https://thelegaldatabase.com",
  },
];

export function ProjectsSection() {
  return (
    <section id="work" className="mx-auto max-w-7xl px-6 md:px-10">
      <SectionHeading index="03" label="Selected work">
        Products shipped,{" "}
        <em className="text-muted-foreground">and still standing.</em>
      </SectionHeading>

      <div className="space-y-24 md:space-y-36">
        {projects.map((project, i) => (
          <Link
            key={project.id}
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group grid grid-cols-1 items-end gap-8 md:grid-cols-12 md:gap-10">
            <div
              className={`bg-card relative aspect-[16/10] overflow-hidden md:col-span-8 ${
                i % 2 ? "md:order-last" : ""
              }`}>
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(min-width: 768px) 66vw, 100vw"
                className="object-cover object-top grayscale-[0.6] transition-[transform,filter] duration-[1200ms] ease-(--ease-lux) group-hover:scale-[1.03] group-hover:grayscale-0"
              />
            </div>

            <div className="md:col-span-4">
              <p className="eyebrow mb-6 flex justify-between">
                <span>No. 0{i + 1}</span>
                <span>{project.category}</span>
              </p>
              <h3 className="flex items-start justify-between gap-4 font-serif text-4xl leading-none md:text-5xl">
                {project.title}
                <ArrowUpRight
                  className="text-muted-foreground group-hover:text-foreground mt-1 h-6 w-6 shrink-0 transition-[transform,color] duration-500 ease-(--ease-lux) group-hover:translate-x-1 group-hover:-translate-y-1"
                  strokeWidth={1.25}
                />
              </h3>
              <p className="text-muted-foreground mt-6 text-[0.9375rem] leading-relaxed">
                {project.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
