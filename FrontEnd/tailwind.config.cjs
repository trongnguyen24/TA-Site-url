/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: ['class'],
	theme: {
		fontFamily: {
			code: ['"Anonymous Pro"']
		},
		extend: {
			colors: {
				mber: '#B4FF00'
			}
		},
		container: {
			center: true,
			padding: {
				DEFAULT: '1.5rem',
				'2xl': '0rem'
			}
		}
	},
	plugins: [require('@thoughtbot/tailwindcss-aria-attributes')]
};
