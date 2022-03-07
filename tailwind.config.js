// eslint-disable-next-line no-undef
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#F7B094',
        'secondary-color': '#F5717F',
        'tertiary-color': '#BF6B84'
      },
      spacing: {
        '128': '41rem',
      }
    },
    screens: {
      'phone': '200px',
      'desktop': '1024px',
    }
  },
  plugins: [],
}