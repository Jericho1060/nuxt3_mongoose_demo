<template>
  <div>
    <NuxtLoadingIndicator></NuxtLoadingIndicator>
    {{ users.data }}

    <NuxtLink to="login">Login</NuxtLink>
    <NuxtPage></NuxtPage>
  </div>
</template>


<script lang="ts" setup>
const users = await useFetch("/api/users")
</script>