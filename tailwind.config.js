module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        geoai: {
          primary: '#1e3a8a', // Deep blue for tech/AI
          secondary: '#059669', // Green for geo/earth
          accent: '#7c3aed', // Purple for AI/ML
          neutral: '#374151', // Gray for data
          background: '#f9fafb', // Light background
          surface: '#ffffff', // White surface
        },
        earth: {
          land: '#16a34a', // Forest green
          water: '#0ea5e9', // Sky blue
          mountain: '#a3a3a3', // Gray for mountains
          desert: '#f59e0b', // Amber for desert
        },
        ai: {
          model: '#8b5cf6', // Purple for AI models
          data: '#06b6d4', // Cyan for data
          insight: '#f97316', // Orange for insights
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}