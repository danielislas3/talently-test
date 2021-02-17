<template >
  <div class="flex flex-col h-screen bg-white<">
    <div class="grid place-items-center mx-2 my-20">
      <div class="bg-white p-12 px-6 py-10 rounded-md w-1/4">
        <Logo class="mx-auto" />

        <form class="mt-10" @submit.prevent="userRegister" @change="error=false">
          <div class="flex flex-col">
            <div class="bg-orange-500 rounded p-3 text-sm text-teal-100" v-if="error"
            >
              <ul v-for="(item, index) in error" :key="index">
                <li>{{ item }}</li>
              </ul>
            </div>
            <label for="email" class="my-2">Nombre</label>
            <input
              v-model="auth.name"
              type="text"
              name="nombre"
              class="border rounded-md px-3 py-3"
              required
            />
          </div>
          <div class="flex flex-col">
            <label for="email" class="my-2">Email</label>
            <input
              v-model="auth.email"
              type="email"
              name="email"
              class="border rounded-md px-3 py-3"
              required
            />
          </div>

          <div class="flex flex-col">
            <label for="password" class="my-2">Password</label>
            <input
              v-model="auth.password"
              type="password"
              name="password"
              class="border rounded-md px-3 py-3"
              required
            />
          </div>

          <button class="auth_btn p-3 mt-4 rounded-md w-full" type="submit">
            Registrarse
          </button>
        </form>
        <div class="mt-8 text-center">
          <p>
            ¿Ya tienes cuenta?
            <nuxt-link
              class="cursor-pointer font-bold primary-color"
              to="/login"
              >Inicia sesión</nuxt-link
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  auth: false,
  data() {
    return {
      auth: {
        name: "",
        email: "",
        password: "",
      },
      error:false
    };
  },
  methods: {
    async userRegister() {
      const data = await this.$axios.post("/auth/register", this.auth);
      if (data.data.success) {
        alert("Usuario creado correctamente");
        this.$router.replace("/login");
      } else {
        this.error=this.errorFilter(data.data.errors);
        
      }
    },
    errorFilter(err) {
      const errors = err.response
        ? err.response.data.errors || err.response
        : err;
      console.log("err: ", errors);

      Object.entries(errors).forEach(
        ([key, value]) => (errors[key] = value[0])
      );

      console.log("errors: ", errors);
      return errors;
    },
  },
};
</script>



</style>
