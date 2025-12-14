import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Briefcase, MapPin, Calendar } from "lucide-react";

// todo: remove mock data - replace with real experience
const sampleexperiences = [
  {
    company: "Current Company",
    role: "Frontend Developer",
    duration: "2022 - Present",
    location: "India",
    description: [
      "Led development of customer-facing React applications serving 100K+ users",
      "Implemented component library reducing development time by 40%",
      "Optimized bundle size by 35% through code splitting and lazy loading",
      "Collaborated with design team to establish design system standards",
    ],
    technologies: ["React", "TypeScript", "Redux Toolkit", "Tailwind CSS"],
  },
  {
    company: "Previous Company",
    role: "Junior Frontend Developer",
    duration: "2021 - 2022",
    location: "India",
    description: [
      "Built responsive web applications using React and modern JavaScript",
      "Integrated RESTful APIs and managed application state with Redux",
      "Participated in code reviews and implemented testing strategies",
      "Contributed to documentation and onboarding materials",
    ],
    technologies: ["React", "JavaScript", "SCSS", "REST APIs"],
  },
];

export function SampleExperienceSection() {
  return (
    <section
      id="experience"
      className="py-16 md:py-24 lg:py-32 bg-card/50"
      data-testid="section-experience"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            Career Journey
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Work Experience
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            My professional journey in software development
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px hidden md:block" />

          <div className="space-y-8">
            {sampleexperiences.map((exp, index) => (
              <div
                key={exp.company}
                className={`relative md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-12 md:ml-0" : "md:pl-12 md:ml-auto"
                }`}
              >
                <div className="hidden md:block absolute top-6 w-3 h-3 rounded-full bg-primary border-4 border-background z-10"
                  style={{
                    [index % 2 === 0 ? "right" : "left"]: "-6px",
                  }}
                />

                <Card
                  className="p-6 opacity-0 animate-fade-in-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                  data-testid={`card-experience-${index}`}
                >
                  <div className="space-y-4">
                    <div className="flex items-start justify-between gap-4 flex-wrap">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <Briefcase className="h-4 w-4 text-primary" />
                          <h3 className="font-bold text-lg">{exp.role}</h3>
                        </div>
                        <p className="font-medium text-muted-foreground">
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex flex-col items-end gap-1 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {exp.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li
                          key={i}
                          className="text-sm text-muted-foreground flex items-start gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
