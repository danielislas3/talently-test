<template>
  <div>
    <div class="flex justify-between">
      <div class="w-2/3 mr-12">
        <div class="">
          <iframe
            src="https://player.vimeo.com/video/39619054"
            width="720"
            height="360"
            controls
          ></iframe>
        </div>
        <div class="bg-white mb-6 rounded-sm p-6">
          <p class="curso_video_item_title_section text-5xl mb-2">Clase 3</p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore
            ipsum quia nulla, fugit sit unde magni quos ad soluta, architecto
            sunt laboriosam officia! Asperiores officiis deleniti fuga error,
            sunt voluptatum. Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Inventore ipsum quia nulla, fugit sit unde magni quos ad
            soluta, architecto sunt laboriosam officia! Asperiores officiis
            deleniti fuga error, sunt voluptatum.
          </p>
        </div>
        <div>
          <Comentarios />
        </div>
      </div>

      <ListaContenido />
    </div>
  </div>
</template>

<script>
import ListaContenido from "@/components/curso/ListaContenido";
import Comentarios from "@/components/curso/Comentarios";

export default {
  components: {
    ListaContenido,
    Comentarios,
  },
  layout: "clase",
};
</script>

<style>
</style>