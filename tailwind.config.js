/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      colors: {
          //red & blue
            "dark-blue": "#4354a2",
            "mid-blue": "#627bbd",
            "burnt-red": "#a0352b",
            "salmonish": "#e46548",
            "baby-pink": "#fcb4a8",
            "ice-blue": "#bbc3d6",
            "grey-blue": "#b3b8cf",
            "white": "#f7f8fc",

            // Trinkgeldrechner
            "light-orange": "#fb702b",
            "bg-color": "#abc3ff",
            "white": "#FFFFFF",
            "beige": "#fbead8",
            "dark-green": "#2e4c18",
            "dark-orange": "#c34725",
            "lime": "#e1ef97",

            // yellow stairs 
            "stairs-yellow": "#d8ac2f",
            "stairs-light-yellow": "#dbc360",
            "stairs-olive": "#5e4d17",
            "stairs-sage": "#8b9c46",
            "stairs-dark-blue": "#3f4c6c",
            "stairs-light": "#ededde",
            
            // red bath
            "rb-red": "#961312",
            "rb-iceblue": "#d0e6ed",
            "rb-grey-beige": "#beaa8b",
            "rb-beige": "#f0dcb7",
            "rb-forest": "#3c502d",
            "rb-mint": "#68a086",
            "rb-brown": "#6a341a",
    },
    },
  },
  plugins: [],
}

