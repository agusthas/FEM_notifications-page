const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        "custom-width": "clamp(300px, 100%, 740px)",
      },
      colors: {
        "custom-red": "hsl(1 90% 64% / <alpha-value>)",
        "custom-blue": "hsl(219 85% 26% / <alpha-value>)",
        "very-light-grayish-blue": "hsl(210 60% 98% / <alpha-value>)",
        "light-grayish-blue-1": "hsl(211 68% 84% / <alpha-value>)",
        "light-grayish-blue-2": "hsl(205 33% 90% / <alpha-value>)",
        "grayish-blue": "hsl(219 14% 63% / <alpha-value>)",
        "dark-grayish-blue": "hsl(217 12% 42% / <alpha-value>)",
        "very-dark-blue": "hsl(224 21% 14% / <alpha-value>)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
};
