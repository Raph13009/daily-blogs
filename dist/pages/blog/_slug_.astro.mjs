import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../../chunks/astro/server_JLMn5EON.mjs';
import 'kleur/colors';
import fs from 'fs';
import matter from 'gray-matter';
import { $ as $$Base } from '../../chunks/Base_bvMNE82W.mjs';
import { remark } from 'remark';
import rehypeRaw from 'rehype-raw';
import rehypeStringify from 'rehype-stringify';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { r as rehypeImageDesktop, a as rehypeImageMobile } from '../../chunks/rehype-image-mobile_CVr62NH0.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://www.byraphaellevy.com");
async function getStaticPaths() {
  const postsDirectory = "./posts";
  const postFiles = fs.readdirSync(postsDirectory).filter((f) => f.endsWith(".md"));
  return postFiles.map((filename) => ({ params: { slug: filename.replace(/\.md$/, "") } }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const filePath = `./posts/${slug}.md`;
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  const fileDesktop = await remark().use(remarkParse).use(remarkRehype, { allowDangerousHtml: true }).use(rehypeRaw).use(rehypeImageDesktop).use(rehypeStringify).process(content);
  const fileMobile = await remark().use(remarkParse).use(remarkRehype, { allowDangerousHtml: true }).use(rehypeRaw).use(rehypeImageMobile).use(rehypeStringify).process(content);
  const htmlDesktop = String(fileDesktop);
  const htmlMobile = String(fileMobile);
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "data-astro-cid-4sn4zg3r": true }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="flex min-h-screen" data-astro-cid-4sn4zg3r> <main class="w-full flex flex-col items-center justify-start px-4 py-24" data-astro-cid-4sn4zg3r> <div class="w-full max-w-2xl" data-astro-cid-4sn4zg3r> <!-- Back to home --> <a href="/" class="inline-flex items-center text-sm text-[#b3a89c] hover:text-[#3a3732] transition-all group mb-6" data-astro-cid-4sn4zg3r> <svg class="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-astro-cid-4sn4zg3r> <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" data-astro-cid-4sn4zg3r></path> </svg>
Back to home
</a> <h1 class="text-3xl font-serif font-semibold text-[#3a3732] mb-2" data-astro-cid-4sn4zg3r>${data.title}</h1> ${data.description && renderTemplate`<p class="text-lg text-[#9c8e82] mb-2 leading-snug" data-astro-cid-4sn4zg3r>${data.description}</p>`} <div class="text-sm text-[#c7beb7] mb-10" data-astro-cid-4sn4zg3r>${data.date}</div> <!-- Image style -->  <!-- Desktop version --> <article class="hidden sm:block text-base text-[#3a3a3a] leading-relaxed prose prose-lg max-w-none" data-astro-cid-4sn4zg3r>${unescapeHTML(htmlDesktop)}</article> <!-- Mobile version --> <article class="sm:hidden text-base text-[#3a3a3a] leading-relaxed prose prose-lg max-w-none" data-astro-cid-4sn4zg3r>${unescapeHTML(htmlMobile)}</article> </div> </main> </div> `, "title": async ($$result2) => renderTemplate`<span data-astro-cid-4sn4zg3r>${data.title}</span>` })}`;
}, "/Users/raphaellevy/Desktop/daily-blogs/src/pages/blog/[slug].astro", void 0);

const $$file = "/Users/raphaellevy/Desktop/daily-blogs/src/pages/blog/[slug].astro";
const $$url = "/blog/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
