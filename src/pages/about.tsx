import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function AboutPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <div className="mx-auto flex max-w-[768px] flex-col space-y-8">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
            About Me
          </h1>
          <p className="text-xl text-muted-foreground">
            Learn more about the creator of this blog.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Who Am I?</h2>
          <p className="leading-7">
            Hello! I'm a passionate developer with a love for creating modern,
            accessible, and performant web applications. This blog is a place
            where I share my thoughts, experiences, and tutorials on web
            development, design, and other tech-related topics.
          </p>
          <p className="leading-7">
            When I'm not coding, you can find me exploring new technologies,
            contributing to open-source projects, or enjoying a good book.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold">About This Blog</h2>
          <p className="leading-7">
            This blog is built with modern web technologies:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Vite for blazing-fast builds and development</li>
            <li>React and TypeScript for a robust frontend</li>
            <li>TailwindCSS and shadcn/ui for beautiful, responsive UI</li>
            <li>MDX for content with the power of React components</li>
            <li>GitHub Actions for CI/CD deployment</li>
          </ul>
          <p className="leading-7">
            All content is written in MDX, allowing me to embed interactive
            components, code snippets with syntax highlighting, math equations,
            and diagrams directly in my blog posts.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Contact</h2>
          <p className="leading-7">
            Have questions or want to connect? Feel free to reach out:
          </p>
          <div className="flex gap-4">
            <Button asChild variant="outline">
              <a href="#" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href="#" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href="mailto:example@example.com">Email</a>
            </Button>
          </div>
        </div>

        <div className="flex justify-center pt-8">
          <Button asChild>
            <Link to="/blog">Read My Blog</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
