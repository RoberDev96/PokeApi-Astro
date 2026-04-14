import { c as createComponent } from './astro-component_Hi45VHHi.mjs';
import 'piccolore';
import { m as maybeRenderHead, o as renderSlot, r as renderTemplate } from './entrypoint_Dd7RKO5m.mjs';
import 'clsx';

const $$Title = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<h1 class="sm:text-5xl text-2xl font-bold capitalize"> ${renderSlot($$result, $$slots["default"])} </h1> <div class="border-b-2 border-blue-500 mt-2"></div>`;
}, "/home/roberto/Descargas/Estudio/Astro/02-Pokemons-static/src/components/shared/title.astro", void 0);

export { $$Title as $ };
