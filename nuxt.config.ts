// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    app: {
        head: {
            title: 'Asta Insieme',
            meta: [
                {name: 'description', content: 'Tutti i servizi che ti servono per partecipare ad aste giudiziarie'}
            ],
            link: [
                {rel: 'stylesheet', href: "https://fonts.googleapis.com/icon?family=Material+Icons"}
            ]
        }
    }
})
