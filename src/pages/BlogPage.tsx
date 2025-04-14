import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Define the expected structure of the frontmatter
interface Frontmatter {
  title: string;
  date: string;
  tags?: string[];
  description?: string;
}

// Define the structure of the MDX module we expect from the glob import
interface MdxModule {
  frontmatter: Frontmatter;
  default: React.ComponentType; // The actual component
}

interface PostSummary {
  slug: string;
  title: string;
  date: string;
  description?: string;
}

const BlogPage: React.FC = () => {
  const [posts, setPosts] = useState<PostSummary[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      console.log("Fetching posts...");
      // Import the full module eagerly
      const postModules = import.meta.glob<MdxModule>(
        "/src/blog/**/*.mdx",
        { eager: true } // Remove import: 'frontmatter'
      );
      console.log("Raw module data:", postModules);

      const mappedPosts = Object.entries(postModules).map(([path, module]) => {
        console.log(`Processing path: ${path}`, module);
        const slug = path.match(/\/src\/blog\/(.*)\.mdx$/)?.[1];
        if (!slug) {
          console.warn(`Could not extract slug from path: ${path}`);
          return null;
        }

        // Access frontmatter from the imported module
        const frontmatter = module.frontmatter;

        if (
          !frontmatter ||
          typeof frontmatter !== "object" ||
          !frontmatter.title ||
          !frontmatter.date
        ) {
          console.warn(
            `Invalid or incomplete frontmatter for path: ${path}`,
            frontmatter
          );
          return null;
        }

        const summary: PostSummary = {
          slug: slug,
          title: frontmatter.title,
          date: frontmatter.date,
          description: frontmatter.description,
        };
        return summary;
      });

      // Filter out any null values
      const validPosts: PostSummary[] = mappedPosts.filter(
        (post): post is PostSummary => post !== null
      );
      console.log("Valid post summaries:", validPosts);

      // Sort the valid posts by date, newest first
      validPosts.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );

      console.log("Sorted valid posts:", validPosts);
      setPosts(validPosts);
    };

    fetchPosts().catch((error) => {
      console.error("Error fetching posts:", error);
    });
  }, []);

  console.log("Rendering BlogPage with posts:", posts);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Blog Posts</h1>
      {posts.length === 0 ? (
        <p>No posts found.</p>
      ) : (
        <div className="space-y-8">
          {posts.map((post) => (
            <article key={post.slug} className="flex flex-col space-y-2">
              <h2 className="text-2xl font-semibold tracking-tight">
                <Link to={`/blog/${post.slug}`} className="hover:underline">
                  {post.title}
                </Link>
              </h2>
              {post.description && (
                <p className="text-muted-foreground">{post.description}</p>
              )}
              <p className="text-sm text-muted-foreground">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </article>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogPage;
