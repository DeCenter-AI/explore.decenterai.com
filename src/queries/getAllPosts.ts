import { client } from '@/lib/sanity'

export const getAllPosts = async () => {
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
}`

  const data = await client.fetch(Query)
  return data
}
