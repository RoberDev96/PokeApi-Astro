import { c as createComponent } from './astro-component_Hi45VHHi.mjs';
import 'piccolore';
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from './entrypoint_Dd7RKO5m.mjs';
import { $ as $$Title } from './title_Dk9P_MIC.mjs';
import { $ as $$MainLayout } from './MainLayout_CIaeMlVN.mjs';
import { $ as $$PokemonsCard } from './pokemonsCard_BtfRCJig.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const resp = await fetch("https://pokeapi.co/api/v2/pokemon/");
  const data = await resp.json();
  const title = "Pokemon Static";
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": title }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Title", $$Title, {}, { "default": async ($$result3) => renderTemplate`Listado de Pokemons` })} ${maybeRenderHead()}<section aria-label="Listado de Pokemons" class="mt-5 grid grid-cols-1 sm:grid-cols-4 md:grid-cols-5 gap-4"> ${data.results.map(({ name, url }) => renderTemplate`${renderComponent($$result2, "PokemonsCard", $$PokemonsCard, { "name": name, "url": url })}`)} </section> ` })}`;
}, "/home/roberto/Descargas/Estudio/Astro/02-Pokemons-static/src/pages/index.astro", void 0);

const $$file = "/home/roberto/Descargas/Estudio/Astro/02-Pokemons-static/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
