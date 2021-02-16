<template>
  <div class="container h-screen mx-auto mt-4">
    <nav class="flex justify-between mb-12">
      <Logo />
      <!-- {{ $ath.user.name }} -->
      <p class="cursor-pointer" @click="logout">Cerrar sesión <i class="fas fa-sign-out-alt"></i></p>
    </nav>
    <Nuxt />
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$auth.logout();
      this.$router.push("/login");
    },
  },
};
</script>

<style>
</style>