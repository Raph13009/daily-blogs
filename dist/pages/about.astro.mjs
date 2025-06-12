import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../chunks/astro/server_JLMn5EON.mjs';
import 'kleur/colors';
import fs from 'fs';
import matter from 'gray-matter';
import { $ as $$Base } from '../chunks/Base_bvMNE82W.mjs';
import { remark } from 'remark';
import rehypeRaw from 'rehype-raw';
import rehypeStringify from 'rehype-stringify';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { r as rehypeImageDesktop, a as rehypeImageMobile } from '../chunks/rehype-image-mobile_CVr62NH0.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const filePath = "./about/about.md";
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  const fileDesktop = await remark().use(remarkParse).use(remarkRehype, { allowDangerousHtml: true }).use(rehypeRaw).use(rehypeImageDesktop).use(rehypeStringify).process(content);
  const fileMobile = await remark().use(remarkParse).use(remarkRehype, { allowDangerousHtml: true }).use(rehypeRaw).use(rehypeImageMobile).use(rehypeStringify).process(content);
  const htmlDesktop = String(fileDesktop);
  const htmlMobile = String(fileMobile);
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "data-astro-cid-kh7btl4r": true }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="flex min-h-screen" data-astro-cid-kh7btl4r> <main class="w-full flex flex-col items-center justify-start px-4 py-24" data-astro-cid-kh7btl4r> <div class="w-full max-w-2xl" data-astro-cid-kh7btl4r> <!-- Styles d'image desktop -->  <!-- Desktop --> <article class="hidden sm:block text-base text-[#3a3a3a] leading-relaxed prose prose-lg max-w-none" data-astro-cid-kh7btl4r>${unescapeHTML(htmlDesktop)}</article> <!-- Mobile --> <article class="sm:hidden text-base text-[#3a3a3a] leading-relaxed prose prose-lg max-w-none" data-astro-cid-kh7btl4r>${unescapeHTML(htmlMobile)}</article> </div> </main> </div> `, "title": async ($$result2) => renderTemplate`<span data-astro-cid-kh7btl4r>About</span>` })}`;
}, "/Users/raphaellevy/Desktop/daily-blogs/src/pages/about.astro", void 0);

const $$file = "/Users/raphaellevy/Desktop/daily-blogs/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
