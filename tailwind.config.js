/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // container: {
    //   center: true,
    //   padding: {
    //     DEFAULT: "1rem",
    //     sm: "4rem",
    //     lg: "4rem",
    //     xl: "5rem",
    //   },
    // },
    extend: {
      screens:{
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(90deg, #ffffff1a, #fff0)",
      },
      colors: {
        customBlue: "#83dbff",
        head: "#111827",
        bodyColor: "#212428",
        lightText: "#c4cfde",
        boxBg: "linear-gradient(145deg, #1e2024, #23272b)",
        designColor: "#ff014f",
      },
      fontFamily: {
        nav: ["Roboto Mono", "monospace"],
        main: ["Noto Nastaliq Urdu", "serif"],
        name: ["Montserrat Alternates", "sans-serif"],
        lota: ["Lato", "sans-serif"],
      },
      boxShadow: {
        shadowOne: "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",
      },
    },
  },
  plugins: [],
  darkMode: "selector",
};
