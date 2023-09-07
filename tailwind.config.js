/** @type {import('tailwindcss').Config} */
export default {
	important: true, // To Override MUI Style, please do this!!
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		screens: {
			xs: '310px',
			sm: '360px',
			md: '760px',
			lg: '1200px',
			xl: '1440px',
		},
		fontFamily: {
			sans: ['Raleway', 'sans-serif'],
		},
		extend: {
			colors: {
				primary: '#F8B501',
				secondary: '#3A3F47',
				success: '#4BD120',
				error: '#D14A20',
				'text-primary': '#3A3F47',
				'text-secondary': '#5D646F',
				'text-light': '#E2E8F0',
			},
		},
	},
	plugins: [],
};
