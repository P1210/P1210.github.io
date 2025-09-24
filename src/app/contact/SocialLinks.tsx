"use client";
import { Copy } from "lucide-react";
import { Terminal, Mail, Github, ChartLine, Linkedin } from "lucide-react";
import React, { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Check } from "lucide-react";
import { CircleCheckBig } from "lucide-react";

interface SocialItem {
  title: string;
  data?: string;
  onClick: () => void;
  icon: React.ReactNode;
}

const ItemCard = ({ title, data, onClick, icon }: SocialItem) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent triggering main onClick
    setCopied(false);
    if (data) {
      navigator.clipboard.writeText(data);
    }
    try {
      if (data) {
        navigator.clipboard.writeText(data);
        setCopied(true);
        setTimeout(() => setCopied(false), 1000);
      }
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="social-item" onClick={onClick}>
      <div className="social-item-title">
        <div className="icon">{icon}</div>
        <div className="view">
          <div className="title">{title}</div>
          <div className="data">{data}</div>
        </div>
      </div>

      <div className={`copy ${copied ? "copied" : ""}`} onClick={handleCopy}>
        <Tooltip>
          <TooltipTrigger asChild>
            {copied ? (
              <Check className="check" size={16} />
            ) : (
              <Copy size={16} />
            )}
          </TooltipTrigger>
          <TooltipContent>Copy</TooltipContent>
        </Tooltip>
      </div>
    </div>
  );
};

function SocialLinks() {
  const SOCIAL_LINKS: SocialItem[] = [
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

  return (
    <div className="social">
      {SOCIAL_LINKS.map((item) => (
        <ItemCard
          key={item.title}
          title={item.title}
          data={item.data}
          onClick={item.onClick}
          icon={item.icon}
        />
      ))}
    </div>
  );
}

export default SocialLinks;
