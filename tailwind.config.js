module.exports = {
  purge: ['./pages/**/*.{tsx}', './components/**/*.{tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundImage: {
        'test1': "url('/Desert-bg.jpg')",
        'test2': "linear-gradient(93deg, rgba(238,225,255,1) 0%, rgba(254,253,255,1) 71%, rgba(235,235,235,1) 100%)",
        'm-u': "url('/m-u.png')",
        'paro': "url('/paro.png')",
        'exchangerator': "url('/exchangerator.png')"
    },
    fontFamily: {
      'logo': ['Monoton', 'cursive'],
      'outline': ['Bungee', 'cursive']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
