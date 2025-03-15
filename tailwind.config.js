// tailwind.config.js

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Add any other directories you want to scan for classes here
  ],
  theme: {
    extend: {
      
    
      boxShadow: {
        custom_shadow: "0px 7px 23px 0px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [],
};
