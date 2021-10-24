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
				delete: '#a73434',
			},
			screens: {
				navxl: '1300px',
			},
			zIndex: {
				n1: -1,
				n2: -2,
			},
			fontSize: {
				xxs: '10px',
			},
			maxWidth: {
				container: '1500px',
				tile: '500px',
			},
			maxHeight: {
				tile: '500px',
			},
			height: {
				vh25: '25vh',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
