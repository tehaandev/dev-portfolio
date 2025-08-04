import { FadeIn } from "@/components/FadeIn";
import ReactQueryProvider from "@/components/ReactQueryProvider";
import { CredentialsSection } from "@/components/credentials-section";
import { ExperienceSection } from "@/components/experience-section";
import { HeroSection } from "@/components/hero-section";
import { Suspense, lazy } from "react";

// Lazy load components that are not immediately visible
const ProjectsSection = lazy(() =>
  import("@/components/projects-section").then((mod) => ({
    default: mod.ProjectsSection,
  }))
);
const SkillsSection = lazy(() =>
  import("@/components/skills-section").then((mod) => ({
    default: mod.SkillsSection,
  }))
);
const ContactSection = lazy(() =>
  import("@/components/contact-section").then((mod) => ({
    default: mod.ContactSection,
  }))
);

// Specialized loading fallbacks
function ProjectsSkeleton() {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="h-12 bg-gray-200 rounded-md w-80 mx-auto loading-skeleton"></div>
          <div className="h-6 bg-gray-200 rounded-md w-96 mx-auto loading-skeleton"></div>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-lg border-2 overflow-hidden"
            >
              <div className="aspect-video bg-gray-200 loading-skeleton"></div>
              <div className="p-6 space-y-4">
                <div className="h-6 bg-gray-200 rounded loading-skeleton"></div>
                <div className="h-4 bg-gray-200 rounded loading-skeleton"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4 loading-skeleton"></div>
                <div className="flex gap-2">
                  {[...Array(4)].map((_, j) => (
                    <div
                      key={j}
                      className="h-6 w-16 bg-gray-200 rounded-full loading-skeleton"
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillsSkeleton() {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="h-12 bg-gray-200 rounded-md w-80 mx-auto loading-skeleton"></div>
          <div className="h-6 bg-gray-200 rounded-md w-96 mx-auto loading-skeleton"></div>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="bg-white rounded-lg border p-6">
              <div className="h-6 bg-gray-200 rounded mb-4 loading-skeleton"></div>
              <div className="grid grid-cols-4 gap-4">
                {[...Array(8)].map((_, j) => (
                  <div
                    key={j}
                    className="h-12 bg-gray-200 rounded loading-skeleton"
                  ></div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSkeleton() {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="h-12 bg-gray-200 rounded-md w-80 mx-auto loading-skeleton"></div>
          <div className="h-6 bg-gray-200 rounded-md w-96 mx-auto loading-skeleton"></div>
        </div>
        <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-2">
          <div className="bg-white rounded-lg border p-6 space-y-4">
            <div className="h-6 bg-gray-200 rounded loading-skeleton"></div>
            <div className="h-32 bg-gray-200 rounded loading-skeleton"></div>
            <div className="h-10 bg-gray-200 rounded loading-skeleton"></div>
          </div>
          <div className="bg-white rounded-lg border p-6 space-y-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex items-center space-x-4">
                <div className="h-12 w-12 bg-gray-200 rounded-full loading-skeleton"></div>
                <div className="flex-1 space-y-2">
                  <div className="h-4 bg-gray-200 rounded loading-skeleton"></div>
                  <div className="h-3 bg-gray-200 rounded w-2/3 loading-skeleton"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow mx-auto w-full">
        <FadeIn>
          <HeroSection />
        </FadeIn>

        <Suspense fallback={<ProjectsSkeleton />}>
          <FadeIn>
            <ProjectsSection />
          </FadeIn>
        </Suspense>

        <Suspense fallback={<SkillsSkeleton />}>
          <FadeIn>
            <ExperienceSection />
          </FadeIn>
        </Suspense>

        <Suspense fallback={<SkillsSkeleton />}>
          <FadeIn>
            <CredentialsSection />
          </FadeIn>
        </Suspense>

        <Suspense fallback={<SkillsSkeleton />}>
          <FadeIn>
            <SkillsSection />
          </FadeIn>
        </Suspense>

        <ReactQueryProvider>
          <Suspense fallback={<ContactSkeleton />}>
            <FadeIn>
              <ContactSection />
            </FadeIn>
          </Suspense>
        </ReactQueryProvider>
      </main>
    </div>
  );
}

