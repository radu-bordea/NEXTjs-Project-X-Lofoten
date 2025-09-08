import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      container: { center: true, padding: "1rem" },
      fontFamily: {
        sans: ["var(--font-manrope)", "system-ui", "ui-sans-serif", "Arial"],
        display: ["var(--font-fraunces)", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
