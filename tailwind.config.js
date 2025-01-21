/** @type {import('tailwindcss').Config} */

import defaultTheme from "tailwindcss/defaultTheme"

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"Noto Sans"', '"Noto Sans Italic"', ...defaultTheme.fontFamily.sans],
        'mono' : ['"Noto Sans Mono"', ...defaultTheme.fontFamily.mono]
      }
    },
  },
  plugins: [],
}

