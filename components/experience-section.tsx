import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    id: 3,
    title: "Software Engineer",
    company: "Fosterli Ltd.",
    location: "Remote (UK)",
    period: "Nov 2023 - Present",
    type: "Freelance",
    description: [
      "Developed a full-stack web application to automate foster care processes, enhancing efficiency and user experience.",
      "Designed a dynamic multi-step form system for improved data collection.",
      "Implemented field-level assignments, enabling assessors to assign specific form fields to foster carers for completion and submission.",
      "Integrated real-time WebSocket notifications for enhanced user engagement.",
    ],
    technologies: [
      "React",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "Docker",
    ],
  },
  {
    id: 2,
    title: "Software Engineer",
    company: "Amplify Solutions",
    location: "Remote",
    period: "Mar 2024 - Jun 2025",
    type: "Contract",
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
    <section id="experience" className="py-16 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Work Experience
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              My professional journey and the roles that have shaped my career.
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-border"></div>

            {experiences.map((experience, index) => (
              <div key={experience.id} className="relative mb-8 md:mb-12">
                {/* Timeline dot */}
                <div className="absolute left-2 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>

                {/* Content */}
                <div
                  className={`ml-12 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-8" : "md:ml-auto md:pl-8"
                  }`}
                >
                  <Card className="shadow-lg">
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <CardTitle className="text-lg md:text-xl">
                          {experience.title}
                        </CardTitle>
                        <Badge
                          className="w-fit mb-2 sm:mb-0"
                          variant={
                            experience.type === "Full-time"
                              ? "default"
                              : experience.type === "Freelance"
                                ? "secondary"
                                : "outline"
                          }
                        >
                          {experience.type}
                        </Badge>
                      </div>
                      <CardDescription className="space-y-1">
                        <div className="flex items-center gap-2">
                          <Building className="h-4 w-4" />
                          <span className="font-semibold">
                            {experience.company}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          <span>{experience.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>{experience.period}</span>
                        </div>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 mb-4">
                        {experience.description.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className="text-sm text-muted-foreground flex items-start gap-2"
                          >
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

