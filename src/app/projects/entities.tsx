export interface ProjectItem {
  name: string;
  description: string;
  codeLink: string;
  demoLink: string;
  skills: string[];
}

export const ProjectList: ProjectItem[] = [
  {
    name: "Ambient Sound Mood Board",
    description:
      "Sound Mood Board 🎵🧘‍♂️ is a web app designed to enhance focus, relaxation, and creativity by immersing users in ambient soundscapes. It combines a customizable sound library with a built-in Pomodoro timer to create the perfect environment for deep work, study, or meditation.",
    codeLink: "https://github.com/P1210/sound-mood-board",
    demoLink: "https://sound-mood-board.vercel.app/",
    skills: ["React.js", "Tailwind", "Vite", "Hooks", "State Management"],
  },
  {
    name: "Aethetic Clock Widget",
    description:
      "A cute and cozy animated clock background featuring custom avatar character who hangs out under a tree. The background changes with the time of day, and everything is brought to life with subtle animations like fluttering petals, glowing fireflies, and soft breezes.",
    codeLink: "https://github.com/P1210/clock-widget",
    demoLink: "https://p1210.github.io/clock-widget/",
    skills: ["React.js", "SCSS", "Vite", "Framer Motion", "Figma"],
  },
  {
    name: "Taylor Swift Album Analysis",
    description:
      "Built an interactive dashboard that visualizes trends in Taylor Swift’s music, analyzing tempo, energy, and mood across albums. Translated raw Spotify data into actionable insights, helping users explore evolution and discover patterns in her music.",
    codeLink: "https://github.com/P1210/Taylor-Swift-albums-analysis",
    demoLink:
      "https://public.tableau.com/app/profile/pranjal.gupta2945/viz/TaylorSwiftAlbumsAnalysis/Analysis",
    skills: [
      "Product thinking",
      "Data-Driven Decision Making",
      "Python",
      "DataViz (Tableau)",
      "EDA",
    ],
  },
];
