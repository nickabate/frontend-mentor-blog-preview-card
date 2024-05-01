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
        yellow: {
          10: 'hsl(47, 88%, 63%)'
        },
        neutral: {
          10: 'hsl(0, 0%, 50%)',
          20: 'hsl(0, 0%, 7%)'
        }
      },
      boxShadow: {
        offset: '8px 8px #000'
      }
    },
  },
  plugins: [],
};
export default config;
