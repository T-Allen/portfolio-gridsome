module.exports = {
  theme: {
    extend: {
      colors: {
        lightGradient: 'linear-gradient(0deg, rgba(187,207,242,.8) 20%, rgba(187,207,242,0) 100%)',
        blackGradient: 'linear-gradient(0deg, rgba(33,33,33,1) 0%, rgba(33,33,33,0.25) 80%)',
        primary: '#212121',
        overlay: 'linear-gradient(rgba(255, 167, 241), rgba(255, 192, 249))',
        secondary: '#646464',
        accent: '#F3B5D7',
        white: '#FFFFFF'
      },
      backgroundSize: {
        'bg-large': '4rem'
      },
      borderRadius: {
        'xl': '40px'
      },
      fontSize: {
        'title': '6rem',
      },
      height: {
        'btn': '250px',
        'btn-md': '200px',
        'btn-sm': '160px',
        'border': '4px',
        'card-sm': '300px',
        'card-md': '350px',
        'card': '400px',
        'half': '50%',
        'half-screen': '50VH',
        'quart-screen': '25VH'
      },
      width: {
        'btn': '250px',
        'btn-sm': '160px',
        'btn-md': '200px',
        'nav': '300px',
        'card-sm': '300px',
        'card-md': '245px',
        'card': '280px',  
      },
      maxHeight: {
        'img': '800px',
        'img-md': '600px',
        'img-sm': '300px',
      },
    },
    fontFamily: {
      'display': ['Josefin Sans', 'Roboto', 'sans-serif'],
      'body': ['Raleway', 'Roboto', 'sans-serif']
    },
  },
  variants: {},
  plugins: [
    function({ addBase, config }) {
      addBase({
        'h1': {
          fontWeight: config('theme.fontWeight.bold'),
        },
        '@keyframes fade': {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1'
          }
        },
        '@keyframes slideDown': {
          '0%': {
            transform: 'translateY(-300px)',
          },
          '100%': {
            transform: 'translateY(0px)'
          }
        },
        '@keyframes slideLeft': {
          '0%': {
            transform: 'translateX(300px)',
          },
          '100%': {
            transform: 'translateX(0px)'
          }
        },
        '@keyframes slideRight': {
          '0%': {
            transform: 'translateX(-300px)',
          },
          '100%': {
            transform: 'translateX(0px)'
          }
        },
      })
    },
    function({ addComponents, config }) {
      const components = {
        '.btn': {
          '.border-b, .btn-mask': {
            transition: 'clip-path .5s ease-in-out',
          },
          'div': {
            alignItems: 'flex-end',
          },
        },
        '.btn-left': {
          '.btn-mask': {
            clipPath: 'circle(0% at 0% 100%)',
            '.border-b': {
              clipPath: 'circle(72px at 100% 100%)'
            }
          },
          '&:hover .btn-mask': {
            clipPath: 'circle(100% at 0% 100%)',
            '.border-b': {
              clipPath: 'circle(24px at 0% 100%)',
              width: '100%'
            }
          }
        },
        '.btn-right': {
          '.btn-mask': {
            clipPath: 'circle(0% at 100% 100%)',
            '.border-b': {
              clipPath: 'circle(72px at 0% 100%)'
            }
          },
          'div': {
            justifyContent: 'flex-end'
          },
          '&:hover .btn-mask': {
            clipPath: 'circle(100% at 100% 100%)',
            '.border-b': {
              clipPath: 'circle(24px at 100% 100%)',
              width: '100%'
            }
          }
        },
        '.card': {
          boxShadow: '0 3px 9px rgba(0, 0, 0, 0.1)',
          transition: 'box-shadow 100ms ease-in-out',
          '.card-gradient': {
            background: config('theme.colors.blackGradient'),
            opacity: '.8',
            transition: 'opacity 200ms'
          },
          '.card-text-container': {
            height: '20%',
            transition: 'height 300ms ease-in-out'
          },
          '&:hover': {
            boxShadow: '0 9px 12px 2px rgba(0, 0, 0, 0.1)',
            '.card-text-container': {
              height: '75%',
            },
          },
        },
        '.img-container': {
          'background-color': config('theme.colors.primary'),
          'background-position': 'top',
          transition: 'transform 300ms ease-out',
          '.feather, .img-overlay': {
            opacity: '0',
            transition: 'opacity 150ms',
          },
          '&:hover': {
            cursor: 'pointer',
            transform: 'scale(1.2)'
          },
          '&:hover .feather': {
            opacity: '1'
          },
          '&:hover .img-overlay': {
            opacity: '.75'
          }
        },
        '.img-overlay': {
          background: config('theme.colors.overlay')
        },
        '.progress': {
          backgroundColor: config('theme.colors.primary'),
          height: '6px',
          transition: 'width 200ms ease-out'
        },
        '.nav-mobile': {
          transform: 'translate(-100%)',
          transition: 'transform .5s ease-in-out'
        },
        '.icon-group': {
          color: config('theme.colors.primary')
        },
      }

      addComponents(components, ['responsive', 'hover', 'focus', 'group-hover'])
    },
    function({ addUtilities, config }) {
      const utilities = {
        '.bg-nav': {
          opacity: '0%',
          display: 'none',
          transition: 'opacity 1s display 1s 1s',
        },
        '.btn-text': {
          maxWidth: '120px'
        },
        '.border-b': {
          height: '3px',
          width: '100%',
          transition: 'width .75s .25s ease-out'
        },
        '.grid': {
          display: 'grid',
        },
        '.grid-card': {
          gridTemplateColumns: '1fr 1fr',
          gap: '1rem'
        },
        '.grid-image': {
          gridAutoRows: 'minmax(400px, 600px)'
        },
        '.grid-image-md': {
          gridAutoRows: 'minmax(auto, 400px)'
        },
        '.grid-image-sm': {
          gridAutoRows: 'minmax(auto, 300px)'
        },
        '.grid-card-xs': {
          gridTemplateColumns: '1fr',
          gap: '1rem'
        },
        '.grid-lg': {
          gridTemplateColumns: 'repeat(2, 50%)',
        },
        '.fade': {
          animation: '1s fade'
        },
        '.hero-image': {
          background: config('theme.colors.lightGradient')
        },
        '.img': {
          maxHeight: '800px',
          minHeight: '500px'
        },
        '.nav': {
          transform: 'translate(0%, 0%)',
          transition: 'transform .5s'
        },
        '.slide-down': {
          animation: '600ms ease-in-out slideDown'
        },
        '.slide-right': {
          animation: '600ms ease-in-out slideRight'
        },
        '.slide-left': {
          animation: '600ms ease-in-out slideLeft'
        },
        '.scrollover': {
          borderLeft: '3px solid rgba(255, 167, 241)',
          fontWeight: 'bold'
        },
        '.label-border': {
          width: '4px',
          borderRadius: '6px',
          backgroundColor: config('theme.colors.primary'),
        },
        '.border-background': {
          backgroundColor: '#c6c6c6'
        },
        '.label': {
          maxHeight: '0px',
        },
      }
      
      addUtilities(utilities, ['responsive', 'hover', 'active'])
    },
  ]
}
