import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_JLMn5EON.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../chunks/Base_bvMNE82W.mjs';
/* empty css                               */
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "data-astro-cid-zetdm5md": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen flex flex-col items-center justify-center bg-[#FAF7F4] px-4" data-astro-cid-zetdm5md> <div class="text-center max-w-lg mx-auto" data-astro-cid-zetdm5md> <h1 class="font-serif text-4xl sm:text-5xl font-bold mb-6 text-[#3A3732]" data-astro-cid-zetdm5md>This page doesn't exist (yet)</h1> <p class="text-lg text-[#3A3732] mb-10 font-serif" data-astro-cid-zetdm5md>Maybe I broke it. Maybe you typed something weird.</p> <a href="/" class="inline-block px-7 py-3 rounded-full bg-[#B3A89C] text-[#FAF7F4] font-serif text-lg font-semibold shadow-sm hover:bg-[#3A3732] hover:text-[#FAF7F4] transition-colors duration-200" data-astro-cid-zetdm5md>Take me home</a> </div> </main> ` })} `;
}, "/Users/raphaellevy/Desktop/daily-blogs/src/pages/404.astro", void 0);

const $$file = "/Users/raphaellevy/Desktop/daily-blogs/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
