module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {

      spacing: {
        '128': '28rem',
      },

      boxShadow: {
        '3xl': '0 35px 60px 15px rgba(0, 0, 0, 0.3)',

      }
    },
    fontFamily: {
      sans: ['M PLUS Rounded 1c', 'sans-serif'],
    },
    backgroundImage: {
      'wave': "url('./assets/layered-waves-haikei.svg')",
      'stacked-wave': "url('./assets/stacked-waves-haikei.svg')",
      'stackedLight': "url('./assets/stackedLight.svg')",
      'waveLight': "url('./assets/layered-light.svg')"
    },
    colors: {
      'primaryd': '#041C32',
      'secondaryd': '#04293A',
      'tertiaryd': '#064663',
      'accentd': '#ECB365',
      'light-blue': '#DBEAFE',
      'primaryl': '#CCD1E4',
      'secondaryl': '#CCF2F4',
      'tertiaryl': '#A4EBF3',
      'accentl': '#616161',
      "black": '#000000',
      "lilac": '#5463FF',
      "white": '#FFFFFF'
    },
  },
  plugins: [
    // require('@tailwindcss/typography')
  ],
}
