/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        containerEnter: "enter 1.35s cubic-bezier(0.87, 0, 0.13, 1)",
        blurFade: "blurFade 1.5s cubic-bezier(0.87, 0, 0.13, 1)",
        containerWhite: "enterWhite .6s ease-out",
        containerBlack: "enterBlack .65s cubic-bezier(0.87, 0, 0.13, 1)",
        heartEnter: "heartEnter 0.8s cubic-bezier(0.87, 0, 0.13, 1)",
        whiteFlash: "whiteFlash 0.4s .4s ease-in",
        hideAfter: "hideAfter 0.6s linear",
      },
      keyframes: {
        enterWhite: {
          "0%": { opacity: "0" },
          "100%": { opacity: "100" },
        },
        whiteFlash: {
          "0%": { opacity: "0" },
          "50%": { opacity: "100" },
          "100%": { opacity: "0" },
        },
        enterBlack: {
          "0%": { opacity: "100" },
          "80%": { opacity: "100" },
          "100%": { opacity: "0" },
        },
        enter: {
          "0%": { transform: "scale(0.8,0.8)" },
          "100%": { transform: "scale(1,1)" },
        },
        heartEnter: {
          "0%": { opacity: "100", transform: "scale(1,1) translate(-50%,-50%)" },
          "100%": { opacity: "0", transform: "scale(0.5,0.5) translate(-50%,-50%)" },
        },
        blurFade: {
          "0%": { backdropFilter: "blur(32px)" },
          "100%": { backdropFilter: "blur(0px)" },
        },
        hideAfter: {
          "0%": { opacity: "100" },
          "100%": { opacity: "100" },
        },
      },
    },
  },
  plugins: [],
};
