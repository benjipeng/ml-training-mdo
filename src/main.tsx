import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import HomePage from "@/pages/HomePage";
import BlogPage from "@/pages/BlogPage";
import BlogPostLayout from "@/layouts/BlogPostLayout";
import { ThemeProvider } from "@/components/theme-provider";
import "./index.css";

// Dynamically import all .mdx files from the blog directory
const blogPosts = import.meta.glob("/src/blog/**/*.mdx");

const routes = Object.keys(blogPosts)
  .map((path) => {
    const slug = path.match(/\/src\/blog\/(.*)\.mdx$/)?.[1];
    if (!slug) return null; // Should not happen with correct glob

    // Lazy load the MDX component
    const Component = React.lazy(
      blogPosts[path] as () => Promise<{
        default: React.ComponentType<unknown>;
      }>
    );

    return {
      path: `/blog/${slug}`,
      element: (
        <BlogPostLayout>
          <Suspense fallback={<div>Loading post...</div>}>
            <Component />
          </Suspense>
        </BlogPostLayout>
      ),
    };
  })
  .filter(Boolean) as { path: string; element: React.ReactNode }[]; // Filter out nulls and assert type

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="blog" element={<BlogPage />} />
            {/* Dynamically add routes for each blog post */}
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            ))}
            {/* Add other static routes here, e.g., about */}
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
