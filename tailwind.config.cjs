/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				// ### Primary
				"tw-Moderate-violet": "hsl(263, 55%, 52%)",
				"tw-Very-dark-grayish-blue": "hsl(217, 19%, 35%)",
				"tw-Very-dark-blackish-blue": "hsl(219, 29%, 14%)",
				// ### Neutral
				"tw-Light-gray": "hsl(0, 0%, 81%)",
				"tw-Light-grayish-blue": "hsl(210, 46%, 95%)",
			},
			fontSize: {
				"tw-para": "13px",
			},
			fontFamily: {
				barlow: ["Barlow Semi Condensed", "sans-serif"],
			},
			backgroundImage: {
				quotation: "url(/images/bg-pattern-quotation.svg)",
			},
		},
	},
	plugins: [],
};
