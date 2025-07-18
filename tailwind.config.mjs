/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-conic": "conic-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
