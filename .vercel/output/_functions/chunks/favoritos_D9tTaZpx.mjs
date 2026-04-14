import { c as createComponent } from './astro-component_Hi45VHHi.mjs';
import 'piccolore';
import { l as renderComponent, r as renderTemplate } from './entrypoint_Dd7RKO5m.mjs';
import { $ as $$MainLayout } from './MainLayout_CIaeMlVN.mjs';
import { $ as $$Title } from './title_Dk9P_MIC.mjs';

const $$Favoritos = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Favorites" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Title", $$Title, {}, { "default": ($$result3) => renderTemplate`Favoritos` })} ${renderComponent($$result2, "FavoritePokemon", null, { "client:only": "solid-js", "client:component-hydration": "only", "client:component-path": "@components/pokemons/favoriteListPokemon", "client:component-export": "FavoritePokemon" })}  ` })}`;
}, "/home/roberto/Descargas/Estudio/Astro/02-Pokemons-static/src/pages/Favorites/favoritos.astro", void 0);

const $$file = "/home/roberto/Descargas/Estudio/Astro/02-Pokemons-static/src/pages/Favorites/favoritos.astro";
const $$url = "/Favorites/favoritos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Favoritos,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
