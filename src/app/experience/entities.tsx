export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  location?: string;
  highlights: string[];
  technologies?: string[];
};

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    company: "QuickGov Solutions",
    role: "Software Developer",
    period: "2023 — Present",
    location: "India",
    highlights: [
      "Developed several responsive and accessible web applications using React.js, Redux Toolkit and JavaScript.",
      "Built and optimized secure, multi-tenant integration payment systems with TDD and improved performance.",
      "Implemented role-based admin dashboards, feature management, authentication, reporting, and real-time event updates.",
    ],
    technologies: ["React", "JavaScript", "TypeScript", "Next.js"],
  },
] as const;
