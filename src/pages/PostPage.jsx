import { useParams, Link } from 'react-router-dom'
import { getPost } from '../lib/posts'

export default function PostPage() {
  const { slug } = useParams()
  const post = getPost(slug)

  if (!post) {
    return (
      <section>
        <h1>Post not found</h1>
        <Link to="/">Back to posts</Link>
      </section>
    )
  }

  const { Component, title, date } = post

  return (
    <article>
      <h1>{title}</h1>
      {date && (
        <time dateTime={date} className="post-date">
          {new Date(date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            timeZone: 'UTC',
          })}
        </time>
      )}
      <Component />
      <p>
        <Link to="/">&larr; Back to posts</Link>
      </p>
    </article>
  )
}
