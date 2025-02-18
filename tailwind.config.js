const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/*.md',
    './*.html',
    './*.md',
  ],
  theme: {
    fontSize: {
      xs: "0.625rem", // 10px
      sm: "0.8125rem", // 13px
      base: "1rem", // 16px
      lg: "1.125rem", // 18px
      xl: "1.25rem", // 20px
      "2xl": "1.625rem", // 26px
      "3xl": "1.875rem", // 30px
      "4xl": "2.675rem", // 44px
      "5xl": "3.75rem", // 60px
      "6xl": "4.5rem", // 72px
      "7xl": "7.5rem", // 120px
      "8xl": "15rem", // 240px
    },
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1600px",
    },
    extend: {
      opacity: {
        '55': '.55',
      },
      lineHeight: {
        tight: "0.7",
        default: "1.5",
      },
      width: {
        "7/10": "70%",
      },
      // height: {
      //   "2": "2px",
      // },
      fontFamily: {
        display: ["freight-big-pro"],
        serif: ["abril-text", ...defaultTheme.fontFamily.serif],
        sans: ["SuisseIntl", ...defaultTheme.fontFamily.sans],
      },
      spacing: {
        30: "7.5rem",
        88: "22rem",
        "1/4": "25%",
        "3/10": "30%",
      },
      maxWidth: {
        prose: '65ch',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}