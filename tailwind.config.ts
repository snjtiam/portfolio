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
        primary: "#FFFFFF",
        secondary: "#C4C4C4",
        accent: "#6CACE4",
        background: "#111111",
        "gradient-purple": "#9845E8",
        "gradient-blue": "#33D2FF",
        "gradient-pink": "#DD5789",
      },
      fontFamily: {
        "gt-walsheim": ["GT Walsheim Pro", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
