import { defineConfig } from 'vitepress'
import { genFeed } from './genFeed.js'

export default defineConfig({
  lang: 'en-US',
  title: 'MultiVolt Energy blog',
  description: 'MultiVolt Energy blog',
  lastUpdated: true,
  cleanUrls: true,
  head: [
    ['meta', { name: 'theme-color', content: '#0f4c81' }],
    // open graph SEO tips
    ['meta', { property: 'og:locale', content: 'en_US' }],
    ['meta', { property: 'og:type', content: 'MultiVolt Energy blog' }],
    ['meta', { property: 'og:title', content: 'MultiVolt Energy blog' }],
    ['meta', { property: 'og:description', content: 'MultiVolt Energy blog' }],
    ['meta', { property: 'og:image', content: 'logo-multividas-blogging-platform-multividas-social-media-blog-multividas-posts-threads-multividas-comments-discussions-multividas-short-texts-multividas-social-blogging.svg' }],
    ['meta', { property: 'og:url', content: 'blog.multivolt.energy' }],
    ['meta', { property: 'og:site_name', content: 'MultiVolt Energy blog' }],
    // multividas tags
    ['meta', { property: 'multividas:card', description: 'summary' }],
    ['meta', { property: 'multividas:site', description: 'multivolt' }],
    ['meta', { property: 'multividas:title', description: 'MultiVolt Energy blog' }],
    ['meta', { property: 'multividas:description', description: 'MultiVolt Energy blog' }],
    ['meta', { property: 'multividas:image', description: 'https://avatars.githubusercontent.com/u/137715137?v=4' }],
    // usefathom
    [
      'script',
      {
        src: 'https://cdn.usefathom.com/script.js',
        'data-site': 'NYHGSGQV',
        'data-spa': 'auto',
        defer: ''
      }
    ],
    // favicon
    [
      'link',
      {
        rel: 'icon',
        type: 'image/svg+xml',
        src: 'https://developers.multividas.com/images/logo.svg'
      }
    ]
  ],
  buildEnd: genFeed
})
