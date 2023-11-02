/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      brandPink: "#FF00C1",
      brandPurple: "#7000FF",
      black: "#080010",
      purple: "#160726",
      lightPurple: "#321B48",
      white: "#F9E0FF",
    },
    screens: {
      sm: "30rem", //480px
      md: "48rem", //768px
      lg: "64rem", //1024px
      xl: "80rem", //1280px
      xxl: "100rem", //1600px
    },
    extend: {
      backgroundImage: {
        "gradient-brand":
          "linear-gradient(to bottom right, #FF00C1 0%, #7000FF 50%) bottom right / 50% 50% no-repeat, linear-gradient(to bottom left, #FF00C1 0%, #7000FF 50%) bottom left / 50% 50% no-repeat, linear-gradient(to top left, #FF00C1 0%, #7000FF 50%) top left / 50% 50% no-repeat, linear-gradient(to top right, #FF00C1 0%, #7000FF 50%) top right / 50% 50% no-repeat",
        "btn-gradient":
          "linear-gradient(90deg, rgba(85, 85, 97, 0.60) 0%, #2F2F33 90%)",
      },
      //   linear-gradient(to bottom right, #FF00C1 0%, #7000FF 50%) bottom right / 50% 50% no-repeat, linear-gradient(to bottom left, #FF00C1 0%, #7000FF 50%) bottom left / 50% 50% no-repeat, linear-gradient(to top left, #FF00C1 0%, #7000FF 50%) top left / 50% 50% no-repeat, linear-gradient(to top right, #FF00C1 0%, #7000FF 50%) top right / 50% 50% no-repeat;

      fontFamily: {
        display: "var(--display-font)",
        body: "var(--body-font)",
      },
    },
  },
  plugins: [],
};
