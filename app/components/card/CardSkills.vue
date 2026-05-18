<template>
  <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10">
    <div 
      v-for="(skill, index) in skills" 
      :key="index" 
      class="flex flex-col items-center gap-2 group my-4"
    >
      <NuxtImg 
        :src="skill.img" 
        :alt="`logo de ${skill.name}`"
        :title="skill.name" 
        class="w-16 h-16 object-contain opacity-70 group-hover:opacity-100 transition-opacity" 
        loading="lazy"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const skills: Skill[] = [
    {
        name: 'Vue',
        img: '/images/vue.svg',
    },
    {
        name: 'Nuxt',
        img: '/images/nuxt.svg',
    },
    {
        name: 'Typescript',
        img: '/images/typescript.svg',
    },
    {
        name: 'NestJS',
        img: '/images/nest.svg',
    },
    {
        name: 'HTML',
        img: '/images/html.svg',
    },
    {
        name: 'CSS',
        img: '/images/css.svg',
    },
    {
        name: 'SASS',
        img: '/images/scss.svg',
    },
    {
        name: 'Tailwind',
        img: '/images/tailwind.svg',
    },
    {
        name: 'Git',
        img: '/images/git.svg',
    },
    {
        name: 'WordPress',
        img: '/images/wordpress.svg',
    },
    {
        name: 'Drupal',
        img: '/images/drupal.svg',
    },
    {
        name: 'Twig',
        img: '/images/twig.svg',
    },
    {
        name: 'Prisma',
        img: '/images/prisma.svg',
    }
]

</script>