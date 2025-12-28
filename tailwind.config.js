/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: ["selector", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0d6efd",
        },
        info: {
          DEFAULT: "#00aaff",
        },
        success: {
          DEFAULT: "#198754",
        },
        warning: {
          DEFAULT: "#ffc107",
        },
        danger: {
          DEFAULT: "#dc3545",
        },
      },
    },
  },
  plugins: [],
};
