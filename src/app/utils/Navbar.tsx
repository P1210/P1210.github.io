"use client";
import { Folder, Contact, UserCircle, HomeIcon } from "lucide-react";
import { useEffect, useState, useRef, useCallback } from "react";

const navItems = [
  { id: "home", icon: HomeIcon, title: "Home" },
  { id: "skills", icon: UserCircle, title: "About" },
  { id: "projects", icon: Folder, title: "Projects" },
  { id: "contact", icon: Contact, title: "Contact" },
] as const;

// Throttle function to limit scroll event frequency
function throttle<T extends (...args: unknown[]) => void>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle = false;

  return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
}

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const updateActiveSection = () => {
      const sections = navItems.map((item) => item.id).reverse();
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection((prev) => {
              // Only update if changed to prevent unnecessary re-renders
              return prev !== section ? section : prev;
            });
            break;
          }
        }
      }
      rafRef.current = null;
    };

    // Use requestAnimationFrame for smooth updates
    const handleScroll = () => {
      if (rafRef.current === null) {
        rafRef.current = requestAnimationFrame(updateActiveSection);
      }
    };

    // Throttle scroll events to reduce computation
    const throttledHandleScroll = throttle(handleScroll, 100);

    window.addEventListener("scroll", throttledHandleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <nav className="navbar">
      {navItems.map(({ id, icon: Icon, title }) => (
        <button
          key={id}
          onClick={() => scrollToSection(id)}
          title={title}
          className={`item ${activeSection === id ? "selected" : ""}`}
          aria-label={title}
        >
          <Icon />
        </button>
      ))}
    </nav>
  );
};
