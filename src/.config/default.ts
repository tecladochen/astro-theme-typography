import type { ThemeConfig } from '~/types'

export const defaultConfig: ThemeConfig = {
  site: {
    title: '孤独终洁',
    subtitle: 'No More Solitude',
    author: 'Teclado',
    description: '写文字、记生活，在网络的角落里留下成长与经历的痕迹——不再只是孤独，而是与自己对话。',
    website: 'https://blog.teclado.cn',
    pageSize: 8,
    socialLinks: [
      { name: 'rss', href: '/atom.xml' },
      { name: 'email', href: 'mailto:tecladochen@qq.com' },
      { name: 'bilibili', href: 'https://space.bilibili.com/297265384' },
      { name: 'github', href: 'https://github.com/tecladochen' },
    ],
    navLinks: [
      { name: 'Posts', href: '/' },
      { name: 'Archive', href: '/archive' },
      { name: 'About', href: '/about' },
    ],
    categoryMap: [{ name: '读书', path: 'reading' }],
    footer: [
      '© %year <a target="_blank" href="%website">%author</a>',
      '<a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener">浙ICP备2023044092号-3</a>',
    ],
  },
  appearance: {
    theme: 'system',
    locale: 'zh-cn',
    colorsLight: {
      primary: '#2b261f',
      background: '#f4efe6',
      muted: '#7a7268',
      accent: '#9c3b2d',
      rule: '#e2d6c4',
    },
    colorsDark: {
      primary: '#efe8dc',
      background: '#1c1916',
      muted: '#a89f93',
      accent: '#d4786a',
      rule: '#3a342c',
    },
    fonts: {
      header: '"Songti SC", "STSong", "Noto Serif SC", "Source Han Serif SC", serif',
      ui: '"PingFang SC", "Hiragino Sans GB", "Noto Sans SC", "Microsoft YaHei", sans-serif',
    },
  },
  seo: {
    twitter: '',
    meta: [],
    link: [],
  },
  rss: {
    fullText: true,
  },
  comment: {},
  analytics: {
    googleAnalyticsId: '',
    umamiAnalyticsId: '',
  },
  latex: {
    katex: false,
  },
}
