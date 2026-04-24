import {getPosts} from '@/lib/posts'
import BlogClient from './blogClient'


export default async function Blog() {
const posts = await getPosts()

return <BlogClient posts={posts} />

}