module.exports = {
  content: [
    './src/**/*.{astro,js,jsx,ts,tsx,mdx}',
    './posts/**/*.md',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}; 