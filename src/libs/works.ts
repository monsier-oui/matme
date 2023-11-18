import type {
  MicroCMSQueries,
  MicroCMSDate,
  MicroCMSContentId,
  MicroCMSImage,
} from 'microcms-js-sdk'

import { client } from '@/libs/client'

export type Work = {
  title: string
  images?: MicroCMSImage[]
  caption?: string
  nsfw: boolean
  tags?: Tag[]
} & MicroCMSContentId &
  MicroCMSDate

// 投稿を全て取得
export const getAllWorks = async (queries?: MicroCMSQueries): Work[] => {
  const response = await client.getAllContents({
    endpoint: 'works',
    queries: {
      orders: '-publishedAt',
      ...queries,
    },
  })

  return response
}

// 投稿を1つ取得
export const getWork = async (
  contentId: string,
  queries?: MicroCMSQueries
): Work => {
  const response = await client.getListDetail({
    endpoint: 'works',
    contentId,
    queries,
  })

  return response
}

export const getThumbnail = ({
  work,
  height,
  width,
}: {
  work: Work
  height?: number
  width?: number
}): string => {
  if (work.images.length === 0) return ''

  const params = {}

  if (width) {
    params['w'] = width
    params['h'] = height ? height : width
    params['fit'] = 'crop'
  }

  if (work.nsfw) {
    params['txt'] = 'NSFW'
    params['txt-color'] = 'FFF'
    params['txt-size'] = '120'
    params['txt-fit'] = 'max'
    params['txt-font'] = 'HelveticaNeue-Bold'
    params['txt-align'] = 'middle,center'
    params['txt-shad'] = '7.5'
    params['blur'] = '100'
    params['monochrome'] = '808080'
  }

  return `${work.images[0].url}${
    Object.keys(params).length > 0
      ? `?${new URLSearchParams(params).toString()}`
      : ''
  }`
}
