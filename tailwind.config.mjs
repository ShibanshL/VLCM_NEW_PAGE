/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', "./node_modules/flowbite/**/*.js"],
	theme: {
		extend: {
			keyframes: {
				displace: {
				  '0%': { width:'0%' },
				  '100%': { width:'100%' },
				},
			  },
		},
	},
	plugins: [
        require('flowbite/plugin')
    ]
}
