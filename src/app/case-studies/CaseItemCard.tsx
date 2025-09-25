import React from "react";
import { CaseStudyItem } from "./caseStudies";
import "../styles/listPages.css";
import TiltCard from "../utils/TiltCard";

// React components receive props as a single object, so you should wrap your props in an object.
// Right now item is typed as ProjectItem, but React is actually passing { item: ProjectItem }.

interface CaseItemCardProps {
  item: CaseStudyItem;
}

function CaseItemCard({ item }: CaseItemCardProps) {
  return (
    <TiltCard>
      <div className="item-card">
        <div className="item-title">{item.name}</div>
        <div className="item-description">{item.description}</div>
        <div className="item-chips">
          {item.skills.map((skill, index) => (
            <span className="chip" key={index}>
              {skill}
            </span>
          ))}
        </div>
        <div className="item-links">
          <a href={item.codeLink} target="_blank" className="link">
            Code
          </a>
          <a href={item.demoLink} target="_blank" className="link">
            Demo
          </a>
        </div>
      </div>
    </TiltCard>
  );
}

export default CaseItemCard;
