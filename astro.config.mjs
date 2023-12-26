import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  output: "server",
  site: "https://bunbao.sh",
  integrations: [tailwind(), mdx(), sitemap()],
  adapter: node({
    mode: "standalone"
  })
});