import { Infinity } from "lucide-react";
import {
  SiAmazonwebservices,
  SiAwslambda,
  SiAxios,
  SiCss3,
  SiCypress,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiGit,
  SiGithub,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiReacthookform,
  SiReactquery,
  SiRedis,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

const skillCategories = [
  {
    name: "Frontend",
    skills: [
      { name: "HTML5", icon: <SiHtml5 className="h-4 w-4 text-[#E34F26]" /> },
      { name: "CSS3", icon: <SiCss3 className="h-4 w-4 text-[#1572B6]" /> },
      {
        name: "JavaScript",
        icon: <SiJavascript className="h-4 w-4 text-[#F7DF1E]" />,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript className="h-4 w-4 text-[#007ACC]" />,
      },
      {
        name: "React.js",
        icon: <SiReact className="h-4 w-4 text-[#61DAFB]" />,
      },
      {
        name: "Next.js",
        icon: <SiNextdotjs className="h-4 w-4 dark:text-white text-[#000000]" />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="h-4 w-4 text-[#06B6D4]" />,
      },
      {
        name: "Zustand",
        icon: <span className="text-sm leading-none">🔄</span>,
      },
      {
        name: "React Query",
        icon: <SiReactquery className="h-4 w-4 text-[#FF4154]" />,
      },
      {
        name: "React Hook Form",
        icon: <SiReacthookform className="h-4 w-4 text-[#E3342F]" />,
      },
    ],
  },
  {
    name: "Backend",
    skills: [
      {
        name: "Node.js",
        icon: <SiNodedotjs className="h-4 w-4 text-[#5FA04E]" />,
      },
      { name: "NestJS", icon: <SiNestjs className="h-4 w-4 text-[#E0234E]" /> },
      {
        name: "Express",
        icon: <SiExpress className="h-4 w-4 dark:text-white text-[#000000]" />,
      },
      {
        name: "GraphQL",
        icon: <SiGraphql className="h-4 w-4 text-[#E10098]" />,
      },
      {
        name: "REST API",
        icon: <SiAxios className="h-4 w-4 text-[#5A29E3]" />,
      },
      {
        name: "AWS Lambda",
        icon: <SiAwslambda className="h-4 w-4 text-[#FF9900]" />,
      },
    ],
  },
  {
    name: "Database",
    skills: [
      {
        name: "MongoDB",
        icon: <SiMongodb className="h-4 w-4 text-[#47A248]" />,
      },
      {
        name: "PostgreSQL",
        icon: <SiPostgresql className="h-4 w-4 text-[#336791]" />,
      },
      { name: "MySQL", icon: <SiMysql className="h-4 w-4 text-[#4479A1]" /> },
      {
        name: "Firebase",
        icon: <SiFirebase className="h-4 w-4 text-[#FFCA28]" />,
      },
      {
        name: "Prisma",
        icon: <SiPrisma className="h-4 w-4 dark:text-white text-[#2D3748]" />,
      },
      { name: "Redis", icon: <SiRedis className="h-4 w-4 text-[#D82C20]" /> },
    ],
  },
  {
    name: "DevOps & Tools",
    skills: [
      { name: "Git", icon: <SiGit className="h-4 w-4 text-[#F05032]" /> },
      {
        name: "GitHub",
        icon: <SiGithub className="h-4 w-4 dark:text-white text-[#181717]" />,
      },
      { name: "Docker", icon: <SiDocker className="h-4 w-4 text-[#2496ED]" /> },
      {
        name: "AWS",
        icon: <SiAmazonwebservices className="h-4 w-4 text-[#FF9900]" />,
      },
      {
        name: "Vercel",
        icon: <SiVercel className="h-4 w-4 dark:text-white text-[#000000]" />,
      },
      {
        name: "CI/CD",
        icon: <Infinity className="h-4 w-4 text-muted-foreground" />,
      },
      { name: "Jest", icon: <SiJest className="h-4 w-4 text-[#C21325]" /> },
      {
        name: "Cypress",
        icon: <SiCypress className="h-4 w-4 dark:text-white text-[#17202C]" />,
      },
    ],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 md:py-28">
      <div className="container px-4 md:px-6 mx-auto">
        {/* Section header */}
        <div className="flex flex-col items-center justify-center text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            Toolkit
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
            My Skills
          </h2>
          <p className="max-w-[600px] text-muted-foreground md:text-lg">
            Technologies and tools I work with on a regular basis.
          </p>
          <div className="mt-5 h-1 w-16 bg-gradient-to-r from-primary to-primary/30 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-10">
          {skillCategories.map((category) => (
            <div key={category.name} className="space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="w-1 h-5 bg-primary rounded-full flex-shrink-0" />
                <h3 className="text-lg font-bold">{category.name}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-muted hover:bg-primary/10 hover:text-primary border border-transparent hover:border-primary/20 transition-all text-sm font-medium cursor-default"
                  >
                    <span
                      className="flex-shrink-0 leading-none"
                      aria-hidden="true"
                    >
                      {skill.icon}
                    </span>
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
