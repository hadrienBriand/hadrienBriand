<template>
<ul>
    <li  v-for="(item,index) in items" :key="item" class="flex items-start gap-2 my-4 dark:text-white">
    <span class="w-2 h-2 bg-primary dark:bg-primary-light rounded-full mt-2 flex-shrink-0"></span>
    <span>{{ item }}</span>
  </li>
</ul>
</template>

<script setup lang='ts'>

    defineProps<{
        items:string[]
    }>()

</script>