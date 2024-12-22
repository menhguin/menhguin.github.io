import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://menhguin.github.io'
  // Note: No base parameter needed since this is the main github.io site
});
