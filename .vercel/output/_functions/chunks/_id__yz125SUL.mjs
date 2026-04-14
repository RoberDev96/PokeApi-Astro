import { c as createComponent } from './astro-component_Hi45VHHi.mjs';
import 'piccolore';
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from './entrypoint_Dd7RKO5m.mjs';
import { $ as $$MainLayout } from './MainLayout_CIaeMlVN.mjs';
import { $ as $$PokemonsCard } from './pokemonsCard_BtfRCJig.mjs';

const getStaticPaths = (async () => {
  const resp = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
  const { results } = await resp.json();
  return results.map(({ name, url }) => {
    const id = url.split("/").at(-2);
    return {
      params: { id },
      props: { name, url }
    };
  });
});
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const { url, name } = Astro2.props;
  const audioSource = `https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/${id}.ogg`;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Algun Pokemon" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="mt-10 mx-10 flex flex-col justify-center items-center"> <div> <a class="text-blue-500 hover:underline" href="/">Regresar</a> <h1 class="text-3xl">${name}</h1> </div> ${renderComponent($$result2, "PokemonsCard", $$PokemonsCard, { "name": name, "url": url })} <audio controls class="mt-5"> <source${addAttribute(audioSource, "src")}>
Your browseer does no support the audio element.
</audio> </section> ` })}`;
}, "/home/roberto/Descargas/Estudio/Astro/02-Pokemons-static/src/pages/pokemon/[id].astro", void 0);

const $$file = "/home/roberto/Descargas/Estudio/Astro/02-Pokemons-static/src/pages/pokemon/[id].astro";
const $$url = "/pokemon/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$id,
    file: $$file,
    getStaticPaths,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
