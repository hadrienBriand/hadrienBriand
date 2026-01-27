<template>
    <ul class="timeline py-2 relative flex flex-col justify-center space-y-4">
        <li v-for="(job,index) in jobs" :key="index" class="flex justify-between items-center text-sm text-primary dark:text-primary-light relative">
            <span class="text-xs">{{ job.time }}</span><p><strong>{{ job.title }}</strong> - {{ job.location }}</p>
        </li>
    </ul>
</template>

<script setup lang="ts">

    const jobs = [
         {
            title:"Développeur freelance",
            location:"Lille",
            time:"2024"
        },
       
        {
            title:"Mgdis",
            location:"Lille",
            time:"2020"
        },
        {
            title:"Toutenpixel",
            location:"Lille",
            time:"2019"
        },
        {
            title:"Akawam",
            location:"Villeneuve d'Ascq",
            time:"2018"
        }
    ]

</script>

<style>
    .timeline:before{
        content: '';
        width: 2px;
        background: #D9D9D9;
        height: 100%;
        position: absolute;
        top: 0;
        left: 50px;
    }

    .timeline li::before{
        content: '';
        width: 12px;
        height: 12px;
        background-color:#5A54CF;
        position: absolute;
        top: 50%;
        left: 45px;
        transform: translateY(-50%);
        border-radius: 100%;
    }
</style>