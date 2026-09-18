export const SUBJECTS = [
  {
    "id": "maths",
    "name": "Mathématiques (50 Ex. - 500 Q.)",
    "icon": "Calculator",
    "color": "from-blue-600 to-indigo-700",
    "badgeColor": "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300",
    "description": "Pythagore, Thalès, Calcul littéral, Équations, Fonctions, Trigonométrie, Probabilités.",
    "chaptersCount": 4,
    "focus3eme": true
  },
  {
    "id": "francais",
    "name": "Français (35 Ex. - 350 Q.)",
    "icon": "BookOpen",
    "color": "from-emerald-600 to-teal-700",
    "badgeColor": "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300",
    "description": "Analyse de texte, Autobiographie, Grammaire, Figures de style, Réécriture, Orthographe.",
    "chaptersCount": 4,
    "focus3eme": true
  },
  {
    "id": "histoire-geo",
    "name": "Histoire-Géo & EMC (35 Ex. - 350 Q.)",
    "icon": "Globe",
    "color": "from-amber-600 to-orange-700",
    "badgeColor": "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300",
    "description": "Guerres mondiales, Guerre froide, Aménagement du territoire, Vème République, Citoyenneté.",
    "chaptersCount": 4,
    "focus3eme": true
  },
  {
    "id": "svt",
    "name": "SVT (28 Ex. - 280 Q.)",
    "icon": "Dna",
    "color": "from-green-600 to-emerald-800",
    "badgeColor": "bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300",
    "description": "Génétique et ADN, Système immunitaire, Tectonique des plaques et Évolution.",
    "chaptersCount": 3,
    "focus3eme": true
  },
  {
    "id": "physique-chimie",
    "name": "Physique-Chimie (28 Ex. - 280 Q.)",
    "icon": "Zap",
    "color": "from-purple-600 to-violet-800",
    "badgeColor": "bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300",
    "description": "Atomes et ions, Gravitation, Poids et masse, Électricité, Vitesse et Énergie.",
    "chaptersCount": 3,
    "focus3eme": true
  },
  {
    "id": "anglais",
    "name": "Anglais (12 Ex. - 120 Q.)",
    "icon": "Languages",
    "color": "from-rose-600 to-pink-700",
    "badgeColor": "bg-rose-100 text-rose-800 dark:bg-rose-900/40 dark:text-rose-300",
    "description": "Past Simple, Present Perfect, Modals, Written Expression, Irregular Verbs.",
    "chaptersCount": 2,
    "focus3eme": false
  },
  {
    "id": "techno-espagnol",
    "name": "Techno & Espagnol (12 Ex. - 120 Q.)",
    "icon": "Cpu",
    "color": "from-cyan-600 to-yellow-700",
    "badgeColor": "bg-cyan-100 text-cyan-800 dark:bg-cyan-900/40 dark:text-cyan-300",
    "description": "Algorithmique Scratch, Chaîne d'énergie, Réseaux, Gramática y Redacción española.",
    "chaptersCount": 2,
    "focus3eme": true
  }
];

export const MANUEL_EXERCISES = [
  {
    "id": "m-1",
    "subject": "maths",
    "chapter": "Chapitre 1 : Théorème de Pythagore & Trigonométrie",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 1 : Triangle rectangle et trigonométrie (Pythagore & Ratios #1)",
    "statement": "Soit ABC un triangle rectangle en A avec AB = 4.5 cm et AC = 6 cm. Rédiger les 10 réponses sur votre cahier.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Calculer la valeur exacte du carré de l'hypoténuse BC².",
        "correction": "BC² = AB² + AC² = 4.5² + 6² = 56.25."
      },
      {
        "num": "Question 2",
        "text": "Déterminer la longueur de l'hypoténuse BC.",
        "correction": "BC = √56.25 ≈ 7.50 cm."
      },
      {
        "num": "Question 3",
        "text": "Calculer le périmètre total du triangle ABC.",
        "correction": "Périmètre = 4.5 + 6 + 7.50 = 18.00 cm."
      },
      {
        "num": "Question 4",
        "text": "Calculer l'aire du triangle ABC en cm².",
        "correction": "Aire = (4.5 × 6) / 2 = 13.50 cm²."
      },
      {
        "num": "Question 5",
        "text": "Calculer la valeur exacte de cos(ABC).",
        "correction": "cos(ABC) = AB / BC = 4.5 / 7.50 ≈ 0.600."
      },
      {
        "num": "Question 6",
        "text": "En déduire la mesure de l'angle ABC au dixième de degré près.",
        "correction": "arccos(0.600) ≈ 53.1°."
      },
      {
        "num": "Question 7",
        "text": "Calculer sin(ABC) au millième près.",
        "correction": "sin(ABC) = AC / BC = 6 / 7.50 ≈ 0.800."
      },
      {
        "num": "Question 8",
        "text": "Déterminer la mesure complémentaire de l'angle ACB.",
        "correction": "Angle ACB = 90° - 53.1° = 36.9°."
      },
      {
        "num": "Question 9",
        "text": "Calculer tan(ABC).",
        "correction": "tan(ABC) = AC / AB = 6 / 4.5 ≈ 1.333."
      },
      {
        "num": "Question 10",
        "text": "Calculer la hauteur AH relative à l'hypoténuse BC.",
        "correction": "AH = (AB × AC) / BC = (4.5 × 6) / 7.50 ≈ 3.60 cm."
      }
    ]
  },
  {
    "id": "m-2",
    "subject": "maths",
    "chapter": "Chapitre 1 : Théorème de Pythagore & Trigonométrie",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 2 : Triangle rectangle et trigonométrie (Pythagore & Ratios #2)",
    "statement": "Soit ABC un triangle rectangle en A avec AB = 6 cm et AC = 8 cm. Rédiger les 10 réponses sur votre cahier.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Calculer la valeur exacte du carré de l'hypoténuse BC².",
        "correction": "BC² = AB² + AC² = 6² + 8² = 100.00."
      },
      {
        "num": "Question 2",
        "text": "Déterminer la longueur de l'hypoténuse BC.",
        "correction": "BC = √100.00 ≈ 10.00 cm."
      },
      {
        "num": "Question 3",
        "text": "Calculer le périmètre total du triangle ABC.",
        "correction": "Périmètre = 6 + 8 + 10.00 = 24.00 cm."
      },
      {
        "num": "Question 4",
        "text": "Calculer l'aire du triangle ABC en cm².",
        "correction": "Aire = (6 × 8) / 2 = 24.00 cm²."
      },
      {
        "num": "Question 5",
        "text": "Calculer la valeur exacte de cos(ABC).",
        "correction": "cos(ABC) = AB / BC = 6 / 10.00 ≈ 0.600."
      },
      {
        "num": "Question 6",
        "text": "En déduire la mesure de l'angle ABC au dixième de degré près.",
        "correction": "arccos(0.600) ≈ 53.1°."
      },
      {
        "num": "Question 7",
        "text": "Calculer sin(ABC) au millième près.",
        "correction": "sin(ABC) = AC / BC = 8 / 10.00 ≈ 0.800."
      },
      {
        "num": "Question 8",
        "text": "Déterminer la mesure complémentaire de l'angle ACB.",
        "correction": "Angle ACB = 90° - 53.1° = 36.9°."
      },
      {
        "num": "Question 9",
        "text": "Calculer tan(ABC).",
        "correction": "tan(ABC) = AC / AB = 8 / 6 ≈ 1.333."
      },
      {
        "num": "Question 10",
        "text": "Calculer la hauteur AH relative à l'hypoténuse BC.",
        "correction": "AH = (AB × AC) / BC = (6 × 8) / 10.00 ≈ 4.80 cm."
      }
    ]
  },
  {
    "id": "m-3",
    "subject": "maths",
    "chapter": "Chapitre 1 : Théorème de Pythagore & Trigonométrie",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 3 : Triangle rectangle et trigonométrie (Pythagore & Ratios #3)",
    "statement": "Soit ABC un triangle rectangle en A avec AB = 7.5 cm et AC = 10 cm. Rédiger les 10 réponses sur votre cahier.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Calculer la valeur exacte du carré de l'hypoténuse BC².",
        "correction": "BC² = AB² + AC² = 7.5² + 10² = 156.25."
      },
      {
        "num": "Question 2",
        "text": "Déterminer la longueur de l'hypoténuse BC.",
        "correction": "BC = √156.25 ≈ 12.50 cm."
      },
      {
        "num": "Question 3",
        "text": "Calculer le périmètre total du triangle ABC.",
        "correction": "Périmètre = 7.5 + 10 + 12.50 = 30.00 cm."
      },
      {
        "num": "Question 4",
        "text": "Calculer l'aire du triangle ABC en cm².",
        "correction": "Aire = (7.5 × 10) / 2 = 37.50 cm²."
      },
      {
        "num": "Question 5",
        "text": "Calculer la valeur exacte de cos(ABC).",
        "correction": "cos(ABC) = AB / BC = 7.5 / 12.50 ≈ 0.600."
      },
      {
        "num": "Question 6",
        "text": "En déduire la mesure de l'angle ABC au dixième de degré près.",
        "correction": "arccos(0.600) ≈ 53.1°."
      },
      {
        "num": "Question 7",
        "text": "Calculer sin(ABC) au millième près.",
        "correction": "sin(ABC) = AC / BC = 10 / 12.50 ≈ 0.800."
      },
      {
        "num": "Question 8",
        "text": "Déterminer la mesure complémentaire de l'angle ACB.",
        "correction": "Angle ACB = 90° - 53.1° = 36.9°."
      },
      {
        "num": "Question 9",
        "text": "Calculer tan(ABC).",
        "correction": "tan(ABC) = AC / AB = 10 / 7.5 ≈ 1.333."
      },
      {
        "num": "Question 10",
        "text": "Calculer la hauteur AH relative à l'hypoténuse BC.",
        "correction": "AH = (AB × AC) / BC = (7.5 × 10) / 12.50 ≈ 6.00 cm."
      }
    ]
  },
  {
    "id": "m-4",
    "subject": "maths",
    "chapter": "Chapitre 1 : Théorème de Pythagore & Trigonométrie",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 4 : Triangle rectangle et trigonométrie (Pythagore & Ratios #4)",
    "statement": "Soit ABC un triangle rectangle en A avec AB = 9 cm et AC = 4 cm. Rédiger les 10 réponses sur votre cahier.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Calculer la valeur exacte du carré de l'hypoténuse BC².",
        "correction": "BC² = AB² + AC² = 9² + 4² = 97.00."
      },
      {
        "num": "Question 2",
        "text": "Déterminer la longueur de l'hypoténuse BC.",
        "correction": "BC = √97.00 ≈ 9.85 cm."
      },
      {
        "num": "Question 3",
        "text": "Calculer le périmètre total du triangle ABC.",
        "correction": "Périmètre = 9 + 4 + 9.85 = 22.85 cm."
      },
      {
        "num": "Question 4",
        "text": "Calculer l'aire du triangle ABC en cm².",
        "correction": "Aire = (9 × 4) / 2 = 18.00 cm²."
      },
      {
        "num": "Question 5",
        "text": "Calculer la valeur exacte de cos(ABC).",
        "correction": "cos(ABC) = AB / BC = 9 / 9.85 ≈ 0.914."
      },
      {
        "num": "Question 6",
        "text": "En déduire la mesure de l'angle ABC au dixième de degré près.",
        "correction": "arccos(0.914) ≈ 24.0°."
      },
      {
        "num": "Question 7",
        "text": "Calculer sin(ABC) au millième près.",
        "correction": "sin(ABC) = AC / BC = 4 / 9.85 ≈ 0.406."
      },
      {
        "num": "Question 8",
        "text": "Déterminer la mesure complémentaire de l'angle ACB.",
        "correction": "Angle ACB = 90° - 24.0° = 66.0°."
      },
      {
        "num": "Question 9",
        "text": "Calculer tan(ABC).",
        "correction": "tan(ABC) = AC / AB = 4 / 9 ≈ 0.444."
      },
      {
        "num": "Question 10",
        "text": "Calculer la hauteur AH relative à l'hypoténuse BC.",
        "correction": "AH = (AB × AC) / BC = (9 × 4) / 9.85 ≈ 3.65 cm."
      }
    ]
  },
  {
    "id": "m-5",
    "subject": "maths",
    "chapter": "Chapitre 1 : Théorème de Pythagore & Trigonométrie",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 5 : Triangle rectangle et trigonométrie (Pythagore & Ratios #5)",
    "statement": "Soit ABC un triangle rectangle en A avec AB = 3 cm et AC = 6 cm. Rédiger les 10 réponses sur votre cahier.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Calculer la valeur exacte du carré de l'hypoténuse BC².",
        "correction": "BC² = AB² + AC² = 3² + 6² = 45.00."
      },
      {
        "num": "Question 2",
        "text": "Déterminer la longueur de l'hypoténuse BC.",
        "correction": "BC = √45.00 ≈ 6.71 cm."
      },
      {
        "num": "Question 3",
        "text": "Calculer le périmètre total du triangle ABC.",
        "correction": "Périmètre = 3 + 6 + 6.71 = 15.71 cm."
      },
      {
        "num": "Question 4",
        "text": "Calculer l'aire du triangle ABC en cm².",
        "correction": "Aire = (3 × 6) / 2 = 9.00 cm²."
      },
      {
        "num": "Question 5",
        "text": "Calculer la valeur exacte de cos(ABC).",
        "correction": "cos(ABC) = AB / BC = 3 / 6.71 ≈ 0.447."
      },
      {
        "num": "Question 6",
        "text": "En déduire la mesure de l'angle ABC au dixième de degré près.",
        "correction": "arccos(0.447) ≈ 63.4°."
      },
      {
        "num": "Question 7",
        "text": "Calculer sin(ABC) au millième près.",
        "correction": "sin(ABC) = AC / BC = 6 / 6.71 ≈ 0.894."
      },
      {
        "num": "Question 8",
        "text": "Déterminer la mesure complémentaire de l'angle ACB.",
        "correction": "Angle ACB = 90° - 63.4° = 26.6°."
      },
      {
        "num": "Question 9",
        "text": "Calculer tan(ABC).",
        "correction": "tan(ABC) = AC / AB = 6 / 3 ≈ 2.000."
      },
      {
        "num": "Question 10",
        "text": "Calculer la hauteur AH relative à l'hypoténuse BC.",
        "correction": "AH = (AB × AC) / BC = (3 × 6) / 6.71 ≈ 2.68 cm."
      }
    ]
  },
  {
    "id": "m-6",
    "subject": "maths",
    "chapter": "Chapitre 1 : Théorème de Pythagore & Trigonométrie",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 6 : Triangle rectangle et trigonométrie (Pythagore & Ratios #6)",
    "statement": "Soit ABC un triangle rectangle en A avec AB = 4.5 cm et AC = 8 cm. Rédiger les 10 réponses sur votre cahier.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Calculer la valeur exacte du carré de l'hypoténuse BC².",
        "correction": "BC² = AB² + AC² = 4.5² + 8² = 84.25."
      },
      {
        "num": "Question 2",
        "text": "Déterminer la longueur de l'hypoténuse BC.",
        "correction": "BC = √84.25 ≈ 9.18 cm."
      },
      {
        "num": "Question 3",
        "text": "Calculer le périmètre total du triangle ABC.",
        "correction": "Périmètre = 4.5 + 8 + 9.18 = 21.68 cm."
      },
      {
        "num": "Question 4",
        "text": "Calculer l'aire du triangle ABC en cm².",
        "correction": "Aire = (4.5 × 8) / 2 = 18.00 cm²."
      },
      {
        "num": "Question 5",
        "text": "Calculer la valeur exacte de cos(ABC).",
        "correction": "cos(ABC) = AB / BC = 4.5 / 9.18 ≈ 0.490."
      },
      {
        "num": "Question 6",
        "text": "En déduire la mesure de l'angle ABC au dixième de degré près.",
        "correction": "arccos(0.490) ≈ 60.6°."
      },
      {
        "num": "Question 7",
        "text": "Calculer sin(ABC) au millième près.",
        "correction": "sin(ABC) = AC / BC = 8 / 9.18 ≈ 0.871."
      },
      {
        "num": "Question 8",
        "text": "Déterminer la mesure complémentaire de l'angle ACB.",
        "correction": "Angle ACB = 90° - 60.6° = 29.4°."
      },
      {
        "num": "Question 9",
        "text": "Calculer tan(ABC).",
        "correction": "tan(ABC) = AC / AB = 8 / 4.5 ≈ 1.778."
      },
      {
        "num": "Question 10",
        "text": "Calculer la hauteur AH relative à l'hypoténuse BC.",
        "correction": "AH = (AB × AC) / BC = (4.5 × 8) / 9.18 ≈ 3.92 cm."
      }
    ]
  },
  {
    "id": "m-7",
    "subject": "maths",
    "chapter": "Chapitre 1 : Théorème de Pythagore & Trigonométrie",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 7 : Triangle rectangle et trigonométrie (Pythagore & Ratios #7)",
    "statement": "Soit ABC un triangle rectangle en A avec AB = 6 cm et AC = 10 cm. Rédiger les 10 réponses sur votre cahier.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Calculer la valeur exacte du carré de l'hypoténuse BC².",
        "correction": "BC² = AB² + AC² = 6² + 10² = 136.00."
      },
      {
        "num": "Question 2",
        "text": "Déterminer la longueur de l'hypoténuse BC.",
        "correction": "BC = √136.00 ≈ 11.66 cm."
      },
      {
        "num": "Question 3",
        "text": "Calculer le périmètre total du triangle ABC.",
        "correction": "Périmètre = 6 + 10 + 11.66 = 27.66 cm."
      },
      {
        "num": "Question 4",
        "text": "Calculer l'aire du triangle ABC en cm².",
        "correction": "Aire = (6 × 10) / 2 = 30.00 cm²."
      },
      {
        "num": "Question 5",
        "text": "Calculer la valeur exacte de cos(ABC).",
        "correction": "cos(ABC) = AB / BC = 6 / 11.66 ≈ 0.515."
      },
      {
        "num": "Question 6",
        "text": "En déduire la mesure de l'angle ABC au dixième de degré près.",
        "correction": "arccos(0.515) ≈ 59.0°."
      },
      {
        "num": "Question 7",
        "text": "Calculer sin(ABC) au millième près.",
        "correction": "sin(ABC) = AC / BC = 10 / 11.66 ≈ 0.858."
      },
      {
        "num": "Question 8",
        "text": "Déterminer la mesure complémentaire de l'angle ACB.",
        "correction": "Angle ACB = 90° - 59.0° = 31.0°."
      },
      {
        "num": "Question 9",
        "text": "Calculer tan(ABC).",
        "correction": "tan(ABC) = AC / AB = 10 / 6 ≈ 1.667."
      },
      {
        "num": "Question 10",
        "text": "Calculer la hauteur AH relative à l'hypoténuse BC.",
        "correction": "AH = (AB × AC) / BC = (6 × 10) / 11.66 ≈ 5.15 cm."
      }
    ]
  },
  {
    "id": "m-8",
    "subject": "maths",
    "chapter": "Chapitre 1 : Théorème de Pythagore & Trigonométrie",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 8 : Triangle rectangle et trigonométrie (Pythagore & Ratios #8)",
    "statement": "Soit ABC un triangle rectangle en A avec AB = 7.5 cm et AC = 4 cm. Rédiger les 10 réponses sur votre cahier.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Calculer la valeur exacte du carré de l'hypoténuse BC².",
        "correction": "BC² = AB² + AC² = 7.5² + 4² = 72.25."
      },
      {
        "num": "Question 2",
        "text": "Déterminer la longueur de l'hypoténuse BC.",
        "correction": "BC = √72.25 ≈ 8.50 cm."
      },
      {
        "num": "Question 3",
        "text": "Calculer le périmètre total du triangle ABC.",
        "correction": "Périmètre = 7.5 + 4 + 8.50 = 20.00 cm."
      },
      {
        "num": "Question 4",
        "text": "Calculer l'aire du triangle ABC en cm².",
        "correction": "Aire = (7.5 × 4) / 2 = 15.00 cm²."
      },
      {
        "num": "Question 5",
        "text": "Calculer la valeur exacte de cos(ABC).",
        "correction": "cos(ABC) = AB / BC = 7.5 / 8.50 ≈ 0.882."
      },
      {
        "num": "Question 6",
        "text": "En déduire la mesure de l'angle ABC au dixième de degré près.",
        "correction": "arccos(0.882) ≈ 28.1°."
      },
      {
        "num": "Question 7",
        "text": "Calculer sin(ABC) au millième près.",
        "correction": "sin(ABC) = AC / BC = 4 / 8.50 ≈ 0.471."
      },
      {
        "num": "Question 8",
        "text": "Déterminer la mesure complémentaire de l'angle ACB.",
        "correction": "Angle ACB = 90° - 28.1° = 61.9°."
      },
      {
        "num": "Question 9",
        "text": "Calculer tan(ABC).",
        "correction": "tan(ABC) = AC / AB = 4 / 7.5 ≈ 0.533."
      },
      {
        "num": "Question 10",
        "text": "Calculer la hauteur AH relative à l'hypoténuse BC.",
        "correction": "AH = (AB × AC) / BC = (7.5 × 4) / 8.50 ≈ 3.53 cm."
      }
    ]
  },
  {
    "id": "m-9",
    "subject": "maths",
    "chapter": "Chapitre 1 : Théorème de Pythagore & Trigonométrie",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 9 : Triangle rectangle et trigonométrie (Pythagore & Ratios #9)",
    "statement": "Soit ABC un triangle rectangle en A avec AB = 9 cm et AC = 6 cm. Rédiger les 10 réponses sur votre cahier.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Calculer la valeur exacte du carré de l'hypoténuse BC².",
        "correction": "BC² = AB² + AC² = 9² + 6² = 117.00."
      },
      {
        "num": "Question 2",
        "text": "Déterminer la longueur de l'hypoténuse BC.",
        "correction": "BC = √117.00 ≈ 10.82 cm."
      },
      {
        "num": "Question 3",
        "text": "Calculer le périmètre total du triangle ABC.",
        "correction": "Périmètre = 9 + 6 + 10.82 = 25.82 cm."
      },
      {
        "num": "Question 4",
        "text": "Calculer l'aire du triangle ABC en cm².",
        "correction": "Aire = (9 × 6) / 2 = 27.00 cm²."
      },
      {
        "num": "Question 5",
        "text": "Calculer la valeur exacte de cos(ABC).",
        "correction": "cos(ABC) = AB / BC = 9 / 10.82 ≈ 0.832."
      },
      {
        "num": "Question 6",
        "text": "En déduire la mesure de l'angle ABC au dixième de degré près.",
        "correction": "arccos(0.832) ≈ 33.7°."
      },
      {
        "num": "Question 7",
        "text": "Calculer sin(ABC) au millième près.",
        "correction": "sin(ABC) = AC / BC = 6 / 10.82 ≈ 0.555."
      },
      {
        "num": "Question 8",
        "text": "Déterminer la mesure complémentaire de l'angle ACB.",
        "correction": "Angle ACB = 90° - 33.7° = 56.3°."
      },
      {
        "num": "Question 9",
        "text": "Calculer tan(ABC).",
        "correction": "tan(ABC) = AC / AB = 6 / 9 ≈ 0.667."
      },
      {
        "num": "Question 10",
        "text": "Calculer la hauteur AH relative à l'hypoténuse BC.",
        "correction": "AH = (AB × AC) / BC = (9 × 6) / 10.82 ≈ 4.99 cm."
      }
    ]
  },
  {
    "id": "m-10",
    "subject": "maths",
    "chapter": "Chapitre 1 : Théorème de Pythagore & Trigonométrie",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 10 : Triangle rectangle et trigonométrie (Pythagore & Ratios #10)",
    "statement": "Soit ABC un triangle rectangle en A avec AB = 3 cm et AC = 8 cm. Rédiger les 10 réponses sur votre cahier.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Calculer la valeur exacte du carré de l'hypoténuse BC².",
        "correction": "BC² = AB² + AC² = 3² + 8² = 73.00."
      },
      {
        "num": "Question 2",
        "text": "Déterminer la longueur de l'hypoténuse BC.",
        "correction": "BC = √73.00 ≈ 8.54 cm."
      },
      {
        "num": "Question 3",
        "text": "Calculer le périmètre total du triangle ABC.",
        "correction": "Périmètre = 3 + 8 + 8.54 = 19.54 cm."
      },
      {
        "num": "Question 4",
        "text": "Calculer l'aire du triangle ABC en cm².",
        "correction": "Aire = (3 × 8) / 2 = 12.00 cm²."
      },
      {
        "num": "Question 5",
        "text": "Calculer la valeur exacte de cos(ABC).",
        "correction": "cos(ABC) = AB / BC = 3 / 8.54 ≈ 0.351."
      },
      {
        "num": "Question 6",
        "text": "En déduire la mesure de l'angle ABC au dixième de degré près.",
        "correction": "arccos(0.351) ≈ 69.4°."
      },
      {
        "num": "Question 7",
        "text": "Calculer sin(ABC) au millième près.",
        "correction": "sin(ABC) = AC / BC = 8 / 8.54 ≈ 0.937."
      },
      {
        "num": "Question 8",
        "text": "Déterminer la mesure complémentaire de l'angle ACB.",
        "correction": "Angle ACB = 90° - 69.4° = 20.6°."
      },
      {
        "num": "Question 9",
        "text": "Calculer tan(ABC).",
        "correction": "tan(ABC) = AC / AB = 8 / 3 ≈ 2.667."
      },
      {
        "num": "Question 10",
        "text": "Calculer la hauteur AH relative à l'hypoténuse BC.",
        "correction": "AH = (AB × AC) / BC = (3 × 8) / 8.54 ≈ 2.81 cm."
      }
    ]
  },
  {
    "id": "m-11",
    "subject": "maths",
    "chapter": "Chapitre 1 : Théorème de Pythagore & Trigonométrie",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 11 : Triangle rectangle et trigonométrie (Pythagore & Ratios #11)",
    "statement": "Soit ABC un triangle rectangle en A avec AB = 4.5 cm et AC = 10 cm. Rédiger les 10 réponses sur votre cahier.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Calculer la valeur exacte du carré de l'hypoténuse BC².",
        "correction": "BC² = AB² + AC² = 4.5² + 10² = 120.25."
      },
      {
        "num": "Question 2",
        "text": "Déterminer la longueur de l'hypoténuse BC.",
        "correction": "BC = √120.25 ≈ 10.97 cm."
      },
      {
        "num": "Question 3",
        "text": "Calculer le périmètre total du triangle ABC.",
        "correction": "Périmètre = 4.5 + 10 + 10.97 = 25.47 cm."
      },
      {
        "num": "Question 4",
        "text": "Calculer l'aire du triangle ABC en cm².",
        "correction": "Aire = (4.5 × 10) / 2 = 22.50 cm²."
      },
      {
        "num": "Question 5",
        "text": "Calculer la valeur exacte de cos(ABC).",
        "correction": "cos(ABC) = AB / BC = 4.5 / 10.97 ≈ 0.410."
      },
      {
        "num": "Question 6",
        "text": "En déduire la mesure de l'angle ABC au dixième de degré près.",
        "correction": "arccos(0.410) ≈ 65.8°."
      },
      {
        "num": "Question 7",
        "text": "Calculer sin(ABC) au millième près.",
        "correction": "sin(ABC) = AC / BC = 10 / 10.97 ≈ 0.912."
      },
      {
        "num": "Question 8",
        "text": "Déterminer la mesure complémentaire de l'angle ACB.",
        "correction": "Angle ACB = 90° - 65.8° = 24.2°."
      },
      {
        "num": "Question 9",
        "text": "Calculer tan(ABC).",
        "correction": "tan(ABC) = AC / AB = 10 / 4.5 ≈ 2.222."
      },
      {
        "num": "Question 10",
        "text": "Calculer la hauteur AH relative à l'hypoténuse BC.",
        "correction": "AH = (AB × AC) / BC = (4.5 × 10) / 10.97 ≈ 4.10 cm."
      }
    ]
  },
  {
    "id": "m-12",
    "subject": "maths",
    "chapter": "Chapitre 1 : Théorème de Pythagore & Trigonométrie",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 12 : Triangle rectangle et trigonométrie (Pythagore & Ratios #12)",
    "statement": "Soit ABC un triangle rectangle en A avec AB = 6 cm et AC = 4 cm. Rédiger les 10 réponses sur votre cahier.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Calculer la valeur exacte du carré de l'hypoténuse BC².",
        "correction": "BC² = AB² + AC² = 6² + 4² = 52.00."
      },
      {
        "num": "Question 2",
        "text": "Déterminer la longueur de l'hypoténuse BC.",
        "correction": "BC = √52.00 ≈ 7.21 cm."
      },
      {
        "num": "Question 3",
        "text": "Calculer le périmètre total du triangle ABC.",
        "correction": "Périmètre = 6 + 4 + 7.21 = 17.21 cm."
      },
      {
        "num": "Question 4",
        "text": "Calculer l'aire du triangle ABC en cm².",
        "correction": "Aire = (6 × 4) / 2 = 12.00 cm²."
      },
      {
        "num": "Question 5",
        "text": "Calculer la valeur exacte de cos(ABC).",
        "correction": "cos(ABC) = AB / BC = 6 / 7.21 ≈ 0.832."
      },
      {
        "num": "Question 6",
        "text": "En déduire la mesure de l'angle ABC au dixième de degré près.",
        "correction": "arccos(0.832) ≈ 33.7°."
      },
      {
        "num": "Question 7",
        "text": "Calculer sin(ABC) au millième près.",
        "correction": "sin(ABC) = AC / BC = 4 / 7.21 ≈ 0.555."
      },
      {
        "num": "Question 8",
        "text": "Déterminer la mesure complémentaire de l'angle ACB.",
        "correction": "Angle ACB = 90° - 33.7° = 56.3°."
      },
      {
        "num": "Question 9",
        "text": "Calculer tan(ABC).",
        "correction": "tan(ABC) = AC / AB = 4 / 6 ≈ 0.667."
      },
      {
        "num": "Question 10",
        "text": "Calculer la hauteur AH relative à l'hypoténuse BC.",
        "correction": "AH = (AB × AC) / BC = (6 × 4) / 7.21 ≈ 3.33 cm."
      }
    ]
  },
  {
    "id": "m-13",
    "subject": "maths",
    "chapter": "Chapitre 2 : Théorème de Thalès & Homothétie",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 13 : Configuration de Thalès et rapport d'agrandissement #1",
    "statement": "Dans le triangle ABC, M ∈ [AB] et N ∈ [AC] avec (MN) // (BC). On donne AM = 5 cm, AN = 6 cm et MN = 4 cm. Le rapport d'agrandissement est k = 2.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Écrire les trois égalités de rapports de la configuration de Thalès.",
        "correction": "AM / AB = AN / AC = MN / BC = 1 / 2."
      },
      {
        "num": "Question 2",
        "text": "Calculer la longueur exacte du segment AB.",
        "correction": "AB = AM × k = 5 × 2 = 10 cm."
      },
      {
        "num": "Question 3",
        "text": "Calculer la longueur exacte du segment MB.",
        "correction": "MB = AB - AM = 10 - 5 = 5 cm."
      },
      {
        "num": "Question 4",
        "text": "Calculer la longueur exacte du segment AC.",
        "correction": "AC = AN × k = 6 × 2 = 12 cm."
      },
      {
        "num": "Question 5",
        "text": "Calculer la longueur exacte du segment NC.",
        "correction": "NC = AC - AN = 12 - 6 = 6 cm."
      },
      {
        "num": "Question 6",
        "text": "Calculer la longueur du côté BC.",
        "correction": "BC = MN × k = 4 × 2 = 8 cm."
      },
      {
        "num": "Question 7",
        "text": "Quel est le coefficient d'agrandissement de AMN vers ABC ?",
        "correction": "Le coefficient est k = 2."
      },
      {
        "num": "Question 8",
        "text": "Par quel facteur est multipliée l'aire du triangle AMN pour obtenir celle de ABC ?",
        "correction": "L'aire est multipliée par k² = 2² = 4.00."
      },
      {
        "num": "Question 9",
        "text": "Par quel facteur serait multiplié le volume d'une pyramide construite sur cette base ?",
        "correction": "Le volume est multiplié par k³ = 2³ = 8.00."
      },
      {
        "num": "Question 10",
        "text": "Si l'homothétie de centre A transforme M en B, quel est son rapport ?",
        "correction": "Le rapport de l'homothétie de centre A est k = 2."
      }
    ]
  },
  {
    "id": "m-14",
    "subject": "maths",
    "chapter": "Chapitre 2 : Théorème de Thalès & Homothétie",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 14 : Configuration de Thalès et rapport d'agrandissement #2",
    "statement": "Dans le triangle ABC, M ∈ [AB] et N ∈ [AC] avec (MN) // (BC). On donne AM = 6 cm, AN = 7 cm et MN = 5 cm. Le rapport d'agrandissement est k = 2.5.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Écrire les trois égalités de rapports de la configuration de Thalès.",
        "correction": "AM / AB = AN / AC = MN / BC = 1 / 2.5."
      },
      {
        "num": "Question 2",
        "text": "Calculer la longueur exacte du segment AB.",
        "correction": "AB = AM × k = 6 × 2.5 = 15 cm."
      },
      {
        "num": "Question 3",
        "text": "Calculer la longueur exacte du segment MB.",
        "correction": "MB = AB - AM = 15 - 6 = 9 cm."
      },
      {
        "num": "Question 4",
        "text": "Calculer la longueur exacte du segment AC.",
        "correction": "AC = AN × k = 7 × 2.5 = 17.5 cm."
      },
      {
        "num": "Question 5",
        "text": "Calculer la longueur exacte du segment NC.",
        "correction": "NC = AC - AN = 17.5 - 7 = 10.5 cm."
      },
      {
        "num": "Question 6",
        "text": "Calculer la longueur du côté BC.",
        "correction": "BC = MN × k = 5 × 2.5 = 12.5 cm."
      },
      {
        "num": "Question 7",
        "text": "Quel est le coefficient d'agrandissement de AMN vers ABC ?",
        "correction": "Le coefficient est k = 2.5."
      },
      {
        "num": "Question 8",
        "text": "Par quel facteur est multipliée l'aire du triangle AMN pour obtenir celle de ABC ?",
        "correction": "L'aire est multipliée par k² = 2.5² = 6.25."
      },
      {
        "num": "Question 9",
        "text": "Par quel facteur serait multiplié le volume d'une pyramide construite sur cette base ?",
        "correction": "Le volume est multiplié par k³ = 2.5³ = 15.63."
      },
      {
        "num": "Question 10",
        "text": "Si l'homothétie de centre A transforme M en B, quel est son rapport ?",
        "correction": "Le rapport de l'homothétie de centre A est k = 2.5."
      }
    ]
  },
  {
    "id": "m-15",
    "subject": "maths",
    "chapter": "Chapitre 2 : Théorème de Thalès & Homothétie",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 15 : Configuration de Thalès et rapport d'agrandissement #3",
    "statement": "Dans le triangle ABC, M ∈ [AB] et N ∈ [AC] avec (MN) // (BC). On donne AM = 4 cm, AN = 5 cm et MN = 3 cm. Le rapport d'agrandissement est k = 3.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Écrire les trois égalités de rapports de la configuration de Thalès.",
        "correction": "AM / AB = AN / AC = MN / BC = 1 / 3."
      },
      {
        "num": "Question 2",
        "text": "Calculer la longueur exacte du segment AB.",
        "correction": "AB = AM × k = 4 × 3 = 12 cm."
      },
      {
        "num": "Question 3",
        "text": "Calculer la longueur exacte du segment MB.",
        "correction": "MB = AB - AM = 12 - 4 = 8 cm."
      },
      {
        "num": "Question 4",
        "text": "Calculer la longueur exacte du segment AC.",
        "correction": "AC = AN × k = 5 × 3 = 15 cm."
      },
      {
        "num": "Question 5",
        "text": "Calculer la longueur exacte du segment NC.",
        "correction": "NC = AC - AN = 15 - 5 = 10 cm."
      },
      {
        "num": "Question 6",
        "text": "Calculer la longueur du côté BC.",
        "correction": "BC = MN × k = 3 × 3 = 9 cm."
      },
      {
        "num": "Question 7",
        "text": "Quel est le coefficient d'agrandissement de AMN vers ABC ?",
        "correction": "Le coefficient est k = 3."
      },
      {
        "num": "Question 8",
        "text": "Par quel facteur est multipliée l'aire du triangle AMN pour obtenir celle de ABC ?",
        "correction": "L'aire est multipliée par k² = 3² = 9.00."
      },
      {
        "num": "Question 9",
        "text": "Par quel facteur serait multiplié le volume d'une pyramide construite sur cette base ?",
        "correction": "Le volume est multiplié par k³ = 3³ = 27.00."
      },
      {
        "num": "Question 10",
        "text": "Si l'homothétie de centre A transforme M en B, quel est son rapport ?",
        "correction": "Le rapport de l'homothétie de centre A est k = 3."
      }
    ]
  },
  {
    "id": "m-16",
    "subject": "maths",
    "chapter": "Chapitre 2 : Théorème de Thalès & Homothétie",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 16 : Configuration de Thalès et rapport d'agrandissement #4",
    "statement": "Dans le triangle ABC, M ∈ [AB] et N ∈ [AC] avec (MN) // (BC). On donne AM = 5 cm, AN = 6 cm et MN = 4 cm. Le rapport d'agrandissement est k = 1.5.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Écrire les trois égalités de rapports de la configuration de Thalès.",
        "correction": "AM / AB = AN / AC = MN / BC = 1 / 1.5."
      },
      {
        "num": "Question 2",
        "text": "Calculer la longueur exacte du segment AB.",
        "correction": "AB = AM × k = 5 × 1.5 = 7.5 cm."
      },
      {
        "num": "Question 3",
        "text": "Calculer la longueur exacte du segment MB.",
        "correction": "MB = AB - AM = 7.5 - 5 = 2.5 cm."
      },
      {
        "num": "Question 4",
        "text": "Calculer la longueur exacte du segment AC.",
        "correction": "AC = AN × k = 6 × 1.5 = 9 cm."
      },
      {
        "num": "Question 5",
        "text": "Calculer la longueur exacte du segment NC.",
        "correction": "NC = AC - AN = 9 - 6 = 3 cm."
      },
      {
        "num": "Question 6",
        "text": "Calculer la longueur du côté BC.",
        "correction": "BC = MN × k = 4 × 1.5 = 6 cm."
      },
      {
        "num": "Question 7",
        "text": "Quel est le coefficient d'agrandissement de AMN vers ABC ?",
        "correction": "Le coefficient est k = 1.5."
      },
      {
        "num": "Question 8",
        "text": "Par quel facteur est multipliée l'aire du triangle AMN pour obtenir celle de ABC ?",
        "correction": "L'aire est multipliée par k² = 1.5² = 2.25."
      },
      {
        "num": "Question 9",
        "text": "Par quel facteur serait multiplié le volume d'une pyramide construite sur cette base ?",
        "correction": "Le volume est multiplié par k³ = 1.5³ = 3.38."
      },
      {
        "num": "Question 10",
        "text": "Si l'homothétie de centre A transforme M en B, quel est son rapport ?",
        "correction": "Le rapport de l'homothétie de centre A est k = 1.5."
      }
    ]
  },
  {
    "id": "m-17",
    "subject": "maths",
    "chapter": "Chapitre 2 : Théorème de Thalès & Homothétie",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 17 : Configuration de Thalès et rapport d'agrandissement #5",
    "statement": "Dans le triangle ABC, M ∈ [AB] et N ∈ [AC] avec (MN) // (BC). On donne AM = 6 cm, AN = 7 cm et MN = 5 cm. Le rapport d'agrandissement est k = 2.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Écrire les trois égalités de rapports de la configuration de Thalès.",
        "correction": "AM / AB = AN / AC = MN / BC = 1 / 2."
      },
      {
        "num": "Question 2",
        "text": "Calculer la longueur exacte du segment AB.",
        "correction": "AB = AM × k = 6 × 2 = 12 cm."
      },
      {
        "num": "Question 3",
        "text": "Calculer la longueur exacte du segment MB.",
        "correction": "MB = AB - AM = 12 - 6 = 6 cm."
      },
      {
        "num": "Question 4",
        "text": "Calculer la longueur exacte du segment AC.",
        "correction": "AC = AN × k = 7 × 2 = 14 cm."
      },
      {
        "num": "Question 5",
        "text": "Calculer la longueur exacte du segment NC.",
        "correction": "NC = AC - AN = 14 - 7 = 7 cm."
      },
      {
        "num": "Question 6",
        "text": "Calculer la longueur du côté BC.",
        "correction": "BC = MN × k = 5 × 2 = 10 cm."
      },
      {
        "num": "Question 7",
        "text": "Quel est le coefficient d'agrandissement de AMN vers ABC ?",
        "correction": "Le coefficient est k = 2."
      },
      {
        "num": "Question 8",
        "text": "Par quel facteur est multipliée l'aire du triangle AMN pour obtenir celle de ABC ?",
        "correction": "L'aire est multipliée par k² = 2² = 4.00."
      },
      {
        "num": "Question 9",
        "text": "Par quel facteur serait multiplié le volume d'une pyramide construite sur cette base ?",
        "correction": "Le volume est multiplié par k³ = 2³ = 8.00."
      },
      {
        "num": "Question 10",
        "text": "Si l'homothétie de centre A transforme M en B, quel est son rapport ?",
        "correction": "Le rapport de l'homothétie de centre A est k = 2."
      }
    ]
  },
  {
    "id": "m-18",
    "subject": "maths",
    "chapter": "Chapitre 2 : Théorème de Thalès & Homothétie",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 18 : Configuration de Thalès et rapport d'agrandissement #6",
    "statement": "Dans le triangle ABC, M ∈ [AB] et N ∈ [AC] avec (MN) // (BC). On donne AM = 4 cm, AN = 5 cm et MN = 3 cm. Le rapport d'agrandissement est k = 2.5.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Écrire les trois égalités de rapports de la configuration de Thalès.",
        "correction": "AM / AB = AN / AC = MN / BC = 1 / 2.5."
      },
      {
        "num": "Question 2",
        "text": "Calculer la longueur exacte du segment AB.",
        "correction": "AB = AM × k = 4 × 2.5 = 10 cm."
      },
      {
        "num": "Question 3",
        "text": "Calculer la longueur exacte du segment MB.",
        "correction": "MB = AB - AM = 10 - 4 = 6 cm."
      },
      {
        "num": "Question 4",
        "text": "Calculer la longueur exacte du segment AC.",
        "correction": "AC = AN × k = 5 × 2.5 = 12.5 cm."
      },
      {
        "num": "Question 5",
        "text": "Calculer la longueur exacte du segment NC.",
        "correction": "NC = AC - AN = 12.5 - 5 = 7.5 cm."
      },
      {
        "num": "Question 6",
        "text": "Calculer la longueur du côté BC.",
        "correction": "BC = MN × k = 3 × 2.5 = 7.5 cm."
      },
      {
        "num": "Question 7",
        "text": "Quel est le coefficient d'agrandissement de AMN vers ABC ?",
        "correction": "Le coefficient est k = 2.5."
      },
      {
        "num": "Question 8",
        "text": "Par quel facteur est multipliée l'aire du triangle AMN pour obtenir celle de ABC ?",
        "correction": "L'aire est multipliée par k² = 2.5² = 6.25."
      },
      {
        "num": "Question 9",
        "text": "Par quel facteur serait multiplié le volume d'une pyramide construite sur cette base ?",
        "correction": "Le volume est multiplié par k³ = 2.5³ = 15.63."
      },
      {
        "num": "Question 10",
        "text": "Si l'homothétie de centre A transforme M en B, quel est son rapport ?",
        "correction": "Le rapport de l'homothétie de centre A est k = 2.5."
      }
    ]
  },
  {
    "id": "m-19",
    "subject": "maths",
    "chapter": "Chapitre 2 : Théorème de Thalès & Homothétie",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 19 : Configuration de Thalès et rapport d'agrandissement #7",
    "statement": "Dans le triangle ABC, M ∈ [AB] et N ∈ [AC] avec (MN) // (BC). On donne AM = 5 cm, AN = 6 cm et MN = 4 cm. Le rapport d'agrandissement est k = 3.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Écrire les trois égalités de rapports de la configuration de Thalès.",
        "correction": "AM / AB = AN / AC = MN / BC = 1 / 3."
      },
      {
        "num": "Question 2",
        "text": "Calculer la longueur exacte du segment AB.",
        "correction": "AB = AM × k = 5 × 3 = 15 cm."
      },
      {
        "num": "Question 3",
        "text": "Calculer la longueur exacte du segment MB.",
        "correction": "MB = AB - AM = 15 - 5 = 10 cm."
      },
      {
        "num": "Question 4",
        "text": "Calculer la longueur exacte du segment AC.",
        "correction": "AC = AN × k = 6 × 3 = 18 cm."
      },
      {
        "num": "Question 5",
        "text": "Calculer la longueur exacte du segment NC.",
        "correction": "NC = AC - AN = 18 - 6 = 12 cm."
      },
      {
        "num": "Question 6",
        "text": "Calculer la longueur du côté BC.",
        "correction": "BC = MN × k = 4 × 3 = 12 cm."
      },
      {
        "num": "Question 7",
        "text": "Quel est le coefficient d'agrandissement de AMN vers ABC ?",
        "correction": "Le coefficient est k = 3."
      },
      {
        "num": "Question 8",
        "text": "Par quel facteur est multipliée l'aire du triangle AMN pour obtenir celle de ABC ?",
        "correction": "L'aire est multipliée par k² = 3² = 9.00."
      },
      {
        "num": "Question 9",
        "text": "Par quel facteur serait multiplié le volume d'une pyramide construite sur cette base ?",
        "correction": "Le volume est multiplié par k³ = 3³ = 27.00."
      },
      {
        "num": "Question 10",
        "text": "Si l'homothétie de centre A transforme M en B, quel est son rapport ?",
        "correction": "Le rapport de l'homothétie de centre A est k = 3."
      }
    ]
  },
  {
    "id": "m-20",
    "subject": "maths",
    "chapter": "Chapitre 2 : Théorème de Thalès & Homothétie",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 20 : Configuration de Thalès et rapport d'agrandissement #8",
    "statement": "Dans le triangle ABC, M ∈ [AB] et N ∈ [AC] avec (MN) // (BC). On donne AM = 6 cm, AN = 7 cm et MN = 5 cm. Le rapport d'agrandissement est k = 1.5.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Écrire les trois égalités de rapports de la configuration de Thalès.",
        "correction": "AM / AB = AN / AC = MN / BC = 1 / 1.5."
      },
      {
        "num": "Question 2",
        "text": "Calculer la longueur exacte du segment AB.",
        "correction": "AB = AM × k = 6 × 1.5 = 9 cm."
      },
      {
        "num": "Question 3",
        "text": "Calculer la longueur exacte du segment MB.",
        "correction": "MB = AB - AM = 9 - 6 = 3 cm."
      },
      {
        "num": "Question 4",
        "text": "Calculer la longueur exacte du segment AC.",
        "correction": "AC = AN × k = 7 × 1.5 = 10.5 cm."
      },
      {
        "num": "Question 5",
        "text": "Calculer la longueur exacte du segment NC.",
        "correction": "NC = AC - AN = 10.5 - 7 = 3.5 cm."
      },
      {
        "num": "Question 6",
        "text": "Calculer la longueur du côté BC.",
        "correction": "BC = MN × k = 5 × 1.5 = 7.5 cm."
      },
      {
        "num": "Question 7",
        "text": "Quel est le coefficient d'agrandissement de AMN vers ABC ?",
        "correction": "Le coefficient est k = 1.5."
      },
      {
        "num": "Question 8",
        "text": "Par quel facteur est multipliée l'aire du triangle AMN pour obtenir celle de ABC ?",
        "correction": "L'aire est multipliée par k² = 1.5² = 2.25."
      },
      {
        "num": "Question 9",
        "text": "Par quel facteur serait multiplié le volume d'une pyramide construite sur cette base ?",
        "correction": "Le volume est multiplié par k³ = 1.5³ = 3.38."
      },
      {
        "num": "Question 10",
        "text": "Si l'homothétie de centre A transforme M en B, quel est son rapport ?",
        "correction": "Le rapport de l'homothétie de centre A est k = 1.5."
      }
    ]
  },
  {
    "id": "m-21",
    "subject": "maths",
    "chapter": "Chapitre 2 : Théorème de Thalès & Homothétie",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 21 : Configuration de Thalès et rapport d'agrandissement #9",
    "statement": "Dans le triangle ABC, M ∈ [AB] et N ∈ [AC] avec (MN) // (BC). On donne AM = 4 cm, AN = 5 cm et MN = 3 cm. Le rapport d'agrandissement est k = 2.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Écrire les trois égalités de rapports de la configuration de Thalès.",
        "correction": "AM / AB = AN / AC = MN / BC = 1 / 2."
      },
      {
        "num": "Question 2",
        "text": "Calculer la longueur exacte du segment AB.",
        "correction": "AB = AM × k = 4 × 2 = 8 cm."
      },
      {
        "num": "Question 3",
        "text": "Calculer la longueur exacte du segment MB.",
        "correction": "MB = AB - AM = 8 - 4 = 4 cm."
      },
      {
        "num": "Question 4",
        "text": "Calculer la longueur exacte du segment AC.",
        "correction": "AC = AN × k = 5 × 2 = 10 cm."
      },
      {
        "num": "Question 5",
        "text": "Calculer la longueur exacte du segment NC.",
        "correction": "NC = AC - AN = 10 - 5 = 5 cm."
      },
      {
        "num": "Question 6",
        "text": "Calculer la longueur du côté BC.",
        "correction": "BC = MN × k = 3 × 2 = 6 cm."
      },
      {
        "num": "Question 7",
        "text": "Quel est le coefficient d'agrandissement de AMN vers ABC ?",
        "correction": "Le coefficient est k = 2."
      },
      {
        "num": "Question 8",
        "text": "Par quel facteur est multipliée l'aire du triangle AMN pour obtenir celle de ABC ?",
        "correction": "L'aire est multipliée par k² = 2² = 4.00."
      },
      {
        "num": "Question 9",
        "text": "Par quel facteur serait multiplié le volume d'une pyramide construite sur cette base ?",
        "correction": "Le volume est multiplié par k³ = 2³ = 8.00."
      },
      {
        "num": "Question 10",
        "text": "Si l'homothétie de centre A transforme M en B, quel est son rapport ?",
        "correction": "Le rapport de l'homothétie de centre A est k = 2."
      }
    ]
  },
  {
    "id": "m-22",
    "subject": "maths",
    "chapter": "Chapitre 2 : Théorème de Thalès & Homothétie",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 22 : Configuration de Thalès et rapport d'agrandissement #10",
    "statement": "Dans le triangle ABC, M ∈ [AB] et N ∈ [AC] avec (MN) // (BC). On donne AM = 5 cm, AN = 6 cm et MN = 4 cm. Le rapport d'agrandissement est k = 2.5.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Écrire les trois égalités de rapports de la configuration de Thalès.",
        "correction": "AM / AB = AN / AC = MN / BC = 1 / 2.5."
      },
      {
        "num": "Question 2",
        "text": "Calculer la longueur exacte du segment AB.",
        "correction": "AB = AM × k = 5 × 2.5 = 12.5 cm."
      },
      {
        "num": "Question 3",
        "text": "Calculer la longueur exacte du segment MB.",
        "correction": "MB = AB - AM = 12.5 - 5 = 7.5 cm."
      },
      {
        "num": "Question 4",
        "text": "Calculer la longueur exacte du segment AC.",
        "correction": "AC = AN × k = 6 × 2.5 = 15 cm."
      },
      {
        "num": "Question 5",
        "text": "Calculer la longueur exacte du segment NC.",
        "correction": "NC = AC - AN = 15 - 6 = 9 cm."
      },
      {
        "num": "Question 6",
        "text": "Calculer la longueur du côté BC.",
        "correction": "BC = MN × k = 4 × 2.5 = 10 cm."
      },
      {
        "num": "Question 7",
        "text": "Quel est le coefficient d'agrandissement de AMN vers ABC ?",
        "correction": "Le coefficient est k = 2.5."
      },
      {
        "num": "Question 8",
        "text": "Par quel facteur est multipliée l'aire du triangle AMN pour obtenir celle de ABC ?",
        "correction": "L'aire est multipliée par k² = 2.5² = 6.25."
      },
      {
        "num": "Question 9",
        "text": "Par quel facteur serait multiplié le volume d'une pyramide construite sur cette base ?",
        "correction": "Le volume est multiplié par k³ = 2.5³ = 15.63."
      },
      {
        "num": "Question 10",
        "text": "Si l'homothétie de centre A transforme M en B, quel est son rapport ?",
        "correction": "Le rapport de l'homothétie de centre A est k = 2.5."
      }
    ]
  },
  {
    "id": "m-23",
    "subject": "maths",
    "chapter": "Chapitre 2 : Théorème de Thalès & Homothétie",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 23 : Configuration de Thalès et rapport d'agrandissement #11",
    "statement": "Dans le triangle ABC, M ∈ [AB] et N ∈ [AC] avec (MN) // (BC). On donne AM = 6 cm, AN = 7 cm et MN = 5 cm. Le rapport d'agrandissement est k = 3.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Écrire les trois égalités de rapports de la configuration de Thalès.",
        "correction": "AM / AB = AN / AC = MN / BC = 1 / 3."
      },
      {
        "num": "Question 2",
        "text": "Calculer la longueur exacte du segment AB.",
        "correction": "AB = AM × k = 6 × 3 = 18 cm."
      },
      {
        "num": "Question 3",
        "text": "Calculer la longueur exacte du segment MB.",
        "correction": "MB = AB - AM = 18 - 6 = 12 cm."
      },
      {
        "num": "Question 4",
        "text": "Calculer la longueur exacte du segment AC.",
        "correction": "AC = AN × k = 7 × 3 = 21 cm."
      },
      {
        "num": "Question 5",
        "text": "Calculer la longueur exacte du segment NC.",
        "correction": "NC = AC - AN = 21 - 7 = 14 cm."
      },
      {
        "num": "Question 6",
        "text": "Calculer la longueur du côté BC.",
        "correction": "BC = MN × k = 5 × 3 = 15 cm."
      },
      {
        "num": "Question 7",
        "text": "Quel est le coefficient d'agrandissement de AMN vers ABC ?",
        "correction": "Le coefficient est k = 3."
      },
      {
        "num": "Question 8",
        "text": "Par quel facteur est multipliée l'aire du triangle AMN pour obtenir celle de ABC ?",
        "correction": "L'aire est multipliée par k² = 3² = 9.00."
      },
      {
        "num": "Question 9",
        "text": "Par quel facteur serait multiplié le volume d'une pyramide construite sur cette base ?",
        "correction": "Le volume est multiplié par k³ = 3³ = 27.00."
      },
      {
        "num": "Question 10",
        "text": "Si l'homothétie de centre A transforme M en B, quel est son rapport ?",
        "correction": "Le rapport de l'homothétie de centre A est k = 3."
      }
    ]
  },
  {
    "id": "m-24",
    "subject": "maths",
    "chapter": "Chapitre 2 : Théorème de Thalès & Homothétie",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 24 : Configuration de Thalès et rapport d'agrandissement #12",
    "statement": "Dans le triangle ABC, M ∈ [AB] et N ∈ [AC] avec (MN) // (BC). On donne AM = 4 cm, AN = 5 cm et MN = 3 cm. Le rapport d'agrandissement est k = 1.5.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Écrire les trois égalités de rapports de la configuration de Thalès.",
        "correction": "AM / AB = AN / AC = MN / BC = 1 / 1.5."
      },
      {
        "num": "Question 2",
        "text": "Calculer la longueur exacte du segment AB.",
        "correction": "AB = AM × k = 4 × 1.5 = 6 cm."
      },
      {
        "num": "Question 3",
        "text": "Calculer la longueur exacte du segment MB.",
        "correction": "MB = AB - AM = 6 - 4 = 2 cm."
      },
      {
        "num": "Question 4",
        "text": "Calculer la longueur exacte du segment AC.",
        "correction": "AC = AN × k = 5 × 1.5 = 7.5 cm."
      },
      {
        "num": "Question 5",
        "text": "Calculer la longueur exacte du segment NC.",
        "correction": "NC = AC - AN = 7.5 - 5 = 2.5 cm."
      },
      {
        "num": "Question 6",
        "text": "Calculer la longueur du côté BC.",
        "correction": "BC = MN × k = 3 × 1.5 = 4.5 cm."
      },
      {
        "num": "Question 7",
        "text": "Quel est le coefficient d'agrandissement de AMN vers ABC ?",
        "correction": "Le coefficient est k = 1.5."
      },
      {
        "num": "Question 8",
        "text": "Par quel facteur est multipliée l'aire du triangle AMN pour obtenir celle de ABC ?",
        "correction": "L'aire est multipliée par k² = 1.5² = 2.25."
      },
      {
        "num": "Question 9",
        "text": "Par quel facteur serait multiplié le volume d'une pyramide construite sur cette base ?",
        "correction": "Le volume est multiplié par k³ = 1.5³ = 3.38."
      },
      {
        "num": "Question 10",
        "text": "Si l'homothétie de centre A transforme M en B, quel est son rapport ?",
        "correction": "Le rapport de l'homothétie de centre A est k = 1.5."
      }
    ]
  },
  {
    "id": "m-25",
    "subject": "maths",
    "chapter": "Chapitre 3 : Calcul Littéral & Équations",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 25 : Développement, Factorisation et Équations Produit-Nul #1",
    "statement": "Soit l'expression A(x) = (2x + 2)² - (2x + 2)(4 - x). Traiter les 10 questions suivantes.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Développer et réduire (2x + 2)².",
        "correction": "(2x + 2)² = 4x² + 8x + 4."
      },
      {
        "num": "Question 2",
        "text": "Développer et réduire (2x + 2)(4 - x).",
        "correction": "(2x + 2)(4 - x) = -2x² + (6)x + 8."
      },
      {
        "num": "Question 3",
        "text": "Déduire le développement complet de A(x).",
        "correction": "A(x) = 6x² + 2x + -4."
      },
      {
        "num": "Question 4",
        "text": "Identifier le facteur commun dans l'expression initiale A(x).",
        "correction": "Le facteur commun est (2x + 2)."
      },
      {
        "num": "Question 5",
        "text": "Factoriser A(x) sous la forme d'un produit de deux facteurs du 1er degré.",
        "correction": "A(x) = (2x + 2)[(2x + 2) - (4 - x)] = (2x + 2)(3x + -2)."
      },
      {
        "num": "Question 6",
        "text": "Calculer la valeur exacte de A(0).",
        "correction": "A(0) = -4."
      },
      {
        "num": "Question 7",
        "text": "Calculer la valeur exacte de A(1).",
        "correction": "A(1) = (2 + 2)² - (2 + 2)(4 - 1) = 4."
      },
      {
        "num": "Question 8",
        "text": "Résoudre l'équation produit-nul (2x + 2) = 0.",
        "correction": "2x = -2 => x = -2/2 ≈ -1.00."
      },
      {
        "num": "Question 9",
        "text": "Résoudre l'équation (3x + -2) = 0.",
        "correction": "x = 2/3."
      },
      {
        "num": "Question 10",
        "text": "Quelles sont l'ensemble des solutions S de l'équation A(x) = 0 ?",
        "correction": "S = { -2/2 ; 2/3 }."
      }
    ]
  },
  {
    "id": "m-26",
    "subject": "maths",
    "chapter": "Chapitre 3 : Calcul Littéral & Équations",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 26 : Développement, Factorisation et Équations Produit-Nul #2",
    "statement": "Soit l'expression A(x) = (3x + 3)² - (3x + 3)(5 - x). Traiter les 10 questions suivantes.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Développer et réduire (3x + 3)².",
        "correction": "(3x + 3)² = 9x² + 18x + 9."
      },
      {
        "num": "Question 2",
        "text": "Développer et réduire (3x + 3)(5 - x).",
        "correction": "(3x + 3)(5 - x) = -3x² + (12)x + 15."
      },
      {
        "num": "Question 3",
        "text": "Déduire le développement complet de A(x).",
        "correction": "A(x) = 12x² + 6x + -6."
      },
      {
        "num": "Question 4",
        "text": "Identifier le facteur commun dans l'expression initiale A(x).",
        "correction": "Le facteur commun est (3x + 3)."
      },
      {
        "num": "Question 5",
        "text": "Factoriser A(x) sous la forme d'un produit de deux facteurs du 1er degré.",
        "correction": "A(x) = (3x + 3)[(3x + 3) - (5 - x)] = (3x + 3)(4x + -2)."
      },
      {
        "num": "Question 6",
        "text": "Calculer la valeur exacte de A(0).",
        "correction": "A(0) = -6."
      },
      {
        "num": "Question 7",
        "text": "Calculer la valeur exacte de A(1).",
        "correction": "A(1) = (3 + 3)² - (3 + 3)(5 - 1) = 12."
      },
      {
        "num": "Question 8",
        "text": "Résoudre l'équation produit-nul (3x + 3) = 0.",
        "correction": "3x = -3 => x = -3/3 ≈ -1.00."
      },
      {
        "num": "Question 9",
        "text": "Résoudre l'équation (4x + -2) = 0.",
        "correction": "x = 2/4."
      },
      {
        "num": "Question 10",
        "text": "Quelles sont l'ensemble des solutions S de l'équation A(x) = 0 ?",
        "correction": "S = { -3/3 ; 2/4 }."
      }
    ]
  },
  {
    "id": "m-27",
    "subject": "maths",
    "chapter": "Chapitre 3 : Calcul Littéral & Équations",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 27 : Développement, Factorisation et Équations Produit-Nul #3",
    "statement": "Soit l'expression A(x) = (4x + 4)² - (4x + 4)(3 - x). Traiter les 10 questions suivantes.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Développer et réduire (4x + 4)².",
        "correction": "(4x + 4)² = 16x² + 32x + 16."
      },
      {
        "num": "Question 2",
        "text": "Développer et réduire (4x + 4)(3 - x).",
        "correction": "(4x + 4)(3 - x) = -4x² + (8)x + 12."
      },
      {
        "num": "Question 3",
        "text": "Déduire le développement complet de A(x).",
        "correction": "A(x) = 20x² + 24x + 4."
      },
      {
        "num": "Question 4",
        "text": "Identifier le facteur commun dans l'expression initiale A(x).",
        "correction": "Le facteur commun est (4x + 4)."
      },
      {
        "num": "Question 5",
        "text": "Factoriser A(x) sous la forme d'un produit de deux facteurs du 1er degré.",
        "correction": "A(x) = (4x + 4)[(4x + 4) - (3 - x)] = (4x + 4)(5x + 1)."
      },
      {
        "num": "Question 6",
        "text": "Calculer la valeur exacte de A(0).",
        "correction": "A(0) = 4."
      },
      {
        "num": "Question 7",
        "text": "Calculer la valeur exacte de A(1).",
        "correction": "A(1) = (4 + 4)² - (4 + 4)(3 - 1) = 48."
      },
      {
        "num": "Question 8",
        "text": "Résoudre l'équation produit-nul (4x + 4) = 0.",
        "correction": "4x = -4 => x = -4/4 ≈ -1.00."
      },
      {
        "num": "Question 9",
        "text": "Résoudre l'équation (5x + 1) = 0.",
        "correction": "x = -1/5."
      },
      {
        "num": "Question 10",
        "text": "Quelles sont l'ensemble des solutions S de l'équation A(x) = 0 ?",
        "correction": "S = { -4/4 ; -1/5 }."
      }
    ]
  },
  {
    "id": "m-28",
    "subject": "maths",
    "chapter": "Chapitre 3 : Calcul Littéral & Équations",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 28 : Développement, Factorisation et Équations Produit-Nul #4",
    "statement": "Soit l'expression A(x) = (5x + 1)² - (5x + 1)(4 - x). Traiter les 10 questions suivantes.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Développer et réduire (5x + 1)².",
        "correction": "(5x + 1)² = 25x² + 10x + 1."
      },
      {
        "num": "Question 2",
        "text": "Développer et réduire (5x + 1)(4 - x).",
        "correction": "(5x + 1)(4 - x) = -5x² + (19)x + 4."
      },
      {
        "num": "Question 3",
        "text": "Déduire le développement complet de A(x).",
        "correction": "A(x) = 30x² + -9x + -3."
      },
      {
        "num": "Question 4",
        "text": "Identifier le facteur commun dans l'expression initiale A(x).",
        "correction": "Le facteur commun est (5x + 1)."
      },
      {
        "num": "Question 5",
        "text": "Factoriser A(x) sous la forme d'un produit de deux facteurs du 1er degré.",
        "correction": "A(x) = (5x + 1)[(5x + 1) - (4 - x)] = (5x + 1)(6x + -3)."
      },
      {
        "num": "Question 6",
        "text": "Calculer la valeur exacte de A(0).",
        "correction": "A(0) = -3."
      },
      {
        "num": "Question 7",
        "text": "Calculer la valeur exacte de A(1).",
        "correction": "A(1) = (5 + 1)² - (5 + 1)(4 - 1) = 18."
      },
      {
        "num": "Question 8",
        "text": "Résoudre l'équation produit-nul (5x + 1) = 0.",
        "correction": "5x = -1 => x = -1/5 ≈ -0.20."
      },
      {
        "num": "Question 9",
        "text": "Résoudre l'équation (6x + -3) = 0.",
        "correction": "x = 3/6."
      },
      {
        "num": "Question 10",
        "text": "Quelles sont l'ensemble des solutions S de l'équation A(x) = 0 ?",
        "correction": "S = { -1/5 ; 3/6 }."
      }
    ]
  },
  {
    "id": "m-29",
    "subject": "maths",
    "chapter": "Chapitre 3 : Calcul Littéral & Équations",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 29 : Développement, Factorisation et Équations Produit-Nul #5",
    "statement": "Soit l'expression A(x) = (6x + 2)² - (6x + 2)(5 - x). Traiter les 10 questions suivantes.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Développer et réduire (6x + 2)².",
        "correction": "(6x + 2)² = 36x² + 24x + 4."
      },
      {
        "num": "Question 2",
        "text": "Développer et réduire (6x + 2)(5 - x).",
        "correction": "(6x + 2)(5 - x) = -6x² + (28)x + 10."
      },
      {
        "num": "Question 3",
        "text": "Déduire le développement complet de A(x).",
        "correction": "A(x) = 42x² + -4x + -6."
      },
      {
        "num": "Question 4",
        "text": "Identifier le facteur commun dans l'expression initiale A(x).",
        "correction": "Le facteur commun est (6x + 2)."
      },
      {
        "num": "Question 5",
        "text": "Factoriser A(x) sous la forme d'un produit de deux facteurs du 1er degré.",
        "correction": "A(x) = (6x + 2)[(6x + 2) - (5 - x)] = (6x + 2)(7x + -3)."
      },
      {
        "num": "Question 6",
        "text": "Calculer la valeur exacte de A(0).",
        "correction": "A(0) = -6."
      },
      {
        "num": "Question 7",
        "text": "Calculer la valeur exacte de A(1).",
        "correction": "A(1) = (6 + 2)² - (6 + 2)(5 - 1) = 32."
      },
      {
        "num": "Question 8",
        "text": "Résoudre l'équation produit-nul (6x + 2) = 0.",
        "correction": "6x = -2 => x = -2/6 ≈ -0.33."
      },
      {
        "num": "Question 9",
        "text": "Résoudre l'équation (7x + -3) = 0.",
        "correction": "x = 3/7."
      },
      {
        "num": "Question 10",
        "text": "Quelles sont l'ensemble des solutions S de l'équation A(x) = 0 ?",
        "correction": "S = { -2/6 ; 3/7 }."
      }
    ]
  },
  {
    "id": "m-30",
    "subject": "maths",
    "chapter": "Chapitre 3 : Calcul Littéral & Équations",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 30 : Développement, Factorisation et Équations Produit-Nul #6",
    "statement": "Soit l'expression A(x) = (2x + 3)² - (2x + 3)(3 - x). Traiter les 10 questions suivantes.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Développer et réduire (2x + 3)².",
        "correction": "(2x + 3)² = 4x² + 12x + 9."
      },
      {
        "num": "Question 2",
        "text": "Développer et réduire (2x + 3)(3 - x).",
        "correction": "(2x + 3)(3 - x) = -2x² + (3)x + 9."
      },
      {
        "num": "Question 3",
        "text": "Déduire le développement complet de A(x).",
        "correction": "A(x) = 6x² + 9x + 0."
      },
      {
        "num": "Question 4",
        "text": "Identifier le facteur commun dans l'expression initiale A(x).",
        "correction": "Le facteur commun est (2x + 3)."
      },
      {
        "num": "Question 5",
        "text": "Factoriser A(x) sous la forme d'un produit de deux facteurs du 1er degré.",
        "correction": "A(x) = (2x + 3)[(2x + 3) - (3 - x)] = (2x + 3)(3x + 0)."
      },
      {
        "num": "Question 6",
        "text": "Calculer la valeur exacte de A(0).",
        "correction": "A(0) = 0."
      },
      {
        "num": "Question 7",
        "text": "Calculer la valeur exacte de A(1).",
        "correction": "A(1) = (2 + 3)² - (2 + 3)(3 - 1) = 15."
      },
      {
        "num": "Question 8",
        "text": "Résoudre l'équation produit-nul (2x + 3) = 0.",
        "correction": "2x = -3 => x = -3/2 ≈ -1.50."
      },
      {
        "num": "Question 9",
        "text": "Résoudre l'équation (3x + 0) = 0.",
        "correction": "x = 0/3."
      },
      {
        "num": "Question 10",
        "text": "Quelles sont l'ensemble des solutions S de l'équation A(x) = 0 ?",
        "correction": "S = { -3/2 ; 0/3 }."
      }
    ]
  },
  {
    "id": "m-31",
    "subject": "maths",
    "chapter": "Chapitre 3 : Calcul Littéral & Équations",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 31 : Développement, Factorisation et Équations Produit-Nul #7",
    "statement": "Soit l'expression A(x) = (3x + 4)² - (3x + 4)(4 - x). Traiter les 10 questions suivantes.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Développer et réduire (3x + 4)².",
        "correction": "(3x + 4)² = 9x² + 24x + 16."
      },
      {
        "num": "Question 2",
        "text": "Développer et réduire (3x + 4)(4 - x).",
        "correction": "(3x + 4)(4 - x) = -3x² + (8)x + 16."
      },
      {
        "num": "Question 3",
        "text": "Déduire le développement complet de A(x).",
        "correction": "A(x) = 12x² + 16x + 0."
      },
      {
        "num": "Question 4",
        "text": "Identifier le facteur commun dans l'expression initiale A(x).",
        "correction": "Le facteur commun est (3x + 4)."
      },
      {
        "num": "Question 5",
        "text": "Factoriser A(x) sous la forme d'un produit de deux facteurs du 1er degré.",
        "correction": "A(x) = (3x + 4)[(3x + 4) - (4 - x)] = (3x + 4)(4x + 0)."
      },
      {
        "num": "Question 6",
        "text": "Calculer la valeur exacte de A(0).",
        "correction": "A(0) = 0."
      },
      {
        "num": "Question 7",
        "text": "Calculer la valeur exacte de A(1).",
        "correction": "A(1) = (3 + 4)² - (3 + 4)(4 - 1) = 28."
      },
      {
        "num": "Question 8",
        "text": "Résoudre l'équation produit-nul (3x + 4) = 0.",
        "correction": "3x = -4 => x = -4/3 ≈ -1.33."
      },
      {
        "num": "Question 9",
        "text": "Résoudre l'équation (4x + 0) = 0.",
        "correction": "x = 0/4."
      },
      {
        "num": "Question 10",
        "text": "Quelles sont l'ensemble des solutions S de l'équation A(x) = 0 ?",
        "correction": "S = { -4/3 ; 0/4 }."
      }
    ]
  },
  {
    "id": "m-32",
    "subject": "maths",
    "chapter": "Chapitre 3 : Calcul Littéral & Équations",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 32 : Développement, Factorisation et Équations Produit-Nul #8",
    "statement": "Soit l'expression A(x) = (4x + 1)² - (4x + 1)(5 - x). Traiter les 10 questions suivantes.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Développer et réduire (4x + 1)².",
        "correction": "(4x + 1)² = 16x² + 8x + 1."
      },
      {
        "num": "Question 2",
        "text": "Développer et réduire (4x + 1)(5 - x).",
        "correction": "(4x + 1)(5 - x) = -4x² + (19)x + 5."
      },
      {
        "num": "Question 3",
        "text": "Déduire le développement complet de A(x).",
        "correction": "A(x) = 20x² + -11x + -4."
      },
      {
        "num": "Question 4",
        "text": "Identifier le facteur commun dans l'expression initiale A(x).",
        "correction": "Le facteur commun est (4x + 1)."
      },
      {
        "num": "Question 5",
        "text": "Factoriser A(x) sous la forme d'un produit de deux facteurs du 1er degré.",
        "correction": "A(x) = (4x + 1)[(4x + 1) - (5 - x)] = (4x + 1)(5x + -4)."
      },
      {
        "num": "Question 6",
        "text": "Calculer la valeur exacte de A(0).",
        "correction": "A(0) = -4."
      },
      {
        "num": "Question 7",
        "text": "Calculer la valeur exacte de A(1).",
        "correction": "A(1) = (4 + 1)² - (4 + 1)(5 - 1) = 5."
      },
      {
        "num": "Question 8",
        "text": "Résoudre l'équation produit-nul (4x + 1) = 0.",
        "correction": "4x = -1 => x = -1/4 ≈ -0.25."
      },
      {
        "num": "Question 9",
        "text": "Résoudre l'équation (5x + -4) = 0.",
        "correction": "x = 4/5."
      },
      {
        "num": "Question 10",
        "text": "Quelles sont l'ensemble des solutions S de l'équation A(x) = 0 ?",
        "correction": "S = { -1/4 ; 4/5 }."
      }
    ]
  },
  {
    "id": "m-33",
    "subject": "maths",
    "chapter": "Chapitre 3 : Calcul Littéral & Équations",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 33 : Développement, Factorisation et Équations Produit-Nul #9",
    "statement": "Soit l'expression A(x) = (5x + 2)² - (5x + 2)(3 - x). Traiter les 10 questions suivantes.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Développer et réduire (5x + 2)².",
        "correction": "(5x + 2)² = 25x² + 20x + 4."
      },
      {
        "num": "Question 2",
        "text": "Développer et réduire (5x + 2)(3 - x).",
        "correction": "(5x + 2)(3 - x) = -5x² + (13)x + 6."
      },
      {
        "num": "Question 3",
        "text": "Déduire le développement complet de A(x).",
        "correction": "A(x) = 30x² + 7x + -2."
      },
      {
        "num": "Question 4",
        "text": "Identifier le facteur commun dans l'expression initiale A(x).",
        "correction": "Le facteur commun est (5x + 2)."
      },
      {
        "num": "Question 5",
        "text": "Factoriser A(x) sous la forme d'un produit de deux facteurs du 1er degré.",
        "correction": "A(x) = (5x + 2)[(5x + 2) - (3 - x)] = (5x + 2)(6x + -1)."
      },
      {
        "num": "Question 6",
        "text": "Calculer la valeur exacte de A(0).",
        "correction": "A(0) = -2."
      },
      {
        "num": "Question 7",
        "text": "Calculer la valeur exacte de A(1).",
        "correction": "A(1) = (5 + 2)² - (5 + 2)(3 - 1) = 35."
      },
      {
        "num": "Question 8",
        "text": "Résoudre l'équation produit-nul (5x + 2) = 0.",
        "correction": "5x = -2 => x = -2/5 ≈ -0.40."
      },
      {
        "num": "Question 9",
        "text": "Résoudre l'équation (6x + -1) = 0.",
        "correction": "x = 1/6."
      },
      {
        "num": "Question 10",
        "text": "Quelles sont l'ensemble des solutions S de l'équation A(x) = 0 ?",
        "correction": "S = { -2/5 ; 1/6 }."
      }
    ]
  },
  {
    "id": "m-34",
    "subject": "maths",
    "chapter": "Chapitre 3 : Calcul Littéral & Équations",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 34 : Développement, Factorisation et Équations Produit-Nul #10",
    "statement": "Soit l'expression A(x) = (6x + 3)² - (6x + 3)(4 - x). Traiter les 10 questions suivantes.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Développer et réduire (6x + 3)².",
        "correction": "(6x + 3)² = 36x² + 36x + 9."
      },
      {
        "num": "Question 2",
        "text": "Développer et réduire (6x + 3)(4 - x).",
        "correction": "(6x + 3)(4 - x) = -6x² + (21)x + 12."
      },
      {
        "num": "Question 3",
        "text": "Déduire le développement complet de A(x).",
        "correction": "A(x) = 42x² + 15x + -3."
      },
      {
        "num": "Question 4",
        "text": "Identifier le facteur commun dans l'expression initiale A(x).",
        "correction": "Le facteur commun est (6x + 3)."
      },
      {
        "num": "Question 5",
        "text": "Factoriser A(x) sous la forme d'un produit de deux facteurs du 1er degré.",
        "correction": "A(x) = (6x + 3)[(6x + 3) - (4 - x)] = (6x + 3)(7x + -1)."
      },
      {
        "num": "Question 6",
        "text": "Calculer la valeur exacte de A(0).",
        "correction": "A(0) = -3."
      },
      {
        "num": "Question 7",
        "text": "Calculer la valeur exacte de A(1).",
        "correction": "A(1) = (6 + 3)² - (6 + 3)(4 - 1) = 54."
      },
      {
        "num": "Question 8",
        "text": "Résoudre l'équation produit-nul (6x + 3) = 0.",
        "correction": "6x = -3 => x = -3/6 ≈ -0.50."
      },
      {
        "num": "Question 9",
        "text": "Résoudre l'équation (7x + -1) = 0.",
        "correction": "x = 1/7."
      },
      {
        "num": "Question 10",
        "text": "Quelles sont l'ensemble des solutions S de l'équation A(x) = 0 ?",
        "correction": "S = { -3/6 ; 1/7 }."
      }
    ]
  },
  {
    "id": "m-35",
    "subject": "maths",
    "chapter": "Chapitre 3 : Calcul Littéral & Équations",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 35 : Développement, Factorisation et Équations Produit-Nul #11",
    "statement": "Soit l'expression A(x) = (2x + 4)² - (2x + 4)(5 - x). Traiter les 10 questions suivantes.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Développer et réduire (2x + 4)².",
        "correction": "(2x + 4)² = 4x² + 16x + 16."
      },
      {
        "num": "Question 2",
        "text": "Développer et réduire (2x + 4)(5 - x).",
        "correction": "(2x + 4)(5 - x) = -2x² + (6)x + 20."
      },
      {
        "num": "Question 3",
        "text": "Déduire le développement complet de A(x).",
        "correction": "A(x) = 6x² + 10x + -4."
      },
      {
        "num": "Question 4",
        "text": "Identifier le facteur commun dans l'expression initiale A(x).",
        "correction": "Le facteur commun est (2x + 4)."
      },
      {
        "num": "Question 5",
        "text": "Factoriser A(x) sous la forme d'un produit de deux facteurs du 1er degré.",
        "correction": "A(x) = (2x + 4)[(2x + 4) - (5 - x)] = (2x + 4)(3x + -1)."
      },
      {
        "num": "Question 6",
        "text": "Calculer la valeur exacte de A(0).",
        "correction": "A(0) = -4."
      },
      {
        "num": "Question 7",
        "text": "Calculer la valeur exacte de A(1).",
        "correction": "A(1) = (2 + 4)² - (2 + 4)(5 - 1) = 12."
      },
      {
        "num": "Question 8",
        "text": "Résoudre l'équation produit-nul (2x + 4) = 0.",
        "correction": "2x = -4 => x = -4/2 ≈ -2.00."
      },
      {
        "num": "Question 9",
        "text": "Résoudre l'équation (3x + -1) = 0.",
        "correction": "x = 1/3."
      },
      {
        "num": "Question 10",
        "text": "Quelles sont l'ensemble des solutions S de l'équation A(x) = 0 ?",
        "correction": "S = { -4/2 ; 1/3 }."
      }
    ]
  },
  {
    "id": "m-36",
    "subject": "maths",
    "chapter": "Chapitre 3 : Calcul Littéral & Équations",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 36 : Développement, Factorisation et Équations Produit-Nul #12",
    "statement": "Soit l'expression A(x) = (3x + 1)² - (3x + 1)(3 - x). Traiter les 10 questions suivantes.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Développer et réduire (3x + 1)².",
        "correction": "(3x + 1)² = 9x² + 6x + 1."
      },
      {
        "num": "Question 2",
        "text": "Développer et réduire (3x + 1)(3 - x).",
        "correction": "(3x + 1)(3 - x) = -3x² + (8)x + 3."
      },
      {
        "num": "Question 3",
        "text": "Déduire le développement complet de A(x).",
        "correction": "A(x) = 12x² + -2x + -2."
      },
      {
        "num": "Question 4",
        "text": "Identifier le facteur commun dans l'expression initiale A(x).",
        "correction": "Le facteur commun est (3x + 1)."
      },
      {
        "num": "Question 5",
        "text": "Factoriser A(x) sous la forme d'un produit de deux facteurs du 1er degré.",
        "correction": "A(x) = (3x + 1)[(3x + 1) - (3 - x)] = (3x + 1)(4x + -2)."
      },
      {
        "num": "Question 6",
        "text": "Calculer la valeur exacte de A(0).",
        "correction": "A(0) = -2."
      },
      {
        "num": "Question 7",
        "text": "Calculer la valeur exacte de A(1).",
        "correction": "A(1) = (3 + 1)² - (3 + 1)(3 - 1) = 8."
      },
      {
        "num": "Question 8",
        "text": "Résoudre l'équation produit-nul (3x + 1) = 0.",
        "correction": "3x = -1 => x = -1/3 ≈ -0.33."
      },
      {
        "num": "Question 9",
        "text": "Résoudre l'équation (4x + -2) = 0.",
        "correction": "x = 2/4."
      },
      {
        "num": "Question 10",
        "text": "Quelles sont l'ensemble des solutions S de l'équation A(x) = 0 ?",
        "correction": "S = { -1/3 ; 2/4 }."
      }
    ]
  },
  {
    "id": "m-37",
    "subject": "maths",
    "chapter": "Chapitre 3 : Calcul Littéral & Équations",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 37 : Développement, Factorisation et Équations Produit-Nul #13",
    "statement": "Soit l'expression A(x) = (4x + 2)² - (4x + 2)(4 - x). Traiter les 10 questions suivantes.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Développer et réduire (4x + 2)².",
        "correction": "(4x + 2)² = 16x² + 16x + 4."
      },
      {
        "num": "Question 2",
        "text": "Développer et réduire (4x + 2)(4 - x).",
        "correction": "(4x + 2)(4 - x) = -4x² + (14)x + 8."
      },
      {
        "num": "Question 3",
        "text": "Déduire le développement complet de A(x).",
        "correction": "A(x) = 20x² + 2x + -4."
      },
      {
        "num": "Question 4",
        "text": "Identifier le facteur commun dans l'expression initiale A(x).",
        "correction": "Le facteur commun est (4x + 2)."
      },
      {
        "num": "Question 5",
        "text": "Factoriser A(x) sous la forme d'un produit de deux facteurs du 1er degré.",
        "correction": "A(x) = (4x + 2)[(4x + 2) - (4 - x)] = (4x + 2)(5x + -2)."
      },
      {
        "num": "Question 6",
        "text": "Calculer la valeur exacte de A(0).",
        "correction": "A(0) = -4."
      },
      {
        "num": "Question 7",
        "text": "Calculer la valeur exacte de A(1).",
        "correction": "A(1) = (4 + 2)² - (4 + 2)(4 - 1) = 18."
      },
      {
        "num": "Question 8",
        "text": "Résoudre l'équation produit-nul (4x + 2) = 0.",
        "correction": "4x = -2 => x = -2/4 ≈ -0.50."
      },
      {
        "num": "Question 9",
        "text": "Résoudre l'équation (5x + -2) = 0.",
        "correction": "x = 2/5."
      },
      {
        "num": "Question 10",
        "text": "Quelles sont l'ensemble des solutions S de l'équation A(x) = 0 ?",
        "correction": "S = { -2/4 ; 2/5 }."
      }
    ]
  },
  {
    "id": "m-38",
    "subject": "maths",
    "chapter": "Chapitre 4 : Fonctions & Probabilités",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 38 : Étude de la fonction affine f(x) = 4x + 1 et Probabilités #1",
    "statement": "On considère la fonction affine f définie par f(x) = 4x + 1. On étudie aussi un tirage de boules numérotées dans une urne.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Quel est le coefficient directeur (pente) de la droite représentant f ?",
        "correction": "Le coefficient directeur est a = 4."
      },
      {
        "num": "Question 2",
        "text": "Quelle est l'ordonnée à l'origine de la fonction f ?",
        "correction": "L'ordonnée à l'origine est b = 1."
      },
      {
        "num": "Question 3",
        "text": "Calculer l'image de 0 par f.",
        "correction": "f(0) = 1."
      },
      {
        "num": "Question 4",
        "text": "Calculer l'image de 3 par f.",
        "correction": "f(3) = 4 × 3 + 1 = 13."
      },
      {
        "num": "Question 5",
        "text": "Déterminer l'antécédent de 0 par f.",
        "correction": "4x + 1 = 0 => x = -1/4 = -0.25."
      },
      {
        "num": "Question 6",
        "text": "La fonction f est-elle croissante ou décroissante ? Justifier.",
        "correction": "Comme a = 4 > 0, la fonction f est strictement croissante."
      },
      {
        "num": "Question 7",
        "text": "Une urne contient 4 boules rouges, 6 boules bleues et 10 boules vertes. Quelle est la probabilité de tirer une boule rouge ?",
        "correction": "P(Rouge) = 4 / 20 = 1 / 5 = 0,2 (soit 20%)."
      },
      {
        "num": "Question 8",
        "text": "Quelle est la probabilité de tirer une boule bleue ou verte ?",
        "correction": "P(Bleue ou Verte) = (6 + 10) / 20 = 16 / 20 = 4 / 5 = 0,8 (80%)."
      },
      {
        "num": "Question 9",
        "text": "Calculer la probabilité de l'événement contraire de \"tirer une boule verte\".",
        "correction": "P(Non verte) = 1 - (10/20) = 10 / 20 = 0,5 (50%)."
      },
      {
        "num": "Question 10",
        "text": "Si on effectue un tirage avec remise de 2 boules, quelle est la probabilité d'obtenir 2 boules rouges ?",
        "correction": "P(2 Rouges) = (4/20) × (4/20) = 1/25 = 0,04 (4%)."
      }
    ]
  },
  {
    "id": "m-39",
    "subject": "maths",
    "chapter": "Chapitre 4 : Fonctions & Probabilités",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 39 : Étude de la fonction affine f(x) = 5x + 2 et Probabilités #2",
    "statement": "On considère la fonction affine f définie par f(x) = 5x + 2. On étudie aussi un tirage de boules numérotées dans une urne.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Quel est le coefficient directeur (pente) de la droite représentant f ?",
        "correction": "Le coefficient directeur est a = 5."
      },
      {
        "num": "Question 2",
        "text": "Quelle est l'ordonnée à l'origine de la fonction f ?",
        "correction": "L'ordonnée à l'origine est b = 2."
      },
      {
        "num": "Question 3",
        "text": "Calculer l'image de 0 par f.",
        "correction": "f(0) = 2."
      },
      {
        "num": "Question 4",
        "text": "Calculer l'image de 4 par f.",
        "correction": "f(4) = 5 × 4 + 2 = 22."
      },
      {
        "num": "Question 5",
        "text": "Déterminer l'antécédent de 0 par f.",
        "correction": "5x + 2 = 0 => x = -2/5 = -0.40."
      },
      {
        "num": "Question 6",
        "text": "La fonction f est-elle croissante ou décroissante ? Justifier.",
        "correction": "Comme a = 5 > 0, la fonction f est strictement croissante."
      },
      {
        "num": "Question 7",
        "text": "Une urne contient 4 boules rouges, 6 boules bleues et 10 boules vertes. Quelle est la probabilité de tirer une boule rouge ?",
        "correction": "P(Rouge) = 4 / 20 = 1 / 5 = 0,2 (soit 20%)."
      },
      {
        "num": "Question 8",
        "text": "Quelle est la probabilité de tirer une boule bleue ou verte ?",
        "correction": "P(Bleue ou Verte) = (6 + 10) / 20 = 16 / 20 = 4 / 5 = 0,8 (80%)."
      },
      {
        "num": "Question 9",
        "text": "Calculer la probabilité de l'événement contraire de \"tirer une boule verte\".",
        "correction": "P(Non verte) = 1 - (10/20) = 10 / 20 = 0,5 (50%)."
      },
      {
        "num": "Question 10",
        "text": "Si on effectue un tirage avec remise de 2 boules, quelle est la probabilité d'obtenir 2 boules rouges ?",
        "correction": "P(2 Rouges) = (4/20) × (4/20) = 1/25 = 0,04 (4%)."
      }
    ]
  },
  {
    "id": "m-40",
    "subject": "maths",
    "chapter": "Chapitre 4 : Fonctions & Probabilités",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 40 : Étude de la fonction affine f(x) = 2x -2 et Probabilités #3",
    "statement": "On considère la fonction affine f définie par f(x) = 2x -2. On étudie aussi un tirage de boules numérotées dans une urne.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Quel est le coefficient directeur (pente) de la droite représentant f ?",
        "correction": "Le coefficient directeur est a = 2."
      },
      {
        "num": "Question 2",
        "text": "Quelle est l'ordonnée à l'origine de la fonction f ?",
        "correction": "L'ordonnée à l'origine est b = -2."
      },
      {
        "num": "Question 3",
        "text": "Calculer l'image de 0 par f.",
        "correction": "f(0) = -2."
      },
      {
        "num": "Question 4",
        "text": "Calculer l'image de 5 par f.",
        "correction": "f(5) = 2 × 5 -2 = 8."
      },
      {
        "num": "Question 5",
        "text": "Déterminer l'antécédent de 0 par f.",
        "correction": "2x -2 = 0 => x = 2/2 = 1.00."
      },
      {
        "num": "Question 6",
        "text": "La fonction f est-elle croissante ou décroissante ? Justifier.",
        "correction": "Comme a = 2 > 0, la fonction f est strictement croissante."
      },
      {
        "num": "Question 7",
        "text": "Une urne contient 4 boules rouges, 6 boules bleues et 10 boules vertes. Quelle est la probabilité de tirer une boule rouge ?",
        "correction": "P(Rouge) = 4 / 20 = 1 / 5 = 0,2 (soit 20%)."
      },
      {
        "num": "Question 8",
        "text": "Quelle est la probabilité de tirer une boule bleue ou verte ?",
        "correction": "P(Bleue ou Verte) = (6 + 10) / 20 = 16 / 20 = 4 / 5 = 0,8 (80%)."
      },
      {
        "num": "Question 9",
        "text": "Calculer la probabilité de l'événement contraire de \"tirer une boule verte\".",
        "correction": "P(Non verte) = 1 - (10/20) = 10 / 20 = 0,5 (50%)."
      },
      {
        "num": "Question 10",
        "text": "Si on effectue un tirage avec remise de 2 boules, quelle est la probabilité d'obtenir 2 boules rouges ?",
        "correction": "P(2 Rouges) = (4/20) × (4/20) = 1/25 = 0,04 (4%)."
      }
    ]
  },
  {
    "id": "m-41",
    "subject": "maths",
    "chapter": "Chapitre 4 : Fonctions & Probabilités",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 41 : Étude de la fonction affine f(x) = 3x -1 et Probabilités #4",
    "statement": "On considère la fonction affine f définie par f(x) = 3x -1. On étudie aussi un tirage de boules numérotées dans une urne.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Quel est le coefficient directeur (pente) de la droite représentant f ?",
        "correction": "Le coefficient directeur est a = 3."
      },
      {
        "num": "Question 2",
        "text": "Quelle est l'ordonnée à l'origine de la fonction f ?",
        "correction": "L'ordonnée à l'origine est b = -1."
      },
      {
        "num": "Question 3",
        "text": "Calculer l'image de 0 par f.",
        "correction": "f(0) = -1."
      },
      {
        "num": "Question 4",
        "text": "Calculer l'image de 6 par f.",
        "correction": "f(6) = 3 × 6 -1 = 17."
      },
      {
        "num": "Question 5",
        "text": "Déterminer l'antécédent de 0 par f.",
        "correction": "3x -1 = 0 => x = 1/3 = 0.33."
      },
      {
        "num": "Question 6",
        "text": "La fonction f est-elle croissante ou décroissante ? Justifier.",
        "correction": "Comme a = 3 > 0, la fonction f est strictement croissante."
      },
      {
        "num": "Question 7",
        "text": "Une urne contient 4 boules rouges, 6 boules bleues et 10 boules vertes. Quelle est la probabilité de tirer une boule rouge ?",
        "correction": "P(Rouge) = 4 / 20 = 1 / 5 = 0,2 (soit 20%)."
      },
      {
        "num": "Question 8",
        "text": "Quelle est la probabilité de tirer une boule bleue ou verte ?",
        "correction": "P(Bleue ou Verte) = (6 + 10) / 20 = 16 / 20 = 4 / 5 = 0,8 (80%)."
      },
      {
        "num": "Question 9",
        "text": "Calculer la probabilité de l'événement contraire de \"tirer une boule verte\".",
        "correction": "P(Non verte) = 1 - (10/20) = 10 / 20 = 0,5 (50%)."
      },
      {
        "num": "Question 10",
        "text": "Si on effectue un tirage avec remise de 2 boules, quelle est la probabilité d'obtenir 2 boules rouges ?",
        "correction": "P(2 Rouges) = (4/20) × (4/20) = 1/25 = 0,04 (4%)."
      }
    ]
  },
  {
    "id": "m-42",
    "subject": "maths",
    "chapter": "Chapitre 4 : Fonctions & Probabilités",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 42 : Étude de la fonction affine f(x) = 4x + 0 et Probabilités #5",
    "statement": "On considère la fonction affine f définie par f(x) = 4x + 0. On étudie aussi un tirage de boules numérotées dans une urne.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Quel est le coefficient directeur (pente) de la droite représentant f ?",
        "correction": "Le coefficient directeur est a = 4."
      },
      {
        "num": "Question 2",
        "text": "Quelle est l'ordonnée à l'origine de la fonction f ?",
        "correction": "L'ordonnée à l'origine est b = 0."
      },
      {
        "num": "Question 3",
        "text": "Calculer l'image de 0 par f.",
        "correction": "f(0) = 0."
      },
      {
        "num": "Question 4",
        "text": "Calculer l'image de 1 par f.",
        "correction": "f(1) = 4 × 1 + 0 = 4."
      },
      {
        "num": "Question 5",
        "text": "Déterminer l'antécédent de 0 par f.",
        "correction": "4x + 0 = 0 => x = 0/4 = 0.00."
      },
      {
        "num": "Question 6",
        "text": "La fonction f est-elle croissante ou décroissante ? Justifier.",
        "correction": "Comme a = 4 > 0, la fonction f est strictement croissante."
      },
      {
        "num": "Question 7",
        "text": "Une urne contient 4 boules rouges, 6 boules bleues et 10 boules vertes. Quelle est la probabilité de tirer une boule rouge ?",
        "correction": "P(Rouge) = 4 / 20 = 1 / 5 = 0,2 (soit 20%)."
      },
      {
        "num": "Question 8",
        "text": "Quelle est la probabilité de tirer une boule bleue ou verte ?",
        "correction": "P(Bleue ou Verte) = (6 + 10) / 20 = 16 / 20 = 4 / 5 = 0,8 (80%)."
      },
      {
        "num": "Question 9",
        "text": "Calculer la probabilité de l'événement contraire de \"tirer une boule verte\".",
        "correction": "P(Non verte) = 1 - (10/20) = 10 / 20 = 0,5 (50%)."
      },
      {
        "num": "Question 10",
        "text": "Si on effectue un tirage avec remise de 2 boules, quelle est la probabilité d'obtenir 2 boules rouges ?",
        "correction": "P(2 Rouges) = (4/20) × (4/20) = 1/25 = 0,04 (4%)."
      }
    ]
  },
  {
    "id": "m-43",
    "subject": "maths",
    "chapter": "Chapitre 4 : Fonctions & Probabilités",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 43 : Étude de la fonction affine f(x) = 5x + 1 et Probabilités #6",
    "statement": "On considère la fonction affine f définie par f(x) = 5x + 1. On étudie aussi un tirage de boules numérotées dans une urne.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Quel est le coefficient directeur (pente) de la droite représentant f ?",
        "correction": "Le coefficient directeur est a = 5."
      },
      {
        "num": "Question 2",
        "text": "Quelle est l'ordonnée à l'origine de la fonction f ?",
        "correction": "L'ordonnée à l'origine est b = 1."
      },
      {
        "num": "Question 3",
        "text": "Calculer l'image de 0 par f.",
        "correction": "f(0) = 1."
      },
      {
        "num": "Question 4",
        "text": "Calculer l'image de 2 par f.",
        "correction": "f(2) = 5 × 2 + 1 = 11."
      },
      {
        "num": "Question 5",
        "text": "Déterminer l'antécédent de 0 par f.",
        "correction": "5x + 1 = 0 => x = -1/5 = -0.20."
      },
      {
        "num": "Question 6",
        "text": "La fonction f est-elle croissante ou décroissante ? Justifier.",
        "correction": "Comme a = 5 > 0, la fonction f est strictement croissante."
      },
      {
        "num": "Question 7",
        "text": "Une urne contient 4 boules rouges, 6 boules bleues et 10 boules vertes. Quelle est la probabilité de tirer une boule rouge ?",
        "correction": "P(Rouge) = 4 / 20 = 1 / 5 = 0,2 (soit 20%)."
      },
      {
        "num": "Question 8",
        "text": "Quelle est la probabilité de tirer une boule bleue ou verte ?",
        "correction": "P(Bleue ou Verte) = (6 + 10) / 20 = 16 / 20 = 4 / 5 = 0,8 (80%)."
      },
      {
        "num": "Question 9",
        "text": "Calculer la probabilité de l'événement contraire de \"tirer une boule verte\".",
        "correction": "P(Non verte) = 1 - (10/20) = 10 / 20 = 0,5 (50%)."
      },
      {
        "num": "Question 10",
        "text": "Si on effectue un tirage avec remise de 2 boules, quelle est la probabilité d'obtenir 2 boules rouges ?",
        "correction": "P(2 Rouges) = (4/20) × (4/20) = 1/25 = 0,04 (4%)."
      }
    ]
  },
  {
    "id": "m-44",
    "subject": "maths",
    "chapter": "Chapitre 4 : Fonctions & Probabilités",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 44 : Étude de la fonction affine f(x) = 2x + 2 et Probabilités #7",
    "statement": "On considère la fonction affine f définie par f(x) = 2x + 2. On étudie aussi un tirage de boules numérotées dans une urne.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Quel est le coefficient directeur (pente) de la droite représentant f ?",
        "correction": "Le coefficient directeur est a = 2."
      },
      {
        "num": "Question 2",
        "text": "Quelle est l'ordonnée à l'origine de la fonction f ?",
        "correction": "L'ordonnée à l'origine est b = 2."
      },
      {
        "num": "Question 3",
        "text": "Calculer l'image de 0 par f.",
        "correction": "f(0) = 2."
      },
      {
        "num": "Question 4",
        "text": "Calculer l'image de 3 par f.",
        "correction": "f(3) = 2 × 3 + 2 = 8."
      },
      {
        "num": "Question 5",
        "text": "Déterminer l'antécédent de 0 par f.",
        "correction": "2x + 2 = 0 => x = -2/2 = -1.00."
      },
      {
        "num": "Question 6",
        "text": "La fonction f est-elle croissante ou décroissante ? Justifier.",
        "correction": "Comme a = 2 > 0, la fonction f est strictement croissante."
      },
      {
        "num": "Question 7",
        "text": "Une urne contient 4 boules rouges, 6 boules bleues et 10 boules vertes. Quelle est la probabilité de tirer une boule rouge ?",
        "correction": "P(Rouge) = 4 / 20 = 1 / 5 = 0,2 (soit 20%)."
      },
      {
        "num": "Question 8",
        "text": "Quelle est la probabilité de tirer une boule bleue ou verte ?",
        "correction": "P(Bleue ou Verte) = (6 + 10) / 20 = 16 / 20 = 4 / 5 = 0,8 (80%)."
      },
      {
        "num": "Question 9",
        "text": "Calculer la probabilité de l'événement contraire de \"tirer une boule verte\".",
        "correction": "P(Non verte) = 1 - (10/20) = 10 / 20 = 0,5 (50%)."
      },
      {
        "num": "Question 10",
        "text": "Si on effectue un tirage avec remise de 2 boules, quelle est la probabilité d'obtenir 2 boules rouges ?",
        "correction": "P(2 Rouges) = (4/20) × (4/20) = 1/25 = 0,04 (4%)."
      }
    ]
  },
  {
    "id": "m-45",
    "subject": "maths",
    "chapter": "Chapitre 4 : Fonctions & Probabilités",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 45 : Étude de la fonction affine f(x) = 3x -2 et Probabilités #8",
    "statement": "On considère la fonction affine f définie par f(x) = 3x -2. On étudie aussi un tirage de boules numérotées dans une urne.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Quel est le coefficient directeur (pente) de la droite représentant f ?",
        "correction": "Le coefficient directeur est a = 3."
      },
      {
        "num": "Question 2",
        "text": "Quelle est l'ordonnée à l'origine de la fonction f ?",
        "correction": "L'ordonnée à l'origine est b = -2."
      },
      {
        "num": "Question 3",
        "text": "Calculer l'image de 0 par f.",
        "correction": "f(0) = -2."
      },
      {
        "num": "Question 4",
        "text": "Calculer l'image de 4 par f.",
        "correction": "f(4) = 3 × 4 -2 = 10."
      },
      {
        "num": "Question 5",
        "text": "Déterminer l'antécédent de 0 par f.",
        "correction": "3x -2 = 0 => x = 2/3 = 0.67."
      },
      {
        "num": "Question 6",
        "text": "La fonction f est-elle croissante ou décroissante ? Justifier.",
        "correction": "Comme a = 3 > 0, la fonction f est strictement croissante."
      },
      {
        "num": "Question 7",
        "text": "Une urne contient 4 boules rouges, 6 boules bleues et 10 boules vertes. Quelle est la probabilité de tirer une boule rouge ?",
        "correction": "P(Rouge) = 4 / 20 = 1 / 5 = 0,2 (soit 20%)."
      },
      {
        "num": "Question 8",
        "text": "Quelle est la probabilité de tirer une boule bleue ou verte ?",
        "correction": "P(Bleue ou Verte) = (6 + 10) / 20 = 16 / 20 = 4 / 5 = 0,8 (80%)."
      },
      {
        "num": "Question 9",
        "text": "Calculer la probabilité de l'événement contraire de \"tirer une boule verte\".",
        "correction": "P(Non verte) = 1 - (10/20) = 10 / 20 = 0,5 (50%)."
      },
      {
        "num": "Question 10",
        "text": "Si on effectue un tirage avec remise de 2 boules, quelle est la probabilité d'obtenir 2 boules rouges ?",
        "correction": "P(2 Rouges) = (4/20) × (4/20) = 1/25 = 0,04 (4%)."
      }
    ]
  },
  {
    "id": "m-46",
    "subject": "maths",
    "chapter": "Chapitre 4 : Fonctions & Probabilités",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 46 : Étude de la fonction affine f(x) = 4x -1 et Probabilités #9",
    "statement": "On considère la fonction affine f définie par f(x) = 4x -1. On étudie aussi un tirage de boules numérotées dans une urne.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Quel est le coefficient directeur (pente) de la droite représentant f ?",
        "correction": "Le coefficient directeur est a = 4."
      },
      {
        "num": "Question 2",
        "text": "Quelle est l'ordonnée à l'origine de la fonction f ?",
        "correction": "L'ordonnée à l'origine est b = -1."
      },
      {
        "num": "Question 3",
        "text": "Calculer l'image de 0 par f.",
        "correction": "f(0) = -1."
      },
      {
        "num": "Question 4",
        "text": "Calculer l'image de 5 par f.",
        "correction": "f(5) = 4 × 5 -1 = 19."
      },
      {
        "num": "Question 5",
        "text": "Déterminer l'antécédent de 0 par f.",
        "correction": "4x -1 = 0 => x = 1/4 = 0.25."
      },
      {
        "num": "Question 6",
        "text": "La fonction f est-elle croissante ou décroissante ? Justifier.",
        "correction": "Comme a = 4 > 0, la fonction f est strictement croissante."
      },
      {
        "num": "Question 7",
        "text": "Une urne contient 4 boules rouges, 6 boules bleues et 10 boules vertes. Quelle est la probabilité de tirer une boule rouge ?",
        "correction": "P(Rouge) = 4 / 20 = 1 / 5 = 0,2 (soit 20%)."
      },
      {
        "num": "Question 8",
        "text": "Quelle est la probabilité de tirer une boule bleue ou verte ?",
        "correction": "P(Bleue ou Verte) = (6 + 10) / 20 = 16 / 20 = 4 / 5 = 0,8 (80%)."
      },
      {
        "num": "Question 9",
        "text": "Calculer la probabilité de l'événement contraire de \"tirer une boule verte\".",
        "correction": "P(Non verte) = 1 - (10/20) = 10 / 20 = 0,5 (50%)."
      },
      {
        "num": "Question 10",
        "text": "Si on effectue un tirage avec remise de 2 boules, quelle est la probabilité d'obtenir 2 boules rouges ?",
        "correction": "P(2 Rouges) = (4/20) × (4/20) = 1/25 = 0,04 (4%)."
      }
    ]
  },
  {
    "id": "m-47",
    "subject": "maths",
    "chapter": "Chapitre 4 : Fonctions & Probabilités",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 47 : Étude de la fonction affine f(x) = 5x + 0 et Probabilités #10",
    "statement": "On considère la fonction affine f définie par f(x) = 5x + 0. On étudie aussi un tirage de boules numérotées dans une urne.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Quel est le coefficient directeur (pente) de la droite représentant f ?",
        "correction": "Le coefficient directeur est a = 5."
      },
      {
        "num": "Question 2",
        "text": "Quelle est l'ordonnée à l'origine de la fonction f ?",
        "correction": "L'ordonnée à l'origine est b = 0."
      },
      {
        "num": "Question 3",
        "text": "Calculer l'image de 0 par f.",
        "correction": "f(0) = 0."
      },
      {
        "num": "Question 4",
        "text": "Calculer l'image de 6 par f.",
        "correction": "f(6) = 5 × 6 + 0 = 30."
      },
      {
        "num": "Question 5",
        "text": "Déterminer l'antécédent de 0 par f.",
        "correction": "5x + 0 = 0 => x = 0/5 = 0.00."
      },
      {
        "num": "Question 6",
        "text": "La fonction f est-elle croissante ou décroissante ? Justifier.",
        "correction": "Comme a = 5 > 0, la fonction f est strictement croissante."
      },
      {
        "num": "Question 7",
        "text": "Une urne contient 4 boules rouges, 6 boules bleues et 10 boules vertes. Quelle est la probabilité de tirer une boule rouge ?",
        "correction": "P(Rouge) = 4 / 20 = 1 / 5 = 0,2 (soit 20%)."
      },
      {
        "num": "Question 8",
        "text": "Quelle est la probabilité de tirer une boule bleue ou verte ?",
        "correction": "P(Bleue ou Verte) = (6 + 10) / 20 = 16 / 20 = 4 / 5 = 0,8 (80%)."
      },
      {
        "num": "Question 9",
        "text": "Calculer la probabilité de l'événement contraire de \"tirer une boule verte\".",
        "correction": "P(Non verte) = 1 - (10/20) = 10 / 20 = 0,5 (50%)."
      },
      {
        "num": "Question 10",
        "text": "Si on effectue un tirage avec remise de 2 boules, quelle est la probabilité d'obtenir 2 boules rouges ?",
        "correction": "P(2 Rouges) = (4/20) × (4/20) = 1/25 = 0,04 (4%)."
      }
    ]
  },
  {
    "id": "m-48",
    "subject": "maths",
    "chapter": "Chapitre 4 : Fonctions & Probabilités",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 48 : Étude de la fonction affine f(x) = 2x + 1 et Probabilités #11",
    "statement": "On considère la fonction affine f définie par f(x) = 2x + 1. On étudie aussi un tirage de boules numérotées dans une urne.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Quel est le coefficient directeur (pente) de la droite représentant f ?",
        "correction": "Le coefficient directeur est a = 2."
      },
      {
        "num": "Question 2",
        "text": "Quelle est l'ordonnée à l'origine de la fonction f ?",
        "correction": "L'ordonnée à l'origine est b = 1."
      },
      {
        "num": "Question 3",
        "text": "Calculer l'image de 0 par f.",
        "correction": "f(0) = 1."
      },
      {
        "num": "Question 4",
        "text": "Calculer l'image de 1 par f.",
        "correction": "f(1) = 2 × 1 + 1 = 3."
      },
      {
        "num": "Question 5",
        "text": "Déterminer l'antécédent de 0 par f.",
        "correction": "2x + 1 = 0 => x = -1/2 = -0.50."
      },
      {
        "num": "Question 6",
        "text": "La fonction f est-elle croissante ou décroissante ? Justifier.",
        "correction": "Comme a = 2 > 0, la fonction f est strictement croissante."
      },
      {
        "num": "Question 7",
        "text": "Une urne contient 4 boules rouges, 6 boules bleues et 10 boules vertes. Quelle est la probabilité de tirer une boule rouge ?",
        "correction": "P(Rouge) = 4 / 20 = 1 / 5 = 0,2 (soit 20%)."
      },
      {
        "num": "Question 8",
        "text": "Quelle est la probabilité de tirer une boule bleue ou verte ?",
        "correction": "P(Bleue ou Verte) = (6 + 10) / 20 = 16 / 20 = 4 / 5 = 0,8 (80%)."
      },
      {
        "num": "Question 9",
        "text": "Calculer la probabilité de l'événement contraire de \"tirer une boule verte\".",
        "correction": "P(Non verte) = 1 - (10/20) = 10 / 20 = 0,5 (50%)."
      },
      {
        "num": "Question 10",
        "text": "Si on effectue un tirage avec remise de 2 boules, quelle est la probabilité d'obtenir 2 boules rouges ?",
        "correction": "P(2 Rouges) = (4/20) × (4/20) = 1/25 = 0,04 (4%)."
      }
    ]
  },
  {
    "id": "m-49",
    "subject": "maths",
    "chapter": "Chapitre 4 : Fonctions & Probabilités",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 49 : Étude de la fonction affine f(x) = 3x + 2 et Probabilités #12",
    "statement": "On considère la fonction affine f définie par f(x) = 3x + 2. On étudie aussi un tirage de boules numérotées dans une urne.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Quel est le coefficient directeur (pente) de la droite représentant f ?",
        "correction": "Le coefficient directeur est a = 3."
      },
      {
        "num": "Question 2",
        "text": "Quelle est l'ordonnée à l'origine de la fonction f ?",
        "correction": "L'ordonnée à l'origine est b = 2."
      },
      {
        "num": "Question 3",
        "text": "Calculer l'image de 0 par f.",
        "correction": "f(0) = 2."
      },
      {
        "num": "Question 4",
        "text": "Calculer l'image de 2 par f.",
        "correction": "f(2) = 3 × 2 + 2 = 8."
      },
      {
        "num": "Question 5",
        "text": "Déterminer l'antécédent de 0 par f.",
        "correction": "3x + 2 = 0 => x = -2/3 = -0.67."
      },
      {
        "num": "Question 6",
        "text": "La fonction f est-elle croissante ou décroissante ? Justifier.",
        "correction": "Comme a = 3 > 0, la fonction f est strictement croissante."
      },
      {
        "num": "Question 7",
        "text": "Une urne contient 4 boules rouges, 6 boules bleues et 10 boules vertes. Quelle est la probabilité de tirer une boule rouge ?",
        "correction": "P(Rouge) = 4 / 20 = 1 / 5 = 0,2 (soit 20%)."
      },
      {
        "num": "Question 8",
        "text": "Quelle est la probabilité de tirer une boule bleue ou verte ?",
        "correction": "P(Bleue ou Verte) = (6 + 10) / 20 = 16 / 20 = 4 / 5 = 0,8 (80%)."
      },
      {
        "num": "Question 9",
        "text": "Calculer la probabilité de l'événement contraire de \"tirer une boule verte\".",
        "correction": "P(Non verte) = 1 - (10/20) = 10 / 20 = 0,5 (50%)."
      },
      {
        "num": "Question 10",
        "text": "Si on effectue un tirage avec remise de 2 boules, quelle est la probabilité d'obtenir 2 boules rouges ?",
        "correction": "P(2 Rouges) = (4/20) × (4/20) = 1/25 = 0,04 (4%)."
      }
    ]
  },
  {
    "id": "m-50",
    "subject": "maths",
    "chapter": "Chapitre 4 : Fonctions & Probabilités",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 50 : Étude de la fonction affine f(x) = 4x -2 et Probabilités #13",
    "statement": "On considère la fonction affine f définie par f(x) = 4x -2. On étudie aussi un tirage de boules numérotées dans une urne.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Quel est le coefficient directeur (pente) de la droite représentant f ?",
        "correction": "Le coefficient directeur est a = 4."
      },
      {
        "num": "Question 2",
        "text": "Quelle est l'ordonnée à l'origine de la fonction f ?",
        "correction": "L'ordonnée à l'origine est b = -2."
      },
      {
        "num": "Question 3",
        "text": "Calculer l'image de 0 par f.",
        "correction": "f(0) = -2."
      },
      {
        "num": "Question 4",
        "text": "Calculer l'image de 3 par f.",
        "correction": "f(3) = 4 × 3 -2 = 10."
      },
      {
        "num": "Question 5",
        "text": "Déterminer l'antécédent de 0 par f.",
        "correction": "4x -2 = 0 => x = 2/4 = 0.50."
      },
      {
        "num": "Question 6",
        "text": "La fonction f est-elle croissante ou décroissante ? Justifier.",
        "correction": "Comme a = 4 > 0, la fonction f est strictement croissante."
      },
      {
        "num": "Question 7",
        "text": "Une urne contient 4 boules rouges, 6 boules bleues et 10 boules vertes. Quelle est la probabilité de tirer une boule rouge ?",
        "correction": "P(Rouge) = 4 / 20 = 1 / 5 = 0,2 (soit 20%)."
      },
      {
        "num": "Question 8",
        "text": "Quelle est la probabilité de tirer une boule bleue ou verte ?",
        "correction": "P(Bleue ou Verte) = (6 + 10) / 20 = 16 / 20 = 4 / 5 = 0,8 (80%)."
      },
      {
        "num": "Question 9",
        "text": "Calculer la probabilité de l'événement contraire de \"tirer une boule verte\".",
        "correction": "P(Non verte) = 1 - (10/20) = 10 / 20 = 0,5 (50%)."
      },
      {
        "num": "Question 10",
        "text": "Si on effectue un tirage avec remise de 2 boules, quelle est la probabilité d'obtenir 2 boules rouges ?",
        "correction": "P(2 Rouges) = (4/20) × (4/20) = 1/25 = 0,04 (4%)."
      }
    ]
  },
  {
    "id": "f-1",
    "subject": "francais",
    "chapter": "Chapitre 1 : Se raconter, l'Autobiographie",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 51 : Analyse de texte autobiographique et pacte de lecture #1",
    "statement": "Extrait d'une œuvre autobiographique majeure de la littérature française (Pagnol, Rousseau, Perec). Répondre aux 10 questions de compréhension et d'analyse.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Identifier le genre littéraire de ce texte et justifier votre réponse.",
        "correction": "C'est un récit autobiographique car l'auteur, le narrateur et le personnage principal forment une seule et même personne."
      },
      {
        "num": "Question 2",
        "text": "À quel système d'énonciation ce texte appartient-il (ancré ou coupé de la situation d'énonciation) ?",
        "correction": "Texte ancré dans la situation d'énonciation avec l'utilisation de la 1ère personne du singulier et des repères temporels."
      },
      {
        "num": "Question 3",
        "text": "Quel est le temps dominamment utilisé pour les souvenirs d'enfance ?",
        "correction": "L'imparfait de l'indicatif est utilisé pour la description et les actions répétitives passées."
      },
      {
        "num": "Question 4",
        "text": "Quel est le rôle du passé simple dans les moments de rupture du récit ?",
        "correction": "Le passé simple exprime une action ponctuelle, soudaine et délimitée dans le temps."
      },
      {
        "num": "Question 5",
        "text": "Définir le \"pacte autobiographique\" théorisé par Philippe Lejeune.",
        "correction": "C'est l'engagement implicit de l'auteur à dire la vérité sur sa propre vie auprès du lecteur."
      },
      {
        "num": "Question 6",
        "text": "Identifier la figure de style dans : \"Mon enfance fut un long fleuve tranquille\".",
        "correction": "C'est une métaphore (comparaison sans outil de comparaison)."
      },
      {
        "num": "Question 7",
        "text": "Relever un champ lexical dominant lié aux sentiments de l'auteur.",
        "correction": "Champ lexical de la nostalgie et du souvenir (mémoire, autrefois, doux, mélancolie)."
      },
      {
        "num": "Question 8",
        "text": "Quelle est la différence entre le \"je nettoyant\" (narrateur adulte) et le \"je nettoyé\" (enfant) ?",
        "correction": "Le narrateur adulte porte un regard rétrospectif et analytique sur l'enfant naïf qu'il était."
      },
      {
        "num": "Question 9",
        "text": "Donner un synonyme du mot \"rétrospectif\".",
        "correction": "Synonymes : nostalgique, tourné vers le passé, ultérieur."
      },
      {
        "num": "Question 10",
        "text": "Quelle est la visée principale de l'auteur à travers cette rédaction ?",
        "correction": "Conserver la mémoire de son passé, mieux se comprendre et rendre hommage à ses proches."
      }
    ]
  },
  {
    "id": "f-2",
    "subject": "francais",
    "chapter": "Chapitre 1 : Se raconter, l'Autobiographie",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 52 : Analyse de texte autobiographique et pacte de lecture #2",
    "statement": "Extrait d'une œuvre autobiographique majeure de la littérature française (Pagnol, Rousseau, Perec). Répondre aux 10 questions de compréhension et d'analyse.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Identifier le genre littéraire de ce texte et justifier votre réponse.",
        "correction": "C'est un récit autobiographique car l'auteur, le narrateur et le personnage principal forment une seule et même personne."
      },
      {
        "num": "Question 2",
        "text": "À quel système d'énonciation ce texte appartient-il (ancré ou coupé de la situation d'énonciation) ?",
        "correction": "Texte ancré dans la situation d'énonciation avec l'utilisation de la 1ère personne du singulier et des repères temporels."
      },
      {
        "num": "Question 3",
        "text": "Quel est le temps dominamment utilisé pour les souvenirs d'enfance ?",
        "correction": "L'imparfait de l'indicatif est utilisé pour la description et les actions répétitives passées."
      },
      {
        "num": "Question 4",
        "text": "Quel est le rôle du passé simple dans les moments de rupture du récit ?",
        "correction": "Le passé simple exprime une action ponctuelle, soudaine et délimitée dans le temps."
      },
      {
        "num": "Question 5",
        "text": "Définir le \"pacte autobiographique\" théorisé par Philippe Lejeune.",
        "correction": "C'est l'engagement implicit de l'auteur à dire la vérité sur sa propre vie auprès du lecteur."
      },
      {
        "num": "Question 6",
        "text": "Identifier la figure de style dans : \"Mon enfance fut un long fleuve tranquille\".",
        "correction": "C'est une métaphore (comparaison sans outil de comparaison)."
      },
      {
        "num": "Question 7",
        "text": "Relever un champ lexical dominant lié aux sentiments de l'auteur.",
        "correction": "Champ lexical de la nostalgie et du souvenir (mémoire, autrefois, doux, mélancolie)."
      },
      {
        "num": "Question 8",
        "text": "Quelle est la différence entre le \"je nettoyant\" (narrateur adulte) et le \"je nettoyé\" (enfant) ?",
        "correction": "Le narrateur adulte porte un regard rétrospectif et analytique sur l'enfant naïf qu'il était."
      },
      {
        "num": "Question 9",
        "text": "Donner un synonyme du mot \"rétrospectif\".",
        "correction": "Synonymes : nostalgique, tourné vers le passé, ultérieur."
      },
      {
        "num": "Question 10",
        "text": "Quelle est la visée principale de l'auteur à travers cette rédaction ?",
        "correction": "Conserver la mémoire de son passé, mieux se comprendre et rendre hommage à ses proches."
      }
    ]
  },
  {
    "id": "f-3",
    "subject": "francais",
    "chapter": "Chapitre 1 : Se raconter, l'Autobiographie",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 53 : Analyse de texte autobiographique et pacte de lecture #3",
    "statement": "Extrait d'une œuvre autobiographique majeure de la littérature française (Pagnol, Rousseau, Perec). Répondre aux 10 questions de compréhension et d'analyse.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Identifier le genre littéraire de ce texte et justifier votre réponse.",
        "correction": "C'est un récit autobiographique car l'auteur, le narrateur et le personnage principal forment une seule et même personne."
      },
      {
        "num": "Question 2",
        "text": "À quel système d'énonciation ce texte appartient-il (ancré ou coupé de la situation d'énonciation) ?",
        "correction": "Texte ancré dans la situation d'énonciation avec l'utilisation de la 1ère personne du singulier et des repères temporels."
      },
      {
        "num": "Question 3",
        "text": "Quel est le temps dominamment utilisé pour les souvenirs d'enfance ?",
        "correction": "L'imparfait de l'indicatif est utilisé pour la description et les actions répétitives passées."
      },
      {
        "num": "Question 4",
        "text": "Quel est le rôle du passé simple dans les moments de rupture du récit ?",
        "correction": "Le passé simple exprime une action ponctuelle, soudaine et délimitée dans le temps."
      },
      {
        "num": "Question 5",
        "text": "Définir le \"pacte autobiographique\" théorisé par Philippe Lejeune.",
        "correction": "C'est l'engagement implicit de l'auteur à dire la vérité sur sa propre vie auprès du lecteur."
      },
      {
        "num": "Question 6",
        "text": "Identifier la figure de style dans : \"Mon enfance fut un long fleuve tranquille\".",
        "correction": "C'est une métaphore (comparaison sans outil de comparaison)."
      },
      {
        "num": "Question 7",
        "text": "Relever un champ lexical dominant lié aux sentiments de l'auteur.",
        "correction": "Champ lexical de la nostalgie et du souvenir (mémoire, autrefois, doux, mélancolie)."
      },
      {
        "num": "Question 8",
        "text": "Quelle est la différence entre le \"je nettoyant\" (narrateur adulte) et le \"je nettoyé\" (enfant) ?",
        "correction": "Le narrateur adulte porte un regard rétrospectif et analytique sur l'enfant naïf qu'il était."
      },
      {
        "num": "Question 9",
        "text": "Donner un synonyme du mot \"rétrospectif\".",
        "correction": "Synonymes : nostalgique, tourné vers le passé, ultérieur."
      },
      {
        "num": "Question 10",
        "text": "Quelle est la visée principale de l'auteur à travers cette rédaction ?",
        "correction": "Conserver la mémoire de son passé, mieux se comprendre et rendre hommage à ses proches."
      }
    ]
  },
  {
    "id": "f-4",
    "subject": "francais",
    "chapter": "Chapitre 1 : Se raconter, l'Autobiographie",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 54 : Analyse de texte autobiographique et pacte de lecture #4",
    "statement": "Extrait d'une œuvre autobiographique majeure de la littérature française (Pagnol, Rousseau, Perec). Répondre aux 10 questions de compréhension et d'analyse.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Identifier le genre littéraire de ce texte et justifier votre réponse.",
        "correction": "C'est un récit autobiographique car l'auteur, le narrateur et le personnage principal forment une seule et même personne."
      },
      {
        "num": "Question 2",
        "text": "À quel système d'énonciation ce texte appartient-il (ancré ou coupé de la situation d'énonciation) ?",
        "correction": "Texte ancré dans la situation d'énonciation avec l'utilisation de la 1ère personne du singulier et des repères temporels."
      },
      {
        "num": "Question 3",
        "text": "Quel est le temps dominamment utilisé pour les souvenirs d'enfance ?",
        "correction": "L'imparfait de l'indicatif est utilisé pour la description et les actions répétitives passées."
      },
      {
        "num": "Question 4",
        "text": "Quel est le rôle du passé simple dans les moments de rupture du récit ?",
        "correction": "Le passé simple exprime une action ponctuelle, soudaine et délimitée dans le temps."
      },
      {
        "num": "Question 5",
        "text": "Définir le \"pacte autobiographique\" théorisé par Philippe Lejeune.",
        "correction": "C'est l'engagement implicit de l'auteur à dire la vérité sur sa propre vie auprès du lecteur."
      },
      {
        "num": "Question 6",
        "text": "Identifier la figure de style dans : \"Mon enfance fut un long fleuve tranquille\".",
        "correction": "C'est une métaphore (comparaison sans outil de comparaison)."
      },
      {
        "num": "Question 7",
        "text": "Relever un champ lexical dominant lié aux sentiments de l'auteur.",
        "correction": "Champ lexical de la nostalgie et du souvenir (mémoire, autrefois, doux, mélancolie)."
      },
      {
        "num": "Question 8",
        "text": "Quelle est la différence entre le \"je nettoyant\" (narrateur adulte) et le \"je nettoyé\" (enfant) ?",
        "correction": "Le narrateur adulte porte un regard rétrospectif et analytique sur l'enfant naïf qu'il était."
      },
      {
        "num": "Question 9",
        "text": "Donner un synonyme du mot \"rétrospectif\".",
        "correction": "Synonymes : nostalgique, tourné vers le passé, ultérieur."
      },
      {
        "num": "Question 10",
        "text": "Quelle est la visée principale de l'auteur à travers cette rédaction ?",
        "correction": "Conserver la mémoire de son passé, mieux se comprendre et rendre hommage à ses proches."
      }
    ]
  },
  {
    "id": "f-5",
    "subject": "francais",
    "chapter": "Chapitre 1 : Se raconter, l'Autobiographie",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 55 : Analyse de texte autobiographique et pacte de lecture #5",
    "statement": "Extrait d'une œuvre autobiographique majeure de la littérature française (Pagnol, Rousseau, Perec). Répondre aux 10 questions de compréhension et d'analyse.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Identifier le genre littéraire de ce texte et justifier votre réponse.",
        "correction": "C'est un récit autobiographique car l'auteur, le narrateur et le personnage principal forment une seule et même personne."
      },
      {
        "num": "Question 2",
        "text": "À quel système d'énonciation ce texte appartient-il (ancré ou coupé de la situation d'énonciation) ?",
        "correction": "Texte ancré dans la situation d'énonciation avec l'utilisation de la 1ère personne du singulier et des repères temporels."
      },
      {
        "num": "Question 3",
        "text": "Quel est le temps dominamment utilisé pour les souvenirs d'enfance ?",
        "correction": "L'imparfait de l'indicatif est utilisé pour la description et les actions répétitives passées."
      },
      {
        "num": "Question 4",
        "text": "Quel est le rôle du passé simple dans les moments de rupture du récit ?",
        "correction": "Le passé simple exprime une action ponctuelle, soudaine et délimitée dans le temps."
      },
      {
        "num": "Question 5",
        "text": "Définir le \"pacte autobiographique\" théorisé par Philippe Lejeune.",
        "correction": "C'est l'engagement implicit de l'auteur à dire la vérité sur sa propre vie auprès du lecteur."
      },
      {
        "num": "Question 6",
        "text": "Identifier la figure de style dans : \"Mon enfance fut un long fleuve tranquille\".",
        "correction": "C'est une métaphore (comparaison sans outil de comparaison)."
      },
      {
        "num": "Question 7",
        "text": "Relever un champ lexical dominant lié aux sentiments de l'auteur.",
        "correction": "Champ lexical de la nostalgie et du souvenir (mémoire, autrefois, doux, mélancolie)."
      },
      {
        "num": "Question 8",
        "text": "Quelle est la différence entre le \"je nettoyant\" (narrateur adulte) et le \"je nettoyé\" (enfant) ?",
        "correction": "Le narrateur adulte porte un regard rétrospectif et analytique sur l'enfant naïf qu'il était."
      },
      {
        "num": "Question 9",
        "text": "Donner un synonyme du mot \"rétrospectif\".",
        "correction": "Synonymes : nostalgique, tourné vers le passé, ultérieur."
      },
      {
        "num": "Question 10",
        "text": "Quelle est la visée principale de l'auteur à travers cette rédaction ?",
        "correction": "Conserver la mémoire de son passé, mieux se comprendre et rendre hommage à ses proches."
      }
    ]
  },
  {
    "id": "f-6",
    "subject": "francais",
    "chapter": "Chapitre 1 : Se raconter, l'Autobiographie",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 56 : Analyse de texte autobiographique et pacte de lecture #6",
    "statement": "Extrait d'une œuvre autobiographique majeure de la littérature française (Pagnol, Rousseau, Perec). Répondre aux 10 questions de compréhension et d'analyse.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Identifier le genre littéraire de ce texte et justifier votre réponse.",
        "correction": "C'est un récit autobiographique car l'auteur, le narrateur et le personnage principal forment une seule et même personne."
      },
      {
        "num": "Question 2",
        "text": "À quel système d'énonciation ce texte appartient-il (ancré ou coupé de la situation d'énonciation) ?",
        "correction": "Texte ancré dans la situation d'énonciation avec l'utilisation de la 1ère personne du singulier et des repères temporels."
      },
      {
        "num": "Question 3",
        "text": "Quel est le temps dominamment utilisé pour les souvenirs d'enfance ?",
        "correction": "L'imparfait de l'indicatif est utilisé pour la description et les actions répétitives passées."
      },
      {
        "num": "Question 4",
        "text": "Quel est le rôle du passé simple dans les moments de rupture du récit ?",
        "correction": "Le passé simple exprime une action ponctuelle, soudaine et délimitée dans le temps."
      },
      {
        "num": "Question 5",
        "text": "Définir le \"pacte autobiographique\" théorisé par Philippe Lejeune.",
        "correction": "C'est l'engagement implicit de l'auteur à dire la vérité sur sa propre vie auprès du lecteur."
      },
      {
        "num": "Question 6",
        "text": "Identifier la figure de style dans : \"Mon enfance fut un long fleuve tranquille\".",
        "correction": "C'est une métaphore (comparaison sans outil de comparaison)."
      },
      {
        "num": "Question 7",
        "text": "Relever un champ lexical dominant lié aux sentiments de l'auteur.",
        "correction": "Champ lexical de la nostalgie et du souvenir (mémoire, autrefois, doux, mélancolie)."
      },
      {
        "num": "Question 8",
        "text": "Quelle est la différence entre le \"je nettoyant\" (narrateur adulte) et le \"je nettoyé\" (enfant) ?",
        "correction": "Le narrateur adulte porte un regard rétrospectif et analytique sur l'enfant naïf qu'il était."
      },
      {
        "num": "Question 9",
        "text": "Donner un synonyme du mot \"rétrospectif\".",
        "correction": "Synonymes : nostalgique, tourné vers le passé, ultérieur."
      },
      {
        "num": "Question 10",
        "text": "Quelle est la visée principale de l'auteur à travers cette rédaction ?",
        "correction": "Conserver la mémoire de son passé, mieux se comprendre et rendre hommage à ses proches."
      }
    ]
  },
  {
    "id": "f-7",
    "subject": "francais",
    "chapter": "Chapitre 1 : Se raconter, l'Autobiographie",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 57 : Analyse de texte autobiographique et pacte de lecture #7",
    "statement": "Extrait d'une œuvre autobiographique majeure de la littérature française (Pagnol, Rousseau, Perec). Répondre aux 10 questions de compréhension et d'analyse.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Identifier le genre littéraire de ce texte et justifier votre réponse.",
        "correction": "C'est un récit autobiographique car l'auteur, le narrateur et le personnage principal forment une seule et même personne."
      },
      {
        "num": "Question 2",
        "text": "À quel système d'énonciation ce texte appartient-il (ancré ou coupé de la situation d'énonciation) ?",
        "correction": "Texte ancré dans la situation d'énonciation avec l'utilisation de la 1ère personne du singulier et des repères temporels."
      },
      {
        "num": "Question 3",
        "text": "Quel est le temps dominamment utilisé pour les souvenirs d'enfance ?",
        "correction": "L'imparfait de l'indicatif est utilisé pour la description et les actions répétitives passées."
      },
      {
        "num": "Question 4",
        "text": "Quel est le rôle du passé simple dans les moments de rupture du récit ?",
        "correction": "Le passé simple exprime une action ponctuelle, soudaine et délimitée dans le temps."
      },
      {
        "num": "Question 5",
        "text": "Définir le \"pacte autobiographique\" théorisé par Philippe Lejeune.",
        "correction": "C'est l'engagement implicit de l'auteur à dire la vérité sur sa propre vie auprès du lecteur."
      },
      {
        "num": "Question 6",
        "text": "Identifier la figure de style dans : \"Mon enfance fut un long fleuve tranquille\".",
        "correction": "C'est une métaphore (comparaison sans outil de comparaison)."
      },
      {
        "num": "Question 7",
        "text": "Relever un champ lexical dominant lié aux sentiments de l'auteur.",
        "correction": "Champ lexical de la nostalgie et du souvenir (mémoire, autrefois, doux, mélancolie)."
      },
      {
        "num": "Question 8",
        "text": "Quelle est la différence entre le \"je nettoyant\" (narrateur adulte) et le \"je nettoyé\" (enfant) ?",
        "correction": "Le narrateur adulte porte un regard rétrospectif et analytique sur l'enfant naïf qu'il était."
      },
      {
        "num": "Question 9",
        "text": "Donner un synonyme du mot \"rétrospectif\".",
        "correction": "Synonymes : nostalgique, tourné vers le passé, ultérieur."
      },
      {
        "num": "Question 10",
        "text": "Quelle est la visée principale de l'auteur à travers cette rédaction ?",
        "correction": "Conserver la mémoire de son passé, mieux se comprendre et rendre hommage à ses proches."
      }
    ]
  },
  {
    "id": "f-8",
    "subject": "francais",
    "chapter": "Chapitre 1 : Se raconter, l'Autobiographie",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 58 : Analyse de texte autobiographique et pacte de lecture #8",
    "statement": "Extrait d'une œuvre autobiographique majeure de la littérature française (Pagnol, Rousseau, Perec). Répondre aux 10 questions de compréhension et d'analyse.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Identifier le genre littéraire de ce texte et justifier votre réponse.",
        "correction": "C'est un récit autobiographique car l'auteur, le narrateur et le personnage principal forment une seule et même personne."
      },
      {
        "num": "Question 2",
        "text": "À quel système d'énonciation ce texte appartient-il (ancré ou coupé de la situation d'énonciation) ?",
        "correction": "Texte ancré dans la situation d'énonciation avec l'utilisation de la 1ère personne du singulier et des repères temporels."
      },
      {
        "num": "Question 3",
        "text": "Quel est le temps dominamment utilisé pour les souvenirs d'enfance ?",
        "correction": "L'imparfait de l'indicatif est utilisé pour la description et les actions répétitives passées."
      },
      {
        "num": "Question 4",
        "text": "Quel est le rôle du passé simple dans les moments de rupture du récit ?",
        "correction": "Le passé simple exprime une action ponctuelle, soudaine et délimitée dans le temps."
      },
      {
        "num": "Question 5",
        "text": "Définir le \"pacte autobiographique\" théorisé par Philippe Lejeune.",
        "correction": "C'est l'engagement implicit de l'auteur à dire la vérité sur sa propre vie auprès du lecteur."
      },
      {
        "num": "Question 6",
        "text": "Identifier la figure de style dans : \"Mon enfance fut un long fleuve tranquille\".",
        "correction": "C'est une métaphore (comparaison sans outil de comparaison)."
      },
      {
        "num": "Question 7",
        "text": "Relever un champ lexical dominant lié aux sentiments de l'auteur.",
        "correction": "Champ lexical de la nostalgie et du souvenir (mémoire, autrefois, doux, mélancolie)."
      },
      {
        "num": "Question 8",
        "text": "Quelle est la différence entre le \"je nettoyant\" (narrateur adulte) et le \"je nettoyé\" (enfant) ?",
        "correction": "Le narrateur adulte porte un regard rétrospectif et analytique sur l'enfant naïf qu'il était."
      },
      {
        "num": "Question 9",
        "text": "Donner un synonyme du mot \"rétrospectif\".",
        "correction": "Synonymes : nostalgique, tourné vers le passé, ultérieur."
      },
      {
        "num": "Question 10",
        "text": "Quelle est la visée principale de l'auteur à travers cette rédaction ?",
        "correction": "Conserver la mémoire de son passé, mieux se comprendre et rendre hommage à ses proches."
      }
    ]
  },
  {
    "id": "f-9",
    "subject": "francais",
    "chapter": "Chapitre 1 : Se raconter, l'Autobiographie",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 59 : Analyse de texte autobiographique et pacte de lecture #9",
    "statement": "Extrait d'une œuvre autobiographique majeure de la littérature française (Pagnol, Rousseau, Perec). Répondre aux 10 questions de compréhension et d'analyse.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Identifier le genre littéraire de ce texte et justifier votre réponse.",
        "correction": "C'est un récit autobiographique car l'auteur, le narrateur et le personnage principal forment une seule et même personne."
      },
      {
        "num": "Question 2",
        "text": "À quel système d'énonciation ce texte appartient-il (ancré ou coupé de la situation d'énonciation) ?",
        "correction": "Texte ancré dans la situation d'énonciation avec l'utilisation de la 1ère personne du singulier et des repères temporels."
      },
      {
        "num": "Question 3",
        "text": "Quel est le temps dominamment utilisé pour les souvenirs d'enfance ?",
        "correction": "L'imparfait de l'indicatif est utilisé pour la description et les actions répétitives passées."
      },
      {
        "num": "Question 4",
        "text": "Quel est le rôle du passé simple dans les moments de rupture du récit ?",
        "correction": "Le passé simple exprime une action ponctuelle, soudaine et délimitée dans le temps."
      },
      {
        "num": "Question 5",
        "text": "Définir le \"pacte autobiographique\" théorisé par Philippe Lejeune.",
        "correction": "C'est l'engagement implicit de l'auteur à dire la vérité sur sa propre vie auprès du lecteur."
      },
      {
        "num": "Question 6",
        "text": "Identifier la figure de style dans : \"Mon enfance fut un long fleuve tranquille\".",
        "correction": "C'est une métaphore (comparaison sans outil de comparaison)."
      },
      {
        "num": "Question 7",
        "text": "Relever un champ lexical dominant lié aux sentiments de l'auteur.",
        "correction": "Champ lexical de la nostalgie et du souvenir (mémoire, autrefois, doux, mélancolie)."
      },
      {
        "num": "Question 8",
        "text": "Quelle est la différence entre le \"je nettoyant\" (narrateur adulte) et le \"je nettoyé\" (enfant) ?",
        "correction": "Le narrateur adulte porte un regard rétrospectif et analytique sur l'enfant naïf qu'il était."
      },
      {
        "num": "Question 9",
        "text": "Donner un synonyme du mot \"rétrospectif\".",
        "correction": "Synonymes : nostalgique, tourné vers le passé, ultérieur."
      },
      {
        "num": "Question 10",
        "text": "Quelle est la visée principale de l'auteur à travers cette rédaction ?",
        "correction": "Conserver la mémoire de son passé, mieux se comprendre et rendre hommage à ses proches."
      }
    ]
  },
  {
    "id": "f-10",
    "subject": "francais",
    "chapter": "Chapitre 2 : Grammaire & Réécriture",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 60 : Analyse grammaticale, fonctions et accords complexes #1",
    "statement": "Étude de la phrase complexe, identification des propositions et maîtrise des règles d'accord grammaticales du Brevet.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Donner la nature et la fonction du mot souligné dans la phrase : \"La fille dont je vous parle est brillante.\"",
        "correction": "\"dont\" est un pronom relatif, complément de l'adjectif \"brillante\" ou de la verbale \"parle\"."
      },
      {
        "num": "Question 2",
        "text": "Justifier l'accord du participe passé : \"Les lettres que nous avons écrites.\"",
        "correction": "Le COD \"que\" (mis pour \"les lettres\", féminin pluriel) est placé avant l'auxiliaire avoir, donc accord au F.P."
      },
      {
        "num": "Question 3",
        "text": "Justifier la terminaison du participe passé : \"Elles sont arrivées à l'heure.\"",
        "correction": "Avec l'auxiliaire être, le participe passé s'accorde en genre et en nombre avec le sujet \"Elles\" (F.P.)."
      },
      {
        "num": "Question 4",
        "text": "Analyser la proposition : \"Bien qu'il fasse froid, nous sortons.\"",
        "correction": "Proposition subordonnée conjonctive circonstancielle de concession, introduite par \"bien que\" + subjonctif."
      },
      {
        "num": "Question 5",
        "text": "Transformer la phrase suivante au discours indirect : Il a dit : \"Je viendrai demain.\"",
        "correction": "Il a dit qu'il viendrait le lendemain."
      },
      {
        "num": "Question 6",
        "text": "Quelle est la fonction de l'adjectif \"magnifique\" dans : \"Le ciel paraît magnifique\" ?",
        "correction": "\"magnifique\" est attribut du sujet \"Le ciel\" (verbe d'état paraître)."
      },
      {
        "num": "Question 7",
        "text": "Relever un complément circonstanciel de cause dans une phrase proposée.",
        "correction": "Exemple : \"À cause de la pluie\", \"Parce qu'il pleuvait\"."
      },
      {
        "num": "Question 8",
        "text": "Distinguer la nature de \"que\" dans : \"Je pense qu'il viendra\" et \"La pomme que je mange\".",
        "correction": "Dans la 1ère phrase : conjonction de subordination. Dans la 2ème : pronom relatif."
      },
      {
        "num": "Question 9",
        "text": "Donner la valeur du présent de l'indicatif dans : \"La Terre tourne autour du Soleil.\"",
        "correction": "Présent de vérité générale."
      },
      {
        "num": "Question 10",
        "text": "Relever la forme passive de : \"Le chat mange la souris.\"",
        "correction": "La souris est mangée par le chat."
      }
    ]
  },
  {
    "id": "f-11",
    "subject": "francais",
    "chapter": "Chapitre 2 : Grammaire & Réécriture",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 61 : Analyse grammaticale, fonctions et accords complexes #2",
    "statement": "Étude de la phrase complexe, identification des propositions et maîtrise des règles d'accord grammaticales du Brevet.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Donner la nature et la fonction du mot souligné dans la phrase : \"La fille dont je vous parle est brillante.\"",
        "correction": "\"dont\" est un pronom relatif, complément de l'adjectif \"brillante\" ou de la verbale \"parle\"."
      },
      {
        "num": "Question 2",
        "text": "Justifier l'accord du participe passé : \"Les lettres que nous avons écrites.\"",
        "correction": "Le COD \"que\" (mis pour \"les lettres\", féminin pluriel) est placé avant l'auxiliaire avoir, donc accord au F.P."
      },
      {
        "num": "Question 3",
        "text": "Justifier la terminaison du participe passé : \"Elles sont arrivées à l'heure.\"",
        "correction": "Avec l'auxiliaire être, le participe passé s'accorde en genre et en nombre avec le sujet \"Elles\" (F.P.)."
      },
      {
        "num": "Question 4",
        "text": "Analyser la proposition : \"Bien qu'il fasse froid, nous sortons.\"",
        "correction": "Proposition subordonnée conjonctive circonstancielle de concession, introduite par \"bien que\" + subjonctif."
      },
      {
        "num": "Question 5",
        "text": "Transformer la phrase suivante au discours indirect : Il a dit : \"Je viendrai demain.\"",
        "correction": "Il a dit qu'il viendrait le lendemain."
      },
      {
        "num": "Question 6",
        "text": "Quelle est la fonction de l'adjectif \"magnifique\" dans : \"Le ciel paraît magnifique\" ?",
        "correction": "\"magnifique\" est attribut du sujet \"Le ciel\" (verbe d'état paraître)."
      },
      {
        "num": "Question 7",
        "text": "Relever un complément circonstanciel de cause dans une phrase proposée.",
        "correction": "Exemple : \"À cause de la pluie\", \"Parce qu'il pleuvait\"."
      },
      {
        "num": "Question 8",
        "text": "Distinguer la nature de \"que\" dans : \"Je pense qu'il viendra\" et \"La pomme que je mange\".",
        "correction": "Dans la 1ère phrase : conjonction de subordination. Dans la 2ème : pronom relatif."
      },
      {
        "num": "Question 9",
        "text": "Donner la valeur du présent de l'indicatif dans : \"La Terre tourne autour du Soleil.\"",
        "correction": "Présent de vérité générale."
      },
      {
        "num": "Question 10",
        "text": "Relever la forme passive de : \"Le chat mange la souris.\"",
        "correction": "La souris est mangée par le chat."
      }
    ]
  },
  {
    "id": "f-12",
    "subject": "francais",
    "chapter": "Chapitre 2 : Grammaire & Réécriture",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 62 : Analyse grammaticale, fonctions et accords complexes #3",
    "statement": "Étude de la phrase complexe, identification des propositions et maîtrise des règles d'accord grammaticales du Brevet.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Donner la nature et la fonction du mot souligné dans la phrase : \"La fille dont je vous parle est brillante.\"",
        "correction": "\"dont\" est un pronom relatif, complément de l'adjectif \"brillante\" ou de la verbale \"parle\"."
      },
      {
        "num": "Question 2",
        "text": "Justifier l'accord du participe passé : \"Les lettres que nous avons écrites.\"",
        "correction": "Le COD \"que\" (mis pour \"les lettres\", féminin pluriel) est placé avant l'auxiliaire avoir, donc accord au F.P."
      },
      {
        "num": "Question 3",
        "text": "Justifier la terminaison du participe passé : \"Elles sont arrivées à l'heure.\"",
        "correction": "Avec l'auxiliaire être, le participe passé s'accorde en genre et en nombre avec le sujet \"Elles\" (F.P.)."
      },
      {
        "num": "Question 4",
        "text": "Analyser la proposition : \"Bien qu'il fasse froid, nous sortons.\"",
        "correction": "Proposition subordonnée conjonctive circonstancielle de concession, introduite par \"bien que\" + subjonctif."
      },
      {
        "num": "Question 5",
        "text": "Transformer la phrase suivante au discours indirect : Il a dit : \"Je viendrai demain.\"",
        "correction": "Il a dit qu'il viendrait le lendemain."
      },
      {
        "num": "Question 6",
        "text": "Quelle est la fonction de l'adjectif \"magnifique\" dans : \"Le ciel paraît magnifique\" ?",
        "correction": "\"magnifique\" est attribut du sujet \"Le ciel\" (verbe d'état paraître)."
      },
      {
        "num": "Question 7",
        "text": "Relever un complément circonstanciel de cause dans une phrase proposée.",
        "correction": "Exemple : \"À cause de la pluie\", \"Parce qu'il pleuvait\"."
      },
      {
        "num": "Question 8",
        "text": "Distinguer la nature de \"que\" dans : \"Je pense qu'il viendra\" et \"La pomme que je mange\".",
        "correction": "Dans la 1ère phrase : conjonction de subordination. Dans la 2ème : pronom relatif."
      },
      {
        "num": "Question 9",
        "text": "Donner la valeur du présent de l'indicatif dans : \"La Terre tourne autour du Soleil.\"",
        "correction": "Présent de vérité générale."
      },
      {
        "num": "Question 10",
        "text": "Relever la forme passive de : \"Le chat mange la souris.\"",
        "correction": "La souris est mangée par le chat."
      }
    ]
  },
  {
    "id": "f-13",
    "subject": "francais",
    "chapter": "Chapitre 2 : Grammaire & Réécriture",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 63 : Analyse grammaticale, fonctions et accords complexes #4",
    "statement": "Étude de la phrase complexe, identification des propositions et maîtrise des règles d'accord grammaticales du Brevet.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Donner la nature et la fonction du mot souligné dans la phrase : \"La fille dont je vous parle est brillante.\"",
        "correction": "\"dont\" est un pronom relatif, complément de l'adjectif \"brillante\" ou de la verbale \"parle\"."
      },
      {
        "num": "Question 2",
        "text": "Justifier l'accord du participe passé : \"Les lettres que nous avons écrites.\"",
        "correction": "Le COD \"que\" (mis pour \"les lettres\", féminin pluriel) est placé avant l'auxiliaire avoir, donc accord au F.P."
      },
      {
        "num": "Question 3",
        "text": "Justifier la terminaison du participe passé : \"Elles sont arrivées à l'heure.\"",
        "correction": "Avec l'auxiliaire être, le participe passé s'accorde en genre et en nombre avec le sujet \"Elles\" (F.P.)."
      },
      {
        "num": "Question 4",
        "text": "Analyser la proposition : \"Bien qu'il fasse froid, nous sortons.\"",
        "correction": "Proposition subordonnée conjonctive circonstancielle de concession, introduite par \"bien que\" + subjonctif."
      },
      {
        "num": "Question 5",
        "text": "Transformer la phrase suivante au discours indirect : Il a dit : \"Je viendrai demain.\"",
        "correction": "Il a dit qu'il viendrait le lendemain."
      },
      {
        "num": "Question 6",
        "text": "Quelle est la fonction de l'adjectif \"magnifique\" dans : \"Le ciel paraît magnifique\" ?",
        "correction": "\"magnifique\" est attribut du sujet \"Le ciel\" (verbe d'état paraître)."
      },
      {
        "num": "Question 7",
        "text": "Relever un complément circonstanciel de cause dans une phrase proposée.",
        "correction": "Exemple : \"À cause de la pluie\", \"Parce qu'il pleuvait\"."
      },
      {
        "num": "Question 8",
        "text": "Distinguer la nature de \"que\" dans : \"Je pense qu'il viendra\" et \"La pomme que je mange\".",
        "correction": "Dans la 1ère phrase : conjonction de subordination. Dans la 2ème : pronom relatif."
      },
      {
        "num": "Question 9",
        "text": "Donner la valeur du présent de l'indicatif dans : \"La Terre tourne autour du Soleil.\"",
        "correction": "Présent de vérité générale."
      },
      {
        "num": "Question 10",
        "text": "Relever la forme passive de : \"Le chat mange la souris.\"",
        "correction": "La souris est mangée par le chat."
      }
    ]
  },
  {
    "id": "f-14",
    "subject": "francais",
    "chapter": "Chapitre 2 : Grammaire & Réécriture",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 64 : Analyse grammaticale, fonctions et accords complexes #5",
    "statement": "Étude de la phrase complexe, identification des propositions et maîtrise des règles d'accord grammaticales du Brevet.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Donner la nature et la fonction du mot souligné dans la phrase : \"La fille dont je vous parle est brillante.\"",
        "correction": "\"dont\" est un pronom relatif, complément de l'adjectif \"brillante\" ou de la verbale \"parle\"."
      },
      {
        "num": "Question 2",
        "text": "Justifier l'accord du participe passé : \"Les lettres que nous avons écrites.\"",
        "correction": "Le COD \"que\" (mis pour \"les lettres\", féminin pluriel) est placé avant l'auxiliaire avoir, donc accord au F.P."
      },
      {
        "num": "Question 3",
        "text": "Justifier la terminaison du participe passé : \"Elles sont arrivées à l'heure.\"",
        "correction": "Avec l'auxiliaire être, le participe passé s'accorde en genre et en nombre avec le sujet \"Elles\" (F.P.)."
      },
      {
        "num": "Question 4",
        "text": "Analyser la proposition : \"Bien qu'il fasse froid, nous sortons.\"",
        "correction": "Proposition subordonnée conjonctive circonstancielle de concession, introduite par \"bien que\" + subjonctif."
      },
      {
        "num": "Question 5",
        "text": "Transformer la phrase suivante au discours indirect : Il a dit : \"Je viendrai demain.\"",
        "correction": "Il a dit qu'il viendrait le lendemain."
      },
      {
        "num": "Question 6",
        "text": "Quelle est la fonction de l'adjectif \"magnifique\" dans : \"Le ciel paraît magnifique\" ?",
        "correction": "\"magnifique\" est attribut du sujet \"Le ciel\" (verbe d'état paraître)."
      },
      {
        "num": "Question 7",
        "text": "Relever un complément circonstanciel de cause dans une phrase proposée.",
        "correction": "Exemple : \"À cause de la pluie\", \"Parce qu'il pleuvait\"."
      },
      {
        "num": "Question 8",
        "text": "Distinguer la nature de \"que\" dans : \"Je pense qu'il viendra\" et \"La pomme que je mange\".",
        "correction": "Dans la 1ère phrase : conjonction de subordination. Dans la 2ème : pronom relatif."
      },
      {
        "num": "Question 9",
        "text": "Donner la valeur du présent de l'indicatif dans : \"La Terre tourne autour du Soleil.\"",
        "correction": "Présent de vérité générale."
      },
      {
        "num": "Question 10",
        "text": "Relever la forme passive de : \"Le chat mange la souris.\"",
        "correction": "La souris est mangée par le chat."
      }
    ]
  },
  {
    "id": "f-15",
    "subject": "francais",
    "chapter": "Chapitre 2 : Grammaire & Réécriture",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 65 : Analyse grammaticale, fonctions et accords complexes #6",
    "statement": "Étude de la phrase complexe, identification des propositions et maîtrise des règles d'accord grammaticales du Brevet.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Donner la nature et la fonction du mot souligné dans la phrase : \"La fille dont je vous parle est brillante.\"",
        "correction": "\"dont\" est un pronom relatif, complément de l'adjectif \"brillante\" ou de la verbale \"parle\"."
      },
      {
        "num": "Question 2",
        "text": "Justifier l'accord du participe passé : \"Les lettres que nous avons écrites.\"",
        "correction": "Le COD \"que\" (mis pour \"les lettres\", féminin pluriel) est placé avant l'auxiliaire avoir, donc accord au F.P."
      },
      {
        "num": "Question 3",
        "text": "Justifier la terminaison du participe passé : \"Elles sont arrivées à l'heure.\"",
        "correction": "Avec l'auxiliaire être, le participe passé s'accorde en genre et en nombre avec le sujet \"Elles\" (F.P.)."
      },
      {
        "num": "Question 4",
        "text": "Analyser la proposition : \"Bien qu'il fasse froid, nous sortons.\"",
        "correction": "Proposition subordonnée conjonctive circonstancielle de concession, introduite par \"bien que\" + subjonctif."
      },
      {
        "num": "Question 5",
        "text": "Transformer la phrase suivante au discours indirect : Il a dit : \"Je viendrai demain.\"",
        "correction": "Il a dit qu'il viendrait le lendemain."
      },
      {
        "num": "Question 6",
        "text": "Quelle est la fonction de l'adjectif \"magnifique\" dans : \"Le ciel paraît magnifique\" ?",
        "correction": "\"magnifique\" est attribut du sujet \"Le ciel\" (verbe d'état paraître)."
      },
      {
        "num": "Question 7",
        "text": "Relever un complément circonstanciel de cause dans une phrase proposée.",
        "correction": "Exemple : \"À cause de la pluie\", \"Parce qu'il pleuvait\"."
      },
      {
        "num": "Question 8",
        "text": "Distinguer la nature de \"que\" dans : \"Je pense qu'il viendra\" et \"La pomme que je mange\".",
        "correction": "Dans la 1ère phrase : conjonction de subordination. Dans la 2ème : pronom relatif."
      },
      {
        "num": "Question 9",
        "text": "Donner la valeur du présent de l'indicatif dans : \"La Terre tourne autour du Soleil.\"",
        "correction": "Présent de vérité générale."
      },
      {
        "num": "Question 10",
        "text": "Relever la forme passive de : \"Le chat mange la souris.\"",
        "correction": "La souris est mangée par le chat."
      }
    ]
  },
  {
    "id": "f-16",
    "subject": "francais",
    "chapter": "Chapitre 2 : Grammaire & Réécriture",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 66 : Analyse grammaticale, fonctions et accords complexes #7",
    "statement": "Étude de la phrase complexe, identification des propositions et maîtrise des règles d'accord grammaticales du Brevet.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Donner la nature et la fonction du mot souligné dans la phrase : \"La fille dont je vous parle est brillante.\"",
        "correction": "\"dont\" est un pronom relatif, complément de l'adjectif \"brillante\" ou de la verbale \"parle\"."
      },
      {
        "num": "Question 2",
        "text": "Justifier l'accord du participe passé : \"Les lettres que nous avons écrites.\"",
        "correction": "Le COD \"que\" (mis pour \"les lettres\", féminin pluriel) est placé avant l'auxiliaire avoir, donc accord au F.P."
      },
      {
        "num": "Question 3",
        "text": "Justifier la terminaison du participe passé : \"Elles sont arrivées à l'heure.\"",
        "correction": "Avec l'auxiliaire être, le participe passé s'accorde en genre et en nombre avec le sujet \"Elles\" (F.P.)."
      },
      {
        "num": "Question 4",
        "text": "Analyser la proposition : \"Bien qu'il fasse froid, nous sortons.\"",
        "correction": "Proposition subordonnée conjonctive circonstancielle de concession, introduite par \"bien que\" + subjonctif."
      },
      {
        "num": "Question 5",
        "text": "Transformer la phrase suivante au discours indirect : Il a dit : \"Je viendrai demain.\"",
        "correction": "Il a dit qu'il viendrait le lendemain."
      },
      {
        "num": "Question 6",
        "text": "Quelle est la fonction de l'adjectif \"magnifique\" dans : \"Le ciel paraît magnifique\" ?",
        "correction": "\"magnifique\" est attribut du sujet \"Le ciel\" (verbe d'état paraître)."
      },
      {
        "num": "Question 7",
        "text": "Relever un complément circonstanciel de cause dans une phrase proposée.",
        "correction": "Exemple : \"À cause de la pluie\", \"Parce qu'il pleuvait\"."
      },
      {
        "num": "Question 8",
        "text": "Distinguer la nature de \"que\" dans : \"Je pense qu'il viendra\" et \"La pomme que je mange\".",
        "correction": "Dans la 1ère phrase : conjonction de subordination. Dans la 2ème : pronom relatif."
      },
      {
        "num": "Question 9",
        "text": "Donner la valeur du présent de l'indicatif dans : \"La Terre tourne autour du Soleil.\"",
        "correction": "Présent de vérité générale."
      },
      {
        "num": "Question 10",
        "text": "Relever la forme passive de : \"Le chat mange la souris.\"",
        "correction": "La souris est mangée par le chat."
      }
    ]
  },
  {
    "id": "f-17",
    "subject": "francais",
    "chapter": "Chapitre 2 : Grammaire & Réécriture",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 67 : Analyse grammaticale, fonctions et accords complexes #8",
    "statement": "Étude de la phrase complexe, identification des propositions et maîtrise des règles d'accord grammaticales du Brevet.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Donner la nature et la fonction du mot souligné dans la phrase : \"La fille dont je vous parle est brillante.\"",
        "correction": "\"dont\" est un pronom relatif, complément de l'adjectif \"brillante\" ou de la verbale \"parle\"."
      },
      {
        "num": "Question 2",
        "text": "Justifier l'accord du participe passé : \"Les lettres que nous avons écrites.\"",
        "correction": "Le COD \"que\" (mis pour \"les lettres\", féminin pluriel) est placé avant l'auxiliaire avoir, donc accord au F.P."
      },
      {
        "num": "Question 3",
        "text": "Justifier la terminaison du participe passé : \"Elles sont arrivées à l'heure.\"",
        "correction": "Avec l'auxiliaire être, le participe passé s'accorde en genre et en nombre avec le sujet \"Elles\" (F.P.)."
      },
      {
        "num": "Question 4",
        "text": "Analyser la proposition : \"Bien qu'il fasse froid, nous sortons.\"",
        "correction": "Proposition subordonnée conjonctive circonstancielle de concession, introduite par \"bien que\" + subjonctif."
      },
      {
        "num": "Question 5",
        "text": "Transformer la phrase suivante au discours indirect : Il a dit : \"Je viendrai demain.\"",
        "correction": "Il a dit qu'il viendrait le lendemain."
      },
      {
        "num": "Question 6",
        "text": "Quelle est la fonction de l'adjectif \"magnifique\" dans : \"Le ciel paraît magnifique\" ?",
        "correction": "\"magnifique\" est attribut du sujet \"Le ciel\" (verbe d'état paraître)."
      },
      {
        "num": "Question 7",
        "text": "Relever un complément circonstanciel de cause dans une phrase proposée.",
        "correction": "Exemple : \"À cause de la pluie\", \"Parce qu'il pleuvait\"."
      },
      {
        "num": "Question 8",
        "text": "Distinguer la nature de \"que\" dans : \"Je pense qu'il viendra\" et \"La pomme que je mange\".",
        "correction": "Dans la 1ère phrase : conjonction de subordination. Dans la 2ème : pronom relatif."
      },
      {
        "num": "Question 9",
        "text": "Donner la valeur du présent de l'indicatif dans : \"La Terre tourne autour du Soleil.\"",
        "correction": "Présent de vérité générale."
      },
      {
        "num": "Question 10",
        "text": "Relever la forme passive de : \"Le chat mange la souris.\"",
        "correction": "La souris est mangée par le chat."
      }
    ]
  },
  {
    "id": "f-18",
    "subject": "francais",
    "chapter": "Chapitre 2 : Grammaire & Réécriture",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 68 : Analyse grammaticale, fonctions et accords complexes #9",
    "statement": "Étude de la phrase complexe, identification des propositions et maîtrise des règles d'accord grammaticales du Brevet.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Donner la nature et la fonction du mot souligné dans la phrase : \"La fille dont je vous parle est brillante.\"",
        "correction": "\"dont\" est un pronom relatif, complément de l'adjectif \"brillante\" ou de la verbale \"parle\"."
      },
      {
        "num": "Question 2",
        "text": "Justifier l'accord du participe passé : \"Les lettres que nous avons écrites.\"",
        "correction": "Le COD \"que\" (mis pour \"les lettres\", féminin pluriel) est placé avant l'auxiliaire avoir, donc accord au F.P."
      },
      {
        "num": "Question 3",
        "text": "Justifier la terminaison du participe passé : \"Elles sont arrivées à l'heure.\"",
        "correction": "Avec l'auxiliaire être, le participe passé s'accorde en genre et en nombre avec le sujet \"Elles\" (F.P.)."
      },
      {
        "num": "Question 4",
        "text": "Analyser la proposition : \"Bien qu'il fasse froid, nous sortons.\"",
        "correction": "Proposition subordonnée conjonctive circonstancielle de concession, introduite par \"bien que\" + subjonctif."
      },
      {
        "num": "Question 5",
        "text": "Transformer la phrase suivante au discours indirect : Il a dit : \"Je viendrai demain.\"",
        "correction": "Il a dit qu'il viendrait le lendemain."
      },
      {
        "num": "Question 6",
        "text": "Quelle est la fonction de l'adjectif \"magnifique\" dans : \"Le ciel paraît magnifique\" ?",
        "correction": "\"magnifique\" est attribut du sujet \"Le ciel\" (verbe d'état paraître)."
      },
      {
        "num": "Question 7",
        "text": "Relever un complément circonstanciel de cause dans une phrase proposée.",
        "correction": "Exemple : \"À cause de la pluie\", \"Parce qu'il pleuvait\"."
      },
      {
        "num": "Question 8",
        "text": "Distinguer la nature de \"que\" dans : \"Je pense qu'il viendra\" et \"La pomme que je mange\".",
        "correction": "Dans la 1ère phrase : conjonction de subordination. Dans la 2ème : pronom relatif."
      },
      {
        "num": "Question 9",
        "text": "Donner la valeur du présent de l'indicatif dans : \"La Terre tourne autour du Soleil.\"",
        "correction": "Présent de vérité générale."
      },
      {
        "num": "Question 10",
        "text": "Relever la forme passive de : \"Le chat mange la souris.\"",
        "correction": "La souris est mangée par le chat."
      }
    ]
  },
  {
    "id": "f-19",
    "subject": "francais",
    "chapter": "Chapitre 3 : Figures de Style & Vocabulaire",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 69 : Figures de style, poésie et enrichissement du vocabulaire #1",
    "statement": "Identification des procédés littéraires, tropes, antithèses, hyperboles et étude étymologique de mots clés.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Identifier la figure de style : \"Le vent hurlait dans la nuit sombre.\"",
        "correction": "Personnification (attribution d'un comportement humain au vent)."
      },
      {
        "num": "Question 2",
        "text": "Identifier la figure de style : \"Il est mort de rire.\"",
        "correction": "Hyperbole (exagération pour frapper les esprits)."
      },
      {
        "num": "Question 3",
        "text": "Identifier la figure de style : \"Ce n'est pas mauvais\" pour dire que c'est très bon.",
        "correction": "Litote (dire moins pour faire entendre plus)."
      },
      {
        "num": "Question 4",
        "text": "Quelle est la différence entre une métaphore et une comparaison ?",
        "correction": "La comparaison utilise un outil de comparaison (comme, tel que), la métaphore n'en utilise pas."
      },
      {
        "num": "Question 5",
        "text": "Identifier l'oxymore dans : \"Une obscure clarté tombe des étoiles.\" (Corneille)",
        "correction": "Alliance de deux mots opposés (\"obscure\" et \"clarté\") dans le même groupe nominal."
      },
      {
        "num": "Question 6",
        "text": "Donner la définition et l'étymologie du mot \"autobiographie\".",
        "correction": "Du grec auto (soi-même), bio (vie) et graphie (écriture) : écriture de sa propre vie."
      },
      {
        "num": "Question 7",
        "text": "Trouver deux antonymes du mot \"éphémère\".",
        "correction": "Antonymes : éternel, durable, permanent."
      },
      {
        "num": "Question 8",
        "text": "Trouver deux synonymes du mot \"bienveillant\".",
        "correction": "Synonymes : chaleureux, compréhensif, altruit, charitable."
      },
      {
        "num": "Question 9",
        "text": "Qu'est-ce qu'une anaphore en littérature ?",
        "correction": "La répétition d'un même mot ou groupe de mots en début de phrase ou de vers."
      },
      {
        "num": "Question 10",
        "text": "Identifier le niveau de langue de la phrase : \"Je suis grave saoulé par ce travail.\"",
        "correction": "Niveau de langue familier."
      }
    ]
  },
  {
    "id": "f-20",
    "subject": "francais",
    "chapter": "Chapitre 3 : Figures de Style & Vocabulaire",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 70 : Figures de style, poésie et enrichissement du vocabulaire #2",
    "statement": "Identification des procédés littéraires, tropes, antithèses, hyperboles et étude étymologique de mots clés.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Identifier la figure de style : \"Le vent hurlait dans la nuit sombre.\"",
        "correction": "Personnification (attribution d'un comportement humain au vent)."
      },
      {
        "num": "Question 2",
        "text": "Identifier la figure de style : \"Il est mort de rire.\"",
        "correction": "Hyperbole (exagération pour frapper les esprits)."
      },
      {
        "num": "Question 3",
        "text": "Identifier la figure de style : \"Ce n'est pas mauvais\" pour dire que c'est très bon.",
        "correction": "Litote (dire moins pour faire entendre plus)."
      },
      {
        "num": "Question 4",
        "text": "Quelle est la différence entre une métaphore et une comparaison ?",
        "correction": "La comparaison utilise un outil de comparaison (comme, tel que), la métaphore n'en utilise pas."
      },
      {
        "num": "Question 5",
        "text": "Identifier l'oxymore dans : \"Une obscure clarté tombe des étoiles.\" (Corneille)",
        "correction": "Alliance de deux mots opposés (\"obscure\" et \"clarté\") dans le même groupe nominal."
      },
      {
        "num": "Question 6",
        "text": "Donner la définition et l'étymologie du mot \"autobiographie\".",
        "correction": "Du grec auto (soi-même), bio (vie) et graphie (écriture) : écriture de sa propre vie."
      },
      {
        "num": "Question 7",
        "text": "Trouver deux antonymes du mot \"éphémère\".",
        "correction": "Antonymes : éternel, durable, permanent."
      },
      {
        "num": "Question 8",
        "text": "Trouver deux synonymes du mot \"bienveillant\".",
        "correction": "Synonymes : chaleureux, compréhensif, altruit, charitable."
      },
      {
        "num": "Question 9",
        "text": "Qu'est-ce qu'une anaphore en littérature ?",
        "correction": "La répétition d'un même mot ou groupe de mots en début de phrase ou de vers."
      },
      {
        "num": "Question 10",
        "text": "Identifier le niveau de langue de la phrase : \"Je suis grave saoulé par ce travail.\"",
        "correction": "Niveau de langue familier."
      }
    ]
  },
  {
    "id": "f-21",
    "subject": "francais",
    "chapter": "Chapitre 3 : Figures de Style & Vocabulaire",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 71 : Figures de style, poésie et enrichissement du vocabulaire #3",
    "statement": "Identification des procédés littéraires, tropes, antithèses, hyperboles et étude étymologique de mots clés.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Identifier la figure de style : \"Le vent hurlait dans la nuit sombre.\"",
        "correction": "Personnification (attribution d'un comportement humain au vent)."
      },
      {
        "num": "Question 2",
        "text": "Identifier la figure de style : \"Il est mort de rire.\"",
        "correction": "Hyperbole (exagération pour frapper les esprits)."
      },
      {
        "num": "Question 3",
        "text": "Identifier la figure de style : \"Ce n'est pas mauvais\" pour dire que c'est très bon.",
        "correction": "Litote (dire moins pour faire entendre plus)."
      },
      {
        "num": "Question 4",
        "text": "Quelle est la différence entre une métaphore et une comparaison ?",
        "correction": "La comparaison utilise un outil de comparaison (comme, tel que), la métaphore n'en utilise pas."
      },
      {
        "num": "Question 5",
        "text": "Identifier l'oxymore dans : \"Une obscure clarté tombe des étoiles.\" (Corneille)",
        "correction": "Alliance de deux mots opposés (\"obscure\" et \"clarté\") dans le même groupe nominal."
      },
      {
        "num": "Question 6",
        "text": "Donner la définition et l'étymologie du mot \"autobiographie\".",
        "correction": "Du grec auto (soi-même), bio (vie) et graphie (écriture) : écriture de sa propre vie."
      },
      {
        "num": "Question 7",
        "text": "Trouver deux antonymes du mot \"éphémère\".",
        "correction": "Antonymes : éternel, durable, permanent."
      },
      {
        "num": "Question 8",
        "text": "Trouver deux synonymes du mot \"bienveillant\".",
        "correction": "Synonymes : chaleureux, compréhensif, altruit, charitable."
      },
      {
        "num": "Question 9",
        "text": "Qu'est-ce qu'une anaphore en littérature ?",
        "correction": "La répétition d'un même mot ou groupe de mots en début de phrase ou de vers."
      },
      {
        "num": "Question 10",
        "text": "Identifier le niveau de langue de la phrase : \"Je suis grave saoulé par ce travail.\"",
        "correction": "Niveau de langue familier."
      }
    ]
  },
  {
    "id": "f-22",
    "subject": "francais",
    "chapter": "Chapitre 3 : Figures de Style & Vocabulaire",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 72 : Figures de style, poésie et enrichissement du vocabulaire #4",
    "statement": "Identification des procédés littéraires, tropes, antithèses, hyperboles et étude étymologique de mots clés.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Identifier la figure de style : \"Le vent hurlait dans la nuit sombre.\"",
        "correction": "Personnification (attribution d'un comportement humain au vent)."
      },
      {
        "num": "Question 2",
        "text": "Identifier la figure de style : \"Il est mort de rire.\"",
        "correction": "Hyperbole (exagération pour frapper les esprits)."
      },
      {
        "num": "Question 3",
        "text": "Identifier la figure de style : \"Ce n'est pas mauvais\" pour dire que c'est très bon.",
        "correction": "Litote (dire moins pour faire entendre plus)."
      },
      {
        "num": "Question 4",
        "text": "Quelle est la différence entre une métaphore et une comparaison ?",
        "correction": "La comparaison utilise un outil de comparaison (comme, tel que), la métaphore n'en utilise pas."
      },
      {
        "num": "Question 5",
        "text": "Identifier l'oxymore dans : \"Une obscure clarté tombe des étoiles.\" (Corneille)",
        "correction": "Alliance de deux mots opposés (\"obscure\" et \"clarté\") dans le même groupe nominal."
      },
      {
        "num": "Question 6",
        "text": "Donner la définition et l'étymologie du mot \"autobiographie\".",
        "correction": "Du grec auto (soi-même), bio (vie) et graphie (écriture) : écriture de sa propre vie."
      },
      {
        "num": "Question 7",
        "text": "Trouver deux antonymes du mot \"éphémère\".",
        "correction": "Antonymes : éternel, durable, permanent."
      },
      {
        "num": "Question 8",
        "text": "Trouver deux synonymes du mot \"bienveillant\".",
        "correction": "Synonymes : chaleureux, compréhensif, altruit, charitable."
      },
      {
        "num": "Question 9",
        "text": "Qu'est-ce qu'une anaphore en littérature ?",
        "correction": "La répétition d'un même mot ou groupe de mots en début de phrase ou de vers."
      },
      {
        "num": "Question 10",
        "text": "Identifier le niveau de langue de la phrase : \"Je suis grave saoulé par ce travail.\"",
        "correction": "Niveau de langue familier."
      }
    ]
  },
  {
    "id": "f-23",
    "subject": "francais",
    "chapter": "Chapitre 3 : Figures de Style & Vocabulaire",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 73 : Figures de style, poésie et enrichissement du vocabulaire #5",
    "statement": "Identification des procédés littéraires, tropes, antithèses, hyperboles et étude étymologique de mots clés.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Identifier la figure de style : \"Le vent hurlait dans la nuit sombre.\"",
        "correction": "Personnification (attribution d'un comportement humain au vent)."
      },
      {
        "num": "Question 2",
        "text": "Identifier la figure de style : \"Il est mort de rire.\"",
        "correction": "Hyperbole (exagération pour frapper les esprits)."
      },
      {
        "num": "Question 3",
        "text": "Identifier la figure de style : \"Ce n'est pas mauvais\" pour dire que c'est très bon.",
        "correction": "Litote (dire moins pour faire entendre plus)."
      },
      {
        "num": "Question 4",
        "text": "Quelle est la différence entre une métaphore et une comparaison ?",
        "correction": "La comparaison utilise un outil de comparaison (comme, tel que), la métaphore n'en utilise pas."
      },
      {
        "num": "Question 5",
        "text": "Identifier l'oxymore dans : \"Une obscure clarté tombe des étoiles.\" (Corneille)",
        "correction": "Alliance de deux mots opposés (\"obscure\" et \"clarté\") dans le même groupe nominal."
      },
      {
        "num": "Question 6",
        "text": "Donner la définition et l'étymologie du mot \"autobiographie\".",
        "correction": "Du grec auto (soi-même), bio (vie) et graphie (écriture) : écriture de sa propre vie."
      },
      {
        "num": "Question 7",
        "text": "Trouver deux antonymes du mot \"éphémère\".",
        "correction": "Antonymes : éternel, durable, permanent."
      },
      {
        "num": "Question 8",
        "text": "Trouver deux synonymes du mot \"bienveillant\".",
        "correction": "Synonymes : chaleureux, compréhensif, altruit, charitable."
      },
      {
        "num": "Question 9",
        "text": "Qu'est-ce qu'une anaphore en littérature ?",
        "correction": "La répétition d'un même mot ou groupe de mots en début de phrase ou de vers."
      },
      {
        "num": "Question 10",
        "text": "Identifier le niveau de langue de la phrase : \"Je suis grave saoulé par ce travail.\"",
        "correction": "Niveau de langue familier."
      }
    ]
  },
  {
    "id": "f-24",
    "subject": "francais",
    "chapter": "Chapitre 3 : Figures de Style & Vocabulaire",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 74 : Figures de style, poésie et enrichissement du vocabulaire #6",
    "statement": "Identification des procédés littéraires, tropes, antithèses, hyperboles et étude étymologique de mots clés.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Identifier la figure de style : \"Le vent hurlait dans la nuit sombre.\"",
        "correction": "Personnification (attribution d'un comportement humain au vent)."
      },
      {
        "num": "Question 2",
        "text": "Identifier la figure de style : \"Il est mort de rire.\"",
        "correction": "Hyperbole (exagération pour frapper les esprits)."
      },
      {
        "num": "Question 3",
        "text": "Identifier la figure de style : \"Ce n'est pas mauvais\" pour dire que c'est très bon.",
        "correction": "Litote (dire moins pour faire entendre plus)."
      },
      {
        "num": "Question 4",
        "text": "Quelle est la différence entre une métaphore et une comparaison ?",
        "correction": "La comparaison utilise un outil de comparaison (comme, tel que), la métaphore n'en utilise pas."
      },
      {
        "num": "Question 5",
        "text": "Identifier l'oxymore dans : \"Une obscure clarté tombe des étoiles.\" (Corneille)",
        "correction": "Alliance de deux mots opposés (\"obscure\" et \"clarté\") dans le même groupe nominal."
      },
      {
        "num": "Question 6",
        "text": "Donner la définition et l'étymologie du mot \"autobiographie\".",
        "correction": "Du grec auto (soi-même), bio (vie) et graphie (écriture) : écriture de sa propre vie."
      },
      {
        "num": "Question 7",
        "text": "Trouver deux antonymes du mot \"éphémère\".",
        "correction": "Antonymes : éternel, durable, permanent."
      },
      {
        "num": "Question 8",
        "text": "Trouver deux synonymes du mot \"bienveillant\".",
        "correction": "Synonymes : chaleureux, compréhensif, altruit, charitable."
      },
      {
        "num": "Question 9",
        "text": "Qu'est-ce qu'une anaphore en littérature ?",
        "correction": "La répétition d'un même mot ou groupe de mots en début de phrase ou de vers."
      },
      {
        "num": "Question 10",
        "text": "Identifier le niveau de langue de la phrase : \"Je suis grave saoulé par ce travail.\"",
        "correction": "Niveau de langue familier."
      }
    ]
  },
  {
    "id": "f-25",
    "subject": "francais",
    "chapter": "Chapitre 3 : Figures de Style & Vocabulaire",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 75 : Figures de style, poésie et enrichissement du vocabulaire #7",
    "statement": "Identification des procédés littéraires, tropes, antithèses, hyperboles et étude étymologique de mots clés.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Identifier la figure de style : \"Le vent hurlait dans la nuit sombre.\"",
        "correction": "Personnification (attribution d'un comportement humain au vent)."
      },
      {
        "num": "Question 2",
        "text": "Identifier la figure de style : \"Il est mort de rire.\"",
        "correction": "Hyperbole (exagération pour frapper les esprits)."
      },
      {
        "num": "Question 3",
        "text": "Identifier la figure de style : \"Ce n'est pas mauvais\" pour dire que c'est très bon.",
        "correction": "Litote (dire moins pour faire entendre plus)."
      },
      {
        "num": "Question 4",
        "text": "Quelle est la différence entre une métaphore et une comparaison ?",
        "correction": "La comparaison utilise un outil de comparaison (comme, tel que), la métaphore n'en utilise pas."
      },
      {
        "num": "Question 5",
        "text": "Identifier l'oxymore dans : \"Une obscure clarté tombe des étoiles.\" (Corneille)",
        "correction": "Alliance de deux mots opposés (\"obscure\" et \"clarté\") dans le même groupe nominal."
      },
      {
        "num": "Question 6",
        "text": "Donner la définition et l'étymologie du mot \"autobiographie\".",
        "correction": "Du grec auto (soi-même), bio (vie) et graphie (écriture) : écriture de sa propre vie."
      },
      {
        "num": "Question 7",
        "text": "Trouver deux antonymes du mot \"éphémère\".",
        "correction": "Antonymes : éternel, durable, permanent."
      },
      {
        "num": "Question 8",
        "text": "Trouver deux synonymes du mot \"bienveillant\".",
        "correction": "Synonymes : chaleureux, compréhensif, altruit, charitable."
      },
      {
        "num": "Question 9",
        "text": "Qu'est-ce qu'une anaphore en littérature ?",
        "correction": "La répétition d'un même mot ou groupe de mots en début de phrase ou de vers."
      },
      {
        "num": "Question 10",
        "text": "Identifier le niveau de langue de la phrase : \"Je suis grave saoulé par ce travail.\"",
        "correction": "Niveau de langue familier."
      }
    ]
  },
  {
    "id": "f-26",
    "subject": "francais",
    "chapter": "Chapitre 3 : Figures de Style & Vocabulaire",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 76 : Figures de style, poésie et enrichissement du vocabulaire #8",
    "statement": "Identification des procédés littéraires, tropes, antithèses, hyperboles et étude étymologique de mots clés.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Identifier la figure de style : \"Le vent hurlait dans la nuit sombre.\"",
        "correction": "Personnification (attribution d'un comportement humain au vent)."
      },
      {
        "num": "Question 2",
        "text": "Identifier la figure de style : \"Il est mort de rire.\"",
        "correction": "Hyperbole (exagération pour frapper les esprits)."
      },
      {
        "num": "Question 3",
        "text": "Identifier la figure de style : \"Ce n'est pas mauvais\" pour dire que c'est très bon.",
        "correction": "Litote (dire moins pour faire entendre plus)."
      },
      {
        "num": "Question 4",
        "text": "Quelle est la différence entre une métaphore et une comparaison ?",
        "correction": "La comparaison utilise un outil de comparaison (comme, tel que), la métaphore n'en utilise pas."
      },
      {
        "num": "Question 5",
        "text": "Identifier l'oxymore dans : \"Une obscure clarté tombe des étoiles.\" (Corneille)",
        "correction": "Alliance de deux mots opposés (\"obscure\" et \"clarté\") dans le même groupe nominal."
      },
      {
        "num": "Question 6",
        "text": "Donner la définition et l'étymologie du mot \"autobiographie\".",
        "correction": "Du grec auto (soi-même), bio (vie) et graphie (écriture) : écriture de sa propre vie."
      },
      {
        "num": "Question 7",
        "text": "Trouver deux antonymes du mot \"éphémère\".",
        "correction": "Antonymes : éternel, durable, permanent."
      },
      {
        "num": "Question 8",
        "text": "Trouver deux synonymes du mot \"bienveillant\".",
        "correction": "Synonymes : chaleureux, compréhensif, altruit, charitable."
      },
      {
        "num": "Question 9",
        "text": "Qu'est-ce qu'une anaphore en littérature ?",
        "correction": "La répétition d'un même mot ou groupe de mots en début de phrase ou de vers."
      },
      {
        "num": "Question 10",
        "text": "Identifier le niveau de langue de la phrase : \"Je suis grave saoulé par ce travail.\"",
        "correction": "Niveau de langue familier."
      }
    ]
  },
  {
    "id": "f-27",
    "subject": "francais",
    "chapter": "Chapitre 3 : Figures de Style & Vocabulaire",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 77 : Figures de style, poésie et enrichissement du vocabulaire #9",
    "statement": "Identification des procédés littéraires, tropes, antithèses, hyperboles et étude étymologique de mots clés.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Identifier la figure de style : \"Le vent hurlait dans la nuit sombre.\"",
        "correction": "Personnification (attribution d'un comportement humain au vent)."
      },
      {
        "num": "Question 2",
        "text": "Identifier la figure de style : \"Il est mort de rire.\"",
        "correction": "Hyperbole (exagération pour frapper les esprits)."
      },
      {
        "num": "Question 3",
        "text": "Identifier la figure de style : \"Ce n'est pas mauvais\" pour dire que c'est très bon.",
        "correction": "Litote (dire moins pour faire entendre plus)."
      },
      {
        "num": "Question 4",
        "text": "Quelle est la différence entre une métaphore et une comparaison ?",
        "correction": "La comparaison utilise un outil de comparaison (comme, tel que), la métaphore n'en utilise pas."
      },
      {
        "num": "Question 5",
        "text": "Identifier l'oxymore dans : \"Une obscure clarté tombe des étoiles.\" (Corneille)",
        "correction": "Alliance de deux mots opposés (\"obscure\" et \"clarté\") dans le même groupe nominal."
      },
      {
        "num": "Question 6",
        "text": "Donner la définition et l'étymologie du mot \"autobiographie\".",
        "correction": "Du grec auto (soi-même), bio (vie) et graphie (écriture) : écriture de sa propre vie."
      },
      {
        "num": "Question 7",
        "text": "Trouver deux antonymes du mot \"éphémère\".",
        "correction": "Antonymes : éternel, durable, permanent."
      },
      {
        "num": "Question 8",
        "text": "Trouver deux synonymes du mot \"bienveillant\".",
        "correction": "Synonymes : chaleureux, compréhensif, altruit, charitable."
      },
      {
        "num": "Question 9",
        "text": "Qu'est-ce qu'une anaphore en littérature ?",
        "correction": "La répétition d'un même mot ou groupe de mots en début de phrase ou de vers."
      },
      {
        "num": "Question 10",
        "text": "Identifier le niveau de langue de la phrase : \"Je suis grave saoulé par ce travail.\"",
        "correction": "Niveau de langue familier."
      }
    ]
  },
  {
    "id": "f-28",
    "subject": "francais",
    "chapter": "Chapitre 4 : Réécritures Brevet",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 78 : Sujet d'entraînement à l'épreuve de réécriture du DNB #1",
    "statement": "Modifications de temps, de modes, de genres et de nombres à partir de textes officiels du Brevet des collèges.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Réécrire la phrase au pluriel : \"Le jeune garçon observait attentivement l'oiseau bleu.\"",
        "correction": "\"Les jeunes garçons observaient attentivement les oiseaux bleus.\""
      },
      {
        "num": "Question 2",
        "text": "Réécrire la phrase en remplaçant \"il\" par \"elles\" : \"Il s'est levé rapidement et est parti.\"",
        "correction": "\"Elles se sont levées rapidement et sont parties.\""
      },
      {
        "num": "Question 3",
        "text": "Réécrire le texte au présent de l'indicatif : \"Il marcha longtemps et trouva une cabane.\"",
        "correction": "\"Il marche longtemps et trouve une cabane.\""
      },
      {
        "num": "Question 4",
        "text": "Réécrire le texte à l'imparfait : \"Nous prenons le train et nous arrivons à Paris.\"",
        "correction": "\"Nous prenions le train et nous arrivions à Paris.\""
      },
      {
        "num": "Question 5",
        "text": "Réécrire au futur simple : \"Je fais mes devoirs puis je sors avec mes amis.\"",
        "correction": "\"Je ferai mes devoirs puis je sortirai avec mes amis.\""
      },
      {
        "num": "Question 6",
        "text": "Transposer la phrase au féminin : \"Cet homme courageux est devenu un héros célèbre.\"",
        "correction": "\"Cette femme courageuse est devenue une héroïne célèbre.\""
      },
      {
        "num": "Question 7",
        "text": "Transposer la phrase au discours indirect : Elle murmura : \"Restez calmes.\"",
        "correction": "Elle murmura de rester calmes (ou qu'ils devaient rester calmes)."
      },
      {
        "num": "Question 8",
        "text": "Accorder correctement le verbe dans : \"La foule de supporters (applaudir) les joueurs.\"",
        "correction": "La foule applaudit (ou applaudissait)."
      },
      {
        "num": "Question 9",
        "text": "Corriger la faute dans : \"Les personnes que j'ai rencontré hier soir.\"",
        "correction": "Correction : \"rencontrées\" (accord avec le COD placé avant \"que\" mis pour les personnes)."
      },
      {
        "num": "Question 10",
        "text": "Relever et corriger l'erreur de ponctuation dans la citation directe.",
        "correction": "Mettre les guillemets et les deux points au bon endroit."
      }
    ]
  },
  {
    "id": "f-29",
    "subject": "francais",
    "chapter": "Chapitre 4 : Réécritures Brevet",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 79 : Sujet d'entraînement à l'épreuve de réécriture du DNB #2",
    "statement": "Modifications de temps, de modes, de genres et de nombres à partir de textes officiels du Brevet des collèges.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Réécrire la phrase au pluriel : \"Le jeune garçon observait attentivement l'oiseau bleu.\"",
        "correction": "\"Les jeunes garçons observaient attentivement les oiseaux bleus.\""
      },
      {
        "num": "Question 2",
        "text": "Réécrire la phrase en remplaçant \"il\" par \"elles\" : \"Il s'est levé rapidement et est parti.\"",
        "correction": "\"Elles se sont levées rapidement et sont parties.\""
      },
      {
        "num": "Question 3",
        "text": "Réécrire le texte au présent de l'indicatif : \"Il marcha longtemps et trouva une cabane.\"",
        "correction": "\"Il marche longtemps et trouve une cabane.\""
      },
      {
        "num": "Question 4",
        "text": "Réécrire le texte à l'imparfait : \"Nous prenons le train et nous arrivons à Paris.\"",
        "correction": "\"Nous prenions le train et nous arrivions à Paris.\""
      },
      {
        "num": "Question 5",
        "text": "Réécrire au futur simple : \"Je fais mes devoirs puis je sors avec mes amis.\"",
        "correction": "\"Je ferai mes devoirs puis je sortirai avec mes amis.\""
      },
      {
        "num": "Question 6",
        "text": "Transposer la phrase au féminin : \"Cet homme courageux est devenu un héros célèbre.\"",
        "correction": "\"Cette femme courageuse est devenue une héroïne célèbre.\""
      },
      {
        "num": "Question 7",
        "text": "Transposer la phrase au discours indirect : Elle murmura : \"Restez calmes.\"",
        "correction": "Elle murmura de rester calmes (ou qu'ils devaient rester calmes)."
      },
      {
        "num": "Question 8",
        "text": "Accorder correctement le verbe dans : \"La foule de supporters (applaudir) les joueurs.\"",
        "correction": "La foule applaudit (ou applaudissait)."
      },
      {
        "num": "Question 9",
        "text": "Corriger la faute dans : \"Les personnes que j'ai rencontré hier soir.\"",
        "correction": "Correction : \"rencontrées\" (accord avec le COD placé avant \"que\" mis pour les personnes)."
      },
      {
        "num": "Question 10",
        "text": "Relever et corriger l'erreur de ponctuation dans la citation directe.",
        "correction": "Mettre les guillemets et les deux points au bon endroit."
      }
    ]
  },
  {
    "id": "f-30",
    "subject": "francais",
    "chapter": "Chapitre 4 : Réécritures Brevet",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 80 : Sujet d'entraînement à l'épreuve de réécriture du DNB #3",
    "statement": "Modifications de temps, de modes, de genres et de nombres à partir de textes officiels du Brevet des collèges.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Réécrire la phrase au pluriel : \"Le jeune garçon observait attentivement l'oiseau bleu.\"",
        "correction": "\"Les jeunes garçons observaient attentivement les oiseaux bleus.\""
      },
      {
        "num": "Question 2",
        "text": "Réécrire la phrase en remplaçant \"il\" par \"elles\" : \"Il s'est levé rapidement et est parti.\"",
        "correction": "\"Elles se sont levées rapidement et sont parties.\""
      },
      {
        "num": "Question 3",
        "text": "Réécrire le texte au présent de l'indicatif : \"Il marcha longtemps et trouva une cabane.\"",
        "correction": "\"Il marche longtemps et trouve une cabane.\""
      },
      {
        "num": "Question 4",
        "text": "Réécrire le texte à l'imparfait : \"Nous prenons le train et nous arrivons à Paris.\"",
        "correction": "\"Nous prenions le train et nous arrivions à Paris.\""
      },
      {
        "num": "Question 5",
        "text": "Réécrire au futur simple : \"Je fais mes devoirs puis je sors avec mes amis.\"",
        "correction": "\"Je ferai mes devoirs puis je sortirai avec mes amis.\""
      },
      {
        "num": "Question 6",
        "text": "Transposer la phrase au féminin : \"Cet homme courageux est devenu un héros célèbre.\"",
        "correction": "\"Cette femme courageuse est devenue une héroïne célèbre.\""
      },
      {
        "num": "Question 7",
        "text": "Transposer la phrase au discours indirect : Elle murmura : \"Restez calmes.\"",
        "correction": "Elle murmura de rester calmes (ou qu'ils devaient rester calmes)."
      },
      {
        "num": "Question 8",
        "text": "Accorder correctement le verbe dans : \"La foule de supporters (applaudir) les joueurs.\"",
        "correction": "La foule applaudit (ou applaudissait)."
      },
      {
        "num": "Question 9",
        "text": "Corriger la faute dans : \"Les personnes que j'ai rencontré hier soir.\"",
        "correction": "Correction : \"rencontrées\" (accord avec le COD placé avant \"que\" mis pour les personnes)."
      },
      {
        "num": "Question 10",
        "text": "Relever et corriger l'erreur de ponctuation dans la citation directe.",
        "correction": "Mettre les guillemets et les deux points au bon endroit."
      }
    ]
  },
  {
    "id": "f-31",
    "subject": "francais",
    "chapter": "Chapitre 4 : Réécritures Brevet",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 81 : Sujet d'entraînement à l'épreuve de réécriture du DNB #4",
    "statement": "Modifications de temps, de modes, de genres et de nombres à partir de textes officiels du Brevet des collèges.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Réécrire la phrase au pluriel : \"Le jeune garçon observait attentivement l'oiseau bleu.\"",
        "correction": "\"Les jeunes garçons observaient attentivement les oiseaux bleus.\""
      },
      {
        "num": "Question 2",
        "text": "Réécrire la phrase en remplaçant \"il\" par \"elles\" : \"Il s'est levé rapidement et est parti.\"",
        "correction": "\"Elles se sont levées rapidement et sont parties.\""
      },
      {
        "num": "Question 3",
        "text": "Réécrire le texte au présent de l'indicatif : \"Il marcha longtemps et trouva une cabane.\"",
        "correction": "\"Il marche longtemps et trouve une cabane.\""
      },
      {
        "num": "Question 4",
        "text": "Réécrire le texte à l'imparfait : \"Nous prenons le train et nous arrivons à Paris.\"",
        "correction": "\"Nous prenions le train et nous arrivions à Paris.\""
      },
      {
        "num": "Question 5",
        "text": "Réécrire au futur simple : \"Je fais mes devoirs puis je sors avec mes amis.\"",
        "correction": "\"Je ferai mes devoirs puis je sortirai avec mes amis.\""
      },
      {
        "num": "Question 6",
        "text": "Transposer la phrase au féminin : \"Cet homme courageux est devenu un héros célèbre.\"",
        "correction": "\"Cette femme courageuse est devenue une héroïne célèbre.\""
      },
      {
        "num": "Question 7",
        "text": "Transposer la phrase au discours indirect : Elle murmura : \"Restez calmes.\"",
        "correction": "Elle murmura de rester calmes (ou qu'ils devaient rester calmes)."
      },
      {
        "num": "Question 8",
        "text": "Accorder correctement le verbe dans : \"La foule de supporters (applaudir) les joueurs.\"",
        "correction": "La foule applaudit (ou applaudissait)."
      },
      {
        "num": "Question 9",
        "text": "Corriger la faute dans : \"Les personnes que j'ai rencontré hier soir.\"",
        "correction": "Correction : \"rencontrées\" (accord avec le COD placé avant \"que\" mis pour les personnes)."
      },
      {
        "num": "Question 10",
        "text": "Relever et corriger l'erreur de ponctuation dans la citation directe.",
        "correction": "Mettre les guillemets et les deux points au bon endroit."
      }
    ]
  },
  {
    "id": "f-32",
    "subject": "francais",
    "chapter": "Chapitre 4 : Réécritures Brevet",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 82 : Sujet d'entraînement à l'épreuve de réécriture du DNB #5",
    "statement": "Modifications de temps, de modes, de genres et de nombres à partir de textes officiels du Brevet des collèges.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Réécrire la phrase au pluriel : \"Le jeune garçon observait attentivement l'oiseau bleu.\"",
        "correction": "\"Les jeunes garçons observaient attentivement les oiseaux bleus.\""
      },
      {
        "num": "Question 2",
        "text": "Réécrire la phrase en remplaçant \"il\" par \"elles\" : \"Il s'est levé rapidement et est parti.\"",
        "correction": "\"Elles se sont levées rapidement et sont parties.\""
      },
      {
        "num": "Question 3",
        "text": "Réécrire le texte au présent de l'indicatif : \"Il marcha longtemps et trouva une cabane.\"",
        "correction": "\"Il marche longtemps et trouve une cabane.\""
      },
      {
        "num": "Question 4",
        "text": "Réécrire le texte à l'imparfait : \"Nous prenons le train et nous arrivons à Paris.\"",
        "correction": "\"Nous prenions le train et nous arrivions à Paris.\""
      },
      {
        "num": "Question 5",
        "text": "Réécrire au futur simple : \"Je fais mes devoirs puis je sors avec mes amis.\"",
        "correction": "\"Je ferai mes devoirs puis je sortirai avec mes amis.\""
      },
      {
        "num": "Question 6",
        "text": "Transposer la phrase au féminin : \"Cet homme courageux est devenu un héros célèbre.\"",
        "correction": "\"Cette femme courageuse est devenue une héroïne célèbre.\""
      },
      {
        "num": "Question 7",
        "text": "Transposer la phrase au discours indirect : Elle murmura : \"Restez calmes.\"",
        "correction": "Elle murmura de rester calmes (ou qu'ils devaient rester calmes)."
      },
      {
        "num": "Question 8",
        "text": "Accorder correctement le verbe dans : \"La foule de supporters (applaudir) les joueurs.\"",
        "correction": "La foule applaudit (ou applaudissait)."
      },
      {
        "num": "Question 9",
        "text": "Corriger la faute dans : \"Les personnes que j'ai rencontré hier soir.\"",
        "correction": "Correction : \"rencontrées\" (accord avec le COD placé avant \"que\" mis pour les personnes)."
      },
      {
        "num": "Question 10",
        "text": "Relever et corriger l'erreur de ponctuation dans la citation directe.",
        "correction": "Mettre les guillemets et les deux points au bon endroit."
      }
    ]
  },
  {
    "id": "f-33",
    "subject": "francais",
    "chapter": "Chapitre 4 : Réécritures Brevet",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 83 : Sujet d'entraînement à l'épreuve de réécriture du DNB #6",
    "statement": "Modifications de temps, de modes, de genres et de nombres à partir de textes officiels du Brevet des collèges.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Réécrire la phrase au pluriel : \"Le jeune garçon observait attentivement l'oiseau bleu.\"",
        "correction": "\"Les jeunes garçons observaient attentivement les oiseaux bleus.\""
      },
      {
        "num": "Question 2",
        "text": "Réécrire la phrase en remplaçant \"il\" par \"elles\" : \"Il s'est levé rapidement et est parti.\"",
        "correction": "\"Elles se sont levées rapidement et sont parties.\""
      },
      {
        "num": "Question 3",
        "text": "Réécrire le texte au présent de l'indicatif : \"Il marcha longtemps et trouva une cabane.\"",
        "correction": "\"Il marche longtemps et trouve une cabane.\""
      },
      {
        "num": "Question 4",
        "text": "Réécrire le texte à l'imparfait : \"Nous prenons le train et nous arrivons à Paris.\"",
        "correction": "\"Nous prenions le train et nous arrivions à Paris.\""
      },
      {
        "num": "Question 5",
        "text": "Réécrire au futur simple : \"Je fais mes devoirs puis je sors avec mes amis.\"",
        "correction": "\"Je ferai mes devoirs puis je sortirai avec mes amis.\""
      },
      {
        "num": "Question 6",
        "text": "Transposer la phrase au féminin : \"Cet homme courageux est devenu un héros célèbre.\"",
        "correction": "\"Cette femme courageuse est devenue une héroïne célèbre.\""
      },
      {
        "num": "Question 7",
        "text": "Transposer la phrase au discours indirect : Elle murmura : \"Restez calmes.\"",
        "correction": "Elle murmura de rester calmes (ou qu'ils devaient rester calmes)."
      },
      {
        "num": "Question 8",
        "text": "Accorder correctement le verbe dans : \"La foule de supporters (applaudir) les joueurs.\"",
        "correction": "La foule applaudit (ou applaudissait)."
      },
      {
        "num": "Question 9",
        "text": "Corriger la faute dans : \"Les personnes que j'ai rencontré hier soir.\"",
        "correction": "Correction : \"rencontrées\" (accord avec le COD placé avant \"que\" mis pour les personnes)."
      },
      {
        "num": "Question 10",
        "text": "Relever et corriger l'erreur de ponctuation dans la citation directe.",
        "correction": "Mettre les guillemets et les deux points au bon endroit."
      }
    ]
  },
  {
    "id": "f-34",
    "subject": "francais",
    "chapter": "Chapitre 4 : Réécritures Brevet",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 84 : Sujet d'entraînement à l'épreuve de réécriture du DNB #7",
    "statement": "Modifications de temps, de modes, de genres et de nombres à partir de textes officiels du Brevet des collèges.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Réécrire la phrase au pluriel : \"Le jeune garçon observait attentivement l'oiseau bleu.\"",
        "correction": "\"Les jeunes garçons observaient attentivement les oiseaux bleus.\""
      },
      {
        "num": "Question 2",
        "text": "Réécrire la phrase en remplaçant \"il\" par \"elles\" : \"Il s'est levé rapidement et est parti.\"",
        "correction": "\"Elles se sont levées rapidement et sont parties.\""
      },
      {
        "num": "Question 3",
        "text": "Réécrire le texte au présent de l'indicatif : \"Il marcha longtemps et trouva une cabane.\"",
        "correction": "\"Il marche longtemps et trouve une cabane.\""
      },
      {
        "num": "Question 4",
        "text": "Réécrire le texte à l'imparfait : \"Nous prenons le train et nous arrivons à Paris.\"",
        "correction": "\"Nous prenions le train et nous arrivions à Paris.\""
      },
      {
        "num": "Question 5",
        "text": "Réécrire au futur simple : \"Je fais mes devoirs puis je sors avec mes amis.\"",
        "correction": "\"Je ferai mes devoirs puis je sortirai avec mes amis.\""
      },
      {
        "num": "Question 6",
        "text": "Transposer la phrase au féminin : \"Cet homme courageux est devenu un héros célèbre.\"",
        "correction": "\"Cette femme courageuse est devenue une héroïne célèbre.\""
      },
      {
        "num": "Question 7",
        "text": "Transposer la phrase au discours indirect : Elle murmura : \"Restez calmes.\"",
        "correction": "Elle murmura de rester calmes (ou qu'ils devaient rester calmes)."
      },
      {
        "num": "Question 8",
        "text": "Accorder correctement le verbe dans : \"La foule de supporters (applaudir) les joueurs.\"",
        "correction": "La foule applaudit (ou applaudissait)."
      },
      {
        "num": "Question 9",
        "text": "Corriger la faute dans : \"Les personnes que j'ai rencontré hier soir.\"",
        "correction": "Correction : \"rencontrées\" (accord avec le COD placé avant \"que\" mis pour les personnes)."
      },
      {
        "num": "Question 10",
        "text": "Relever et corriger l'erreur de ponctuation dans la citation directe.",
        "correction": "Mettre les guillemets et les deux points au bon endroit."
      }
    ]
  },
  {
    "id": "f-35",
    "subject": "francais",
    "chapter": "Chapitre 4 : Réécritures Brevet",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 85 : Sujet d'entraînement à l'épreuve de réécriture du DNB #8",
    "statement": "Modifications de temps, de modes, de genres et de nombres à partir de textes officiels du Brevet des collèges.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Réécrire la phrase au pluriel : \"Le jeune garçon observait attentivement l'oiseau bleu.\"",
        "correction": "\"Les jeunes garçons observaient attentivement les oiseaux bleus.\""
      },
      {
        "num": "Question 2",
        "text": "Réécrire la phrase en remplaçant \"il\" par \"elles\" : \"Il s'est levé rapidement et est parti.\"",
        "correction": "\"Elles se sont levées rapidement et sont parties.\""
      },
      {
        "num": "Question 3",
        "text": "Réécrire le texte au présent de l'indicatif : \"Il marcha longtemps et trouva une cabane.\"",
        "correction": "\"Il marche longtemps et trouve une cabane.\""
      },
      {
        "num": "Question 4",
        "text": "Réécrire le texte à l'imparfait : \"Nous prenons le train et nous arrivons à Paris.\"",
        "correction": "\"Nous prenions le train et nous arrivions à Paris.\""
      },
      {
        "num": "Question 5",
        "text": "Réécrire au futur simple : \"Je fais mes devoirs puis je sors avec mes amis.\"",
        "correction": "\"Je ferai mes devoirs puis je sortirai avec mes amis.\""
      },
      {
        "num": "Question 6",
        "text": "Transposer la phrase au féminin : \"Cet homme courageux est devenu un héros célèbre.\"",
        "correction": "\"Cette femme courageuse est devenue une héroïne célèbre.\""
      },
      {
        "num": "Question 7",
        "text": "Transposer la phrase au discours indirect : Elle murmura : \"Restez calmes.\"",
        "correction": "Elle murmura de rester calmes (ou qu'ils devaient rester calmes)."
      },
      {
        "num": "Question 8",
        "text": "Accorder correctement le verbe dans : \"La foule de supporters (applaudir) les joueurs.\"",
        "correction": "La foule applaudit (ou applaudissait)."
      },
      {
        "num": "Question 9",
        "text": "Corriger la faute dans : \"Les personnes que j'ai rencontré hier soir.\"",
        "correction": "Correction : \"rencontrées\" (accord avec le COD placé avant \"que\" mis pour les personnes)."
      },
      {
        "num": "Question 10",
        "text": "Relever et corriger l'erreur de ponctuation dans la citation directe.",
        "correction": "Mettre les guillemets et les deux points au bon endroit."
      }
    ]
  },
  {
    "id": "hg-21",
    "subject": "histoire-geo",
    "chapter": "Chapitre 1 : Guerres Mondiales",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 86 : La Première et la Seconde Guerre Mondiale (Violences de masse #1)",
    "statement": "Analyse historique des conflits mondiaux du XXème siècle (1914-1918 et 1939-1945), tranchées, génocides et bilan humain.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Quelles sont les dates précises de la Première Guerre mondiale ?",
        "correction": "28 juillet 1914 – 11 novembre 1918."
      },
      {
        "num": "Question 2",
        "text": "Raconter brièvement la bataille de Verdun (date, durée, bilan humain).",
        "correction": "De février à décembre 1916 (10 mois), fait plus de 300 000 morts (Français et Allemands)."
      },
      {
        "num": "Question 3",
        "text": "Qu'appelle-t-on la \"guerre de position\" ou \"guerre de tranchées\" ?",
        "correction": "Phase du conflit où les armées s'enterrent dans des tranchées pour défendre leurs positions."
      },
      {
        "num": "Question 4",
        "text": "En quelle année a eu lieu le génocide des Arméniens et quel en est le bilan ?",
        "correction": "En 1915 dans l'Empire ottoman, faisant environ 1,2 à 1,5 million de victimes."
      },
      {
        "num": "Question 5",
        "text": "Quelle révolution éclate en Russie en octobre 1917 et qui en est le chef ?",
        "correction": "La Révolution bolchevique menée par Lénine."
      },
      {
        "num": "Question 6",
        "text": "Quelles sont les dates de la Seconde Guerre mondiale en Europe ?",
        "correction": "1er septembre 1939 – 8 mai 1945."
      },
      {
        "num": "Question 7",
        "text": "Définir le concept de \"guerre d'anéantissement\" appliqué au conflit 1939-1945.",
        "correction": "Guerre visant la destruction totale des capacités militaires, économiques et des populations de l'ennemi."
      },
      {
        "num": "Question 8",
        "text": "Qu'est-ce que la Shoah et quel en a été le bilan humain ?",
        "correction": "Le génocide des Juifs d'Europe par les Nazis, faisant environ 6 millions de morts."
      },
      {
        "num": "Question 9",
        "text": "Raconter le rôle du Général de Gaulle et l'Appel du 18 juin 1940.",
        "correction": "Depuis Londres, De Gaulle appelle les Français à résister contre l'occupation nazie et Vichy."
      },
      {
        "num": "Question 10",
        "text": "Quel événement majeur met fin à la Seconde Guerre mondiale en Asie en août 1945 ?",
        "correction": "Les bombardements atomiques américains sur Hiroshima (6 août) et Nagasaki (9 août 1945)."
      }
    ]
  },
  {
    "id": "hg-22",
    "subject": "histoire-geo",
    "chapter": "Chapitre 1 : Guerres Mondiales",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 87 : La Première et la Seconde Guerre Mondiale (Violences de masse #2)",
    "statement": "Analyse historique des conflits mondiaux du XXème siècle (1914-1918 et 1939-1945), tranchées, génocides et bilan humain.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Quelles sont les dates précises de la Première Guerre mondiale ?",
        "correction": "28 juillet 1914 – 11 novembre 1918."
      },
      {
        "num": "Question 2",
        "text": "Raconter brièvement la bataille de Verdun (date, durée, bilan humain).",
        "correction": "De février à décembre 1916 (10 mois), fait plus de 300 000 morts (Français et Allemands)."
      },
      {
        "num": "Question 3",
        "text": "Qu'appelle-t-on la \"guerre de position\" ou \"guerre de tranchées\" ?",
        "correction": "Phase du conflit où les armées s'enterrent dans des tranchées pour défendre leurs positions."
      },
      {
        "num": "Question 4",
        "text": "En quelle année a eu lieu le génocide des Arméniens et quel en est le bilan ?",
        "correction": "En 1915 dans l'Empire ottoman, faisant environ 1,2 à 1,5 million de victimes."
      },
      {
        "num": "Question 5",
        "text": "Quelle révolution éclate en Russie en octobre 1917 et qui en est le chef ?",
        "correction": "La Révolution bolchevique menée par Lénine."
      },
      {
        "num": "Question 6",
        "text": "Quelles sont les dates de la Seconde Guerre mondiale en Europe ?",
        "correction": "1er septembre 1939 – 8 mai 1945."
      },
      {
        "num": "Question 7",
        "text": "Définir le concept de \"guerre d'anéantissement\" appliqué au conflit 1939-1945.",
        "correction": "Guerre visant la destruction totale des capacités militaires, économiques et des populations de l'ennemi."
      },
      {
        "num": "Question 8",
        "text": "Qu'est-ce que la Shoah et quel en a été le bilan humain ?",
        "correction": "Le génocide des Juifs d'Europe par les Nazis, faisant environ 6 millions de morts."
      },
      {
        "num": "Question 9",
        "text": "Raconter le rôle du Général de Gaulle et l'Appel du 18 juin 1940.",
        "correction": "Depuis Londres, De Gaulle appelle les Français à résister contre l'occupation nazie et Vichy."
      },
      {
        "num": "Question 10",
        "text": "Quel événement majeur met fin à la Seconde Guerre mondiale en Asie en août 1945 ?",
        "correction": "Les bombardements atomiques américains sur Hiroshima (6 août) et Nagasaki (9 août 1945)."
      }
    ]
  },
  {
    "id": "hg-23",
    "subject": "histoire-geo",
    "chapter": "Chapitre 1 : Guerres Mondiales",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 88 : La Première et la Seconde Guerre Mondiale (Violences de masse #3)",
    "statement": "Analyse historique des conflits mondiaux du XXème siècle (1914-1918 et 1939-1945), tranchées, génocides et bilan humain.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Quelles sont les dates précises de la Première Guerre mondiale ?",
        "correction": "28 juillet 1914 – 11 novembre 1918."
      },
      {
        "num": "Question 2",
        "text": "Raconter brièvement la bataille de Verdun (date, durée, bilan humain).",
        "correction": "De février à décembre 1916 (10 mois), fait plus de 300 000 morts (Français et Allemands)."
      },
      {
        "num": "Question 3",
        "text": "Qu'appelle-t-on la \"guerre de position\" ou \"guerre de tranchées\" ?",
        "correction": "Phase du conflit où les armées s'enterrent dans des tranchées pour défendre leurs positions."
      },
      {
        "num": "Question 4",
        "text": "En quelle année a eu lieu le génocide des Arméniens et quel en est le bilan ?",
        "correction": "En 1915 dans l'Empire ottoman, faisant environ 1,2 à 1,5 million de victimes."
      },
      {
        "num": "Question 5",
        "text": "Quelle révolution éclate en Russie en octobre 1917 et qui en est le chef ?",
        "correction": "La Révolution bolchevique menée par Lénine."
      },
      {
        "num": "Question 6",
        "text": "Quelles sont les dates de la Seconde Guerre mondiale en Europe ?",
        "correction": "1er septembre 1939 – 8 mai 1945."
      },
      {
        "num": "Question 7",
        "text": "Définir le concept de \"guerre d'anéantissement\" appliqué au conflit 1939-1945.",
        "correction": "Guerre visant la destruction totale des capacités militaires, économiques et des populations de l'ennemi."
      },
      {
        "num": "Question 8",
        "text": "Qu'est-ce que la Shoah et quel en a été le bilan humain ?",
        "correction": "Le génocide des Juifs d'Europe par les Nazis, faisant environ 6 millions de morts."
      },
      {
        "num": "Question 9",
        "text": "Raconter le rôle du Général de Gaulle et l'Appel du 18 juin 1940.",
        "correction": "Depuis Londres, De Gaulle appelle les Français à résister contre l'occupation nazie et Vichy."
      },
      {
        "num": "Question 10",
        "text": "Quel événement majeur met fin à la Seconde Guerre mondiale en Asie en août 1945 ?",
        "correction": "Les bombardements atomiques américains sur Hiroshima (6 août) et Nagasaki (9 août 1945)."
      }
    ]
  },
  {
    "id": "hg-24",
    "subject": "histoire-geo",
    "chapter": "Chapitre 1 : Guerres Mondiales",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 89 : La Première et la Seconde Guerre Mondiale (Violences de masse #4)",
    "statement": "Analyse historique des conflits mondiaux du XXème siècle (1914-1918 et 1939-1945), tranchées, génocides et bilan humain.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Quelles sont les dates précises de la Première Guerre mondiale ?",
        "correction": "28 juillet 1914 – 11 novembre 1918."
      },
      {
        "num": "Question 2",
        "text": "Raconter brièvement la bataille de Verdun (date, durée, bilan humain).",
        "correction": "De février à décembre 1916 (10 mois), fait plus de 300 000 morts (Français et Allemands)."
      },
      {
        "num": "Question 3",
        "text": "Qu'appelle-t-on la \"guerre de position\" ou \"guerre de tranchées\" ?",
        "correction": "Phase du conflit où les armées s'enterrent dans des tranchées pour défendre leurs positions."
      },
      {
        "num": "Question 4",
        "text": "En quelle année a eu lieu le génocide des Arméniens et quel en est le bilan ?",
        "correction": "En 1915 dans l'Empire ottoman, faisant environ 1,2 à 1,5 million de victimes."
      },
      {
        "num": "Question 5",
        "text": "Quelle révolution éclate en Russie en octobre 1917 et qui en est le chef ?",
        "correction": "La Révolution bolchevique menée par Lénine."
      },
      {
        "num": "Question 6",
        "text": "Quelles sont les dates de la Seconde Guerre mondiale en Europe ?",
        "correction": "1er septembre 1939 – 8 mai 1945."
      },
      {
        "num": "Question 7",
        "text": "Définir le concept de \"guerre d'anéantissement\" appliqué au conflit 1939-1945.",
        "correction": "Guerre visant la destruction totale des capacités militaires, économiques et des populations de l'ennemi."
      },
      {
        "num": "Question 8",
        "text": "Qu'est-ce que la Shoah et quel en a été le bilan humain ?",
        "correction": "Le génocide des Juifs d'Europe par les Nazis, faisant environ 6 millions de morts."
      },
      {
        "num": "Question 9",
        "text": "Raconter le rôle du Général de Gaulle et l'Appel du 18 juin 1940.",
        "correction": "Depuis Londres, De Gaulle appelle les Français à résister contre l'occupation nazie et Vichy."
      },
      {
        "num": "Question 10",
        "text": "Quel événement majeur met fin à la Seconde Guerre mondiale en Asie en août 1945 ?",
        "correction": "Les bombardements atomiques américains sur Hiroshima (6 août) et Nagasaki (9 août 1945)."
      }
    ]
  },
  {
    "id": "hg-25",
    "subject": "histoire-geo",
    "chapter": "Chapitre 1 : Guerres Mondiales",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 90 : La Première et la Seconde Guerre Mondiale (Violences de masse #5)",
    "statement": "Analyse historique des conflits mondiaux du XXème siècle (1914-1918 et 1939-1945), tranchées, génocides et bilan humain.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Quelles sont les dates précises de la Première Guerre mondiale ?",
        "correction": "28 juillet 1914 – 11 novembre 1918."
      },
      {
        "num": "Question 2",
        "text": "Raconter brièvement la bataille de Verdun (date, durée, bilan humain).",
        "correction": "De février à décembre 1916 (10 mois), fait plus de 300 000 morts (Français et Allemands)."
      },
      {
        "num": "Question 3",
        "text": "Qu'appelle-t-on la \"guerre de position\" ou \"guerre de tranchées\" ?",
        "correction": "Phase du conflit où les armées s'enterrent dans des tranchées pour défendre leurs positions."
      },
      {
        "num": "Question 4",
        "text": "En quelle année a eu lieu le génocide des Arméniens et quel en est le bilan ?",
        "correction": "En 1915 dans l'Empire ottoman, faisant environ 1,2 à 1,5 million de victimes."
      },
      {
        "num": "Question 5",
        "text": "Quelle révolution éclate en Russie en octobre 1917 et qui en est le chef ?",
        "correction": "La Révolution bolchevique menée par Lénine."
      },
      {
        "num": "Question 6",
        "text": "Quelles sont les dates de la Seconde Guerre mondiale en Europe ?",
        "correction": "1er septembre 1939 – 8 mai 1945."
      },
      {
        "num": "Question 7",
        "text": "Définir le concept de \"guerre d'anéantissement\" appliqué au conflit 1939-1945.",
        "correction": "Guerre visant la destruction totale des capacités militaires, économiques et des populations de l'ennemi."
      },
      {
        "num": "Question 8",
        "text": "Qu'est-ce que la Shoah et quel en a été le bilan humain ?",
        "correction": "Le génocide des Juifs d'Europe par les Nazis, faisant environ 6 millions de morts."
      },
      {
        "num": "Question 9",
        "text": "Raconter le rôle du Général de Gaulle et l'Appel du 18 juin 1940.",
        "correction": "Depuis Londres, De Gaulle appelle les Français à résister contre l'occupation nazie et Vichy."
      },
      {
        "num": "Question 10",
        "text": "Quel événement majeur met fin à la Seconde Guerre mondiale en Asie en août 1945 ?",
        "correction": "Les bombardements atomiques américains sur Hiroshima (6 août) et Nagasaki (9 août 1945)."
      }
    ]
  },
  {
    "id": "hg-26",
    "subject": "histoire-geo",
    "chapter": "Chapitre 1 : Guerres Mondiales",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 91 : La Première et la Seconde Guerre Mondiale (Violences de masse #6)",
    "statement": "Analyse historique des conflits mondiaux du XXème siècle (1914-1918 et 1939-1945), tranchées, génocides et bilan humain.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Quelles sont les dates précises de la Première Guerre mondiale ?",
        "correction": "28 juillet 1914 – 11 novembre 1918."
      },
      {
        "num": "Question 2",
        "text": "Raconter brièvement la bataille de Verdun (date, durée, bilan humain).",
        "correction": "De février à décembre 1916 (10 mois), fait plus de 300 000 morts (Français et Allemands)."
      },
      {
        "num": "Question 3",
        "text": "Qu'appelle-t-on la \"guerre de position\" ou \"guerre de tranchées\" ?",
        "correction": "Phase du conflit où les armées s'enterrent dans des tranchées pour défendre leurs positions."
      },
      {
        "num": "Question 4",
        "text": "En quelle année a eu lieu le génocide des Arméniens et quel en est le bilan ?",
        "correction": "En 1915 dans l'Empire ottoman, faisant environ 1,2 à 1,5 million de victimes."
      },
      {
        "num": "Question 5",
        "text": "Quelle révolution éclate en Russie en octobre 1917 et qui en est le chef ?",
        "correction": "La Révolution bolchevique menée par Lénine."
      },
      {
        "num": "Question 6",
        "text": "Quelles sont les dates de la Seconde Guerre mondiale en Europe ?",
        "correction": "1er septembre 1939 – 8 mai 1945."
      },
      {
        "num": "Question 7",
        "text": "Définir le concept de \"guerre d'anéantissement\" appliqué au conflit 1939-1945.",
        "correction": "Guerre visant la destruction totale des capacités militaires, économiques et des populations de l'ennemi."
      },
      {
        "num": "Question 8",
        "text": "Qu'est-ce que la Shoah et quel en a été le bilan humain ?",
        "correction": "Le génocide des Juifs d'Europe par les Nazis, faisant environ 6 millions de morts."
      },
      {
        "num": "Question 9",
        "text": "Raconter le rôle du Général de Gaulle et l'Appel du 18 juin 1940.",
        "correction": "Depuis Londres, De Gaulle appelle les Français à résister contre l'occupation nazie et Vichy."
      },
      {
        "num": "Question 10",
        "text": "Quel événement majeur met fin à la Seconde Guerre mondiale en Asie en août 1945 ?",
        "correction": "Les bombardements atomiques américains sur Hiroshima (6 août) et Nagasaki (9 août 1945)."
      }
    ]
  },
  {
    "id": "hg-27",
    "subject": "histoire-geo",
    "chapter": "Chapitre 1 : Guerres Mondiales",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 92 : La Première et la Seconde Guerre Mondiale (Violences de masse #7)",
    "statement": "Analyse historique des conflits mondiaux du XXème siècle (1914-1918 et 1939-1945), tranchées, génocides et bilan humain.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Quelles sont les dates précises de la Première Guerre mondiale ?",
        "correction": "28 juillet 1914 – 11 novembre 1918."
      },
      {
        "num": "Question 2",
        "text": "Raconter brièvement la bataille de Verdun (date, durée, bilan humain).",
        "correction": "De février à décembre 1916 (10 mois), fait plus de 300 000 morts (Français et Allemands)."
      },
      {
        "num": "Question 3",
        "text": "Qu'appelle-t-on la \"guerre de position\" ou \"guerre de tranchées\" ?",
        "correction": "Phase du conflit où les armées s'enterrent dans des tranchées pour défendre leurs positions."
      },
      {
        "num": "Question 4",
        "text": "En quelle année a eu lieu le génocide des Arméniens et quel en est le bilan ?",
        "correction": "En 1915 dans l'Empire ottoman, faisant environ 1,2 à 1,5 million de victimes."
      },
      {
        "num": "Question 5",
        "text": "Quelle révolution éclate en Russie en octobre 1917 et qui en est le chef ?",
        "correction": "La Révolution bolchevique menée par Lénine."
      },
      {
        "num": "Question 6",
        "text": "Quelles sont les dates de la Seconde Guerre mondiale en Europe ?",
        "correction": "1er septembre 1939 – 8 mai 1945."
      },
      {
        "num": "Question 7",
        "text": "Définir le concept de \"guerre d'anéantissement\" appliqué au conflit 1939-1945.",
        "correction": "Guerre visant la destruction totale des capacités militaires, économiques et des populations de l'ennemi."
      },
      {
        "num": "Question 8",
        "text": "Qu'est-ce que la Shoah et quel en a été le bilan humain ?",
        "correction": "Le génocide des Juifs d'Europe par les Nazis, faisant environ 6 millions de morts."
      },
      {
        "num": "Question 9",
        "text": "Raconter le rôle du Général de Gaulle et l'Appel du 18 juin 1940.",
        "correction": "Depuis Londres, De Gaulle appelle les Français à résister contre l'occupation nazie et Vichy."
      },
      {
        "num": "Question 10",
        "text": "Quel événement majeur met fin à la Seconde Guerre mondiale en Asie en août 1945 ?",
        "correction": "Les bombardements atomiques américains sur Hiroshima (6 août) et Nagasaki (9 août 1945)."
      }
    ]
  },
  {
    "id": "hg-28",
    "subject": "histoire-geo",
    "chapter": "Chapitre 1 : Guerres Mondiales",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 93 : La Première et la Seconde Guerre Mondiale (Violences de masse #8)",
    "statement": "Analyse historique des conflits mondiaux du XXème siècle (1914-1918 et 1939-1945), tranchées, génocides et bilan humain.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Quelles sont les dates précises de la Première Guerre mondiale ?",
        "correction": "28 juillet 1914 – 11 novembre 1918."
      },
      {
        "num": "Question 2",
        "text": "Raconter brièvement la bataille de Verdun (date, durée, bilan humain).",
        "correction": "De février à décembre 1916 (10 mois), fait plus de 300 000 morts (Français et Allemands)."
      },
      {
        "num": "Question 3",
        "text": "Qu'appelle-t-on la \"guerre de position\" ou \"guerre de tranchées\" ?",
        "correction": "Phase du conflit où les armées s'enterrent dans des tranchées pour défendre leurs positions."
      },
      {
        "num": "Question 4",
        "text": "En quelle année a eu lieu le génocide des Arméniens et quel en est le bilan ?",
        "correction": "En 1915 dans l'Empire ottoman, faisant environ 1,2 à 1,5 million de victimes."
      },
      {
        "num": "Question 5",
        "text": "Quelle révolution éclate en Russie en octobre 1917 et qui en est le chef ?",
        "correction": "La Révolution bolchevique menée par Lénine."
      },
      {
        "num": "Question 6",
        "text": "Quelles sont les dates de la Seconde Guerre mondiale en Europe ?",
        "correction": "1er septembre 1939 – 8 mai 1945."
      },
      {
        "num": "Question 7",
        "text": "Définir le concept de \"guerre d'anéantissement\" appliqué au conflit 1939-1945.",
        "correction": "Guerre visant la destruction totale des capacités militaires, économiques et des populations de l'ennemi."
      },
      {
        "num": "Question 8",
        "text": "Qu'est-ce que la Shoah et quel en a été le bilan humain ?",
        "correction": "Le génocide des Juifs d'Europe par les Nazis, faisant environ 6 millions de morts."
      },
      {
        "num": "Question 9",
        "text": "Raconter le rôle du Général de Gaulle et l'Appel du 18 juin 1940.",
        "correction": "Depuis Londres, De Gaulle appelle les Français à résister contre l'occupation nazie et Vichy."
      },
      {
        "num": "Question 10",
        "text": "Quel événement majeur met fin à la Seconde Guerre mondiale en Asie en août 1945 ?",
        "correction": "Les bombardements atomiques américains sur Hiroshima (6 août) et Nagasaki (9 août 1945)."
      }
    ]
  },
  {
    "id": "hg-29",
    "subject": "histoire-geo",
    "chapter": "Chapitre 1 : Guerres Mondiales",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 94 : La Première et la Seconde Guerre Mondiale (Violences de masse #9)",
    "statement": "Analyse historique des conflits mondiaux du XXème siècle (1914-1918 et 1939-1945), tranchées, génocides et bilan humain.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Quelles sont les dates précises de la Première Guerre mondiale ?",
        "correction": "28 juillet 1914 – 11 novembre 1918."
      },
      {
        "num": "Question 2",
        "text": "Raconter brièvement la bataille de Verdun (date, durée, bilan humain).",
        "correction": "De février à décembre 1916 (10 mois), fait plus de 300 000 morts (Français et Allemands)."
      },
      {
        "num": "Question 3",
        "text": "Qu'appelle-t-on la \"guerre de position\" ou \"guerre de tranchées\" ?",
        "correction": "Phase du conflit où les armées s'enterrent dans des tranchées pour défendre leurs positions."
      },
      {
        "num": "Question 4",
        "text": "En quelle année a eu lieu le génocide des Arméniens et quel en est le bilan ?",
        "correction": "En 1915 dans l'Empire ottoman, faisant environ 1,2 à 1,5 million de victimes."
      },
      {
        "num": "Question 5",
        "text": "Quelle révolution éclate en Russie en octobre 1917 et qui en est le chef ?",
        "correction": "La Révolution bolchevique menée par Lénine."
      },
      {
        "num": "Question 6",
        "text": "Quelles sont les dates de la Seconde Guerre mondiale en Europe ?",
        "correction": "1er septembre 1939 – 8 mai 1945."
      },
      {
        "num": "Question 7",
        "text": "Définir le concept de \"guerre d'anéantissement\" appliqué au conflit 1939-1945.",
        "correction": "Guerre visant la destruction totale des capacités militaires, économiques et des populations de l'ennemi."
      },
      {
        "num": "Question 8",
        "text": "Qu'est-ce que la Shoah et quel en a été le bilan humain ?",
        "correction": "Le génocide des Juifs d'Europe par les Nazis, faisant environ 6 millions de morts."
      },
      {
        "num": "Question 9",
        "text": "Raconter le rôle du Général de Gaulle et l'Appel du 18 juin 1940.",
        "correction": "Depuis Londres, De Gaulle appelle les Français à résister contre l'occupation nazie et Vichy."
      },
      {
        "num": "Question 10",
        "text": "Quel événement majeur met fin à la Seconde Guerre mondiale en Asie en août 1945 ?",
        "correction": "Les bombardements atomiques américains sur Hiroshima (6 août) et Nagasaki (9 août 1945)."
      }
    ]
  },
  {
    "id": "hg-30",
    "subject": "histoire-geo",
    "chapter": "Chapitre 2 : Guerre Froide & Décolonisation",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 95 : Guerre Froide, Mur de Berlin et Décolonisation #1",
    "statement": "Étude des tensions entre les deux blocs (USA / URSS), de la décolonisation en Afrique/Asie et du nouvel ordre mondial post-1989.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Quelles sont les deux superpuissances qui s'affrontent pendant la Guerre Froide ?",
        "correction": "Les États-Unis (bloc occidental capitaliste) et l'URSS (bloc soviétique communiste)."
      },
      {
        "num": "Question 2",
        "text": "Pourquoi qualifie-t-on ce conflit de \"Guerre Froide\" ?",
        "correction": "Parce qu'il n'y a jamais eu d'affrontement militaire direct entre les deux superpuissances."
      },
      {
        "num": "Question 3",
        "text": "En quelle année le Mur de Berlin a-t-il été construit et quand est-il tombé ?",
        "correction": "Construit en août 1961, tombé le 9 novembre 1989."
      },
      {
        "num": "Question 4",
        "text": "Expliquer la Crise des missiles de Cuba en 1962.",
        "correction": "Tension maximale où l'URSS installe des missiles à Cuba, évitée de justesse par Kennedy et Khrouchtchev."
      },
      {
        "num": "Question 5",
        "text": "En quelle année la guerre d'Algérie s'achève-t-elle et par quels accords ?",
        "correction": "En 1962 par les accords d'Évian proclamant l'indépendance de l'Algérie."
      },
      {
        "num": "Question 6",
        "text": "Qui est le leader emblématique de l'indépendance de l'Inde en 1947 ?",
        "correction": "Mahatma Gandhi (prônant la non-violence)."
      },
      {
        "num": "Question 7",
        "text": "Qu'est-ce que le mouvement des \"Non-Alignés\" créé à la conférence de Bandoeng (1955) ?",
        "correction": "Pays nouvellement indépendants refusant d'appartenir à l'un des deux blocs."
      },
      {
        "num": "Question 8",
        "text": "En quelle année l'URSS s'effondre-t-elle officiellement ?",
        "correction": "En décembre 1991 sous la présidence de Mikhaïl Gorbatchev."
      },
      {
        "num": "Question 9",
        "text": "Quel traité de 1992 fonde l'Union Européenne et institue la citoyenneté européenne ?",
        "correction": "Le Traité de Maastricht."
      },
      {
        "num": "Question 10",
        "text": "Citer deux caractéristiques d'un monde multipolaire contemporain.",
        "correction": "Émergence de nouvelles puissances (Chine, Inde, Brésil) et multiplication des acteurs mondiaux."
      }
    ]
  },
  {
    "id": "hg-31",
    "subject": "histoire-geo",
    "chapter": "Chapitre 2 : Guerre Froide & Décolonisation",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 96 : Guerre Froide, Mur de Berlin et Décolonisation #2",
    "statement": "Étude des tensions entre les deux blocs (USA / URSS), de la décolonisation en Afrique/Asie et du nouvel ordre mondial post-1989.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Quelles sont les deux superpuissances qui s'affrontent pendant la Guerre Froide ?",
        "correction": "Les États-Unis (bloc occidental capitaliste) et l'URSS (bloc soviétique communiste)."
      },
      {
        "num": "Question 2",
        "text": "Pourquoi qualifie-t-on ce conflit de \"Guerre Froide\" ?",
        "correction": "Parce qu'il n'y a jamais eu d'affrontement militaire direct entre les deux superpuissances."
      },
      {
        "num": "Question 3",
        "text": "En quelle année le Mur de Berlin a-t-il été construit et quand est-il tombé ?",
        "correction": "Construit en août 1961, tombé le 9 novembre 1989."
      },
      {
        "num": "Question 4",
        "text": "Expliquer la Crise des missiles de Cuba en 1962.",
        "correction": "Tension maximale où l'URSS installe des missiles à Cuba, évitée de justesse par Kennedy et Khrouchtchev."
      },
      {
        "num": "Question 5",
        "text": "En quelle année la guerre d'Algérie s'achève-t-elle et par quels accords ?",
        "correction": "En 1962 par les accords d'Évian proclamant l'indépendance de l'Algérie."
      },
      {
        "num": "Question 6",
        "text": "Qui est le leader emblématique de l'indépendance de l'Inde en 1947 ?",
        "correction": "Mahatma Gandhi (prônant la non-violence)."
      },
      {
        "num": "Question 7",
        "text": "Qu'est-ce que le mouvement des \"Non-Alignés\" créé à la conférence de Bandoeng (1955) ?",
        "correction": "Pays nouvellement indépendants refusant d'appartenir à l'un des deux blocs."
      },
      {
        "num": "Question 8",
        "text": "En quelle année l'URSS s'effondre-t-elle officiellement ?",
        "correction": "En décembre 1991 sous la présidence de Mikhaïl Gorbatchev."
      },
      {
        "num": "Question 9",
        "text": "Quel traité de 1992 fonde l'Union Européenne et institue la citoyenneté européenne ?",
        "correction": "Le Traité de Maastricht."
      },
      {
        "num": "Question 10",
        "text": "Citer deux caractéristiques d'un monde multipolaire contemporain.",
        "correction": "Émergence de nouvelles puissances (Chine, Inde, Brésil) et multiplication des acteurs mondiaux."
      }
    ]
  },
  {
    "id": "hg-32",
    "subject": "histoire-geo",
    "chapter": "Chapitre 2 : Guerre Froide & Décolonisation",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 97 : Guerre Froide, Mur de Berlin et Décolonisation #3",
    "statement": "Étude des tensions entre les deux blocs (USA / URSS), de la décolonisation en Afrique/Asie et du nouvel ordre mondial post-1989.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Quelles sont les deux superpuissances qui s'affrontent pendant la Guerre Froide ?",
        "correction": "Les États-Unis (bloc occidental capitaliste) et l'URSS (bloc soviétique communiste)."
      },
      {
        "num": "Question 2",
        "text": "Pourquoi qualifie-t-on ce conflit de \"Guerre Froide\" ?",
        "correction": "Parce qu'il n'y a jamais eu d'affrontement militaire direct entre les deux superpuissances."
      },
      {
        "num": "Question 3",
        "text": "En quelle année le Mur de Berlin a-t-il été construit et quand est-il tombé ?",
        "correction": "Construit en août 1961, tombé le 9 novembre 1989."
      },
      {
        "num": "Question 4",
        "text": "Expliquer la Crise des missiles de Cuba en 1962.",
        "correction": "Tension maximale où l'URSS installe des missiles à Cuba, évitée de justesse par Kennedy et Khrouchtchev."
      },
      {
        "num": "Question 5",
        "text": "En quelle année la guerre d'Algérie s'achève-t-elle et par quels accords ?",
        "correction": "En 1962 par les accords d'Évian proclamant l'indépendance de l'Algérie."
      },
      {
        "num": "Question 6",
        "text": "Qui est le leader emblématique de l'indépendance de l'Inde en 1947 ?",
        "correction": "Mahatma Gandhi (prônant la non-violence)."
      },
      {
        "num": "Question 7",
        "text": "Qu'est-ce que le mouvement des \"Non-Alignés\" créé à la conférence de Bandoeng (1955) ?",
        "correction": "Pays nouvellement indépendants refusant d'appartenir à l'un des deux blocs."
      },
      {
        "num": "Question 8",
        "text": "En quelle année l'URSS s'effondre-t-elle officiellement ?",
        "correction": "En décembre 1991 sous la présidence de Mikhaïl Gorbatchev."
      },
      {
        "num": "Question 9",
        "text": "Quel traité de 1992 fonde l'Union Européenne et institue la citoyenneté européenne ?",
        "correction": "Le Traité de Maastricht."
      },
      {
        "num": "Question 10",
        "text": "Citer deux caractéristiques d'un monde multipolaire contemporain.",
        "correction": "Émergence de nouvelles puissances (Chine, Inde, Brésil) et multiplication des acteurs mondiaux."
      }
    ]
  },
  {
    "id": "hg-33",
    "subject": "histoire-geo",
    "chapter": "Chapitre 2 : Guerre Froide & Décolonisation",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 98 : Guerre Froide, Mur de Berlin et Décolonisation #4",
    "statement": "Étude des tensions entre les deux blocs (USA / URSS), de la décolonisation en Afrique/Asie et du nouvel ordre mondial post-1989.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Quelles sont les deux superpuissances qui s'affrontent pendant la Guerre Froide ?",
        "correction": "Les États-Unis (bloc occidental capitaliste) et l'URSS (bloc soviétique communiste)."
      },
      {
        "num": "Question 2",
        "text": "Pourquoi qualifie-t-on ce conflit de \"Guerre Froide\" ?",
        "correction": "Parce qu'il n'y a jamais eu d'affrontement militaire direct entre les deux superpuissances."
      },
      {
        "num": "Question 3",
        "text": "En quelle année le Mur de Berlin a-t-il été construit et quand est-il tombé ?",
        "correction": "Construit en août 1961, tombé le 9 novembre 1989."
      },
      {
        "num": "Question 4",
        "text": "Expliquer la Crise des missiles de Cuba en 1962.",
        "correction": "Tension maximale où l'URSS installe des missiles à Cuba, évitée de justesse par Kennedy et Khrouchtchev."
      },
      {
        "num": "Question 5",
        "text": "En quelle année la guerre d'Algérie s'achève-t-elle et par quels accords ?",
        "correction": "En 1962 par les accords d'Évian proclamant l'indépendance de l'Algérie."
      },
      {
        "num": "Question 6",
        "text": "Qui est le leader emblématique de l'indépendance de l'Inde en 1947 ?",
        "correction": "Mahatma Gandhi (prônant la non-violence)."
      },
      {
        "num": "Question 7",
        "text": "Qu'est-ce que le mouvement des \"Non-Alignés\" créé à la conférence de Bandoeng (1955) ?",
        "correction": "Pays nouvellement indépendants refusant d'appartenir à l'un des deux blocs."
      },
      {
        "num": "Question 8",
        "text": "En quelle année l'URSS s'effondre-t-elle officiellement ?",
        "correction": "En décembre 1991 sous la présidence de Mikhaïl Gorbatchev."
      },
      {
        "num": "Question 9",
        "text": "Quel traité de 1992 fonde l'Union Européenne et institue la citoyenneté européenne ?",
        "correction": "Le Traité de Maastricht."
      },
      {
        "num": "Question 10",
        "text": "Citer deux caractéristiques d'un monde multipolaire contemporain.",
        "correction": "Émergence de nouvelles puissances (Chine, Inde, Brésil) et multiplication des acteurs mondiaux."
      }
    ]
  },
  {
    "id": "hg-34",
    "subject": "histoire-geo",
    "chapter": "Chapitre 2 : Guerre Froide & Décolonisation",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 99 : Guerre Froide, Mur de Berlin et Décolonisation #5",
    "statement": "Étude des tensions entre les deux blocs (USA / URSS), de la décolonisation en Afrique/Asie et du nouvel ordre mondial post-1989.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Quelles sont les deux superpuissances qui s'affrontent pendant la Guerre Froide ?",
        "correction": "Les États-Unis (bloc occidental capitaliste) et l'URSS (bloc soviétique communiste)."
      },
      {
        "num": "Question 2",
        "text": "Pourquoi qualifie-t-on ce conflit de \"Guerre Froide\" ?",
        "correction": "Parce qu'il n'y a jamais eu d'affrontement militaire direct entre les deux superpuissances."
      },
      {
        "num": "Question 3",
        "text": "En quelle année le Mur de Berlin a-t-il été construit et quand est-il tombé ?",
        "correction": "Construit en août 1961, tombé le 9 novembre 1989."
      },
      {
        "num": "Question 4",
        "text": "Expliquer la Crise des missiles de Cuba en 1962.",
        "correction": "Tension maximale où l'URSS installe des missiles à Cuba, évitée de justesse par Kennedy et Khrouchtchev."
      },
      {
        "num": "Question 5",
        "text": "En quelle année la guerre d'Algérie s'achève-t-elle et par quels accords ?",
        "correction": "En 1962 par les accords d'Évian proclamant l'indépendance de l'Algérie."
      },
      {
        "num": "Question 6",
        "text": "Qui est le leader emblématique de l'indépendance de l'Inde en 1947 ?",
        "correction": "Mahatma Gandhi (prônant la non-violence)."
      },
      {
        "num": "Question 7",
        "text": "Qu'est-ce que le mouvement des \"Non-Alignés\" créé à la conférence de Bandoeng (1955) ?",
        "correction": "Pays nouvellement indépendants refusant d'appartenir à l'un des deux blocs."
      },
      {
        "num": "Question 8",
        "text": "En quelle année l'URSS s'effondre-t-elle officiellement ?",
        "correction": "En décembre 1991 sous la présidence de Mikhaïl Gorbatchev."
      },
      {
        "num": "Question 9",
        "text": "Quel traité de 1992 fonde l'Union Européenne et institue la citoyenneté européenne ?",
        "correction": "Le Traité de Maastricht."
      },
      {
        "num": "Question 10",
        "text": "Citer deux caractéristiques d'un monde multipolaire contemporain.",
        "correction": "Émergence de nouvelles puissances (Chine, Inde, Brésil) et multiplication des acteurs mondiaux."
      }
    ]
  },
  {
    "id": "hg-35",
    "subject": "histoire-geo",
    "chapter": "Chapitre 2 : Guerre Froide & Décolonisation",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 100 : Guerre Froide, Mur de Berlin et Décolonisation #6",
    "statement": "Étude des tensions entre les deux blocs (USA / URSS), de la décolonisation en Afrique/Asie et du nouvel ordre mondial post-1989.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Quelles sont les deux superpuissances qui s'affrontent pendant la Guerre Froide ?",
        "correction": "Les États-Unis (bloc occidental capitaliste) et l'URSS (bloc soviétique communiste)."
      },
      {
        "num": "Question 2",
        "text": "Pourquoi qualifie-t-on ce conflit de \"Guerre Froide\" ?",
        "correction": "Parce qu'il n'y a jamais eu d'affrontement militaire direct entre les deux superpuissances."
      },
      {
        "num": "Question 3",
        "text": "En quelle année le Mur de Berlin a-t-il été construit et quand est-il tombé ?",
        "correction": "Construit en août 1961, tombé le 9 novembre 1989."
      },
      {
        "num": "Question 4",
        "text": "Expliquer la Crise des missiles de Cuba en 1962.",
        "correction": "Tension maximale où l'URSS installe des missiles à Cuba, évitée de justesse par Kennedy et Khrouchtchev."
      },
      {
        "num": "Question 5",
        "text": "En quelle année la guerre d'Algérie s'achève-t-elle et par quels accords ?",
        "correction": "En 1962 par les accords d'Évian proclamant l'indépendance de l'Algérie."
      },
      {
        "num": "Question 6",
        "text": "Qui est le leader emblématique de l'indépendance de l'Inde en 1947 ?",
        "correction": "Mahatma Gandhi (prônant la non-violence)."
      },
      {
        "num": "Question 7",
        "text": "Qu'est-ce que le mouvement des \"Non-Alignés\" créé à la conférence de Bandoeng (1955) ?",
        "correction": "Pays nouvellement indépendants refusant d'appartenir à l'un des deux blocs."
      },
      {
        "num": "Question 8",
        "text": "En quelle année l'URSS s'effondre-t-elle officiellement ?",
        "correction": "En décembre 1991 sous la présidence de Mikhaïl Gorbatchev."
      },
      {
        "num": "Question 9",
        "text": "Quel traité de 1992 fonde l'Union Européenne et institue la citoyenneté européenne ?",
        "correction": "Le Traité de Maastricht."
      },
      {
        "num": "Question 10",
        "text": "Citer deux caractéristiques d'un monde multipolaire contemporain.",
        "correction": "Émergence de nouvelles puissances (Chine, Inde, Brésil) et multiplication des acteurs mondiaux."
      }
    ]
  },
  {
    "id": "hg-36",
    "subject": "histoire-geo",
    "chapter": "Chapitre 2 : Guerre Froide & Décolonisation",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 101 : Guerre Froide, Mur de Berlin et Décolonisation #7",
    "statement": "Étude des tensions entre les deux blocs (USA / URSS), de la décolonisation en Afrique/Asie et du nouvel ordre mondial post-1989.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Quelles sont les deux superpuissances qui s'affrontent pendant la Guerre Froide ?",
        "correction": "Les États-Unis (bloc occidental capitaliste) et l'URSS (bloc soviétique communiste)."
      },
      {
        "num": "Question 2",
        "text": "Pourquoi qualifie-t-on ce conflit de \"Guerre Froide\" ?",
        "correction": "Parce qu'il n'y a jamais eu d'affrontement militaire direct entre les deux superpuissances."
      },
      {
        "num": "Question 3",
        "text": "En quelle année le Mur de Berlin a-t-il été construit et quand est-il tombé ?",
        "correction": "Construit en août 1961, tombé le 9 novembre 1989."
      },
      {
        "num": "Question 4",
        "text": "Expliquer la Crise des missiles de Cuba en 1962.",
        "correction": "Tension maximale où l'URSS installe des missiles à Cuba, évitée de justesse par Kennedy et Khrouchtchev."
      },
      {
        "num": "Question 5",
        "text": "En quelle année la guerre d'Algérie s'achève-t-elle et par quels accords ?",
        "correction": "En 1962 par les accords d'Évian proclamant l'indépendance de l'Algérie."
      },
      {
        "num": "Question 6",
        "text": "Qui est le leader emblématique de l'indépendance de l'Inde en 1947 ?",
        "correction": "Mahatma Gandhi (prônant la non-violence)."
      },
      {
        "num": "Question 7",
        "text": "Qu'est-ce que le mouvement des \"Non-Alignés\" créé à la conférence de Bandoeng (1955) ?",
        "correction": "Pays nouvellement indépendants refusant d'appartenir à l'un des deux blocs."
      },
      {
        "num": "Question 8",
        "text": "En quelle année l'URSS s'effondre-t-elle officiellement ?",
        "correction": "En décembre 1991 sous la présidence de Mikhaïl Gorbatchev."
      },
      {
        "num": "Question 9",
        "text": "Quel traité de 1992 fonde l'Union Européenne et institue la citoyenneté européenne ?",
        "correction": "Le Traité de Maastricht."
      },
      {
        "num": "Question 10",
        "text": "Citer deux caractéristiques d'un monde multipolaire contemporain.",
        "correction": "Émergence de nouvelles puissances (Chine, Inde, Brésil) et multiplication des acteurs mondiaux."
      }
    ]
  },
  {
    "id": "hg-37",
    "subject": "histoire-geo",
    "chapter": "Chapitre 2 : Guerre Froide & Décolonisation",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 102 : Guerre Froide, Mur de Berlin et Décolonisation #8",
    "statement": "Étude des tensions entre les deux blocs (USA / URSS), de la décolonisation en Afrique/Asie et du nouvel ordre mondial post-1989.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Quelles sont les deux superpuissances qui s'affrontent pendant la Guerre Froide ?",
        "correction": "Les États-Unis (bloc occidental capitaliste) et l'URSS (bloc soviétique communiste)."
      },
      {
        "num": "Question 2",
        "text": "Pourquoi qualifie-t-on ce conflit de \"Guerre Froide\" ?",
        "correction": "Parce qu'il n'y a jamais eu d'affrontement militaire direct entre les deux superpuissances."
      },
      {
        "num": "Question 3",
        "text": "En quelle année le Mur de Berlin a-t-il été construit et quand est-il tombé ?",
        "correction": "Construit en août 1961, tombé le 9 novembre 1989."
      },
      {
        "num": "Question 4",
        "text": "Expliquer la Crise des missiles de Cuba en 1962.",
        "correction": "Tension maximale où l'URSS installe des missiles à Cuba, évitée de justesse par Kennedy et Khrouchtchev."
      },
      {
        "num": "Question 5",
        "text": "En quelle année la guerre d'Algérie s'achève-t-elle et par quels accords ?",
        "correction": "En 1962 par les accords d'Évian proclamant l'indépendance de l'Algérie."
      },
      {
        "num": "Question 6",
        "text": "Qui est le leader emblématique de l'indépendance de l'Inde en 1947 ?",
        "correction": "Mahatma Gandhi (prônant la non-violence)."
      },
      {
        "num": "Question 7",
        "text": "Qu'est-ce que le mouvement des \"Non-Alignés\" créé à la conférence de Bandoeng (1955) ?",
        "correction": "Pays nouvellement indépendants refusant d'appartenir à l'un des deux blocs."
      },
      {
        "num": "Question 8",
        "text": "En quelle année l'URSS s'effondre-t-elle officiellement ?",
        "correction": "En décembre 1991 sous la présidence de Mikhaïl Gorbatchev."
      },
      {
        "num": "Question 9",
        "text": "Quel traité de 1992 fonde l'Union Européenne et institue la citoyenneté européenne ?",
        "correction": "Le Traité de Maastricht."
      },
      {
        "num": "Question 10",
        "text": "Citer deux caractéristiques d'un monde multipolaire contemporain.",
        "correction": "Émergence de nouvelles puissances (Chine, Inde, Brésil) et multiplication des acteurs mondiaux."
      }
    ]
  },
  {
    "id": "hg-38",
    "subject": "histoire-geo",
    "chapter": "Chapitre 2 : Guerre Froide & Décolonisation",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 103 : Guerre Froide, Mur de Berlin et Décolonisation #9",
    "statement": "Étude des tensions entre les deux blocs (USA / URSS), de la décolonisation en Afrique/Asie et du nouvel ordre mondial post-1989.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Quelles sont les deux superpuissances qui s'affrontent pendant la Guerre Froide ?",
        "correction": "Les États-Unis (bloc occidental capitaliste) et l'URSS (bloc soviétique communiste)."
      },
      {
        "num": "Question 2",
        "text": "Pourquoi qualifie-t-on ce conflit de \"Guerre Froide\" ?",
        "correction": "Parce qu'il n'y a jamais eu d'affrontement militaire direct entre les deux superpuissances."
      },
      {
        "num": "Question 3",
        "text": "En quelle année le Mur de Berlin a-t-il été construit et quand est-il tombé ?",
        "correction": "Construit en août 1961, tombé le 9 novembre 1989."
      },
      {
        "num": "Question 4",
        "text": "Expliquer la Crise des missiles de Cuba en 1962.",
        "correction": "Tension maximale où l'URSS installe des missiles à Cuba, évitée de justesse par Kennedy et Khrouchtchev."
      },
      {
        "num": "Question 5",
        "text": "En quelle année la guerre d'Algérie s'achève-t-elle et par quels accords ?",
        "correction": "En 1962 par les accords d'Évian proclamant l'indépendance de l'Algérie."
      },
      {
        "num": "Question 6",
        "text": "Qui est le leader emblématique de l'indépendance de l'Inde en 1947 ?",
        "correction": "Mahatma Gandhi (prônant la non-violence)."
      },
      {
        "num": "Question 7",
        "text": "Qu'est-ce que le mouvement des \"Non-Alignés\" créé à la conférence de Bandoeng (1955) ?",
        "correction": "Pays nouvellement indépendants refusant d'appartenir à l'un des deux blocs."
      },
      {
        "num": "Question 8",
        "text": "En quelle année l'URSS s'effondre-t-elle officiellement ?",
        "correction": "En décembre 1991 sous la présidence de Mikhaïl Gorbatchev."
      },
      {
        "num": "Question 9",
        "text": "Quel traité de 1992 fonde l'Union Européenne et institue la citoyenneté européenne ?",
        "correction": "Le Traité de Maastricht."
      },
      {
        "num": "Question 10",
        "text": "Citer deux caractéristiques d'un monde multipolaire contemporain.",
        "correction": "Émergence de nouvelles puissances (Chine, Inde, Brésil) et multiplication des acteurs mondiaux."
      }
    ]
  },
  {
    "id": "hg-39",
    "subject": "histoire-geo",
    "chapter": "Chapitre 3 : Géographie de la France",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 104 : Aires urbaines, métropoles et aménagement du territoire #1",
    "statement": "Organisation de l'espace français, métropolisation, espaces productifs et intégration européenne.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Quelles sont les 3 parties qui composent une aire urbaine en France ?",
        "correction": "La ville-centre, les banlieues (constituant le pôle urbain) et la couronne périurbaine."
      },
      {
        "num": "Question 2",
        "text": "Qu'appelle-t-on le phénomène de \"périurbanisation\" ?",
        "correction": "L'étalement de la ville sur les espaces ruraux environnants."
      },
      {
        "num": "Question 3",
        "text": "Quelle est la plus grande aire urbaine de France et sa population ?",
        "correction": "L'aire urbaine de Paris avec plus de 12 millions d'habitants."
      },
      {
        "num": "Question 4",
        "text": "Donner deux caractéristiques des espaces à faibles densités en France.",
        "correction": "Moins de 30 hab/km², présence d'activités agricoles, de tourisme vert ou de vieillissement."
      },
      {
        "num": "Question 5",
        "text": "Qu'est-ce qu'un pôle de compétitivité dans un espace productif industriel ?",
        "correction": "Rassemblement sur un territoire d'entreprises, de centres de recherche et d'universités."
      },
      {
        "num": "Question 6",
        "text": "Donner deux exemples de DROM (Départements et Régions d'Outre-Mer).",
        "correction": "La Guadeloupe, La Réunion, la Martinique, la Guyane, Mayotte."
      },
      {
        "num": "Question 7",
        "text": "Pourquoi dit-on que la France possède une présence maritimes mondiale majeure ?",
        "correction": "Grâce à sa ZEE (Zone Économique Exclusive), la 2ème plus vaste du monde."
      },
      {
        "num": "Question 8",
        "text": "Quel est le rôle de la DATAR / CGET dans l'aménagement du territoire français ?",
        "correction": "Réduire les inégalités territoriales et développer l'attractivité des régions."
      },
      {
        "num": "Question 9",
        "text": "Citer les 4 plus grandes métropoles régionales françaises hors Paris.",
        "correction": "Lyon, Marseille, Lille, Toulouse."
      },
      {
        "num": "Question 10",
        "text": "Expliquer l'impact de la métropolisation sur l'attractivité des espaces.",
        "correction": "Concentration des hommes, des activités à haute valeur ajoutée et des fonctions de commandement."
      }
    ]
  },
  {
    "id": "hg-40",
    "subject": "histoire-geo",
    "chapter": "Chapitre 3 : Géographie de la France",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 105 : Aires urbaines, métropoles et aménagement du territoire #2",
    "statement": "Organisation de l'espace français, métropolisation, espaces productifs et intégration européenne.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Quelles sont les 3 parties qui composent une aire urbaine en France ?",
        "correction": "La ville-centre, les banlieues (constituant le pôle urbain) et la couronne périurbaine."
      },
      {
        "num": "Question 2",
        "text": "Qu'appelle-t-on le phénomène de \"périurbanisation\" ?",
        "correction": "L'étalement de la ville sur les espaces ruraux environnants."
      },
      {
        "num": "Question 3",
        "text": "Quelle est la plus grande aire urbaine de France et sa population ?",
        "correction": "L'aire urbaine de Paris avec plus de 12 millions d'habitants."
      },
      {
        "num": "Question 4",
        "text": "Donner deux caractéristiques des espaces à faibles densités en France.",
        "correction": "Moins de 30 hab/km², présence d'activités agricoles, de tourisme vert ou de vieillissement."
      },
      {
        "num": "Question 5",
        "text": "Qu'est-ce qu'un pôle de compétitivité dans un espace productif industriel ?",
        "correction": "Rassemblement sur un territoire d'entreprises, de centres de recherche et d'universités."
      },
      {
        "num": "Question 6",
        "text": "Donner deux exemples de DROM (Départements et Régions d'Outre-Mer).",
        "correction": "La Guadeloupe, La Réunion, la Martinique, la Guyane, Mayotte."
      },
      {
        "num": "Question 7",
        "text": "Pourquoi dit-on que la France possède une présence maritimes mondiale majeure ?",
        "correction": "Grâce à sa ZEE (Zone Économique Exclusive), la 2ème plus vaste du monde."
      },
      {
        "num": "Question 8",
        "text": "Quel est le rôle de la DATAR / CGET dans l'aménagement du territoire français ?",
        "correction": "Réduire les inégalités territoriales et développer l'attractivité des régions."
      },
      {
        "num": "Question 9",
        "text": "Citer les 4 plus grandes métropoles régionales françaises hors Paris.",
        "correction": "Lyon, Marseille, Lille, Toulouse."
      },
      {
        "num": "Question 10",
        "text": "Expliquer l'impact de la métropolisation sur l'attractivité des espaces.",
        "correction": "Concentration des hommes, des activités à haute valeur ajoutée et des fonctions de commandement."
      }
    ]
  },
  {
    "id": "hg-41",
    "subject": "histoire-geo",
    "chapter": "Chapitre 3 : Géographie de la France",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 106 : Aires urbaines, métropoles et aménagement du territoire #3",
    "statement": "Organisation de l'espace français, métropolisation, espaces productifs et intégration européenne.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Quelles sont les 3 parties qui composent une aire urbaine en France ?",
        "correction": "La ville-centre, les banlieues (constituant le pôle urbain) et la couronne périurbaine."
      },
      {
        "num": "Question 2",
        "text": "Qu'appelle-t-on le phénomène de \"périurbanisation\" ?",
        "correction": "L'étalement de la ville sur les espaces ruraux environnants."
      },
      {
        "num": "Question 3",
        "text": "Quelle est la plus grande aire urbaine de France et sa population ?",
        "correction": "L'aire urbaine de Paris avec plus de 12 millions d'habitants."
      },
      {
        "num": "Question 4",
        "text": "Donner deux caractéristiques des espaces à faibles densités en France.",
        "correction": "Moins de 30 hab/km², présence d'activités agricoles, de tourisme vert ou de vieillissement."
      },
      {
        "num": "Question 5",
        "text": "Qu'est-ce qu'un pôle de compétitivité dans un espace productif industriel ?",
        "correction": "Rassemblement sur un territoire d'entreprises, de centres de recherche et d'universités."
      },
      {
        "num": "Question 6",
        "text": "Donner deux exemples de DROM (Départements et Régions d'Outre-Mer).",
        "correction": "La Guadeloupe, La Réunion, la Martinique, la Guyane, Mayotte."
      },
      {
        "num": "Question 7",
        "text": "Pourquoi dit-on que la France possède une présence maritimes mondiale majeure ?",
        "correction": "Grâce à sa ZEE (Zone Économique Exclusive), la 2ème plus vaste du monde."
      },
      {
        "num": "Question 8",
        "text": "Quel est le rôle de la DATAR / CGET dans l'aménagement du territoire français ?",
        "correction": "Réduire les inégalités territoriales et développer l'attractivité des régions."
      },
      {
        "num": "Question 9",
        "text": "Citer les 4 plus grandes métropoles régionales françaises hors Paris.",
        "correction": "Lyon, Marseille, Lille, Toulouse."
      },
      {
        "num": "Question 10",
        "text": "Expliquer l'impact de la métropolisation sur l'attractivité des espaces.",
        "correction": "Concentration des hommes, des activités à haute valeur ajoutée et des fonctions de commandement."
      }
    ]
  },
  {
    "id": "hg-42",
    "subject": "histoire-geo",
    "chapter": "Chapitre 3 : Géographie de la France",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 107 : Aires urbaines, métropoles et aménagement du territoire #4",
    "statement": "Organisation de l'espace français, métropolisation, espaces productifs et intégration européenne.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Quelles sont les 3 parties qui composent une aire urbaine en France ?",
        "correction": "La ville-centre, les banlieues (constituant le pôle urbain) et la couronne périurbaine."
      },
      {
        "num": "Question 2",
        "text": "Qu'appelle-t-on le phénomène de \"périurbanisation\" ?",
        "correction": "L'étalement de la ville sur les espaces ruraux environnants."
      },
      {
        "num": "Question 3",
        "text": "Quelle est la plus grande aire urbaine de France et sa population ?",
        "correction": "L'aire urbaine de Paris avec plus de 12 millions d'habitants."
      },
      {
        "num": "Question 4",
        "text": "Donner deux caractéristiques des espaces à faibles densités en France.",
        "correction": "Moins de 30 hab/km², présence d'activités agricoles, de tourisme vert ou de vieillissement."
      },
      {
        "num": "Question 5",
        "text": "Qu'est-ce qu'un pôle de compétitivité dans un espace productif industriel ?",
        "correction": "Rassemblement sur un territoire d'entreprises, de centres de recherche et d'universités."
      },
      {
        "num": "Question 6",
        "text": "Donner deux exemples de DROM (Départements et Régions d'Outre-Mer).",
        "correction": "La Guadeloupe, La Réunion, la Martinique, la Guyane, Mayotte."
      },
      {
        "num": "Question 7",
        "text": "Pourquoi dit-on que la France possède une présence maritimes mondiale majeure ?",
        "correction": "Grâce à sa ZEE (Zone Économique Exclusive), la 2ème plus vaste du monde."
      },
      {
        "num": "Question 8",
        "text": "Quel est le rôle de la DATAR / CGET dans l'aménagement du territoire français ?",
        "correction": "Réduire les inégalités territoriales et développer l'attractivité des régions."
      },
      {
        "num": "Question 9",
        "text": "Citer les 4 plus grandes métropoles régionales françaises hors Paris.",
        "correction": "Lyon, Marseille, Lille, Toulouse."
      },
      {
        "num": "Question 10",
        "text": "Expliquer l'impact de la métropolisation sur l'attractivité des espaces.",
        "correction": "Concentration des hommes, des activités à haute valeur ajoutée et des fonctions de commandement."
      }
    ]
  },
  {
    "id": "hg-43",
    "subject": "histoire-geo",
    "chapter": "Chapitre 3 : Géographie de la France",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 108 : Aires urbaines, métropoles et aménagement du territoire #5",
    "statement": "Organisation de l'espace français, métropolisation, espaces productifs et intégration européenne.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Quelles sont les 3 parties qui composent une aire urbaine en France ?",
        "correction": "La ville-centre, les banlieues (constituant le pôle urbain) et la couronne périurbaine."
      },
      {
        "num": "Question 2",
        "text": "Qu'appelle-t-on le phénomène de \"périurbanisation\" ?",
        "correction": "L'étalement de la ville sur les espaces ruraux environnants."
      },
      {
        "num": "Question 3",
        "text": "Quelle est la plus grande aire urbaine de France et sa population ?",
        "correction": "L'aire urbaine de Paris avec plus de 12 millions d'habitants."
      },
      {
        "num": "Question 4",
        "text": "Donner deux caractéristiques des espaces à faibles densités en France.",
        "correction": "Moins de 30 hab/km², présence d'activités agricoles, de tourisme vert ou de vieillissement."
      },
      {
        "num": "Question 5",
        "text": "Qu'est-ce qu'un pôle de compétitivité dans un espace productif industriel ?",
        "correction": "Rassemblement sur un territoire d'entreprises, de centres de recherche et d'universités."
      },
      {
        "num": "Question 6",
        "text": "Donner deux exemples de DROM (Départements et Régions d'Outre-Mer).",
        "correction": "La Guadeloupe, La Réunion, la Martinique, la Guyane, Mayotte."
      },
      {
        "num": "Question 7",
        "text": "Pourquoi dit-on que la France possède une présence maritimes mondiale majeure ?",
        "correction": "Grâce à sa ZEE (Zone Économique Exclusive), la 2ème plus vaste du monde."
      },
      {
        "num": "Question 8",
        "text": "Quel est le rôle de la DATAR / CGET dans l'aménagement du territoire français ?",
        "correction": "Réduire les inégalités territoriales et développer l'attractivité des régions."
      },
      {
        "num": "Question 9",
        "text": "Citer les 4 plus grandes métropoles régionales françaises hors Paris.",
        "correction": "Lyon, Marseille, Lille, Toulouse."
      },
      {
        "num": "Question 10",
        "text": "Expliquer l'impact de la métropolisation sur l'attractivité des espaces.",
        "correction": "Concentration des hommes, des activités à haute valeur ajoutée et des fonctions de commandement."
      }
    ]
  },
  {
    "id": "hg-44",
    "subject": "histoire-geo",
    "chapter": "Chapitre 3 : Géographie de la France",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 109 : Aires urbaines, métropoles et aménagement du territoire #6",
    "statement": "Organisation de l'espace français, métropolisation, espaces productifs et intégration européenne.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Quelles sont les 3 parties qui composent une aire urbaine en France ?",
        "correction": "La ville-centre, les banlieues (constituant le pôle urbain) et la couronne périurbaine."
      },
      {
        "num": "Question 2",
        "text": "Qu'appelle-t-on le phénomène de \"périurbanisation\" ?",
        "correction": "L'étalement de la ville sur les espaces ruraux environnants."
      },
      {
        "num": "Question 3",
        "text": "Quelle est la plus grande aire urbaine de France et sa population ?",
        "correction": "L'aire urbaine de Paris avec plus de 12 millions d'habitants."
      },
      {
        "num": "Question 4",
        "text": "Donner deux caractéristiques des espaces à faibles densités en France.",
        "correction": "Moins de 30 hab/km², présence d'activités agricoles, de tourisme vert ou de vieillissement."
      },
      {
        "num": "Question 5",
        "text": "Qu'est-ce qu'un pôle de compétitivité dans un espace productif industriel ?",
        "correction": "Rassemblement sur un territoire d'entreprises, de centres de recherche et d'universités."
      },
      {
        "num": "Question 6",
        "text": "Donner deux exemples de DROM (Départements et Régions d'Outre-Mer).",
        "correction": "La Guadeloupe, La Réunion, la Martinique, la Guyane, Mayotte."
      },
      {
        "num": "Question 7",
        "text": "Pourquoi dit-on que la France possède une présence maritimes mondiale majeure ?",
        "correction": "Grâce à sa ZEE (Zone Économique Exclusive), la 2ème plus vaste du monde."
      },
      {
        "num": "Question 8",
        "text": "Quel est le rôle de la DATAR / CGET dans l'aménagement du territoire français ?",
        "correction": "Réduire les inégalités territoriales et développer l'attractivité des régions."
      },
      {
        "num": "Question 9",
        "text": "Citer les 4 plus grandes métropoles régionales françaises hors Paris.",
        "correction": "Lyon, Marseille, Lille, Toulouse."
      },
      {
        "num": "Question 10",
        "text": "Expliquer l'impact de la métropolisation sur l'attractivité des espaces.",
        "correction": "Concentration des hommes, des activités à haute valeur ajoutée et des fonctions de commandement."
      }
    ]
  },
  {
    "id": "hg-45",
    "subject": "histoire-geo",
    "chapter": "Chapitre 3 : Géographie de la France",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 110 : Aires urbaines, métropoles et aménagement du territoire #7",
    "statement": "Organisation de l'espace français, métropolisation, espaces productifs et intégration européenne.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Quelles sont les 3 parties qui composent une aire urbaine en France ?",
        "correction": "La ville-centre, les banlieues (constituant le pôle urbain) et la couronne périurbaine."
      },
      {
        "num": "Question 2",
        "text": "Qu'appelle-t-on le phénomène de \"périurbanisation\" ?",
        "correction": "L'étalement de la ville sur les espaces ruraux environnants."
      },
      {
        "num": "Question 3",
        "text": "Quelle est la plus grande aire urbaine de France et sa population ?",
        "correction": "L'aire urbaine de Paris avec plus de 12 millions d'habitants."
      },
      {
        "num": "Question 4",
        "text": "Donner deux caractéristiques des espaces à faibles densités en France.",
        "correction": "Moins de 30 hab/km², présence d'activités agricoles, de tourisme vert ou de vieillissement."
      },
      {
        "num": "Question 5",
        "text": "Qu'est-ce qu'un pôle de compétitivité dans un espace productif industriel ?",
        "correction": "Rassemblement sur un territoire d'entreprises, de centres de recherche et d'universités."
      },
      {
        "num": "Question 6",
        "text": "Donner deux exemples de DROM (Départements et Régions d'Outre-Mer).",
        "correction": "La Guadeloupe, La Réunion, la Martinique, la Guyane, Mayotte."
      },
      {
        "num": "Question 7",
        "text": "Pourquoi dit-on que la France possède une présence maritimes mondiale majeure ?",
        "correction": "Grâce à sa ZEE (Zone Économique Exclusive), la 2ème plus vaste du monde."
      },
      {
        "num": "Question 8",
        "text": "Quel est le rôle de la DATAR / CGET dans l'aménagement du territoire français ?",
        "correction": "Réduire les inégalités territoriales et développer l'attractivité des régions."
      },
      {
        "num": "Question 9",
        "text": "Citer les 4 plus grandes métropoles régionales françaises hors Paris.",
        "correction": "Lyon, Marseille, Lille, Toulouse."
      },
      {
        "num": "Question 10",
        "text": "Expliquer l'impact de la métropolisation sur l'attractivité des espaces.",
        "correction": "Concentration des hommes, des activités à haute valeur ajoutée et des fonctions de commandement."
      }
    ]
  },
  {
    "id": "hg-46",
    "subject": "histoire-geo",
    "chapter": "Chapitre 3 : Géographie de la France",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 111 : Aires urbaines, métropoles et aménagement du territoire #8",
    "statement": "Organisation de l'espace français, métropolisation, espaces productifs et intégration européenne.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Quelles sont les 3 parties qui composent une aire urbaine en France ?",
        "correction": "La ville-centre, les banlieues (constituant le pôle urbain) et la couronne périurbaine."
      },
      {
        "num": "Question 2",
        "text": "Qu'appelle-t-on le phénomène de \"périurbanisation\" ?",
        "correction": "L'étalement de la ville sur les espaces ruraux environnants."
      },
      {
        "num": "Question 3",
        "text": "Quelle est la plus grande aire urbaine de France et sa population ?",
        "correction": "L'aire urbaine de Paris avec plus de 12 millions d'habitants."
      },
      {
        "num": "Question 4",
        "text": "Donner deux caractéristiques des espaces à faibles densités en France.",
        "correction": "Moins de 30 hab/km², présence d'activités agricoles, de tourisme vert ou de vieillissement."
      },
      {
        "num": "Question 5",
        "text": "Qu'est-ce qu'un pôle de compétitivité dans un espace productif industriel ?",
        "correction": "Rassemblement sur un territoire d'entreprises, de centres de recherche et d'universités."
      },
      {
        "num": "Question 6",
        "text": "Donner deux exemples de DROM (Départements et Régions d'Outre-Mer).",
        "correction": "La Guadeloupe, La Réunion, la Martinique, la Guyane, Mayotte."
      },
      {
        "num": "Question 7",
        "text": "Pourquoi dit-on que la France possède une présence maritimes mondiale majeure ?",
        "correction": "Grâce à sa ZEE (Zone Économique Exclusive), la 2ème plus vaste du monde."
      },
      {
        "num": "Question 8",
        "text": "Quel est le rôle de la DATAR / CGET dans l'aménagement du territoire français ?",
        "correction": "Réduire les inégalités territoriales et développer l'attractivité des régions."
      },
      {
        "num": "Question 9",
        "text": "Citer les 4 plus grandes métropoles régionales françaises hors Paris.",
        "correction": "Lyon, Marseille, Lille, Toulouse."
      },
      {
        "num": "Question 10",
        "text": "Expliquer l'impact de la métropolisation sur l'attractivité des espaces.",
        "correction": "Concentration des hommes, des activités à haute valeur ajoutée et des fonctions de commandement."
      }
    ]
  },
  {
    "id": "hg-47",
    "subject": "histoire-geo",
    "chapter": "Chapitre 3 : Géographie de la France",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 112 : Aires urbaines, métropoles et aménagement du territoire #9",
    "statement": "Organisation de l'espace français, métropolisation, espaces productifs et intégration européenne.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Quelles sont les 3 parties qui composent une aire urbaine en France ?",
        "correction": "La ville-centre, les banlieues (constituant le pôle urbain) et la couronne périurbaine."
      },
      {
        "num": "Question 2",
        "text": "Qu'appelle-t-on le phénomène de \"périurbanisation\" ?",
        "correction": "L'étalement de la ville sur les espaces ruraux environnants."
      },
      {
        "num": "Question 3",
        "text": "Quelle est la plus grande aire urbaine de France et sa population ?",
        "correction": "L'aire urbaine de Paris avec plus de 12 millions d'habitants."
      },
      {
        "num": "Question 4",
        "text": "Donner deux caractéristiques des espaces à faibles densités en France.",
        "correction": "Moins de 30 hab/km², présence d'activités agricoles, de tourisme vert ou de vieillissement."
      },
      {
        "num": "Question 5",
        "text": "Qu'est-ce qu'un pôle de compétitivité dans un espace productif industriel ?",
        "correction": "Rassemblement sur un territoire d'entreprises, de centres de recherche et d'universités."
      },
      {
        "num": "Question 6",
        "text": "Donner deux exemples de DROM (Départements et Régions d'Outre-Mer).",
        "correction": "La Guadeloupe, La Réunion, la Martinique, la Guyane, Mayotte."
      },
      {
        "num": "Question 7",
        "text": "Pourquoi dit-on que la France possède une présence maritimes mondiale majeure ?",
        "correction": "Grâce à sa ZEE (Zone Économique Exclusive), la 2ème plus vaste du monde."
      },
      {
        "num": "Question 8",
        "text": "Quel est le rôle de la DATAR / CGET dans l'aménagement du territoire français ?",
        "correction": "Réduire les inégalités territoriales et développer l'attractivité des régions."
      },
      {
        "num": "Question 9",
        "text": "Citer les 4 plus grandes métropoles régionales françaises hors Paris.",
        "correction": "Lyon, Marseille, Lille, Toulouse."
      },
      {
        "num": "Question 10",
        "text": "Expliquer l'impact de la métropolisation sur l'attractivité des espaces.",
        "correction": "Concentration des hommes, des activités à haute valeur ajoutée et des fonctions de commandement."
      }
    ]
  },
  {
    "id": "hg-48",
    "subject": "histoire-geo",
    "chapter": "Chapitre 4 : Vème République & EMC",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 113 : Institutions de la Vème République, laïcité et Défense Nationale #1",
    "statement": "Les principes de la République française, la Constitution de 1958, les droits et devoirs du citoyen.",
    "questions": [
      {
        "num": "Question 1",
        "text": "En quelle année la Constitution de la Vème République a-t-elle été adoptée ?",
        "correction": "En 1958, rédigée sous la direction du Général de Gaulle."
      },
      {
        "num": "Question 2",
        "text": "Quels sont les trois pouvoirs fondamentaux de la démocratie française ?",
        "correction": "Le pouvoir exécutif (Président/Gouvernement), législatif (Parlement) et judiciaire (Juges)."
      },
      {
        "num": "Question 3",
        "text": "Qui détient le pouvoir législatif en France et de quelles assemblées est-il composé ?",
        "correction": "Le Parlement, composé de l'Assemblée nationale et du Sénat."
      },
      {
        "num": "Question 4",
        "text": "Quelle est la durée du mandat du Président de la République depuis 2000 ?",
        "correction": "Le quinquennat (5 ans), renouvelable une fois consécutivement."
      },
      {
        "num": "Question 5",
        "text": "Quelle est la devise officielle de la République française ?",
        "correction": "Liberté, Égalité, Fraternité."
      },
      {
        "num": "Question 6",
        "text": "Expliquer la loi de 1905 sur la séparation des Églises et de l'État.",
        "correction": "L'État garantit la liberté de conscience et de culte mais n'en subventionne ni n'en reconnaît aucun."
      },
      {
        "num": "Question 7",
        "text": "Comment obtient-on la nationalité française par le droit du sol ?",
        "correction": "En naissant en France de parents étrangers et en y résidant au moins 5 ans à partir de 11 ans."
      },
      {
        "num": "Question 8",
        "text": "Quelles sont les 3 étapes du parcours de citoyenneté pour les jeunes Français ?",
        "correction": "L'enseignement de défense à l'école, le recensement citoyen à 16 ans, puis la JDC."
      },
      {
        "num": "Question 9",
        "text": "Quel est le rôle du Conseil Constitutionnel en France ?",
        "correction": "Vérifier que les lois votées sont conformes à la Constitution et contrôler les élections."
      },
      {
        "num": "Question 10",
        "text": "Citer deux symboles de la République française inscrits dans l'Article 2.",
        "correction": "Le drapeau tricolore, la Marseillaise, Marianne, le sceau ou le coq gaulois."
      }
    ]
  },
  {
    "id": "hg-49",
    "subject": "histoire-geo",
    "chapter": "Chapitre 4 : Vème République & EMC",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 114 : Institutions de la Vème République, laïcité et Défense Nationale #2",
    "statement": "Les principes de la République française, la Constitution de 1958, les droits et devoirs du citoyen.",
    "questions": [
      {
        "num": "Question 1",
        "text": "En quelle année la Constitution de la Vème République a-t-elle été adoptée ?",
        "correction": "En 1958, rédigée sous la direction du Général de Gaulle."
      },
      {
        "num": "Question 2",
        "text": "Quels sont les trois pouvoirs fondamentaux de la démocratie française ?",
        "correction": "Le pouvoir exécutif (Président/Gouvernement), législatif (Parlement) et judiciaire (Juges)."
      },
      {
        "num": "Question 3",
        "text": "Qui détient le pouvoir législatif en France et de quelles assemblées est-il composé ?",
        "correction": "Le Parlement, composé de l'Assemblée nationale et du Sénat."
      },
      {
        "num": "Question 4",
        "text": "Quelle est la durée du mandat du Président de la République depuis 2000 ?",
        "correction": "Le quinquennat (5 ans), renouvelable une fois consécutivement."
      },
      {
        "num": "Question 5",
        "text": "Quelle est la devise officielle de la République française ?",
        "correction": "Liberté, Égalité, Fraternité."
      },
      {
        "num": "Question 6",
        "text": "Expliquer la loi de 1905 sur la séparation des Églises et de l'État.",
        "correction": "L'État garantit la liberté de conscience et de culte mais n'en subventionne ni n'en reconnaît aucun."
      },
      {
        "num": "Question 7",
        "text": "Comment obtient-on la nationalité française par le droit du sol ?",
        "correction": "En naissant en France de parents étrangers et en y résidant au moins 5 ans à partir de 11 ans."
      },
      {
        "num": "Question 8",
        "text": "Quelles sont les 3 étapes du parcours de citoyenneté pour les jeunes Français ?",
        "correction": "L'enseignement de défense à l'école, le recensement citoyen à 16 ans, puis la JDC."
      },
      {
        "num": "Question 9",
        "text": "Quel est le rôle du Conseil Constitutionnel en France ?",
        "correction": "Vérifier que les lois votées sont conformes à la Constitution et contrôler les élections."
      },
      {
        "num": "Question 10",
        "text": "Citer deux symboles de la République française inscrits dans l'Article 2.",
        "correction": "Le drapeau tricolore, la Marseillaise, Marianne, le sceau ou le coq gaulois."
      }
    ]
  },
  {
    "id": "hg-50",
    "subject": "histoire-geo",
    "chapter": "Chapitre 4 : Vème République & EMC",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 115 : Institutions de la Vème République, laïcité et Défense Nationale #3",
    "statement": "Les principes de la République française, la Constitution de 1958, les droits et devoirs du citoyen.",
    "questions": [
      {
        "num": "Question 1",
        "text": "En quelle année la Constitution de la Vème République a-t-elle été adoptée ?",
        "correction": "En 1958, rédigée sous la direction du Général de Gaulle."
      },
      {
        "num": "Question 2",
        "text": "Quels sont les trois pouvoirs fondamentaux de la démocratie française ?",
        "correction": "Le pouvoir exécutif (Président/Gouvernement), législatif (Parlement) et judiciaire (Juges)."
      },
      {
        "num": "Question 3",
        "text": "Qui détient le pouvoir législatif en France et de quelles assemblées est-il composé ?",
        "correction": "Le Parlement, composé de l'Assemblée nationale et du Sénat."
      },
      {
        "num": "Question 4",
        "text": "Quelle est la durée du mandat du Président de la République depuis 2000 ?",
        "correction": "Le quinquennat (5 ans), renouvelable une fois consécutivement."
      },
      {
        "num": "Question 5",
        "text": "Quelle est la devise officielle de la République française ?",
        "correction": "Liberté, Égalité, Fraternité."
      },
      {
        "num": "Question 6",
        "text": "Expliquer la loi de 1905 sur la séparation des Églises et de l'État.",
        "correction": "L'État garantit la liberté de conscience et de culte mais n'en subventionne ni n'en reconnaît aucun."
      },
      {
        "num": "Question 7",
        "text": "Comment obtient-on la nationalité française par le droit du sol ?",
        "correction": "En naissant en France de parents étrangers et en y résidant au moins 5 ans à partir de 11 ans."
      },
      {
        "num": "Question 8",
        "text": "Quelles sont les 3 étapes du parcours de citoyenneté pour les jeunes Français ?",
        "correction": "L'enseignement de défense à l'école, le recensement citoyen à 16 ans, puis la JDC."
      },
      {
        "num": "Question 9",
        "text": "Quel est le rôle du Conseil Constitutionnel en France ?",
        "correction": "Vérifier que les lois votées sont conformes à la Constitution et contrôler les élections."
      },
      {
        "num": "Question 10",
        "text": "Citer deux symboles de la République française inscrits dans l'Article 2.",
        "correction": "Le drapeau tricolore, la Marseillaise, Marianne, le sceau ou le coq gaulois."
      }
    ]
  },
  {
    "id": "hg-51",
    "subject": "histoire-geo",
    "chapter": "Chapitre 4 : Vème République & EMC",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 116 : Institutions de la Vème République, laïcité et Défense Nationale #4",
    "statement": "Les principes de la République française, la Constitution de 1958, les droits et devoirs du citoyen.",
    "questions": [
      {
        "num": "Question 1",
        "text": "En quelle année la Constitution de la Vème République a-t-elle été adoptée ?",
        "correction": "En 1958, rédigée sous la direction du Général de Gaulle."
      },
      {
        "num": "Question 2",
        "text": "Quels sont les trois pouvoirs fondamentaux de la démocratie française ?",
        "correction": "Le pouvoir exécutif (Président/Gouvernement), législatif (Parlement) et judiciaire (Juges)."
      },
      {
        "num": "Question 3",
        "text": "Qui détient le pouvoir législatif en France et de quelles assemblées est-il composé ?",
        "correction": "Le Parlement, composé de l'Assemblée nationale et du Sénat."
      },
      {
        "num": "Question 4",
        "text": "Quelle est la durée du mandat du Président de la République depuis 2000 ?",
        "correction": "Le quinquennat (5 ans), renouvelable une fois consécutivement."
      },
      {
        "num": "Question 5",
        "text": "Quelle est la devise officielle de la République française ?",
        "correction": "Liberté, Égalité, Fraternité."
      },
      {
        "num": "Question 6",
        "text": "Expliquer la loi de 1905 sur la séparation des Églises et de l'État.",
        "correction": "L'État garantit la liberté de conscience et de culte mais n'en subventionne ni n'en reconnaît aucun."
      },
      {
        "num": "Question 7",
        "text": "Comment obtient-on la nationalité française par le droit du sol ?",
        "correction": "En naissant en France de parents étrangers et en y résidant au moins 5 ans à partir de 11 ans."
      },
      {
        "num": "Question 8",
        "text": "Quelles sont les 3 étapes du parcours de citoyenneté pour les jeunes Français ?",
        "correction": "L'enseignement de défense à l'école, le recensement citoyen à 16 ans, puis la JDC."
      },
      {
        "num": "Question 9",
        "text": "Quel est le rôle du Conseil Constitutionnel en France ?",
        "correction": "Vérifier que les lois votées sont conformes à la Constitution et contrôler les élections."
      },
      {
        "num": "Question 10",
        "text": "Citer deux symboles de la République française inscrits dans l'Article 2.",
        "correction": "Le drapeau tricolore, la Marseillaise, Marianne, le sceau ou le coq gaulois."
      }
    ]
  },
  {
    "id": "hg-52",
    "subject": "histoire-geo",
    "chapter": "Chapitre 4 : Vème République & EMC",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 117 : Institutions de la Vème République, laïcité et Défense Nationale #5",
    "statement": "Les principes de la République française, la Constitution de 1958, les droits et devoirs du citoyen.",
    "questions": [
      {
        "num": "Question 1",
        "text": "En quelle année la Constitution de la Vème République a-t-elle été adoptée ?",
        "correction": "En 1958, rédigée sous la direction du Général de Gaulle."
      },
      {
        "num": "Question 2",
        "text": "Quels sont les trois pouvoirs fondamentaux de la démocratie française ?",
        "correction": "Le pouvoir exécutif (Président/Gouvernement), législatif (Parlement) et judiciaire (Juges)."
      },
      {
        "num": "Question 3",
        "text": "Qui détient le pouvoir législatif en France et de quelles assemblées est-il composé ?",
        "correction": "Le Parlement, composé de l'Assemblée nationale et du Sénat."
      },
      {
        "num": "Question 4",
        "text": "Quelle est la durée du mandat du Président de la République depuis 2000 ?",
        "correction": "Le quinquennat (5 ans), renouvelable une fois consécutivement."
      },
      {
        "num": "Question 5",
        "text": "Quelle est la devise officielle de la République française ?",
        "correction": "Liberté, Égalité, Fraternité."
      },
      {
        "num": "Question 6",
        "text": "Expliquer la loi de 1905 sur la séparation des Églises et de l'État.",
        "correction": "L'État garantit la liberté de conscience et de culte mais n'en subventionne ni n'en reconnaît aucun."
      },
      {
        "num": "Question 7",
        "text": "Comment obtient-on la nationalité française par le droit du sol ?",
        "correction": "En naissant en France de parents étrangers et en y résidant au moins 5 ans à partir de 11 ans."
      },
      {
        "num": "Question 8",
        "text": "Quelles sont les 3 étapes du parcours de citoyenneté pour les jeunes Français ?",
        "correction": "L'enseignement de défense à l'école, le recensement citoyen à 16 ans, puis la JDC."
      },
      {
        "num": "Question 9",
        "text": "Quel est le rôle du Conseil Constitutionnel en France ?",
        "correction": "Vérifier que les lois votées sont conformes à la Constitution et contrôler les élections."
      },
      {
        "num": "Question 10",
        "text": "Citer deux symboles de la République française inscrits dans l'Article 2.",
        "correction": "Le drapeau tricolore, la Marseillaise, Marianne, le sceau ou le coq gaulois."
      }
    ]
  },
  {
    "id": "hg-53",
    "subject": "histoire-geo",
    "chapter": "Chapitre 4 : Vème République & EMC",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 118 : Institutions de la Vème République, laïcité et Défense Nationale #6",
    "statement": "Les principes de la République française, la Constitution de 1958, les droits et devoirs du citoyen.",
    "questions": [
      {
        "num": "Question 1",
        "text": "En quelle année la Constitution de la Vème République a-t-elle été adoptée ?",
        "correction": "En 1958, rédigée sous la direction du Général de Gaulle."
      },
      {
        "num": "Question 2",
        "text": "Quels sont les trois pouvoirs fondamentaux de la démocratie française ?",
        "correction": "Le pouvoir exécutif (Président/Gouvernement), législatif (Parlement) et judiciaire (Juges)."
      },
      {
        "num": "Question 3",
        "text": "Qui détient le pouvoir législatif en France et de quelles assemblées est-il composé ?",
        "correction": "Le Parlement, composé de l'Assemblée nationale et du Sénat."
      },
      {
        "num": "Question 4",
        "text": "Quelle est la durée du mandat du Président de la République depuis 2000 ?",
        "correction": "Le quinquennat (5 ans), renouvelable une fois consécutivement."
      },
      {
        "num": "Question 5",
        "text": "Quelle est la devise officielle de la République française ?",
        "correction": "Liberté, Égalité, Fraternité."
      },
      {
        "num": "Question 6",
        "text": "Expliquer la loi de 1905 sur la séparation des Églises et de l'État.",
        "correction": "L'État garantit la liberté de conscience et de culte mais n'en subventionne ni n'en reconnaît aucun."
      },
      {
        "num": "Question 7",
        "text": "Comment obtient-on la nationalité française par le droit du sol ?",
        "correction": "En naissant en France de parents étrangers et en y résidant au moins 5 ans à partir de 11 ans."
      },
      {
        "num": "Question 8",
        "text": "Quelles sont les 3 étapes du parcours de citoyenneté pour les jeunes Français ?",
        "correction": "L'enseignement de défense à l'école, le recensement citoyen à 16 ans, puis la JDC."
      },
      {
        "num": "Question 9",
        "text": "Quel est le rôle du Conseil Constitutionnel en France ?",
        "correction": "Vérifier que les lois votées sont conformes à la Constitution et contrôler les élections."
      },
      {
        "num": "Question 10",
        "text": "Citer deux symboles de la République française inscrits dans l'Article 2.",
        "correction": "Le drapeau tricolore, la Marseillaise, Marianne, le sceau ou le coq gaulois."
      }
    ]
  },
  {
    "id": "hg-54",
    "subject": "histoire-geo",
    "chapter": "Chapitre 4 : Vème République & EMC",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 119 : Institutions de la Vème République, laïcité et Défense Nationale #7",
    "statement": "Les principes de la République française, la Constitution de 1958, les droits et devoirs du citoyen.",
    "questions": [
      {
        "num": "Question 1",
        "text": "En quelle année la Constitution de la Vème République a-t-elle été adoptée ?",
        "correction": "En 1958, rédigée sous la direction du Général de Gaulle."
      },
      {
        "num": "Question 2",
        "text": "Quels sont les trois pouvoirs fondamentaux de la démocratie française ?",
        "correction": "Le pouvoir exécutif (Président/Gouvernement), législatif (Parlement) et judiciaire (Juges)."
      },
      {
        "num": "Question 3",
        "text": "Qui détient le pouvoir législatif en France et de quelles assemblées est-il composé ?",
        "correction": "Le Parlement, composé de l'Assemblée nationale et du Sénat."
      },
      {
        "num": "Question 4",
        "text": "Quelle est la durée du mandat du Président de la République depuis 2000 ?",
        "correction": "Le quinquennat (5 ans), renouvelable une fois consécutivement."
      },
      {
        "num": "Question 5",
        "text": "Quelle est la devise officielle de la République française ?",
        "correction": "Liberté, Égalité, Fraternité."
      },
      {
        "num": "Question 6",
        "text": "Expliquer la loi de 1905 sur la séparation des Églises et de l'État.",
        "correction": "L'État garantit la liberté de conscience et de culte mais n'en subventionne ni n'en reconnaît aucun."
      },
      {
        "num": "Question 7",
        "text": "Comment obtient-on la nationalité française par le droit du sol ?",
        "correction": "En naissant en France de parents étrangers et en y résidant au moins 5 ans à partir de 11 ans."
      },
      {
        "num": "Question 8",
        "text": "Quelles sont les 3 étapes du parcours de citoyenneté pour les jeunes Français ?",
        "correction": "L'enseignement de défense à l'école, le recensement citoyen à 16 ans, puis la JDC."
      },
      {
        "num": "Question 9",
        "text": "Quel est le rôle du Conseil Constitutionnel en France ?",
        "correction": "Vérifier que les lois votées sont conformes à la Constitution et contrôler les élections."
      },
      {
        "num": "Question 10",
        "text": "Citer deux symboles de la République française inscrits dans l'Article 2.",
        "correction": "Le drapeau tricolore, la Marseillaise, Marianne, le sceau ou le coq gaulois."
      }
    ]
  },
  {
    "id": "hg-55",
    "subject": "histoire-geo",
    "chapter": "Chapitre 4 : Vème République & EMC",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 120 : Institutions de la Vème République, laïcité et Défense Nationale #8",
    "statement": "Les principes de la République française, la Constitution de 1958, les droits et devoirs du citoyen.",
    "questions": [
      {
        "num": "Question 1",
        "text": "En quelle année la Constitution de la Vème République a-t-elle été adoptée ?",
        "correction": "En 1958, rédigée sous la direction du Général de Gaulle."
      },
      {
        "num": "Question 2",
        "text": "Quels sont les trois pouvoirs fondamentaux de la démocratie française ?",
        "correction": "Le pouvoir exécutif (Président/Gouvernement), législatif (Parlement) et judiciaire (Juges)."
      },
      {
        "num": "Question 3",
        "text": "Qui détient le pouvoir législatif en France et de quelles assemblées est-il composé ?",
        "correction": "Le Parlement, composé de l'Assemblée nationale et du Sénat."
      },
      {
        "num": "Question 4",
        "text": "Quelle est la durée du mandat du Président de la République depuis 2000 ?",
        "correction": "Le quinquennat (5 ans), renouvelable une fois consécutivement."
      },
      {
        "num": "Question 5",
        "text": "Quelle est la devise officielle de la République française ?",
        "correction": "Liberté, Égalité, Fraternité."
      },
      {
        "num": "Question 6",
        "text": "Expliquer la loi de 1905 sur la séparation des Églises et de l'État.",
        "correction": "L'État garantit la liberté de conscience et de culte mais n'en subventionne ni n'en reconnaît aucun."
      },
      {
        "num": "Question 7",
        "text": "Comment obtient-on la nationalité française par le droit du sol ?",
        "correction": "En naissant en France de parents étrangers et en y résidant au moins 5 ans à partir de 11 ans."
      },
      {
        "num": "Question 8",
        "text": "Quelles sont les 3 étapes du parcours de citoyenneté pour les jeunes Français ?",
        "correction": "L'enseignement de défense à l'école, le recensement citoyen à 16 ans, puis la JDC."
      },
      {
        "num": "Question 9",
        "text": "Quel est le rôle du Conseil Constitutionnel en France ?",
        "correction": "Vérifier que les lois votées sont conformes à la Constitution et contrôler les élections."
      },
      {
        "num": "Question 10",
        "text": "Citer deux symboles de la République française inscrits dans l'Article 2.",
        "correction": "Le drapeau tricolore, la Marseillaise, Marianne, le sceau ou le coq gaulois."
      }
    ]
  },
  {
    "id": "s-1",
    "subject": "svt",
    "chapter": "Chapitre 1 : Génétique & Chromosomes",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 121 : Chromosomes, ADN, allèles et transmission génétique #1",
    "statement": "Étude du caryotype humain, de la structure des gènes, des allèles dominants/récessifs et de la méiose.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Combien de chromosomes comporte une cellule humaine somatique normale ?",
        "correction": "46 chromosomes organisés en 23 paires."
      },
      {
        "num": "Question 2",
        "text": "Quels sont les chromosomes sexuels chez l'homme et chez la femme ?",
        "correction": "XY chez l'homme et XX chez la femme."
      },
      {
        "num": "Question 3",
        "text": "Où l'information génétique d'une cellule est-elle localisée ?",
        "correction": "Dans le noyau de la cellule, sur les molécules d'ADN contenues dans les chromosomes."
      },
      {
        "num": "Question 4",
        "text": "Définir le terme \"gène\".",
        "correction": "Portion d'ADN portant une information génétique déterminant un caractère héréditaire."
      },
      {
        "num": "Question 5",
        "text": "Qu'appelle-t-on les \"allèles\" d'un gène ?",
        "correction": "Les différentes versions d'un même gène."
      },
      {
        "num": "Question 6",
        "text": "Quelle est la différence entre un allèle dominant et un allèle récessif ?",
        "correction": "L'allèle dominant s'exprime toujours, tandis que le récessif ne s'exprime qu'en l'absence du dominant."
      },
      {
        "num": "Question 7",
        "text": "Quel est le nombre de chromosomes dans un gamète humain (spermatozoïde ou ovule) ?",
        "correction": "23 chromosomes (cellule haploïde)."
      },
      {
        "num": "Question 8",
        "text": "Quel processus cellulaire permet de passer de 46 à 23 chromosomes lors de la formation des gamètes ?",
        "correction": "La méiose."
      },
      {
        "num": "Question 9",
        "text": "Comment la fécondation rétablit-elle le nombre de chromosomes de l'espèce ?",
        "correction": "En unissant les 23 chromosomes du spermatozoïde et les 23 de l'ovule pour former une cellule-œuf à 46 chrs."
      },
      {
        "num": "Question 10",
        "text": "Qu'est-ce qu'une anomalie chromosomique comme la trisomie 21 ?",
        "correction": "Présence d'un chromosome supplémentaire sur la 21ème paire (3 au lieu de 2)."
      }
    ]
  },
  {
    "id": "s-2",
    "subject": "svt",
    "chapter": "Chapitre 1 : Génétique & Chromosomes",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 122 : Chromosomes, ADN, allèles et transmission génétique #2",
    "statement": "Étude du caryotype humain, de la structure des gènes, des allèles dominants/récessifs et de la méiose.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Combien de chromosomes comporte une cellule humaine somatique normale ?",
        "correction": "46 chromosomes organisés en 23 paires."
      },
      {
        "num": "Question 2",
        "text": "Quels sont les chromosomes sexuels chez l'homme et chez la femme ?",
        "correction": "XY chez l'homme et XX chez la femme."
      },
      {
        "num": "Question 3",
        "text": "Où l'information génétique d'une cellule est-elle localisée ?",
        "correction": "Dans le noyau de la cellule, sur les molécules d'ADN contenues dans les chromosomes."
      },
      {
        "num": "Question 4",
        "text": "Définir le terme \"gène\".",
        "correction": "Portion d'ADN portant une information génétique déterminant un caractère héréditaire."
      },
      {
        "num": "Question 5",
        "text": "Qu'appelle-t-on les \"allèles\" d'un gène ?",
        "correction": "Les différentes versions d'un même gène."
      },
      {
        "num": "Question 6",
        "text": "Quelle est la différence entre un allèle dominant et un allèle récessif ?",
        "correction": "L'allèle dominant s'exprime toujours, tandis que le récessif ne s'exprime qu'en l'absence du dominant."
      },
      {
        "num": "Question 7",
        "text": "Quel est le nombre de chromosomes dans un gamète humain (spermatozoïde ou ovule) ?",
        "correction": "23 chromosomes (cellule haploïde)."
      },
      {
        "num": "Question 8",
        "text": "Quel processus cellulaire permet de passer de 46 à 23 chromosomes lors de la formation des gamètes ?",
        "correction": "La méiose."
      },
      {
        "num": "Question 9",
        "text": "Comment la fécondation rétablit-elle le nombre de chromosomes de l'espèce ?",
        "correction": "En unissant les 23 chromosomes du spermatozoïde et les 23 de l'ovule pour former une cellule-œuf à 46 chrs."
      },
      {
        "num": "Question 10",
        "text": "Qu'est-ce qu'une anomalie chromosomique comme la trisomie 21 ?",
        "correction": "Présence d'un chromosome supplémentaire sur la 21ème paire (3 au lieu de 2)."
      }
    ]
  },
  {
    "id": "s-3",
    "subject": "svt",
    "chapter": "Chapitre 1 : Génétique & Chromosomes",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 123 : Chromosomes, ADN, allèles et transmission génétique #3",
    "statement": "Étude du caryotype humain, de la structure des gènes, des allèles dominants/récessifs et de la méiose.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Combien de chromosomes comporte une cellule humaine somatique normale ?",
        "correction": "46 chromosomes organisés en 23 paires."
      },
      {
        "num": "Question 2",
        "text": "Quels sont les chromosomes sexuels chez l'homme et chez la femme ?",
        "correction": "XY chez l'homme et XX chez la femme."
      },
      {
        "num": "Question 3",
        "text": "Où l'information génétique d'une cellule est-elle localisée ?",
        "correction": "Dans le noyau de la cellule, sur les molécules d'ADN contenues dans les chromosomes."
      },
      {
        "num": "Question 4",
        "text": "Définir le terme \"gène\".",
        "correction": "Portion d'ADN portant une information génétique déterminant un caractère héréditaire."
      },
      {
        "num": "Question 5",
        "text": "Qu'appelle-t-on les \"allèles\" d'un gène ?",
        "correction": "Les différentes versions d'un même gène."
      },
      {
        "num": "Question 6",
        "text": "Quelle est la différence entre un allèle dominant et un allèle récessif ?",
        "correction": "L'allèle dominant s'exprime toujours, tandis que le récessif ne s'exprime qu'en l'absence du dominant."
      },
      {
        "num": "Question 7",
        "text": "Quel est le nombre de chromosomes dans un gamète humain (spermatozoïde ou ovule) ?",
        "correction": "23 chromosomes (cellule haploïde)."
      },
      {
        "num": "Question 8",
        "text": "Quel processus cellulaire permet de passer de 46 à 23 chromosomes lors de la formation des gamètes ?",
        "correction": "La méiose."
      },
      {
        "num": "Question 9",
        "text": "Comment la fécondation rétablit-elle le nombre de chromosomes de l'espèce ?",
        "correction": "En unissant les 23 chromosomes du spermatozoïde et les 23 de l'ovule pour former une cellule-œuf à 46 chrs."
      },
      {
        "num": "Question 10",
        "text": "Qu'est-ce qu'une anomalie chromosomique comme la trisomie 21 ?",
        "correction": "Présence d'un chromosome supplémentaire sur la 21ème paire (3 au lieu de 2)."
      }
    ]
  },
  {
    "id": "s-4",
    "subject": "svt",
    "chapter": "Chapitre 1 : Génétique & Chromosomes",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 124 : Chromosomes, ADN, allèles et transmission génétique #4",
    "statement": "Étude du caryotype humain, de la structure des gènes, des allèles dominants/récessifs et de la méiose.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Combien de chromosomes comporte une cellule humaine somatique normale ?",
        "correction": "46 chromosomes organisés en 23 paires."
      },
      {
        "num": "Question 2",
        "text": "Quels sont les chromosomes sexuels chez l'homme et chez la femme ?",
        "correction": "XY chez l'homme et XX chez la femme."
      },
      {
        "num": "Question 3",
        "text": "Où l'information génétique d'une cellule est-elle localisée ?",
        "correction": "Dans le noyau de la cellule, sur les molécules d'ADN contenues dans les chromosomes."
      },
      {
        "num": "Question 4",
        "text": "Définir le terme \"gène\".",
        "correction": "Portion d'ADN portant une information génétique déterminant un caractère héréditaire."
      },
      {
        "num": "Question 5",
        "text": "Qu'appelle-t-on les \"allèles\" d'un gène ?",
        "correction": "Les différentes versions d'un même gène."
      },
      {
        "num": "Question 6",
        "text": "Quelle est la différence entre un allèle dominant et un allèle récessif ?",
        "correction": "L'allèle dominant s'exprime toujours, tandis que le récessif ne s'exprime qu'en l'absence du dominant."
      },
      {
        "num": "Question 7",
        "text": "Quel est le nombre de chromosomes dans un gamète humain (spermatozoïde ou ovule) ?",
        "correction": "23 chromosomes (cellule haploïde)."
      },
      {
        "num": "Question 8",
        "text": "Quel processus cellulaire permet de passer de 46 à 23 chromosomes lors de la formation des gamètes ?",
        "correction": "La méiose."
      },
      {
        "num": "Question 9",
        "text": "Comment la fécondation rétablit-elle le nombre de chromosomes de l'espèce ?",
        "correction": "En unissant les 23 chromosomes du spermatozoïde et les 23 de l'ovule pour former une cellule-œuf à 46 chrs."
      },
      {
        "num": "Question 10",
        "text": "Qu'est-ce qu'une anomalie chromosomique comme la trisomie 21 ?",
        "correction": "Présence d'un chromosome supplémentaire sur la 21ème paire (3 au lieu de 2)."
      }
    ]
  },
  {
    "id": "s-5",
    "subject": "svt",
    "chapter": "Chapitre 1 : Génétique & Chromosomes",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 125 : Chromosomes, ADN, allèles et transmission génétique #5",
    "statement": "Étude du caryotype humain, de la structure des gènes, des allèles dominants/récessifs et de la méiose.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Combien de chromosomes comporte une cellule humaine somatique normale ?",
        "correction": "46 chromosomes organisés en 23 paires."
      },
      {
        "num": "Question 2",
        "text": "Quels sont les chromosomes sexuels chez l'homme et chez la femme ?",
        "correction": "XY chez l'homme et XX chez la femme."
      },
      {
        "num": "Question 3",
        "text": "Où l'information génétique d'une cellule est-elle localisée ?",
        "correction": "Dans le noyau de la cellule, sur les molécules d'ADN contenues dans les chromosomes."
      },
      {
        "num": "Question 4",
        "text": "Définir le terme \"gène\".",
        "correction": "Portion d'ADN portant une information génétique déterminant un caractère héréditaire."
      },
      {
        "num": "Question 5",
        "text": "Qu'appelle-t-on les \"allèles\" d'un gène ?",
        "correction": "Les différentes versions d'un même gène."
      },
      {
        "num": "Question 6",
        "text": "Quelle est la différence entre un allèle dominant et un allèle récessif ?",
        "correction": "L'allèle dominant s'exprime toujours, tandis que le récessif ne s'exprime qu'en l'absence du dominant."
      },
      {
        "num": "Question 7",
        "text": "Quel est le nombre de chromosomes dans un gamète humain (spermatozoïde ou ovule) ?",
        "correction": "23 chromosomes (cellule haploïde)."
      },
      {
        "num": "Question 8",
        "text": "Quel processus cellulaire permet de passer de 46 à 23 chromosomes lors de la formation des gamètes ?",
        "correction": "La méiose."
      },
      {
        "num": "Question 9",
        "text": "Comment la fécondation rétablit-elle le nombre de chromosomes de l'espèce ?",
        "correction": "En unissant les 23 chromosomes du spermatozoïde et les 23 de l'ovule pour former une cellule-œuf à 46 chrs."
      },
      {
        "num": "Question 10",
        "text": "Qu'est-ce qu'une anomalie chromosomique comme la trisomie 21 ?",
        "correction": "Présence d'un chromosome supplémentaire sur la 21ème paire (3 au lieu de 2)."
      }
    ]
  },
  {
    "id": "s-6",
    "subject": "svt",
    "chapter": "Chapitre 1 : Génétique & Chromosomes",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 126 : Chromosomes, ADN, allèles et transmission génétique #6",
    "statement": "Étude du caryotype humain, de la structure des gènes, des allèles dominants/récessifs et de la méiose.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Combien de chromosomes comporte une cellule humaine somatique normale ?",
        "correction": "46 chromosomes organisés en 23 paires."
      },
      {
        "num": "Question 2",
        "text": "Quels sont les chromosomes sexuels chez l'homme et chez la femme ?",
        "correction": "XY chez l'homme et XX chez la femme."
      },
      {
        "num": "Question 3",
        "text": "Où l'information génétique d'une cellule est-elle localisée ?",
        "correction": "Dans le noyau de la cellule, sur les molécules d'ADN contenues dans les chromosomes."
      },
      {
        "num": "Question 4",
        "text": "Définir le terme \"gène\".",
        "correction": "Portion d'ADN portant une information génétique déterminant un caractère héréditaire."
      },
      {
        "num": "Question 5",
        "text": "Qu'appelle-t-on les \"allèles\" d'un gène ?",
        "correction": "Les différentes versions d'un même gène."
      },
      {
        "num": "Question 6",
        "text": "Quelle est la différence entre un allèle dominant et un allèle récessif ?",
        "correction": "L'allèle dominant s'exprime toujours, tandis que le récessif ne s'exprime qu'en l'absence du dominant."
      },
      {
        "num": "Question 7",
        "text": "Quel est le nombre de chromosomes dans un gamète humain (spermatozoïde ou ovule) ?",
        "correction": "23 chromosomes (cellule haploïde)."
      },
      {
        "num": "Question 8",
        "text": "Quel processus cellulaire permet de passer de 46 à 23 chromosomes lors de la formation des gamètes ?",
        "correction": "La méiose."
      },
      {
        "num": "Question 9",
        "text": "Comment la fécondation rétablit-elle le nombre de chromosomes de l'espèce ?",
        "correction": "En unissant les 23 chromosomes du spermatozoïde et les 23 de l'ovule pour former une cellule-œuf à 46 chrs."
      },
      {
        "num": "Question 10",
        "text": "Qu'est-ce qu'une anomalie chromosomique comme la trisomie 21 ?",
        "correction": "Présence d'un chromosome supplémentaire sur la 21ème paire (3 au lieu de 2)."
      }
    ]
  },
  {
    "id": "s-7",
    "subject": "svt",
    "chapter": "Chapitre 1 : Génétique & Chromosomes",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 127 : Chromosomes, ADN, allèles et transmission génétique #7",
    "statement": "Étude du caryotype humain, de la structure des gènes, des allèles dominants/récessifs et de la méiose.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Combien de chromosomes comporte une cellule humaine somatique normale ?",
        "correction": "46 chromosomes organisés en 23 paires."
      },
      {
        "num": "Question 2",
        "text": "Quels sont les chromosomes sexuels chez l'homme et chez la femme ?",
        "correction": "XY chez l'homme et XX chez la femme."
      },
      {
        "num": "Question 3",
        "text": "Où l'information génétique d'une cellule est-elle localisée ?",
        "correction": "Dans le noyau de la cellule, sur les molécules d'ADN contenues dans les chromosomes."
      },
      {
        "num": "Question 4",
        "text": "Définir le terme \"gène\".",
        "correction": "Portion d'ADN portant une information génétique déterminant un caractère héréditaire."
      },
      {
        "num": "Question 5",
        "text": "Qu'appelle-t-on les \"allèles\" d'un gène ?",
        "correction": "Les différentes versions d'un même gène."
      },
      {
        "num": "Question 6",
        "text": "Quelle est la différence entre un allèle dominant et un allèle récessif ?",
        "correction": "L'allèle dominant s'exprime toujours, tandis que le récessif ne s'exprime qu'en l'absence du dominant."
      },
      {
        "num": "Question 7",
        "text": "Quel est le nombre de chromosomes dans un gamète humain (spermatozoïde ou ovule) ?",
        "correction": "23 chromosomes (cellule haploïde)."
      },
      {
        "num": "Question 8",
        "text": "Quel processus cellulaire permet de passer de 46 à 23 chromosomes lors de la formation des gamètes ?",
        "correction": "La méiose."
      },
      {
        "num": "Question 9",
        "text": "Comment la fécondation rétablit-elle le nombre de chromosomes de l'espèce ?",
        "correction": "En unissant les 23 chromosomes du spermatozoïde et les 23 de l'ovule pour former une cellule-œuf à 46 chrs."
      },
      {
        "num": "Question 10",
        "text": "Qu'est-ce qu'une anomalie chromosomique comme la trisomie 21 ?",
        "correction": "Présence d'un chromosome supplémentaire sur la 21ème paire (3 au lieu de 2)."
      }
    ]
  },
  {
    "id": "s-8",
    "subject": "svt",
    "chapter": "Chapitre 1 : Génétique & Chromosomes",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 128 : Chromosomes, ADN, allèles et transmission génétique #8",
    "statement": "Étude du caryotype humain, de la structure des gènes, des allèles dominants/récessifs et de la méiose.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Combien de chromosomes comporte une cellule humaine somatique normale ?",
        "correction": "46 chromosomes organisés en 23 paires."
      },
      {
        "num": "Question 2",
        "text": "Quels sont les chromosomes sexuels chez l'homme et chez la femme ?",
        "correction": "XY chez l'homme et XX chez la femme."
      },
      {
        "num": "Question 3",
        "text": "Où l'information génétique d'une cellule est-elle localisée ?",
        "correction": "Dans le noyau de la cellule, sur les molécules d'ADN contenues dans les chromosomes."
      },
      {
        "num": "Question 4",
        "text": "Définir le terme \"gène\".",
        "correction": "Portion d'ADN portant une information génétique déterminant un caractère héréditaire."
      },
      {
        "num": "Question 5",
        "text": "Qu'appelle-t-on les \"allèles\" d'un gène ?",
        "correction": "Les différentes versions d'un même gène."
      },
      {
        "num": "Question 6",
        "text": "Quelle est la différence entre un allèle dominant et un allèle récessif ?",
        "correction": "L'allèle dominant s'exprime toujours, tandis que le récessif ne s'exprime qu'en l'absence du dominant."
      },
      {
        "num": "Question 7",
        "text": "Quel est le nombre de chromosomes dans un gamète humain (spermatozoïde ou ovule) ?",
        "correction": "23 chromosomes (cellule haploïde)."
      },
      {
        "num": "Question 8",
        "text": "Quel processus cellulaire permet de passer de 46 à 23 chromosomes lors de la formation des gamètes ?",
        "correction": "La méiose."
      },
      {
        "num": "Question 9",
        "text": "Comment la fécondation rétablit-elle le nombre de chromosomes de l'espèce ?",
        "correction": "En unissant les 23 chromosomes du spermatozoïde et les 23 de l'ovule pour former une cellule-œuf à 46 chrs."
      },
      {
        "num": "Question 10",
        "text": "Qu'est-ce qu'une anomalie chromosomique comme la trisomie 21 ?",
        "correction": "Présence d'un chromosome supplémentaire sur la 21ème paire (3 au lieu de 2)."
      }
    ]
  },
  {
    "id": "s-9",
    "subject": "svt",
    "chapter": "Chapitre 1 : Génétique & Chromosomes",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 129 : Chromosomes, ADN, allèles et transmission génétique #9",
    "statement": "Étude du caryotype humain, de la structure des gènes, des allèles dominants/récessifs et de la méiose.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Combien de chromosomes comporte une cellule humaine somatique normale ?",
        "correction": "46 chromosomes organisés en 23 paires."
      },
      {
        "num": "Question 2",
        "text": "Quels sont les chromosomes sexuels chez l'homme et chez la femme ?",
        "correction": "XY chez l'homme et XX chez la femme."
      },
      {
        "num": "Question 3",
        "text": "Où l'information génétique d'une cellule est-elle localisée ?",
        "correction": "Dans le noyau de la cellule, sur les molécules d'ADN contenues dans les chromosomes."
      },
      {
        "num": "Question 4",
        "text": "Définir le terme \"gène\".",
        "correction": "Portion d'ADN portant une information génétique déterminant un caractère héréditaire."
      },
      {
        "num": "Question 5",
        "text": "Qu'appelle-t-on les \"allèles\" d'un gène ?",
        "correction": "Les différentes versions d'un même gène."
      },
      {
        "num": "Question 6",
        "text": "Quelle est la différence entre un allèle dominant et un allèle récessif ?",
        "correction": "L'allèle dominant s'exprime toujours, tandis que le récessif ne s'exprime qu'en l'absence du dominant."
      },
      {
        "num": "Question 7",
        "text": "Quel est le nombre de chromosomes dans un gamète humain (spermatozoïde ou ovule) ?",
        "correction": "23 chromosomes (cellule haploïde)."
      },
      {
        "num": "Question 8",
        "text": "Quel processus cellulaire permet de passer de 46 à 23 chromosomes lors de la formation des gamètes ?",
        "correction": "La méiose."
      },
      {
        "num": "Question 9",
        "text": "Comment la fécondation rétablit-elle le nombre de chromosomes de l'espèce ?",
        "correction": "En unissant les 23 chromosomes du spermatozoïde et les 23 de l'ovule pour former une cellule-œuf à 46 chrs."
      },
      {
        "num": "Question 10",
        "text": "Qu'est-ce qu'une anomalie chromosomique comme la trisomie 21 ?",
        "correction": "Présence d'un chromosome supplémentaire sur la 21ème paire (3 au lieu de 2)."
      }
    ]
  },
  {
    "id": "s-10",
    "subject": "svt",
    "chapter": "Chapitre 2 : Immunologie",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 130 : Système immunitaire, phagocytose et vaccination #1",
    "statement": "Analyse de la réaction inflammatoire, des lymphocytes B et T, des anticorps et du principe des vaccins.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Quels sont les 4 signes cliniques d'une réaction inflammatoire locale ?",
        "correction": "Rougeur, chaleur, gonflement (œdème) et douleur."
      },
      {
        "num": "Question 2",
        "text": "Quel type de leucocytes intervient lors de la réaction rapide appelée phagocytose ?",
        "correction": "Les phagocytes (ou granulocytes / macrophages)."
      },
      {
        "num": "Question 3",
        "text": "Décrire les 4 étapes de la phagocytose.",
        "correction": "Adhésion, absorption (ingestion), digestion du micro-organisme, rejet des déchets."
      },
      {
        "num": "Question 4",
        "text": "Qu'est-ce qu'un antigène ?",
        "correction": "Une molécule étrangère à l'organisme capable de déclencher une réaction immunitaire."
      },
      {
        "num": "Question 5",
        "text": "Quel est le rôle spécifique des Lymphocytes B (LB) ?",
        "correction": "Produire des anticorps spécifiques capables de neutraliser les antigènes."
      },
      {
        "num": "Question 6",
        "text": "Quel est le rôle spécifique des Lymphocytes T tueurs (LTc) ?",
        "correction": "Détruire par contact direct les cellules infectées par un virus."
      },
      {
        "num": "Question 7",
        "text": "Expliquer le principe de la \"mémoire immunitaire\".",
        "correction": "Capacité du système à conserver des lymphocytes spécifiques permettant une réaction plus rapide lors d'un 2e contact."
      },
      {
        "num": "Question 8",
        "text": "Sur quel principe biologique la vaccination repose-t-elle ?",
        "correction": "L'injection d'antigènes inoffensifs pour stimuler la mémoire immunitaire sans provoquer la maladie."
      },
      {
        "num": "Question 9",
        "text": "Quelle est la différence fondamentale entre un vaccin et un traitement antibiotique ?",
        "correction": "Le vaccin est préventif et cible tous microbes; l'antibiotique est curatif et ne tue QUE les bactéries."
      },
      {
        "num": "Question 10",
        "text": "Pourquoi les antibiotiques sont-ils inefficaces contre les maladies virales comme la grippe ?",
        "correction": "Car les virus n'ont pas de structure bactérienne sur laquelle les antibiotiques agissent."
      }
    ]
  },
  {
    "id": "s-11",
    "subject": "svt",
    "chapter": "Chapitre 2 : Immunologie",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 131 : Système immunitaire, phagocytose et vaccination #2",
    "statement": "Analyse de la réaction inflammatoire, des lymphocytes B et T, des anticorps et du principe des vaccins.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Quels sont les 4 signes cliniques d'une réaction inflammatoire locale ?",
        "correction": "Rougeur, chaleur, gonflement (œdème) et douleur."
      },
      {
        "num": "Question 2",
        "text": "Quel type de leucocytes intervient lors de la réaction rapide appelée phagocytose ?",
        "correction": "Les phagocytes (ou granulocytes / macrophages)."
      },
      {
        "num": "Question 3",
        "text": "Décrire les 4 étapes de la phagocytose.",
        "correction": "Adhésion, absorption (ingestion), digestion du micro-organisme, rejet des déchets."
      },
      {
        "num": "Question 4",
        "text": "Qu'est-ce qu'un antigène ?",
        "correction": "Une molécule étrangère à l'organisme capable de déclencher une réaction immunitaire."
      },
      {
        "num": "Question 5",
        "text": "Quel est le rôle spécifique des Lymphocytes B (LB) ?",
        "correction": "Produire des anticorps spécifiques capables de neutraliser les antigènes."
      },
      {
        "num": "Question 6",
        "text": "Quel est le rôle spécifique des Lymphocytes T tueurs (LTc) ?",
        "correction": "Détruire par contact direct les cellules infectées par un virus."
      },
      {
        "num": "Question 7",
        "text": "Expliquer le principe de la \"mémoire immunitaire\".",
        "correction": "Capacité du système à conserver des lymphocytes spécifiques permettant une réaction plus rapide lors d'un 2e contact."
      },
      {
        "num": "Question 8",
        "text": "Sur quel principe biologique la vaccination repose-t-elle ?",
        "correction": "L'injection d'antigènes inoffensifs pour stimuler la mémoire immunitaire sans provoquer la maladie."
      },
      {
        "num": "Question 9",
        "text": "Quelle est la différence fondamentale entre un vaccin et un traitement antibiotique ?",
        "correction": "Le vaccin est préventif et cible tous microbes; l'antibiotique est curatif et ne tue QUE les bactéries."
      },
      {
        "num": "Question 10",
        "text": "Pourquoi les antibiotiques sont-ils inefficaces contre les maladies virales comme la grippe ?",
        "correction": "Car les virus n'ont pas de structure bactérienne sur laquelle les antibiotiques agissent."
      }
    ]
  },
  {
    "id": "s-12",
    "subject": "svt",
    "chapter": "Chapitre 2 : Immunologie",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 132 : Système immunitaire, phagocytose et vaccination #3",
    "statement": "Analyse de la réaction inflammatoire, des lymphocytes B et T, des anticorps et du principe des vaccins.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Quels sont les 4 signes cliniques d'une réaction inflammatoire locale ?",
        "correction": "Rougeur, chaleur, gonflement (œdème) et douleur."
      },
      {
        "num": "Question 2",
        "text": "Quel type de leucocytes intervient lors de la réaction rapide appelée phagocytose ?",
        "correction": "Les phagocytes (ou granulocytes / macrophages)."
      },
      {
        "num": "Question 3",
        "text": "Décrire les 4 étapes de la phagocytose.",
        "correction": "Adhésion, absorption (ingestion), digestion du micro-organisme, rejet des déchets."
      },
      {
        "num": "Question 4",
        "text": "Qu'est-ce qu'un antigène ?",
        "correction": "Une molécule étrangère à l'organisme capable de déclencher une réaction immunitaire."
      },
      {
        "num": "Question 5",
        "text": "Quel est le rôle spécifique des Lymphocytes B (LB) ?",
        "correction": "Produire des anticorps spécifiques capables de neutraliser les antigènes."
      },
      {
        "num": "Question 6",
        "text": "Quel est le rôle spécifique des Lymphocytes T tueurs (LTc) ?",
        "correction": "Détruire par contact direct les cellules infectées par un virus."
      },
      {
        "num": "Question 7",
        "text": "Expliquer le principe de la \"mémoire immunitaire\".",
        "correction": "Capacité du système à conserver des lymphocytes spécifiques permettant une réaction plus rapide lors d'un 2e contact."
      },
      {
        "num": "Question 8",
        "text": "Sur quel principe biologique la vaccination repose-t-elle ?",
        "correction": "L'injection d'antigènes inoffensifs pour stimuler la mémoire immunitaire sans provoquer la maladie."
      },
      {
        "num": "Question 9",
        "text": "Quelle est la différence fondamentale entre un vaccin et un traitement antibiotique ?",
        "correction": "Le vaccin est préventif et cible tous microbes; l'antibiotique est curatif et ne tue QUE les bactéries."
      },
      {
        "num": "Question 10",
        "text": "Pourquoi les antibiotiques sont-ils inefficaces contre les maladies virales comme la grippe ?",
        "correction": "Car les virus n'ont pas de structure bactérienne sur laquelle les antibiotiques agissent."
      }
    ]
  },
  {
    "id": "s-13",
    "subject": "svt",
    "chapter": "Chapitre 2 : Immunologie",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 133 : Système immunitaire, phagocytose et vaccination #4",
    "statement": "Analyse de la réaction inflammatoire, des lymphocytes B et T, des anticorps et du principe des vaccins.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Quels sont les 4 signes cliniques d'une réaction inflammatoire locale ?",
        "correction": "Rougeur, chaleur, gonflement (œdème) et douleur."
      },
      {
        "num": "Question 2",
        "text": "Quel type de leucocytes intervient lors de la réaction rapide appelée phagocytose ?",
        "correction": "Les phagocytes (ou granulocytes / macrophages)."
      },
      {
        "num": "Question 3",
        "text": "Décrire les 4 étapes de la phagocytose.",
        "correction": "Adhésion, absorption (ingestion), digestion du micro-organisme, rejet des déchets."
      },
      {
        "num": "Question 4",
        "text": "Qu'est-ce qu'un antigène ?",
        "correction": "Une molécule étrangère à l'organisme capable de déclencher une réaction immunitaire."
      },
      {
        "num": "Question 5",
        "text": "Quel est le rôle spécifique des Lymphocytes B (LB) ?",
        "correction": "Produire des anticorps spécifiques capables de neutraliser les antigènes."
      },
      {
        "num": "Question 6",
        "text": "Quel est le rôle spécifique des Lymphocytes T tueurs (LTc) ?",
        "correction": "Détruire par contact direct les cellules infectées par un virus."
      },
      {
        "num": "Question 7",
        "text": "Expliquer le principe de la \"mémoire immunitaire\".",
        "correction": "Capacité du système à conserver des lymphocytes spécifiques permettant une réaction plus rapide lors d'un 2e contact."
      },
      {
        "num": "Question 8",
        "text": "Sur quel principe biologique la vaccination repose-t-elle ?",
        "correction": "L'injection d'antigènes inoffensifs pour stimuler la mémoire immunitaire sans provoquer la maladie."
      },
      {
        "num": "Question 9",
        "text": "Quelle est la différence fondamentale entre un vaccin et un traitement antibiotique ?",
        "correction": "Le vaccin est préventif et cible tous microbes; l'antibiotique est curatif et ne tue QUE les bactéries."
      },
      {
        "num": "Question 10",
        "text": "Pourquoi les antibiotiques sont-ils inefficaces contre les maladies virales comme la grippe ?",
        "correction": "Car les virus n'ont pas de structure bactérienne sur laquelle les antibiotiques agissent."
      }
    ]
  },
  {
    "id": "s-14",
    "subject": "svt",
    "chapter": "Chapitre 2 : Immunologie",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 134 : Système immunitaire, phagocytose et vaccination #5",
    "statement": "Analyse de la réaction inflammatoire, des lymphocytes B et T, des anticorps et du principe des vaccins.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Quels sont les 4 signes cliniques d'une réaction inflammatoire locale ?",
        "correction": "Rougeur, chaleur, gonflement (œdème) et douleur."
      },
      {
        "num": "Question 2",
        "text": "Quel type de leucocytes intervient lors de la réaction rapide appelée phagocytose ?",
        "correction": "Les phagocytes (ou granulocytes / macrophages)."
      },
      {
        "num": "Question 3",
        "text": "Décrire les 4 étapes de la phagocytose.",
        "correction": "Adhésion, absorption (ingestion), digestion du micro-organisme, rejet des déchets."
      },
      {
        "num": "Question 4",
        "text": "Qu'est-ce qu'un antigène ?",
        "correction": "Une molécule étrangère à l'organisme capable de déclencher une réaction immunitaire."
      },
      {
        "num": "Question 5",
        "text": "Quel est le rôle spécifique des Lymphocytes B (LB) ?",
        "correction": "Produire des anticorps spécifiques capables de neutraliser les antigènes."
      },
      {
        "num": "Question 6",
        "text": "Quel est le rôle spécifique des Lymphocytes T tueurs (LTc) ?",
        "correction": "Détruire par contact direct les cellules infectées par un virus."
      },
      {
        "num": "Question 7",
        "text": "Expliquer le principe de la \"mémoire immunitaire\".",
        "correction": "Capacité du système à conserver des lymphocytes spécifiques permettant une réaction plus rapide lors d'un 2e contact."
      },
      {
        "num": "Question 8",
        "text": "Sur quel principe biologique la vaccination repose-t-elle ?",
        "correction": "L'injection d'antigènes inoffensifs pour stimuler la mémoire immunitaire sans provoquer la maladie."
      },
      {
        "num": "Question 9",
        "text": "Quelle est la différence fondamentale entre un vaccin et un traitement antibiotique ?",
        "correction": "Le vaccin est préventif et cible tous microbes; l'antibiotique est curatif et ne tue QUE les bactéries."
      },
      {
        "num": "Question 10",
        "text": "Pourquoi les antibiotiques sont-ils inefficaces contre les maladies virales comme la grippe ?",
        "correction": "Car les virus n'ont pas de structure bactérienne sur laquelle les antibiotiques agissent."
      }
    ]
  },
  {
    "id": "s-15",
    "subject": "svt",
    "chapter": "Chapitre 2 : Immunologie",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 135 : Système immunitaire, phagocytose et vaccination #6",
    "statement": "Analyse de la réaction inflammatoire, des lymphocytes B et T, des anticorps et du principe des vaccins.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Quels sont les 4 signes cliniques d'une réaction inflammatoire locale ?",
        "correction": "Rougeur, chaleur, gonflement (œdème) et douleur."
      },
      {
        "num": "Question 2",
        "text": "Quel type de leucocytes intervient lors de la réaction rapide appelée phagocytose ?",
        "correction": "Les phagocytes (ou granulocytes / macrophages)."
      },
      {
        "num": "Question 3",
        "text": "Décrire les 4 étapes de la phagocytose.",
        "correction": "Adhésion, absorption (ingestion), digestion du micro-organisme, rejet des déchets."
      },
      {
        "num": "Question 4",
        "text": "Qu'est-ce qu'un antigène ?",
        "correction": "Une molécule étrangère à l'organisme capable de déclencher une réaction immunitaire."
      },
      {
        "num": "Question 5",
        "text": "Quel est le rôle spécifique des Lymphocytes B (LB) ?",
        "correction": "Produire des anticorps spécifiques capables de neutraliser les antigènes."
      },
      {
        "num": "Question 6",
        "text": "Quel est le rôle spécifique des Lymphocytes T tueurs (LTc) ?",
        "correction": "Détruire par contact direct les cellules infectées par un virus."
      },
      {
        "num": "Question 7",
        "text": "Expliquer le principe de la \"mémoire immunitaire\".",
        "correction": "Capacité du système à conserver des lymphocytes spécifiques permettant une réaction plus rapide lors d'un 2e contact."
      },
      {
        "num": "Question 8",
        "text": "Sur quel principe biologique la vaccination repose-t-elle ?",
        "correction": "L'injection d'antigènes inoffensifs pour stimuler la mémoire immunitaire sans provoquer la maladie."
      },
      {
        "num": "Question 9",
        "text": "Quelle est la différence fondamentale entre un vaccin et un traitement antibiotique ?",
        "correction": "Le vaccin est préventif et cible tous microbes; l'antibiotique est curatif et ne tue QUE les bactéries."
      },
      {
        "num": "Question 10",
        "text": "Pourquoi les antibiotiques sont-ils inefficaces contre les maladies virales comme la grippe ?",
        "correction": "Car les virus n'ont pas de structure bactérienne sur laquelle les antibiotiques agissent."
      }
    ]
  },
  {
    "id": "s-16",
    "subject": "svt",
    "chapter": "Chapitre 2 : Immunologie",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 136 : Système immunitaire, phagocytose et vaccination #7",
    "statement": "Analyse de la réaction inflammatoire, des lymphocytes B et T, des anticorps et du principe des vaccins.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Quels sont les 4 signes cliniques d'une réaction inflammatoire locale ?",
        "correction": "Rougeur, chaleur, gonflement (œdème) et douleur."
      },
      {
        "num": "Question 2",
        "text": "Quel type de leucocytes intervient lors de la réaction rapide appelée phagocytose ?",
        "correction": "Les phagocytes (ou granulocytes / macrophages)."
      },
      {
        "num": "Question 3",
        "text": "Décrire les 4 étapes de la phagocytose.",
        "correction": "Adhésion, absorption (ingestion), digestion du micro-organisme, rejet des déchets."
      },
      {
        "num": "Question 4",
        "text": "Qu'est-ce qu'un antigène ?",
        "correction": "Une molécule étrangère à l'organisme capable de déclencher une réaction immunitaire."
      },
      {
        "num": "Question 5",
        "text": "Quel est le rôle spécifique des Lymphocytes B (LB) ?",
        "correction": "Produire des anticorps spécifiques capables de neutraliser les antigènes."
      },
      {
        "num": "Question 6",
        "text": "Quel est le rôle spécifique des Lymphocytes T tueurs (LTc) ?",
        "correction": "Détruire par contact direct les cellules infectées par un virus."
      },
      {
        "num": "Question 7",
        "text": "Expliquer le principe de la \"mémoire immunitaire\".",
        "correction": "Capacité du système à conserver des lymphocytes spécifiques permettant une réaction plus rapide lors d'un 2e contact."
      },
      {
        "num": "Question 8",
        "text": "Sur quel principe biologique la vaccination repose-t-elle ?",
        "correction": "L'injection d'antigènes inoffensifs pour stimuler la mémoire immunitaire sans provoquer la maladie."
      },
      {
        "num": "Question 9",
        "text": "Quelle est la différence fondamentale entre un vaccin et un traitement antibiotique ?",
        "correction": "Le vaccin est préventif et cible tous microbes; l'antibiotique est curatif et ne tue QUE les bactéries."
      },
      {
        "num": "Question 10",
        "text": "Pourquoi les antibiotiques sont-ils inefficaces contre les maladies virales comme la grippe ?",
        "correction": "Car les virus n'ont pas de structure bactérienne sur laquelle les antibiotiques agissent."
      }
    ]
  },
  {
    "id": "s-17",
    "subject": "svt",
    "chapter": "Chapitre 2 : Immunologie",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 137 : Système immunitaire, phagocytose et vaccination #8",
    "statement": "Analyse de la réaction inflammatoire, des lymphocytes B et T, des anticorps et du principe des vaccins.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Quels sont les 4 signes cliniques d'une réaction inflammatoire locale ?",
        "correction": "Rougeur, chaleur, gonflement (œdème) et douleur."
      },
      {
        "num": "Question 2",
        "text": "Quel type de leucocytes intervient lors de la réaction rapide appelée phagocytose ?",
        "correction": "Les phagocytes (ou granulocytes / macrophages)."
      },
      {
        "num": "Question 3",
        "text": "Décrire les 4 étapes de la phagocytose.",
        "correction": "Adhésion, absorption (ingestion), digestion du micro-organisme, rejet des déchets."
      },
      {
        "num": "Question 4",
        "text": "Qu'est-ce qu'un antigène ?",
        "correction": "Une molécule étrangère à l'organisme capable de déclencher une réaction immunitaire."
      },
      {
        "num": "Question 5",
        "text": "Quel est le rôle spécifique des Lymphocytes B (LB) ?",
        "correction": "Produire des anticorps spécifiques capables de neutraliser les antigènes."
      },
      {
        "num": "Question 6",
        "text": "Quel est le rôle spécifique des Lymphocytes T tueurs (LTc) ?",
        "correction": "Détruire par contact direct les cellules infectées par un virus."
      },
      {
        "num": "Question 7",
        "text": "Expliquer le principe de la \"mémoire immunitaire\".",
        "correction": "Capacité du système à conserver des lymphocytes spécifiques permettant une réaction plus rapide lors d'un 2e contact."
      },
      {
        "num": "Question 8",
        "text": "Sur quel principe biologique la vaccination repose-t-elle ?",
        "correction": "L'injection d'antigènes inoffensifs pour stimuler la mémoire immunitaire sans provoquer la maladie."
      },
      {
        "num": "Question 9",
        "text": "Quelle est la différence fondamentale entre un vaccin et un traitement antibiotique ?",
        "correction": "Le vaccin est préventif et cible tous microbes; l'antibiotique est curatif et ne tue QUE les bactéries."
      },
      {
        "num": "Question 10",
        "text": "Pourquoi les antibiotiques sont-ils inefficaces contre les maladies virales comme la grippe ?",
        "correction": "Car les virus n'ont pas de structure bactérienne sur laquelle les antibiotiques agissent."
      }
    ]
  },
  {
    "id": "s-18",
    "subject": "svt",
    "chapter": "Chapitre 2 : Immunologie",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 138 : Système immunitaire, phagocytose et vaccination #9",
    "statement": "Analyse de la réaction inflammatoire, des lymphocytes B et T, des anticorps et du principe des vaccins.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Quels sont les 4 signes cliniques d'une réaction inflammatoire locale ?",
        "correction": "Rougeur, chaleur, gonflement (œdème) et douleur."
      },
      {
        "num": "Question 2",
        "text": "Quel type de leucocytes intervient lors de la réaction rapide appelée phagocytose ?",
        "correction": "Les phagocytes (ou granulocytes / macrophages)."
      },
      {
        "num": "Question 3",
        "text": "Décrire les 4 étapes de la phagocytose.",
        "correction": "Adhésion, absorption (ingestion), digestion du micro-organisme, rejet des déchets."
      },
      {
        "num": "Question 4",
        "text": "Qu'est-ce qu'un antigène ?",
        "correction": "Une molécule étrangère à l'organisme capable de déclencher une réaction immunitaire."
      },
      {
        "num": "Question 5",
        "text": "Quel est le rôle spécifique des Lymphocytes B (LB) ?",
        "correction": "Produire des anticorps spécifiques capables de neutraliser les antigènes."
      },
      {
        "num": "Question 6",
        "text": "Quel est le rôle spécifique des Lymphocytes T tueurs (LTc) ?",
        "correction": "Détruire par contact direct les cellules infectées par un virus."
      },
      {
        "num": "Question 7",
        "text": "Expliquer le principe de la \"mémoire immunitaire\".",
        "correction": "Capacité du système à conserver des lymphocytes spécifiques permettant une réaction plus rapide lors d'un 2e contact."
      },
      {
        "num": "Question 8",
        "text": "Sur quel principe biologique la vaccination repose-t-elle ?",
        "correction": "L'injection d'antigènes inoffensifs pour stimuler la mémoire immunitaire sans provoquer la maladie."
      },
      {
        "num": "Question 9",
        "text": "Quelle est la différence fondamentale entre un vaccin et un traitement antibiotique ?",
        "correction": "Le vaccin est préventif et cible tous microbes; l'antibiotique est curatif et ne tue QUE les bactéries."
      },
      {
        "num": "Question 10",
        "text": "Pourquoi les antibiotiques sont-ils inefficaces contre les maladies virales comme la grippe ?",
        "correction": "Car les virus n'ont pas de structure bactérienne sur laquelle les antibiotiques agissent."
      }
    ]
  },
  {
    "id": "s-19",
    "subject": "svt",
    "chapter": "Chapitre 3 : Tectonique des plaques",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 139 : Dynamique lithosphérique, volcanisme et évolution des espèces #1",
    "statement": "Mouvements des plaques tectoniques, séismes, dorsales océaniques, subduction et sélection naturelle.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Qu'est-ce que la lithosphère par rapport à l'asthénosphère ?",
        "correction": "La lithosphère est la couche externe rigide qui flotte sur l'asthénosphère plus ductile."
      },
      {
        "num": "Question 2",
        "text": "Quel mouvement caractérise une dorsale océanique (divergence ou convergence) ?",
        "correction": "Un mouvement de divergence (écartement des plaques et création de croûte océanique)."
      },
      {
        "num": "Question 3",
        "text": "Qu'est-ce qu'une zone de subduction ?",
        "correction": "Zone où une plaque océanique plus dense plonge sous une autre plaque continentale ou océanique."
      },
      {
        "num": "Question 4",
        "text": "Quelle est l'origine des séismes en profondeur ?",
        "correction": "La rupture brutale de roches sous tension le long d'une faille, libérant de l'énergie."
      },
      {
        "num": "Question 5",
        "text": "Comment mesure-t-on l'intensité et l'énergie d'un séisme ?",
        "correction": "Par la magnitude sur l'échelle de Richter et les sismogrammes."
      },
      {
        "num": "Question 6",
        "text": "Distinguer le volcanisme effusif du volcanisme explosif.",
        "correction": "Effusif : laves fluides (volcans boucliers); Explosif : laves visqueuses et cendres (zones de subduction)."
      },
      {
        "num": "Question 7",
        "text": "Qu'est-ce qu'un fossile et comment permet-il de dater les roches ?",
        "correction": "Reste ou empreinte d'organisme conservé dans une roche sédimentaire."
      },
      {
        "num": "Question 8",
        "text": "Qu'appelle-t-on une \"crise biologique\" dans l'histoire de la Terre ?",
        "correction": "Extinction massive et rapide d'un grand nombre d'espèces à l'échelle de la planète."
      },
      {
        "num": "Question 9",
        "text": "Expliquer la théorie de la sélection naturelle formulée par Charles Darwin.",
        "correction": "Les individus possédant des caractères avantageux survivent mieux et transmettent ces caractères à leur descendance."
      },
      {
        "num": "Question 10",
        "text": "Comment lit-on un arbre phylogénétique ?",
        "correction": "Chaque nœud représente un ancêtre commun partagé possédant des caractères nouveaux (innovations évolutives)."
      }
    ]
  },
  {
    "id": "s-20",
    "subject": "svt",
    "chapter": "Chapitre 3 : Tectonique des plaques",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 140 : Dynamique lithosphérique, volcanisme et évolution des espèces #2",
    "statement": "Mouvements des plaques tectoniques, séismes, dorsales océaniques, subduction et sélection naturelle.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Qu'est-ce que la lithosphère par rapport à l'asthénosphère ?",
        "correction": "La lithosphère est la couche externe rigide qui flotte sur l'asthénosphère plus ductile."
      },
      {
        "num": "Question 2",
        "text": "Quel mouvement caractérise une dorsale océanique (divergence ou convergence) ?",
        "correction": "Un mouvement de divergence (écartement des plaques et création de croûte océanique)."
      },
      {
        "num": "Question 3",
        "text": "Qu'est-ce qu'une zone de subduction ?",
        "correction": "Zone où une plaque océanique plus dense plonge sous une autre plaque continentale ou océanique."
      },
      {
        "num": "Question 4",
        "text": "Quelle est l'origine des séismes en profondeur ?",
        "correction": "La rupture brutale de roches sous tension le long d'une faille, libérant de l'énergie."
      },
      {
        "num": "Question 5",
        "text": "Comment mesure-t-on l'intensité et l'énergie d'un séisme ?",
        "correction": "Par la magnitude sur l'échelle de Richter et les sismogrammes."
      },
      {
        "num": "Question 6",
        "text": "Distinguer le volcanisme effusif du volcanisme explosif.",
        "correction": "Effusif : laves fluides (volcans boucliers); Explosif : laves visqueuses et cendres (zones de subduction)."
      },
      {
        "num": "Question 7",
        "text": "Qu'est-ce qu'un fossile et comment permet-il de dater les roches ?",
        "correction": "Reste ou empreinte d'organisme conservé dans une roche sédimentaire."
      },
      {
        "num": "Question 8",
        "text": "Qu'appelle-t-on une \"crise biologique\" dans l'histoire de la Terre ?",
        "correction": "Extinction massive et rapide d'un grand nombre d'espèces à l'échelle de la planète."
      },
      {
        "num": "Question 9",
        "text": "Expliquer la théorie de la sélection naturelle formulée par Charles Darwin.",
        "correction": "Les individus possédant des caractères avantageux survivent mieux et transmettent ces caractères à leur descendance."
      },
      {
        "num": "Question 10",
        "text": "Comment lit-on un arbre phylogénétique ?",
        "correction": "Chaque nœud représente un ancêtre commun partagé possédant des caractères nouveaux (innovations évolutives)."
      }
    ]
  },
  {
    "id": "s-21",
    "subject": "svt",
    "chapter": "Chapitre 3 : Tectonique des plaques",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 141 : Dynamique lithosphérique, volcanisme et évolution des espèces #3",
    "statement": "Mouvements des plaques tectoniques, séismes, dorsales océaniques, subduction et sélection naturelle.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Qu'est-ce que la lithosphère par rapport à l'asthénosphère ?",
        "correction": "La lithosphère est la couche externe rigide qui flotte sur l'asthénosphère plus ductile."
      },
      {
        "num": "Question 2",
        "text": "Quel mouvement caractérise une dorsale océanique (divergence ou convergence) ?",
        "correction": "Un mouvement de divergence (écartement des plaques et création de croûte océanique)."
      },
      {
        "num": "Question 3",
        "text": "Qu'est-ce qu'une zone de subduction ?",
        "correction": "Zone où une plaque océanique plus dense plonge sous une autre plaque continentale ou océanique."
      },
      {
        "num": "Question 4",
        "text": "Quelle est l'origine des séismes en profondeur ?",
        "correction": "La rupture brutale de roches sous tension le long d'une faille, libérant de l'énergie."
      },
      {
        "num": "Question 5",
        "text": "Comment mesure-t-on l'intensité et l'énergie d'un séisme ?",
        "correction": "Par la magnitude sur l'échelle de Richter et les sismogrammes."
      },
      {
        "num": "Question 6",
        "text": "Distinguer le volcanisme effusif du volcanisme explosif.",
        "correction": "Effusif : laves fluides (volcans boucliers); Explosif : laves visqueuses et cendres (zones de subduction)."
      },
      {
        "num": "Question 7",
        "text": "Qu'est-ce qu'un fossile et comment permet-il de dater les roches ?",
        "correction": "Reste ou empreinte d'organisme conservé dans une roche sédimentaire."
      },
      {
        "num": "Question 8",
        "text": "Qu'appelle-t-on une \"crise biologique\" dans l'histoire de la Terre ?",
        "correction": "Extinction massive et rapide d'un grand nombre d'espèces à l'échelle de la planète."
      },
      {
        "num": "Question 9",
        "text": "Expliquer la théorie de la sélection naturelle formulée par Charles Darwin.",
        "correction": "Les individus possédant des caractères avantageux survivent mieux et transmettent ces caractères à leur descendance."
      },
      {
        "num": "Question 10",
        "text": "Comment lit-on un arbre phylogénétique ?",
        "correction": "Chaque nœud représente un ancêtre commun partagé possédant des caractères nouveaux (innovations évolutives)."
      }
    ]
  },
  {
    "id": "s-22",
    "subject": "svt",
    "chapter": "Chapitre 3 : Tectonique des plaques",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 142 : Dynamique lithosphérique, volcanisme et évolution des espèces #4",
    "statement": "Mouvements des plaques tectoniques, séismes, dorsales océaniques, subduction et sélection naturelle.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Qu'est-ce que la lithosphère par rapport à l'asthénosphère ?",
        "correction": "La lithosphère est la couche externe rigide qui flotte sur l'asthénosphère plus ductile."
      },
      {
        "num": "Question 2",
        "text": "Quel mouvement caractérise une dorsale océanique (divergence ou convergence) ?",
        "correction": "Un mouvement de divergence (écartement des plaques et création de croûte océanique)."
      },
      {
        "num": "Question 3",
        "text": "Qu'est-ce qu'une zone de subduction ?",
        "correction": "Zone où une plaque océanique plus dense plonge sous une autre plaque continentale ou océanique."
      },
      {
        "num": "Question 4",
        "text": "Quelle est l'origine des séismes en profondeur ?",
        "correction": "La rupture brutale de roches sous tension le long d'une faille, libérant de l'énergie."
      },
      {
        "num": "Question 5",
        "text": "Comment mesure-t-on l'intensité et l'énergie d'un séisme ?",
        "correction": "Par la magnitude sur l'échelle de Richter et les sismogrammes."
      },
      {
        "num": "Question 6",
        "text": "Distinguer le volcanisme effusif du volcanisme explosif.",
        "correction": "Effusif : laves fluides (volcans boucliers); Explosif : laves visqueuses et cendres (zones de subduction)."
      },
      {
        "num": "Question 7",
        "text": "Qu'est-ce qu'un fossile et comment permet-il de dater les roches ?",
        "correction": "Reste ou empreinte d'organisme conservé dans une roche sédimentaire."
      },
      {
        "num": "Question 8",
        "text": "Qu'appelle-t-on une \"crise biologique\" dans l'histoire de la Terre ?",
        "correction": "Extinction massive et rapide d'un grand nombre d'espèces à l'échelle de la planète."
      },
      {
        "num": "Question 9",
        "text": "Expliquer la théorie de la sélection naturelle formulée par Charles Darwin.",
        "correction": "Les individus possédant des caractères avantageux survivent mieux et transmettent ces caractères à leur descendance."
      },
      {
        "num": "Question 10",
        "text": "Comment lit-on un arbre phylogénétique ?",
        "correction": "Chaque nœud représente un ancêtre commun partagé possédant des caractères nouveaux (innovations évolutives)."
      }
    ]
  },
  {
    "id": "s-23",
    "subject": "svt",
    "chapter": "Chapitre 3 : Tectonique des plaques",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 143 : Dynamique lithosphérique, volcanisme et évolution des espèces #5",
    "statement": "Mouvements des plaques tectoniques, séismes, dorsales océaniques, subduction et sélection naturelle.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Qu'est-ce que la lithosphère par rapport à l'asthénosphère ?",
        "correction": "La lithosphère est la couche externe rigide qui flotte sur l'asthénosphère plus ductile."
      },
      {
        "num": "Question 2",
        "text": "Quel mouvement caractérise une dorsale océanique (divergence ou convergence) ?",
        "correction": "Un mouvement de divergence (écartement des plaques et création de croûte océanique)."
      },
      {
        "num": "Question 3",
        "text": "Qu'est-ce qu'une zone de subduction ?",
        "correction": "Zone où une plaque océanique plus dense plonge sous une autre plaque continentale ou océanique."
      },
      {
        "num": "Question 4",
        "text": "Quelle est l'origine des séismes en profondeur ?",
        "correction": "La rupture brutale de roches sous tension le long d'une faille, libérant de l'énergie."
      },
      {
        "num": "Question 5",
        "text": "Comment mesure-t-on l'intensité et l'énergie d'un séisme ?",
        "correction": "Par la magnitude sur l'échelle de Richter et les sismogrammes."
      },
      {
        "num": "Question 6",
        "text": "Distinguer le volcanisme effusif du volcanisme explosif.",
        "correction": "Effusif : laves fluides (volcans boucliers); Explosif : laves visqueuses et cendres (zones de subduction)."
      },
      {
        "num": "Question 7",
        "text": "Qu'est-ce qu'un fossile et comment permet-il de dater les roches ?",
        "correction": "Reste ou empreinte d'organisme conservé dans une roche sédimentaire."
      },
      {
        "num": "Question 8",
        "text": "Qu'appelle-t-on une \"crise biologique\" dans l'histoire de la Terre ?",
        "correction": "Extinction massive et rapide d'un grand nombre d'espèces à l'échelle de la planète."
      },
      {
        "num": "Question 9",
        "text": "Expliquer la théorie de la sélection naturelle formulée par Charles Darwin.",
        "correction": "Les individus possédant des caractères avantageux survivent mieux et transmettent ces caractères à leur descendance."
      },
      {
        "num": "Question 10",
        "text": "Comment lit-on un arbre phylogénétique ?",
        "correction": "Chaque nœud représente un ancêtre commun partagé possédant des caractères nouveaux (innovations évolutives)."
      }
    ]
  },
  {
    "id": "s-24",
    "subject": "svt",
    "chapter": "Chapitre 3 : Tectonique des plaques",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 144 : Dynamique lithosphérique, volcanisme et évolution des espèces #6",
    "statement": "Mouvements des plaques tectoniques, séismes, dorsales océaniques, subduction et sélection naturelle.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Qu'est-ce que la lithosphère par rapport à l'asthénosphère ?",
        "correction": "La lithosphère est la couche externe rigide qui flotte sur l'asthénosphère plus ductile."
      },
      {
        "num": "Question 2",
        "text": "Quel mouvement caractérise une dorsale océanique (divergence ou convergence) ?",
        "correction": "Un mouvement de divergence (écartement des plaques et création de croûte océanique)."
      },
      {
        "num": "Question 3",
        "text": "Qu'est-ce qu'une zone de subduction ?",
        "correction": "Zone où une plaque océanique plus dense plonge sous une autre plaque continentale ou océanique."
      },
      {
        "num": "Question 4",
        "text": "Quelle est l'origine des séismes en profondeur ?",
        "correction": "La rupture brutale de roches sous tension le long d'une faille, libérant de l'énergie."
      },
      {
        "num": "Question 5",
        "text": "Comment mesure-t-on l'intensité et l'énergie d'un séisme ?",
        "correction": "Par la magnitude sur l'échelle de Richter et les sismogrammes."
      },
      {
        "num": "Question 6",
        "text": "Distinguer le volcanisme effusif du volcanisme explosif.",
        "correction": "Effusif : laves fluides (volcans boucliers); Explosif : laves visqueuses et cendres (zones de subduction)."
      },
      {
        "num": "Question 7",
        "text": "Qu'est-ce qu'un fossile et comment permet-il de dater les roches ?",
        "correction": "Reste ou empreinte d'organisme conservé dans une roche sédimentaire."
      },
      {
        "num": "Question 8",
        "text": "Qu'appelle-t-on une \"crise biologique\" dans l'histoire de la Terre ?",
        "correction": "Extinction massive et rapide d'un grand nombre d'espèces à l'échelle de la planète."
      },
      {
        "num": "Question 9",
        "text": "Expliquer la théorie de la sélection naturelle formulée par Charles Darwin.",
        "correction": "Les individus possédant des caractères avantageux survivent mieux et transmettent ces caractères à leur descendance."
      },
      {
        "num": "Question 10",
        "text": "Comment lit-on un arbre phylogénétique ?",
        "correction": "Chaque nœud représente un ancêtre commun partagé possédant des caractères nouveaux (innovations évolutives)."
      }
    ]
  },
  {
    "id": "s-25",
    "subject": "svt",
    "chapter": "Chapitre 3 : Tectonique des plaques",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 145 : Dynamique lithosphérique, volcanisme et évolution des espèces #7",
    "statement": "Mouvements des plaques tectoniques, séismes, dorsales océaniques, subduction et sélection naturelle.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Qu'est-ce que la lithosphère par rapport à l'asthénosphère ?",
        "correction": "La lithosphère est la couche externe rigide qui flotte sur l'asthénosphère plus ductile."
      },
      {
        "num": "Question 2",
        "text": "Quel mouvement caractérise une dorsale océanique (divergence ou convergence) ?",
        "correction": "Un mouvement de divergence (écartement des plaques et création de croûte océanique)."
      },
      {
        "num": "Question 3",
        "text": "Qu'est-ce qu'une zone de subduction ?",
        "correction": "Zone où une plaque océanique plus dense plonge sous une autre plaque continentale ou océanique."
      },
      {
        "num": "Question 4",
        "text": "Quelle est l'origine des séismes en profondeur ?",
        "correction": "La rupture brutale de roches sous tension le long d'une faille, libérant de l'énergie."
      },
      {
        "num": "Question 5",
        "text": "Comment mesure-t-on l'intensité et l'énergie d'un séisme ?",
        "correction": "Par la magnitude sur l'échelle de Richter et les sismogrammes."
      },
      {
        "num": "Question 6",
        "text": "Distinguer le volcanisme effusif du volcanisme explosif.",
        "correction": "Effusif : laves fluides (volcans boucliers); Explosif : laves visqueuses et cendres (zones de subduction)."
      },
      {
        "num": "Question 7",
        "text": "Qu'est-ce qu'un fossile et comment permet-il de dater les roches ?",
        "correction": "Reste ou empreinte d'organisme conservé dans une roche sédimentaire."
      },
      {
        "num": "Question 8",
        "text": "Qu'appelle-t-on une \"crise biologique\" dans l'histoire de la Terre ?",
        "correction": "Extinction massive et rapide d'un grand nombre d'espèces à l'échelle de la planète."
      },
      {
        "num": "Question 9",
        "text": "Expliquer la théorie de la sélection naturelle formulée par Charles Darwin.",
        "correction": "Les individus possédant des caractères avantageux survivent mieux et transmettent ces caractères à leur descendance."
      },
      {
        "num": "Question 10",
        "text": "Comment lit-on un arbre phylogénétique ?",
        "correction": "Chaque nœud représente un ancêtre commun partagé possédant des caractères nouveaux (innovations évolutives)."
      }
    ]
  },
  {
    "id": "s-26",
    "subject": "svt",
    "chapter": "Chapitre 3 : Tectonique des plaques",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 146 : Dynamique lithosphérique, volcanisme et évolution des espèces #8",
    "statement": "Mouvements des plaques tectoniques, séismes, dorsales océaniques, subduction et sélection naturelle.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Qu'est-ce que la lithosphère par rapport à l'asthénosphère ?",
        "correction": "La lithosphère est la couche externe rigide qui flotte sur l'asthénosphère plus ductile."
      },
      {
        "num": "Question 2",
        "text": "Quel mouvement caractérise une dorsale océanique (divergence ou convergence) ?",
        "correction": "Un mouvement de divergence (écartement des plaques et création de croûte océanique)."
      },
      {
        "num": "Question 3",
        "text": "Qu'est-ce qu'une zone de subduction ?",
        "correction": "Zone où une plaque océanique plus dense plonge sous une autre plaque continentale ou océanique."
      },
      {
        "num": "Question 4",
        "text": "Quelle est l'origine des séismes en profondeur ?",
        "correction": "La rupture brutale de roches sous tension le long d'une faille, libérant de l'énergie."
      },
      {
        "num": "Question 5",
        "text": "Comment mesure-t-on l'intensité et l'énergie d'un séisme ?",
        "correction": "Par la magnitude sur l'échelle de Richter et les sismogrammes."
      },
      {
        "num": "Question 6",
        "text": "Distinguer le volcanisme effusif du volcanisme explosif.",
        "correction": "Effusif : laves fluides (volcans boucliers); Explosif : laves visqueuses et cendres (zones de subduction)."
      },
      {
        "num": "Question 7",
        "text": "Qu'est-ce qu'un fossile et comment permet-il de dater les roches ?",
        "correction": "Reste ou empreinte d'organisme conservé dans une roche sédimentaire."
      },
      {
        "num": "Question 8",
        "text": "Qu'appelle-t-on une \"crise biologique\" dans l'histoire de la Terre ?",
        "correction": "Extinction massive et rapide d'un grand nombre d'espèces à l'échelle de la planète."
      },
      {
        "num": "Question 9",
        "text": "Expliquer la théorie de la sélection naturelle formulée par Charles Darwin.",
        "correction": "Les individus possédant des caractères avantageux survivent mieux et transmettent ces caractères à leur descendance."
      },
      {
        "num": "Question 10",
        "text": "Comment lit-on un arbre phylogénétique ?",
        "correction": "Chaque nœud représente un ancêtre commun partagé possédant des caractères nouveaux (innovations évolutives)."
      }
    ]
  },
  {
    "id": "s-27",
    "subject": "svt",
    "chapter": "Chapitre 3 : Tectonique des plaques",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 147 : Dynamique lithosphérique, volcanisme et évolution des espèces #9",
    "statement": "Mouvements des plaques tectoniques, séismes, dorsales océaniques, subduction et sélection naturelle.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Qu'est-ce que la lithosphère par rapport à l'asthénosphère ?",
        "correction": "La lithosphère est la couche externe rigide qui flotte sur l'asthénosphère plus ductile."
      },
      {
        "num": "Question 2",
        "text": "Quel mouvement caractérise une dorsale océanique (divergence ou convergence) ?",
        "correction": "Un mouvement de divergence (écartement des plaques et création de croûte océanique)."
      },
      {
        "num": "Question 3",
        "text": "Qu'est-ce qu'une zone de subduction ?",
        "correction": "Zone où une plaque océanique plus dense plonge sous une autre plaque continentale ou océanique."
      },
      {
        "num": "Question 4",
        "text": "Quelle est l'origine des séismes en profondeur ?",
        "correction": "La rupture brutale de roches sous tension le long d'une faille, libérant de l'énergie."
      },
      {
        "num": "Question 5",
        "text": "Comment mesure-t-on l'intensité et l'énergie d'un séisme ?",
        "correction": "Par la magnitude sur l'échelle de Richter et les sismogrammes."
      },
      {
        "num": "Question 6",
        "text": "Distinguer le volcanisme effusif du volcanisme explosif.",
        "correction": "Effusif : laves fluides (volcans boucliers); Explosif : laves visqueuses et cendres (zones de subduction)."
      },
      {
        "num": "Question 7",
        "text": "Qu'est-ce qu'un fossile et comment permet-il de dater les roches ?",
        "correction": "Reste ou empreinte d'organisme conservé dans une roche sédimentaire."
      },
      {
        "num": "Question 8",
        "text": "Qu'appelle-t-on une \"crise biologique\" dans l'histoire de la Terre ?",
        "correction": "Extinction massive et rapide d'un grand nombre d'espèces à l'échelle de la planète."
      },
      {
        "num": "Question 9",
        "text": "Expliquer la théorie de la sélection naturelle formulée par Charles Darwin.",
        "correction": "Les individus possédant des caractères avantageux survivent mieux et transmettent ces caractères à leur descendance."
      },
      {
        "num": "Question 10",
        "text": "Comment lit-on un arbre phylogénétique ?",
        "correction": "Chaque nœud représente un ancêtre commun partagé possédant des caractères nouveaux (innovations évolutives)."
      }
    ]
  },
  {
    "id": "s-28",
    "subject": "svt",
    "chapter": "Chapitre 3 : Tectonique des plaques",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 148 : Dynamique lithosphérique, volcanisme et évolution des espèces #10",
    "statement": "Mouvements des plaques tectoniques, séismes, dorsales océaniques, subduction et sélection naturelle.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Qu'est-ce que la lithosphère par rapport à l'asthénosphère ?",
        "correction": "La lithosphère est la couche externe rigide qui flotte sur l'asthénosphère plus ductile."
      },
      {
        "num": "Question 2",
        "text": "Quel mouvement caractérise une dorsale océanique (divergence ou convergence) ?",
        "correction": "Un mouvement de divergence (écartement des plaques et création de croûte océanique)."
      },
      {
        "num": "Question 3",
        "text": "Qu'est-ce qu'une zone de subduction ?",
        "correction": "Zone où une plaque océanique plus dense plonge sous une autre plaque continentale ou océanique."
      },
      {
        "num": "Question 4",
        "text": "Quelle est l'origine des séismes en profondeur ?",
        "correction": "La rupture brutale de roches sous tension le long d'une faille, libérant de l'énergie."
      },
      {
        "num": "Question 5",
        "text": "Comment mesure-t-on l'intensité et l'énergie d'un séisme ?",
        "correction": "Par la magnitude sur l'échelle de Richter et les sismogrammes."
      },
      {
        "num": "Question 6",
        "text": "Distinguer le volcanisme effusif du volcanisme explosif.",
        "correction": "Effusif : laves fluides (volcans boucliers); Explosif : laves visqueuses et cendres (zones de subduction)."
      },
      {
        "num": "Question 7",
        "text": "Qu'est-ce qu'un fossile et comment permet-il de dater les roches ?",
        "correction": "Reste ou empreinte d'organisme conservé dans une roche sédimentaire."
      },
      {
        "num": "Question 8",
        "text": "Qu'appelle-t-on une \"crise biologique\" dans l'histoire de la Terre ?",
        "correction": "Extinction massive et rapide d'un grand nombre d'espèces à l'échelle de la planète."
      },
      {
        "num": "Question 9",
        "text": "Expliquer la théorie de la sélection naturelle formulée par Charles Darwin.",
        "correction": "Les individus possédant des caractères avantageux survivent mieux et transmettent ces caractères à leur descendance."
      },
      {
        "num": "Question 10",
        "text": "Comment lit-on un arbre phylogénétique ?",
        "correction": "Chaque nœud représente un ancêtre commun partagé possédant des caractères nouveaux (innovations évolutives)."
      }
    ]
  },
  {
    "id": "pc-1",
    "subject": "physique-chimie",
    "chapter": "Chapitre 1 : Atomes & Ions",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 149 : Structure atomique, ions, pH et réactions acido-basiques #1",
    "statement": "Étude de la composition des atomes, des formules des ions ($H^+, OH^-, Cu^{2+}, Cl^-$) et de la mesure du pH.",
    "questions": [
      {
        "num": "Question 1",
        "text": "De quelles particules un atome est-il constitué ?",
        "correction": "D'un noyau central (protons + neutrons) et d'électrons qui tournent autour."
      },
      {
        "num": "Question 2",
        "text": "Quelles sont les charges électriques respectives des protons, neutrons et électrons ?",
        "correction": "Protons : charge positive (+e), Neutrons : neutres (0), Électrons : charge négative (-e)."
      },
      {
        "num": "Question 3",
        "text": "Pourquoi dit-on qu'un atome est électriquement neutre ?",
        "correction": "Parce qu'il possède exactement autant de protons positifs que d'électrons négatifs."
      },
      {
        "num": "Question 4",
        "text": "Qu'est-ce qu'un ion positif (cation) et comment se forme-t-il ?",
        "correction": "C'est un atome qui a PERDU un ou plusieurs électrons (ex: Na⁺, Cu²⁺)."
      },
      {
        "num": "Question 5",
        "text": "Qu'est-ce qu'un ion négatif (anion) et comment se forme-t-il ?",
        "correction": "C'est un atome qui a GAGNÉ un ou plusieurs électrons (ex: Cl⁻, HO⁻)."
      },
      {
        "num": "Question 6",
        "text": "Quelle est la plage de valeurs de l'échelle de pH ?",
        "correction": "De 0 à 14."
      },
      {
        "num": "Question 7",
        "text": "À quoi correspond une solution neutre, acide ou basique en fonction du pH ?",
        "correction": "pH = 7 : neutre; pH < 7 : acide (excès d'ions H⁺); pH > 7 : basique (excès d'ions HO⁻)."
      },
      {
        "num": "Question 8",
        "text": "Que se passe-t-il pour le pH d'une solution acide lorsqu'on lui ajoute de l'eau (dilution) ?",
        "correction": "Le pH augmente et se rapproche de 7 sans jamais le dépasser."
      },
      {
        "num": "Question 9",
        "text": "Quel réactif permet de mettre en évidence la présence d'ions chlorure Cl⁻ ?",
        "correction": "Le nitrate d'argent (formation d'un précipité blanc qui noircit à la lumière)."
      },
      {
        "num": "Question 10",
        "text": "Quel gaz détonant s'échappe lors de la réaction de l'acide chlorhydrique sur le fer ?",
        "correction": "Le dihydrogène (H₂), identifié par une détonation (\"pop\") près d'une flamme."
      }
    ]
  },
  {
    "id": "pc-2",
    "subject": "physique-chimie",
    "chapter": "Chapitre 1 : Atomes & Ions",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 150 : Structure atomique, ions, pH et réactions acido-basiques #2",
    "statement": "Étude de la composition des atomes, des formules des ions ($H^+, OH^-, Cu^{2+}, Cl^-$) et de la mesure du pH.",
    "questions": [
      {
        "num": "Question 1",
        "text": "De quelles particules un atome est-il constitué ?",
        "correction": "D'un noyau central (protons + neutrons) et d'électrons qui tournent autour."
      },
      {
        "num": "Question 2",
        "text": "Quelles sont les charges électriques respectives des protons, neutrons et électrons ?",
        "correction": "Protons : charge positive (+e), Neutrons : neutres (0), Électrons : charge négative (-e)."
      },
      {
        "num": "Question 3",
        "text": "Pourquoi dit-on qu'un atome est électriquement neutre ?",
        "correction": "Parce qu'il possède exactement autant de protons positifs que d'électrons négatifs."
      },
      {
        "num": "Question 4",
        "text": "Qu'est-ce qu'un ion positif (cation) et comment se forme-t-il ?",
        "correction": "C'est un atome qui a PERDU un ou plusieurs électrons (ex: Na⁺, Cu²⁺)."
      },
      {
        "num": "Question 5",
        "text": "Qu'est-ce qu'un ion négatif (anion) et comment se forme-t-il ?",
        "correction": "C'est un atome qui a GAGNÉ un ou plusieurs électrons (ex: Cl⁻, HO⁻)."
      },
      {
        "num": "Question 6",
        "text": "Quelle est la plage de valeurs de l'échelle de pH ?",
        "correction": "De 0 à 14."
      },
      {
        "num": "Question 7",
        "text": "À quoi correspond une solution neutre, acide ou basique en fonction du pH ?",
        "correction": "pH = 7 : neutre; pH < 7 : acide (excès d'ions H⁺); pH > 7 : basique (excès d'ions HO⁻)."
      },
      {
        "num": "Question 8",
        "text": "Que se passe-t-il pour le pH d'une solution acide lorsqu'on lui ajoute de l'eau (dilution) ?",
        "correction": "Le pH augmente et se rapproche de 7 sans jamais le dépasser."
      },
      {
        "num": "Question 9",
        "text": "Quel réactif permet de mettre en évidence la présence d'ions chlorure Cl⁻ ?",
        "correction": "Le nitrate d'argent (formation d'un précipité blanc qui noircit à la lumière)."
      },
      {
        "num": "Question 10",
        "text": "Quel gaz détonant s'échappe lors de la réaction de l'acide chlorhydrique sur le fer ?",
        "correction": "Le dihydrogène (H₂), identifié par une détonation (\"pop\") près d'une flamme."
      }
    ]
  },
  {
    "id": "pc-3",
    "subject": "physique-chimie",
    "chapter": "Chapitre 1 : Atomes & Ions",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 151 : Structure atomique, ions, pH et réactions acido-basiques #3",
    "statement": "Étude de la composition des atomes, des formules des ions ($H^+, OH^-, Cu^{2+}, Cl^-$) et de la mesure du pH.",
    "questions": [
      {
        "num": "Question 1",
        "text": "De quelles particules un atome est-il constitué ?",
        "correction": "D'un noyau central (protons + neutrons) et d'électrons qui tournent autour."
      },
      {
        "num": "Question 2",
        "text": "Quelles sont les charges électriques respectives des protons, neutrons et électrons ?",
        "correction": "Protons : charge positive (+e), Neutrons : neutres (0), Électrons : charge négative (-e)."
      },
      {
        "num": "Question 3",
        "text": "Pourquoi dit-on qu'un atome est électriquement neutre ?",
        "correction": "Parce qu'il possède exactement autant de protons positifs que d'électrons négatifs."
      },
      {
        "num": "Question 4",
        "text": "Qu'est-ce qu'un ion positif (cation) et comment se forme-t-il ?",
        "correction": "C'est un atome qui a PERDU un ou plusieurs électrons (ex: Na⁺, Cu²⁺)."
      },
      {
        "num": "Question 5",
        "text": "Qu'est-ce qu'un ion négatif (anion) et comment se forme-t-il ?",
        "correction": "C'est un atome qui a GAGNÉ un ou plusieurs électrons (ex: Cl⁻, HO⁻)."
      },
      {
        "num": "Question 6",
        "text": "Quelle est la plage de valeurs de l'échelle de pH ?",
        "correction": "De 0 à 14."
      },
      {
        "num": "Question 7",
        "text": "À quoi correspond une solution neutre, acide ou basique en fonction du pH ?",
        "correction": "pH = 7 : neutre; pH < 7 : acide (excès d'ions H⁺); pH > 7 : basique (excès d'ions HO⁻)."
      },
      {
        "num": "Question 8",
        "text": "Que se passe-t-il pour le pH d'une solution acide lorsqu'on lui ajoute de l'eau (dilution) ?",
        "correction": "Le pH augmente et se rapproche de 7 sans jamais le dépasser."
      },
      {
        "num": "Question 9",
        "text": "Quel réactif permet de mettre en évidence la présence d'ions chlorure Cl⁻ ?",
        "correction": "Le nitrate d'argent (formation d'un précipité blanc qui noircit à la lumière)."
      },
      {
        "num": "Question 10",
        "text": "Quel gaz détonant s'échappe lors de la réaction de l'acide chlorhydrique sur le fer ?",
        "correction": "Le dihydrogène (H₂), identifié par une détonation (\"pop\") près d'une flamme."
      }
    ]
  },
  {
    "id": "pc-4",
    "subject": "physique-chimie",
    "chapter": "Chapitre 1 : Atomes & Ions",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 152 : Structure atomique, ions, pH et réactions acido-basiques #4",
    "statement": "Étude de la composition des atomes, des formules des ions ($H^+, OH^-, Cu^{2+}, Cl^-$) et de la mesure du pH.",
    "questions": [
      {
        "num": "Question 1",
        "text": "De quelles particules un atome est-il constitué ?",
        "correction": "D'un noyau central (protons + neutrons) et d'électrons qui tournent autour."
      },
      {
        "num": "Question 2",
        "text": "Quelles sont les charges électriques respectives des protons, neutrons et électrons ?",
        "correction": "Protons : charge positive (+e), Neutrons : neutres (0), Électrons : charge négative (-e)."
      },
      {
        "num": "Question 3",
        "text": "Pourquoi dit-on qu'un atome est électriquement neutre ?",
        "correction": "Parce qu'il possède exactement autant de protons positifs que d'électrons négatifs."
      },
      {
        "num": "Question 4",
        "text": "Qu'est-ce qu'un ion positif (cation) et comment se forme-t-il ?",
        "correction": "C'est un atome qui a PERDU un ou plusieurs électrons (ex: Na⁺, Cu²⁺)."
      },
      {
        "num": "Question 5",
        "text": "Qu'est-ce qu'un ion négatif (anion) et comment se forme-t-il ?",
        "correction": "C'est un atome qui a GAGNÉ un ou plusieurs électrons (ex: Cl⁻, HO⁻)."
      },
      {
        "num": "Question 6",
        "text": "Quelle est la plage de valeurs de l'échelle de pH ?",
        "correction": "De 0 à 14."
      },
      {
        "num": "Question 7",
        "text": "À quoi correspond une solution neutre, acide ou basique en fonction du pH ?",
        "correction": "pH = 7 : neutre; pH < 7 : acide (excès d'ions H⁺); pH > 7 : basique (excès d'ions HO⁻)."
      },
      {
        "num": "Question 8",
        "text": "Que se passe-t-il pour le pH d'une solution acide lorsqu'on lui ajoute de l'eau (dilution) ?",
        "correction": "Le pH augmente et se rapproche de 7 sans jamais le dépasser."
      },
      {
        "num": "Question 9",
        "text": "Quel réactif permet de mettre en évidence la présence d'ions chlorure Cl⁻ ?",
        "correction": "Le nitrate d'argent (formation d'un précipité blanc qui noircit à la lumière)."
      },
      {
        "num": "Question 10",
        "text": "Quel gaz détonant s'échappe lors de la réaction de l'acide chlorhydrique sur le fer ?",
        "correction": "Le dihydrogène (H₂), identifié par une détonation (\"pop\") près d'une flamme."
      }
    ]
  },
  {
    "id": "pc-5",
    "subject": "physique-chimie",
    "chapter": "Chapitre 1 : Atomes & Ions",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 153 : Structure atomique, ions, pH et réactions acido-basiques #5",
    "statement": "Étude de la composition des atomes, des formules des ions ($H^+, OH^-, Cu^{2+}, Cl^-$) et de la mesure du pH.",
    "questions": [
      {
        "num": "Question 1",
        "text": "De quelles particules un atome est-il constitué ?",
        "correction": "D'un noyau central (protons + neutrons) et d'électrons qui tournent autour."
      },
      {
        "num": "Question 2",
        "text": "Quelles sont les charges électriques respectives des protons, neutrons et électrons ?",
        "correction": "Protons : charge positive (+e), Neutrons : neutres (0), Électrons : charge négative (-e)."
      },
      {
        "num": "Question 3",
        "text": "Pourquoi dit-on qu'un atome est électriquement neutre ?",
        "correction": "Parce qu'il possède exactement autant de protons positifs que d'électrons négatifs."
      },
      {
        "num": "Question 4",
        "text": "Qu'est-ce qu'un ion positif (cation) et comment se forme-t-il ?",
        "correction": "C'est un atome qui a PERDU un ou plusieurs électrons (ex: Na⁺, Cu²⁺)."
      },
      {
        "num": "Question 5",
        "text": "Qu'est-ce qu'un ion négatif (anion) et comment se forme-t-il ?",
        "correction": "C'est un atome qui a GAGNÉ un ou plusieurs électrons (ex: Cl⁻, HO⁻)."
      },
      {
        "num": "Question 6",
        "text": "Quelle est la plage de valeurs de l'échelle de pH ?",
        "correction": "De 0 à 14."
      },
      {
        "num": "Question 7",
        "text": "À quoi correspond une solution neutre, acide ou basique en fonction du pH ?",
        "correction": "pH = 7 : neutre; pH < 7 : acide (excès d'ions H⁺); pH > 7 : basique (excès d'ions HO⁻)."
      },
      {
        "num": "Question 8",
        "text": "Que se passe-t-il pour le pH d'une solution acide lorsqu'on lui ajoute de l'eau (dilution) ?",
        "correction": "Le pH augmente et se rapproche de 7 sans jamais le dépasser."
      },
      {
        "num": "Question 9",
        "text": "Quel réactif permet de mettre en évidence la présence d'ions chlorure Cl⁻ ?",
        "correction": "Le nitrate d'argent (formation d'un précipité blanc qui noircit à la lumière)."
      },
      {
        "num": "Question 10",
        "text": "Quel gaz détonant s'échappe lors de la réaction de l'acide chlorhydrique sur le fer ?",
        "correction": "Le dihydrogène (H₂), identifié par une détonation (\"pop\") près d'une flamme."
      }
    ]
  },
  {
    "id": "pc-6",
    "subject": "physique-chimie",
    "chapter": "Chapitre 1 : Atomes & Ions",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 154 : Structure atomique, ions, pH et réactions acido-basiques #6",
    "statement": "Étude de la composition des atomes, des formules des ions ($H^+, OH^-, Cu^{2+}, Cl^-$) et de la mesure du pH.",
    "questions": [
      {
        "num": "Question 1",
        "text": "De quelles particules un atome est-il constitué ?",
        "correction": "D'un noyau central (protons + neutrons) et d'électrons qui tournent autour."
      },
      {
        "num": "Question 2",
        "text": "Quelles sont les charges électriques respectives des protons, neutrons et électrons ?",
        "correction": "Protons : charge positive (+e), Neutrons : neutres (0), Électrons : charge négative (-e)."
      },
      {
        "num": "Question 3",
        "text": "Pourquoi dit-on qu'un atome est électriquement neutre ?",
        "correction": "Parce qu'il possède exactement autant de protons positifs que d'électrons négatifs."
      },
      {
        "num": "Question 4",
        "text": "Qu'est-ce qu'un ion positif (cation) et comment se forme-t-il ?",
        "correction": "C'est un atome qui a PERDU un ou plusieurs électrons (ex: Na⁺, Cu²⁺)."
      },
      {
        "num": "Question 5",
        "text": "Qu'est-ce qu'un ion négatif (anion) et comment se forme-t-il ?",
        "correction": "C'est un atome qui a GAGNÉ un ou plusieurs électrons (ex: Cl⁻, HO⁻)."
      },
      {
        "num": "Question 6",
        "text": "Quelle est la plage de valeurs de l'échelle de pH ?",
        "correction": "De 0 à 14."
      },
      {
        "num": "Question 7",
        "text": "À quoi correspond une solution neutre, acide ou basique en fonction du pH ?",
        "correction": "pH = 7 : neutre; pH < 7 : acide (excès d'ions H⁺); pH > 7 : basique (excès d'ions HO⁻)."
      },
      {
        "num": "Question 8",
        "text": "Que se passe-t-il pour le pH d'une solution acide lorsqu'on lui ajoute de l'eau (dilution) ?",
        "correction": "Le pH augmente et se rapproche de 7 sans jamais le dépasser."
      },
      {
        "num": "Question 9",
        "text": "Quel réactif permet de mettre en évidence la présence d'ions chlorure Cl⁻ ?",
        "correction": "Le nitrate d'argent (formation d'un précipité blanc qui noircit à la lumière)."
      },
      {
        "num": "Question 10",
        "text": "Quel gaz détonant s'échappe lors de la réaction de l'acide chlorhydrique sur le fer ?",
        "correction": "Le dihydrogène (H₂), identifié par une détonation (\"pop\") près d'une flamme."
      }
    ]
  },
  {
    "id": "pc-7",
    "subject": "physique-chimie",
    "chapter": "Chapitre 1 : Atomes & Ions",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 155 : Structure atomique, ions, pH et réactions acido-basiques #7",
    "statement": "Étude de la composition des atomes, des formules des ions ($H^+, OH^-, Cu^{2+}, Cl^-$) et de la mesure du pH.",
    "questions": [
      {
        "num": "Question 1",
        "text": "De quelles particules un atome est-il constitué ?",
        "correction": "D'un noyau central (protons + neutrons) et d'électrons qui tournent autour."
      },
      {
        "num": "Question 2",
        "text": "Quelles sont les charges électriques respectives des protons, neutrons et électrons ?",
        "correction": "Protons : charge positive (+e), Neutrons : neutres (0), Électrons : charge négative (-e)."
      },
      {
        "num": "Question 3",
        "text": "Pourquoi dit-on qu'un atome est électriquement neutre ?",
        "correction": "Parce qu'il possède exactement autant de protons positifs que d'électrons négatifs."
      },
      {
        "num": "Question 4",
        "text": "Qu'est-ce qu'un ion positif (cation) et comment se forme-t-il ?",
        "correction": "C'est un atome qui a PERDU un ou plusieurs électrons (ex: Na⁺, Cu²⁺)."
      },
      {
        "num": "Question 5",
        "text": "Qu'est-ce qu'un ion négatif (anion) et comment se forme-t-il ?",
        "correction": "C'est un atome qui a GAGNÉ un ou plusieurs électrons (ex: Cl⁻, HO⁻)."
      },
      {
        "num": "Question 6",
        "text": "Quelle est la plage de valeurs de l'échelle de pH ?",
        "correction": "De 0 à 14."
      },
      {
        "num": "Question 7",
        "text": "À quoi correspond une solution neutre, acide ou basique en fonction du pH ?",
        "correction": "pH = 7 : neutre; pH < 7 : acide (excès d'ions H⁺); pH > 7 : basique (excès d'ions HO⁻)."
      },
      {
        "num": "Question 8",
        "text": "Que se passe-t-il pour le pH d'une solution acide lorsqu'on lui ajoute de l'eau (dilution) ?",
        "correction": "Le pH augmente et se rapproche de 7 sans jamais le dépasser."
      },
      {
        "num": "Question 9",
        "text": "Quel réactif permet de mettre en évidence la présence d'ions chlorure Cl⁻ ?",
        "correction": "Le nitrate d'argent (formation d'un précipité blanc qui noircit à la lumière)."
      },
      {
        "num": "Question 10",
        "text": "Quel gaz détonant s'échappe lors de la réaction de l'acide chlorhydrique sur le fer ?",
        "correction": "Le dihydrogène (H₂), identifié par une détonation (\"pop\") près d'une flamme."
      }
    ]
  },
  {
    "id": "pc-8",
    "subject": "physique-chimie",
    "chapter": "Chapitre 1 : Atomes & Ions",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 156 : Structure atomique, ions, pH et réactions acido-basiques #8",
    "statement": "Étude de la composition des atomes, des formules des ions ($H^+, OH^-, Cu^{2+}, Cl^-$) et de la mesure du pH.",
    "questions": [
      {
        "num": "Question 1",
        "text": "De quelles particules un atome est-il constitué ?",
        "correction": "D'un noyau central (protons + neutrons) et d'électrons qui tournent autour."
      },
      {
        "num": "Question 2",
        "text": "Quelles sont les charges électriques respectives des protons, neutrons et électrons ?",
        "correction": "Protons : charge positive (+e), Neutrons : neutres (0), Électrons : charge négative (-e)."
      },
      {
        "num": "Question 3",
        "text": "Pourquoi dit-on qu'un atome est électriquement neutre ?",
        "correction": "Parce qu'il possède exactement autant de protons positifs que d'électrons négatifs."
      },
      {
        "num": "Question 4",
        "text": "Qu'est-ce qu'un ion positif (cation) et comment se forme-t-il ?",
        "correction": "C'est un atome qui a PERDU un ou plusieurs électrons (ex: Na⁺, Cu²⁺)."
      },
      {
        "num": "Question 5",
        "text": "Qu'est-ce qu'un ion négatif (anion) et comment se forme-t-il ?",
        "correction": "C'est un atome qui a GAGNÉ un ou plusieurs électrons (ex: Cl⁻, HO⁻)."
      },
      {
        "num": "Question 6",
        "text": "Quelle est la plage de valeurs de l'échelle de pH ?",
        "correction": "De 0 à 14."
      },
      {
        "num": "Question 7",
        "text": "À quoi correspond une solution neutre, acide ou basique en fonction du pH ?",
        "correction": "pH = 7 : neutre; pH < 7 : acide (excès d'ions H⁺); pH > 7 : basique (excès d'ions HO⁻)."
      },
      {
        "num": "Question 8",
        "text": "Que se passe-t-il pour le pH d'une solution acide lorsqu'on lui ajoute de l'eau (dilution) ?",
        "correction": "Le pH augmente et se rapproche de 7 sans jamais le dépasser."
      },
      {
        "num": "Question 9",
        "text": "Quel réactif permet de mettre en évidence la présence d'ions chlorure Cl⁻ ?",
        "correction": "Le nitrate d'argent (formation d'un précipité blanc qui noircit à la lumière)."
      },
      {
        "num": "Question 10",
        "text": "Quel gaz détonant s'échappe lors de la réaction de l'acide chlorhydrique sur le fer ?",
        "correction": "Le dihydrogène (H₂), identifié par une détonation (\"pop\") près d'une flamme."
      }
    ]
  },
  {
    "id": "pc-9",
    "subject": "physique-chimie",
    "chapter": "Chapitre 1 : Atomes & Ions",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 157 : Structure atomique, ions, pH et réactions acido-basiques #9",
    "statement": "Étude de la composition des atomes, des formules des ions ($H^+, OH^-, Cu^{2+}, Cl^-$) et de la mesure du pH.",
    "questions": [
      {
        "num": "Question 1",
        "text": "De quelles particules un atome est-il constitué ?",
        "correction": "D'un noyau central (protons + neutrons) et d'électrons qui tournent autour."
      },
      {
        "num": "Question 2",
        "text": "Quelles sont les charges électriques respectives des protons, neutrons et électrons ?",
        "correction": "Protons : charge positive (+e), Neutrons : neutres (0), Électrons : charge négative (-e)."
      },
      {
        "num": "Question 3",
        "text": "Pourquoi dit-on qu'un atome est électriquement neutre ?",
        "correction": "Parce qu'il possède exactement autant de protons positifs que d'électrons négatifs."
      },
      {
        "num": "Question 4",
        "text": "Qu'est-ce qu'un ion positif (cation) et comment se forme-t-il ?",
        "correction": "C'est un atome qui a PERDU un ou plusieurs électrons (ex: Na⁺, Cu²⁺)."
      },
      {
        "num": "Question 5",
        "text": "Qu'est-ce qu'un ion négatif (anion) et comment se forme-t-il ?",
        "correction": "C'est un atome qui a GAGNÉ un ou plusieurs électrons (ex: Cl⁻, HO⁻)."
      },
      {
        "num": "Question 6",
        "text": "Quelle est la plage de valeurs de l'échelle de pH ?",
        "correction": "De 0 à 14."
      },
      {
        "num": "Question 7",
        "text": "À quoi correspond une solution neutre, acide ou basique en fonction du pH ?",
        "correction": "pH = 7 : neutre; pH < 7 : acide (excès d'ions H⁺); pH > 7 : basique (excès d'ions HO⁻)."
      },
      {
        "num": "Question 8",
        "text": "Que se passe-t-il pour le pH d'une solution acide lorsqu'on lui ajoute de l'eau (dilution) ?",
        "correction": "Le pH augmente et se rapproche de 7 sans jamais le dépasser."
      },
      {
        "num": "Question 9",
        "text": "Quel réactif permet de mettre en évidence la présence d'ions chlorure Cl⁻ ?",
        "correction": "Le nitrate d'argent (formation d'un précipité blanc qui noircit à la lumière)."
      },
      {
        "num": "Question 10",
        "text": "Quel gaz détonant s'échappe lors de la réaction de l'acide chlorhydrique sur le fer ?",
        "correction": "Le dihydrogène (H₂), identifié par une détonation (\"pop\") près d'une flamme."
      }
    ]
  },
  {
    "id": "pc-10",
    "subject": "physique-chimie",
    "chapter": "Chapitre 2 : Gravitation, Poids & Masse",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 158 : Poids, Masse, Gravitation et Énergie Cinétique #1",
    "statement": "Calculs de la relation P = m × g, étude de la gravité sur Terre/Lune et de l'énergie cinétique d'un objet en mouvement (m = 90 kg).",
    "questions": [
      {
        "num": "Question 1",
        "text": "Quelle est la différence essentielle entre la masse et le poids d'un objet ?",
        "correction": "La masse (en kg) est la quantité de matière (invariable); le poids (en N) est la force de gravité (variable)."
      },
      {
        "num": "Question 2",
        "text": "Écrire la formule reliant le poids P, la masse m et l'intensité de la pesanteur g.",
        "correction": "P = m × g (avec P en Newtons, m en kg et g en N/kg)."
      },
      {
        "num": "Question 3",
        "text": "Calculer le poids sur Terre d'une personne de masse m = 90 kg (g = 9,81 N/kg).",
        "correction": "P = 90 × 9,81 = 882.9 N."
      },
      {
        "num": "Question 4",
        "text": "Quelle sera la masse de cette même personne sur la Lune ?",
        "correction": "La masse reste strictement identique : m = 90 kg."
      },
      {
        "num": "Question 5",
        "text": "Calculer son poids sur la Lune où g = 1,6 N/kg.",
        "correction": "P = 90 × 1,6 = 144.0 N."
      },
      {
        "num": "Question 6",
        "text": "Écrire la formule de l'énergie cinétique Ec d'un véhicule en mouvement.",
        "correction": "Ec = 1/2 × m × v² (avec m en kg et v en m/s)."
      },
      {
        "num": "Question 7",
        "text": "Convertir une vitesse de 72 km/h en mètres par seconde (m/s).",
        "correction": "v = 72 / 3,6 = 20 m/s."
      },
      {
        "num": "Question 8",
        "text": "Calculer l'énergie cinétique Ec d'une masse de 90 kg se déplaçant à 20 m/s.",
        "correction": "Ec = 0.5 × 90 × 20² = 18000 Joules (J)."
      },
      {
        "num": "Question 9",
        "text": "Si la vitesse d'un véhicule est doublée, par combien son énergie cinétique est-elle multipliée ?",
        "correction": "Par 4 (car l'énergie cinétique dépend du carré de la vitesse v²)."
      },
      {
        "num": "Question 10",
        "text": "Qu'advient-il de l'énergie cinétique lors du freinage d'un véhicule ?",
        "correction": "Elle est convertie en énergie thermique (chaleur) au niveau des freins par frottements."
      }
    ]
  },
  {
    "id": "pc-11",
    "subject": "physique-chimie",
    "chapter": "Chapitre 2 : Gravitation, Poids & Masse",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 159 : Poids, Masse, Gravitation et Énergie Cinétique #2",
    "statement": "Calculs de la relation P = m × g, étude de la gravité sur Terre/Lune et de l'énergie cinétique d'un objet en mouvement (m = 100 kg).",
    "questions": [
      {
        "num": "Question 1",
        "text": "Quelle est la différence essentielle entre la masse et le poids d'un objet ?",
        "correction": "La masse (en kg) est la quantité de matière (invariable); le poids (en N) est la force de gravité (variable)."
      },
      {
        "num": "Question 2",
        "text": "Écrire la formule reliant le poids P, la masse m et l'intensité de la pesanteur g.",
        "correction": "P = m × g (avec P en Newtons, m en kg et g en N/kg)."
      },
      {
        "num": "Question 3",
        "text": "Calculer le poids sur Terre d'une personne de masse m = 100 kg (g = 9,81 N/kg).",
        "correction": "P = 100 × 9,81 = 981.0 N."
      },
      {
        "num": "Question 4",
        "text": "Quelle sera la masse de cette même personne sur la Lune ?",
        "correction": "La masse reste strictement identique : m = 100 kg."
      },
      {
        "num": "Question 5",
        "text": "Calculer son poids sur la Lune où g = 1,6 N/kg.",
        "correction": "P = 100 × 1,6 = 160.0 N."
      },
      {
        "num": "Question 6",
        "text": "Écrire la formule de l'énergie cinétique Ec d'un véhicule en mouvement.",
        "correction": "Ec = 1/2 × m × v² (avec m en kg et v en m/s)."
      },
      {
        "num": "Question 7",
        "text": "Convertir une vitesse de 90 km/h en mètres par seconde (m/s).",
        "correction": "v = 90 / 3,6 = 25 m/s."
      },
      {
        "num": "Question 8",
        "text": "Calculer l'énergie cinétique Ec d'une masse de 100 kg se déplaçant à 25 m/s.",
        "correction": "Ec = 0.5 × 100 × 25² = 31250 Joules (J)."
      },
      {
        "num": "Question 9",
        "text": "Si la vitesse d'un véhicule est doublée, par combien son énergie cinétique est-elle multipliée ?",
        "correction": "Par 4 (car l'énergie cinétique dépend du carré de la vitesse v²)."
      },
      {
        "num": "Question 10",
        "text": "Qu'advient-il de l'énergie cinétique lors du freinage d'un véhicule ?",
        "correction": "Elle est convertie en énergie thermique (chaleur) au niveau des freins par frottements."
      }
    ]
  },
  {
    "id": "pc-12",
    "subject": "physique-chimie",
    "chapter": "Chapitre 2 : Gravitation, Poids & Masse",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 160 : Poids, Masse, Gravitation et Énergie Cinétique #3",
    "statement": "Calculs de la relation P = m × g, étude de la gravité sur Terre/Lune et de l'énergie cinétique d'un objet en mouvement (m = 60 kg).",
    "questions": [
      {
        "num": "Question 1",
        "text": "Quelle est la différence essentielle entre la masse et le poids d'un objet ?",
        "correction": "La masse (en kg) est la quantité de matière (invariable); le poids (en N) est la force de gravité (variable)."
      },
      {
        "num": "Question 2",
        "text": "Écrire la formule reliant le poids P, la masse m et l'intensité de la pesanteur g.",
        "correction": "P = m × g (avec P en Newtons, m en kg et g en N/kg)."
      },
      {
        "num": "Question 3",
        "text": "Calculer le poids sur Terre d'une personne de masse m = 60 kg (g = 9,81 N/kg).",
        "correction": "P = 60 × 9,81 = 588.6 N."
      },
      {
        "num": "Question 4",
        "text": "Quelle sera la masse de cette même personne sur la Lune ?",
        "correction": "La masse reste strictement identique : m = 60 kg."
      },
      {
        "num": "Question 5",
        "text": "Calculer son poids sur la Lune où g = 1,6 N/kg.",
        "correction": "P = 60 × 1,6 = 96.0 N."
      },
      {
        "num": "Question 6",
        "text": "Écrire la formule de l'énergie cinétique Ec d'un véhicule en mouvement.",
        "correction": "Ec = 1/2 × m × v² (avec m en kg et v en m/s)."
      },
      {
        "num": "Question 7",
        "text": "Convertir une vitesse de 36 km/h en mètres par seconde (m/s).",
        "correction": "v = 36 / 3,6 = 10 m/s."
      },
      {
        "num": "Question 8",
        "text": "Calculer l'énergie cinétique Ec d'une masse de 60 kg se déplaçant à 10 m/s.",
        "correction": "Ec = 0.5 × 60 × 10² = 3000 Joules (J)."
      },
      {
        "num": "Question 9",
        "text": "Si la vitesse d'un véhicule est doublée, par combien son énergie cinétique est-elle multipliée ?",
        "correction": "Par 4 (car l'énergie cinétique dépend du carré de la vitesse v²)."
      },
      {
        "num": "Question 10",
        "text": "Qu'advient-il de l'énergie cinétique lors du freinage d'un véhicule ?",
        "correction": "Elle est convertie en énergie thermique (chaleur) au niveau des freins par frottements."
      }
    ]
  },
  {
    "id": "pc-13",
    "subject": "physique-chimie",
    "chapter": "Chapitre 2 : Gravitation, Poids & Masse",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 161 : Poids, Masse, Gravitation et Énergie Cinétique #4",
    "statement": "Calculs de la relation P = m × g, étude de la gravité sur Terre/Lune et de l'énergie cinétique d'un objet en mouvement (m = 70 kg).",
    "questions": [
      {
        "num": "Question 1",
        "text": "Quelle est la différence essentielle entre la masse et le poids d'un objet ?",
        "correction": "La masse (en kg) est la quantité de matière (invariable); le poids (en N) est la force de gravité (variable)."
      },
      {
        "num": "Question 2",
        "text": "Écrire la formule reliant le poids P, la masse m et l'intensité de la pesanteur g.",
        "correction": "P = m × g (avec P en Newtons, m en kg et g en N/kg)."
      },
      {
        "num": "Question 3",
        "text": "Calculer le poids sur Terre d'une personne de masse m = 70 kg (g = 9,81 N/kg).",
        "correction": "P = 70 × 9,81 = 686.7 N."
      },
      {
        "num": "Question 4",
        "text": "Quelle sera la masse de cette même personne sur la Lune ?",
        "correction": "La masse reste strictement identique : m = 70 kg."
      },
      {
        "num": "Question 5",
        "text": "Calculer son poids sur la Lune où g = 1,6 N/kg.",
        "correction": "P = 70 × 1,6 = 112.0 N."
      },
      {
        "num": "Question 6",
        "text": "Écrire la formule de l'énergie cinétique Ec d'un véhicule en mouvement.",
        "correction": "Ec = 1/2 × m × v² (avec m en kg et v en m/s)."
      },
      {
        "num": "Question 7",
        "text": "Convertir une vitesse de 54 km/h en mètres par seconde (m/s).",
        "correction": "v = 54 / 3,6 = 15 m/s."
      },
      {
        "num": "Question 8",
        "text": "Calculer l'énergie cinétique Ec d'une masse de 70 kg se déplaçant à 15 m/s.",
        "correction": "Ec = 0.5 × 70 × 15² = 7875 Joules (J)."
      },
      {
        "num": "Question 9",
        "text": "Si la vitesse d'un véhicule est doublée, par combien son énergie cinétique est-elle multipliée ?",
        "correction": "Par 4 (car l'énergie cinétique dépend du carré de la vitesse v²)."
      },
      {
        "num": "Question 10",
        "text": "Qu'advient-il de l'énergie cinétique lors du freinage d'un véhicule ?",
        "correction": "Elle est convertie en énergie thermique (chaleur) au niveau des freins par frottements."
      }
    ]
  },
  {
    "id": "pc-14",
    "subject": "physique-chimie",
    "chapter": "Chapitre 2 : Gravitation, Poids & Masse",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 162 : Poids, Masse, Gravitation et Énergie Cinétique #5",
    "statement": "Calculs de la relation P = m × g, étude de la gravité sur Terre/Lune et de l'énergie cinétique d'un objet en mouvement (m = 80 kg).",
    "questions": [
      {
        "num": "Question 1",
        "text": "Quelle est la différence essentielle entre la masse et le poids d'un objet ?",
        "correction": "La masse (en kg) est la quantité de matière (invariable); le poids (en N) est la force de gravité (variable)."
      },
      {
        "num": "Question 2",
        "text": "Écrire la formule reliant le poids P, la masse m et l'intensité de la pesanteur g.",
        "correction": "P = m × g (avec P en Newtons, m en kg et g en N/kg)."
      },
      {
        "num": "Question 3",
        "text": "Calculer le poids sur Terre d'une personne de masse m = 80 kg (g = 9,81 N/kg).",
        "correction": "P = 80 × 9,81 = 784.8 N."
      },
      {
        "num": "Question 4",
        "text": "Quelle sera la masse de cette même personne sur la Lune ?",
        "correction": "La masse reste strictement identique : m = 80 kg."
      },
      {
        "num": "Question 5",
        "text": "Calculer son poids sur la Lune où g = 1,6 N/kg.",
        "correction": "P = 80 × 1,6 = 128.0 N."
      },
      {
        "num": "Question 6",
        "text": "Écrire la formule de l'énergie cinétique Ec d'un véhicule en mouvement.",
        "correction": "Ec = 1/2 × m × v² (avec m en kg et v en m/s)."
      },
      {
        "num": "Question 7",
        "text": "Convertir une vitesse de 72 km/h en mètres par seconde (m/s).",
        "correction": "v = 72 / 3,6 = 20 m/s."
      },
      {
        "num": "Question 8",
        "text": "Calculer l'énergie cinétique Ec d'une masse de 80 kg se déplaçant à 20 m/s.",
        "correction": "Ec = 0.5 × 80 × 20² = 16000 Joules (J)."
      },
      {
        "num": "Question 9",
        "text": "Si la vitesse d'un véhicule est doublée, par combien son énergie cinétique est-elle multipliée ?",
        "correction": "Par 4 (car l'énergie cinétique dépend du carré de la vitesse v²)."
      },
      {
        "num": "Question 10",
        "text": "Qu'advient-il de l'énergie cinétique lors du freinage d'un véhicule ?",
        "correction": "Elle est convertie en énergie thermique (chaleur) au niveau des freins par frottements."
      }
    ]
  },
  {
    "id": "pc-15",
    "subject": "physique-chimie",
    "chapter": "Chapitre 2 : Gravitation, Poids & Masse",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 163 : Poids, Masse, Gravitation et Énergie Cinétique #6",
    "statement": "Calculs de la relation P = m × g, étude de la gravité sur Terre/Lune et de l'énergie cinétique d'un objet en mouvement (m = 90 kg).",
    "questions": [
      {
        "num": "Question 1",
        "text": "Quelle est la différence essentielle entre la masse et le poids d'un objet ?",
        "correction": "La masse (en kg) est la quantité de matière (invariable); le poids (en N) est la force de gravité (variable)."
      },
      {
        "num": "Question 2",
        "text": "Écrire la formule reliant le poids P, la masse m et l'intensité de la pesanteur g.",
        "correction": "P = m × g (avec P en Newtons, m en kg et g en N/kg)."
      },
      {
        "num": "Question 3",
        "text": "Calculer le poids sur Terre d'une personne de masse m = 90 kg (g = 9,81 N/kg).",
        "correction": "P = 90 × 9,81 = 882.9 N."
      },
      {
        "num": "Question 4",
        "text": "Quelle sera la masse de cette même personne sur la Lune ?",
        "correction": "La masse reste strictement identique : m = 90 kg."
      },
      {
        "num": "Question 5",
        "text": "Calculer son poids sur la Lune où g = 1,6 N/kg.",
        "correction": "P = 90 × 1,6 = 144.0 N."
      },
      {
        "num": "Question 6",
        "text": "Écrire la formule de l'énergie cinétique Ec d'un véhicule en mouvement.",
        "correction": "Ec = 1/2 × m × v² (avec m en kg et v en m/s)."
      },
      {
        "num": "Question 7",
        "text": "Convertir une vitesse de 90 km/h en mètres par seconde (m/s).",
        "correction": "v = 90 / 3,6 = 25 m/s."
      },
      {
        "num": "Question 8",
        "text": "Calculer l'énergie cinétique Ec d'une masse de 90 kg se déplaçant à 25 m/s.",
        "correction": "Ec = 0.5 × 90 × 25² = 28125 Joules (J)."
      },
      {
        "num": "Question 9",
        "text": "Si la vitesse d'un véhicule est doublée, par combien son énergie cinétique est-elle multipliée ?",
        "correction": "Par 4 (car l'énergie cinétique dépend du carré de la vitesse v²)."
      },
      {
        "num": "Question 10",
        "text": "Qu'advient-il de l'énergie cinétique lors du freinage d'un véhicule ?",
        "correction": "Elle est convertie en énergie thermique (chaleur) au niveau des freins par frottements."
      }
    ]
  },
  {
    "id": "pc-16",
    "subject": "physique-chimie",
    "chapter": "Chapitre 2 : Gravitation, Poids & Masse",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 164 : Poids, Masse, Gravitation et Énergie Cinétique #7",
    "statement": "Calculs de la relation P = m × g, étude de la gravité sur Terre/Lune et de l'énergie cinétique d'un objet en mouvement (m = 100 kg).",
    "questions": [
      {
        "num": "Question 1",
        "text": "Quelle est la différence essentielle entre la masse et le poids d'un objet ?",
        "correction": "La masse (en kg) est la quantité de matière (invariable); le poids (en N) est la force de gravité (variable)."
      },
      {
        "num": "Question 2",
        "text": "Écrire la formule reliant le poids P, la masse m et l'intensité de la pesanteur g.",
        "correction": "P = m × g (avec P en Newtons, m en kg et g en N/kg)."
      },
      {
        "num": "Question 3",
        "text": "Calculer le poids sur Terre d'une personne de masse m = 100 kg (g = 9,81 N/kg).",
        "correction": "P = 100 × 9,81 = 981.0 N."
      },
      {
        "num": "Question 4",
        "text": "Quelle sera la masse de cette même personne sur la Lune ?",
        "correction": "La masse reste strictement identique : m = 100 kg."
      },
      {
        "num": "Question 5",
        "text": "Calculer son poids sur la Lune où g = 1,6 N/kg.",
        "correction": "P = 100 × 1,6 = 160.0 N."
      },
      {
        "num": "Question 6",
        "text": "Écrire la formule de l'énergie cinétique Ec d'un véhicule en mouvement.",
        "correction": "Ec = 1/2 × m × v² (avec m en kg et v en m/s)."
      },
      {
        "num": "Question 7",
        "text": "Convertir une vitesse de 36 km/h en mètres par seconde (m/s).",
        "correction": "v = 36 / 3,6 = 10 m/s."
      },
      {
        "num": "Question 8",
        "text": "Calculer l'énergie cinétique Ec d'une masse de 100 kg se déplaçant à 10 m/s.",
        "correction": "Ec = 0.5 × 100 × 10² = 5000 Joules (J)."
      },
      {
        "num": "Question 9",
        "text": "Si la vitesse d'un véhicule est doublée, par combien son énergie cinétique est-elle multipliée ?",
        "correction": "Par 4 (car l'énergie cinétique dépend du carré de la vitesse v²)."
      },
      {
        "num": "Question 10",
        "text": "Qu'advient-il de l'énergie cinétique lors du freinage d'un véhicule ?",
        "correction": "Elle est convertie en énergie thermique (chaleur) au niveau des freins par frottements."
      }
    ]
  },
  {
    "id": "pc-17",
    "subject": "physique-chimie",
    "chapter": "Chapitre 2 : Gravitation, Poids & Masse",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 165 : Poids, Masse, Gravitation et Énergie Cinétique #8",
    "statement": "Calculs de la relation P = m × g, étude de la gravité sur Terre/Lune et de l'énergie cinétique d'un objet en mouvement (m = 60 kg).",
    "questions": [
      {
        "num": "Question 1",
        "text": "Quelle est la différence essentielle entre la masse et le poids d'un objet ?",
        "correction": "La masse (en kg) est la quantité de matière (invariable); le poids (en N) est la force de gravité (variable)."
      },
      {
        "num": "Question 2",
        "text": "Écrire la formule reliant le poids P, la masse m et l'intensité de la pesanteur g.",
        "correction": "P = m × g (avec P en Newtons, m en kg et g en N/kg)."
      },
      {
        "num": "Question 3",
        "text": "Calculer le poids sur Terre d'une personne de masse m = 60 kg (g = 9,81 N/kg).",
        "correction": "P = 60 × 9,81 = 588.6 N."
      },
      {
        "num": "Question 4",
        "text": "Quelle sera la masse de cette même personne sur la Lune ?",
        "correction": "La masse reste strictement identique : m = 60 kg."
      },
      {
        "num": "Question 5",
        "text": "Calculer son poids sur la Lune où g = 1,6 N/kg.",
        "correction": "P = 60 × 1,6 = 96.0 N."
      },
      {
        "num": "Question 6",
        "text": "Écrire la formule de l'énergie cinétique Ec d'un véhicule en mouvement.",
        "correction": "Ec = 1/2 × m × v² (avec m en kg et v en m/s)."
      },
      {
        "num": "Question 7",
        "text": "Convertir une vitesse de 54 km/h en mètres par seconde (m/s).",
        "correction": "v = 54 / 3,6 = 15 m/s."
      },
      {
        "num": "Question 8",
        "text": "Calculer l'énergie cinétique Ec d'une masse de 60 kg se déplaçant à 15 m/s.",
        "correction": "Ec = 0.5 × 60 × 15² = 6750 Joules (J)."
      },
      {
        "num": "Question 9",
        "text": "Si la vitesse d'un véhicule est doublée, par combien son énergie cinétique est-elle multipliée ?",
        "correction": "Par 4 (car l'énergie cinétique dépend du carré de la vitesse v²)."
      },
      {
        "num": "Question 10",
        "text": "Qu'advient-il de l'énergie cinétique lors du freinage d'un véhicule ?",
        "correction": "Elle est convertie en énergie thermique (chaleur) au niveau des freins par frottements."
      }
    ]
  },
  {
    "id": "pc-18",
    "subject": "physique-chimie",
    "chapter": "Chapitre 2 : Gravitation, Poids & Masse",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 166 : Poids, Masse, Gravitation et Énergie Cinétique #9",
    "statement": "Calculs de la relation P = m × g, étude de la gravité sur Terre/Lune et de l'énergie cinétique d'un objet en mouvement (m = 70 kg).",
    "questions": [
      {
        "num": "Question 1",
        "text": "Quelle est la différence essentielle entre la masse et le poids d'un objet ?",
        "correction": "La masse (en kg) est la quantité de matière (invariable); le poids (en N) est la force de gravité (variable)."
      },
      {
        "num": "Question 2",
        "text": "Écrire la formule reliant le poids P, la masse m et l'intensité de la pesanteur g.",
        "correction": "P = m × g (avec P en Newtons, m en kg et g en N/kg)."
      },
      {
        "num": "Question 3",
        "text": "Calculer le poids sur Terre d'une personne de masse m = 70 kg (g = 9,81 N/kg).",
        "correction": "P = 70 × 9,81 = 686.7 N."
      },
      {
        "num": "Question 4",
        "text": "Quelle sera la masse de cette même personne sur la Lune ?",
        "correction": "La masse reste strictement identique : m = 70 kg."
      },
      {
        "num": "Question 5",
        "text": "Calculer son poids sur la Lune où g = 1,6 N/kg.",
        "correction": "P = 70 × 1,6 = 112.0 N."
      },
      {
        "num": "Question 6",
        "text": "Écrire la formule de l'énergie cinétique Ec d'un véhicule en mouvement.",
        "correction": "Ec = 1/2 × m × v² (avec m en kg et v en m/s)."
      },
      {
        "num": "Question 7",
        "text": "Convertir une vitesse de 72 km/h en mètres par seconde (m/s).",
        "correction": "v = 72 / 3,6 = 20 m/s."
      },
      {
        "num": "Question 8",
        "text": "Calculer l'énergie cinétique Ec d'une masse de 70 kg se déplaçant à 20 m/s.",
        "correction": "Ec = 0.5 × 70 × 20² = 14000 Joules (J)."
      },
      {
        "num": "Question 9",
        "text": "Si la vitesse d'un véhicule est doublée, par combien son énergie cinétique est-elle multipliée ?",
        "correction": "Par 4 (car l'énergie cinétique dépend du carré de la vitesse v²)."
      },
      {
        "num": "Question 10",
        "text": "Qu'advient-il de l'énergie cinétique lors du freinage d'un véhicule ?",
        "correction": "Elle est convertie en énergie thermique (chaleur) au niveau des freins par frottements."
      }
    ]
  },
  {
    "id": "pc-19",
    "subject": "physique-chimie",
    "chapter": "Chapitre 2 : Gravitation, Poids & Masse",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 167 : Poids, Masse, Gravitation et Énergie Cinétique #10",
    "statement": "Calculs de la relation P = m × g, étude de la gravité sur Terre/Lune et de l'énergie cinétique d'un objet en mouvement (m = 80 kg).",
    "questions": [
      {
        "num": "Question 1",
        "text": "Quelle est la différence essentielle entre la masse et le poids d'un objet ?",
        "correction": "La masse (en kg) est la quantité de matière (invariable); le poids (en N) est la force de gravité (variable)."
      },
      {
        "num": "Question 2",
        "text": "Écrire la formule reliant le poids P, la masse m et l'intensité de la pesanteur g.",
        "correction": "P = m × g (avec P en Newtons, m en kg et g en N/kg)."
      },
      {
        "num": "Question 3",
        "text": "Calculer le poids sur Terre d'une personne de masse m = 80 kg (g = 9,81 N/kg).",
        "correction": "P = 80 × 9,81 = 784.8 N."
      },
      {
        "num": "Question 4",
        "text": "Quelle sera la masse de cette même personne sur la Lune ?",
        "correction": "La masse reste strictement identique : m = 80 kg."
      },
      {
        "num": "Question 5",
        "text": "Calculer son poids sur la Lune où g = 1,6 N/kg.",
        "correction": "P = 80 × 1,6 = 128.0 N."
      },
      {
        "num": "Question 6",
        "text": "Écrire la formule de l'énergie cinétique Ec d'un véhicule en mouvement.",
        "correction": "Ec = 1/2 × m × v² (avec m en kg et v en m/s)."
      },
      {
        "num": "Question 7",
        "text": "Convertir une vitesse de 90 km/h en mètres par seconde (m/s).",
        "correction": "v = 90 / 3,6 = 25 m/s."
      },
      {
        "num": "Question 8",
        "text": "Calculer l'énergie cinétique Ec d'une masse de 80 kg se déplaçant à 25 m/s.",
        "correction": "Ec = 0.5 × 80 × 25² = 25000 Joules (J)."
      },
      {
        "num": "Question 9",
        "text": "Si la vitesse d'un véhicule est doublée, par combien son énergie cinétique est-elle multipliée ?",
        "correction": "Par 4 (car l'énergie cinétique dépend du carré de la vitesse v²)."
      },
      {
        "num": "Question 10",
        "text": "Qu'advient-il de l'énergie cinétique lors du freinage d'un véhicule ?",
        "correction": "Elle est convertie en énergie thermique (chaleur) au niveau des freins par frottements."
      }
    ]
  },
  {
    "id": "pc-20",
    "subject": "physique-chimie",
    "chapter": "Chapitre 3 : Électricité",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 168 : Loi d'Ohm, puissance et énergie électrique #1",
    "statement": "Circuits électriques, mesure de tension (U = 12V) et résistance (R = 50 Ω), puissance et sécurité des installations.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Écrire l'expression mathématique de la loi d'Ohm.",
        "correction": "U = R × I (U en Volts V, R en Ohms Ω, I en Ampères A)."
      },
      {
        "num": "Question 2",
        "text": "Calculer l'intensité I qui traverse une résistance de R = 50 Ω sous une tension de U = 12 V.",
        "correction": "I = U / R = 12 / 50 = 0.24 A."
      },
      {
        "num": "Question 3",
        "text": "Quel appareil permet de mesurer une tension électrique et comment se branche-t-il ?",
        "correction": "Le voltmètre, branché EN DÉRIVATION (parallèle) aux bornes du composant."
      },
      {
        "num": "Question 4",
        "text": "Quel appareil permet de mesurer l'intensité électrique et comment se branche-t-il ?",
        "correction": "L'ampèremètre, branché EN SÉRIE dans le circuit."
      },
      {
        "num": "Question 5",
        "text": "Écrire la formule permettant de calculer la puissance électrique P.",
        "correction": "P = U × I (P en Watts W, U en Volts V, I en Ampères A)."
      },
      {
        "num": "Question 6",
        "text": "Calculer la puissance P consommée sous U = 12 V et I = 0.24 A.",
        "correction": "P = 12 × 0.24 = 2.88 W."
      },
      {
        "num": "Question 7",
        "text": "Écrire la formule de l'énergie électrique E consommée en fonction de la puissance P et du temps t.",
        "correction": "E = P × t (avec E en Joules ou en kWh)."
      },
      {
        "num": "Question 8",
        "text": "Que se passe-t-il dans un circuit électrique en cas de court-circuit ?",
        "correction": "L'intensité I augmente très fortement, provoquant un échauffement dangereux des fils."
      },
      {
        "num": "Question 9",
        "text": "Quel organe de sécurité protège les circuits contre les surintensités en coupant le courant ?",
        "correction": "Le disjoncteur (ou le fusible)."
      },
      {
        "num": "Question 10",
        "text": "Dans une installation domestique française, quelle est la valeur de la tension efficace du secteur ?",
        "correction": "Environ 230 Volts (tension alternative 50 Hz)."
      }
    ]
  },
  {
    "id": "pc-21",
    "subject": "physique-chimie",
    "chapter": "Chapitre 3 : Électricité",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 169 : Loi d'Ohm, puissance et énergie électrique #2",
    "statement": "Circuits électriques, mesure de tension (U = 12V) et résistance (R = 60 Ω), puissance et sécurité des installations.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Écrire l'expression mathématique de la loi d'Ohm.",
        "correction": "U = R × I (U en Volts V, R en Ohms Ω, I en Ampères A)."
      },
      {
        "num": "Question 2",
        "text": "Calculer l'intensité I qui traverse une résistance de R = 60 Ω sous une tension de U = 12 V.",
        "correction": "I = U / R = 12 / 60 = 0.20 A."
      },
      {
        "num": "Question 3",
        "text": "Quel appareil permet de mesurer une tension électrique et comment se branche-t-il ?",
        "correction": "Le voltmètre, branché EN DÉRIVATION (parallèle) aux bornes du composant."
      },
      {
        "num": "Question 4",
        "text": "Quel appareil permet de mesurer l'intensité électrique et comment se branche-t-il ?",
        "correction": "L'ampèremètre, branché EN SÉRIE dans le circuit."
      },
      {
        "num": "Question 5",
        "text": "Écrire la formule permettant de calculer la puissance électrique P.",
        "correction": "P = U × I (P en Watts W, U en Volts V, I en Ampères A)."
      },
      {
        "num": "Question 6",
        "text": "Calculer la puissance P consommée sous U = 12 V et I = 0.20 A.",
        "correction": "P = 12 × 0.20 = 2.40 W."
      },
      {
        "num": "Question 7",
        "text": "Écrire la formule de l'énergie électrique E consommée en fonction de la puissance P et du temps t.",
        "correction": "E = P × t (avec E en Joules ou en kWh)."
      },
      {
        "num": "Question 8",
        "text": "Que se passe-t-il dans un circuit électrique en cas de court-circuit ?",
        "correction": "L'intensité I augmente très fortement, provoquant un échauffement dangereux des fils."
      },
      {
        "num": "Question 9",
        "text": "Quel organe de sécurité protège les circuits contre les surintensités en coupant le courant ?",
        "correction": "Le disjoncteur (ou le fusible)."
      },
      {
        "num": "Question 10",
        "text": "Dans une installation domestique française, quelle est la valeur de la tension efficace du secteur ?",
        "correction": "Environ 230 Volts (tension alternative 50 Hz)."
      }
    ]
  },
  {
    "id": "pc-22",
    "subject": "physique-chimie",
    "chapter": "Chapitre 3 : Électricité",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 170 : Loi d'Ohm, puissance et énergie électrique #3",
    "statement": "Circuits électriques, mesure de tension (U = 12V) et résistance (R = 20 Ω), puissance et sécurité des installations.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Écrire l'expression mathématique de la loi d'Ohm.",
        "correction": "U = R × I (U en Volts V, R en Ohms Ω, I en Ampères A)."
      },
      {
        "num": "Question 2",
        "text": "Calculer l'intensité I qui traverse une résistance de R = 20 Ω sous une tension de U = 12 V.",
        "correction": "I = U / R = 12 / 20 = 0.60 A."
      },
      {
        "num": "Question 3",
        "text": "Quel appareil permet de mesurer une tension électrique et comment se branche-t-il ?",
        "correction": "Le voltmètre, branché EN DÉRIVATION (parallèle) aux bornes du composant."
      },
      {
        "num": "Question 4",
        "text": "Quel appareil permet de mesurer l'intensité électrique et comment se branche-t-il ?",
        "correction": "L'ampèremètre, branché EN SÉRIE dans le circuit."
      },
      {
        "num": "Question 5",
        "text": "Écrire la formule permettant de calculer la puissance électrique P.",
        "correction": "P = U × I (P en Watts W, U en Volts V, I en Ampères A)."
      },
      {
        "num": "Question 6",
        "text": "Calculer la puissance P consommée sous U = 12 V et I = 0.60 A.",
        "correction": "P = 12 × 0.60 = 7.20 W."
      },
      {
        "num": "Question 7",
        "text": "Écrire la formule de l'énergie électrique E consommée en fonction de la puissance P et du temps t.",
        "correction": "E = P × t (avec E en Joules ou en kWh)."
      },
      {
        "num": "Question 8",
        "text": "Que se passe-t-il dans un circuit électrique en cas de court-circuit ?",
        "correction": "L'intensité I augmente très fortement, provoquant un échauffement dangereux des fils."
      },
      {
        "num": "Question 9",
        "text": "Quel organe de sécurité protège les circuits contre les surintensités en coupant le courant ?",
        "correction": "Le disjoncteur (ou le fusible)."
      },
      {
        "num": "Question 10",
        "text": "Dans une installation domestique française, quelle est la valeur de la tension efficace du secteur ?",
        "correction": "Environ 230 Volts (tension alternative 50 Hz)."
      }
    ]
  },
  {
    "id": "pc-23",
    "subject": "physique-chimie",
    "chapter": "Chapitre 3 : Électricité",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 171 : Loi d'Ohm, puissance et énergie électrique #4",
    "statement": "Circuits électriques, mesure de tension (U = 12V) et résistance (R = 30 Ω), puissance et sécurité des installations.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Écrire l'expression mathématique de la loi d'Ohm.",
        "correction": "U = R × I (U en Volts V, R en Ohms Ω, I en Ampères A)."
      },
      {
        "num": "Question 2",
        "text": "Calculer l'intensité I qui traverse une résistance de R = 30 Ω sous une tension de U = 12 V.",
        "correction": "I = U / R = 12 / 30 = 0.40 A."
      },
      {
        "num": "Question 3",
        "text": "Quel appareil permet de mesurer une tension électrique et comment se branche-t-il ?",
        "correction": "Le voltmètre, branché EN DÉRIVATION (parallèle) aux bornes du composant."
      },
      {
        "num": "Question 4",
        "text": "Quel appareil permet de mesurer l'intensité électrique et comment se branche-t-il ?",
        "correction": "L'ampèremètre, branché EN SÉRIE dans le circuit."
      },
      {
        "num": "Question 5",
        "text": "Écrire la formule permettant de calculer la puissance électrique P.",
        "correction": "P = U × I (P en Watts W, U en Volts V, I en Ampères A)."
      },
      {
        "num": "Question 6",
        "text": "Calculer la puissance P consommée sous U = 12 V et I = 0.40 A.",
        "correction": "P = 12 × 0.40 = 4.80 W."
      },
      {
        "num": "Question 7",
        "text": "Écrire la formule de l'énergie électrique E consommée en fonction de la puissance P et du temps t.",
        "correction": "E = P × t (avec E en Joules ou en kWh)."
      },
      {
        "num": "Question 8",
        "text": "Que se passe-t-il dans un circuit électrique en cas de court-circuit ?",
        "correction": "L'intensité I augmente très fortement, provoquant un échauffement dangereux des fils."
      },
      {
        "num": "Question 9",
        "text": "Quel organe de sécurité protège les circuits contre les surintensités en coupant le courant ?",
        "correction": "Le disjoncteur (ou le fusible)."
      },
      {
        "num": "Question 10",
        "text": "Dans une installation domestique française, quelle est la valeur de la tension efficace du secteur ?",
        "correction": "Environ 230 Volts (tension alternative 50 Hz)."
      }
    ]
  },
  {
    "id": "pc-24",
    "subject": "physique-chimie",
    "chapter": "Chapitre 3 : Électricité",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 172 : Loi d'Ohm, puissance et énergie électrique #5",
    "statement": "Circuits électriques, mesure de tension (U = 12V) et résistance (R = 40 Ω), puissance et sécurité des installations.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Écrire l'expression mathématique de la loi d'Ohm.",
        "correction": "U = R × I (U en Volts V, R en Ohms Ω, I en Ampères A)."
      },
      {
        "num": "Question 2",
        "text": "Calculer l'intensité I qui traverse une résistance de R = 40 Ω sous une tension de U = 12 V.",
        "correction": "I = U / R = 12 / 40 = 0.30 A."
      },
      {
        "num": "Question 3",
        "text": "Quel appareil permet de mesurer une tension électrique et comment se branche-t-il ?",
        "correction": "Le voltmètre, branché EN DÉRIVATION (parallèle) aux bornes du composant."
      },
      {
        "num": "Question 4",
        "text": "Quel appareil permet de mesurer l'intensité électrique et comment se branche-t-il ?",
        "correction": "L'ampèremètre, branché EN SÉRIE dans le circuit."
      },
      {
        "num": "Question 5",
        "text": "Écrire la formule permettant de calculer la puissance électrique P.",
        "correction": "P = U × I (P en Watts W, U en Volts V, I en Ampères A)."
      },
      {
        "num": "Question 6",
        "text": "Calculer la puissance P consommée sous U = 12 V et I = 0.30 A.",
        "correction": "P = 12 × 0.30 = 3.60 W."
      },
      {
        "num": "Question 7",
        "text": "Écrire la formule de l'énergie électrique E consommée en fonction de la puissance P et du temps t.",
        "correction": "E = P × t (avec E en Joules ou en kWh)."
      },
      {
        "num": "Question 8",
        "text": "Que se passe-t-il dans un circuit électrique en cas de court-circuit ?",
        "correction": "L'intensité I augmente très fortement, provoquant un échauffement dangereux des fils."
      },
      {
        "num": "Question 9",
        "text": "Quel organe de sécurité protège les circuits contre les surintensités en coupant le courant ?",
        "correction": "Le disjoncteur (ou le fusible)."
      },
      {
        "num": "Question 10",
        "text": "Dans une installation domestique française, quelle est la valeur de la tension efficace du secteur ?",
        "correction": "Environ 230 Volts (tension alternative 50 Hz)."
      }
    ]
  },
  {
    "id": "pc-25",
    "subject": "physique-chimie",
    "chapter": "Chapitre 3 : Électricité",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 173 : Loi d'Ohm, puissance et énergie électrique #6",
    "statement": "Circuits électriques, mesure de tension (U = 12V) et résistance (R = 50 Ω), puissance et sécurité des installations.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Écrire l'expression mathématique de la loi d'Ohm.",
        "correction": "U = R × I (U en Volts V, R en Ohms Ω, I en Ampères A)."
      },
      {
        "num": "Question 2",
        "text": "Calculer l'intensité I qui traverse une résistance de R = 50 Ω sous une tension de U = 12 V.",
        "correction": "I = U / R = 12 / 50 = 0.24 A."
      },
      {
        "num": "Question 3",
        "text": "Quel appareil permet de mesurer une tension électrique et comment se branche-t-il ?",
        "correction": "Le voltmètre, branché EN DÉRIVATION (parallèle) aux bornes du composant."
      },
      {
        "num": "Question 4",
        "text": "Quel appareil permet de mesurer l'intensité électrique et comment se branche-t-il ?",
        "correction": "L'ampèremètre, branché EN SÉRIE dans le circuit."
      },
      {
        "num": "Question 5",
        "text": "Écrire la formule permettant de calculer la puissance électrique P.",
        "correction": "P = U × I (P en Watts W, U en Volts V, I en Ampères A)."
      },
      {
        "num": "Question 6",
        "text": "Calculer la puissance P consommée sous U = 12 V et I = 0.24 A.",
        "correction": "P = 12 × 0.24 = 2.88 W."
      },
      {
        "num": "Question 7",
        "text": "Écrire la formule de l'énergie électrique E consommée en fonction de la puissance P et du temps t.",
        "correction": "E = P × t (avec E en Joules ou en kWh)."
      },
      {
        "num": "Question 8",
        "text": "Que se passe-t-il dans un circuit électrique en cas de court-circuit ?",
        "correction": "L'intensité I augmente très fortement, provoquant un échauffement dangereux des fils."
      },
      {
        "num": "Question 9",
        "text": "Quel organe de sécurité protège les circuits contre les surintensités en coupant le courant ?",
        "correction": "Le disjoncteur (ou le fusible)."
      },
      {
        "num": "Question 10",
        "text": "Dans une installation domestique française, quelle est la valeur de la tension efficace du secteur ?",
        "correction": "Environ 230 Volts (tension alternative 50 Hz)."
      }
    ]
  },
  {
    "id": "pc-26",
    "subject": "physique-chimie",
    "chapter": "Chapitre 3 : Électricité",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 174 : Loi d'Ohm, puissance et énergie électrique #7",
    "statement": "Circuits électriques, mesure de tension (U = 12V) et résistance (R = 60 Ω), puissance et sécurité des installations.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Écrire l'expression mathématique de la loi d'Ohm.",
        "correction": "U = R × I (U en Volts V, R en Ohms Ω, I en Ampères A)."
      },
      {
        "num": "Question 2",
        "text": "Calculer l'intensité I qui traverse une résistance de R = 60 Ω sous une tension de U = 12 V.",
        "correction": "I = U / R = 12 / 60 = 0.20 A."
      },
      {
        "num": "Question 3",
        "text": "Quel appareil permet de mesurer une tension électrique et comment se branche-t-il ?",
        "correction": "Le voltmètre, branché EN DÉRIVATION (parallèle) aux bornes du composant."
      },
      {
        "num": "Question 4",
        "text": "Quel appareil permet de mesurer l'intensité électrique et comment se branche-t-il ?",
        "correction": "L'ampèremètre, branché EN SÉRIE dans le circuit."
      },
      {
        "num": "Question 5",
        "text": "Écrire la formule permettant de calculer la puissance électrique P.",
        "correction": "P = U × I (P en Watts W, U en Volts V, I en Ampères A)."
      },
      {
        "num": "Question 6",
        "text": "Calculer la puissance P consommée sous U = 12 V et I = 0.20 A.",
        "correction": "P = 12 × 0.20 = 2.40 W."
      },
      {
        "num": "Question 7",
        "text": "Écrire la formule de l'énergie électrique E consommée en fonction de la puissance P et du temps t.",
        "correction": "E = P × t (avec E en Joules ou en kWh)."
      },
      {
        "num": "Question 8",
        "text": "Que se passe-t-il dans un circuit électrique en cas de court-circuit ?",
        "correction": "L'intensité I augmente très fortement, provoquant un échauffement dangereux des fils."
      },
      {
        "num": "Question 9",
        "text": "Quel organe de sécurité protège les circuits contre les surintensités en coupant le courant ?",
        "correction": "Le disjoncteur (ou le fusible)."
      },
      {
        "num": "Question 10",
        "text": "Dans une installation domestique française, quelle est la valeur de la tension efficace du secteur ?",
        "correction": "Environ 230 Volts (tension alternative 50 Hz)."
      }
    ]
  },
  {
    "id": "pc-27",
    "subject": "physique-chimie",
    "chapter": "Chapitre 3 : Électricité",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 175 : Loi d'Ohm, puissance et énergie électrique #8",
    "statement": "Circuits électriques, mesure de tension (U = 12V) et résistance (R = 20 Ω), puissance et sécurité des installations.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Écrire l'expression mathématique de la loi d'Ohm.",
        "correction": "U = R × I (U en Volts V, R en Ohms Ω, I en Ampères A)."
      },
      {
        "num": "Question 2",
        "text": "Calculer l'intensité I qui traverse une résistance de R = 20 Ω sous une tension de U = 12 V.",
        "correction": "I = U / R = 12 / 20 = 0.60 A."
      },
      {
        "num": "Question 3",
        "text": "Quel appareil permet de mesurer une tension électrique et comment se branche-t-il ?",
        "correction": "Le voltmètre, branché EN DÉRIVATION (parallèle) aux bornes du composant."
      },
      {
        "num": "Question 4",
        "text": "Quel appareil permet de mesurer l'intensité électrique et comment se branche-t-il ?",
        "correction": "L'ampèremètre, branché EN SÉRIE dans le circuit."
      },
      {
        "num": "Question 5",
        "text": "Écrire la formule permettant de calculer la puissance électrique P.",
        "correction": "P = U × I (P en Watts W, U en Volts V, I en Ampères A)."
      },
      {
        "num": "Question 6",
        "text": "Calculer la puissance P consommée sous U = 12 V et I = 0.60 A.",
        "correction": "P = 12 × 0.60 = 7.20 W."
      },
      {
        "num": "Question 7",
        "text": "Écrire la formule de l'énergie électrique E consommée en fonction de la puissance P et du temps t.",
        "correction": "E = P × t (avec E en Joules ou en kWh)."
      },
      {
        "num": "Question 8",
        "text": "Que se passe-t-il dans un circuit électrique en cas de court-circuit ?",
        "correction": "L'intensité I augmente très fortement, provoquant un échauffement dangereux des fils."
      },
      {
        "num": "Question 9",
        "text": "Quel organe de sécurité protège les circuits contre les surintensités en coupant le courant ?",
        "correction": "Le disjoncteur (ou le fusible)."
      },
      {
        "num": "Question 10",
        "text": "Dans une installation domestique française, quelle est la valeur de la tension efficace du secteur ?",
        "correction": "Environ 230 Volts (tension alternative 50 Hz)."
      }
    ]
  },
  {
    "id": "pc-28",
    "subject": "physique-chimie",
    "chapter": "Chapitre 3 : Électricité",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 176 : Loi d'Ohm, puissance et énergie électrique #9",
    "statement": "Circuits électriques, mesure de tension (U = 12V) et résistance (R = 30 Ω), puissance et sécurité des installations.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Écrire l'expression mathématique de la loi d'Ohm.",
        "correction": "U = R × I (U en Volts V, R en Ohms Ω, I en Ampères A)."
      },
      {
        "num": "Question 2",
        "text": "Calculer l'intensité I qui traverse une résistance de R = 30 Ω sous une tension de U = 12 V.",
        "correction": "I = U / R = 12 / 30 = 0.40 A."
      },
      {
        "num": "Question 3",
        "text": "Quel appareil permet de mesurer une tension électrique et comment se branche-t-il ?",
        "correction": "Le voltmètre, branché EN DÉRIVATION (parallèle) aux bornes du composant."
      },
      {
        "num": "Question 4",
        "text": "Quel appareil permet de mesurer l'intensité électrique et comment se branche-t-il ?",
        "correction": "L'ampèremètre, branché EN SÉRIE dans le circuit."
      },
      {
        "num": "Question 5",
        "text": "Écrire la formule permettant de calculer la puissance électrique P.",
        "correction": "P = U × I (P en Watts W, U en Volts V, I en Ampères A)."
      },
      {
        "num": "Question 6",
        "text": "Calculer la puissance P consommée sous U = 12 V et I = 0.40 A.",
        "correction": "P = 12 × 0.40 = 4.80 W."
      },
      {
        "num": "Question 7",
        "text": "Écrire la formule de l'énergie électrique E consommée en fonction de la puissance P et du temps t.",
        "correction": "E = P × t (avec E en Joules ou en kWh)."
      },
      {
        "num": "Question 8",
        "text": "Que se passe-t-il dans un circuit électrique en cas de court-circuit ?",
        "correction": "L'intensité I augmente très fortement, provoquant un échauffement dangereux des fils."
      },
      {
        "num": "Question 9",
        "text": "Quel organe de sécurité protège les circuits contre les surintensités en coupant le courant ?",
        "correction": "Le disjoncteur (ou le fusible)."
      },
      {
        "num": "Question 10",
        "text": "Dans une installation domestique française, quelle est la valeur de la tension efficace du secteur ?",
        "correction": "Environ 230 Volts (tension alternative 50 Hz)."
      }
    ]
  },
  {
    "id": "a-1",
    "subject": "anglais",
    "chapter": "Chapter 1: Past Tenses & Irregular Verbs",
    "badge": "10 Questions sur Cahier",
    "title": "Exercise 177: English Grammar, Reading Comprehension & Writing #1",
    "statement": "Training for DNB English test: past tenses, irregular verbs, vocabulary, civil rights, environment, and written expression.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Put the verb in the Past Simple: \"Yesterday, she (go) to school by bus.\"",
        "correction": "Yesterday, she WENT to school by bus."
      },
      {
        "num": "Question 2",
        "text": "Complete with FOR or SINCE: \"I have lived in London ... 2018.\"",
        "correction": "I have lived in London SINCE 2018."
      },
      {
        "num": "Question 3",
        "text": "Complete with FOR or SINCE: \"They have been studying ... three hours.\"",
        "correction": "They have been studying FOR three hours."
      },
      {
        "num": "Question 4",
        "text": "Choose the correct modal verb (MUST / SHOULD / CAN): \"You ... wear a seatbelt in the car.\"",
        "correction": "You MUST wear a seatbelt in the car."
      },
      {
        "num": "Question 5",
        "text": "Transform into the passive voice: \"William Shakespeare wrote Hamlet.\"",
        "correction": "Hamlet WAS WRITTEN by William Shakespeare."
      },
      {
        "num": "Question 6",
        "text": "Give the past simple and past participle of the irregular verb TO BUY.",
        "correction": "Buy -> BOUGHT -> BOUGHT."
      },
      {
        "num": "Question 7",
        "text": "Give the past simple and past participle of the irregular verb TO WRITE.",
        "correction": "Write -> WROTE -> WRITTEN."
      },
      {
        "num": "Question 8",
        "text": "Translate into English: \"Si j'avais de l'argent, j'achèterais une nouvelle voiture.\"",
        "correction": "\"If I had money, I would buy a new car.\""
      },
      {
        "num": "Question 9",
        "text": "Who was Martin Luther King Jr. and what is his famous speech called?",
        "correction": "He was a Civil Rights leader in the USA. His speech is \"I Have a Dream\" (1963)."
      },
      {
        "num": "Question 10",
        "text": "Write 2 sentences describing your favorite hobby using USED TO.",
        "correction": "Example: \"I used to play soccer every Sunday. I used to practice with my brother.\""
      }
    ]
  },
  {
    "id": "a-2",
    "subject": "anglais",
    "chapter": "Chapter 1: Past Tenses & Irregular Verbs",
    "badge": "10 Questions sur Cahier",
    "title": "Exercise 178: English Grammar, Reading Comprehension & Writing #2",
    "statement": "Training for DNB English test: past tenses, irregular verbs, vocabulary, civil rights, environment, and written expression.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Put the verb in the Past Simple: \"Yesterday, she (go) to school by bus.\"",
        "correction": "Yesterday, she WENT to school by bus."
      },
      {
        "num": "Question 2",
        "text": "Complete with FOR or SINCE: \"I have lived in London ... 2018.\"",
        "correction": "I have lived in London SINCE 2018."
      },
      {
        "num": "Question 3",
        "text": "Complete with FOR or SINCE: \"They have been studying ... three hours.\"",
        "correction": "They have been studying FOR three hours."
      },
      {
        "num": "Question 4",
        "text": "Choose the correct modal verb (MUST / SHOULD / CAN): \"You ... wear a seatbelt in the car.\"",
        "correction": "You MUST wear a seatbelt in the car."
      },
      {
        "num": "Question 5",
        "text": "Transform into the passive voice: \"William Shakespeare wrote Hamlet.\"",
        "correction": "Hamlet WAS WRITTEN by William Shakespeare."
      },
      {
        "num": "Question 6",
        "text": "Give the past simple and past participle of the irregular verb TO BUY.",
        "correction": "Buy -> BOUGHT -> BOUGHT."
      },
      {
        "num": "Question 7",
        "text": "Give the past simple and past participle of the irregular verb TO WRITE.",
        "correction": "Write -> WROTE -> WRITTEN."
      },
      {
        "num": "Question 8",
        "text": "Translate into English: \"Si j'avais de l'argent, j'achèterais une nouvelle voiture.\"",
        "correction": "\"If I had money, I would buy a new car.\""
      },
      {
        "num": "Question 9",
        "text": "Who was Martin Luther King Jr. and what is his famous speech called?",
        "correction": "He was a Civil Rights leader in the USA. His speech is \"I Have a Dream\" (1963)."
      },
      {
        "num": "Question 10",
        "text": "Write 2 sentences describing your favorite hobby using USED TO.",
        "correction": "Example: \"I used to play soccer every Sunday. I used to practice with my brother.\""
      }
    ]
  },
  {
    "id": "a-3",
    "subject": "anglais",
    "chapter": "Chapter 1: Past Tenses & Irregular Verbs",
    "badge": "10 Questions sur Cahier",
    "title": "Exercise 179: English Grammar, Reading Comprehension & Writing #3",
    "statement": "Training for DNB English test: past tenses, irregular verbs, vocabulary, civil rights, environment, and written expression.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Put the verb in the Past Simple: \"Yesterday, she (go) to school by bus.\"",
        "correction": "Yesterday, she WENT to school by bus."
      },
      {
        "num": "Question 2",
        "text": "Complete with FOR or SINCE: \"I have lived in London ... 2018.\"",
        "correction": "I have lived in London SINCE 2018."
      },
      {
        "num": "Question 3",
        "text": "Complete with FOR or SINCE: \"They have been studying ... three hours.\"",
        "correction": "They have been studying FOR three hours."
      },
      {
        "num": "Question 4",
        "text": "Choose the correct modal verb (MUST / SHOULD / CAN): \"You ... wear a seatbelt in the car.\"",
        "correction": "You MUST wear a seatbelt in the car."
      },
      {
        "num": "Question 5",
        "text": "Transform into the passive voice: \"William Shakespeare wrote Hamlet.\"",
        "correction": "Hamlet WAS WRITTEN by William Shakespeare."
      },
      {
        "num": "Question 6",
        "text": "Give the past simple and past participle of the irregular verb TO BUY.",
        "correction": "Buy -> BOUGHT -> BOUGHT."
      },
      {
        "num": "Question 7",
        "text": "Give the past simple and past participle of the irregular verb TO WRITE.",
        "correction": "Write -> WROTE -> WRITTEN."
      },
      {
        "num": "Question 8",
        "text": "Translate into English: \"Si j'avais de l'argent, j'achèterais une nouvelle voiture.\"",
        "correction": "\"If I had money, I would buy a new car.\""
      },
      {
        "num": "Question 9",
        "text": "Who was Martin Luther King Jr. and what is his famous speech called?",
        "correction": "He was a Civil Rights leader in the USA. His speech is \"I Have a Dream\" (1963)."
      },
      {
        "num": "Question 10",
        "text": "Write 2 sentences describing your favorite hobby using USED TO.",
        "correction": "Example: \"I used to play soccer every Sunday. I used to practice with my brother.\""
      }
    ]
  },
  {
    "id": "a-4",
    "subject": "anglais",
    "chapter": "Chapter 1: Past Tenses & Irregular Verbs",
    "badge": "10 Questions sur Cahier",
    "title": "Exercise 180: English Grammar, Reading Comprehension & Writing #4",
    "statement": "Training for DNB English test: past tenses, irregular verbs, vocabulary, civil rights, environment, and written expression.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Put the verb in the Past Simple: \"Yesterday, she (go) to school by bus.\"",
        "correction": "Yesterday, she WENT to school by bus."
      },
      {
        "num": "Question 2",
        "text": "Complete with FOR or SINCE: \"I have lived in London ... 2018.\"",
        "correction": "I have lived in London SINCE 2018."
      },
      {
        "num": "Question 3",
        "text": "Complete with FOR or SINCE: \"They have been studying ... three hours.\"",
        "correction": "They have been studying FOR three hours."
      },
      {
        "num": "Question 4",
        "text": "Choose the correct modal verb (MUST / SHOULD / CAN): \"You ... wear a seatbelt in the car.\"",
        "correction": "You MUST wear a seatbelt in the car."
      },
      {
        "num": "Question 5",
        "text": "Transform into the passive voice: \"William Shakespeare wrote Hamlet.\"",
        "correction": "Hamlet WAS WRITTEN by William Shakespeare."
      },
      {
        "num": "Question 6",
        "text": "Give the past simple and past participle of the irregular verb TO BUY.",
        "correction": "Buy -> BOUGHT -> BOUGHT."
      },
      {
        "num": "Question 7",
        "text": "Give the past simple and past participle of the irregular verb TO WRITE.",
        "correction": "Write -> WROTE -> WRITTEN."
      },
      {
        "num": "Question 8",
        "text": "Translate into English: \"Si j'avais de l'argent, j'achèterais une nouvelle voiture.\"",
        "correction": "\"If I had money, I would buy a new car.\""
      },
      {
        "num": "Question 9",
        "text": "Who was Martin Luther King Jr. and what is his famous speech called?",
        "correction": "He was a Civil Rights leader in the USA. His speech is \"I Have a Dream\" (1963)."
      },
      {
        "num": "Question 10",
        "text": "Write 2 sentences describing your favorite hobby using USED TO.",
        "correction": "Example: \"I used to play soccer every Sunday. I used to practice with my brother.\""
      }
    ]
  },
  {
    "id": "a-5",
    "subject": "anglais",
    "chapter": "Chapter 1: Past Tenses & Irregular Verbs",
    "badge": "10 Questions sur Cahier",
    "title": "Exercise 181: English Grammar, Reading Comprehension & Writing #5",
    "statement": "Training for DNB English test: past tenses, irregular verbs, vocabulary, civil rights, environment, and written expression.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Put the verb in the Past Simple: \"Yesterday, she (go) to school by bus.\"",
        "correction": "Yesterday, she WENT to school by bus."
      },
      {
        "num": "Question 2",
        "text": "Complete with FOR or SINCE: \"I have lived in London ... 2018.\"",
        "correction": "I have lived in London SINCE 2018."
      },
      {
        "num": "Question 3",
        "text": "Complete with FOR or SINCE: \"They have been studying ... three hours.\"",
        "correction": "They have been studying FOR three hours."
      },
      {
        "num": "Question 4",
        "text": "Choose the correct modal verb (MUST / SHOULD / CAN): \"You ... wear a seatbelt in the car.\"",
        "correction": "You MUST wear a seatbelt in the car."
      },
      {
        "num": "Question 5",
        "text": "Transform into the passive voice: \"William Shakespeare wrote Hamlet.\"",
        "correction": "Hamlet WAS WRITTEN by William Shakespeare."
      },
      {
        "num": "Question 6",
        "text": "Give the past simple and past participle of the irregular verb TO BUY.",
        "correction": "Buy -> BOUGHT -> BOUGHT."
      },
      {
        "num": "Question 7",
        "text": "Give the past simple and past participle of the irregular verb TO WRITE.",
        "correction": "Write -> WROTE -> WRITTEN."
      },
      {
        "num": "Question 8",
        "text": "Translate into English: \"Si j'avais de l'argent, j'achèterais une nouvelle voiture.\"",
        "correction": "\"If I had money, I would buy a new car.\""
      },
      {
        "num": "Question 9",
        "text": "Who was Martin Luther King Jr. and what is his famous speech called?",
        "correction": "He was a Civil Rights leader in the USA. His speech is \"I Have a Dream\" (1963)."
      },
      {
        "num": "Question 10",
        "text": "Write 2 sentences describing your favorite hobby using USED TO.",
        "correction": "Example: \"I used to play soccer every Sunday. I used to practice with my brother.\""
      }
    ]
  },
  {
    "id": "a-6",
    "subject": "anglais",
    "chapter": "Chapter 1: Past Tenses & Irregular Verbs",
    "badge": "10 Questions sur Cahier",
    "title": "Exercise 182: English Grammar, Reading Comprehension & Writing #6",
    "statement": "Training for DNB English test: past tenses, irregular verbs, vocabulary, civil rights, environment, and written expression.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Put the verb in the Past Simple: \"Yesterday, she (go) to school by bus.\"",
        "correction": "Yesterday, she WENT to school by bus."
      },
      {
        "num": "Question 2",
        "text": "Complete with FOR or SINCE: \"I have lived in London ... 2018.\"",
        "correction": "I have lived in London SINCE 2018."
      },
      {
        "num": "Question 3",
        "text": "Complete with FOR or SINCE: \"They have been studying ... three hours.\"",
        "correction": "They have been studying FOR three hours."
      },
      {
        "num": "Question 4",
        "text": "Choose the correct modal verb (MUST / SHOULD / CAN): \"You ... wear a seatbelt in the car.\"",
        "correction": "You MUST wear a seatbelt in the car."
      },
      {
        "num": "Question 5",
        "text": "Transform into the passive voice: \"William Shakespeare wrote Hamlet.\"",
        "correction": "Hamlet WAS WRITTEN by William Shakespeare."
      },
      {
        "num": "Question 6",
        "text": "Give the past simple and past participle of the irregular verb TO BUY.",
        "correction": "Buy -> BOUGHT -> BOUGHT."
      },
      {
        "num": "Question 7",
        "text": "Give the past simple and past participle of the irregular verb TO WRITE.",
        "correction": "Write -> WROTE -> WRITTEN."
      },
      {
        "num": "Question 8",
        "text": "Translate into English: \"Si j'avais de l'argent, j'achèterais une nouvelle voiture.\"",
        "correction": "\"If I had money, I would buy a new car.\""
      },
      {
        "num": "Question 9",
        "text": "Who was Martin Luther King Jr. and what is his famous speech called?",
        "correction": "He was a Civil Rights leader in the USA. His speech is \"I Have a Dream\" (1963)."
      },
      {
        "num": "Question 10",
        "text": "Write 2 sentences describing your favorite hobby using USED TO.",
        "correction": "Example: \"I used to play soccer every Sunday. I used to practice with my brother.\""
      }
    ]
  },
  {
    "id": "a-7",
    "subject": "anglais",
    "chapter": "Chapter 2: Vocabulary & Writing",
    "badge": "10 Questions sur Cahier",
    "title": "Exercise 183: English Grammar, Reading Comprehension & Writing #7",
    "statement": "Training for DNB English test: past tenses, irregular verbs, vocabulary, civil rights, environment, and written expression.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Put the verb in the Past Simple: \"Yesterday, she (go) to school by bus.\"",
        "correction": "Yesterday, she WENT to school by bus."
      },
      {
        "num": "Question 2",
        "text": "Complete with FOR or SINCE: \"I have lived in London ... 2018.\"",
        "correction": "I have lived in London SINCE 2018."
      },
      {
        "num": "Question 3",
        "text": "Complete with FOR or SINCE: \"They have been studying ... three hours.\"",
        "correction": "They have been studying FOR three hours."
      },
      {
        "num": "Question 4",
        "text": "Choose the correct modal verb (MUST / SHOULD / CAN): \"You ... wear a seatbelt in the car.\"",
        "correction": "You MUST wear a seatbelt in the car."
      },
      {
        "num": "Question 5",
        "text": "Transform into the passive voice: \"William Shakespeare wrote Hamlet.\"",
        "correction": "Hamlet WAS WRITTEN by William Shakespeare."
      },
      {
        "num": "Question 6",
        "text": "Give the past simple and past participle of the irregular verb TO BUY.",
        "correction": "Buy -> BOUGHT -> BOUGHT."
      },
      {
        "num": "Question 7",
        "text": "Give the past simple and past participle of the irregular verb TO WRITE.",
        "correction": "Write -> WROTE -> WRITTEN."
      },
      {
        "num": "Question 8",
        "text": "Translate into English: \"Si j'avais de l'argent, j'achèterais une nouvelle voiture.\"",
        "correction": "\"If I had money, I would buy a new car.\""
      },
      {
        "num": "Question 9",
        "text": "Who was Martin Luther King Jr. and what is his famous speech called?",
        "correction": "He was a Civil Rights leader in the USA. His speech is \"I Have a Dream\" (1963)."
      },
      {
        "num": "Question 10",
        "text": "Write 2 sentences describing your favorite hobby using USED TO.",
        "correction": "Example: \"I used to play soccer every Sunday. I used to practice with my brother.\""
      }
    ]
  },
  {
    "id": "a-8",
    "subject": "anglais",
    "chapter": "Chapter 2: Vocabulary & Writing",
    "badge": "10 Questions sur Cahier",
    "title": "Exercise 184: English Grammar, Reading Comprehension & Writing #8",
    "statement": "Training for DNB English test: past tenses, irregular verbs, vocabulary, civil rights, environment, and written expression.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Put the verb in the Past Simple: \"Yesterday, she (go) to school by bus.\"",
        "correction": "Yesterday, she WENT to school by bus."
      },
      {
        "num": "Question 2",
        "text": "Complete with FOR or SINCE: \"I have lived in London ... 2018.\"",
        "correction": "I have lived in London SINCE 2018."
      },
      {
        "num": "Question 3",
        "text": "Complete with FOR or SINCE: \"They have been studying ... three hours.\"",
        "correction": "They have been studying FOR three hours."
      },
      {
        "num": "Question 4",
        "text": "Choose the correct modal verb (MUST / SHOULD / CAN): \"You ... wear a seatbelt in the car.\"",
        "correction": "You MUST wear a seatbelt in the car."
      },
      {
        "num": "Question 5",
        "text": "Transform into the passive voice: \"William Shakespeare wrote Hamlet.\"",
        "correction": "Hamlet WAS WRITTEN by William Shakespeare."
      },
      {
        "num": "Question 6",
        "text": "Give the past simple and past participle of the irregular verb TO BUY.",
        "correction": "Buy -> BOUGHT -> BOUGHT."
      },
      {
        "num": "Question 7",
        "text": "Give the past simple and past participle of the irregular verb TO WRITE.",
        "correction": "Write -> WROTE -> WRITTEN."
      },
      {
        "num": "Question 8",
        "text": "Translate into English: \"Si j'avais de l'argent, j'achèterais une nouvelle voiture.\"",
        "correction": "\"If I had money, I would buy a new car.\""
      },
      {
        "num": "Question 9",
        "text": "Who was Martin Luther King Jr. and what is his famous speech called?",
        "correction": "He was a Civil Rights leader in the USA. His speech is \"I Have a Dream\" (1963)."
      },
      {
        "num": "Question 10",
        "text": "Write 2 sentences describing your favorite hobby using USED TO.",
        "correction": "Example: \"I used to play soccer every Sunday. I used to practice with my brother.\""
      }
    ]
  },
  {
    "id": "a-9",
    "subject": "anglais",
    "chapter": "Chapter 2: Vocabulary & Writing",
    "badge": "10 Questions sur Cahier",
    "title": "Exercise 185: English Grammar, Reading Comprehension & Writing #9",
    "statement": "Training for DNB English test: past tenses, irregular verbs, vocabulary, civil rights, environment, and written expression.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Put the verb in the Past Simple: \"Yesterday, she (go) to school by bus.\"",
        "correction": "Yesterday, she WENT to school by bus."
      },
      {
        "num": "Question 2",
        "text": "Complete with FOR or SINCE: \"I have lived in London ... 2018.\"",
        "correction": "I have lived in London SINCE 2018."
      },
      {
        "num": "Question 3",
        "text": "Complete with FOR or SINCE: \"They have been studying ... three hours.\"",
        "correction": "They have been studying FOR three hours."
      },
      {
        "num": "Question 4",
        "text": "Choose the correct modal verb (MUST / SHOULD / CAN): \"You ... wear a seatbelt in the car.\"",
        "correction": "You MUST wear a seatbelt in the car."
      },
      {
        "num": "Question 5",
        "text": "Transform into the passive voice: \"William Shakespeare wrote Hamlet.\"",
        "correction": "Hamlet WAS WRITTEN by William Shakespeare."
      },
      {
        "num": "Question 6",
        "text": "Give the past simple and past participle of the irregular verb TO BUY.",
        "correction": "Buy -> BOUGHT -> BOUGHT."
      },
      {
        "num": "Question 7",
        "text": "Give the past simple and past participle of the irregular verb TO WRITE.",
        "correction": "Write -> WROTE -> WRITTEN."
      },
      {
        "num": "Question 8",
        "text": "Translate into English: \"Si j'avais de l'argent, j'achèterais une nouvelle voiture.\"",
        "correction": "\"If I had money, I would buy a new car.\""
      },
      {
        "num": "Question 9",
        "text": "Who was Martin Luther King Jr. and what is his famous speech called?",
        "correction": "He was a Civil Rights leader in the USA. His speech is \"I Have a Dream\" (1963)."
      },
      {
        "num": "Question 10",
        "text": "Write 2 sentences describing your favorite hobby using USED TO.",
        "correction": "Example: \"I used to play soccer every Sunday. I used to practice with my brother.\""
      }
    ]
  },
  {
    "id": "a-10",
    "subject": "anglais",
    "chapter": "Chapter 2: Vocabulary & Writing",
    "badge": "10 Questions sur Cahier",
    "title": "Exercise 186: English Grammar, Reading Comprehension & Writing #10",
    "statement": "Training for DNB English test: past tenses, irregular verbs, vocabulary, civil rights, environment, and written expression.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Put the verb in the Past Simple: \"Yesterday, she (go) to school by bus.\"",
        "correction": "Yesterday, she WENT to school by bus."
      },
      {
        "num": "Question 2",
        "text": "Complete with FOR or SINCE: \"I have lived in London ... 2018.\"",
        "correction": "I have lived in London SINCE 2018."
      },
      {
        "num": "Question 3",
        "text": "Complete with FOR or SINCE: \"They have been studying ... three hours.\"",
        "correction": "They have been studying FOR three hours."
      },
      {
        "num": "Question 4",
        "text": "Choose the correct modal verb (MUST / SHOULD / CAN): \"You ... wear a seatbelt in the car.\"",
        "correction": "You MUST wear a seatbelt in the car."
      },
      {
        "num": "Question 5",
        "text": "Transform into the passive voice: \"William Shakespeare wrote Hamlet.\"",
        "correction": "Hamlet WAS WRITTEN by William Shakespeare."
      },
      {
        "num": "Question 6",
        "text": "Give the past simple and past participle of the irregular verb TO BUY.",
        "correction": "Buy -> BOUGHT -> BOUGHT."
      },
      {
        "num": "Question 7",
        "text": "Give the past simple and past participle of the irregular verb TO WRITE.",
        "correction": "Write -> WROTE -> WRITTEN."
      },
      {
        "num": "Question 8",
        "text": "Translate into English: \"Si j'avais de l'argent, j'achèterais une nouvelle voiture.\"",
        "correction": "\"If I had money, I would buy a new car.\""
      },
      {
        "num": "Question 9",
        "text": "Who was Martin Luther King Jr. and what is his famous speech called?",
        "correction": "He was a Civil Rights leader in the USA. His speech is \"I Have a Dream\" (1963)."
      },
      {
        "num": "Question 10",
        "text": "Write 2 sentences describing your favorite hobby using USED TO.",
        "correction": "Example: \"I used to play soccer every Sunday. I used to practice with my brother.\""
      }
    ]
  },
  {
    "id": "a-11",
    "subject": "anglais",
    "chapter": "Chapter 2: Vocabulary & Writing",
    "badge": "10 Questions sur Cahier",
    "title": "Exercise 187: English Grammar, Reading Comprehension & Writing #11",
    "statement": "Training for DNB English test: past tenses, irregular verbs, vocabulary, civil rights, environment, and written expression.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Put the verb in the Past Simple: \"Yesterday, she (go) to school by bus.\"",
        "correction": "Yesterday, she WENT to school by bus."
      },
      {
        "num": "Question 2",
        "text": "Complete with FOR or SINCE: \"I have lived in London ... 2018.\"",
        "correction": "I have lived in London SINCE 2018."
      },
      {
        "num": "Question 3",
        "text": "Complete with FOR or SINCE: \"They have been studying ... three hours.\"",
        "correction": "They have been studying FOR three hours."
      },
      {
        "num": "Question 4",
        "text": "Choose the correct modal verb (MUST / SHOULD / CAN): \"You ... wear a seatbelt in the car.\"",
        "correction": "You MUST wear a seatbelt in the car."
      },
      {
        "num": "Question 5",
        "text": "Transform into the passive voice: \"William Shakespeare wrote Hamlet.\"",
        "correction": "Hamlet WAS WRITTEN by William Shakespeare."
      },
      {
        "num": "Question 6",
        "text": "Give the past simple and past participle of the irregular verb TO BUY.",
        "correction": "Buy -> BOUGHT -> BOUGHT."
      },
      {
        "num": "Question 7",
        "text": "Give the past simple and past participle of the irregular verb TO WRITE.",
        "correction": "Write -> WROTE -> WRITTEN."
      },
      {
        "num": "Question 8",
        "text": "Translate into English: \"Si j'avais de l'argent, j'achèterais une nouvelle voiture.\"",
        "correction": "\"If I had money, I would buy a new car.\""
      },
      {
        "num": "Question 9",
        "text": "Who was Martin Luther King Jr. and what is his famous speech called?",
        "correction": "He was a Civil Rights leader in the USA. His speech is \"I Have a Dream\" (1963)."
      },
      {
        "num": "Question 10",
        "text": "Write 2 sentences describing your favorite hobby using USED TO.",
        "correction": "Example: \"I used to play soccer every Sunday. I used to practice with my brother.\""
      }
    ]
  },
  {
    "id": "a-12",
    "subject": "anglais",
    "chapter": "Chapter 2: Vocabulary & Writing",
    "badge": "10 Questions sur Cahier",
    "title": "Exercise 188: English Grammar, Reading Comprehension & Writing #12",
    "statement": "Training for DNB English test: past tenses, irregular verbs, vocabulary, civil rights, environment, and written expression.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Put the verb in the Past Simple: \"Yesterday, she (go) to school by bus.\"",
        "correction": "Yesterday, she WENT to school by bus."
      },
      {
        "num": "Question 2",
        "text": "Complete with FOR or SINCE: \"I have lived in London ... 2018.\"",
        "correction": "I have lived in London SINCE 2018."
      },
      {
        "num": "Question 3",
        "text": "Complete with FOR or SINCE: \"They have been studying ... three hours.\"",
        "correction": "They have been studying FOR three hours."
      },
      {
        "num": "Question 4",
        "text": "Choose the correct modal verb (MUST / SHOULD / CAN): \"You ... wear a seatbelt in the car.\"",
        "correction": "You MUST wear a seatbelt in the car."
      },
      {
        "num": "Question 5",
        "text": "Transform into the passive voice: \"William Shakespeare wrote Hamlet.\"",
        "correction": "Hamlet WAS WRITTEN by William Shakespeare."
      },
      {
        "num": "Question 6",
        "text": "Give the past simple and past participle of the irregular verb TO BUY.",
        "correction": "Buy -> BOUGHT -> BOUGHT."
      },
      {
        "num": "Question 7",
        "text": "Give the past simple and past participle of the irregular verb TO WRITE.",
        "correction": "Write -> WROTE -> WRITTEN."
      },
      {
        "num": "Question 8",
        "text": "Translate into English: \"Si j'avais de l'argent, j'achèterais une nouvelle voiture.\"",
        "correction": "\"If I had money, I would buy a new car.\""
      },
      {
        "num": "Question 9",
        "text": "Who was Martin Luther King Jr. and what is his famous speech called?",
        "correction": "He was a Civil Rights leader in the USA. His speech is \"I Have a Dream\" (1963)."
      },
      {
        "num": "Question 10",
        "text": "Write 2 sentences describing your favorite hobby using USED TO.",
        "correction": "Example: \"I used to play soccer every Sunday. I used to practice with my brother.\""
      }
    ]
  },
  {
    "id": "te-1",
    "subject": "techno-espagnol",
    "chapter": "Chapitre 1 : Algorithmique & Réseaux",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 189 : Algorithmique Scratch, capteurs et réseaux #1",
    "statement": "Étude de la chaîne d'information (acquérir, traiter, communiquer) et des blocs de programmation Scratch.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Quels sont les 3 blocs de la chaîne d'information d'un système automatisé ?",
        "correction": "1. ACQUÉRIR (capteurs) -> 2. TRAITER (microcontrôleur/programme) -> 3. COMMUNIQUER."
      },
      {
        "num": "Question 2",
        "text": "Quels sont les 3 blocs de la chaîne d'énergie d'un système automatisé ?",
        "correction": "ALIMENTER -> DISTRIBUER -> CONVERTIR -> TRANSMETTRE."
      },
      {
        "num": "Question 3",
        "text": "Citer 2 exemples de capteurs et 2 exemples d'actionneurs.",
        "correction": "Capteurs : détecteur de présence, thermomètre. Actionneurs : moteur, lampe, buzzer."
      },
      {
        "num": "Question 4",
        "text": "Dans Scratch, à quoi sert le bloc conditionnel \"Si ... Alors ... Sinon\" ?",
        "correction": "À exécuter une série d'instructions uniquement si une condition testée est vraie."
      },
      {
        "num": "Question 5",
        "text": "Quelle est la différence entre une boucle \"Répéter 10 fois\" et \"Répéter indéfiniment\" ?",
        "correction": "La 1ère s'arrête après 10 itérations, la 2ème s'exécute en continu jusqu'à l'arrêt du programme."
      },
      {
        "num": "Question 6",
        "text": "Qu'est-ce qu'une adresse IP dans un réseau informatique ?",
        "correction": "Un numéro d'identification unique attribué à chaque appareil connecté au réseau."
      },
      {
        "num": "Question 7",
        "text": "Quel rôle joue le routeur / la box internet dans un réseau local (LAN) ?",
        "correction": "Relier les appareils du réseau local entre eux et leur donner accès au réseau mondial (WAN/Internet)."
      },
      {
        "num": "Question 8",
        "text": "Quelle est la différence entre un réseau filaire (Ethernet) et un réseau sans fil (Wi-Fi) ?",
        "correction": "Ethernet utilise un câble en cuivre pour transmettre les données, le Wi-Fi utilise des ondes radio."
      },
      {
        "num": "Question 9",
        "text": "À quoi sert un algorithme ?",
        "correction": "Une suite d'instructions précises et ordonnées permettant de résoudre un problème."
      },
      {
        "num": "Question 10",
        "text": "Qu'est-ce qu'un organigramme (ou algorigramme) en technologie ?",
        "correction": "La représentation graphique synthétique d'un algorithme à l'aide de symboles normalisés."
      }
    ]
  },
  {
    "id": "te-2",
    "subject": "techno-espagnol",
    "chapter": "Chapitre 1 : Algorithmique & Réseaux",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 190 : Algorithmique Scratch, capteurs et réseaux #2",
    "statement": "Étude de la chaîne d'information (acquérir, traiter, communiquer) et des blocs de programmation Scratch.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Quels sont les 3 blocs de la chaîne d'information d'un système automatisé ?",
        "correction": "1. ACQUÉRIR (capteurs) -> 2. TRAITER (microcontrôleur/programme) -> 3. COMMUNIQUER."
      },
      {
        "num": "Question 2",
        "text": "Quels sont les 3 blocs de la chaîne d'énergie d'un système automatisé ?",
        "correction": "ALIMENTER -> DISTRIBUER -> CONVERTIR -> TRANSMETTRE."
      },
      {
        "num": "Question 3",
        "text": "Citer 2 exemples de capteurs et 2 exemples d'actionneurs.",
        "correction": "Capteurs : détecteur de présence, thermomètre. Actionneurs : moteur, lampe, buzzer."
      },
      {
        "num": "Question 4",
        "text": "Dans Scratch, à quoi sert le bloc conditionnel \"Si ... Alors ... Sinon\" ?",
        "correction": "À exécuter une série d'instructions uniquement si une condition testée est vraie."
      },
      {
        "num": "Question 5",
        "text": "Quelle est la différence entre une boucle \"Répéter 10 fois\" et \"Répéter indéfiniment\" ?",
        "correction": "La 1ère s'arrête après 10 itérations, la 2ème s'exécute en continu jusqu'à l'arrêt du programme."
      },
      {
        "num": "Question 6",
        "text": "Qu'est-ce qu'une adresse IP dans un réseau informatique ?",
        "correction": "Un numéro d'identification unique attribué à chaque appareil connecté au réseau."
      },
      {
        "num": "Question 7",
        "text": "Quel rôle joue le routeur / la box internet dans un réseau local (LAN) ?",
        "correction": "Relier les appareils du réseau local entre eux et leur donner accès au réseau mondial (WAN/Internet)."
      },
      {
        "num": "Question 8",
        "text": "Quelle est la différence entre un réseau filaire (Ethernet) et un réseau sans fil (Wi-Fi) ?",
        "correction": "Ethernet utilise un câble en cuivre pour transmettre les données, le Wi-Fi utilise des ondes radio."
      },
      {
        "num": "Question 9",
        "text": "À quoi sert un algorithme ?",
        "correction": "Une suite d'instructions précises et ordonnées permettant de résoudre un problème."
      },
      {
        "num": "Question 10",
        "text": "Qu'est-ce qu'un organigramme (ou algorigramme) en technologie ?",
        "correction": "La représentation graphique synthétique d'un algorithme à l'aide de symboles normalisés."
      }
    ]
  },
  {
    "id": "te-3",
    "subject": "techno-espagnol",
    "chapter": "Chapitre 1 : Algorithmique & Réseaux",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 191 : Algorithmique Scratch, capteurs et réseaux #3",
    "statement": "Étude de la chaîne d'information (acquérir, traiter, communiquer) et des blocs de programmation Scratch.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Quels sont les 3 blocs de la chaîne d'information d'un système automatisé ?",
        "correction": "1. ACQUÉRIR (capteurs) -> 2. TRAITER (microcontrôleur/programme) -> 3. COMMUNIQUER."
      },
      {
        "num": "Question 2",
        "text": "Quels sont les 3 blocs de la chaîne d'énergie d'un système automatisé ?",
        "correction": "ALIMENTER -> DISTRIBUER -> CONVERTIR -> TRANSMETTRE."
      },
      {
        "num": "Question 3",
        "text": "Citer 2 exemples de capteurs et 2 exemples d'actionneurs.",
        "correction": "Capteurs : détecteur de présence, thermomètre. Actionneurs : moteur, lampe, buzzer."
      },
      {
        "num": "Question 4",
        "text": "Dans Scratch, à quoi sert le bloc conditionnel \"Si ... Alors ... Sinon\" ?",
        "correction": "À exécuter une série d'instructions uniquement si une condition testée est vraie."
      },
      {
        "num": "Question 5",
        "text": "Quelle est la différence entre une boucle \"Répéter 10 fois\" et \"Répéter indéfiniment\" ?",
        "correction": "La 1ère s'arrête après 10 itérations, la 2ème s'exécute en continu jusqu'à l'arrêt du programme."
      },
      {
        "num": "Question 6",
        "text": "Qu'est-ce qu'une adresse IP dans un réseau informatique ?",
        "correction": "Un numéro d'identification unique attribué à chaque appareil connecté au réseau."
      },
      {
        "num": "Question 7",
        "text": "Quel rôle joue le routeur / la box internet dans un réseau local (LAN) ?",
        "correction": "Relier les appareils du réseau local entre eux et leur donner accès au réseau mondial (WAN/Internet)."
      },
      {
        "num": "Question 8",
        "text": "Quelle est la différence entre un réseau filaire (Ethernet) et un réseau sans fil (Wi-Fi) ?",
        "correction": "Ethernet utilise un câble en cuivre pour transmettre les données, le Wi-Fi utilise des ondes radio."
      },
      {
        "num": "Question 9",
        "text": "À quoi sert un algorithme ?",
        "correction": "Une suite d'instructions précises et ordonnées permettant de résoudre un problème."
      },
      {
        "num": "Question 10",
        "text": "Qu'est-ce qu'un organigramme (ou algorigramme) en technologie ?",
        "correction": "La représentation graphique synthétique d'un algorithme à l'aide de symboles normalisés."
      }
    ]
  },
  {
    "id": "te-4",
    "subject": "techno-espagnol",
    "chapter": "Chapitre 1 : Algorithmique & Réseaux",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 192 : Algorithmique Scratch, capteurs et réseaux #4",
    "statement": "Étude de la chaîne d'information (acquérir, traiter, communiquer) et des blocs de programmation Scratch.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Quels sont les 3 blocs de la chaîne d'information d'un système automatisé ?",
        "correction": "1. ACQUÉRIR (capteurs) -> 2. TRAITER (microcontrôleur/programme) -> 3. COMMUNIQUER."
      },
      {
        "num": "Question 2",
        "text": "Quels sont les 3 blocs de la chaîne d'énergie d'un système automatisé ?",
        "correction": "ALIMENTER -> DISTRIBUER -> CONVERTIR -> TRANSMETTRE."
      },
      {
        "num": "Question 3",
        "text": "Citer 2 exemples de capteurs et 2 exemples d'actionneurs.",
        "correction": "Capteurs : détecteur de présence, thermomètre. Actionneurs : moteur, lampe, buzzer."
      },
      {
        "num": "Question 4",
        "text": "Dans Scratch, à quoi sert le bloc conditionnel \"Si ... Alors ... Sinon\" ?",
        "correction": "À exécuter une série d'instructions uniquement si une condition testée est vraie."
      },
      {
        "num": "Question 5",
        "text": "Quelle est la différence entre une boucle \"Répéter 10 fois\" et \"Répéter indéfiniment\" ?",
        "correction": "La 1ère s'arrête après 10 itérations, la 2ème s'exécute en continu jusqu'à l'arrêt du programme."
      },
      {
        "num": "Question 6",
        "text": "Qu'est-ce qu'une adresse IP dans un réseau informatique ?",
        "correction": "Un numéro d'identification unique attribué à chaque appareil connecté au réseau."
      },
      {
        "num": "Question 7",
        "text": "Quel rôle joue le routeur / la box internet dans un réseau local (LAN) ?",
        "correction": "Relier les appareils du réseau local entre eux et leur donner accès au réseau mondial (WAN/Internet)."
      },
      {
        "num": "Question 8",
        "text": "Quelle est la différence entre un réseau filaire (Ethernet) et un réseau sans fil (Wi-Fi) ?",
        "correction": "Ethernet utilise un câble en cuivre pour transmettre les données, le Wi-Fi utilise des ondes radio."
      },
      {
        "num": "Question 9",
        "text": "À quoi sert un algorithme ?",
        "correction": "Une suite d'instructions précises et ordonnées permettant de résoudre un problème."
      },
      {
        "num": "Question 10",
        "text": "Qu'est-ce qu'un organigramme (ou algorigramme) en technologie ?",
        "correction": "La représentation graphique synthétique d'un algorithme à l'aide de symboles normalisés."
      }
    ]
  },
  {
    "id": "te-5",
    "subject": "techno-espagnol",
    "chapter": "Chapitre 1 : Algorithmique & Réseaux",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 193 : Algorithmique Scratch, capteurs et réseaux #5",
    "statement": "Étude de la chaîne d'information (acquérir, traiter, communiquer) et des blocs de programmation Scratch.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Quels sont les 3 blocs de la chaîne d'information d'un système automatisé ?",
        "correction": "1. ACQUÉRIR (capteurs) -> 2. TRAITER (microcontrôleur/programme) -> 3. COMMUNIQUER."
      },
      {
        "num": "Question 2",
        "text": "Quels sont les 3 blocs de la chaîne d'énergie d'un système automatisé ?",
        "correction": "ALIMENTER -> DISTRIBUER -> CONVERTIR -> TRANSMETTRE."
      },
      {
        "num": "Question 3",
        "text": "Citer 2 exemples de capteurs et 2 exemples d'actionneurs.",
        "correction": "Capteurs : détecteur de présence, thermomètre. Actionneurs : moteur, lampe, buzzer."
      },
      {
        "num": "Question 4",
        "text": "Dans Scratch, à quoi sert le bloc conditionnel \"Si ... Alors ... Sinon\" ?",
        "correction": "À exécuter une série d'instructions uniquement si une condition testée est vraie."
      },
      {
        "num": "Question 5",
        "text": "Quelle est la différence entre une boucle \"Répéter 10 fois\" et \"Répéter indéfiniment\" ?",
        "correction": "La 1ère s'arrête après 10 itérations, la 2ème s'exécute en continu jusqu'à l'arrêt du programme."
      },
      {
        "num": "Question 6",
        "text": "Qu'est-ce qu'une adresse IP dans un réseau informatique ?",
        "correction": "Un numéro d'identification unique attribué à chaque appareil connecté au réseau."
      },
      {
        "num": "Question 7",
        "text": "Quel rôle joue le routeur / la box internet dans un réseau local (LAN) ?",
        "correction": "Relier les appareils du réseau local entre eux et leur donner accès au réseau mondial (WAN/Internet)."
      },
      {
        "num": "Question 8",
        "text": "Quelle est la différence entre un réseau filaire (Ethernet) et un réseau sans fil (Wi-Fi) ?",
        "correction": "Ethernet utilise un câble en cuivre pour transmettre les données, le Wi-Fi utilise des ondes radio."
      },
      {
        "num": "Question 9",
        "text": "À quoi sert un algorithme ?",
        "correction": "Une suite d'instructions précises et ordonnées permettant de résoudre un problème."
      },
      {
        "num": "Question 10",
        "text": "Qu'est-ce qu'un organigramme (ou algorigramme) en technologie ?",
        "correction": "La représentation graphique synthétique d'un algorithme à l'aide de symboles normalisés."
      }
    ]
  },
  {
    "id": "te-6",
    "subject": "techno-espagnol",
    "chapter": "Chapitre 1 : Algorithmique & Réseaux",
    "badge": "10 Questions sur Cahier",
    "title": "Exercice 194 : Algorithmique Scratch, capteurs et réseaux #6",
    "statement": "Étude de la chaîne d'information (acquérir, traiter, communiquer) et des blocs de programmation Scratch.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Quels sont les 3 blocs de la chaîne d'information d'un système automatisé ?",
        "correction": "1. ACQUÉRIR (capteurs) -> 2. TRAITER (microcontrôleur/programme) -> 3. COMMUNIQUER."
      },
      {
        "num": "Question 2",
        "text": "Quels sont les 3 blocs de la chaîne d'énergie d'un système automatisé ?",
        "correction": "ALIMENTER -> DISTRIBUER -> CONVERTIR -> TRANSMETTRE."
      },
      {
        "num": "Question 3",
        "text": "Citer 2 exemples de capteurs et 2 exemples d'actionneurs.",
        "correction": "Capteurs : détecteur de présence, thermomètre. Actionneurs : moteur, lampe, buzzer."
      },
      {
        "num": "Question 4",
        "text": "Dans Scratch, à quoi sert le bloc conditionnel \"Si ... Alors ... Sinon\" ?",
        "correction": "À exécuter une série d'instructions uniquement si une condition testée est vraie."
      },
      {
        "num": "Question 5",
        "text": "Quelle est la différence entre une boucle \"Répéter 10 fois\" et \"Répéter indéfiniment\" ?",
        "correction": "La 1ère s'arrête après 10 itérations, la 2ème s'exécute en continu jusqu'à l'arrêt du programme."
      },
      {
        "num": "Question 6",
        "text": "Qu'est-ce qu'une adresse IP dans un réseau informatique ?",
        "correction": "Un numéro d'identification unique attribué à chaque appareil connecté au réseau."
      },
      {
        "num": "Question 7",
        "text": "Quel rôle joue le routeur / la box internet dans un réseau local (LAN) ?",
        "correction": "Relier les appareils du réseau local entre eux et leur donner accès au réseau mondial (WAN/Internet)."
      },
      {
        "num": "Question 8",
        "text": "Quelle est la différence entre un réseau filaire (Ethernet) et un réseau sans fil (Wi-Fi) ?",
        "correction": "Ethernet utilise un câble en cuivre pour transmettre les données, le Wi-Fi utilise des ondes radio."
      },
      {
        "num": "Question 9",
        "text": "À quoi sert un algorithme ?",
        "correction": "Une suite d'instructions précises et ordonnées permettant de résoudre un problème."
      },
      {
        "num": "Question 10",
        "text": "Qu'est-ce qu'un organigramme (ou algorigramme) en technologie ?",
        "correction": "La représentation graphique synthétique d'un algorithme à l'aide de symboles normalisés."
      }
    ]
  },
  {
    "id": "te-7",
    "subject": "techno-espagnol",
    "chapter": "Chapitre 2 : Lengua Española y Gramática",
    "badge": "10 Questions sur Cahier",
    "title": "Ejercicio 195 : Gramática española, redacción y cultura #1",
    "statement": "Entrenamiento de español para el colegio: conjugación de verbos, léxico y comprensión lectora.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Conjuga el verbo SER en presente de indicativo.",
        "correction": "Yo soy, tú eres, él/ella es, nosotros somos, vosotros sois, ellos/ellas son."
      },
      {
        "num": "Question 2",
        "text": "Conjuga el verbo ESTAR en presente de indicativo.",
        "correction": "Yo estoy, tú estás, él/ella está, nosotros estamos, vosotros estáis, ellos/ellas están."
      },
      {
        "num": "Question 3",
        "text": "Explica la diferencia entre SER y ESTAR en español.",
        "correction": "SER se usa para características permanentes; ESTAR para estados temporales y localización."
      },
      {
        "num": "Question 4",
        "text": "Conjuga el verbo HABLAR en Pretérito Indefinido (Passé simple).",
        "correction": "Hablé, hablaste, habló, hablamos, hablasteis, hablaron."
      },
      {
        "num": "Question 5",
        "text": "Conjuga el verbo COMER en Pretérito Indefinido.",
        "correction": "Comí, comiste, comió, comimos, comisteis, comieron."
      },
      {
        "num": "Question 6",
        "text": "Traduce al español: \"J'aime beaucoup lire des livres les week-ends.\"",
        "correction": "\"Me gusta mucho leer libros los fines de semana.\""
      },
      {
        "num": "Question 7",
        "text": "¿Qué es el \"Día de los Muertos\" y en qué país se celebra principalmente?",
        "correction": "Es una festividad tradicional en México (1 y 2 de noviembre) para honrar a los difuntos."
      },
      {
        "num": "Question 8",
        "text": "¿Cuál es la capital de España y cuál es su moneda oficial?",
        "correction": "La capital es Madrid y la moneda oficial es el Euro (€)."
      },
      {
        "num": "Question 9",
        "text": "Traduce al francés: \"Tengo que estudiar para el examen de mañana.\"",
        "correction": "\"Je dois étudier pour l'examen de demain.\""
      },
      {
        "num": "Question 10",
        "text": "Escribe 2 frases en español utilizando la perífrasis de futuro \"IR A + Infinitivo\".",
        "correction": "Ejemplo: \"Voy a hacer mis deberes. Vamos a viajar a España este verano.\""
      }
    ]
  },
  {
    "id": "te-8",
    "subject": "techno-espagnol",
    "chapter": "Chapitre 2 : Lengua Española y Gramática",
    "badge": "10 Questions sur Cahier",
    "title": "Ejercicio 196 : Gramática española, redacción y cultura #2",
    "statement": "Entrenamiento de español para el colegio: conjugación de verbos, léxico y comprensión lectora.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Conjuga el verbo SER en presente de indicativo.",
        "correction": "Yo soy, tú eres, él/ella es, nosotros somos, vosotros sois, ellos/ellas son."
      },
      {
        "num": "Question 2",
        "text": "Conjuga el verbo ESTAR en presente de indicativo.",
        "correction": "Yo estoy, tú estás, él/ella está, nosotros estamos, vosotros estáis, ellos/ellas están."
      },
      {
        "num": "Question 3",
        "text": "Explica la diferencia entre SER y ESTAR en español.",
        "correction": "SER se usa para características permanentes; ESTAR para estados temporales y localización."
      },
      {
        "num": "Question 4",
        "text": "Conjuga el verbo HABLAR en Pretérito Indefinido (Passé simple).",
        "correction": "Hablé, hablaste, habló, hablamos, hablasteis, hablaron."
      },
      {
        "num": "Question 5",
        "text": "Conjuga el verbo COMER en Pretérito Indefinido.",
        "correction": "Comí, comiste, comió, comimos, comisteis, comieron."
      },
      {
        "num": "Question 6",
        "text": "Traduce al español: \"J'aime beaucoup lire des livres les week-ends.\"",
        "correction": "\"Me gusta mucho leer libros los fines de semana.\""
      },
      {
        "num": "Question 7",
        "text": "¿Qué es el \"Día de los Muertos\" y en qué país se celebra principalmente?",
        "correction": "Es una festividad tradicional en México (1 y 2 de noviembre) para honrar a los difuntos."
      },
      {
        "num": "Question 8",
        "text": "¿Cuál es la capital de España y cuál es su moneda oficial?",
        "correction": "La capital es Madrid y la moneda oficial es el Euro (€)."
      },
      {
        "num": "Question 9",
        "text": "Traduce al francés: \"Tengo que estudiar para el examen de mañana.\"",
        "correction": "\"Je dois étudier pour l'examen de demain.\""
      },
      {
        "num": "Question 10",
        "text": "Escribe 2 frases en español utilizando la perífrasis de futuro \"IR A + Infinitivo\".",
        "correction": "Ejemplo: \"Voy a hacer mis deberes. Vamos a viajar a España este verano.\""
      }
    ]
  },
  {
    "id": "te-9",
    "subject": "techno-espagnol",
    "chapter": "Chapitre 2 : Lengua Española y Gramática",
    "badge": "10 Questions sur Cahier",
    "title": "Ejercicio 197 : Gramática española, redacción y cultura #3",
    "statement": "Entrenamiento de español para el colegio: conjugación de verbos, léxico y comprensión lectora.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Conjuga el verbo SER en presente de indicativo.",
        "correction": "Yo soy, tú eres, él/ella es, nosotros somos, vosotros sois, ellos/ellas son."
      },
      {
        "num": "Question 2",
        "text": "Conjuga el verbo ESTAR en presente de indicativo.",
        "correction": "Yo estoy, tú estás, él/ella está, nosotros estamos, vosotros estáis, ellos/ellas están."
      },
      {
        "num": "Question 3",
        "text": "Explica la diferencia entre SER y ESTAR en español.",
        "correction": "SER se usa para características permanentes; ESTAR para estados temporales y localización."
      },
      {
        "num": "Question 4",
        "text": "Conjuga el verbo HABLAR en Pretérito Indefinido (Passé simple).",
        "correction": "Hablé, hablaste, habló, hablamos, hablasteis, hablaron."
      },
      {
        "num": "Question 5",
        "text": "Conjuga el verbo COMER en Pretérito Indefinido.",
        "correction": "Comí, comiste, comió, comimos, comisteis, comieron."
      },
      {
        "num": "Question 6",
        "text": "Traduce al español: \"J'aime beaucoup lire des livres les week-ends.\"",
        "correction": "\"Me gusta mucho leer libros los fines de semana.\""
      },
      {
        "num": "Question 7",
        "text": "¿Qué es el \"Día de los Muertos\" y en qué país se celebra principalmente?",
        "correction": "Es una festividad tradicional en México (1 y 2 de noviembre) para honrar a los difuntos."
      },
      {
        "num": "Question 8",
        "text": "¿Cuál es la capital de España y cuál es su moneda oficial?",
        "correction": "La capital es Madrid y la moneda oficial es el Euro (€)."
      },
      {
        "num": "Question 9",
        "text": "Traduce al francés: \"Tengo que estudiar para el examen de mañana.\"",
        "correction": "\"Je dois étudier pour l'examen de demain.\""
      },
      {
        "num": "Question 10",
        "text": "Escribe 2 frases en español utilizando la perífrasis de futuro \"IR A + Infinitivo\".",
        "correction": "Ejemplo: \"Voy a hacer mis deberes. Vamos a viajar a España este verano.\""
      }
    ]
  },
  {
    "id": "te-10",
    "subject": "techno-espagnol",
    "chapter": "Chapitre 2 : Lengua Española y Gramática",
    "badge": "10 Questions sur Cahier",
    "title": "Ejercicio 198 : Gramática española, redacción y cultura #4",
    "statement": "Entrenamiento de español para el colegio: conjugación de verbos, léxico y comprensión lectora.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Conjuga el verbo SER en presente de indicativo.",
        "correction": "Yo soy, tú eres, él/ella es, nosotros somos, vosotros sois, ellos/ellas son."
      },
      {
        "num": "Question 2",
        "text": "Conjuga el verbo ESTAR en presente de indicativo.",
        "correction": "Yo estoy, tú estás, él/ella está, nosotros estamos, vosotros estáis, ellos/ellas están."
      },
      {
        "num": "Question 3",
        "text": "Explica la diferencia entre SER y ESTAR en español.",
        "correction": "SER se usa para características permanentes; ESTAR para estados temporales y localización."
      },
      {
        "num": "Question 4",
        "text": "Conjuga el verbo HABLAR en Pretérito Indefinido (Passé simple).",
        "correction": "Hablé, hablaste, habló, hablamos, hablasteis, hablaron."
      },
      {
        "num": "Question 5",
        "text": "Conjuga el verbo COMER en Pretérito Indefinido.",
        "correction": "Comí, comiste, comió, comimos, comisteis, comieron."
      },
      {
        "num": "Question 6",
        "text": "Traduce al español: \"J'aime beaucoup lire des livres les week-ends.\"",
        "correction": "\"Me gusta mucho leer libros los fines de semana.\""
      },
      {
        "num": "Question 7",
        "text": "¿Qué es el \"Día de los Muertos\" y en qué país se celebra principalmente?",
        "correction": "Es una festividad tradicional en México (1 y 2 de noviembre) para honrar a los difuntos."
      },
      {
        "num": "Question 8",
        "text": "¿Cuál es la capital de España y cuál es su moneda oficial?",
        "correction": "La capital es Madrid y la moneda oficial es el Euro (€)."
      },
      {
        "num": "Question 9",
        "text": "Traduce al francés: \"Tengo que estudiar para el examen de mañana.\"",
        "correction": "\"Je dois étudier pour l'examen de demain.\""
      },
      {
        "num": "Question 10",
        "text": "Escribe 2 frases en español utilizando la perífrasis de futuro \"IR A + Infinitivo\".",
        "correction": "Ejemplo: \"Voy a hacer mis deberes. Vamos a viajar a España este verano.\""
      }
    ]
  },
  {
    "id": "te-11",
    "subject": "techno-espagnol",
    "chapter": "Chapitre 2 : Lengua Española y Gramática",
    "badge": "10 Questions sur Cahier",
    "title": "Ejercicio 199 : Gramática española, redacción y cultura #5",
    "statement": "Entrenamiento de español para el colegio: conjugación de verbos, léxico y comprensión lectora.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Conjuga el verbo SER en presente de indicativo.",
        "correction": "Yo soy, tú eres, él/ella es, nosotros somos, vosotros sois, ellos/ellas son."
      },
      {
        "num": "Question 2",
        "text": "Conjuga el verbo ESTAR en presente de indicativo.",
        "correction": "Yo estoy, tú estás, él/ella está, nosotros estamos, vosotros estáis, ellos/ellas están."
      },
      {
        "num": "Question 3",
        "text": "Explica la diferencia entre SER y ESTAR en español.",
        "correction": "SER se usa para características permanentes; ESTAR para estados temporales y localización."
      },
      {
        "num": "Question 4",
        "text": "Conjuga el verbo HABLAR en Pretérito Indefinido (Passé simple).",
        "correction": "Hablé, hablaste, habló, hablamos, hablasteis, hablaron."
      },
      {
        "num": "Question 5",
        "text": "Conjuga el verbo COMER en Pretérito Indefinido.",
        "correction": "Comí, comiste, comió, comimos, comisteis, comieron."
      },
      {
        "num": "Question 6",
        "text": "Traduce al español: \"J'aime beaucoup lire des livres les week-ends.\"",
        "correction": "\"Me gusta mucho leer libros los fines de semana.\""
      },
      {
        "num": "Question 7",
        "text": "¿Qué es el \"Día de los Muertos\" y en qué país se celebra principalmente?",
        "correction": "Es una festividad tradicional en México (1 y 2 de noviembre) para honrar a los difuntos."
      },
      {
        "num": "Question 8",
        "text": "¿Cuál es la capital de España y cuál es su moneda oficial?",
        "correction": "La capital es Madrid y la moneda oficial es el Euro (€)."
      },
      {
        "num": "Question 9",
        "text": "Traduce al francés: \"Tengo que estudiar para el examen de mañana.\"",
        "correction": "\"Je dois étudier pour l'examen de demain.\""
      },
      {
        "num": "Question 10",
        "text": "Escribe 2 frases en español utilizando la perífrasis de futuro \"IR A + Infinitivo\".",
        "correction": "Ejemplo: \"Voy a hacer mis deberes. Vamos a viajar a España este verano.\""
      }
    ]
  },
  {
    "id": "te-12",
    "subject": "techno-espagnol",
    "chapter": "Chapitre 2 : Lengua Española y Gramática",
    "badge": "10 Questions sur Cahier",
    "title": "Ejercicio 200 : Gramática española, redacción y cultura #6",
    "statement": "Entrenamiento de español para el colegio: conjugación de verbos, léxico y comprensión lectora.",
    "questions": [
      {
        "num": "Question 1",
        "text": "Conjuga el verbo SER en presente de indicativo.",
        "correction": "Yo soy, tú eres, él/ella es, nosotros somos, vosotros sois, ellos/ellas son."
      },
      {
        "num": "Question 2",
        "text": "Conjuga el verbo ESTAR en presente de indicativo.",
        "correction": "Yo estoy, tú estás, él/ella está, nosotros estamos, vosotros estáis, ellos/ellas están."
      },
      {
        "num": "Question 3",
        "text": "Explica la diferencia entre SER y ESTAR en español.",
        "correction": "SER se usa para características permanentes; ESTAR para estados temporales y localización."
      },
      {
        "num": "Question 4",
        "text": "Conjuga el verbo HABLAR en Pretérito Indefinido (Passé simple).",
        "correction": "Hablé, hablaste, habló, hablamos, hablasteis, hablaron."
      },
      {
        "num": "Question 5",
        "text": "Conjuga el verbo COMER en Pretérito Indefinido.",
        "correction": "Comí, comiste, comió, comimos, comisteis, comieron."
      },
      {
        "num": "Question 6",
        "text": "Traduce al español: \"J'aime beaucoup lire des livres les week-ends.\"",
        "correction": "\"Me gusta mucho leer libros los fines de semana.\""
      },
      {
        "num": "Question 7",
        "text": "¿Qué es el \"Día de los Muertos\" y en qué país se celebra principalmente?",
        "correction": "Es una festividad tradicional en México (1 y 2 de noviembre) para honrar a los difuntos."
      },
      {
        "num": "Question 8",
        "text": "¿Cuál es la capital de España y cuál es su moneda oficial?",
        "correction": "La capital es Madrid y la moneda oficial es el Euro (€)."
      },
      {
        "num": "Question 9",
        "text": "Traduce al francés: \"Tengo que estudiar para el examen de mañana.\"",
        "correction": "\"Je dois étudier pour l'examen de demain.\""
      },
      {
        "num": "Question 10",
        "text": "Escribe 2 frases en español utilizando la perífrasis de futuro \"IR A + Infinitivo\".",
        "correction": "Ejemplo: \"Voy a hacer mis deberes. Vamos a viajar a España este verano.\""
      }
    ]
  }
];
