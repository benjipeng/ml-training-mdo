import { useState } from "react";
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
import { Toggle } from "@/components/ui/toggle";
import { getAllTags, getSortedPosts } from "@/utils/blog-utils";

export function BlogPage() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const allPosts = getSortedPosts();
  const allTags = getAllTags();

  const filteredPosts =
    selectedTags.length > 0
      ? allPosts.filter((post) =>
          post.frontmatter.tags.some((tag) => selectedTags.includes(tag))
        )
      : allPosts;

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <div className="flex flex-col space-y-4">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Blog</h1>
        <p className="text-muted-foreground">
          Thoughts, ideas, and tutorials on web development and more.
        </p>
      </div>

      <div className="my-8">
        <h2 className="mb-4 text-lg font-medium">Filter by tag</h2>
        <div className="flex flex-wrap gap-2">
          {allTags.map((tag) => (
            <Toggle
              key={tag}
              pressed={selectedTags.includes(tag)}
              onPressedChange={() => toggleTag(tag)}
              variant="outline"
              size="sm"
              className="capitalize"
            >
              {tag}
            </Toggle>
          ))}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredPosts.map((post) => (
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
                    className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium capitalize"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <div className="my-20 flex flex-col items-center justify-center space-y-4">
          <p className="text-center text-lg font-medium">
            No posts found with the selected tags.
          </p>
          <Button onClick={() => setSelectedTags([])}>Clear Filters</Button>
        </div>
      )}
    </div>
  );
}
