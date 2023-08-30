import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL || 'http://localhost:3000',
  server: {
    host: true,
    port: 3000,
  },
  integrations: [react(), sitemap(), tailwind()],
})
