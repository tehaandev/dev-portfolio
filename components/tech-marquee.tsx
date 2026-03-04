import {
  SiAmazonwebservices,
  SiDocker,
  SiGraphql,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiRedis,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const techs = [
  { name: "React", icon: <SiReact className="h-4 w-4 text-[#61DAFB]" /> },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="h-4 w-4 dark:text-white text-[#000000]" />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="h-4 w-4 text-[#007ACC]" />,
  },
  {
    name: "Node.js",
    icon: <SiNodedotjs className="h-4 w-4 text-[#5FA04E]" />,
  },
  { name: "NestJS", icon: <SiNestjs className="h-4 w-4 text-[#E0234E]" /> },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql className="h-4 w-4 text-[#336791]" />,
  },
  { name: "MongoDB", icon: <SiMongodb className="h-4 w-4 text-[#47A248]" /> },
  {
    name: "AWS",
    icon: <SiAmazonwebservices className="h-4 w-4 text-[#FF9900]" />,
  },
  { name: "Docker", icon: <SiDocker className="h-4 w-4 text-[#2496ED]" /> },
  {
    name: "Prisma",
    icon: <SiPrisma className="h-4 w-4 dark:text-white text-[#2D3748]" />,
  },
  { name: "GraphQL", icon: <SiGraphql className="h-4 w-4 text-[#E10098]" /> },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="h-4 w-4 text-[#06B6D4]" />,
  },
  { name: "Redis", icon: <SiRedis className="h-4 w-4 text-[#D82C20]" /> },
];

export function TechMarquee() {
  return (
    <section className="py-6 overflow-hidden border-y border-border/50 bg-muted/30">
      <div className="relative marquee-fade overflow-hidden">
        <div
          className="flex gap-5 w-max"
          style={{ animation: "marquee 30s linear infinite" }}
        >
          {[...techs, ...techs].map((tech, i) => (
            <div
              key={i}
              className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-background border border-border/50 flex-shrink-0 whitespace-nowrap"
            >
              <span className="flex-shrink-0 leading-none" aria-hidden="true">
                {tech.icon}
              </span>
              <span className="text-sm font-medium text-muted-foreground">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
