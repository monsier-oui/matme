import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'
import dotenv from 'dotenv'

dotenv.config({ path: `${process.cwd()}/.env.production` })

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL,
  server: {
    host: true,
    port: 3000,
  },
  integrations: [react(), sitemap(), tailwind()],
})
