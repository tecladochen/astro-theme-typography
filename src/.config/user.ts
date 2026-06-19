import type { UserConfig } from '~/types'

export const userConfig: Partial<UserConfig> = {
  site: {
    title: '孤独终洁',
    subtitle: 'No More Solitude',
    author: 'teclado',
    description: '写文字、记生活，在网络的角落里留下成长与经历的痕迹——不再只是孤独，而是与自己对话。',
    website: 'https://blog.teclado.cn',
    pageSize: 5,
    socialLinks: [
      { name: 'rss', href: '/atom.xml' },
      { name: 'email', href: 'mailto:tecladochen@qq.com' },
      { name: 'bilibili', href: 'https://space.bilibili.com/297265384' },
      { name: 'github', href: 'https://github.com/tecladochen' },
    ],
    footer: [
      '© %year <a target="_blank" href="%website">%author</a>',
      '<a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener">ICP备案号待填写</a>',
    ],
    categoryMap: [
      { name: '随笔', path: 'essay' },
      { name: '技术', path: 'tech' },
      { name: '学习', path: 'learning' },
      { name: '折腾', path: 'tinkering' },
      { name: '创业', path: 'startup' },
    ],
  },
  latex: {
    katex: true,
  },
}
