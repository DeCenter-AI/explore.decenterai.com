import { PortableTextBlock } from 'sanity'

export type Post = {
  _id: string
  _createdAt: Date
  title: string
  description: string
  cat: {
    title: string
  }[]
  mainImage: string
  usage: PortableTextBlock[]
  prompts: PortableTextBlock[]
  about: PortableTextBlock[]
  currentSlug: string
  views: number
  likes: number
  xapp: string
  address: string
  telegram: string
  linkedin: string
  discord: string
  website: string
  categories: string
  author: string
}
