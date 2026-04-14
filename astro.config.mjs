// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import solidJs from "@astrojs/solid-js";
import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  
  output: 'static',  // Tu proyecto es estático
  integrations: [icon(), solidJs()],
  adapter: vercel({
    webAnalytics: {
      enabled: false,  
    },
  }),
});