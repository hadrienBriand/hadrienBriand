<template>
    <NuxtLink v-if="to" :to="to" :class="classes">{{ label }}</NuxtLink>
    <button v-else :role="role" :class="classes">{{ label }}</button>
</template>

<script setup lang="ts">
    const props =defineProps<{
        role?:string
        type?:string
        label:string
        to?:string
        center?:boolean
        big?:boolean
    }>()
    const classes = computed(() => { return ` text-primary font-semibold bg-primary-light py-2 px-4 w-fit rounded-md transition hover:bg-primary-hover hover:text-white ${props.center ? 'mx-auto block ' : ''}  ${props.big ? 'text-lg' :'text-sm'}`})
</script>