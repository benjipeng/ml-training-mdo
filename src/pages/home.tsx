import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getFeaturedPosts } from "@/utils/blog-utils";

export function HomePage() {
  const featuredPosts = getFeaturedPosts();

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <section className="mx-auto flex max-w-[980px] flex-col items-center gap-4 py-8 md:py-12 lg:py-16">
        <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl">
          Welcome to My Static Blog
        </h1>
        <p className="max-w-[700px] text-center text-muted-foreground md:text-xl">
          A modern blog built with Vite, React, TypeScript, and shadcn/ui.
        </p>
        <div className="flex gap-4">
          <Button asChild>
            <Link to="/blog">Read Blog</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/about">About Me</Link>
          </Button>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            Featured Posts
          </h2>
          <Button asChild variant="ghost">
            <Link to="/blog">View All</Link>
          </Button>
        </div>
        <div className="grid gap-6 pt-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredPosts.map((post) => (
            <Card key={post.slug} className="flex flex-col">
              <CardHeader>
                <CardTitle className="line-clamp-1">
                  <Link to={`/blog/${post.slug}`} className="hover:underline">
                    {post.frontmatter.title}
                  </Link>
                </CardTitle>
                <CardDescription>
                  {new Date(post.frontmatter.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="line-clamp-3 text-muted-foreground">
                  {post.frontmatter.description}
                </p>
              </CardContent>
              <CardFooter>
                <div className="flex flex-wrap gap-2">
                  {post.frontmatter.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
