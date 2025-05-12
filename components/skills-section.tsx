import { Card, CardContent } from "@/components/ui/card";
import { FaCss3, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa6";
import {
  SiCypress,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiGit,
  SiGithub,
  SiGraphql,
  SiJavascript,
  SiJest,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiReacthookform,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { TbCloudComputing } from "react-icons/tb";

const skillCategories = [
  {
    name: "Frontend",
    skills: [
      { name: "HTML5", icon: <FaHtml5 className="h-4 w-4 text-[#E34F26]" /> },
      { name: "CSS3", icon: <FaCss3 className="h-4 w-4 text-[#1572B6]" /> },
      {
        name: "JavaScript",
        icon: <SiJavascript className="h-4 w-4 text-[#F7DF1E]" />,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript className="h-4 w-4 text-[#007ACC]" />,
      },
      { name: "React", icon: <FaReact className="h-4 w-4 text-[#61DAFB]" /> },
      {
        name: "Next.js",
        icon: <SiNextdotjs className="h-4 w-4 text-[#000000]" />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="h-4 w-4 text-[#06B6D4]" />,
      },
      { name: "Zustand", icon: "🔄" },
      { name: "React Query", icon: "🏝️" },
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
        icon: <FaNodeJs className="h-4 w-4 text-[#5FA04E]" />,
      },
      { name: "NestJS", icon: <SiNestjs className="h-4 w-4 text-[#E0234E]" /> },
      {
        name: "Express",
        icon: <SiExpress className="h-4 w-4 text-[#000000]" />,
      },
      {
        name: "GraphQL",
        icon: <SiGraphql className="h-4 w-4 text-[#E10098]" />,
      },
      { name: "REST API", icon: "🔌" },
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
      { name: "Prisma", icon: <SiPrisma className="h-4 w-4 text-[#2D3748]" /> },
    ],
  },
  {
    name: "DevOps & Tools",
    skills: [
      { name: "Git", icon: <SiGit className="h-4 w-4 text-[#F05032]" /> },
      { name: "GitHub", icon: <SiGithub className="h-4 w-4 text-[#181717]" /> },
      { name: "Docker", icon: <SiDocker className="h-4 w-4 text-[#2496ED]" /> },
      {
        name: "AWS",
        icon: <TbCloudComputing className="h-4 w-4 text-[#FF9900]" />,
      },
      { name: "Vercel", icon: <SiVercel className="h-4 w-4 text-[#000000]" /> },
      { name: "CI/CD", icon: "🔄" },
      { name: "Jest", icon: <SiJest className="h-4 w-4 text-[#C21325]" /> },
      {
        name: "Cypress",
        icon: <SiCypress className="h-4 w-4 text-[#17202C]" />,
      },
    ],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              My Skills
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Technologies and tools I work with on a regular basis.
            </p>
          </div>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {skillCategories.map((category) => (
            <Card key={category.name} className="overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">{category.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-1.5 bg-muted px-3 py-1.5 rounded-lg text-sm font-medium"
                    >
                      <span className="text-lg" aria-hidden="true">
                        {skill.icon}
                      </span>
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

