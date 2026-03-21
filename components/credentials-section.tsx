import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GraduationCap, Award, Calendar, ExternalLink } from "lucide-react";

const education = [
  {
    id: 1,
    degree: "BSc. (Hons.) in Computer Science",
    institution: "University of Staffordshire (APIIT, Sri Lanka)",
    description:
      "Focused on software engineering, algorithms, and data structures. Completed senior capstone project on machine learning applications.",
  },
  {
    id: 2,
    degree: "GCE Advanced Level",
    institution: "Ananda College, Colombo",
  },
  {
    id: 3,
    degree: "GCE Ordinary Level",
    institution: "Ananda College, Colombo",
  },
];

const certifications = [
  {
    id: 1,
    name: "AWS Cloud Practitioner Essentials (awarded by Coursera)",
    issuer: "Amazon Web Services",
    year: "2024",
    link: "https://coursera.org/share/d24aaeeb96ff6b0ad41512491418de61",
  },
  {
    id: 2,
    name: "Meta Front-End Developer",
    issuer: "Meta",
    year: "2024",
    link: "https://coursera.org/share/21f801f207907e3081c66f31c81e3bf0",
  },
  {
    id: 3,
    name: "Introduction to Data Engineering",
    issuer: "IBM",
    year: "2025",
    link: "https://coursera.org/share/c22f4878316701b683510810ecb0e098",
  },
];

export function CredentialsSection() {
  return (
    <section id="credentials" className="py-20 md:py-28">
      <div className="container px-4 md:px-6 mx-auto">
        {/* Section header */}
        <div className="flex flex-col items-center justify-center text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            Background
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
            Credentials
          </h2>
          <p className="max-w-[600px] text-muted-foreground md:text-lg">
            My educational background, certifications, and achievements.
          </p>
          <div className="mt-5 h-1 w-16 bg-gradient-to-r from-primary to-primary/30 rounded-full" />
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Education */}
          <div className="space-y-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 text-primary">
                <GraduationCap className="h-5 w-5" />
              </div>
              <h3 className="text-2xl font-bold">Education</h3>
            </div>
            {education.map((edu) => (
              <Card
                key={edu.id}
                className="border-border/60 hover:border-primary/25 hover:shadow-sm transition-all duration-300 group"
              >
                <CardHeader className="pb-2">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 w-1 h-full min-h-[1.25rem] bg-gradient-to-b from-primary to-primary/20 rounded-full flex-shrink-0" />
                    <CardTitle className="text-base font-semibold leading-snug">
                      {edu.degree}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pl-7">
                  <p className="font-semibold text-primary text-sm mb-1.5">
                    {edu.institution}
                  </p>
                  {edu.description && (
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {edu.description}
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Certifications */}
          <div className="space-y-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 text-primary">
                <Award className="h-5 w-5" />
              </div>
              <h3 className="text-2xl font-bold">Certifications</h3>
            </div>
            {certifications.map((cert) => (
              <Card
                key={cert.id}
                className="border-border/60 hover:border-primary/25 hover:shadow-sm transition-all duration-300 group"
              >
                <CardHeader className="pb-2">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 w-1 h-full min-h-[1.25rem] bg-gradient-to-b from-primary to-primary/20 rounded-full flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-base font-semibold leading-snug">
                        {cert.name}
                      </CardTitle>
                      <CardDescription className="flex items-center gap-1.5 mt-1.5">
                        <Calendar className="h-3.5 w-3.5" />
                        {cert.year}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pl-7 pt-0">
                  <p className="font-semibold text-primary text-sm mb-3">
                    {cert.issuer}
                  </p>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink className="h-3 w-3" />
                    View Credential
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
