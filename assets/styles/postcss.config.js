
module.exports = {    
  plugins: [
    require('postcss-import')({
      path: ['assets/styles'],
    }),         
    require('tailwindcss')('./assets/styles/tailwind.config.js'),       
    require('autoprefixer')({
      grid: true,
      overrideBrowserslist: ['>1%']
    }),    
  ]
}