/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      animation: {
        cursor: 'cursor .6s linear infinite alternate',
        type: 'type 1.8s ease-out .8s 1 normal both',
        'type-reverse': 'type 1.8s ease-out 0s infinite alternate-reverse both'
      },
      keyframes: {
        type: {
			'0%': { width: '0ch' },
          '5%, 10%': { width: '1ch' },
          '15%, 20%': { width: '4ch' },
          '25%, 30%': { width: '6ch' },
          '35%, 40%': { width: '8ch' },
          '45%, 50%': { width: '10ch' },
          '55%, 60%': { width: '13ch' },
          '65%, 70%': { width: '16ch' },
          '75%, 80%': { width: '19ch' },
          '85%, 90%': { width: '21ch' },
          '95%': { width: '23ch' },
  
        }
      }
    }
  },
  plugins: []
}
