import { FadeIn } from "@/components/FadeIn";
import { SectionHeading } from "@/components/section-heading";

const experiences = [
  {
    id: 4,
    title: "Software Engineer",
    company: "Fosterli",
    location: "Bristol, United Kingdom · Remote",
    period: "Oct 2024 - Present",
    isCurrent: true,
    description:
      "Full-time since Sep 2026, after nearly two years building the platform as a freelance software engineer.",
    technologies: [],
  },
  {
    id: 3,
    title: "Software Engineer",
    company: "Avonet Technologies",
    location: "Colombo, Sri Lanka · Hybrid",
    period: "Aug 2025 - Present",
    isCurrent: true,
    description:
      "Full-time from Aug 2025, continuing on a contract basis since Aug 2026.",
    technologies: [],
  },
  {
    id: 2,
    title: "Software Engineer",
    company: "Amplify Solutions",
    location: "Remote",
    period: "Mar 2024 - Jun 2025",
    isCurrent: false,
    description:
      "Built a sales management system with fraud detection using Node.js, Next.js, and Zustand. Developed a legal research platform with optimised querying via MongoDB Atlas Search. Managed AWS infrastructure and automated CI/CD pipelines.",
    technologies: ["React", "Next.js", "NestJS", "AWS", "Docker", "PostgreSQL"],
  },
  {
    id: 1,
    title: "Software Engineering Intern",
    company: "Calcey Technologies",
    location: "Colombo, Sri Lanka",
    period: "Jun 2022 - Dec 2022",
    isCurrent: false,
    description:
      "Collaborated with Agile teams to design and develop applets. Participated in Agile ceremonies and conducted developer testing to deliver high-quality code.",
    technologies: ["React", "Angular", "Node.js", "Tailwind CSS"],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-5 md:px-8">
      <SectionHeading label="Experience">
        Where the work has happened.
      </SectionHeading>

      <FadeIn>
        <ol className="surface overflow-hidden">
          {experiences.map((exp) => (
            <li
              key={exp.id}
              // Inset separator between rows, like an iOS grouped list
              className="after:bg-border relative grid grid-cols-1 gap-3 px-6 py-7 after:absolute after:inset-x-6 after:bottom-0 after:h-px last:after:hidden md:grid-cols-12 md:gap-8 md:px-8 md:after:inset-x-8">
              <div className="md:col-span-3">
                <p className="text-muted-foreground text-sm tabular-nums">
                  {exp.period}
                </p>
                {exp.isCurrent && (
                  <p className="bg-wine/10 text-wine mt-2 inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-semibold">
                    <span className="bg-wine h-1.5 w-1.5 rounded-full" />
                    Current
                  </p>
                )}
              </div>

              <div className="md:col-span-6">
                <h3 className="text-2xl font-semibold tracking-[-0.022em]">
                  {exp.company}
                </h3>
                <p className="text-muted-foreground mt-1 text-[0.9375rem]">
                  {exp.title} · {exp.location}
                </p>
                {exp.description && (
                  <p className="text-foreground/80 mt-4 max-w-xl text-[0.9375rem] leading-relaxed">
                    {exp.description}
                  </p>
                )}
              </div>

              {exp.technologies.length > 0 && (
                <ul className="flex flex-wrap content-start gap-1.5 md:col-span-3 md:justify-end">
                  {exp.technologies.map((tech) => (
                    <li
                      key={tech}
                      className="bg-secondary text-muted-foreground rounded-full px-2.5 py-0.5 text-xs font-medium">
                      {tech}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ol>
      </FadeIn>
    </section>
  );
}
