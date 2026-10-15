import { FadeIn } from "@/components/FadeIn";
import { SectionHeading } from "@/components/section-heading";

const coreStack = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "NestJS",
  "PostgreSQL",
];

const disciplines = [
  {
    title: "Full-Stack Development",
    description:
      "End-to-end web applications with React, Next.js, Node.js and NestJS. Type-safe codebases with TypeScript throughout.",
  },
  {
    title: "Cloud & DevOps",
    description:
      "AWS infrastructure, Docker containerisation, and CI/CD pipelines with GitHub Actions for automated, reliable deployments.",
  },
  {
    title: "Data & Persistence",
    description:
      "PostgreSQL, MongoDB, Redis and MySQL. Prisma and Mongoose for type-safe, efficient queries.",
  },
  {
    title: "Testing & Quality",
    description:
      "Jest, Cypress and React Testing Library - unit, integration and end-to-end coverage for production reliability.",
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-5 md:px-8">
      <SectionHeading label="Expertise">
        A small, deliberate toolkit.{" "}
        <span className="text-muted-foreground">Mastered, not collected.</span>
      </SectionHeading>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <FadeIn className="surface p-7 sm:col-span-2 lg:col-span-1 lg:row-span-2">
          <h3 className="text-muted-foreground text-sm font-medium">
            Core stack
          </h3>
          <ul className="mt-5 flex flex-wrap gap-2 lg:flex-col lg:items-start lg:gap-3">
            {coreStack.map((tech) => (
              <li
                key={tech}
                className="bg-secondary rounded-full px-4 py-1.5 text-[0.9375rem] font-medium lg:bg-transparent lg:p-0 lg:text-[1.75rem] lg:leading-tight lg:font-semibold lg:tracking-[-0.025em]">
                {tech}
              </li>
            ))}
          </ul>
        </FadeIn>

        {disciplines.map((item, i) => (
          <FadeIn key={item.title} delay={i * 60} className="surface p-7">
            <h3 className="text-xl font-semibold tracking-[-0.02em]">
              {item.title}
            </h3>
            <p className="text-muted-foreground mt-2 text-[0.9375rem] leading-relaxed">
              {item.description}
            </p>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
