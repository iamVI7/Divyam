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
        navy: "#0B1627",
        gold: "#C59D5F",
        cream: "#F8F5EF",
        border: "#E8DEDD",
        ink: "#1D1D1D",
      },
      fontFamily: {
        heading: ["var(--font-cormorant)", "serif"],
        body: ["var(--font-dmsans)", "sans-serif"],
      },
      borderRadius: {
        card: "16px",
        btn: "10px",
      },
      spacing: {
        "4.5": "18px",
      },
      maxWidth: {
        content: "1280px",
      },
    },
  },
  plugins: [],
};
export default config;
