/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx,md,mdx}',
    './docs/**/*.{js,jsx,ts,tsx,md,mdx}',
    './src/pages/**/*.{js,jsx,ts,tsx,md,mdx}',
    './src/components/**/*.{js,jsx,ts,tsx,md,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#355BE0', // Runopt Blue
          600: '#2a4bc7',
          700: '#1e3899',
          800: '#1e3a8a',
          900: '#1e3a8a',
        },
        secondary: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#B945CC', // Runopt Purple
          600: '#a855f7',
          700: '#9333ea',
          800: '#7c3aed',
          900: '#6b21a8',
        },
        runopt: {
          purple: '#B945CC',
          blue: '#355BE0',
          gradient: 'linear-gradient(135deg, #B945CC 0%, #355BE0 100%)',
          dark: '#1a1a1a',
          darker: '#0f0f0f',
          darkGradient: 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)',
        },
      },
      backgroundImage: {
        'runopt-gradient': 'linear-gradient(135deg, #B945CC 0%, #355BE0 100%)',
        'runopt-dark-gradient': 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)',
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false, // Disable Tailwind's base styles to avoid conflicts with Docusaurus
  },
}
