import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Calendar } from "lucide-react";

const education = [
  {
    id: 1,
    degree: "BSc. (Hons.) in Computer Science",
    institution: "University of Staffordshire (APIIT, Sri Lanka)",
    year: "2023 - Present",
    gpa: "3.7",
    description:
      "Focused on software engineering, algorithms, and data structures. Completed senior capstone project on machine learning applications.",
  },
  {
    id: 2,
    degree: "GCE Advanced Level",
    institution: "Ananda College, Colombo",
    year: "2022",
  },
  {
    id: 3,
    degree: "GCE Ordinary Level",
    institution: "Ananda College, Colombo",
    year: "2019",
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

// const achievements = [
//   {
//     id: 1,
//     title: "Hackathon Winner",
//     description: "First place at TechCrunch Disrupt Hackathon 2023",
//     year: "2023",
//   },
//   {
//     id: 2,
//     title: "Open Source Contributor",
//     description: "Active contributor to React and Next.js repositories",
//     year: "2022 - Present",
//   },
//   {
//     id: 3,
//     title: "Dean's List",
//     description: "Academic excellence recognition for 4 consecutive semesters",
//     year: "2020 - 2022",
//   },
// ];

export function CredentialsSection() {
  return (
    <section id="credentials" className="py-16 md:py-24">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Credentials
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              My educational background, certifications, and achievements.
            </p>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 lg:px-12">
          {/* Education */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-bold">Education</h3>
            </div>
            {education.map((edu) => (
              <Card key={edu.id}>
                <CardHeader>
                  <CardTitle className="text-lg">{edu.degree}</CardTitle>
                  <CardDescription className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {edu.year}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-primary mb-2">
                    {edu.institution}
                  </p>
                  {edu.gpa && (
                    <Badge variant="secondary" className="mb-2">
                      GPA: {edu.gpa}
                    </Badge>
                  )}
                  <p className="text-sm text-muted-foreground">
                    {edu.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Certifications */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <Award className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-bold">Certifications</h3>
            </div>
            {certifications.map((cert) => (
              <Card key={cert.id}>
                <CardHeader>
                  <CardTitle className="text-lg">{cert.name}</CardTitle>
                  <CardDescription className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {cert.year}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-primary mb-2">
                    {cert.issuer}
                  </p>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-primary underline"
                  >
                    View Credential
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Achievements */}
          {/* <div className="space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <Award className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-bold">Achievements</h3>
            </div>
            {achievements.map((achievement) => (
              <Card key={achievement.id}>
                <CardHeader>
                  <CardTitle className="text-lg">{achievement.title}</CardTitle>
                  <CardDescription className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {achievement.year}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
}

