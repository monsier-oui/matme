import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'

import 'dotenv/config'
import type { Settings } from './src/env.d'
import { client } from './src/libs/client'

const settings: Settings = await client.getObject({
  endpoint: 'settings',
})

// https://astro.build/config
export default defineConfig({
  site: settings.url || 'http://localhost:3000',
  server: {
    host: true,
    port: 3000,
  },
  integrations: [react(), sitemap(), tailwind()],
  vite: {
    define: {
      'process.env.settings': JSON.stringify(settings),
    },
  },
})
