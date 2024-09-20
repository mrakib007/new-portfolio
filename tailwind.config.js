/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        darkBg: '#0a192f',  // Background color for the site
        darkText: '#ffffff', // Text color (white) for the site
      },
      container: {
        center: true, // Center the container
        padding: '1rem', // Padding around the container for responsiveness
      },
      maxWidth: {
        container: '1280px', // Max width of 1280px for the container
      },
    },
  },
  plugins: [],
}
