import { c as createComponent } from './astro-component_Hi45VHHi.mjs';
import 'piccolore';
import { q as createRenderInstruction, h as addAttribute, r as renderTemplate, m as maybeRenderHead, p as renderTransition, l as renderComponent, v as renderHead, o as renderSlot } from './entrypoint_Dd7RKO5m.mjs';
import 'clsx';

async function renderScript(result, id) {
  const inlined = result.inlinedScripts.get(id);
  let content = "";
  if (inlined != null) {
    if (inlined) {
      content = `<script type="module">${inlined}</script>`;
    }
  } else {
    const resolved = await result.resolve(id);
    content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"></script>`;
  }
  return createRenderInstruction({ type: "script", id, content });
}

const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "/home/roberto/Descargas/Estudio/Astro/02-Pokemons-static/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/roberto/Descargas/Estudio/Astro/02-Pokemons-static/node_modules/astro/components/ClientRouter.astro", void 0);

const siteInfo = {
  title: "Pokemon Static",
  description: "A static site with Pokemon Data"
};

const $$NavBar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$NavBar;
  const links = [
    { href: "/", text: "Listado" },
    { href: "/pokemons/1", text: "Paginado" },
    { href: "/Favorites/favoritos", text: "Favoritos" }
  ];
  const currentPath = Astro2.url.pathname;
  return renderTemplate`<!-- component -->${maybeRenderHead()}<nav class="bg-white shadow dark:bg-gray-800"> <div class="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300"> <!-- {
            links.map(({href, text}) => (
                <a
                    href={href}
                    class:list={['text-gray-800 dark:text-gray-200 mx-1.5 sm:mx-6',
                        {
                            'border-blue-500 border-b-2': currentPath===href,
                        }
                    ]}
                >
                    {text}
                </a>
            ))
        } --> ${links.map(({ href, text }) => renderTemplate`<div> <a${addAttribute(href, "href")} class="text-gray-800 dark:text-gray-200 mx-1.5 sm:mx-6"> ${text} </a> ${currentPath === href && renderTemplate`<div class="border-blue-500 border-b-2 mx-4"${addAttribute(renderTransition($$result, "5mjsxs4i", "", "menu-line"), "data-astro-transition-scope")}></div>`} </div>`)} </div> </nav>`;
}, "/home/roberto/Descargas/Estudio/Astro/02-Pokemons-static/src/components/shared/navBar.astro", "self");

const $$MainLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$MainLayout;
  const { title = siteInfo.title, description = siteInfo.description, image } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="icon" href="/favicon.ico"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- SEO --><meta name="description"${addAttribute(description, "content")}><meta name="autor"${addAttribute("Roberto Romero", "content")}><!-- OG Metatags --><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(image, "content")}><title>${title}</title>${renderComponent($$result, "ClientRouter", $$ClientRouter, {})}${renderHead()}</head><body class="bg-slate-800 text-slate-100 "> ${renderComponent($$result, "NavBar", $$NavBar, {})} <main class="mt-10 m-auto max-w-3xl"> ${renderSlot($$result, $$slots["default"])} </main> </body></html>`;
}, "/home/roberto/Descargas/Estudio/Astro/02-Pokemons-static/src/Layout/MainLayout.astro", void 0);

export { $$MainLayout as $, renderScript as r };
