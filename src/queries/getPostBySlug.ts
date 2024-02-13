import { client } from '@/lib/sanity'

export const getPaginatedPosts = async (slug: string, category: string) => {
  const Query = `
*[_type == "post" && slug.current == $slug] {
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
       },
       "similarPosts":*[_type == "category" && title == $category] | order(_createdAt desc){
     "posts": *[_type == "post" && references(^._id)]{
    "currentSlug": slug.current,

       mainImage,
       title,
     }[0..9]
}
       
}[0]`

  const params = {
    slug,
    category,
  }

  const data = await client.fetch(Query, params)
  return data
}
