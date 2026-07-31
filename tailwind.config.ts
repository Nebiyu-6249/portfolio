import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "rgb(var(--paper) / <alpha-value>)",
        surface: "rgb(var(--surface) / <alpha-value>)",
        raised: "rgb(var(--raised) / <alpha-value>)",
        ink: "rgb(var(--ink) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        faint: "rgb(var(--faint) / <alpha-value>)",
        line: "rgb(var(--line) / <alpha-value>)",
        teal: "rgb(var(--teal) / <alpha-value>)",
        "teal-soft": "rgb(var(--teal-soft) / <alpha-value>)",
        amber: "rgb(var(--amber) / <alpha-value>)",
        red: "rgb(var(--red) / <alpha-value>)",
        yellow: "rgb(var(--yellow) / <alpha-value>)",
        box: "rgb(var(--box) / <alpha-value>)",
        "box-ink": "rgb(var(--box-ink) / <alpha-value>)",
        "box-muted": "rgb(var(--box-muted) / <alpha-value>)",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        hand: ["var(--font-hand)", "cursive"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        content: "82rem",
      },
      boxShadow: {
        sketch: "4px 4px 0px #1F1F1F",
        "sketch-sm": "2px 2px 0px #1F1F1F",
        "sketch-lg": "6px 6px 0px #1F1F1F",
      },
      borderRadius: {
        card: "4px",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
