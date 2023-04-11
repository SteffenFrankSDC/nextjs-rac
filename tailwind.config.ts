import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ['Oswald', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#383e42",
          "primary-content": "#f2f2f2",

          secondary: "#f0f0f0",
          "secondary-content": "#383e42",

          accent: "#06f304",
          "accent-content": "#383e42",

          neutral: "#a0a0a0",
          "neutral-content": "#383e42",

          "base-100": "#ffffff",
          "base-content": "#383e42",

          "--rounded-box": "0.1rem", // border radius rounded-box utility class, used in card and other large boxes
          "--rounded-btn": "0.1rem", // border radius rounded-btn utility class, used in buttons and similar element
          "--rounded-badge": "1.0rem", // border radius rounded-badge utility class, used in badges and similar
          "--animation-btn": "0.2s", // duration of animation when you click on button
          "--animation-input": "0.2s", // duration of animation for inputs like checkbox, toggle, radio, etc
          "--btn-text-case": "none", // set default text transform for buttons
          "--btn-focus-scale": "1.0", // scale transform of button when you focus on it
          "--border-btn": "1px", // border width of buttons
          "--tab-border": "1px", // border width of tabs
          "--tab-radius": "0.1rem", // border radius of tabs
        },
      },
    ],
  },
} satisfies Config;
