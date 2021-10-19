const colors = require('tailwindcss/colors');

module.exports = {
	purge: [],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				darkBlueCust: '#312783',
				darkBlueForm: '#2e257c',
				yellowCust: '#ffdd0e',
				blueCust: '#7a73af',
				lightGrayCust: '#8e88bb',
				grayContentCust: '#f2f2f2',
				graySidebarHover: '#eae9f2',
			},
			screens: {
				navxl: '1300px',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
