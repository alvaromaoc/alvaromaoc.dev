import type {Config} from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme:{
    extend: {
      colors: {
        accent: {
          DEFAULT: colors.emerald["500"]
        },
        accentSidecar: {
          DEFAULT: colors.teal["500"]
        }
      }
    }
  },
  plugins: [],
};
export default config;
