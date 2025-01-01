

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "16px",
      screen: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1313px",
      },
    },
    extend: {
      backgroundImage: {
        heroBg: "url(/public/assets/images/png/bg-hero-img.png)",
      },
    },
  },
  plugins: [],
};
