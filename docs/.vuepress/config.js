module.exports = {
  themeConfig: {
    logo: '/logo.jpg',
    nav: [
      { text: 'Awesome', link: '/' },
      { text: 'Articles', link: '/articles/' },
    ],
    sidebar: [
      {
        title: 'Articles',
        path: '/articles/',
        collapsable: false,
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
      }
    ]
  }
}