import { NuxtAuthHandler } from '#auth'
import GithubProvider from 'next-auth/providers/github'
import DiscordProvider from 'next-auth/providers/discord'
export default NuxtAuthHandler({
    secret: 'MonSecret',
    providers: [
        // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
        GithubProvider.default({
           clientId: 'enter-your-client-id-here',
           clientSecret: 'enter-your-client-secret-here'
        }),
        
        // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
        DiscordProvider.default({
            clientId: 'enter-your-client-id-here',
            clientSecret: 'enter-your-client-secret-here'
         }),

    ]
})