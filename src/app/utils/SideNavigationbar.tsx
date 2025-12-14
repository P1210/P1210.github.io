"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from "@/components/ui/sidebar";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useIsMobile } from "@/hooks/use-mobile";
import { FileText, Folder, Network, UserRound } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MouseEvent, ReactNode, useEffect, useState } from "react";
import "./styles/navigation.css";

const navItems: { title: string; sectionId: string; icon: ReactNode }[] = [
  { title: "About", sectionId: "about", icon: <UserRound /> },
  { title: "Projects", sectionId: "projects", icon: <Folder /> },
  { title: "Case Studies", sectionId: "case-studies", icon: <FileText /> },
  { title: "Experience", sectionId: "experience", icon: <Network /> },
];

export function SideNavigationBar() {
  const pathName = usePathname() || "/";
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  // Close the mobile menu on route change
  useEffect(() => {
    if (pathName) {
      setIsMenuOpen(false);
    }
  }, [pathName]);

  const isMobile = useIsMobile();

  const scrollToSection = (sectionId: string) => {
    if (typeof window === "undefined") return;

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(sectionId);
    }
  };

  const handleNavClick = (
    event: MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    event.preventDefault();
    scrollToSection(sectionId);
  };

  return (
    <>
      {isMobile && (
        <div className="navbar-container-mobile">
          <div className="nav-logo">Pranjal Gupta</div>

          <button
            className={`hamburger ${isMenuOpen ? "is-active" : ""}`}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <span className="hamburger-bar" />
            <span className="hamburger-bar" />
            <span className="hamburger-bar" />
          </button>

          <div
            id="mobile-menu"
            className={`mobile-menu ${isMenuOpen ? "mobile-menu-open" : ""}`}
          >
            <nav className="mobile-menu-content">
              {navItems.map((component) => {
                const href = `/#${component.sectionId}`;
                const isActive = activeSection === component.sectionId;
                return (
                  <Link
                    key={component.title}
                    href={href}
                    className={`mobile-link ${
                      isActive ? "mobile-link-active" : ""
                    }`}
                    onClick={(event) => {
                      handleNavClick(event, component.sectionId);
                      setIsMenuOpen(false);
                    }}
                  >
                    {component.title}
                  </Link>
                );
              })}

              <Link
                href="/#contact"
                className="mobile-cta"
                onClick={(event) => {
                  handleNavClick(event, "contact");
                  setIsMenuOpen(false);
                }}
              >
                Connect with me
              </Link>
            </nav>
          </div>
        </div>
      )}

      {!isMobile && (
        <Sidebar className="navbar-container ">
          <SidebarHeader>PG</SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              {navItems.map((item) => {
                const href = `/#${item.sectionId}`;
                const isActive = activeSection === item.sectionId;
                return (
                  <SidebarMenuItem key={item.title}>
                    <Tooltip>
                      <TooltipTrigger>
                        <SidebarMenuButton
                          asChild
                          isActive={isActive}
                          className={` ${isActive ? "menu-active" : ""}`}
                        >
                          <Link
                            href={href}
                            aria-label={`Go to ${item.title}`}
                            onClick={(event) =>
                              handleNavClick(event, item.sectionId)
                            }
                          >
                            {item.icon}
                          </Link>
                        </SidebarMenuButton>
                      </TooltipTrigger>
                      <TooltipContent side="left">{item.title}</TooltipContent>
                    </Tooltip>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarContent>
        </Sidebar>
      )}
    </>
  );
}

// dynamic import for navbar to avoid hydration errors in case of route changes
// import() is a function that returns a Promise that resolves to the module object, and it only accepts a module path as a string.
// dynamic() expects a Promise that resolves to a React component, receives a function that returns a Promise resolving to a React component,
// export const SideNavigationBarClient = dynamic(
//   () => import("./SideNavigationbar").then((mod) => mod.SideNavigationBar),
//   {
//     ssr: false,
//   }
// );
