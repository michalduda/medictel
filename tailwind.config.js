const spacing = {}

for (let i = 0; i < 12; i = i + 0.5) {
  spacing[`${i}c`] = i / 12 * 100 + '%'
}

const colors = {
  magenta: '#FF0062',
  darkblue: '#0C2352',
  blue: '#00D0FC',
  green: '#00EDBF',
  yellow: '#FFD100',
  gray: '#9F9E9F'
}

module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing,
      colors,
      fontSize: {
        '5xl': ['3.25rem', { lineHeight: '1' }]
      },
      borderColor: colors,
      zIndex: {
        '-1': -1
      }
    }
  },
  variants: {
    extend: {
      margin: ['last']
    }
  },
  plugins: []
}
