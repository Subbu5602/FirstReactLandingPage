//PostCSS is basically used to transform tailwind classes into vanilla CSS
//Auto prefixer adds prefixes to the vaanilla css to ensure cross browser compatibility
// PostCSS configuration to use Tailwind CSS and Autoprefixer plugins
// Tailwind CSS will generate utility classes, and Autoprefixer adds vendor prefixes for cross-browser compatibility.

export default {
  plugins: {
    tailwindcss: {},   // Enables Tailwind CSS for utility-first CSS generation
    autoprefixer: {},   // Adds vendor prefixes for browser compatibility (e.g., -webkit-)
  },
}
