import { Card } from "@/components/ui/card";
import { Github } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Mail } from "lucide-react";

export const HeroCard = () => {
  return (
    <Card className="hero-card">
      <div className="hero-text">
        <h2 className="mb-4">hi, I&apos;m </h2>
        <h1>Pranjal Gupta</h1>

        <div className="profession">
          <div />
          <span>Software Engineer (Frontend)</span>
        </div>
        <p>
          Product focused Software Developer with 2.5+ years of experience,
          building user centered experiences.
        </p>
      </div>

      <div className="quick-links">
        <div>Fine me on : </div>
        <a href="#" className="item group" aria-label="Email">
          <Mail size={22} className="icon" />
        </a>
        <a href="#" className="item group" aria-label="LinkedIn">
          <Linkedin size={22} className="icon" />
        </a>
        <a href="#" className="item group" aria-label="GitHub">
          <Github size={22} className="icon" />
        </a>
      </div>
    </Card>
  );
};
