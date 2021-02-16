<template>
  <div class="container h-screen mx-auto mt-4">
    <nav class="flex justify-between mb-12">
      <Logo />
      <!-- {{ $ath.user.name }} -->
      <nuxt-link to="/login">Cerrar sesion</nuxt-link>
    </nav>
    <Nuxt />
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>