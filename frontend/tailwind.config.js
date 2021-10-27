module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    fontFamily: {
      sans: ['DM Sans', 'sans-serif'],
      serif: ['DM Serif Display', 'serif'],
    },
    boxShadow: {
      DEFAULT: '0px 22px 24px -10px rgba(0, 0, 0, 0.1)',
    },
    extend: {
      colors: {
        primary: { DEFAULT: '#FE5245', dark: '#FE4638' },
        gray: { DEFAULT: '#1C2C2D' },
        oil: { DEFAULT: '#435448' },
        pink: { DEFAULT: '#FACFB0', light: '#FCF0DB' },
      },
    },
  },
  variants: {
    extend: {
      cursor: ['disabled'],
      opacity: ['disabled'],
      textOpacity: ['disabled'],
      grayscale: ['hover', 'focus'],
      borderWidth: ['hover', 'focus'],
    },
  },
  plugins: [],
};
