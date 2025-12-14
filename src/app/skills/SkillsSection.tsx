import { DetailCard } from "./components/DetailCard";
import "./skillSection.css";
import { skillsConfig } from "./entities";
import { TechStacks } from "./components/TechStack";

export const SkillsSection = () => {
  return (
    <div className="skills-section">
      <DetailCard />
      {/* <div className="tech-stack-section">
        <div className="header"> Tech Stack and Skills </div>
        {skillsConfig.map((skills) => (
          <TechStacks key={skills.title} data={skills} />
        ))}
      </div> */}
      {skillsConfig.map((skills) => (
        <TechStacks key={skills.title} data={skills} />
      ))}
    </div>
  );
};
