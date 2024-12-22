import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://menhguin.github.io',
  // Remove the base line if you're deploying to menhguin.github.io
  // Keep it if you're deploying to menhguin.github.io/repo-name
});
