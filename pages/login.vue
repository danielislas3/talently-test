<template >
  <div class="flex flex-col h-screen bg-white<">
    <div class="grid place-items-center mx-2 my-20">
      <div class="bg-white p-12 px-6 py-10 rounded-md w-1/4">
        <Logo class="mx-auto" />

        <form class="mt-10" @submit.prevent="userLogin">
          <div class="flex flex-col">
            <label for="email" class="my-2">Email</label>
            <input
              type="email"
              name="email"
              class="border rounded-md px-3 py-3"
              v-model="login.email"
              required
            />
          </div>

          <div class="flex flex-col my-4">
            <p class="mb-2 my-2 flex justify-between">
              <label for="password" class="">Password</label>
              <span class="cursor-pointer font-bold primary-color"
                >¿Se te olvidó tu contraseña?</span
              >
            </p>
            <input
              type="password"
              name="password"
              class="border rounded-md px-3 py-3"
              v-model="login.password"
              required
            />
          </div>

          <button class="auth_btn p-3 mt-4 rounded-md w-full" type="submit">
            Iniciar sesión
          </button>
        </form>
        <div class="mt-8 text-center">
          <p>
            ¿Nuevo en Talently?
            <nuxt-link
              class="cursor-pointer font-bold primary-color"
              to="/signup"
              >Crea una cuenta</nuxt-link
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      login: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async userLogin() {
      try {
        let { data } = await this.$auth.loginWith("local", {
          data: this.login,
        });
        this.$auth.strategy.token.set(data.access_token);
        this.$auth.setUserToken(data.access_token);
      } catch (err) {
        alert("Usuario o contraseña incorrectos");
      }
    },
  },
};
</script>




