import { client } from '@/lib/sanity'

export const getAllPosts = async (start: number = 0, end: number = 9) => {
  const Query = `
*[_type == "post"] | order(_createdAt desc){
     "currentSlug": slug.current,
       author->{
         name
       },
       mainImage,
       title,
       likes,
       categories[]->{
         title
       }
}[$start..$end]`

  const params = {
    start,
    end,
  }

  const data = await client.fetch(Query, params)
  return data
}
