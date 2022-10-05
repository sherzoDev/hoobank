/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['**/*.html'],
  theme: {
    extend: {
      container: {
        padding: '25px',
      },
      screens: {
        ul: "372px",
        mn: '576px',
        sm: '680px',
        md: '768px',
        smd: '928px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      
      fontFamily: {
        body: ["Poppins"],
      },
      boxShadow: {
        boxShadowBttn: "0px 15px 15px -10px #FF9F8E",
        invoice: "inset -0.243217px -0.243217px 0.364826px rgba(0, 0, 0, 0.36);",
        paypal: "4px 6px 30px rgba(19, 36, 46, 0.25);",
      },
      colors: {
        text: '#ffffffb3',
        hero: "-webkit-radial-gradient(64.18% 64.18% at 71.16% 35.69%, #DEF9FA 0.89%, #BEF3F5 17.23%, #9DEDF0 42.04%, #7DE7EB 55.12%, #5CE1E6 71.54%, #33BBCF 100%)",
        income: " #00D2AA;",
        expenses: "#00D9F5;",
        may: "#14101D;",
        about: "0px 20px 100px -10px rgba(66, 71, 91, 0.1);",
        footer: '#0b0a0c99',
      },
      backgroundColor: {
        'bgBox': "#00040F",
      },
      backgroundImage: {
        'heroLinear': " linear-gradient(125.17deg, #272727 0%, #11101D 100%);",
        'heroBimg': "url('/images/hero-bg-imgg.png');",
        'linear': "radial-gradient(64.18% 64.18% at 71.16% 35.69%, #DEF9FA 0.89%, #BEF3F5 17.23%, #9DEDF0 42.04%, #7DE7EB 55.12%, #5CE1E6 71.54%, #33BBCF 100%);",
        'aboutUs': "linear-gradient(144.39deg, #FFFFFF -278.56%, #6D6D6D -78.47%, #11101D 91.61%);",
        'getStarted': "linear-gradient(157.81deg, #DEF9FA -43.27%, #BEF3F5 -21.24%, #9DEDF0 12.19%, #7DE7EB 29.82%, #5CE1E6 51.94%, #33BBCF 90.29%);",
        'about': "linear-gradient(153.47deg, rgba(255, 255, 255, 0) -341.94%, #14101D 95.11%);",
        'invoice': "linear-gradient(113.08deg, #FFFFFF -242.51%, #14101D 85.56%);",
        'paypal': "linear-gradient(110.53deg, #FFFFFF -265.46%, #14101D 96.75%);",
        'mar': "linear-gradient(90deg, #00F5A0 0%, #00D9F5 100%);",
        'cards': "url('/images/payment-bg.svg');",
        'peoples': "linear-gradient(144.39deg, #FFFFFF -278.56%, #6D6D6D -78.47%, #11101D 91.61%);",
        'peoples-decor': "linear-gradient(90deg, #1A2980 0%, #26D0CE 100%);",
      },
    },
  },
  plugins: [],
}
