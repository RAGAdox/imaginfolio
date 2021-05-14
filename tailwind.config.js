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
      },
      animation: {
        "bg-image-fade-in": "fadein 1s",
        "title-fade-up": "fadeup 1s 3s both",
        "sub-title-fade-in": "fadein 5s 3s both",
        "menu-drop": "dropDown 0.5s both",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
