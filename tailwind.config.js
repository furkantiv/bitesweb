// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // src klasörü altındaki tüm dosyalar için!
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "Arial", "Helvetica", "sans-serif"],
      },
      colors: {
        bitesblue: "#004CFF",
      },
    },
  },
  // ...
};
