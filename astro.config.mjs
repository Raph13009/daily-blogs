import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import remarkGfm from 'remark-gfm';
import remarkSmartypants from 'remark-smartypants';
import rehypePrism from 'rehype-prism-plus'; // ← ligne importante

export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  markdown: {
    remarkPlugins: [remarkGfm, remarkSmartypants],
    rehypePlugins: [rehypePrism] // ← ici on l’active
  }
});
