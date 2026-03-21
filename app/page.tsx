import ReactQueryProvider from "@/components/ReactQueryProvider";
import { HeroSection } from "@/components/hero-section";
import { SkillsSection } from "@/components/skills-section";
import { ExperienceSection } from "@/components/experience-section";
import { Suspense, lazy } from "react";

const ProjectsSection = lazy(() =>
  import("@/components/projects-section").then((mod) => ({
    default: mod.ProjectsSection,
  }))
);

const ContactSection = lazy(() =>
  import("@/components/contact-section").then((mod) => ({
    default: mod.ContactSection,
  }))
);

function SectionSkeleton() {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-8 py-8">
      <div className="h-8 w-48 bg-muted rounded loading-skeleton mb-12" />
      <div className="space-y-4">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="h-32 bg-muted rounded-lg loading-skeleton" />
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="pt-[4.5rem] space-y-16 md:space-y-24">
      <HeroSection />
      <SkillsSection />
      <ExperienceSection />

      <Suspense fallback={<SectionSkeleton />}>
        <ProjectsSection />
      </Suspense>

      <ReactQueryProvider>
        <Suspense fallback={<SectionSkeleton />}>
          <ContactSection />
        </Suspense>
      </ReactQueryProvider>
    </main>
  );
}
