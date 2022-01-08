module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        deepBlue: "#172952",
        lightIndigo: "#9400CA",
        deepIndigo: "#4A0065",
        activeIndigo: "#E0AAF4",
        lightYellow: "#FAC35A",
        deepYellow: "#F8A71E",
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        optima: ["optima"],
      },
    },
  },
  plugins: [],
};
