<template>
    <div>
        <Icon v-for="index in 5" name="solar:star-bold" :class="index <=  stars ? 'bg-primary dark:bg-primary-light' : 'bg-primary-hover dark:bg-primary'" />
    </div>
</template>

<script setup lang="ts">

    defineProps<{
        stars:number
    }>()
</script>