"use client";
import dynamic from "next/dynamic";
import "./styles/homePage.css";
import { Navbar } from "./utils/Navbar";
import { SectionHeading } from "./utils/SectionHeading";
import { AboutSection } from "./about/AboutSection";
import { SkillsSection } from "./skills/SkillsSection";

const ProjectSection = dynamic(() => import("./projects/ProjectSection").then(mod => ({ default: mod.ProjectSection })), {
  loading: () => <div className="project-list" />,
});

const ExperienceSection = dynamic(() => import("./experience/ExperienceSection").then(mod => ({ default: mod.ExperienceSection })), {
  loading: () => <div className="experience-block relative" />,
});

const ContactSection = dynamic(() => import("./contact/ContactSection"), {
  loading: () => <div className="social" />,
});

const Footer = dynamic(() => import("./utils/Footer").then(mod => ({ default: mod.Footer })));


export default function Home() {
  return (
    <div className="home-page-sections">
      <Navbar />
      <main>
        <section id="home" className="about-section">
          <AboutSection />
        </section>
        <section id="skills">
          <SkillsSection />
        </section>

        <section id="experience">
          <SectionHeading
            title="Work Experience"
            subtitle="Cross-functional collaboration with measurable impact"
          />
          <ExperienceSection />
        </section>

        <section id="projects">
          <SectionHeading
            title="Featured Projects"
            subtitle="Shipped interfaces that blend polish and pragmatism"
          />
          <ProjectSection />
        </section>

        <section id="contact">
          <SectionHeading
            title="Let's build something together ?"
            subtitle="I'd love to hear from you to discuss new opportunities and challenges."
          />
          <ContactSection />
        </section>
      </main>

      <Footer />
    </div>
  );
}
