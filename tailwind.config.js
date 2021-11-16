module.exports = {
  purge: {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./layout/**/*.{js,ts,jsx,tsx}",
      "./helpers/**/*.{js,ts,jsx,tsx}",
    ],
    safelist: [
      "bg-musica-universalis",
      "bg-paro",
      "bg-tapper",
      "bg-parks-api",
      "bg-exchangerator",
      "bg-cn"
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        utah: "url('/utah.jpg')",
        cn: "url('/cn.png')",
        "musica-universalis": "url('/musica-universalis.png')",
        magic: "url('/magic.png')",
        paro: "url('/paro.png')",
        tapper: "url('/tapper.png')",
        "parks-api": "url('/parks-api.png')",
        exchangerator: "url('/exchangerator.png')",
        "im-a-banana": "url('/Untitled.png')",
      },
      fontFamily: {
        monoton: ["Monoton", "cursive"],
        outline: ["Bungee", "cursive"],
      },
      colors: {
        primary: "rgba(36,14,5,.25)",
        secondary: "rgba(255,220,181,1)",
        sepia: "rgb(112,66,20,1)",
      },
      keyframes: {
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        blink: {
          from: {
            opacity: "1",
          },
          to: {
            opacity: "1",
          },
          "50%": {
            opacity: "0",
          },
        },
      },
      animation: {
        "fade-in-down": "fade-in-down 1s ease-out",
        "fade-in-up": "fade-in-up 1s ease-out",
        cursor: "blink 1s linear infinite forwards",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
