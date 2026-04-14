import { c as createComponent } from './astro-component_Hi45VHHi.mjs';
import 'piccolore';
import { m as maybeRenderHead, s as spreadAttributes, h as addAttribute, r as renderTemplate, l as renderComponent, n as Fragment, u as unescapeHTML } from './entrypoint_Dd7RKO5m.mjs';
import { $ as $$MainLayout, r as renderScript } from './MainLayout_CIaeMlVN.mjs';
import { $ as $$PokemonsCard } from './pokemonsCard_BtfRCJig.mjs';
import { $ as $$Title } from './title_Dk9P_MIC.mjs';
import { getIconData, iconToSVG } from '@iconify/utils';

const icons = {"local":{"prefix":"local","lastModified":1776196875,"icons":{"heart-full":{"body":"<path fill=\"currentColor\" d=\"M2 9.137C2 14 6.02 16.591 8.962 18.911 10 19.729 11 20.5 12 20.5s2-.77 3.038-1.59C17.981 16.592 22 14 22 9.138S16.5.825 12 5.501C7.5.825 2 4.274 2 9.137\"/>"},"heart-outline":{"body":"<path fill=\"none\" stroke=\"currentColor\" stroke-dasharray=\"30\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m12 8-.76-1c-.88-1.16-2.18-2-3.74-2C5.01 5 3 7.01 3 9.5c0 .93.28 1.79.76 2.5.81 1.21 8.24 9 8.24 9m0-13 .76-1c.88-1.16 2.18-2 3.74-2C18.99 5 21 7.01 21 9.5c0 .93-.28 1.79-.76 2.5-.81 1.21-8.24 9-8.24 9\"><animate fill=\"freeze\" attributeName=\"stroke-dashoffset\" dur=\"0.6s\" values=\"30;0\"/></path>"}},"width":24,"height":24}};

const cache = /* @__PURE__ */ new WeakMap();

const $$Icon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Icon;
  class AstroIconError extends Error {
    constructor(message) {
      super(message);
      this.hint = "";
    }
  }
  const req = Astro2.request;
  const { name = "", title, desc, "is:inline": inline = false, ...props } = Astro2.props;
  const map = cache.get(req) ?? /* @__PURE__ */ new Map();
  const i = map.get(name) ?? 0;
  map.set(name, i + 1);
  cache.set(req, map);
  const includeSymbol = !inline && i === 0;
  let [setName, iconName] = name.split(":");
  if (!setName && iconName) {
    const err = new AstroIconError(`Invalid "name" provided!`);
    throw err;
  }
  if (!iconName) {
    iconName = setName;
    setName = "local";
    if (!icons[setName]) {
      const err = new AstroIconError('Unable to load the "local" icon set!');
      throw err;
    }
    if (!(iconName in icons[setName].icons)) {
      const err = new AstroIconError(`Unable to locate "${name}" icon!`);
      throw err;
    }
  }
  const collection = icons[setName];
  if (!collection) {
    const err = new AstroIconError(`Unable to locate the "${setName}" icon set!`);
    throw err;
  }
  const iconData = getIconData(collection, iconName ?? setName);
  if (!iconData) {
    const err = new AstroIconError(`Unable to locate "${name}" icon!`);
    throw err;
  }
  const id = `ai:${collection.prefix}:${iconName ?? setName}`;
  if (props.size) {
    props.width = props.size;
    props.height = props.size;
    delete props.size;
  }
  const renderData = iconToSVG(iconData);
  const normalizedProps = { ...renderData.attributes, ...props };
  const normalizedBody = renderData.body;
  const { viewBox } = normalizedProps;
  if (includeSymbol) {
    delete normalizedProps.viewBox;
  }
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(normalizedProps)}${addAttribute(name, "data-icon")}> ${title && renderTemplate`<title>${title}</title>`} ${desc && renderTemplate`<desc>${desc}</desc>`} ${inline ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "id": id }, { "default": ($$result2) => renderTemplate`${unescapeHTML(normalizedBody)}` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${includeSymbol && renderTemplate`<symbol${addAttribute(id, "id")}${addAttribute(viewBox, "viewBox")}>${unescapeHTML(normalizedBody)}</symbol>`}<use${addAttribute(`#${id}`, "href")}></use> ` })}`} </svg>`;
}, "/home/roberto/Descargas/Estudio/Astro/02-Pokemons-static/node_modules/astro-icon/components/Icon.astro", void 0);

const getStaticPaths = (async () => {
  const resp = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
  const { results } = await resp.json();
  return results.map((poke) => ({
    params: { name: poke.name },
    props: { name: poke.name, url: poke.url }
  }));
});
const $$name = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$name;
  const { name } = Astro2.params;
  const { url } = Astro2.props;
  const id = url.split("/").at(-2);
  const audioSource = `https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/${id}.ogg`;
  const imagenSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": `Pokemon - #${id} ${name}`, "description": `Informacion sobre el pokemon ${name}`, "image": `${imagenSrc}` }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="mt-10 mx-10 flex flex-col justify-center items-center"> <div class="flex flex-row"> <div> <button onclick="history.back()" class="text-blue-500 cursor-pointer">Regresar</button> ${renderComponent($$result2, "Title", $$Title, {}, { "default": async ($$result3) => renderTemplate`${name}` })} </div> <button id="btn-favorite" class="ml-4 hover:animate-pulse"${addAttribute(name, "data-name")}${addAttribute(id, "data-id")}> ${renderComponent($$result2, "Icon", $$Icon, { "data-outline": true, "name": "heart-outline", "size": 50 })} ${renderComponent($$result2, "Icon", $$Icon, { "data-full": true, "class": "hidden", "name": "heart-full", "size": 50 })} </button> </div> </section> ${renderComponent($$result2, "PokemonsCard", $$PokemonsCard, { "name": name, "url": url, "isBig": true })} <audio controls class="mt-5"> <source${addAttribute(audioSource, "src")}>
Your browseer does no support the audio element.
</audio> ` })} ${renderScript($$result, "/home/roberto/Descargas/Estudio/Astro/02-Pokemons-static/src/pages/pokemons/[name].astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/roberto/Descargas/Estudio/Astro/02-Pokemons-static/src/pages/pokemons/[name].astro", void 0);

const $$file = "/home/roberto/Descargas/Estudio/Astro/02-Pokemons-static/src/pages/pokemons/[name].astro";
const $$url = "/pokemons/[name]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$name,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
