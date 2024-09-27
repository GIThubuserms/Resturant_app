/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: { max: '352px' }, // Applies for screen sizes up to 352px
      // Include default breakpoints from Tailwind
      sm: '640px',  // min-width: 640px
      md: '768px',  // min-width: 768px
      lg: '1024px', // min-width: 1024px
      xl: '1280px', // min-width: 1280px
      '2xl': '1536px', // min-width: 1536px
    },
    extend: {},
  },
  plugins: [],
};
