import { client } from './sanity'

export async function getPosts() {
  const query = `*[_type == "post"] | order(publishedAt desc){
    title,
    "slug": slug.current,
    excerpt,
    category,
    region,
    pullQuote,
    authorNote,
    publishedAt,
    featured,
    tags,
    heroImage
  }`

  return await client.fetch(query)
}