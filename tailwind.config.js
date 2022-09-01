const defaultThemes = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["HelveticaNeue", "Inter", ...defaultThemes.fontFamily.sans],
      },
      aspectRatio: {
        "9/18": "9 / 18",
      },
    },
  },
  plugins: [],
};
