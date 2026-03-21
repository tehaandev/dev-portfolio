const experiences = [
  {
    id: 3,
    title: "Software Engineer",
    company: "Avonet Technologies",
    location: "Hybrid",
    period: "Aug 2025 — Present",
    isCurrent: true,
    description: "",
    technologies: [],
  },
  {
    id: 2,
    title: "Software Engineer",
    company: "Amplify Solutions",
    location: "Remote",
    period: "Mar 2024 — Jun 2025",
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
    period: "Jun 2022 — Dec 2022",
    isCurrent: false,
    description:
      "Collaborated with Agile teams to design and develop applets. Participated in Agile ceremonies and conducted developer testing to deliver high-quality code.",
    technologies: ["React", "Angular", "Node.js", "Tailwind CSS"],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="mx-auto max-w-7xl px-6 py-8 md:px-8">
      <h2 className="mb-12 text-3xl font-bold tracking-tight">
        Experience{" "}
        <span className="text-muted-foreground ml-4 font-mono text-sm">
          / LOG: 003
        </span>
      </h2>

      <div className="space-y-4">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="group bg-card hover:bg-muted grid grid-cols-1 items-start gap-6 rounded-lg p-8 transition-colors duration-300 md:grid-cols-12">
            {/* Date column */}
            <div className="md:col-span-3">
              <p className="text-muted-foreground text-[0.6875rem] font-bold tracking-widest uppercase">
                {exp.period}
              </p>
              {exp.isCurrent && (
                <span className="text-primary mt-2 inline-block font-mono text-[0.6875rem] tracking-wider uppercase">
                  [Current]
                </span>
              )}
            </div>

            {/* Title + description column */}
            <div className="md:col-span-6">
              <h3 className="text-foreground group-hover:text-primary text-xl font-bold transition-colors duration-200">
                {exp.title}
              </h3>
              <p className="text-muted-foreground mt-1 mb-3 text-sm">
                {exp.company} · {exp.location}
              </p>
              {exp.description && (
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {exp.description}
                </p>
              )}
            </div>

            {/* Tech tags column */}
            <div className="flex flex-wrap gap-2 md:col-span-3 md:justify-end">
              {exp.technologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-secondary text-secondary-foreground rounded-sm px-2 py-1 text-[10px] tracking-wide uppercase">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
