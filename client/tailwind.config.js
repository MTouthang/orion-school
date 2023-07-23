/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "background-color": "#05405B",
        "up-nav-color": "#212529",
      },
      backgroundImage: {
        "course-science": "url('/src/Assets/carouselImage/laboratory.jpg')",
        "course-art": "url('/src/Assets/arts.jpg')",
      },
    },
  },
};
