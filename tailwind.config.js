module.exports = {
  theme: {
    extend: {
      borderRadius: {
        'xl': '40px'
      },
      fontSize: {
        'title': '6rem',
      },
      height: {
        'card': '300px',
        'card-xl': '35VH',
        'half': '50%',
        'half-screen': '50VH',
        'quart-screen': '25VH'
      }
    },
    fontFamily: {
      'display': ['Josefin Sans', 'Roboto', 'sans-serif'],
      'body': ['Raleway', 'Roboto', 'sans-serif']
    },
  },
  variants: {},
  plugins: [
    function({ addUtilities }) {
      const utilities = {
        '.grid': {
          display: 'grid',
        }
      }
      
      addUtilities(utilities, ['responsive', 'hover'])
    },
  ]
}
