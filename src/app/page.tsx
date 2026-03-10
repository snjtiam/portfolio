import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import {
  AboutSection,
  ContactSection,
  ExperienceSection,
  HeroSection,
  HighlightsStripSection,
  ProjectsSection,
  ServicesSection,
  SkillsSection,
  WhyWorkWithMeSection,
} from "@/components/sections";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="relative overflow-hidden">
        <HeroSection />
        <HighlightsStripSection />
        <AboutSection />
        <ServicesSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <WhyWorkWithMeSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
