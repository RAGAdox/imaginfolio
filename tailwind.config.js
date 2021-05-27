const tailwindcss = require("tailwindcss");

module.exports = {
  purge: [],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        "-10": "-10",
      },
      keyframes: {
        fadein: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeup: {
          "0%": {
            opacity: "0",
            transform: "translateY(10rem)",
          },
          "100%": {
            opacity: "1",
            transform: " translateY(0)",
          },
        },
        dropDown: {
          "0%": {
            opacity: "0",
            transform: "translateY(-5rem)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0rem)",
          },
        },
        dropUp: {
          "100%": {
            opacity: "0",
            transform: "translateY(-5rem)",
          },
          "0%": {
            opacity: "1",
            transform: "translateY(0rem)",
          },
        },
      },
      animation: {
        "bg-image-fade-in": "fadein 1s forward",
        "title-fade-up": "fadeup 1s 1s both",
        "fade-up": "fadeup 0.5s both",
        "sub-title-fade-in": "fadein 2s 1s both",
        "menu-drop": "dropDown 0.5s both",
        "menu-hide": "dropUp 0.5s both",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
      ringColor: ["active"],
      ringOffsetColor: ["active"],
      ringOffsetWidth: ["active"],
      ringOpacity: ["active"],
      ringWidth: ["active"],
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
