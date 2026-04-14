import { c as createComponent } from './astro-component_Hi45VHHi.mjs';
import 'piccolore';
import { m as maybeRenderHead, h as addAttribute, p as renderTransition, r as renderTemplate } from './entrypoint_Dd7RKO5m.mjs';
import 'clsx';
import './MainLayout_CIaeMlVN.mjs';

const $$PokemonsCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$PokemonsCard;
  const { name, url, isBig = false } = Astro2.props;
  const id = url.split("/").at(-2);
  const imagenUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
  return renderTemplate`<!-- <a href={\`/pokemons/\${name}\`}
    class=\`rounded flex flex-col justify-center items-center border\`> -->${maybeRenderHead()}<a${addAttribute(`/pokemons/${name}`, "href")}${addAttribute(`rounded flex flex-col justify-center items-center border`, "class")}> <img${addAttribute(imagenUrl, "src")}${addAttribute(name, "alt")}${addAttribute(renderTransition($$result, "577ogln7", "", `${name}-image`), "data-astro-transition-scope")}> <span class="capitalize">#${id} ${name}</span> </a>`;
}, "/home/roberto/Descargas/Estudio/Astro/02-Pokemons-static/src/components/pokemons/pokemonsCard.astro", "self");

export { $$PokemonsCard as $ };
