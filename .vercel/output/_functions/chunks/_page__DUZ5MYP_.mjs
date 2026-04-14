import { c as createComponent } from './astro-component_Hi45VHHi.mjs';
import 'piccolore';
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from './entrypoint_Dd7RKO5m.mjs';
import { $ as $$MainLayout } from './MainLayout_CIaeMlVN.mjs';
import { $ as $$PokemonsCard } from './pokemonsCard_BtfRCJig.mjs';
import { $ as $$Title } from './title_Dk9P_MIC.mjs';

const getStaticPaths = (async ({ paginate }) => {
  const resp = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
  const { results } = await resp.json();
  return paginate(results, { pageSize: 20 });
});
const $$page = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$page;
  const title = "Pokemon Static";
  const { page } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": title }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Title", $$Title, {}, { "default": async ($$result3) => renderTemplate`Listado Paginado` })} ${maybeRenderHead()}<section aria-label="Listado de Pokemons" class="mt-5 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-4"> ${page.data.map(({ name, url }) => renderTemplate`${renderComponent($$result2, "PokemonsCard", $$PokemonsCard, { "name": name, "url": url })}`)} </section> <section class="flex px-10 mt-10 gap-2 items-center"> <a class="bg-blue-500 p-2 text-white rounded-md"${addAttribute(page.url.prev, "href")}>Anteriores</a> <a class="bg-blue-500 p-2 text-white rounded-md"${addAttribute(page.url.next, "href")}>Siguientes</a> <div class="flex flex-1"></div> <span class="text-xl font-bold">Pagina ${page.currentPage}</span> </section> ` })}`;
}, "/home/roberto/Descargas/Estudio/Astro/02-Pokemons-static/src/pages/pokemons/[page].astro", void 0);

const $$file = "/home/roberto/Descargas/Estudio/Astro/02-Pokemons-static/src/pages/pokemons/[page].astro";
const $$url = "/pokemons/[page]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$page,
    file: $$file,
    getStaticPaths,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
