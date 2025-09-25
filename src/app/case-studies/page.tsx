import React from "react";
import "../styles/listPages.css";
import { CaseStudyList } from "./caseStudies";
import CaseItemCard from "./CaseItemCard";


function CaseStudySection() {
  return (
    <div>
      <div className="pages-title">
        <span>Case Studies & Analytics</span>
      </div>

      <div className="items-list">
        {CaseStudyList.map((project, index) => {
          return <CaseItemCard key={index} item={project} />;
        })}
      </div>
    </div>
  );
}

export default CaseStudySection;
