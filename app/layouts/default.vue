<template>
         <GeneralHeader/>
        <main class="flex min-h-[calc(100%-90px)] ">
            <GeneralSidebar/>
            <section class="wrapper w-full p-4 pb-0">
                <div class=" rounded-t-lg bg-gray h-full ">
                    <slot></slot>
                </div>
            </section>
        </main>
</template>

<style>
    .wrapper{
        margin-left: 225px;
    }
</style>