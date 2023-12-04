const { nextui } = require("@nextui-org/react")

/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'tumbleweed': {
        '50': '#fdf5ef',
        '100': '#fae7da',
        '200': '#f4ccb4',
        '300': '#eca883',
        '400': '#e47d53',
        '500': '#dd5d32',
        '600': '#cf4627',
        '700': '#ac3422',
        '800': '#892c23',
        '900': '#6f261f',
        '950': '#3c110e',
      },
      'emerald': {
        '50': '#ebfef4',
        '100': '#d0fbe3',
        '200': '#a4f6cc',
        '300': '#6aebb1',
        '400': '#2ed992',
        '500': '#0abd78',
        '600': '#009b63',
        '700': '#007c52',
        '800': '#036242',
        '900': '#035138',
        '950': '#012d21',
      },
      'charade': {
        '50': '#f5f7fa',
        '100': '#ebeef3',
        '200': '#d2dae5',
        '300': '#aab9cf',
        '400': '#7c94b4',
        '500': '#5c769b',
        '600': '#485f81',
        '700': '#3b4d69',
        '800': '#344158',
        '900': '#2f3a4b',
        '950': '#232a38',
      },
    },
    extend: {
      dropShadow : {
        'md' : '0px 0px 2px rgba(255,255,255,0.5)'
      }
    }
  },
  plugins: [nextui()],
}

