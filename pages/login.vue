<template>
    <div>
        <button v-for="prov in providers" @click="login(prov?.id)">Login With {{ prov?.name }}</button>


    </div>
</template>

<script lang="ts" setup>
    const { status, data, signIn, signOut, getProviders } = useSession()

    const providers = await getProviders();

    const login = (provider?:string) => {
        signIn(provider);
    }

</script>