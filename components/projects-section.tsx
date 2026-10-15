import { FadeIn } from "@/components/FadeIn";
import { SectionHeading } from "@/components/section-heading";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Fosterli",
    category: "SaaS · Social care",
    description:
      "A foster care CRM with dynamic assessment flows, role-based access, and collaboration between applicants, assessors, and managers.",
    image: "/projects/fosterli.png",
    demoUrl: "https://fosterli.com",
  },
  {
    id: 2,
    title: "Alchemist",
    category: "AI · Research tooling",
    description:
      "A research-focused RAG application enabling natural language querying of academic PDFs using LLMs and vector search for grounded, citation-based answers.",
    image: "/projects/alchemist.png",
    demoUrl: "https://alchemist-rho.vercel.app/",
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
    <section id="work" className="mx-auto max-w-6xl px-5 md:px-8">
      <SectionHeading label="Selected work">
        Products shipped.{" "}
        <span className="text-muted-foreground">And still standing.</span>
      </SectionHeading>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {projects.map((project, i) => (
          <FadeIn
            key={project.id}
            delay={i === 0 ? 0 : (i - 1) * 60}
            className={i === 0 ? "md:col-span-2" : ""}>
            <Link
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="surface press group flex h-full flex-col overflow-hidden">
              <div className="p-7 md:p-9">
                <p className="text-muted-foreground text-sm font-medium">
                  {project.category}
                </p>
                <h3 className="mt-1.5 text-3xl font-semibold tracking-[-0.028em] md:text-4xl">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mt-3 max-w-xl text-[0.9375rem] leading-relaxed">
                  {project.description}
                </p>
                <span className="link mt-4 inline-flex items-center gap-0.5 text-[0.9375rem] group-hover:underline">
                  Visit site
                  <ChevronRight className="h-4 w-4 transition-transform duration-300 ease-(--ease-spring) group-hover:translate-x-0.5" />
                </span>
              </div>
              <div
                className={`bg-muted relative mx-7 mt-auto overflow-hidden rounded-t-2xl shadow-[0_0_0_1px_var(--border)] md:mx-9 ${
                  i === 0 ? "aspect-[16/8]" : "aspect-[16/10]"
                }`}>
                <Image
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  fill
                  sizes={
                    i === 0
                      ? "(min-width: 1152px) 1088px, 100vw"
                      : "(min-width: 768px) 50vw, 100vw"
                  }
                  className="object-cover object-top transition-transform duration-700 ease-(--ease-spring) group-hover:scale-[1.02]"
                />
              </div>
            </Link>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
