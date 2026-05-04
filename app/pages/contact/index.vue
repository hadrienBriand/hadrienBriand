<template>
    <section aria-label="Contact" class="h-full pb-40 md:pb-0 relative">
        <h1 class="sr-only">Contact</h1>
        
        <div class="flex justify-between  gap-10 lg:gap-0">
                <div class=" w-full mx-auto lg:mx-0  flex gap-2 justify-center lg:justify-between flex-wrap">
                    <Card icon="solar:mailbox-broken" title="Me contacter" class="w-full md:w-4/5 lg:w-1/2">
                        <GeneralForm/>
                    </Card>
                    <Card title="Informations de contact" icon="solar:mailbox-linear" class="w-full md:w-4/5 lg:w-1/3 h-fit ">
                        <a class="flex items-center gap-8 mb-4" href="mailto:hbriand.pro@gmail.com"><Icon name="ic:round-mail" class="text-primary text-xl"/> hbriand.pro@gmail.com</a>
                        <a class="flex items-center gap-8" href="https://www.linkedin.com/in/hadrienbriand" target="_blank"><Icon name="ri:linkedin-fill" class="text-primary text-xl"/>hadrienbriand</a>
                    </Card>
                </div>
                 <client-only>
                    <div class=" lg:w-1/2 flex  justify-center items-center absolute bottom-0 right-0 " aria-hidden="true">
                        <NuxtImg src="/images/workflow.png"  loading="lazy" class="w-64 lg:w-full" />
                    </div>
                </client-only>
        </div>
    </section>
</template>