import React from "react";
import { ProjectList } from "./entities";
import ProjectItemCard from "./components/ProjectItemCard";
import "./projectSection.css";
import { ProjectCarousel } from "./components/ProjectCarousel";

export const ProjectSection = () => {
  return (
    <>
      {/* Grid view for larger screens */}
      <div className="project-list project-grid">
        {ProjectList.map((project) => (
          <ProjectItemCard key={project.name} item={project} />
        ))}
      </div>
      {/* Carousel view for smaller screens */}
      <div className="project-carousel-wrapper">
        <ProjectCarousel />
      </div>
    </>
  );
};
