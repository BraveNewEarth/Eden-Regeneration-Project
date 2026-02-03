/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0891B2',
        secondary: '#22D3EE',
        accent: '#22C55E',
        background: '#ECFEFF',
        surface: '#FFFFFF',
        text: '#164E63',
      },
      fontFamily: {
        sans: ['Poppins', 'Open Sans', 'sans-serif'],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
    },
  },
  plugins: [],
}
