<template>
    <div>
        <h1 class="sr-only">Hadrien Briand - Accueil</h1>
        <GeneralLoader v-if="isLoading" />
        <div v-else class="grid grid-cols-3 gap-10 p-8">
            <!----------Experience, identité & disponibilité ---------->
            <div class=" col-span-2">
                <Card icon="solar:chart-2-linear" title="Expérience">
                        <ExperienceChart />
                </Card>
            </div>
            <div class="flex flex-col gap-6">
                <Card icon="solar:user-bold" title="Identité" class="flex-1 relative" >
                   <div class="flex items-center">
                     <p class="text-sm text-gray-700">
                        Hadrien Briand <br />
                        Développeur frontend <br />
                        Lille
                    </p>
                    <NuxtImg src="/images/avatar.png" alt="" class="w-28 absolute bottom-2 right-2" loading="lazy"/>
                   </div>
                </Card>
                <Card icon="solar:clock-circle-broken" title="Disponibilité" class="flex-1" >
                      <p class="text-sm text-gray-700">
                        Mars 2026 <br />
                        Métropole Lilloise / full-remote
                        </p>
                </Card>
            </div>
            <!----------Compétences, Parcours & dernier projet ---------->
            <div class=" col-span-2">
                <Card icon="solar:settings-broken" title="compétences" >
                    <CardSkills />
                </Card>
            </div>
            <div>
                <Card icon="solar:server-path-broken" title="parcours" class="mb-6">
                    <CourseTimeline />
                </Card>
                <Card icon="solar:monitor-bold" title="Dernier projet">
                    <p class="text-sm text-gray-700 my-4 px-2">
                        J'ai créé WIMSAPP - une app pour ne plus jamais perdre ses affaires chez soi. <br />
                         on créé nos pièces, on enregistre tous nos objets avec leur emplacement exact, et on retrouve tout en un clin d'œil 
                         depuis un tableau de bord.</p>
                    <GeneralButton to="/last-project" label="En savoir plus" center/>
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
