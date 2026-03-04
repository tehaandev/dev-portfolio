import { Badge } from "@/components/ui/badge";
import { Building, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    id: 3,
    title: "Software Engineer",
    company: "Avonet Technologies (Pvt) Ltd",
    location: "Hybrid",
    period: "Aug 2025 - Present",
    type: "Full-time",
    isCurrent: true,
    description: [],
    technologies: [],
  },
  {
    id: 2,
    title: "Software Engineer",
    company: "Amplify Solutions",
    location: "Remote",
    period: "Mar 2024 - Jun 2025",
    type: "Contract",
    isCurrent: false,
    description: [
      "Built a sales management system with fraud detection using Node.js, Next.js, and Zustand.",
      "Developed a legal research platform with optimized querying via MongoDB Atlas Search.",
      "Managed AWS infrastructure and automated CI/CD pipelines with GitHub Actions and Docker Compose.",
    ],
    technologies: [
      "React",
      "Next.js",
      "NestJS",
      "Node.js",
      "AWS",
      "Docker",
      "PostgreSQL",
    ],
  },
  {
    id: 1,
    title: "Software Engineering Intern",
    company: "Calcey Technologies LLC",
    location: "Colombo, Sri Lanka",
    period: "Jun 2022 - Dec 2022",
    type: "Full-time",
    isCurrent: false,
    description: [
      "Collaborated with Agile teams to design and develop applets.",
      "Participated in Agile ceremonies to ensure seamless workflows.",
      "Conducted developer testing to deliver high-quality code.",
    ],
    technologies: [
      "React",
      "Angular",
      "Node.js",
      "SQLite",
      "Tailwind CSS",
      "Vercel",
    ],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 md:py-28 bg-muted/30">
      <div className="container px-4 md:px-6 mx-auto">
        {/* Section header */}
        <div className="flex flex-col items-center justify-center text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            Career
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
            Work Experience
          </h2>
          <p className="max-w-[600px] text-muted-foreground md:text-lg">
            My professional journey and the roles that have shaped my career.
          </p>
          <div className="mt-5 h-1 w-16 bg-gradient-to-r from-primary to-primary/30 rounded-full" />
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Timeline */}
          <div className="relative pl-8 space-y-8">
            {/* Vertical line */}
            <div className="absolute left-[11px] top-0 bottom-0 w-px bg-gradient-to-b from-primary via-border to-transparent" />

            {experiences.map((experience) => (
              <div key={experience.id} className="relative">
                {/* Dot */}
                <div
                  className={`absolute z-10 w-3 h-3 rounded-full border-2 border-background ${
                    experience.isCurrent
                      ? "bg-primary shadow-md shadow-primary/40"
                      : "bg-muted-foreground/50"
                  }`}
                  style={{ left: "-27px", top: "20px" }}
                >
                  {experience.isCurrent && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping-slow opacity-60" />
                  )}
                </div>

                {/* Card */}
                <div
                  className={`rounded-2xl border p-6 shadow-sm hover:shadow-md transition-all duration-300 ${
                    experience.isCurrent
                      ? "bg-primary/5 border-primary/30 border-l-4 border-l-primary"
                      : "bg-card border-border/60 hover:border-primary/20"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-lg font-bold leading-tight">
                        {experience.title}
                      </h3>
                      {experience.isCurrent && (
                        <span className="inline-block mt-1.5 text-xs font-semibold text-primary bg-primary/10 px-2.5 py-0.5 rounded-full">
                          Current
                        </span>
                      )}
                    </div>
                    <Badge
                      className="w-fit flex-shrink-0"
                      variant={
                        experience.type === "Full-time" ? "default" : "outline"
                      }
                    >
                      {experience.type}
                    </Badge>
                  </div>

                  <div className="space-y-1.5 mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Building className="h-3.5 w-3.5 flex-shrink-0" />
                      <span className="font-semibold text-foreground/80">
                        {experience.company}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-3.5 w-3.5 flex-shrink-0" />
                      <span>{experience.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-3.5 w-3.5 flex-shrink-0" />
                      <span>{experience.period}</span>
                    </div>
                  </div>

                  {experience.description.length > 0 && (
                    <ul className="space-y-2 mb-4">
                      {experience.description.map((item, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-muted-foreground flex items-start gap-2.5"
                        >
                          <span className="mt-2 w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {experience.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                      {experience.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs bg-muted/80 hover:bg-primary/10 hover:text-primary transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
