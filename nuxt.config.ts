// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    auth: {
        origin: "http://localhost:3000"
    },
    modules: [
        '@sidebase/nuxt-auth',
    ],
    nitro: {
        plugins: [
            "~/server/api/index.ts"
        ]
    }
})
