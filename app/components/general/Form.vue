<template>
    <form action="" class="w-full lg:w-4/5" @submit.prevent="handleSubmit">
        <fieldset>
            <legend class="sr-only">Formulaire de contact</legend>
            
        <div class="flex flex-col mb-4">
      <label for="nom-complet" class="text-sm text-primary mb-2 dark:text-primary-light">Nom complet </label>
      <input 
        v-model="form.fullName" 
        type="text" 
        id="nom-complet" 
        name="nom-complet" 
        required 
        autocomplete="name"
        aria-required="true"
        placeholder="Prénom Nom"
        class="p-2 border border-primary  text-sm text-primary rounded-md  placeholder-primary/65 dark:bg-secondary dark:placeholder-white font-medium focus-visible:outline-2 focus-visible:outline-primary-dark"
      >
    </div>

            <div class="flex flex-col mb-4">
            <label for="email" class="text-sm text-primary mb-2 dark:text-primary-light">
                Adresse e-mail 
            </label>
            <input 
                v-model="form.email" 
                type="email" 
                id="email" 
                name="email" 
                required 
                placeholder="exemple@exemple.com"
                autocomplete="email"
                aria-required="true"
                aria-describedby="email-format"
                class="text-sm p-2 border border-primary rounded-md   placeholder-primary/65 font-medium focus-visible:outline-2 dark:bg-secondary dark:placeholder-white focus-visible:outline-primary-dark "
            >
            <small id="email-format" class="sr-only">Format attendu : exemple@domaine.fr</small>
            </div>

            <div class="flex flex-col mb-8">
            <label for="message" class="text-sm text-primary mb-2 dark:text-primary-light">
                Message 
            </label>
            <textarea 
                v-model="form.message" 
                id="message" 
                name="message" 
                rows="6" 
                required
                aria-required="true"
                aria-describedby="message-info"
                 class="text-sm p-2 border border-primary rounded-md   placeholder-primary/65  dark:bg-secondary dark:placeholder-whitefont-medium focus-visible:outline-2 focus-visible:outline-primary-dark"
            ></textarea>
            <small id="message-info" class="sr-only">Décrivez votre demande en quelques phrases.</small>
            </div>

            <div>
            <GeneralButton  :disabled="loading" label="Envoyer" type="submit"/>
            </div>
        </fieldset>
         <div v-if="showSuccess" class="alert alert-success">
            ✅ Message envoyé avec succès ! Je vous répondrai bientôt.
        </div>

        <div v-if="showError" class="alert alert-error">
        ❌ {{ errorMessage }}
        </div>
    </form>
</template>

<script setup lang="ts">

    const form = ref<contactForm>({
        fullName:'',
        email:'',
        message:''
    })
    
    const loading = ref(false)
    const showSuccess = ref(false)
    const showError = ref(false)
    const errorMessage =ref('')

    function resetForm(){
        form.value = {fullName:'',email:'',message:''}
    }

   async  function handleSubmit(){
    loading.value = true;
    showSuccess.value = false;
    showError.value = false;

    try {
        await $fetch('/api/contact',{
            method:'POST',
            body:form.value
        })

        showSuccess.value =  true
        resetForm()
        setTimeout(() => {
      showSuccess.value = false
    }, 5000)
    } catch (error:any) {
        showError.value = true;
        errorMessage.value = error.data?.message || "une erreur est survenue"
    }finally{
        loading.value= false;
    }
   }
</script>