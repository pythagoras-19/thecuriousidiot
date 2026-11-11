# the curious idiot

A personal learnings journal. Markdown posts with LaTeX math and syntax-highlighted code, styled to look like a rendered LaTeX document.

Lives at `stderr.mattdchristiansen.com`.

## Stack

- [Vite](https://vite.dev/) + React
- [MDX](https://mdxjs.com/) for posts (`src/posts/*.mdx`) — plain Markdown, with the option to drop in React components inline
- [remark-math](https://github.com/remarkjs/remark-math) + [KaTeX](https://katex.org/) for math (`$inline$` and `$$block$$`)
- [rehype-pretty-code](https://rehype-pretty-code.netlify.app/) (Shiki, Dracula theme) for syntax-highlighted code blocks
- [latex.css](https://latex.css) (forced dark mode) for the look

## Writing a post

Add a new `.mdx` file to `src/posts/` with frontmatter:

```md
---
title: Post Title
date: 2026-01-01
description: One line for the post list.
---

Your content here.
```

It'll automatically show up on the home page, sorted by date.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```
