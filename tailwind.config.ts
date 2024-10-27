import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	darkMode: 'selector',

	theme: {
		extend: {
			colors: {
				'fuel-yellow': {
					// primary
					'50': '#fdf8e9',
					'100': '#fbf0c6',
					'200': '#f8de90',
					'300': '#f4c350',
					DEFAULT: '#efac29',
					'500': '#df9113',
					'600': '#c06e0e',
					'700': '#994e0f',
					'800': '#7f3e14',
					'900': '#6c3317',
					'950': '#3f1909'
				},
				'spring-green': {
					// secondary
					'50': '#eefff6',
					'100': '#d8ffec',
					'200': '#b4fed9',
					'300': '#79fcbc',
					DEFAULT: '#50f2a4',
					'500': '#0ed978',
					'600': '#05b460',
					'700': '#088d4e',
					'800': '#0c6f41',
					'900': '#0c5b37',
					'950': '#00331d'
				},
				'fuchsia-pink': {
					// accent
					'50': '#fcf5ff',
					'100': '#f6e9fe',
					'200': '#f0d6fe',
					'300': '#e4b6fc',
					'400': '#d387f9',
					'500': '#be50f2',
					'600': '#b038e5',
					'700': '#9927c9',
					'800': '#8025a4',
					'900': '#691f84',
					'950': '#4a0962'
				}
			}
		}
	},

	plugins: [typography]
} as Config;
