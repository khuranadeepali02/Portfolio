/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'theme-primary': 'var(--bg-primary)',
        'theme-secondary': 'var(--bg-secondary)',
        'theme-tertiary': 'var(--bg-tertiary)',
        'theme-text-primary': 'var(--text-primary)',
        'theme-text-secondary': 'var(--text-secondary)',
        'theme-text-muted': 'var(--text-muted)',
        'theme-border': 'var(--border-color)',
        'accent-blue': 'var(--accent-blue)',
      },
      backgroundColor: {
        'theme-primary': 'var(--bg-primary)',
        'theme-secondary': 'var(--bg-secondary)',
        'theme-tertiary': 'var(--bg-tertiary)',
      },
      textColor: {
        'theme-primary': 'var(--text-primary)',
        'theme-secondary': 'var(--text-secondary)',
        'theme-muted': 'var(--text-muted)',
      },
      borderColor: {
        'theme': 'var(--border-color)',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'scale-image': 'scaleImage 5s linear infinite',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'pulse-custom': 'pulse 2s ease-in-out infinite',
        'wiggle': 'wiggle 1s ease-in-out',
        'zoom-in': 'zoomIn 0.8s ease-out forwards',
        'rotate-in': 'rotateIn 1s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'slide-down': 'slideDown 0.8s ease-out forwards',
        'slide-left': 'slideLeft 0.8s ease-out forwards',
        'slide-right': 'slideRight 0.8s ease-out forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
      },
      keyframes: {
        scaleImage: {
          '0%': { filter: 'grayscale(0)', transform: 'scale(1)' },
          '50%': { filter: 'grayscale(1)', transform: 'scale(1.1)', boxShadow: '3px 3px 10px black' },
          '100%': { filter: 'grayscale(0)', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        glow: {
          '0%, 100%': { 
            boxShadow: '0 0 5px rgba(59, 130, 246, 0.3)',
            transform: 'scale(1)'
          },
          '50%': { 
            boxShadow: '0 0 25px rgba(59, 130, 246, 0.8)',
            transform: 'scale(1.02)'
          },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        wiggle: {
          '0%, 7%': { transform: 'rotateZ(0)' },
          '15%': { transform: 'rotateZ(-15deg)' },
          '20%': { transform: 'rotateZ(10deg)' },
          '25%': { transform: 'rotateZ(-10deg)' },
          '30%': { transform: 'rotateZ(6deg)' },
          '35%': { transform: 'rotateZ(-4deg)' },
          '40%, 100%': { transform: 'rotateZ(0)' },
        },
        slideUp: {
          'from': {
            opacity: '0',
            transform: 'translateY(50px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        slideDown: {
          'from': {
            opacity: '0',
            transform: 'translateY(-50px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        slideLeft: {
          'from': {
            opacity: '0',
            transform: 'translateX(50px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        slideRight: {
          'from': {
            opacity: '0',
            transform: 'translateX(-50px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        fadeIn: {
          'from': { 
            opacity: '0',
            transform: 'scale(0.95)',
          },
          'to': { 
            opacity: '1',
            transform: 'scale(1)',
          },
        },
        zoomIn: {
          'from': {
            opacity: '0',
            transform: 'scale(0.8)',
          },
          'to': {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
        rotateIn: {
          'from': {
            opacity: '0',
            transform: 'rotate(-180deg) scale(0.8)',
          },
          'to': {
            opacity: '1',
            transform: 'rotate(0deg) scale(1)',
          },
        },
      }
    },
  },
  plugins: [],
}
