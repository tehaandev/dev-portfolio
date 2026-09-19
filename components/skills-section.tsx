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
    <section id="skills" className="mx-auto max-w-7xl px-6 md:px-10">
      <SectionHeading index="01" label="Expertise">
        A small, deliberate toolkit -{" "}
        <em className="text-muted-foreground">mastered, not collected.</em>
      </SectionHeading>

      <div className="grid grid-cols-1 gap-16 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-3">
          <p className="eyebrow mb-6">Core stack</p>
          <ul className="space-y-2 font-serif text-2xl">
            {coreStack.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </div>

        <ol className="grid grid-cols-1 gap-x-10 sm:grid-cols-2 md:col-span-9">
          {disciplines.map((item, i) => (
            <li key={item.title} className="border-border border-t py-8">
              <span className="eyebrow">0{i + 1}</span>
              <h3 className="mt-4 mb-3 font-serif text-3xl leading-tight">
                {item.title}
              </h3>
              <p className="text-muted-foreground max-w-sm text-[0.9375rem] leading-relaxed">
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
