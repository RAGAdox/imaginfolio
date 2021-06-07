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
        "type-writer": {
          "0%": {
            width: "0%",
          },
          "100%": {
            width: "100%",
          },
        },
        "type-writer-caret": {
          "0%": {
            "border-color": "transparent",
          },
          "100%": {
            "border-color": "transparent",
          },
          "50%": {
            "border-color": "white",
          },
        },
      },
      animation: {
        "bg-image-fade-in": "fadein 1s forward",
        "title-fade-up": "fadeup 1s 1s both",
        "fade-up": "fadeup 0.5s both",
        "sub-title-fade-in": "fadein 3s 1s both",
        "menu-drop": "dropDown 0.5s both",
        "menu-hide": "dropUp 0.5s both",
        typewriter:
          "type-writer 3.5s 1s steps(40,end) both,type-writer-caret .75s step-end infinite",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
