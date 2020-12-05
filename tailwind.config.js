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
      backgroundImage: theme => ({
        'hero-pattern': "url('/dist/img/hero-pattern.png')",
        'footer-texture': "url('/dist/img/footer-texture.png')",
       })
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
