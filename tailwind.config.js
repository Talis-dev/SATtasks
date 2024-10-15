/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        'sm': '0 0 0.6em #94a3b8',
        'md': '0 0 1em #94a3b8',
        'lg': '0 0 2em #94a3b8',
        'xl': '0 0 3em #94a3b8',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-2px)' },
        },
      rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(90deg)' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-1px)' },
          '20%, 40%, 60%, 80%': { transform: 'translateX(1px)' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-12px)' },
        },
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        rotate: 'rotate 0.5s ease-in-out forwards',
        shake: 'shake 0.5s ease-in-out',
        slideLeft: 'slideLeft 0.8s ease-in-out forwards',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.hover-float': {
          transition: 'transform 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-2px) scale(1.05)',
          },
        },
      });
    },
  ],
}
