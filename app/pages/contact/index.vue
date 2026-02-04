<template>
    <section aria-label="Contact">
        <h1 class="sr-only">Contact</h1>
        
        <div class="flex justify-between flex-col lg:flex-row  gap-10 lg:gap-0">
                <div class=" w-full md:w-4/5 lg:w-1/2 mx-auto lg:mx-0 ">
                    <Card icon="solar:mailbox-broken" title="Me contacter" class="flex-1 relative">
                        <GeneralForm/>
                    </Card>
                </div>
                <div class=" lg:w-1/2 flex  justify-center items-center absolute bottom-0 right-0 " aria-hidden="true">
                    <NuxtImg src="/images/workflow.png"  loading="lazy" class="w-64 lg:w-full" />
                </div>
        </div>
    </section>
</template>