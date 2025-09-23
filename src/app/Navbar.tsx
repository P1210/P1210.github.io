"use client";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import "./styles/navigation.css";

const components: { title: string; href: string }[] = [
  { title: "About", href: "/" },
  { title: "Projects", href: "/projects" },
  { title: "Case Studies", href: "/case-studies" },
  { title: "Experience", href: "/experience" },
  // { title: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathName = usePathname() || "/";
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close the mobile menu on route change
  useEffect(() => {
    if (pathName) {
      setIsMenuOpen(false);
    }
  }, [pathName]);

  return (
    <div className={`navbar-container ${"justify-between"}`}>
      <div className="nav-logo">Pranjal Gupta</div>

      {/* Desktop navigation */}
      <NavigationMenu viewport={true}>
        <NavigationMenuList className="nav-list">
          {components.map((component) => {
            const isActive =
              pathName === component.href || pathName === `${component.href}/`;
            return (
              <NavigationMenuItem key={component.title}>
                <NavigationMenuLink
                  asChild
                  className={`nav-link ${isActive ? "nav-link-active" : ""}`}
                >
                  <Link href={component.href}>{component.title}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            );
          })}
        </NavigationMenuList>
      </NavigationMenu>

      {/* Desktop CTA */}
      <div className="nav-cta">
        <Link href="/contact" className="hire-me">
          Connect
        </Link>
      </div>

      {/* Mobile hamburger */}
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

      {/* Mobile dropdown */}
      <div
        id="mobile-menu"
        className={`mobile-menu ${isMenuOpen ? "mobile-menu-open" : ""}`}
      >
        <nav className="mobile-menu-content">
          {components.map((component) => {
            const isActive =
              pathName === component.href || pathName === `${component.href}/`;
            return (
              <Link
                key={component.title}
                href={component.href}
                className={`mobile-link ${
                  isActive ? "mobile-link-active" : ""
                }`}
              >
                {component.title}
              </Link>
            );
          })}
          <Link href="/contact" className="mobile-cta">
            Connect with me
          </Link>
        </nav>
      </div>
    </div>
  );
}
