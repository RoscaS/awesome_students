let blogSideBarPaths = ["/blog/", "/blog/categories/", "/blog/tags/", "/blog/authors/"]
module.exports = {
  title: 'Awesome students',
  themeConfig: {
    repo: 'RoscaS/awesome_students',
    repoLabel: 'github',
    editLinks: true,
    editLinkText: 'Editer cette page',

    nav: [{ text: "Blog", link: "/blog/" }],
    sidebar: {
      "/blog/": blogSideBarPaths,
      "/blog/tags/": blogSideBarPaths,
      "/blog/categories/": blogSideBarPaths,
      "/blog/authors/": blogSideBarPaths,
      // fallback
      "/": []
    },
    markdown: {
      lineNumbers: true,
    },
  }
}
