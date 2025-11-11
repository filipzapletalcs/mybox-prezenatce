import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'mybox-green': '#4CAF50',
        'mybox-dark': '#1a1a1a',
        'mybox-darker': '#0d0d0d',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'slide-up': 'slideUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'bounce-subtle': 'bounceSubtle 2s ease-in-out infinite',
        'gradient-shift': 'gradientShift 15s ease-in-out infinite',
        'blob-move-1': 'blobMove1 20s ease-in-out infinite',
        'blob-move-2': 'blobMove2 25s ease-in-out infinite',
        'blob-move-3': 'blobMove3 30s ease-in-out infinite',
        'glow-pulse': 'glowPulse 4s ease-in-out infinite',
        'ambient-glow': 'ambientGlow 5s ease-in-out infinite',
        'spin': 'spin 1s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        glowPulse: {
          '0%, 100%': {
            opacity: '0.3',
          },
          '50%': {
            opacity: '0.7',
          },
        },
        ambientGlow: {
          '0%, 100%': {
            opacity: '0.2',
            transform: 'scale(0.95)',
          },
          '50%': {
            opacity: '0.4',
            transform: 'scale(1.05)',
          },
        },
        glow: {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(76, 175, 80, 0.3), 0 0 40px rgba(76, 175, 80, 0.2)'
          },
          '50%': {
            boxShadow: '0 0 30px rgba(76, 175, 80, 0.6), 0 0 60px rgba(76, 175, 80, 0.4)'
          },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-100px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        gradientShift: {
          '0%, 100%': {
            backgroundPosition: '0% 50%',
          },
          '50%': {
            backgroundPosition: '100% 50%',
          },
        },
        blobMove1: {
          '0%, 100%': {
            transform: 'translate(0, 0) scale(1)',
            opacity: '0.3',
          },
          '33%': {
            transform: 'translate(30px, -30px) scale(1.1)',
            opacity: '0.4',
          },
          '66%': {
            transform: 'translate(-30px, 30px) scale(0.9)',
            opacity: '0.25',
          },
        },
        blobMove2: {
          '0%, 100%': {
            transform: 'translate(0, 0) scale(1)',
            opacity: '0.3',
          },
          '33%': {
            transform: 'translate(-40px, 40px) scale(1.15)',
            opacity: '0.35',
          },
          '66%': {
            transform: 'translate(40px, -20px) scale(0.85)',
            opacity: '0.28',
          },
        },
        blobMove3: {
          '0%, 100%': {
            transform: 'translate(0, 0) scale(1)',
            opacity: '0.35',
          },
          '33%': {
            transform: 'translate(20px, 40px) scale(0.9)',
            opacity: '0.3',
          },
          '66%': {
            transform: 'translate(-35px, -35px) scale(1.2)',
            opacity: '0.4',
          },
        },
        spin: {
          '0%': {
            transform: 'rotate(0deg)',
          },
          '100%': {
            transform: 'rotate(360deg)',
          },
        },
        borderGlow: {
          '0%, 100%': {
            boxShadow: '0 0 15px rgba(76, 175, 80, 0.3), 0 0 30px rgba(76, 175, 80, 0.15), inset 0 0 15px rgba(76, 175, 80, 0.08)',
          },
          '50%': {
            boxShadow: '0 0 25px rgba(76, 175, 80, 0.5), 0 0 50px rgba(76, 175, 80, 0.25), inset 0 0 25px rgba(76, 175, 80, 0.15)',
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
