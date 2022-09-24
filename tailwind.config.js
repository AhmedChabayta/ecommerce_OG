/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layout/**/*.{js,ts,jsx,tsx}',
  ],
  themes: [],

  plugins: [require('daisyui'), require('tailwind-scrollbar-hide')],
  daisyui: {
    styled: false,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: '',
    darkTheme: 'dark',
    themes: [
      {
        mytheme: {
          primary: '#248e09',
          secondary: '#000000',
          accent: '#aba2e5',
          neutral: '#201825',
          'base-100': '#000000',
          info: '#7296E3',
          success: '#4AE3B0',
          warning: '#904F0E',
          error: '#E13770',
        },
      },
    ],
  },
};
