<template>
    <div>
        <Icon v-for="index in 5" name="solar:star-bold" :class="index <=  stars ? 'bg-primary' : 'bg-primary-hover'" />
    </div>
</template>

<script setup lang="ts">

    defineProps<{
        stars:number
    }>()
</script>