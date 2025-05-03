import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],

	theme: {
		screens: {
			'xs': '475px',
			'sm': '640px',
			'md': '768px',
			'lg': '1024px',
			'xl': '1280px',
			'2xl': '1536px',
		  },
		extend: {
			colors: {
				'text': {
					50: '#ecf8ed',
					100: '#d9f2da',
					200: '#b4e4b6',
					300: '#8ed791',
					400: '#68ca6d',
					500: '#42bd48',
					600: '#35973a',
					700: '#28712b',
					800: '#1b4b1d',
					900: '#0d260e',
					950: '#071307',
				},
				'background': {
					50: '#ebf9ed',
					100: '#d8f3dc',
					200: '#b0e8b9',
					300: '#89dc96',
					400: '#62d072',
					500: '#3bc44f',
					600: '#2f9d3f',
					700: '#237630',
					800: '#174f20',
					900: '#0c2710',
					950: '#061408',
				},
				'primary': {
					50: '#ebf9ec',
					100: '#d7f4d9',
					200: '#b0e8b4',
					300: '#88dd8e',
					400: '#61d168',
					500: '#39c643',
					600: '#2e9e35',
					700: '#227728',
					800: '#174f1b',
					900: '#0b280d',
					950: '#061407',
				},
				'secondary': {
					50: '#ebfaec',
					100: '#d6f5d8',
					200: '#adebb1',
					300: '#85e08b',
					400: '#5cd664',
					500: '#33cc3d',
					600: '#29a331',
					700: '#1f7a25',
					800: '#145218',
					900: '#0a290c',
					950: '#051406',
				},
				'accent': {
					50: '#eafaeb',
					100: '#d5f6d7',
					200: '#abedb0',
					300: '#82e388',
					400: '#58da60',
					500: '#2ed139',
					600: '#25a72d',
					700: '#1c7d22',
					800: '#125417',
					900: '#092a0b',
					950: '#051506',
				},
			},


			fontFamily: {
				heading: ['Vesper Libre', 'serif'],
				body: ['IBe Vietnam Pro', 'sans-serif'],
			},

			fontSize: {
				sm: '0.750rem',
				base: '1rem',
				xl: '1.333rem',
				'2xl': '1.777rem',
				'3xl': '2.369rem',
				'4xl': '3.158rem',
				'5xl': '4.210rem',
			},

			fontWeight: {
				normal: '400',
				bold: '700',
			},

			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},

			keyframes: {
				'accordion-down': {
					from: {
						height: '0',
					},
					to: {
						height: 'var(--radix-accordion-content-height)',
					},
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)',
					},
					to: {
						height: '0',
					},
				},
			},

			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
			},
		},
	},

	plugins: [require("tailwindcss-animate")],
} satisfies Config;
