/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "var(--color-primary)",
          dark: "#4628b3",
        },
        secondary: {
          DEFAULT: "var(--color-secondary)",
          dark: "#329e43",
        },
      },
    },
  },
  plugins: [],
};
