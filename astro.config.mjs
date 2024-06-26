import { defineConfig } from 'astro/config'
import tailwind from "@astrojs/tailwind"
import react from '@astrojs/react';

import robotsTxt from "astro-robots-txt"

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), robotsTxt()],
  site: 'https://suenidis.com/'
})
