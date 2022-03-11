module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      textColor: {
        skin: {
          text: 'var(--txt-color)',
          white: 'var(--txt-white)',
          main: 'var(--main-color)',
          sceond: 'var(--second-color)',
          'text-light': 'var(--txt-color-light)',
          dark: 'var(--txt-color-dark)'
        }
      },

      backgroundColor: {
        skin: {


          main: 'var(--main-bg)',
          second: 'var(--second-bg)',

          'main-light': 'var(--main-bg-light)',
          'second-light': 'var(--second-bg-light)',
          'main-dark': 'var(--main-bg-dark)',
          'second-dark': 'var(--second-bg-dark)'

        }
      },

      boxShadow: {
        skin: 'var(--box-shadow)'
      },

      borderRadius: {
        skin: 'var(--border-radius)'
      },
      transitionTimingFunction: {
        'in-cubic': 'var(--transition-cubic)'
      }

    },
  },
  plugins: [],
}
