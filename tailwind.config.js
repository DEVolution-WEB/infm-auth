module.exports = {
	purge: [],
	darkMode: false, // or 'media' or 'class'
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			white: {
				DEFAULT: '#ffffff',
			},
			blue: {
				DEFAULT: '#312783',
				light: '#4f4692',
			},
			green: {
				light: '#6fcf97',
				DEFAULT: '#27AE60',
				dark: '#219653',
				darker: '#1e874b',
			},
			red: {
				light: '#FFEAEA',
				DEFAULT: '#EB5757',
				dark: '#C20D0D',
			},
			orange: {
				light: '#FFEBDA',
				DEFAULT: '#F66A0A',
				dark: '#A04100',
			},
			grey: {
				light: '#b6b6b6',
				DEFAULT: '#808080',
				dark: '#525252',
			},
			primary: {
				DEFAULT: '#24292E',
			},
			warning: {
				DEFAULT: '#D1711C',
			},
		},
		extend: {
			boxShadow: {
				default: '0px 10px 20px rgba(150, 150, 187, 0.1)',
			},
			fontSize: {
				'2rem': '2rem',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
