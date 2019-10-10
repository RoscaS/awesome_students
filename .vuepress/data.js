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
  crypto: "Crypto",
  ia: "IA",
  android: "Android",
  programmation: "Prog",
  linux: "Linux",
  cpp: "Cpp",
  ksp: 'Ksp',
  java_script: "JS",
  vuejs: "VueJS",
  web_design: "Web",
  dev_ops: "Dev Ops",
  reseaux: "Reseaux",
  divers: "Divers",
  jee: "Jee",
  droit: "Droit",
  compilateur: "Compilateur",
  infographie: "Infographie",

};

const knownAuthors = [
  { name: "Sol Rosca", GHID: "22873101", class: "INF3B" },
  { name: "Michael Kneuss", GHID: "41299903", class: "INF3B" },
  { name: "Nathan Latino", GHID: "42647776", class: "INF3B" },
  { name: "Edwin Claude", GHID: "", class: "INF3A" },
  { name: "David Rhis", GHID: "55483278", class: "INF3A" },
];

const groups = {
  snd: [knownAuthors[0], knownAuthors[2], knownAuthors[4]],
  snm: [knownAuthors[0], knownAuthors[1], knownAuthors[2]],
  sm: [knownAuthors[0], knownAuthors[1]],
  sn: [knownAuthors[0], knownAuthors[2]],
};


export { branchesFullName, knownAuthors, groups };
