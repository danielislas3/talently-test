<template>
  <div class="container h-screen mx-auto mt-4">
    <nav class="flex justify-between mb-12">
      <Logo />
      <!-- {{ $ath.user.name }} -->
      <nuxt-link to="/login"
        >Cerrar sesión <i class="fas fa-sign-out-alt"></i
      ></nuxt-link>
    </nav>
    <Nuxt />
  </div>
</template>

<script>
const Cookie = process.client ? require("js-cookie") : undefined;

export default {
  methods: {
    logout() {
      Cookie.remove("auth");
      this.$store.commit("setAuth", null);
    },
  },
};
</script>

<style>
</style>