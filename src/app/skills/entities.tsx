import { Layers, Terminal, Award } from "lucide-react";

export interface SkillCategory {
  title: string;
  color: string;
  icon: React.ReactNode;
  items: string[];
}

export const skillsConfig: SkillCategory[] = [
  {
    title: "Tech Stack and Skills",
    color: "bg-black",
    icon: <Layers className="w-4 h-4 text-white" />,
    items: [
      "React",
      "JavaScript (ES6+)",
      "Redux Toolkit",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "SASS",
      "Material UI",
      "Shadcn UI",
      "Vite",
      "TypeScript",
      "Git",
      "Agile / Scrum",
      "Frontend Architecture",
      "Responsive Design",
      "Component Modularity & Reusability",
      "Code Optimization & Performance",
      "Jest / React Testing",
      "Test Driven Development (TDD)",
      "RESTful API Integration",
      "Stripe Integration",
    ],
  },
];

// export const skillsConfig: SkillCategory[] = [
//   {
//     title: "Frontend Technologies",
//     color: "bg-black",
//     icon: <Layers className="w-4 h-4 text-white" />,
//     items: [
//       "React",
//       "Redux Toolkit",
//       "HTML5",
//       "CSS3",
//       "JavaScript (ES6+)",
//       "Vite",
//       "Tailwind CSS",
//       "SASS",
//       "Material-UI",
//       "TypeScript",
//       "RESTful API integration",
//     ],
//   },
//   {
//     title: "Testing",
//     color: "bg-purple-600",
//     icon: <Award className="w-4 h-4 text-white" />,
//     items: ["Jest", "Test Driven Development", "BDD frameworks"],
//   },
//   // {
//   //   title: "Backend & APIs",
//   //   color: "bg-blue-600",
//   //   icon: <Terminal className="w-4 h-4 text-white" />,
//   //   items: ["Python", "FastAPI", "RESTful API integration"],
//   // },
//   {
//     title: "Performance & Best Practices",
//     color: "bg-green-600",
//     icon: <Award className="w-4 h-4 text-white" />,
//     items: [
//       "Code and Performance Optimization",
//       "Responsive Design",
//       "Accessibility",
//       "Component modularity and reusability",
//       "UI/UX",
//       "Frontend Architecture",
//     ],
//   },
//   {
//     title: "Tools & Other",
//     color: "bg-gray-700",
//     icon: <Terminal className="w-4 h-4 text-white" />,
//     items: [
//       "Jira",
//       "Git",
//       "Agile/Scrum",
//       "CI/CD",
//       "Docker",
//       "Stripe Integration",
//       "Problem Solving",
//       "Collaboration Communication",
//     ],
//   },
// ];
