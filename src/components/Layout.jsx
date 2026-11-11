import { Link } from 'react-router-dom'

export default function Layout({ children }) {
  return (
    <div className="journal-shell">
      <header className="journal-header">
        <Link to="/" className="journal-title">
          the curious idiot
        </Link>
      </header>
      <nav className="journal-nav">
        <Link to="/">Posts</Link>
      </nav>
      <main>{children}</main>
      <footer className="journal-footer">
        <p>Written by Null Johnson.</p>
      </footer>
    </div>
  )
}
