import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "知识分享",
  description: "写过的笔记",
  themeConfig: {
    
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'AI大模型相关',
        items: [
          { text: '一、大模型相关的概念', link: '/AI大模型相关/一、大模型相关的概念' },
          { text: '二、大模型相关的组件', link: '/AI大模型相关/二、大模型相关的组件' },
          { text: '三、显卡', link: '/AI大模型相关/三、显卡' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
