import { Github } from "lucide-react";
import { ChartLine } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Mail } from "lucide-react";

export interface SocialItem {
  title: string;
  data?: string;
  onClick: () => void;
  icon: React.ReactNode;
}
export const SOCIAL_LINKS: SocialItem[] = [
  {
    title: "Email",
    data: "gpranjal1210@gmail.com",
    onClick: () => {
      window.location.href = "mailto:gpranjal1210@gmail.com";
    },
    icon: <Mail size={22} />,
  },
  {
    title: "LinkedIn",
    data: "linkedin.com/in/pranjal-gupta-b3320719b",
    onClick: () => {
      window.open(
        "https://www.linkedin.com/in/pranjal-gupta-b3320719b/",
        "_blank"
      );
    },
    icon: <Linkedin size={22} />,
  },
  {
    title: "Github",
    data: "github.com/P1210",
    onClick: () => {
      window.open("https://github.com/P1210", "_blank");
    },
    icon: <Github size={22} />,
  },
  {
    title: "Tableau Profile",
    data: "public.tableau.com/profile/pranjal.gupta2945",
    onClick: () => {
      window.open(
        "https://public.tableau.com/app/profile/pranjal.gupta2945",
        "_blank"
      );
    },
    icon: <ChartLine size={22} />,
  },
];
