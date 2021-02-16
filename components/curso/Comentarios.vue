<template>
  <div class="w-full border bg-white my-4 bg-primary">
    <p class="curso_video_item_title_section w-full my-6 ">2 Comentarios</p>
    <AgregarComentario class="my-6"/>
    <Comentario/>
  </div>
</template>

<script>
import Comentario from "@/components/curso/Comentario";
import AgregarComentario from "@/components/curso/AgregarComentario";

export default {
  components: {
    Comentario,
    AgregarComentario
  },
  layout: "clase",
};
</script>

<style>

</style>