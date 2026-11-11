import { Link } from 'react-router-dom'
import { topics } from '../lib/topics'

export default function Layout({ children }) {
  return (
    <div className="journal-shell">
      <header className="journal-header">
        <Link to="/" className="journal-title">
          the curious idiot
        </Link>
      </header>
      <nav className="journal-nav">
        <Link to="/">All posts</Link>
        {topics.map((topic) => (
          <Link key={topic.slug} to={`/topics/${topic.slug}`}>
            {topic.title}
          </Link>
        ))}
      </nav>
      <main>{children}</main>
      <footer className="journal-footer">
        <p>Written by Null Johnson.</p>
      </footer>
    </div>
  )
}
