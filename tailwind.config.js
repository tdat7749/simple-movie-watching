module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing:{
        '230px':'230px',
        '40px':'40px',
        '160px':'160px',
        '120px':'120px',
        '30px':'30px',
        '550px':'550px',
        '75px':'75px',
        '87px':'87px',
        '15px':'15px',
        '95px':'95px',
        '140px':'140px',
      },
      colors: {
        'navbar': '#333333',
        'menu':'#2D2D2D',
        'btn': '#cbd5e1',
        'color': '#cbd5e1',
        'hover': '#da966e',
        'background': '#1a1a1a',
        'bg-text': '#181818',
        'main-detail':'#181818',
        'title':'#ff9658',
        'detail-text':'#BBBBBB',
        'text-trending':'#BABABA',
        'time':'#5d5d5d',
        'footer':'#848484'
      },
      keyframes:{
        modal:{
          '0%':{
            opacity: '0.5',
            transform: 'translateY(-2rem)'
          },
          '100%':{
            opacity: '1',
            transform: 'translateY(0rem)'
          }
        }
      },
      amimation:{
        modal: 'modal .5s ease-in-out'
      }
    },
  },
  plugins: [],
}