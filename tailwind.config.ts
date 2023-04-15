import plugin from 'tailwindcss/plugin';

import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ['Mulish', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("daisyui"),
    plugin(function ({ addBase }) {
      addBase({
        html: { fontSize: '14px' },
      })
    })],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#383e42",
          "primary-content": "#ffffff",
          "secondary": "#7d7d7d",
          "accent": "#06f304",
          "neutral": "#252525",
          "base-100": "#ffffff",
          "info": "#22aaff",
          "success": "#22dd22",
          "warning": "#ffaa22",
          "error": "#ff2222",

          "--rounded-box": "0.01rem", // border radius rounded-box utility class, used in card and other large boxes
          "--rounded-btn": "0.01rem", // border radius rounded-btn utility class, used in buttons and similar element
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
