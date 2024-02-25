import { client } from '@/lib/sanity'

export const getPostsByCategory = async (
  start: number = 0,
  end: number = 9,
  category: string,
  id: string = '',
) => {
  const Query = `
*[_type == "category" && title == $category] | order(_createdAt desc){
     "posts": *[_type == "post" && references(^._id) && _id != $id]{
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
     }[$start..$end]
}`

  const params = {
    start,
    end,
    category,
    id,
  }

  const data = await client.fetch(Query, params)
  return data
}
