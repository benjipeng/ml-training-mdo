# Initial Project Setup: Vite + React + TypeScript + TailwindCSS v4 + shadcn/ui

This guide details the best-practice steps to set up your static blog project in the **current directory** using the latest Vite, React, TypeScript, TailwindCSS v4, and shadcn/ui. It also covers MDX support and essential configuration. All commands assume you are already in your project root.

---

## 1. Initialize Vite (React + TypeScript) in Current Directory

> **Note:** Do NOT use the CLI option that creates a new folder. Instead, initialize in-place.

```sh
npm create vite@latest . -- --template react-ts
```
- This will scaffold Vite with React and TypeScript in the current directory.
- If prompted, confirm overwriting existing files as appropriate.

---

## 2. Install TailwindCSS v4 and Peer Dependencies

> **TailwindCSS v4 requires Node.js >=18.**

```sh
npm install tailwindcss @tailwindcss/vite
```
- This uses the new Tailwind v4 plugin for Vite, which is the recommended approach.

### Tailwind v4-Specific Configuration
- The `content` array in `tailwind.config.js` should include all relevant file globs:

```js
content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx,mdx}',
],
```
- Tailwind v4 uses a new Just-in-Time engine by default and has breaking changes from v3. Refer to the [Tailwind v4 release notes](https://tailwindcss.com/docs/upgrade-guide) for details.

### Add Tailwind to CSS (v4 Style)
- In `src/index.css` (or create it if missing), replace all content with:

```css
@import "tailwindcss";
```
- This is the new, simpler import style for Tailwind v4. Do **not** use the old `@tailwind base;`, `@tailwind components;`, or `@tailwind utilities;` directives.
- Import this CSS in your `main.tsx` or `App.tsx` if not already present.

---

## 3. Install and Configure shadcn/ui

> **shadcn/ui v3+ is compatible with Tailwind v4.**

```sh
npm install shadcn-ui@latest
```
- Follow the [official shadcn/ui Vite guide](https://ui.shadcn.com/docs/installation/vite) for any additional steps, such as running the shadcn CLI to add components.
- You may need to update your `tsconfig.json` and `vite.config.ts` as per shadcn/ui documentation.

---

## 4. Install lucide-react for Icons

```sh
npm install lucide-react
```

---

## 5. Add MDX Support

```sh
npm install @mdx-js/react @mdx-js/rollup
```

```ts
import mdx from 'vite-plugin-mdx';
// ...
export default defineConfig({
  // ...
  plugins: [...plugins, mdx()],
});
```

---

## 6. (Optional but Recommended) Add Prettier, ESLint, and .gitignore

```sh
npm install -D prettier eslint
npx eslint --init
```
- Configure `.prettierrc` and `.eslintrc` as desired.
- Add a `.gitignore` (if not present):
```
node_modules
dist
.env
```

---

## 7. TypeScript Configuration: Why Three tsconfig Files?

Modern Vite projects often use three TypeScript config files for clarity and best practices:

### 1. `tsconfig.json` (Root)
- **Purpose:** Main entry point for TypeScript configuration.
- **Role:** References other config files (like `tsconfig.app.json` and `tsconfig.node.json`) using the `references` field.
- **Benefit:** Enables [Project References](https://www.typescriptlang.org/docs/handbook/project-references.html) for faster builds and better organization.

### 2. `tsconfig.app.json`
- **Purpose:** Settings specific to your application (browser) code.
- **Role:** Used by Vite and your IDE for type-checking and compiling your app’s source files (typically in `src/`).
- **Benefit:** Allows tailored settings for app code, such as module resolution, JSX, and strictness.

### 3. `tsconfig.node.json`
- **Purpose:** Settings for Node.js-specific files (e.g., `vite.config.ts`, scripts, or server-side code).
- **Role:** Ensures Node-specific files are type-checked with the correct environment (Node.js types, CommonJS/ESM modules).
- **Benefit:** Prevents conflicts between browser and Node.js code, and ensures correct type-checking for both environments.

#### Why set `baseUrl` and `paths` in both?
- **`baseUrl` and `paths`** are used for path aliasing (e.g., `@/components/...`).
- Placing them in both `tsconfig.json` and `tsconfig.app.json` ensures that path aliases are recognized project-wide, including by tools that only look at the root config, and by your app source code during development and build.
- This avoids “Cannot find module” errors or broken imports in different contexts.

---

## 8. Verify Setup
- Run the dev server:
```sh
npm run dev
```
- Confirm Tailwind, shadcn/ui, and MDX are working by creating a simple component and an `.mdx` file in `src/blog/`.

---

## 9. References
- [Vite + React Guide](https://vitejs.dev/guide/)
- [TailwindCSS v4 Docs](https://tailwindcss.com/docs/installation)
- [shadcn/ui for Vite](https://ui.shadcn.com/docs/installation/vite)
- [MDX for Vite](https://mdxjs.com/getting-started/)
- [TypeScript Project References](https://www.typescriptlang.org/docs/handbook/project-references.html)

---

**You are now ready to start building your static blog with a modern, maintainable stack!**
