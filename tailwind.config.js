const brandColors = {
  birdBlue: '#1D9BF0',
  platinum: '#E7E9EA',
  silver: '#71767B',
  onix: '#333639',
  richBlack: '#15202B'  
}
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ...brandColors,
        
        backgroundColor: brandColors.richBlack, 
        //ao invés de mexer no global.css, mudar a cor aqui e colocar a variavel no outro arquivo
        textColor: brandColors.platinum
      }
    },
  },
  plugins: [],
}
