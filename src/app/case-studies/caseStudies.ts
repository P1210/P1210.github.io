export interface CaseStudyItem {
  name: string;
  description: string;
  codeLink: string;
  demoLink: string;
  skills: string[];
}

export const CaseStudyList: CaseStudyItem[] = [
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
      "Spotify API",
      "DataViz (Tableau)",
      "EDA",
    ],
  },
];
