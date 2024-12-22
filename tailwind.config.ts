import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        pink: "#fff3e3",
        goldPrimary: "#b88f30",
        grayBg: "#f5f6f7",
      },
    },
  },
  plugins: [],
};
export default config;
