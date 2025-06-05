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

module.exports = {
  content: [
    './src/**/*.{astro,js,ts,jsx,tsx,md}',
    './posts/**/*.md', // ← pour inclure ton contenu Markdown
  ],
  safelist: ['fullwidth'], // ← 👈 garde cette classe même si absente en dur
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};

