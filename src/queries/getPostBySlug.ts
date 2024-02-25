import { client } from '@/lib/sanity'

export const getPostBySlug = async (slug: string, category: string) => {
  const Query = `
*[_type == "post" && slug.current == $slug] {
    "currentSlug": slug.current,
    "cat":categories[]->{
         title
       },
       ...
       
}[0]`

  const params = {
    slug,
    category,
  }

  const data = await client.fetch(Query, params)
  return data
}
