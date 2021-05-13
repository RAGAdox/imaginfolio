module.exports = {
  purge: [],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        leafs: "url('./assets/bg-leaf.png')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};