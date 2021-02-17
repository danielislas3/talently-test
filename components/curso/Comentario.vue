<template>
  <div class="bg-white rounded flex p-2 pt-4">
    <i class="fas fa-user-circle text-4xl m-2 text-gray-700"></i>

    <div class="w-full">
      <div class="flex justify-between">
        <p class="ml-6 curso_comment_name">
          {{ commentName }}
          <span>{{ $moment(comment.created_at).fromNow() }}</span>
        </p>

        <div class="dropdown" v-if="isMyComment">
          <i
            class="fas fa-ellipsis-v text-gray-700 cursor-pointer mr-4"
            @click="showDropdown"
          ></i>
          <div class="dropdown-content p-2" id="dropdown">
            <p class="m-2 ml cursor-pointer">
              <i class="far fa-edit"></i>
              <span class="ml-4">Editar</span>
            </p>
            <p class="m-2 ml cursor-pointer">
              <i class="far fa-trash-alt"></i>
              <span class="ml-5" @click="eliminarComentario(comment)"
                >Eliminar</span
              >
            </p>
          </div>
        </div>
      </div>
      <p class="m-2 pl-4 p-2">
        {{ comment.content }}
      </p>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    comment: {},
  },
  computed: {
    isMyComment() {
      return this.$auth.user.id == this.comment.user_id;
    },
    commentName() {
      return this.comment != undefined
        ? this.comment.user.name
        : this.$auth.user.name;
    },
  },
  methods: {
    ...mapActions(["eliminarComentario"]),
    showDropdown() {
      let elementt = document.querySelector("#dropdown");
      console.log(elementt);
      elementt.classList.toggle("show");

      window.onclick = function (event) {
        if (!event.target.matches(".fa-ellipsis-v")) {
          var dropdowns = document.getElementsByClassName("dropdown-content");
          var i;
          for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains("show")) {
              openDropdown.classList.remove("show");
            }
          }
        }
      };
    },
  },
};
</script>

<style>
</style>