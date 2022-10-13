const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	experimental: {
		applyComplexClasses: true,
	  },
	theme: {
		extend: {
			height: {
				126: '36rem',
			},
			colors: {
				"primary": "#303692",
				"highlight": "#43C9CA",
				'orange': '#F56D20',
				"gray": '#AAAAAA',
				"primary-light": "#F5F5FA",
				"secondary": "#EAF1F4",
				'green': '#307592'
			},
			keyframes: {
				slide: {
					'0%, 100%': {
						transform: 'translateX(-25%)',
						'animation-timing-function': 'cubic-bezier(0.8,0,1,1)'
					},
					'50%': {
						transform: 'none',
						'animation-timing-function': 'cubic-bezier(0,0,0.2,1)'
					}
				}
			}
		}
	},

	plugins: []
};

module.exports = config;
