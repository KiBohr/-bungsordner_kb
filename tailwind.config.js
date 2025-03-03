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

            // glascolors
            "glas-red": "#bb0520",
            "glas-green": "#123813", 
            "glas-orange": "#da3a0a", 
            "glas-base": "#e6e9f2",
            "glas-beige": "#d7ab86",
            "glas-brown": "#984732",
            "glas-light-brown": "#ecd9cb",

            //glasblocks
            "block-yellow": "#d5bb42",
            "block-light-yellow": "#ecc564",
            "block-olive": "#715724",
            "block-grey": "#c1cace",
            "block-dusty-rose": "#a06279",
            "block-magenta": "#651937",
            "block-beige": "#d5bb96",
            "block-sage": "#79b76d",
            "block-brown": "#502f23",

            //brain
            "brain-brown": "#70453e",
            "brain-beige": "#faddb5",
            "brain-pink": "#f2a39c",
            "brain-light-blue": "#b7c4e6",
            "brain-blue": "#3b5091",
            "brain-orange": "#d6432f",
            "brain-senf": "#c07927",

    },
    },
  },
  plugins: [],
}

