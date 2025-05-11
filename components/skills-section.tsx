import { Card, CardContent } from "@/components/ui/card"

const skillCategories = [
  {
    name: "Frontend",
    skills: [
      { name: "HTML5", icon: "🌐" },
      { name: "CSS3", icon: "🎨" },
      { name: "JavaScript", icon: "📜" },
      { name: "TypeScript", icon: "📘" },
      { name: "React", icon: "⚛️" },
      { name: "Next.js", icon: "▲" },
      { name: "Tailwind CSS", icon: "🌊" },
      { name: "Redux", icon: "🔄" },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", icon: "🟢" },
      { name: "Express", icon: "🚂" },
      { name: "Python", icon: "🐍" },
      { name: "Django", icon: "🎯" },
      { name: "GraphQL", icon: "⚡" },
      { name: "REST API", icon: "🔌" },
    ],
  },
  {
    name: "Database",
    skills: [
      { name: "MongoDB", icon: "🍃" },
      { name: "PostgreSQL", icon: "🐘" },
      { name: "MySQL", icon: "🐬" },
      { name: "Firebase", icon: "🔥" },
      { name: "Prisma", icon: "📊" },
    ],
  },
  {
    name: "DevOps & Tools",
    skills: [
      { name: "Git", icon: "📚" },
      { name: "GitHub", icon: "🐙" },
      { name: "Docker", icon: "🐳" },
      { name: "AWS", icon: "☁️" },
      { name: "Vercel", icon: "▲" },
      { name: "CI/CD", icon: "🔄" },
      { name: "Jest", icon: "🃏" },
      { name: "Cypress", icon: "🧪" },
    ],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Skills</h2>
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
  )
}
