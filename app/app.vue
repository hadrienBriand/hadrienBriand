<template>
  <!-- Rien tant qu'on n'a pas décidé -->
  <div v-if="showIntro === null" class="fixed inset-0 z-50 bg-gray"></div>

  <Transition name="fade">
    <section v-if="showIntro === true" class="fixed inset-0 z-50 flex items-center justify-center bg-gray">
      <div>
        <div class="text-center">
          <AnimationLogin/>
        </div>
      </div>
    </section>
  </Transition>

  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  
  <GeneralLoader v-if="isReady === false && showIntro === false" />
</template>

<script setup lang="ts">
const showIntro = ref<boolean | null>(null)
const isReady = ref(false)
const appReady = useState('appReady', () => false)

onMounted(() => {
  const hasVisited = localStorage.getItem('hasVisited')
  
  if (!hasVisited) {
    showIntro.value = true
    localStorage.setItem('hasVisited', 'true')
    
    setTimeout(() => {
      showIntro.value = false
      isReady.value = true 
      appReady.value = true
    }, 3500)
  } else {
    showIntro.value = false
    isReady.value = true
    appReady.value = true
  }
})
</script>

<style>
html, body {
  width: 100%;
  height: 100%;
}

#__nuxt {
  height: 100vh;
  position: relative;
}

* {
  font-family: 'Montserrat', sans-serif;
}

.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-leave-to {
  opacity: 0;
}
</style>