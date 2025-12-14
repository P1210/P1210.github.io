import React, { memo, useCallback } from "react";
import { ProjectItem } from "../entities";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { ExternalLink } from "lucide-react";

interface ProjectItemCardProps {
  item: ProjectItem;
}

function ProjectItemCard({ item }: ProjectItemCardProps) {
  const { name, description, codeLink, demoLink, skills } = item;

  const handleCodeClick = useCallback(() => {
    if (codeLink) window.open(codeLink, "_blank", "noopener,noreferrer");
  }, [codeLink]);

  const handleDemoClick = useCallback(() => {
    if (demoLink) window.open(demoLink, "_blank", "noopener,noreferrer");
  }, [demoLink]);

  return (
    <div className="item-card">
      <div className="item-title">{name}</div>
      <div className="item-description">{description}</div>
      <div className="item-chips">
        {skills.map((skill) => (
          <span className="chip" key={skill}>
            {skill}
          </span>
        ))}
      </div>
      <div className="item-links">
        {codeLink && (
          <Button
            variant="ghost"
            size="sm"
            className="link"
            onClick={handleCodeClick}
          >
            <Github className="h-4 w-4" />
            Code
          </Button>
        )}
        {demoLink && (
          <Button
            variant="ghost"
            size="sm"
            className="link"
            onClick={handleDemoClick}
          >
            <ExternalLink className="h-4 w-4" />
            Demo
          </Button>
        )}
      </div>
    </div>
  );
}

export default ProjectItemCard;
