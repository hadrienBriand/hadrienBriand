<template>
    <div class="p-2 md:p-4 rounded-md bg-white dark:bg-secondary-darker relative" >
        <CardTitle :icon="icon" :title="title" />
        <slot></slot>
    </div>
</template>

<script setup lang="ts">

    const props = defineProps<{
        icon:string
        title:string
    }>()
    
</script>