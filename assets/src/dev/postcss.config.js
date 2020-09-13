module.exports = {
  plugins: [
    require('postcss-import')({ path: '.' }),
    require('tailwindcss')('assets/src/tailwind.config.js'),
    require('postcss-nested'),
    require('autoprefixer'),
  ]
}
