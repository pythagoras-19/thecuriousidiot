export const topics = [
  { slug: 'ai-workflow-automation', title: 'AI & Workflow Automation' },
  { slug: 'real-time-communication', title: 'Real-Time Communication' },
]

export function getTopic(slug) {
  return topics.find((topic) => topic.slug === slug)
}
