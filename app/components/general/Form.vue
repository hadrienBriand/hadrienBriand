<template>
    <form action="" class="w-full lg:w-4/5">
        <fieldset>
            <legend class="sr-only">Formulaire de contact</legend>
            
        <div class="flex flex-col mb-4">
      <label for="nom-complet" class="text-sm text-primary mb-2">Nom complet </label>
      <input 
        type="text" 
        id="nom-complet" 
        name="nom-complet" 
        required 
        autocomplete="name"
        aria-required="true"
        placeholder="Prénom Nom"
        class="p-2 border border-primary text-sm text-primary rounded-md  placeholder-primary/65 font-medium focus-visible:outline-2 focus-visible:outline-primary-dark"
      >
    </div>

            <div class="flex flex-col mb-4">
            <label for="email" class="text-sm text-primary mb-2">
                Adresse e-mail 
            </label>
            <input 
                type="email" 
                id="email" 
                name="email" 
                required 
                placeholder="exemple@exemple.com"
                autocomplete="email"
                aria-required="true"
                aria-describedby="email-format"
                class="text-sm p-2 border border-primary rounded-md   placeholder-primary/65 font-medium focus-visible:outline-2 focus-visible:outline-primary-dark "
            >
            <small id="email-format" class="sr-only">Format attendu : exemple@domaine.fr</small>
            </div>

            <div class="flex flex-col mb-8">
            <label for="message" class="text-sm text-primary mb-2">
                Message 
            </label>
            <textarea 
                id="message" 
                name="message" 
                rows="6" 
                required
                aria-required="true"
                aria-describedby="message-info"
                 class="text-sm p-2 border border-primary rounded-md   placeholder-primary/65 font-medium focus-visible:outline-2 focus-visible:outline-primary-dark"
            ></textarea>
            <small id="message-info" class="sr-only">Décrivez votre demande en quelques phrases.</small>
            </div>

            <div>
            <GeneralButton label="Envoyer" type="submit"/>
            </div>
        </fieldset>
    </form>
</template>