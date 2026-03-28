// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import solidJs from "@astrojs/solid-js";
import netlify from '@astrojs/netlify'; 

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  site: 'https://RoberDev96.github.io',
  base: '/PokeApi-Astro',
  integrations: [icon(), solidJs()],
});