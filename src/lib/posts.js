const modules = import.meta.glob('../posts/*.mdx', { eager: true })

export const posts = Object.entries(modules)
  .map(([path, mod]) => {
    const slug = path.replace('../posts/', '').replace('.mdx', '')
    return {
      slug,
      Component: mod.default,
      ...mod.frontmatter,
    }
  })
  .sort((a, b) => new Date(b.date) - new Date(a.date))

export function getPost(slug) {
  return posts.find((post) => post.slug === slug)
}

export function getPostsByTopic(topicSlug) {
  return posts.filter((post) => post.topic === topicSlug)
}
