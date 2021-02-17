<template>
  <div class="bg-white rounded flex p-2">
    <i class="fas fa-user-circle text-4xl m-2 primary-color"></i>
    <input
      type="text"
      v-model="content"
      placeholder="Agregar comentario"
      @keyup.13="enterComentario"
      class="m-2 w-full pl-4 p-2 curso_agregar_comentario_input"
    />
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      content: null,
    };
  },
  methods: {
    ...mapActions(["agregarComentario"]),

    enterComentario() {
      this.agregarComentario({
        content: this.content,
        user_id: this.$auth.user.id,
        content_id: this.$route.params.id?this.$route.params.id:1,
      });
      this.content=null
    },
    // callEvent() {
    //   console.log("Event called");
    // },
    // mounted() {
    //   window.addEventListener("keyup", function (event) {
    //     if (event.keyCode === 13) {
    //       app.callEvent();
    //     }
    //   });
    // },
  },
};
</script>

<style>
</style>