<template>
    <div class="w-full max-w-[90%] mx-auto my-8">
        <NuxtImg :src="img" :alt="alt" loading="lazy" class="w-full object-cover rounded-md"/>
    </div>
</template>

<script setup lang='ts'>

    defineProps<{
        img:string;
        alt:string;
    }>()

</script>