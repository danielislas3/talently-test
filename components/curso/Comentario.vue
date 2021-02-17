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
          <div class="dropdown-content p-2" :id="`drop${comment.id}`">
            <p class="m-2 ml cursor-pointer" @click="isEdited = true">
              <i class="far fa-edit"></i>
              <span class="ml-4">Editar</span>
            </p>
            <p
              class="m-2 ml cursor-pointer"
              @click="eliminarComentario(comment)"
            >
              <i class="far fa-trash-alt"></i>
              <span class="ml-5">Eliminar</span>
            </p>
          </div>
        </div>
      </div>
      <p class="m-2 pl-4 p-2" v-if="!isEdited">
        {{ comment.content }}
      </p>

      <input
        v-else
        type="text"
        v-model="content"
        placeholder="Agregar comentario"
        @keyup.enter="editarComentario"
        @keyup.esc="isEdited = false"
        class="m-2 w-11/12 pl-4 p-2 curso_agregar_comentario_input"
      />
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    comment: {},
  },
  data() {
    return {
      isEdited: false,
      content: this.comment.content,
    };
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
    ...mapActions(["eliminarComentario", "updateComentario"]),
    showDropdown() {
      let elementt = document.querySelector(`#drop${this.comment.id}`);
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
    editarComentario() {
      this.updateComentario({ comment: this.comment, content: this.content });
      this.isEdited = false;
    },
  },
};
</script>

<style>
</style>