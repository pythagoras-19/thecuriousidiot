import { useParams, Link } from 'react-router-dom'
import PostListing from '../components/PostListing'
import { getTopic } from '../lib/topics'
import { getPostsByTopic } from '../lib/posts'

export default function TopicPage() {
  const { topic: slug } = useParams()
  const topic = getTopic(slug)

  if (!topic) {
    return (
      <section>
        <h1>Topic not found</h1>
        <Link to="/">Back to posts</Link>
      </section>
    )
  }

  const posts = getPostsByTopic(slug)

  return (
    <section>
      <h1>{topic.title}</h1>
      {posts.length === 0 ? (
        <p>No posts yet.</p>
      ) : (
        <PostListing posts={posts} />
      )}
    </section>
  )
}
