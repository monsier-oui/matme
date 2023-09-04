/// <reference types="astro/client" />

import type { MicroCMSImage, MicroCMSObjectContent } from 'microcms-js-sdk'

export interface PageProps {
  title?: string
  description?: string
  ogp?: {
    type?: string
    image?: string
    url?: string
  }
}

export type Settings = {
  sitename: string
  url: string
  description?: string
  avatar?: MicroCMSImage
  cover: MicroCMSImage
  social: {
    fieldId: string
    title?: string
    href: string
    image?: string
  }[]
} & MicroCMSObjectContent

interface ImportMetaEnv {
  readonly MICROCMS_SERVICE_DOMAIN: string
  readonly MICROCMS_API_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
