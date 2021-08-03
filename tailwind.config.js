module.exports = {
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './pages/**/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './components/**/**/*.{js,ts,jsx,tsx}',
    './components/**/**/**/*.{js,ts,jsx,tsx}',
    './components/**/**/**/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false,
  theme: {
    fontFamily: {
      sans: ['DM Sans', 'sans-serif'],
      serif: ['DM Serif Display', 'serif'],
    },
    extend: {
      colors: {
        primary: { DEFAULT: '#FE5245', dark: '#FE4638' },
        gray: { DEFAULT: '#1C2C2D' },
        oil: { DEFAULT: '#435448' },
        pink: { DEFAULT: '#FACFB0' },
      },
    },
  },
  variants: {
    extend: {
      cursor: ['disabled'],
      opacity: ['disabled'],
      textOpacity: ['disabled'],
      grayscale: ['hover', 'focus'],
    },
  },
  plugins: [],
};
