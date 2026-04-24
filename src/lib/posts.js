import { client } from './sanity'

export async function getPosts() {
  const query = `*[_type == "post"] | order(publishedAt desc){
    title,
    slug,
    excerpt,
    publishedAt,
    readTime,
    featured,
    resourceful,
    tags
  }`

  return await client.fetch(query)
}