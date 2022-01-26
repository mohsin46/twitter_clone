module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: false, // or 'media' or 'class' => use depending on dark mode approach
	theme: {
		extend: {
			// Extend colors and themes here
			// If no dark or light theme is available, you can add colors directly to extend

			colors: {
				'color-blue': {
					light: '#1d9bf01a',
					dark: '#1DA1F2',
					darker: '#1a8cd8'
				},
				'color-gray': {
					light: '#00000008',
					dark: '#0f14191a'
				}
			},

			dark: {
				// Dark Theme colors
			},
			light: {
				// light theme colors
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
