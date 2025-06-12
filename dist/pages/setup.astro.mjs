import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_JLMn5EON.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../chunks/Base_bvMNE82W.mjs';
export { renderers } from '../renderers.mjs';

const $$Setup = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Base", $$Base, {}, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="flex min-h-screen"> <main class="flex-1 flex flex-col items-center justify-center ml-[420px] max-lg:ml-1/2 max-md:ml-0 px-8 py-24"> <div class="w-full max-w-2xl"> <h1 class="text-3xl font-serif font-semibold mb-4">Setup</h1> <p class="text-lg mb-2">Matériel, logiciels et outils préférés à venir…</p> </div> </main> </div> `, "title": ($$result2) => renderTemplate`<span>Setup</span>` })}`;
}, "/Users/raphaellevy/Desktop/daily-blogs/src/pages/setup.astro", void 0);

const $$file = "/Users/raphaellevy/Desktop/daily-blogs/src/pages/setup.astro";
const $$url = "/setup";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Setup,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
