<template>
<ContentText>
  <!-------- Origine du projet -------->
     <ContentTitle>Origine du projet</ContentTitle>
     <ContentParagraph>
        Je me creusais la tête pour essayer de construire un projet qui me permettrait de résoudre quelque chose de concret, 
        tout en renforçant  mes compétences fullstack. Je voulais créer quelque chose qui pouvait répondre à un besoin, parce 
        que c'est vraiment ce qui m'anime le plus en tant que développeur. <br />
        La solution est venue de ma mère, qui s'avère être la reine des têtes en l'air. Au cours d'une discussion, elle me parle d'un 
        fichier excel qu'elle a créé pour se souvenir de l'endroit où elle avait mit telle ou telle chose. 
        Elle me décrit cela comme pratique, mais fastidieux. <br />
        Dans ma tête, ça fuse, <strong class="text-primary">Wimsapp</strong> est née ! 
    </ContentParagraph>
    <p class="text-xs italic mb-8">wimsapp:  <strong class="text-primary">W</strong>here <strong class="text-primary">I</strong>s <strong class="text-primary">M</strong>y <strong class="text-primary">S</strong>tuff - <strong class="text-primary">App</strong>lication.</p>
    
    <!-------- Roadmap du projet -------->
    <ContentTitle>Roadmap</ContentTitle>
    <ContentParagraph>
       L'idée était la, mais il fallait réflechir concrètement à comment mettre en place cette web app. Réflechir à la stack technique, 
       aux différentes features, au design, au déploiement. <br /> 
       je suis donc parti sur un mono-repo avec un <GeneralBig>workspace pnpm</GeneralBig>, 
       <GeneralBig>Nuxt</GeneralBig> et <GeneralBig>tailwind</GeneralBig> pour le front, 
       <GeneralBig>Nestjs</GeneralBig>, <GeneralBig>Prisma</GeneralBig> et <GeneralBig>Néon</GeneralBig>  pour le back, 
       <GeneralBig>Docker</GeneralBig> et <GeneralBig>Github Actions</GeneralBig> pour le déploiement sur un vps.
    </ContentParagraph >

    <!-------- Fonctionnalités du projet -------->

    <ContentTitle class="mt-8">Fonctionnalités</ContentTitle>
    <ContentParagraph>
      L'objectif était d'avoir une première version fonctionnelle, pouvant être déployée et utilisée par des utilisateurs réels. Je suis parti sur 
      une base simple avec 5 sections. 
    </ContentParagraph>
    <ContentList :items="sections"/>
    <ContentParagraph>
      Pour avoir un mvp utilisable rapidement (ma mère cherchait son classeur), je suis parti sur les fonctionnalités essentielles : 
    </ContentParagraph>
    <ContentList :items="features"/>
    <p class="text-xs italic mb-8">CRUD (Cread Read Update Delete) est un acronyme pour les façons dont on peut fonctionner sur des données stockées.</p>
    
    <!-------- Pistes d'améliorations -------->
    
    <ContentTitle class="mt-8">Pistes d'améliorations</ContentTitle>
    <ContentParagraph>
    J’ai une première version qui correspond aux besoins de la personne pour qui j’ai créé wimsapp dans un premier temps. Je suis satisfait, 
    mais je vois beaucoup de pistes d’améliorations. Sans entrer dans une dimension marketing parce que là n’est pas le sujet, 
    j’aimerais ajouter de nouvelles fonctionnalités : <br/> 
    <ContentList :items="improvals"/>
    <br/>
    Et plus encore ! La liste d’améliorations est longue, et c’est exactement ce que j’aime dans la création de sites et d’applications. 
    La capacité à résoudre une problématique et d’aller au-delà, en proposant une solution adaptée et complète.
    </ContentParagraph>
</ContentText>
</template>

<script setup lang="ts">

  const sections = [
    "Une page d'accueil pour expliquer rapidement et efficacement le but de wimsapp",
    "Un dashboard pour tout avoir sous la main rapidement",
    "Gestion des pièces de notre maison",
    "Gestion de nos objets",
    "Gestion du compte"
  ]

  const features = [
    "Créer un compte / se connecter / mot de passe oublié",
    "CRUD * pour les pièces de la maison",
    "CRUD * pour les objets avec liaison à une pièce",
    "dashboard avec derniers objets ajoutés, système de recherche, compteurs de pièces et d’objets",
    "Gestion du compte (modification du nom d’utilisateur, du mot de passe et de l’email, suppression du compte)"
  ]

  const improvals = [
    "des catégories d’objets avec un nouveau filtrage possible",
    "un système de statistiques avancées (graphique de distribution par pièce, répartition par catégories, timeline de création/modification d’un objet)",
    "une fonctionnalité d’export PDF sous forme de liste",
    "une vue globale par “plan de la maison”"

  ]

</script>
