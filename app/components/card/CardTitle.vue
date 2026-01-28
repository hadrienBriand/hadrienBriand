<template>
    <div class="flex items-center gap-4 mb-4">
        <div class="w-12 h-12 rounded-md flex items-center justify-center bg-primary-light">
            <Icon :name="icon" class="text-3xl text-primary" aria-hidden="true"/>
        </div>
        <h2 class="text-lg first-letter:uppercase text-primary font-semibold ">{{ title }}</h2>
    </div>
</template>

<script setup lang="ts">

    defineProps<{
        icon:string
        title:string
    }>()
</script>