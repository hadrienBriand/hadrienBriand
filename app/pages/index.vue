<template>
        <h1 class="sr-only">Hadrien Briand - Accueil</h1>
        <GeneralLoader v-if="isLoading" />
        <div v-else class="grid grid-cols-1 lg:grid-cols-3 gap-10 ">
            <!------ Chart ------>
            <div class=" col-span-3 lg:col-span-2">
                <Card icon="solar:chart-2-linear" title="Expérience">
                        <ExperienceChart />
                        <p class="text-[10px] lg:text-[8px] font-light italic p-2 dark:text-primary-light">* Graphique 100% confiance en soi.</p>
                </Card>
            </div>
            <!------ Identité / Disponibilité ------>
            <div class="col-span-3 lg:col-span-1 flex flex-col md:flex-row lg:flex-col gap-6">
                <Card icon="solar:user-bold" title="Identité" class="flex-1 relative" >
                   <div class="flex items-center">
                     <ContentParagraph>
                        Hadrien Briand <br />
                        Développeur Frontend <br />
                        Lille
                    </ContentParagraph>
                    <NuxtImg src="/images/avatar.png" alt="Illustration d'Hadrien Briand" class="w-24 xl:w-32 absolute bottom-2 right-2" loading="lazy"/>
                   </div>
                </Card>
                <Card icon="solar:clock-circle-broken" title="Disponibilité" class="flex-1 relative" >
                      <ContentParagraph>
                        Mars 2026 <br />
                        Métropole Lilloise / full-remote
                        </ContentParagraph>
                    <NuxtImg src="/images/clock.png" alt="Illustration d'Hadrien Briand" class="w-16 absolute bottom-2 right-2" loading="lazy"/>
                </Card>
            </div>
            <!------ Parcours / Dernier projet ------>
            <div class="flex flex-col lg:flex-row xl:flex-col gap-6  col-span-3 xl:col-span-1">
                <Card icon="solar:server-path-broken" title="parcours" class="flex-1 ">
                    <CourseTimeline />
                </Card>
                <Card icon="solar:monitor-bold" title="Dernier projet" class="flex-1">
                    <ContentParagraph>
                        J'ai créé WIMSAPP - une app pour ne plus jamais perdre ses affaires chez soi.
                         </ContentParagraph>
                         <ContentParagraph>
                            on créé nos pièces, on enregistre tous nos objets avec leur emplacement exact, et on retrouve tout en un clin d'œil 
                         depuis un tableau de bord.
                         </ContentParagraph>
                    <GeneralButton to="/dernier-projet" label="En savoir plus" center/>
                </Card>
            </div>
            <!------ Compétences ------>
            <div class="col-span-3 xl:col-span-2">
                <Card icon="solar:settings-broken" title="compétences" >
                    <CardSkills />
                </Card>
            </div>
            
        </div>
        
        
</template>

<script setup lang="ts">

    useHead({
  title: 'Hadrien Briand - Développeur Frontend à Lille',
  meta: [
    { 
      name: 'description', 
      content: 'Développeur Frontend spécialisé en Vue.js et Nuxt. Disponible en Mars 2026 pour missions en métropole lilloise ou full-remote. Découvrez qui je suis à travers ce site.' 
    },
    { property: 'og:title', content: 'Hadrien Briand - Développeur Frontend' },
    { property: 'og:description', content: 'Portfolio et CV d\'un développeur Frontend à Lille' },
    { property: 'og:type', content: 'website' },
    { property: 'og:image', content: '/images/avatar.png' },
    { name: 'twitter:card', content: 'summary' }
  ]
})

    const isLoading = ref(true)

    onMounted(() => {
            isLoading.value = false
    }) 

   

</script>

