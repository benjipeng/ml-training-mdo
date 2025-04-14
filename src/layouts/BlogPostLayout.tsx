import React from "react";

interface BlogPostLayoutProps {
  children: React.ReactNode;
  // We can pass frontmatter data here later if needed
  // frontmatter: Record<string, any>;
}

const BlogPostLayout: React.FC<BlogPostLayoutProps> = ({
  children /*, frontmatter */,
}) => {
  // const { title, date, tags } = frontmatter; // Example usage

  return (
    <article className="prose dark:prose-invert max-w-none">
      {/* --- DEBUG START --- */}
      <p style={{ color: "red", margin: "20px 0", border: "1px solid blue" }}>
        DEBUG: If you see this, BlogPostLayout is rendering children.
      </p>
      {/* --- DEBUG END --- */}

      {/* Render frontmatter here later, e.g., title, date, tags */}
      {/* 
      <h1>{title}</h1>
      <p className="text-sm text-muted-foreground">{new Date(date).toLocaleDateString()}</p>
      */}

      {/* Render MDX content */}
      {children}
    </article>
  );
};

export default BlogPostLayout;
