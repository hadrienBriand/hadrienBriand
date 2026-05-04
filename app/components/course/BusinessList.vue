<template>
<div>
    <ul  class="list-disc pl-4 marker:text-primary space-y-2">
                <li class="text-gray-700" v-for="(exp,index) in experiences" :key="index">
                 {{ exp }}   
                </li>
            </ul>
</div>
</template>
<script setup lang='ts'>
/*  IMPORTS  */

/*  VARIABLES  */
 const {experiences} = defineProps<{
    experiences?:string[]
 }>()
/*  FUNCTIONS  */
</script>