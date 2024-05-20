/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      screens: {
        sm: '100%',
        md: '100%',
        lg: '100%',
        xl: '1200px',
        '2xl': '1200px',
      },
    },
    fontFamily: {
      'display': ['Cinzel Decorative'],
    },
    extend: {
      colors: {
        'primary': '#FCEB96',
        'secondary': '#A5764D',
      },
    },
  },
  plugins: [],
}

