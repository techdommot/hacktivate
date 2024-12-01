/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          DEFAULT: '#3B82F6', // bright blue
          dark: '#2563EB',    // darker blue
          light: '#60A5FA',   // lighter blue
        },
        'background': {
          DEFAULT: '#000000', // pure black
          light: '#0A0A0A',   // slightly lighter black
          card: '#121212',    // dark card background
        },
        'text': {
          DEFAULT: '#FFFFFF', // white
          muted: '#9CA3AF',   // muted gray
          dark: '#6B7280',    // darker text
        },
        'accent': {
          DEFAULT: '#60A5FA', // light blue
          dark: '#2563EB',    // darker blue
        },
        'success': '#059669',
        'warning': '#D97706',
        'error': '#DC2626',
        'border': '#27272A',  // very dark border
      },
      boxShadow: {
        'glow': '0 0 15px rgba(59, 130, 246, 0.15)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.7)',
      }
    },
  },
  plugins: [],
} 