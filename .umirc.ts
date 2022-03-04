import { defineConfig } from 'dumi';

export default defineConfig({
  description: '让开发更简单',
  logo: '/uml/images/logo.png',
  title: 'UML',
  base: '/uml/',
  publicPath: '/uml/',
  // mode: 'site',
  locales: [
    ['zh-CN', '中文']
  ],
  themeConfig: {},
  favicon: '/uml/images/favicon.ico',
  metas: [
    {
      name: 'keywords',
      content: '编程之上',
    },
    {
      name: 'description',
      content: '让开发变得有趣',
    },
  ],
  theme: {
    '@c-primary': '#C641EB',
  },
  styles: [
    `.markdown h3 a { color: #454d64; }
     .markdown blockquote p { margin: 5px  0; }`,
  ],
  404: true,
  // more config: https://d.umijs.org/config
});
