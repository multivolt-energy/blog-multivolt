import path from 'path'
import { Feed } from 'feed'
import { writeFileSync } from 'fs'
import { createContentLoader, type SiteConfig } from 'vitepress'

const baseUrl = `https://blog.multivolt.energy`

export async function genFeed(config: SiteConfig) {
  const feed = new Feed({
    title: 'MultiVolt Energy blog',
    description: 'Official MultiVolt Energy Blog - Your go-to source for insights and information about MultiVolt Energy',
    id: baseUrl,
    link: baseUrl,
    language: 'en',
    image: 'https://developers.multivolt.energy/images/logo.svg',
    favicon: `${baseUrl}/favicon.ico`,
    copyright: `Copyright © ${(new Date()).getFullYear()}-present Soulaimane Yahya`
  })

  const posts = await createContentLoader('posts/*.md', {
    excerpt: true,
    render: true
  }).load()

  posts.sort(
    (a, b) =>
      +new Date(b.frontmatter.date as string) -
      +new Date(a.frontmatter.date as string)
  )

  for (const { url, excerpt, frontmatter, html } of posts) {
    feed.addItem({
      title: frontmatter.title,
      id: `${baseUrl}${url}`,
      link: `${baseUrl}${url}`,
      description: excerpt,
      content: html?.replaceAll('&ZeroWidthSpace;', ''),
      author: [
        {
          name: frontmatter.author,
          link: frontmatter.twitter
            ? `https://twitter.com/${frontmatter.twitter}`
            : undefined
        }
      ],
      date: frontmatter.date
    })
  }

  writeFileSync(path.join(config.outDir, 'feed.rss'), feed.rss2())
}
