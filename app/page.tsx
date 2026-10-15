import ReactQueryProvider from "@/components/ReactQueryProvider";
import { ExperienceSection } from "@/components/experience-section";
import { HeroSection } from "@/components/hero-section";
import { ProjectsSection } from "@/components/projects-section";
import { SkillsSection } from "@/components/skills-section";
import { Suspense, lazy } from "react";

const ContactSection = lazy(() =>
  import("@/components/contact-section").then((mod) => ({
    default: mod.ContactSection,
  })),
);

export default function Home() {
  return (
    <main className="space-y-28 pb-28 md:space-y-40 md:pb-40">
      <HeroSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />

      <ReactQueryProvider>
        <Suspense fallback={<div className="min-h-[60vh]" />}>
          <ContactSection />
        </Suspense>
      </ReactQueryProvider>
    </main>
  );
}
