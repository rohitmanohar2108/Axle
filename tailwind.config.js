// tailwind.config.js
module.exports = {
  darkMode: 'class', // Enable dark mode support
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#4F46E5', // Customize your primary color
        'secondary': '#6D28D9', // Customize your secondary color
        'background-dark': '#1F2937', // Dark background color
        'background-light': '#F3F4F6', // Light background color
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      boxShadow: {
        'custom': '0 4px 6px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}
