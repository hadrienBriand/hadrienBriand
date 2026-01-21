<template>
    <div class="p-4 rounded-md bg-white dark:bg-secondary">
        <CardTitle :icon="icon" :title="title"/>
        <slot></slot>
    </div>
</template>

<script setup lang="ts">

    defineProps<{
        icon:string
        title:string
    }>()
</script>