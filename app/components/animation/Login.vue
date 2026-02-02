<template>
    <div class="flex items-center justify-center flex-col h-full" v-if="!finished">
        <h2 ref="textRef"  class="text-2xl sm:text-4xl text-primary text-center font-light"></h2>
        <NuxtImg src="/images/avatar.png" loading="lazy" alt="illustration d'Hadrien " class="image-appear"
            :class="{ 'visible': showImage }"/>
    </div>
    <GeneralLoader v-else/>
</template>

<script setup lang="ts">
const textRef = ref<HTMLElement | null>(null)
const finished = ref(false)
const showImage = ref(false)

const text = "Bienvenu·e sur mon site !"

function typingEffect(el: HTMLElement, text: string, speed = 40): Promise<void> {
    return new Promise((resolve) => {
        let i = 0
        el.textContent = ''
        
        const type = () => {
            if (i < text.length) {
                el.textContent += text[i]
                i++
                setTimeout(type, speed)
            } else {
                resolve()
            }
        }
        
        type()
    })
}

onMounted(async () => {
    if (!textRef.value) return
    
    await new Promise(p =>setTimeout(p,300) )
    showImage.value = true
    typingEffect(textRef.value, text)
    
    await new Promise(r => setTimeout(r, 2000))
    finished.value = true
})
</script>

<style scoped>
.image-appear {
    opacity: 0;
    transform: scale(0.8);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.image-appear.visible {
    opacity: 1;
    transform: scale(1);
}
</style>

