/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#0482b2',
          'primary-dark': '#036a93',
          'primary-light': '#3aa6cf',
          secondary: '#2347c6',
          'secondary-dark': '#1c39a3',
          accent: '#8d3210',
          'accent-light': '#b04220',
          ink: '#0a1929',
          'ink-soft': '#1e3a52',
          mute: '#5a6b7c',
          line: '#e4ecf2',
          paper: '#fafcfd',
          cream: '#f5f9fb',
          whatsapp: '#25D366',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'cta': '0 10px 30px -8px rgba(4, 130, 178, 0.45), 0 4px 10px -2px rgba(4, 130, 178, 0.25), inset 0 1px 0 rgba(255,255,255,0.2)',
        'cta-hover': '0 18px 40px -8px rgba(4, 130, 178, 0.55), 0 6px 14px -2px rgba(4, 130, 178, 0.35), inset 0 1px 0 rgba(255,255,255,0.3)',
        'whatsapp': '0 10px 30px -6px rgba(37, 211, 102, 0.55), 0 4px 12px -2px rgba(37, 211, 102, 0.3)',
        'card': '0 4px 24px -8px rgba(10, 25, 41, 0.08), 0 2px 6px -1px rgba(10, 25, 41, 0.04)',
        'card-hover': '0 16px 40px -12px rgba(10, 25, 41, 0.18), 0 4px 12px -2px rgba(10, 25, 41, 0.08)',
        'lift': '0 30px 60px -20px rgba(4, 130, 178, 0.25)',
      },
      animation: {
        'pulse-ring': 'pulse-ring 2.4s cubic-bezier(0.455, 0.030, 0.515, 0.955) infinite',
        'float-slow': 'float-slow 8s ease-in-out infinite',
        'mesh-shift': 'mesh-shift 18s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'count-up': 'count-up 0.6s ease-out forwards',
      },
      keyframes: {
        'pulse-ring': {
          '0%': { transform: 'scale(0.95)', opacity: '0.8' },
          '80%, 100%': { transform: 'scale(1.6)', opacity: '0' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '50%': { transform: 'translateY(-12px) translateX(6px)' },
        },
        'mesh-shift': {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg) scale(1)' },
          '25%': { transform: 'translate(3%, -2%) rotate(2deg) scale(1.05)' },
          '50%': { transform: 'translate(-2%, 3%) rotate(-1deg) scale(0.98)' },
          '75%': { transform: 'translate(2%, 2%) rotate(1deg) scale(1.02)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'count-up': {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      maxWidth: {
        'page': '1240px',
      },
    },
  },
  plugins: [],
};
