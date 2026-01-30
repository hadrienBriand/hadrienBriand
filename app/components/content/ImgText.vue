<template>
    <div class="flex items-center gap-2 justify-between  ">
        <div class="w-1/2 px-8" :class="{'order-2' :imgRight}">
            <NuxtImg :src="img" :alt="altImg" loading="lazy" class="w-full object-cover "/>
        </div>
        <div class="w-1/2 px-8" :class="{'order-1':imgRight}">
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