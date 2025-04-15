import { ComponentType } from "react";

// Define the frontmatter type
export interface PostFrontmatter {
    title: string;
    description: string;
    date: string;
    tags: string[];
}

// Define the Post type that includes all necessary data
export interface Post {
    slug: string;
    component: ComponentType;
    frontmatter: PostFrontmatter;
}

// Use relative path without leading slash for glob pattern
const postModules = import.meta.glob<{
    default: ComponentType;
    frontmatter: PostFrontmatter;
}>("../blog/*.mdx", { eager: true });

console.log('Found postModules:', Object.keys(postModules));

// Debug: Log the structure of the first module to see what it contains
const firstModulePath = Object.keys(postModules)[0];
if (firstModulePath) {
    const firstModule = postModules[firstModulePath];
    console.log('First module structure:', {
        path: firstModulePath,
        keys: Object.keys(firstModule),
        hasDefault: !!firstModule.default,
        hasFrontmatter: !!firstModule.frontmatter,
        frontmatterKeys: firstModule.frontmatter ? Object.keys(firstModule.frontmatter) : 'undefined'
    });
}

// Fallback frontmatter data for each post
const fallbackFrontmatter: Record<string, PostFrontmatter> = {
    "test-post": {
        title: "Test Post",
        description: "A simple test post to debug the blog system",
        date: "2024-04-10",
        tags: ["test", "debug"]
    },
    "building-a-blog-with-mdx": {
        title: "Building a Blog with MDX",
        description: "Step-by-step guide to creating a blog using MDX and React",
        date: "2024-04-04",
        tags: ["mdx", "blog", "react"]
    },
    "advanced-react-patterns": {
        title: "Advanced React Patterns",
        description: "Learn advanced React design patterns for scalable applications",
        date: "2024-03-15",
        tags: ["react", "patterns", "advanced"]
    },
    "the-power-of-mdx": {
        title: "The Power of MDX",
        description: "Exploring MDX capabilities for modern content authoring",
        date: "2024-03-28",
        tags: ["mdx", "content", "react"]
    },
    "styling-with-tailwind-css": {
        title: "Styling with Tailwind CSS",
        description: "Best practices for using Tailwind CSS in your projects",
        date: "2024-03-01",
        tags: ["css", "tailwind", "styling"]
    },
    "getting-started-with-vite-and-react": {
        title: "Getting Started with Vite and React",
        description: "How to set up a new React project with Vite",
        date: "2024-02-20",
        tags: ["vite", "react", "setup"]
    }
};

// Convert the imported modules to our Post type with slugs
export const posts: Post[] = Object.entries(postModules)
    .map(([path, module]) => {
        // Extract slug from the path
        // ../blog/some-post.mdx -> some-post
        const slug = path.replace(/^\.\.\/blog\/(.+)\.mdx$/, "$1");

        console.log(`Module for "${slug}":`, {
            hasDefault: !!module.default,
            hasFrontmatter: !!module.frontmatter,
            frontmatterContent: module.frontmatter
        });

        // Use module frontmatter if available, otherwise use fallback
        const frontmatter = module.frontmatter || fallbackFrontmatter[slug];

        if (!frontmatter) {
            console.warn(`No frontmatter (real or fallback) found for post: ${slug}`);
        }

        return {
            slug,
            component: module.default,
            frontmatter
        };
    })
    .filter(post => {
        const isValid = post.frontmatter && post.frontmatter.date;
        if (!isValid) {
            console.warn(`Post "${post.slug}" filtered out - missing frontmatter or date`);
        }
        return isValid;
    });

console.log('Final posts array:', posts.length, 'posts');

// Get posts sorted by date (newest first)
export const getSortedPosts = () => {
    return [...posts].sort((a, b) => {
        const dateA = new Date(a.frontmatter.date).getTime();
        const dateB = new Date(b.frontmatter.date).getTime();
        return dateB - dateA;
    });
};

// Get post by slug
export const getPostBySlug = (slug: string) => {
    return posts.find((post) => post.slug === slug);
};

// Get all unique tags
export const getAllTags = () => {
    const tags = posts.flatMap((post) => post.frontmatter.tags);
    return Array.from(new Set(tags)).sort();
};

// Get posts by tag
export const getPostsByTag = (tag: string) => {
    return posts.filter((post) => post.frontmatter.tags.includes(tag));
};

// Get featured posts (top 3 by date)
export const getFeaturedPosts = (count = 3) => {
    return getSortedPosts().slice(0, count);
}; 