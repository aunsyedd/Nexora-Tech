import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#00D4FF",
          dark: "#0099CC",
          light: "#66E5FF",
        },
        accent: {
          DEFAULT: "#7C3AED",
          neon: "#A855F7",
        },
        surface: {
          DEFAULT: "#0A0F1E",
          card: "#0D1526",
          border: "#1A2540",
        },
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(0,212,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.03) 1px, transparent 1px)",
        "hero-gradient":
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(0,212,255,0.15), transparent)",
        "glow-gradient":
          "radial-gradient(ellipse at center, rgba(0,212,255,0.08) 0%, transparent 70%)",
      },
      backgroundSize: {
        "grid-size": "60px 60px",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 20px rgba(0,212,255,0.3)" },
          "100%": { boxShadow: "0 0 40px rgba(0,212,255,0.6), 0 0 80px rgba(0,212,255,0.2)" },
        },
      },
      boxShadow: {
        "neon-blue": "0 0 20px rgba(0,212,255,0.3), 0 0 40px rgba(0,212,255,0.1)",
        "neon-purple": "0 0 20px rgba(168,85,247,0.3), 0 0 40px rgba(168,85,247,0.1)",
        "card-glow": "0 4px 40px rgba(0,212,255,0.08), 0 1px 0 rgba(0,212,255,0.1) inset",
        "card-hover": "0 8px 60px rgba(0,212,255,0.15), 0 1px 0 rgba(0,212,255,0.2) inset",
      },
    },
  },
  plugins: [],
};

export default config;
