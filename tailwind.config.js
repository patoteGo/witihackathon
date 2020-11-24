module.exports = {
  purge: {
    enabled: false, //true un prod mode
    content: ["dist/*.html"],
  },
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        body: ["Aldrich"],
        title: ['"Press Start 2P"'],
      },
    },
  },
  variants: {
    extend: {
      maxHeight: ["hover"],
    },
    fontFamily: {},
  },
  plugins: [],
};
