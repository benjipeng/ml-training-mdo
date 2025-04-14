import React from "react";
import { Link } from "react-router-dom";
import { ModeToggle } from "@/components/mode-toggle";
// import { Button } from "@/components/ui/button"; // For potential future use (e.g., GitHub link)
// import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu"; // Add later if needed

const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 hidden md:flex">
          <Link to="/" className="mr-6 flex items-center space-x-2">
            {/* <MountainIcon className="h-6 w-6" />  Optional: Add an icon later */}
            <span className="hidden font-bold sm:inline-block">
              My Elegant Blog
            </span>
          </Link>
          <nav className="flex items-center gap-6 text-sm">
            <Link
              to="/"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Home
            </Link>
            <Link
              to="/blog"
              className="transition-colors hover:text-foreground/80 text-foreground"
            >
              Blog
            </Link>
            {/* Add other links like About, Tags etc. here */}
          </nav>
        </div>
        {/* Add Mobile Nav toggle here later if needed */}
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center">
            {/* Optional: Add GitHub link button */}
            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
