import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import PostList from './pages/PostList'
import PostPage from './pages/PostPage'
import TopicPage from './pages/TopicPage'

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/topics/:topic" element={<TopicPage />} />
          <Route path="/posts/:slug" element={<PostPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
