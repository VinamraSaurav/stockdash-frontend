/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Add paths to your components
  ],
  theme: {
    extend: {
      colors: {
        loginOrange: '#FF5722', // Define the custom color
      },
    },
  },
  plugins: [],
};
