<template>
    <header class="h-[90px] flex items-center justify-between   px-4 transition-shadow z-10 relative">
            <NuxtLink  to="/" class="text-2xl font-light flex items-center gap-4 text-primary"> 
                <img src="/images/logo.png" alt="" class="w-16">
                Hadrien Briand
            </NuxtLink>
        <div class="flex items-center gap-4">
            <button class="text-primary text-2xl transition hover:text-primary-hover hover:scale-110" title="Mode sombre" @click.prevent="handleDarkmode">
                <Icon v-if="!darkmode" name="solar:moon-bold"/>
                <Icon v-else name="solar:sun-2-broken"/>
            </button>
            <a href="mailto:hbriand.pro@gmail.com" title="Envoyer un mail" class="text-primary text-2xl transition hover:text-primary-hover hover:scale-110">
                <Icon name="solar:mailbox-bold"/>
            </a>
             <NuxtLink to="https://www.linkedin.com/in/hadrien-briand-b56099138/" title="Voir mon linkedin" target="_blank" rel="noopener" class="text-primary text-2xl transition hover:text-primary-hover hover:scale-110">
                <Icon name="tabler:brand-linkedin-filled"/>
            </NuxtLink>
        </div>
    </header>
</template>

<script setup lang="ts">
    
    const colorMode = useColorMode()
    const darkmode = ref(false)
    function handleDarkmode(){
      darkmode.value = !darkmode.value
     colorMode.preference = darkmode.value ? 'dark' : 'light'
    }

</script>
