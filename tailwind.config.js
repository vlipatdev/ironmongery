module.exports = {
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			backgroundImage: {
				homepage:
					"linear-gradient(to right bottom, rgba(26, 26, 26, 1), rgba(26, 26, 26, 0.95)), url('../public/background.jpg')",
			},
			colors: {
				'dark-gray': '#1A1A1A',
				'golden-yellow': '#EDA750',
			},
		},
	},
	plugins: [],
}
