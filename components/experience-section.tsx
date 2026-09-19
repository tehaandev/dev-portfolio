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
    <section id="experience" className="mx-auto max-w-7xl px-6 md:px-10">
      <SectionHeading index="02" label="Experience">
        Where the work has <em className="text-muted-foreground">happened.</em>
      </SectionHeading>

      <ol className="border-border border-b">
        {experiences.map((exp) => (
          <li
            key={exp.id}
            className="border-border group grid grid-cols-1 gap-4 border-t py-10 md:grid-cols-12 md:gap-10">
            <div className="md:col-span-3">
              <p className="eyebrow text-foreground/70">{exp.period}</p>
              {exp.isCurrent && (
                <p className="eyebrow mt-3 flex items-center gap-2">
                  <span className="bg-wine h-1.5 w-1.5 rounded-full" />
                  Current
                </p>
              )}
            </div>

            <div className="md:col-span-6">
              <h3 className="font-serif text-3xl leading-tight md:text-4xl">
                {exp.company}
              </h3>
              <p className="text-muted-foreground mt-2 text-sm">
                {exp.title} · {exp.location}
              </p>
              {exp.description && (
                <p className="text-muted-foreground mt-6 max-w-xl text-[0.9375rem] leading-relaxed">
                  {exp.description}
                </p>
              )}
            </div>

            {exp.technologies.length > 0 && (
              <p className="eyebrow leading-6 md:col-span-3 md:text-right">
                {exp.technologies.join(" / ")}
              </p>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}
