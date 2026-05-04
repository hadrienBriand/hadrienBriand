<template>
    <Card :title="title" icon="solar:suitcase-outline">
        <p class="text-xs italic mb-4 font-semibold text-primary uppercase">{{ time }}</p>
        
        <a v-if="businessLink" :href="businessLink" class="text-primary font-medium absolute top-6 right-6 italic text-sm flex items-center gap-2 w-fit transition hover:translate-x-2" target="_blank">
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
    time,
    businessLink
} = defineProps<{
    title:string,
    time:string,
    businessLink?:string
}>()

</script>