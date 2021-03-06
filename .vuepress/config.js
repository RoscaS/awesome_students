module.exports = {
  title: 'Awesome Students',
  ga: 'UA-99742998-2',
  markdown: {
    lineNumbers: true,
    config: md => {
      md.use(require("markdown-it-katex"))
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
    lastUpdated: 'Dernière mise à jour de cette page',
    nav: [
      {text: 'Home', link: '/'},
      {text: 'Tutos', link: '/tutos'},
      {text: 'Archives', link: 'https://roscas.github.io/'},
    ],
    sidebar: [
      {
        title: 'Cours',
        collapsable: true,
        children: [
          '/cours/algonum/',
          '/cours/programmation_concurente/',
          '/cours/protocoles_reseaux/',
          '/cours/traitement_signal/',
          '/cours/developpement_web/',
          '/cours/qualite_logiciel/',
          '/cours/design_patterns/',
          '/cours/base_de_donnees/',
          '/cours/genie_logiciel/',
          '/cours/compilateur/',
          '/cours/infographie/',
          '/cours/algorithmes/',
          '/cours/analyse/',
          '/cours/android/',
          '/cours/crypto/',
          '/cours/stats/',
          '/cours/droit/',
          '/cours/java/',
          '/cours/jee/',
          '/cours/tpd/',
          '/cours/cs/',
          '/cours/os/',
          '/cours/ia/',
          '/cours/qt/',
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
          '/articles/vuejs/',
          '/articles/developpement_web/',
          '/articles/web_design/',
          '/articles/dev_ops/',
          '/articles/reseaux/',
          '/articles/divers/',
          '/articles/ksp/',
        ],
      },
      {
        title: 'Projets',
        collapsable: true,
        children: [
          '/projets/archives/',
          '/projets/p21_GOL/',
          '/projets/p22_RTS/',
          '/projets/SwipeD/',
          '/projets/TA_Stereo-vision/',
        ],
      },
    ],
  },
};
