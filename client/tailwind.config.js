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
        "facilities-library": "url('/src/Assets/arts.jpg')",
        "facilities-lab": "url('/src/Assets/carouselImage/chemistryLab1.jpg')",
        "facilities-classroom": "url('/src/Assets/classroom.JPG')",
        "recreational-sports": "url('/src/Assets/sports.JPG')",
        "recreational-festivals": "url('/src/Assets/culture.jpg')",
        "recreational-tours": "url('/src/Assets/Tour.jpg')",
      },
    },
  },
};
