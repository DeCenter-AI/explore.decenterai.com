import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId } from '../../sanity/env'
import ImageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn: false,
})

const builder = ImageUrlBuilder(client)

export const urlFor = (src: any) => {
  return builder.image(src).url
}
