import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          50:  "#f0f9f4",
          100: "#d4ede3",
          200: "#a9dbc7",
          300: "#7ec9ab",
          400: "#53b78f",
          500: "#3a9e78",
          600: "#2e7f60",
          700: "#235f48",
          800: "#174030",
          900: "#0c2018",
        },
        beige: {
          50:  "#fdfcfa",
          100: "#faf7f2",
          200: "#f5f0e8",
          300: "#ede4d4",
          400: "#ddd0ba",
          500: "#c9b89a",
        },
        sage: {
          DEFAULT: "#5B8F78",
          light:   "#7aab94",
          dark:    "#3d6655",
        },
      },
      fontFamily: {
        sans:    ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-playfair)", "Georgia", "serif"],
      },
      animation: {
        "fade-up":    "fadeUp 0.6s ease-out forwards",
        "fade-in":    "fadeIn 0.5s ease-out forwards",
        "float":      "float 3s ease-in-out infinite",
        "pulse-slow": "pulse 3s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-8px)" },
        },
      },
      boxShadow: {
        card:    "0 4px 24px rgba(59, 130, 101, 0.08)",
        "card-hover": "0 8px 40px rgba(59, 130, 101, 0.16)",
        green:   "0 4px 20px rgba(91, 143, 120, 0.3)",
      },
    },
  },
  plugins: [],
};

export default config;
