import { c as createComponent, r as renderComponent, a as renderTemplate, d as addAttribute, m as maybeRenderHead } from '../chunks/astro/server_JLMn5EON.mjs';
import 'kleur/colors';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { $ as $$Base } from '../chunks/Base_bvMNE82W.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const postsDirectory = "./posts";
  const postFiles = fs.readdirSync(postsDirectory).filter((f) => f.endsWith(".md"));
  const posts = postFiles.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContent);
    return {
      slug: filename.replace(/\.md$/, ""),
      ...data
    };
  }).sort((a, b) => new Date(b.date) - new Date(a.date));
  return renderTemplate`${renderComponent($$result, "Base", $$Base, {}, { "default": ($$result2) => renderTemplate(_a || (_a = __template(["  ", `<main class="flex flex-col md:flex-row min-h-screen px-6 pt-12 pb-24 gap-24 max-w-6xl mx-auto"> <!-- \u{1F9E0} BIO INTRO (left desktop / top mobile) --> <section class="w-full md:w-[40%] md:pr-12 flex flex-col justify-start pt-12"> <h1 class="text-3xl font-serif font-semibold text-[#3a3732] mb-4 leading-tight">
Rapha\xEBl is figuring things outt
</h1> <p class="text-[17px] text-[#3a3732] leading-relaxed mb-4">
This is my personal lab. I like exploring smart tools, tweaking product workflows, and building things that save time or remove friction.
</p> <p class="text-[17px] text-[#3a3732] leading-relaxed mb-4">
I'm not a developer \u2014 but I often end up writing a bit of code, testing setups, and breaking stuff to understand how it all works.
</p> <p class="text-[15px] text-[#a1978f] leading-relaxed">
This blog is where I document that journey. It's real and 100% hands-on.
</p> </section> <!-- \u{1F5C2}\uFE0F POSTS LIST --> <section id="posts-block" class="w-full md:w-[50%] bg-[#fdfaf6] rounded-2xl shadow border border-[#ece7e1] px-6 py-8 mt-12"> <!-- Pagination (top) --> <div id="pagination-top" class="flex items-center justify-between mb-6 text-[#b3a89c] text-sm"></div> <!-- Liste des posts --> <ul id="posts-list" class="flex flex-col gap-6"></ul> <!-- Pagination (bottom) --> <div id="pagination-bottom" class="flex items-center justify-between mt-6 text-[#b3a89c] text-sm"></div> </section> </main>  <div id="posts-data"`, ' hidden></div>  <script type="module">\n    const raw = document.getElementById("posts-data").dataset.json;\n    const posts = JSON.parse(raw.replaceAll(\'&quot;\', \'"\'));\n    const PAGE_SIZE = 10;\n\n    function getPage() {\n      const params = new URLSearchParams(window.location.search);\n      return Math.max(1, parseInt(params.get(\'page\') || \'1\', 10));\n    }\n\n    function renderPosts() {\n      const page = getPage();\n      const start = (page - 1) * PAGE_SIZE;\n      const end = start + PAGE_SIZE;\n      const paginated = posts.slice(start, end);\n\n      const list = document.getElementById(\'posts-list\');\n      list.innerHTML = paginated.map(post => `\n        <li class="hover:bg-[#f7f3ef] rounded-xl px-5 py-5 transition-all">\n          <a href="/blog/${post.slug}" class="block">\n            <div class="flex flex-col gap-1">\n              <span class="text-xs text-[#b3a89c]">${post.date}</span>\n              <span class="text-xl font-serif font-medium text-[#3a3732]">${post.title}</span>\n              <span class="text-base text-[#7c7367]">${post.description}</span>\n            </div>\n          </a>\n        </li>\n      `).join(\'\');\n\n      const totalPages = Math.ceil(posts.length / PAGE_SIZE);\n      const top = document.getElementById(\'pagination-top\');\n      const bottom = document.getElementById(\'pagination-bottom\');\n      const prevPage = page > 1 ? `<a href="?page=${page - 1}" class="hover:text-[#3a3732]">&larr;</a>` : `<span class="opacity-30">&larr;</span>`;\n      const nextPage = page < totalPages ? `<a href="?page=${page + 1}" class="hover:text-[#3a3732]">&rarr;</a>` : `<span class="opacity-30">&rarr;</span>`;\n      const block = `\n        ${prevPage}\n        <span>${start + 1}\u2013${Math.min(end, posts.length)} of ${posts.length} posts</span>\n        ${nextPage}\n      `;\n      top.innerHTML = block;\n      bottom.innerHTML = block;\n    }\n\n    renderPosts();\n  <\/script> '], ["  ", `<main class="flex flex-col md:flex-row min-h-screen px-6 pt-12 pb-24 gap-24 max-w-6xl mx-auto"> <!-- \u{1F9E0} BIO INTRO (left desktop / top mobile) --> <section class="w-full md:w-[40%] md:pr-12 flex flex-col justify-start pt-12"> <h1 class="text-3xl font-serif font-semibold text-[#3a3732] mb-4 leading-tight">
Rapha\xEBl is figuring things outt
</h1> <p class="text-[17px] text-[#3a3732] leading-relaxed mb-4">
This is my personal lab. I like exploring smart tools, tweaking product workflows, and building things that save time or remove friction.
</p> <p class="text-[17px] text-[#3a3732] leading-relaxed mb-4">
I'm not a developer \u2014 but I often end up writing a bit of code, testing setups, and breaking stuff to understand how it all works.
</p> <p class="text-[15px] text-[#a1978f] leading-relaxed">
This blog is where I document that journey. It's real and 100% hands-on.
</p> </section> <!-- \u{1F5C2}\uFE0F POSTS LIST --> <section id="posts-block" class="w-full md:w-[50%] bg-[#fdfaf6] rounded-2xl shadow border border-[#ece7e1] px-6 py-8 mt-12"> <!-- Pagination (top) --> <div id="pagination-top" class="flex items-center justify-between mb-6 text-[#b3a89c] text-sm"></div> <!-- Liste des posts --> <ul id="posts-list" class="flex flex-col gap-6"></ul> <!-- Pagination (bottom) --> <div id="pagination-bottom" class="flex items-center justify-between mt-6 text-[#b3a89c] text-sm"></div> </section> </main>  <div id="posts-data"`, ' hidden></div>  <script type="module">\n    const raw = document.getElementById("posts-data").dataset.json;\n    const posts = JSON.parse(raw.replaceAll(\'&quot;\', \'"\'));\n    const PAGE_SIZE = 10;\n\n    function getPage() {\n      const params = new URLSearchParams(window.location.search);\n      return Math.max(1, parseInt(params.get(\'page\') || \'1\', 10));\n    }\n\n    function renderPosts() {\n      const page = getPage();\n      const start = (page - 1) * PAGE_SIZE;\n      const end = start + PAGE_SIZE;\n      const paginated = posts.slice(start, end);\n\n      const list = document.getElementById(\'posts-list\');\n      list.innerHTML = paginated.map(post => \\`\n        <li class="hover:bg-[#f7f3ef] rounded-xl px-5 py-5 transition-all">\n          <a href="/blog/\\${post.slug}" class="block">\n            <div class="flex flex-col gap-1">\n              <span class="text-xs text-[#b3a89c]">\\${post.date}</span>\n              <span class="text-xl font-serif font-medium text-[#3a3732]">\\${post.title}</span>\n              <span class="text-base text-[#7c7367]">\\${post.description}</span>\n            </div>\n          </a>\n        </li>\n      \\`).join(\'\');\n\n      const totalPages = Math.ceil(posts.length / PAGE_SIZE);\n      const top = document.getElementById(\'pagination-top\');\n      const bottom = document.getElementById(\'pagination-bottom\');\n      const prevPage = page > 1 ? \\`<a href="?page=\\${page - 1}" class="hover:text-[#3a3732]">&larr;</a>\\` : \\`<span class="opacity-30">&larr;</span>\\`;\n      const nextPage = page < totalPages ? \\`<a href="?page=\\${page + 1}" class="hover:text-[#3a3732]">&rarr;</a>\\` : \\`<span class="opacity-30">&rarr;</span>\\`;\n      const block = \\`\n        \\${prevPage}\n        <span>\\${start + 1}\u2013\\${Math.min(end, posts.length)} of \\${posts.length} posts</span>\n        \\${nextPage}\n      \\`;\n      top.innerHTML = block;\n      bottom.innerHTML = block;\n    }\n\n    renderPosts();\n  <\/script> '])), maybeRenderHead(), addAttribute(JSON.stringify(posts).replaceAll('"', "&quot;"), "data-json")), "title": ($$result2) => renderTemplate`<span>Mon Blog Minimal</span>` })}`;
}, "/Users/raphaellevy/Desktop/daily-blogs/src/pages/index.astro", void 0);

const $$file = "/Users/raphaellevy/Desktop/daily-blogs/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
