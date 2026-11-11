import { Link } from 'react-router-dom'

export default function Layout({ children }) {
  return (
    <div className="journal-shell">
      <header className="journal-header">
        <Link to="/" className="journal-title">
          the curious idiot
        </Link>
        <nav>
          <Link to="/">Posts</Link>
        </nav>
      </header>
      <main>{children}</main>
      <footer className="journal-footer">
        <p>Written by Matt Christiansen.</p>
      </footer>
    </div>
  )
}
