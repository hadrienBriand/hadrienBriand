<template>
    <Card :title="titleJob" icon="solar:suitcase-outline">
        <p class="text-xs italic mb-4 font-semibold text-primary dark:text-primary-light uppercase">{{ time }}</p>
        
        <a v-if="businessLink" :href="businessLink" class="text-primary dark:text-primary-light font-medium mb-4   initial :absolute top-6 right-6 italic text-sm flex items-center gap-2 w-fit transition hover:translate-x-2" target="_blank">
            Découvrir {{ title }}
            <Icon name="solar:arrow-right-outline" class=" font-semibold"/>
            </a>
        <slot></slot>
    </Card>
</template>
<script setup lang='ts'>

/*  VARIABLES  */

const {
    title,
    job,
    time,
    businessLink
} = defineProps<{
    title:string,
    job:string,
    time:string,
    businessLink?:string
}>()

const titleJob = computed(() => {
    return `${title} - ${job}`
})

</script>