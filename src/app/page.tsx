"use client";
import { Card } from "@/components/ui/card";
import "./styles/homePage.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FileText, Folder, Layout, Mail, Terminal } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Github } from "lucide-react";

interface SidebarItem {
  title: string;
  data?: string;
  icon: React.ReactNode;
}

const SIDEBAR_ITEMS: SidebarItem[] = [
  {
    title: "Resume Link",
    data: "/Pranjal_Gupta_resume.pdf",
    icon: <FileText size={20} />,
  },
  { title: "Featured Projects", data: "/projects", icon: <Folder size={20} /> },
  {
    title: "Product Case Studies",
    data: "/case-studies",
    icon: <Layout size={20} />,
  },
  { title: "Tech Stack", data: "/experience", icon: <Terminal size={20} /> },
] as const;

export const SidebarCard = ({ title, data, icon }: SidebarItem) => {
  const router = useRouter();

  const handleClick = () => {
    if (data?.endsWith(".pdf")) {
      window.open(data, "_blank");
    } else {
      router.push(data || "/");
    }
  };

  return (
    <div className="sidebar-item" onClick={handleClick}>
      {/* column layout in middle screens */}
      <div className="sidebar-item-title">
        {icon}
        <h3>{title}</h3>
      </div>
      <span>→</span>
    </div>
  );
};

const HeroCard = () => (
  <Card className="hero-card">
    <div className="hero-text">
      Product-focused <span className="highlight-text">frontend developer</span>{" "}
      building user-centered digital experiences.
    </div>
  </Card>
);

const ProfileCard = () => (
  <Card className="profile-card">
    <Image
      src="/luna-reading.svg"
      alt="Frontend developer profile illustration"
      rel="preload"
      height={200}
      width={100}
      className="profile-image"
      priority
    />
  </Card>
);

const AboutCard = () => (
  <Card className="about-card">
    I am a Software Developer working in QuickGov Solutions, specializing in
    React, JavaScript, and modern web technologies. My work merges technical
    expertise with product thinking to create thoughtful, compelling digital
    solutions. With a background in frontend developement, I bring a unique
    perspective to user experience and product development, always focusing on
    building applications that truly serve user needs and business objectives.
  </Card>
);

const ContactCard = () => {
  const contacts = [
    {
      icon: <Mail size={22} />,
      label: "Email",
      action: () => (window.location.href = "mailto:gpranjal1210@gmail.com"),
    },
    {
      icon: <Linkedin size={22} />,
      label: "LinkedIn",
      action: () =>
        window.open(
          "https://www.linkedin.com/in/pranjal-gupta-b3320719b/",
          "_blank"
        ),
    },
    {
      icon: <Github size={22} />,
      label: "GitHub",
      action: () => window.open("https://github.com/P1210", "_blank"),
    },
  ];

  return (
    <Card className="contact-box p-6">
      <div className="contact-title">
        Contact me ?
      </div>
      <div className="contact-icons ">
        {contacts.map(({ icon, label, action }) => (
          <button
            key={label}
            onClick={action}
            className="icon"
            aria-label={label}
          >
            {icon}
          </button>
        ))}
      </div>
    </Card>
  );
};

export default function Home() {
  return (
    <div className="flex flex-col gap-6 animate-fadeIn">
      {/* Main Grid */}
      <div className="top-container">
        <HeroCard />
        <ProfileCard />

        {/* Sidebar Navigation */}
        <div className="sidebar">
          {SIDEBAR_ITEMS.map((item) => (
            <SidebarCard
              key={item.title}
              title={item.title}
              data={item.data}
              icon={item.icon}
            />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-4 md:gap-6">
        <AboutCard />
        <ContactCard />
      </div>
    </div>
  );
}
