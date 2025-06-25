module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}", // ✅ Correct path
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['var(--font-poppins)'], // ✅ Add the Poppins variable here
      },
    },
  },
  plugins: [],
};