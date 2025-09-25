import React from "react";
import { ProjectList } from "./projects";
import ProjectItemCard from "./ProjectItemCard";
import "../styles/listPages.css";

function ProjectSection() {
  return (
    <div>
      <div className="pages-title">
        <span>Featured Projects</span>
      </div>

      <div className="items-list">
        {ProjectList.map((project, index) => {
          return <ProjectItemCard key={index} item={project} />;
        })}
      </div>
    </div>
  );
}

export default ProjectSection;
