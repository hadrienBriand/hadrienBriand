<template>
    <div class="flex flex-col lg:flex-row items-center gap-2 justify-between  ">
        <div class="w-full lg:w-1/2 lg:px-8" :class="{'order-2' :imgRight}">
            <NuxtImg :src="img" :alt="altImg" loading="lazy" class="w-full object-cover "/>
        </div>
        <div class="w-full lg:w-1/2 lg:px-8" :class="{'order-1':imgRight}">
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang='ts'>

    defineProps<{
        img:string,
        altImg:string
        imgRight? :boolean
    }>()

</script>