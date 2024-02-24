/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        cta: ["0 10px 15px rgba(219, 227, 248, 0.2)"],
        blue: ["0 10px 15px rgba(59, 130, 246, 0.2)"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
