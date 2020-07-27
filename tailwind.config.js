module.exports = {
  theme: {
    backgroundColor: theme => ({
      ...theme("colors"),
      primary: "#F8F7F4",
      secondary: "#003290",
    }),

    extend: {
      lineHeight: {
        h1LineHeight: "4rem",
        h2LineHeight: "2.5rem",
        "7xl": "6rem",
      },
      textColor: {
        primary: "#F8F7F4",
        secondary: "#003290",
      },
      borderColor: {
        secondary: "#003290",
      },
      minHeight: {
        "10": "10%",
      },
      fontSize: {
        "7xl": "6rem",
      },
      padding: {
        "42": "10.5rem",
      },
    },
  },
  variants: {},
  plugins: [],
}
