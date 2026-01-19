<template>
    <aside class="  w-[200px] fixed top-0 left-0  h-screen pt-[130px] px-4">
        <nav class="  flex flex-col" >
            <NuxtLink to="/" activeClass="text-primary-dark bg-primary-light rounded-md" class="flex items-center gap-4 w-fit py-2 px-4">
                <Icon name="ic:round-dashboard" class="text-xl text-primary"/>
                Dashboard</NuxtLink>
            <NuxtLink to="/about"  activeClass="text-primary-dark bg-primary-light rounded-md" class="flex items-center gap-4 w-fit py-2 px-4">
                <Icon name="solar:book-2-broken" class="text-xl text-primary"/>
                À propos</NuxtLink>
            <NuxtLink to="/contact" activeClass="text-primary-dark bg-primary-light rounded-md" class="flex items-center gap-4 w-fit py-2 px-4">
                <Icon name="solar:mailbox-bold" class="text-xl text-primary"/>
                Contact</NuxtLink>
        </nav>
    </aside>
</template>

<script setup lang="ts">

    
</script>

