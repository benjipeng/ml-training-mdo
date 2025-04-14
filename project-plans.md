# Project Plan: Static Blog with Vite, React, TypeScript, TailwindCSS (shadcn UI), and MDX

## 1. Tech Stack & Key Dependencies
- **Vite**: Fast build tool for modern web projects
- **React**: UI library
- **TypeScript**: Type safety
- **TailwindCSS**: Utility-first CSS framework
- **shadcn/ui**: Prebuilt, accessible, and customizable UI components
- **lucide-react**: Icon library
- **MDX**: Markdown with embedded React components for blog content
- **PrismJS or Shiki**: Syntax highlighting for code blocks
- **KaTeX**: Math equation rendering
- **Mermaid**: Diagram rendering
- **GitHub Actions**: CI/CD for building and deploying
- **GitHub Pages**: Static site hosting

## 2. Folder Structure & Content Organization
```
/ (project root)
├── public/                # Static assets
├── src/
│   ├── components/        # Reusable UI components (Navbar, Footer, etc.)
│   ├── layouts/           # Page and post layouts
│   ├── pages/             # Main pages (Home, About, etc.)
│   ├── blog/              # MDX blog posts
│   ├── styles/            # Tailwind and custom CSS
│   └── utils/             # Utility functions (date formatting, etc.)
├── .github/workflows/     # GitHub Actions workflows
├── project-plans.md       # This plan
├── README.md
└── ... (config files)
```

- **Blog posts** will be stored as `.mdx` files in `src/blog/`.
- **Tags** and **metadata** (title, date, tags, description) will be defined in frontmatter.

## 3. Main Features
- **Modern, elegant, responsive design**
- **Light/Dark mode** toggle (with system preference detection)
- **Blog post listing** with date, tags, excerpt
- **Individual post pages** with:
  - Title, date, tags, reading time
  - Rendered markdown/MDX content
  - Syntax-highlighted code blocks
  - KaTeX math equations
  - Mermaid diagrams
- **Tag filtering** and tag pages
- **Search** (optional, for future enhancement)
- **Accessible navigation** (keyboard, screen reader support)
- **SEO best practices** (meta tags, Open Graph, sitemap)
- **Social sharing** (optional, for future enhancement)

## 4. Content Pipeline & Rendering
- **MDX**: Blog posts written in MDX, allowing React components in markdown
- **Frontmatter**: Used for metadata (title, date, tags, etc.)
- **Parsing**: Use a loader/plugin to parse MDX and extract metadata
- **Syntax Highlighting**: Use PrismJS or Shiki for code blocks
- **KaTeX**: Render math blocks/inline math
- **Mermaid**: Render diagrams from code blocks
- **Image Optimization**: Use next-gen formats and lazy loading

## 5. Deployment & Automation
- **GitHub Actions**:
  - Lint, type-check, and build on push
  - Deploy static site to `gh-pages` branch
- **GitHub Pages**:
  - Serve the built static site
  - Custom domain support (optional)

## 6. Best Practices
- **Accessibility**: Use semantic HTML, ARIA roles, keyboard navigation
- **Performance**: Optimize images, code splitting, lazy loading
- **SEO**: Meta tags, sitemap, robots.txt, Open Graph
- **Responsive Design**: Mobile-first, test on multiple devices
- **Content Versioning**: Blog content versioned with code in GitHub

## 7. Next Steps
1. Scaffold the project with Vite (React + TypeScript)
2. Set up TailwindCSS and shadcn/ui
3. Configure MDX support
4. Implement blog post rendering pipeline (MDX, code, KaTeX, Mermaid)
5. Build main UI components (Navbar, Footer, Post List, Post Page)
6. Add light/dark mode and responsive design
7. Set up GitHub Actions and Pages deployment
8. Write initial blog posts in MDX

---
This plan will guide the initial setup and development of the static blog. Adjustments can be made as requirements evolve. 