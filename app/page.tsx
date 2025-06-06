import { HeroSection } from "@/components/hero-section";
import { ProjectsSection } from "@/components/projects-section";
import { SkillsSection } from "@/components/skills-section";
import { ContactSection } from "@/components/contact-section";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import ReactQueryProvider from "@/components/ReactQueryProvider";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow mx-auto">
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
        <ReactQueryProvider>
          <ContactSection />
        </ReactQueryProvider>
      </main>
      <Footer />
    </div>
  );
}

