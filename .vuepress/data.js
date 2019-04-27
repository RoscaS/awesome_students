const branchesFullName = {
  // Cours
  qt: "Qt5",
  java: "Java",
  algorithmes: "Algorithmes",
  programmation_concurente: "Programmation concurrente",
  genie_logiciel: "Génie logiciel",
  traitement_signal: "Traitement du signal",
  base_de_donnees: "BDD",
  protocoles_reseaux: "Reseau",
  developpement_web: "Web",
  analyse: "Analyse",
  design_patterns: "Design patterns",
  algonum: "Algorithmes numériques",
  python: "Python",
  stats: "Statistiques",

  // Articles
  algo: "Algo",
  programmation: "Prog",
  linux: "Linux",
  cpp: "Cpp",
  ksp: 'Ksp',
  java_script: "JS",
  vuejs: "VueJS",
  web_design: "Web",
  dev_ops: "Dev Ops",
  reseaux: "Reseaux",
  divers: "Divers"
};

const knownAuthors = [
  { name: "Sol Rosca", GHID: "22873101", class: "INF2B" },
  { name: "Michael Kneuss", GHID: "41299903", class: "INF2B" },
  { name: "Nathan Latino", GHID: "42647776", class: "INF2B" },
  { name: "Edwin Claude", GHID: "", class: "INF2A" }
];

const groups = {
  snm: [knownAuthors[0], knownAuthors[1], knownAuthors[2]],
  sm: [knownAuthors[0], knownAuthors[1]],
  sn: [knownAuthors[0], knownAuthors[2]],
};


export { branchesFullName, knownAuthors, groups };
