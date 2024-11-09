/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    './*.html', 
    './*.css',
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        fadeOut: {
          '0%': { opacity: '1', transform: 'scale(1)' },
          '100%': { opacity: '0', transform: 'scale(0.95)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.6s cubic-bezier(0.68, -0.55, 0.27, 1.55) forwards',
        fadeOut: 'fadeOut 0.6s cubic-bezier(0.68, -0.55, 0.27, 1.55) forwards',
        dropdown: 'fadeIn 0.3s ease-out',
      },
    },
  },
  plugins: [],
}
