module.exports = {
  purge: {
    enabled: true, //true un prod mode
    content: ["docs/*.html"],
  },
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        body: ["Aldrich"],
        title: ['"Press Start 2P"'],
      },
      backgroundImage: theme => ({
        'hero-pattern': "url('/witihackathon/img/hero-pattern.png')",
        'footer-texture': "url('/witihackathon/img/footer-texture.png')",
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
