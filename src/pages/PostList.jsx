import PostListing from '../components/PostListing'
import { posts } from '../lib/posts'

export default function PostList() {
  return (
    <section>
      <h1>Posts</h1>
      <PostListing posts={posts} />
    </section>
  )
}
