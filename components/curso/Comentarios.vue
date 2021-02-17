<template>
  <div class="w-full bg-white my-4 bg-primary">
    <p class="curso_video_item_title_section w-full my-6">
      {{ commentsCount }} Comentarios
    </p>
    <AgregarComentario class="my-6" />
    <div v-for="(item, index) in comments" :key="index">
      <Comentario class="my-4" :comment="item" />
    </div>
  </div>
</template>

<script>
import Comentario from "@/components/curso/Comentario";
import AgregarComentario from "@/components/curso/AgregarComentario";

export default {
  components: {
    Comentario,
    AgregarComentario,
  },
  props: {
    comments: null,
  },
  computed: {
    commentsCount() {
      return this.comments.length;
    },
  },
};
</script>

<style>
</style>