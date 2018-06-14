module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',
    themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Guide', link: '/guide/' },
          { text: 'External', link: 'https://google.com' },
          {
            text: '菜单一',
            items: [
              { text: '666', link: '/language/chinese' },
              { text: '777', link: '/language/japanese' }
            ]
          },
          
        ],

        sidebar: [{
          title: 'Blog',
          collapsable: false,
          children: [
       
            '/'
          ]
        },
      
        {
          title: 'Blog',
          collapsable: false,
          children: [
       
            '/blog/assets'
          ]
        },
      
      ],
        // locales: {
        //   '/': {
        //     // text for the language dropdown
        //     selectText: 'Languages',
        //     // label for this locale in the language dropdown
        //     label: 'English',
        //     // text for the edit-on-github link
        //     editLinkText: 'Edit this page on GitHub',
        //     // algolia docsearch options for current locale
        //     algolia: {},
        //     nav: [
        //       { text: 'Nested', link: '/nested/' }
        //     ],
        //     sidebar: {
        //       '/': [/* ... */],
        //       '/nested/': [/* ... */]
        //     }
        //   },
        //   '/zh/': {
        //     // 语言下拉菜单的展示文本
        //     selectText: '选择语言',
        //     // 该语言在下拉菜单中的 label 标签
        //     label: '简体中文',
        //     // github 编辑链接的文字
        //     editLinkText: '在 GitHub 上编辑此页',
        //     nav: [
        //       { text: '嵌套', link: '/zh/nested/' }
        //     ],
        //     algolia: {},
        //     sidebar: {
        //       '/zh/': [/* ... */],
        //       '/zh/nested/': [/* ... */]
        //     }
        //   }
        // }
      },


//国际化配置
      // locales: {
      //   // 每个语言对象的键(key)，是语言的访问路径。
      //   // 然而，一种特例是将 '/' 作为默认语言的访问路径。
      //   '/': {
      //     lang: 'English', // 这个值会被设置在 <html> 的 lang 属性上
      //     title: 'VuePress',
      //     description: 'Vue-powered Static Site Generator'
      //   },
      //   '/zh/': {
      //     lang: '简体中文',
      //     title: 'VuePress',
      //     description: 'Vue 驱动的静态网站生成工具'
      //   }
      // },



  }



  function genSidebarConfig (title) {
    return [
      {
        title,
        collapsable: false,
        children: [
          '',
          'getting-started',
          'basic-config',
          'assets',
          'markdown',
          'using-vue',
          'custom-themes',
          'i18n',
          'deploy'
        ]
      }
    ]
  }