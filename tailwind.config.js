import { comma } from "postcss/lib/list";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		screens: {},
		extend: {
			fontFamily: {
				comicfont: ["Comic", "sans-serif"],
				Montse: ["Montserrat", "sans-serif"],
			},
		},
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: ["light", "dark", "pastel"],
	},
};
