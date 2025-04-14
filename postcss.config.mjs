export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    // Conditionally add typography plugin if needed for v4 integration
    // For v4, often the @apply rules within CSS handle this via @import
    // but explicitly adding it here might help if prose isn't working.
    // If you are using Tailwind v4, it's generally recommended to rely
    // on the built-in JIT engine and @import "tailwindcss/typography"
    // within your CSS if the plugin provides such an entry point.
    // However, since it's not working, let's try adding the processor.
    '@tailwindcss/typography': {},
  },
}; 