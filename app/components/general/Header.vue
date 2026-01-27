<template>
    <header class="h-[60px] lg:h-[90px] flex items-center lg:justify-between   px-4 transition-shadow z-20 fixed w-full bg-white">
        <button 
        @click="toggleMenu"
        v-if="responsive" 
        role="button" :title="textToggle" 
        class="w-10 h-10 flex items-center justify-center mr-8">
            <Icon v-if="!isMenuOpen" name="solar:hamburger-menu-broken" class="text-primary text-4xl"/>
            <Icon v-else name="solar:close-circle-broken" class="text-primary text-4xl"/>
        </button>    
        <NuxtLink  to="/" class="text-2xl font-light flex items-center gap-4 text-primary"> 
                <NuxtImg src="/images/logo.png" alt="" class="w-16"/>
                Hadrien Briand
            </NuxtLink>
        <div class="flex items-center gap-4 ml-auto">
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

    const { $viewport } = useNuxtApp()
    const darkmode = ref(false)
    const { isMenuOpen, toggleMenu } = useMenu()

    function handleDarkmode(){
      darkmode.value = !darkmode.value
    }

    const {responsive} = useResponsive()

    const textToggle = computed(() => {
        return isMenuOpen.value ? 'Fermer le menu' : 'Ouvrir le menu'
    })

</script>
