// TailwindCSS config file
// https://tailwindcss.com/docs/configuration
const plugin = require('tailwindcss/plugin')
module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  theme: {
    
    // Additional container layout
    container: {
      center: true,
      padding: '2rem',
    },
  },  
  variants: {
  },
  plugins: [
  ]
}
