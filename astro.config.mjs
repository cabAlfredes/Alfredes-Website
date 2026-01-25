import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import node from "@astrojs/node";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), sitemap()],
  output: "static",
  adapter: node({
    mode: "standalone",
  }),
  site: "https://www.alfredes.com.ar",
  vite: {
    plugins: [tailwindcss()],
  },
});
