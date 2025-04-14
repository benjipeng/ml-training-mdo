import { ReactNode } from "react";
import { NavigationMenu } from "@/components/ui/navigation-menu";
import { Sheet } from "@/components/ui/sheet";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Sun, Moon, Menu } from "lucide-react";
import { useState } from "react";
import "../index.css";

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  // Toggle dark mode by toggling a class on the html element
  const handleDarkModeToggle = () => {
    setDarkMode((prev) => {
      const newMode = !prev;
      document.documentElement.classList.toggle("dark", newMode);
      return newMode;
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground transition-colors">
      {/* Navbar */}
      <header className="sticky top-0 z-30 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4 mx-auto">
          {/* Logo/Brand */}
          <div className="flex items-center gap-2 font-bold text-xl">
            <Menu
              className="md:hidden mr-2 cursor-pointer"
              onClick={() => setMobileNavOpen(true)}
            />
            <span>MyBlog</span>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-4 items-center">
            <NavigationMenu />
            <Switch
              checked={darkMode}
              onCheckedChange={handleDarkModeToggle}
              className="ml-4"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Moon /> : <Sun />}
            </Switch>
          </nav>
          {/* Mobile Nav Sheet */}
          <Sheet open={mobileNavOpen} onOpenChange={setMobileNavOpen}>
            <div className="flex flex-col gap-4 p-4">
              <NavigationMenu />
              <Separator />
              <Switch
                checked={darkMode}
                onCheckedChange={handleDarkModeToggle}
                aria-label="Toggle dark mode"
              >
                {darkMode ? <Moon /> : <Sun />}
              </Switch>
            </div>
          </Sheet>
        </div>
      </header>
      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-8">{children}</main>
      {/* Footer */}
      <footer className="border-t py-4 text-center text-sm text-muted-foreground bg-background/80">
        © {new Date().getFullYear()} MyBlog. Powered by Vite, React,
        TailwindCSS, shadcn/ui.
      </footer>
    </div>
  );
}
