/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html","./src/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        'type-normal':"#A0A2A0", 
        'type-fighting':"#FF8100", 
        'type-flying':"#82BAEF", 
        'type-poison':"#923FCC", 
        'type-ground':"#92501B", 
        'type-rock':"#B0AA82", 
        'type-bug':"#92A212", 
        'type-ghost':"#703F70",
        'type-steel':"#60A2B9",
        'type-fire':"#D92323", 
        'type-water':"#2481EF", 
        'type-grass':"#3DA224", 
        'type-electric':"#FAC100", 
        'type-psychic':"#EF3F7A", 
        'type-fairy': '#EF70EF',
        'type-ice':"#3DD9FF", 
        'type-dragon':"#4E63D9", 
        'type-dark':"##4F3F3D", 
        'type-unknown':"#000000", 
        'type-shadow':"#000000", 
      }
    },
    
  },
  variant:{
    extend:{
      display:["group-focus"],
      opacity:["group-focus"],
      inset:["group-focus"],
    }
  },
  plugins: [],
}

