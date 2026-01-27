<template>
    <div>
        <h1 class="sr-only">Hadrien Briand - Accueil</h1>
        <GeneralLoader v-if="isLoading" />
        <div v-else class="grid grid-cols-3 gap-10 p-8">
            <!----------Experience, identité & disponibilité ---------->
            <div class=" col-span-3 lg:col-span-2">
                <Card icon="solar:chart-2-linear" title="Expérience">
                        <ExperienceChart />
                        <p class="text-[10px] lg:text-[8px] font-light italic">* Graphique 100% confiance en soi.</p>
                </Card>
            </div>
            <div class="col-span-3 lg:col-span-1 flex flex-row lg:flex-col gap-6">
                <Card icon="solar:user-bold" title="Identité" class="flex-1 relative" >
                   <div class="flex items-center">
                     <GeneralParagraph>
                        Hadrien Briand <br />
                        Développeur Frontend <br />
                        Lille
                    </GeneralParagraph>
                    <NuxtImg src="/images/avatar.png" alt="" class="w-28 absolute bottom-2 right-2" loading="lazy"/>
                   </div>
                </Card>
                <Card icon="solar:clock-circle-broken" title="Disponibilité" class="flex-1" >
                      <GeneralParagraph>
                        Mars 2026 <br />
                        Métropole Lilloise / full-remote
                        </GeneralParagraph>
                </Card>
            </div>
            <!----------Compétences, Parcours & dernier projet ---------->
            
            <div class="flex flex-col lg:flex-row xl:flex-col gap-6  col-span-3 xl:col-span-1">
                <Card icon="solar:server-path-broken" title="parcours" class="flex-1 ">
                    <CourseTimeline />
                </Card>
                <Card icon="solar:monitor-bold" title="Dernier projet" class="flex-1">
                    <GeneralParagraph>
                        J'ai créé WIMSAPP - une app pour ne plus jamais perdre ses affaires chez soi. <br />
                         on créé nos pièces, on enregistre tous nos objets avec leur emplacement exact, et on retrouve tout en un clin d'œil 
                         depuis un tableau de bord.
                         </GeneralParagraph>
                    <GeneralButton to="/last-project" label="En savoir plus" center/>
                </Card>
            </div>
            <div class="col-span-3 xl:col-span-2">
                <Card icon="solar:settings-broken" title="compétences" >
                    <CardSkills />
                </Card>
            </div>
            
        </div>
        
        
    </div>
</template>

<script setup lang="ts">
    const isLoading = ref(true)

    onMounted(() => {
        setTimeout(() => {
            isLoading.value = false
        }, 300)
    })

   

</script>
