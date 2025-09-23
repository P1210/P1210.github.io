"use client";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./styles/navigation.css";

const components: { title: string; href: string }[] = [
  { title: "About", href: "/" },
  { title: "Projects", href: "/projects" },
  { title: "Case Studies", href: "/case-studies" },
  { title: "Experience", href: "/experience" },
  // { title: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathName = usePathname();

  return (
    <div className={`navbar-container ${"justify-between"}`}>
      <div className="nav-logo">Pranjal Gupta</div>

      <NavigationMenu viewport={true}>
        <NavigationMenuList className="nav-list">
          {components.map((component) => {
            const isActive = pathName === component.href;
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

      <div>
        <a href="/contact" className="hire-me">
          Connect
        </a>
      </div>
    </div>
  );
}
