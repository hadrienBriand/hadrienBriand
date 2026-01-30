<template>
  <GeneralHeader/>
  <GeneralSidebar/>
  <main class="flex min-h-screen ">
    <GeneralSidebar/>
    <div class=" w-full px-0 lg:px-4 pt-[60px] lg:pt-[90px] pb-0 transition"
    :class="!wrapper ? '' :'wrapper'">
      <div class=" rounded-t-lg bg-gray h-full p-4 pt-[250px]">
        <div class="relative">
          <div class="text-[150px] sm:text-[200px] font-bold text-primary text-center select-none leading-none">
            404
          </div>
          <div class="absolute inset-0 flex items-center justify-center">
            <Icon name="material-symbols:search-off" class="text-7xl text-primary bg-primary"
            />
          </div>
        </div>
        <div class="text-center space-y-4 max-w-md mx-auto">
          <h1 class="text-3xl sm:text-4xl text-primary font-semibold">
            Oups ! Page introuvable
          </h1>
          <p class="text-gray-600 text-lg ">
            La page que vous recherchez n'existe pas ou a été déplacée.
          </p>
        </div>
        <div class="flex flex-col sm:flex-row gap-4 mt-4 justify-center">
          <NuxtLink to="/" class="px-6 py-3 bg-primary text-white rounded-md font-medium hover:bg-primary-600 transition-colors text-center">
            Retour à l'accueil
          </NuxtLink>
          <button @click="$router.back()" class="px-6 py-3 bg-primary text-white rounded-md font-medium hover:bg-primary-200 transition-colors">
            Page précédente
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">

    const {isMenuOpen} = useMenu()
    const {responsive} = useResponsive()


    const wrapper = computed(() => {
            return isMenuOpen.value
      
    })
    
</script>

<style scoped>
.page-404 {
  position: relative;
  min-height: calc(100vh - 120px);
}
</style>