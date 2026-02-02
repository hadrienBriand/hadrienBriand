<template>
    <GeneralLoader v-if="loading"/>
    <div v-else class="bg-white dark:bg-secondary-darker p-4 rounded-md mt-8 flex mx-auto ">
            <div class="w-[95%] mx-auto flex flex-col gap-12"  ref="contentRef"  >
                <slot></slot>
            </div>
        </div>
</template>

<script setup lang="ts">

const loading =ref(true)

onMounted(() => {
    loading.value = false;
})

</script>