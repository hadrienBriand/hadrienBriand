<template>
<div>
   <h1 class="text-3xl text-primary dark:text-primary-light font-semibold text-center mb-8">Mon parcours</h1>

  <Business title="Freelance - Développeur Fullstack" time="Septembre 2024 - Aujourd'hui" class="mb-4">
      <h2 class="font-semibold text-primary">Collaboration continue avec Mgdis</h2>
      <BusinessList  :experiences="experiences[0]" />
      <h2 class="font-semibold text-primary my-4">Autres clients</h2>
      <BusinessList  :experiences="experiences[1]" />
      <p class="text-sm text-gray-600 italic mt-2"><strong>Stack technique:</strong> Drupal, Wordpress headless, Typescript, Vue 3, Nuxt, Tailwind, Nestjs, Docker, Git, Github Actions </p>
  </Business>
  <Business title="Mgdis - Développeur Frontend" time="Novembre 2020 - Juillet 2024" class="mb-4" business-link="https://www.mgdis.fr/">
        <BusinessList  :experiences="experiences[2]"/>
        <p class="text-sm text-gray-600 italic mt-2"><strong>Stack technique:</strong> Drupal, Wordpress, HTML, SCSS, Typescript, Vue 3, Docker, Git </p>
  </Business>
  <Business title="Toutenpixel - Développeur Frontend" time="Août 2019 - Juillet 2020" class="mb-4" business-link="https://www.toutenpixel.fr/">
        <BusinessList  :experiences="experiences[3]"/>
        <p class="text-sm text-gray-600 italic mt-2"><strong>Stack technique:</strong> Wordpress, HTML,SCSS, PHP, Javascript, Vue 2, Git</p>
  </Business>
  <Business title="Akawam - Développeur Frontend" time="Avril 2017 - Septembre 2018" class="mb-4" business-link="https://www.akawam.com/">
        <BusinessList  :experiences="experiences[4]"/>
        <p class="text-sm text-gray-600 italic mt-2"><strong>Stack technique:</strong>  Wordpress, HTML,SCSS, PHP, Javascript, Vue 2, Git,Figma</p>
  </Business>
        
</div>
</template>
<script setup lang='ts'>

/*  IMPORTS  */
import Business from '~/components/course/Business.vue';
import BusinessList from '~/components/course/BusinessList.vue';

/*  Variables  */

const experiences: string[][] = [
  [
    "Maintenance et évolutions continues sur les produits dédiés aux collectivités locales",
    "Interventions ciblées sur les fonctionnalités critiques en autonomie complète",
    "Collaboration directe avec les équipes produit pour prioriser et livrer les correctifs",
    "Refonte accessibilité (produit et sur mesure): application de correctifs avec respect du cahier des charges",
  ],
  [
    "Création de sites vitrines & portfolios",
    "Développement d’un ERP pour une association",
    "Développement d’une web app"
  ],
  [
    "Développement et maintenance de 5 produits à destination des collectivités locales, utilisés par des millions de citoyens (démarches administratives, vie locale, génération de sites, portal intranet)",
    "Conception et développement de templates et composants sur mesure",
    "Développement d'une usine à sites avec formulaire  (système d'étapes, vérification de mot de passe solide), choix de templates prédefinis ou personnalisés (Système de drag&drop, vérification d'unicité des composants, prévisualisation en temps réel)",
    "Lead frontend : Accompagnement et montée en compétences des développeurs juniors",
    "Référent accessibilité",
    "Participation aux réunions de conception produit, chiffrage des fonctionnalités, gestion des tickets",
    "Support client",
    "Refonte du front d'un produit (passage en Vue 3)"
  ],
  [
    "Conception et développement d'un page builder sur mesure (back & front) sous WordPress",
    "Création de thèmes WordPress sur mesure",
    "Intégration de landing pages et pages produit (standards 3ws, responsive et accessibilité)",
    "Création d'une bibliothèque de composants (vue 2)",
    "Développement de campagnes emailing HTML"
  ],
  [
    "Développement de thèmes WordPress sur mesure",
    "création de composants e-commerce (Vue 2)",
    "Intégration de landing pages responsives et wireframes/maquettes sous Figma",
    "Création d'un jeu web événementiel",
    "Refonte de site (migration Drupal vers WordPress)"
  ]
];

</script>