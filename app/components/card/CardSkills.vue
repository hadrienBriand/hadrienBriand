<template>
    <div  class="flex  items-center  flex-wrap gap-10 mt-10">
        <NuxtImg v-for="(skill,index) in skills" :key="index"  :src="skill.img" :alt="`logo de ${skill.name}`":title="skill.name" class="w-14 " loading="lazy"/>
    </div>
</template>

<script setup lang="ts">
const skills: Skill[] = [
    {
        name: 'Vue',
        img: '/images/vue.svg'
    },
    {
        name: 'Nuxt',
        img: '/images/nuxt.svg'
    },
    {
        name: 'Typescript',
        img: '/images/typescript.svg'
    },
    {
        name: 'NestJS',
        img: '/images/nest.svg'
    },
    {
        name: 'HTML',
        img: '/images/html.svg'
    },
    {
        name: 'CSS',
        img: '/images/css.svg'
    },
    {
        name: 'SASS',
        img: '/images/scss.svg'
    },
    {
        name: 'Tailwind',
        img: '/images/tailwind.svg'
    },
    {
        name: 'Git',
        img: '/images/git.svg'
    },
    {
        name: 'WordPress',
        img: '/images/wordpress.svg'
    },
    {
        name: 'Drupal',
        img: '/images/drupal.svg'
    },
    {
        name: 'Twig',
        img: '/images/twig.svg'
    },
    {
        name: 'Prisma',
        img: '/images/prisma.svg'
    }
]

</script>