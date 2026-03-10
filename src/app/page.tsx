import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import {
  AboutSection,
  ContactSection,
  ExperienceSection,
  HeroSection,
  ProjectsSection,
  ServicesSection,
  SkillsSection,
  TestimonialsSection,
} from "@/components/sections";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="relative overflow-hidden">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}

