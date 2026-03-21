import { Code2, Cloud, Database, FlaskConical } from "lucide-react";

const coreStack = [
  "TypeScript",
  "React.js",
  "Next.js",
  "Node.js",
  "NestJS",
  "PostgreSQL",
];

const bentoCards = [
  {
    icon: <Code2 className="text-primary h-6 w-6" />,
    title: "Full-Stack Development",
    description:
      "End-to-end web applications with React, Next.js, Node.js, and NestJS. Type-safe codebases with TypeScript throughout.",
  },
  {
    icon: <Cloud className="text-primary h-6 w-6" />,
    title: "Cloud & DevOps",
    description:
      "AWS infrastructure, Docker containerisation, and CI/CD pipelines with GitHub Actions for automated, reliable deployments.",
  },
  {
    icon: <Database className="text-primary h-6 w-6" />,
    title: "Databases",
    description:
      "PostgreSQL, MongoDB, Redis, and MySQL. ORM experience with Prisma and Mongoose for type-safe, efficient queries.",
  },
  {
    icon: <FlaskConical className="text-primary h-6 w-6" />,
    title: "Testing & Quality",
    description:
      "Jest, Cypress, and React Testing Library for unit, integration, and end-to-end coverage ensuring production reliability.",
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="mx-auto max-w-7xl px-6 py-8 md:px-8">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
        {/* Left: Primary Tooling card */}
        <div className="bg-card flex flex-col justify-between rounded-lg p-8 md:col-span-4">
          <span className="text-muted-foreground text-[0.6875rem] font-bold tracking-widest uppercase">
            Core Stack
          </span>
          <div>
            <h3 className="mt-4 mb-2 text-2xl font-bold">Primary Tooling</h3>
            <p className="text-muted-foreground mb-6 text-sm">
              Technologies I build with every day.
            </p>
            <div className="flex flex-wrap gap-2">
              {coreStack.map((tech) => (
                <span
                  key={tech}
                  className="bg-secondary text-primary rounded-sm px-3 py-1 font-mono text-[0.6875rem] uppercase">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right: 2×2 bento grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:col-span-8">
          {bentoCards.map((card) => (
            <div
              key={card.title}
              className="bg-accent hover:border-primary rounded-lg border-b-2 border-transparent p-8 transition-all duration-300">
              {card.icon}
              <h4 className="mt-4 mb-2 font-bold">{card.title}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
