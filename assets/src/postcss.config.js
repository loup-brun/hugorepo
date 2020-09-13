module.exports = {
  plugins: [
    require('postcss-import')({ path: '.' }),
    require('tailwindcss')('assets/src/tailwind.config.js'),
    // Configuration of purgecss for Tailwindcss
    // see https://tailwindcss.com/docs/controlling-file-size/#setting-up-purgecss
    require('@fullhuman/postcss-purgecss')({
      // Specify the paths to all of the template files in your project 
      content: [
            'layouts/**/*.html',
            'content/**/*.{md,html}',
        ],
      whitelist: ['mark', 'li', 'li::before'],
      // Include any special characters you're using in this regular expression
      defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
      fontFace: true
    }),
    require('postcss-nested'),
    require('autoprefixer')({
      grid: true
    }),
    require('postcss-reporter'),
  ]
}
