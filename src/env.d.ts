/// <reference types="astro/client" />

export interface PageProps {
  title?: string
  description?: string
  ogp?: {
    type?: string
    image?: string
    url?: string
  }
}

interface ImportMetaEnv {
  readonly MICROCMS_SERVICE_DOMAIN: string
  readonly MICROCMS_API_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
