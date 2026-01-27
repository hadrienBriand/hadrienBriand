<template>
  <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10">
    <div 
      v-for="(skill, index) in skills" 
      :key="index" 
      class="flex flex-col items-center gap-2 group"
    >
      <NuxtImg 
        :src="skill.img" 
        :alt="`logo de ${skill.name}`"
        :title="skill.name" 
        class="w-12 h-12 object-contain opacity-70 group-hover:opacity-100 transition-opacity" 
        loading="lazy"
      />
      <SkillsStars :stars="skill.stars" /> 
    </div>
  </div>
</template>

<script setup lang="ts">
const skills: Skill[] = [
    {
        name: 'Vue',
        img: '/images/vue.svg',
        stars:4
    },
    {
        name: 'Nuxt',
        img: '/images/nuxt.svg',
        stars:3
    },
    {
        name: 'Typescript',
        img: '/images/typescript.svg',
        stars:4
    },
    {
        name: 'NestJS',
        img: '/images/nest.svg',
        stars:2
    },
    {
        name: 'HTML',
        img: '/images/html.svg',
        stars:5
    },
    {
        name: 'CSS',
        img: '/images/css.svg',
        stars:5
    },
    {
        name: 'SASS',
        img: '/images/scss.svg',
        stars:5
    },
    {
        name: 'Tailwind',
        img: '/images/tailwind.svg',
        stars:4
    },
    {
        name: 'Git',
        img: '/images/git.svg',
        stars:4
    },
    {
        name: 'WordPress',
        img: '/images/wordpress.svg',
        stars:4
    },
    {
        name: 'Drupal',
        img: '/images/drupal.svg',
        stars:4
    },
    {
        name: 'Twig',
        img: '/images/twig.svg',
        stars:4
    },
    {
        name: 'Prisma',
        img: '/images/prisma.svg',
        stars:2
    }
]

</script>