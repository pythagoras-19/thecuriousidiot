import { Link } from 'react-router-dom'
import { posts } from '../lib/posts'

export default function PostList() {
  return (
    <section>
      <h1>Posts</h1>
      <ul className="post-list">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link to={`/posts/${post.slug}`}>{post.title}</Link>
            {post.date && (
              <time dateTime={post.date} className="post-date">
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  timeZone: 'UTC',
                })}
              </time>
            )}
            {post.description && <p>{post.description}</p>}
          </li>
        ))}
      </ul>
    </section>
  )
}
