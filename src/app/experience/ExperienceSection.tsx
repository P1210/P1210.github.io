import { Card } from "@/components/ui/card";
import { EXPERIENCE_ITEMS, ExperienceItem } from "./entities";
import "./experienceSection.css";
import { ExperienceItemCard } from "./components/ExperienceItemCard";

export const ExperienceSection = () => (
  <div className="experience-block relative">
    <div className="timeline" />

    <div className="experience-grid">
      {EXPERIENCE_ITEMS.map((experience, index) => (
        <div
          key={`${experience.company}-${experience.role}`}
          className="relative"
        >
          <div className="dot" style={{ left: "calc(-2.5rem)" }} />
          <ExperienceItemCard experience={experience} />
        </div>
      ))}
    </div>
  </div>
);
