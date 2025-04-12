import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#111111]">
      <Navbar />
      <Hero />
      <div className="container mx-auto px-4">
        <section id="skills">
          <h2 className="text-lg font-light uppercase text-white tracking-wide mb-12">skills</h2>
          <Skills />
          <div className="h-px bg-[#C6C6C6]/30 w-full my-12"></div>
        </section>
        <section id="experience">
          <h2 className="text-lg font-light uppercase text-white tracking-wide mb-12">experience</h2>
          <Experience />
          <div className="h-px bg-[#C6C6C6]/30 w-full my-12"></div>
        </section>
        <section id="projects">
          <Projects />
          <div className="h-px bg-[#C6C6C6]/30 w-full my-12"></div>
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
    </main>
  );
}
