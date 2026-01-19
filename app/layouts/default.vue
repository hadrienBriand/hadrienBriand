<template>
    <div>
        <GeneralHeader/>
        <main class="flex ">
            <GeneralSidebar/>
            <section class="w-full p-4">
                <div class="wrapper rounded-t-lg bg-secondary">
                    <slot></slot>
                </div>
            </section>
        </main>
    </div>
</template>