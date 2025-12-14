import { Card } from "@/components/ui/card";
import { ExperienceItem } from "../entities";
import { Briefcase } from "lucide-react";
import { Calendar } from "lucide-react";
import { MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const ExperienceItemCard = ({
  experience,
}: {
  experience: ExperienceItem;
}) => (
  <Card className="experience-card">
    <div className="header">
      <div className="title-company">
        <div>
          <Briefcase className="icon" />
          <h3>{experience.role}</h3>
        </div>
        <p>{experience.company}</p>
      </div>
      <div className="flex flex-col items-end gap-1 text-sm text-brand-muted">
        <span className="flex items-center gap-1">
          <Calendar className="h-3 w-3 text-accent-blue" />
          {experience?.period || ""}
        </span>
        {/* {experience?.location && (
          <span className="flex items-center gap-1">
            <MapPin className="h-3 w-3 text-accent-blue" />
            {experience.location}
          </span>
        )} */}
      </div>
    </div>

    <ul className="space-y-1">
      {experience.highlights.map((item, i) => (
        <li key={i} className="text-sm text-slate-400 flex items-start gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent-blue)] flex-shrink-0 mt-[0.375rem]" />
          {item}
        </li>
      ))}
    </ul>

    {/* {experience.technologies && experience.technologies.length > 0 && (
      <div className="flex flex-wrap gap-2 pt-2">
        {experience.technologies.map((tech) => (
          <Badge
            key={tech}
            variant="secondary"
            className="text-xs bg-[rgba(255,255,255,0.05)] text-brand-light border-[rgba(255,255,255,0.1)]"
          >
            {tech}
          </Badge>
        ))}
      </div>
    )} */}
  </Card>
);
