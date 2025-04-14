import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-6 py-16">
      <h1 className="text-4xl font-bold mb-2">Welcome to MyBlog</h1>
      <p className="text-lg text-muted-foreground mb-4 text-center max-w-xl">
        A modern, elegant, and responsive static blog built with Vite, React,
        TailwindCSS, and shadcn/ui. Enjoy light/dark mode, code highlighting,
        math, diagrams, and more!
      </p>
      <Button asChild size="lg">
        <Link to="/blog" className="flex items-center gap-2">
          Visit the Blog <ArrowRight className="w-4 h-4" />
        </Link>
      </Button>
    </section>
  );
}
