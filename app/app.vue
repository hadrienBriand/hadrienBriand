<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  
  <GeneralLoader v-if="isReady === false" />
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

.dark body{
  background-color: #1F2A3D;
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