const themeDir = __dirname + '/../../../';

module.exports = {
  plugins: [
    require('postcss-import')({
      path: [themeDir]
    }),
    require('tailwindcss')(themeDir + 'assets/styles/tailwind.config.js'),
    // Configuration of purgecss for Tailwindcss
    // see https://tailwindcss.com/docs/controlling-file-size/#setting-up-purgecss
    // Using purgecss in dev can be tricky, because unused styles are stripped, so live changes will not be reflected.
    // On the other hand, purgecss can output some unexpected behavior,
    // which is why you should always do a complete run before pushing 
    // to production.
//    require('@fullhuman/postcss-purgecss')({
//      // Specify the paths to all of the template files in your project 
//      content: [
//        themeDir + 'layouts/**/*.html',
//        themeDir + 'exampleSite/content/**/*.html',
//        'layouts/**/*.html',
//        'content/**/*.html',
//      ],
//      whitelist: ['mark'],
//      // Include any special characters you're using in this regular expression
//      defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
//      fontFace: true
//    }),
    require('postcss-nested'),
    require('autoprefixer'),
  ]
}
