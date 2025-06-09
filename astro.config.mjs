import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import remarkGfm from 'remark-gfm';
import remarkSmartypants from 'remark-smartypants';
import rehypePrism from 'rehype-prism-plus';
import sitemap from '@astrojs/sitemap'; // ← ajoute cette ligne

export default defineConfig({
  site: 'https://www.byraphaellevy.com', // ← nécessaire pour le sitemap
  vite: {
    plugins: [tailwindcss()]
  },
  markdown: {
    remarkPlugins: [remarkGfm, remarkSmartypants],
    rehypePlugins: [rehypePrism]
  },
  integrations: [sitemap()] // ← ajoute cette ligne
});
