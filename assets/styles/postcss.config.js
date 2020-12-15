// PurgeCSS
// example here: https://github.com/dirkolbrich/hugo-theme-tailwindcss-starter/blob/main/assets/css/postcss.config.js
const purgecss = require('@fullhuman/postcss-purgecss')({

  // Specify the paths to all of the template files in your project
  content: [
    'layouts/**/*.html',
    'content/**/*.{md,html}',
    'public/**/*.html'
  ],

  // This is the function used to extract class names from your templates
  defaultExtractor: content => {
    // Capture as liberally as possible, including things like `h-(screen-1.5)`
    const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []

    // Capture classes within other delimiters like .block(class="w-1/2") in Pug
    const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || []

    return broadMatches.concat(innerMatches)
  }
})

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
  ],
  // purge only in `production` environment
  ...(process.env.HUGO_ENVIRONMENT === 'production' ? [purgecss] : [])
}