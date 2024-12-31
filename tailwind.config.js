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
            
    },
    },
  },
  plugins: [],
}

