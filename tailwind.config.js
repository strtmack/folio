module.exports = {
  // purge css before build/deployment with array of files to be purged below
  purge: ["./src/**/*.js", "./src/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sport: ["Sporting Grotesque_Regular", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        sand: {
          DEFAULT: "#faf6eb",
        },
        royal: {
          DEFAULT: "#5267ab",
        },
        darkgrey: {
          DEFAULT: "#8a8a8a",
        },
        nicegreen: {
          DEFAULT: "#019563",
        },
        mustard: {
          DEFAULT: "#f3be22",
        },
        sangiovese: {
          DEFAULT: "#EE4E2C",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
