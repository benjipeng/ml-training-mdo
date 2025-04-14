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
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
npx tailwindcss init -p
```
- This creates `tailwind.config.js` and `postcss.config.js`.

### Tailwind v4-Specific Configuration
- The `content` array in `tailwind.config.js` should include all relevant file globs:

```js
content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx,mdx}',
],
```
- Tailwind v4 uses a new Just-in-Time engine by default and has breaking changes from v3. Refer to the [Tailwind v4 release notes](https://tailwindcss.com/docs/upgrade-guide) for details.

### Add Tailwind Directives to CSS
- In `src/index.css` (or create it if missing):

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
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
- Add the [vite-plugin-mdx](https://github.com/mdx-js/mdx/tree/main/packages/vite-plugin-mdx) for seamless MDX integration:

```sh
npm install vite-plugin-mdx
```
- Update `vite.config.ts` to include the MDX plugin:

```ts
import mdx from 'vite-plugin-mdx';
// ...
export default defineConfig({
  // ...
  plugins: [react(), mdx()],
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

## 7. Verify Setup
- Run the dev server:
```sh
npm run dev
```
- Confirm Tailwind, shadcn/ui, and MDX are working by creating a simple component and an `.mdx` file in `src/blog/`.

---

## 8. References
- [Vite + React Guide](https://vitejs.dev/guide/)
- [TailwindCSS v4 Docs](https://tailwindcss.com/docs/installation)
- [shadcn/ui for Vite](https://ui.shadcn.com/docs/installation/vite)
- [MDX for Vite](https://mdxjs.com/getting-started/)

---

**You are now ready to start building your static blog with a modern, maintainable stack!** 