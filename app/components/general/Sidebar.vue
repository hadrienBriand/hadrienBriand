<template>
    <aside class="  w-[225px] fixed top-0 left-0  h-screen pt-[130px] px-4">
        <nav class="  flex flex-col" >
            <NuxtLink to="/" activeClass="text-primary-dark bg-primary-light rounded-md" class="flex items-center gap-4 w-fit py-2 px-4">
                <Icon name="solar:home-broken" class="text-xl text-primary"/>
                Accueil
            </NuxtLink>
            <NuxtLink to="/about"  activeClass="text-primary-dark bg-primary-light rounded-md" class="flex items-center gap-4 w-fit py-2 px-4">
                <Icon name="solar:book-2-broken" class="text-xl text-primary"/>
                À propos
            </NuxtLink>
            <NuxtLink to="/last-project"  activeClass="text-primary-dark bg-primary-light rounded-md" class="flex items-center gap-4 w-fit py-2 px-4">
                <Icon name="solar:rocket-2-broken" class="text-xl text-primary"/>
                Dernier projet
            </NuxtLink>
            <NuxtLink to="/contact" activeClass="text-primary-dark bg-primary-light rounded-md" class="flex items-center gap-4 w-fit py-2 px-4">
                <Icon name="solar:mailbox-broken" class="text-xl text-primary"/>
                Contact
            </NuxtLink>
        </nav>
    </aside>
</template>

<script setup lang="ts">

    
</script>

