module.exports = {
  themeConfig: {
    logo: '/logo.jpg',
    nav: [
      { text: 'Awesome', link: '/' },
      { text: 'Статьи', link: '/articles/' },
    ],
    sidebar: [
      {
        title: 'Статьи',
        path: '/articles/',
        collapsable: true,
        children: [
          {
            title: 'Link preload prefetch',
            path: '/articles/link-preload-prefetch'
          },
          {
            title: 'Optimization with $destroy in Vue',
            path: '/articles/optimize-destroy-vue/optimize-destroy-vue'
          },
        ]
      },

      {
        title: 'Структуры данных',
        path: '/data-structures/',
        collapsable: true,
        children: [
          {
            title: 'Linked list',
            path: '/data-structures/linked-list/'
          },
        ]
      }
    ]
  }
}