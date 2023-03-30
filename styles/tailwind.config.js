/** @type {import('tailwindcss').Config} */
const contentRoot = process.env.NODE_ENV === "production" ? "site" : "_site";
module.exports = {
  content: [`./${contentRoot}/**/*.{html,webc}`],
  theme: {
    extend: {
      colors: {
        brown: {
          lightest: "#f9f2ec",
          light: "#ecd9c6",
          DEFAULT: "#996633",
        },
        gold: {
          DEFAULT: "#dab574",
        },
      },
    },
  },
  plugins: [],
};
