import { client } from '@/lib/sanity'

export const getPaginatedPosts = async (start: number, end: number) => {
  const Query = `
*[_type == "post"] | order(_createdAt desc){
     "currentSlug": slug.current,
       author->{
         name
       },
       mainImage,
       title,
       about,
       usage,
       prompt,
       discord,
       linkedin,
       telegram,
       xapp,
       likes,
       views,
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
