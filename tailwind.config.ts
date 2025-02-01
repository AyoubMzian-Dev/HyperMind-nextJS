import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],

	theme: {
		extend: {
			colors: {
				background: '#010109',
				primary: '#6bdfd1', // Primary color (Green)
				secondary: '#094d02', // Secondary color (Dark Green)
				accent: '#5ccc43', // Accent color (Light Green)

				// Custom CSS variable-based colors
				mainBackground: 'var(--background)',
				mainBackgroundHover: 'var(--main-background-hover)',
				sectionsBackground: 'var(--secondary-background)',
				sectionsBackgroundHover: 'var(--sections-background-hover)',

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
