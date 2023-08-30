import type {
  MicroCMSQueries,
  MicroCMSDate,
  MicroCMSContentId,
} from 'microcms-js-sdk'

import { client } from '@/libs/client'

export type Tag = {
  name: string
} & MicroCMSContentId &
  MicroCMSDate

// タグを取得
export const getTags = async (queries?: MicroCMSQueries): Tag[] => {
  const response = await client.get({
    endpoint: 'tags',
    queries: {
      fields: ['id', 'name'],
      limit: 99,
      ...queries,
    },
  })

  return response.contents
}
