/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Include all your component files
  ],
  theme: {
    extend: {
      colors: {
        primary: "#EA5C2B",
        secondary: "#FF7F3F",
      },
    },
  },
  plugins: [],
};
