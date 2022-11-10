/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primaryGreen: "#02C63B",
        primaryGray: "#51595F",
        primaryPurple: "#BE3EAA",
      },
    },
  },
  plugins: [],
}
