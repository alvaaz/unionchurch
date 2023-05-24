module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'media',
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
