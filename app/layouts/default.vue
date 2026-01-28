<template>
         <GeneralHeader/>
        <main class="flex min-h-screen ">
            <GeneralSidebar/>
            <div class=" w-full px-0 lg:px-4 pt-[60px] lg:pt-[90px] pb-0 transition" :class="!wrapper ? '' :'wrapper'">
                <div class=" rounded-t-lg bg-gray h-full p-4">
                    <slot></slot>
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

<style>
    .wrapper{
        margin-left: 225px;
    }
    @media screen and (max-width:1035px) {
        .wrapper{
            margin-left: 0;
        }
    }
</style>