import { client } from '@/lib/sanity'

export const searchPosts = async (text: string, start: number = 0, end: number = 9) => {
  const Query = `
*[_type == "post" && title match $text ] {
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
    text,
    start,
    end,
  }

  const data = await client.fetch(Query, params)
  return data
}
