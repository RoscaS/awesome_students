module.exports = {
  title: 'Awesome Students',
  markdown: {
    lineNumbers: true,
    config: md => {
      md.use(require("markdown-it-katex"));
    }
  },
  extraPages: [
    '/callback',
    '/login',
    '/logout',
  ],
  themeConfig: {
    repo: 'RoscaS/awesome_students',
    repoLabel: 'github',
    editLinks: true,
    editLinkText: 'Editer cette page',
    lastUpdated: 'Dernière mise à jour du wiki',
    nav: [
      {text: 'Home', link: '/'},
      {text: 'Tutos', link: '/tutos'},
    ],
    sidebar: [
      {
        title: 'Cours',
        collapsable: true,
        children: [
          '/cours/qt/',
          '/cours/java/',
          '/cours/algo/',
          '/cours/programmation_concurente/',
          '/cours/genie_logiciel/',
          '/cours/traitement_signal/',
          '/cours/base_de_donnees/',
          '/cours/protocoles_reseaux/',
          '/cours/developpement_web/',
          '/cours/analyse/',
        ],
      },
      {
        title: 'Articles',
        collapsable: true,
        children: [
          '/articles/algo/',
          '/articles/programmation/',
          '/articles/linux/',
          '/articles/cpp/',
          '/articles/java/',
          '/articles/java_script/',
          '/articles/developpement_web/',
          '/articles/web_design/',
          '/articles/dev_ops/',
          '/articles/divers/',
        ],
      },
      {
        title: 'Projets',
        // collapsable: false,
        children: [
          '/projets/p2/',
        ],
      },
    ],
  },
}
