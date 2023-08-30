import { client } from '@/libs/client'

const settings = await client.getObject({
  endpoint: 'settings',
})

const config = {
  siteMetadata: {
    name: settings.sitename || '',
    description: settings.description || '',
    cover: settings.cover,
    avatar: settings.avatar,
  },
  social: settings.social,
}

export default config
