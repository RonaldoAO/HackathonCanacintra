import { comma } from 'postcss/lib/list';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
			"custom-lg": "1024px",
			// => @media (max-width: 1535px) { ... }

			xl: { max: "1279px" },
			// => @media (max-width: 1279px) { ... }

			lg: { max: "1023px" },
			// => @media (max-width: 1023px) { ... }

			md: { max: "767px" },
			// => @media (max-width: 767px) { ... }

			sm: { max: "639px" },
			// => @media (max-width: 639px) { ... }
		},
    extend: {
      fontFamily:{
        comicfont: ["Comic", "sans-serif"],
        Montse: ["Montserrat","sans-serif"]
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}