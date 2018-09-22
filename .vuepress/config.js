let blogSideBarPaths = ["/blog/", "/blog/categories/", "/blog/tags/", "/blog/authors/"]
module.exports = {
  title: 'Awesome students',
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    repo: 'RoscaS/awesome_students',
    repoLabel: 'github',
    editLinks: true,
    editLinkText: 'Editer cette page',

    nav: [
      {text: "Blog", link: "/blog/" },
      {text: "Tuto", link: "/tuto/"}
    ],
    sidebar: {
      "/blog/": blogSideBarPaths,
      "/blog/tags/": blogSideBarPaths,
      "/blog/categories/": blogSideBarPaths,
      "/blog/authors/": blogSideBarPaths,
      "/": []
    },

  }
}
