<template>
    <div class="p-2 md:p-4 rounded-md bg-white ">
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