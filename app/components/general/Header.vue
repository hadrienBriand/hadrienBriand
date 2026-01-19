<template>
    <header>
        <div>
            <h1 v-if="isHome">Hadrien Briand</h1>
            <NuxtLink v-else to="/">Hadrien Briand</NuxtLink>
        </div>
    </header>
</template>

<script setup lang="ts">

    const route = useRoute()
    const isHome = computed(() =>{return route.fullPath === '/'})
        console.log(isHome.value)
</script>