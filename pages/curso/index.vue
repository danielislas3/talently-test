<template>
  <div>
    <div class="flex justify-between">
      <div class="w-2/3 mr-12">
        <div >
          <iframe
          class="w-full"
            src="https://player.vimeo.com/video/39619054"
            width="1000"
            height="465"
            controls
          ></iframe>
        </div>
        <div class="bg-white mb-6 rounded-sm p-6">
          <p
            class="curso_video_item_title_section text-5xl mb-2"
            v-if="loading"
          >
            {{ videos[0].title }}
          </p>
          <p v-if="loading">
            {{ videos[0].article.split("hic")[0] }}
          </p>
        </div>
        <div>
          <Comentarios :comments="comments" />
        </div>
      </div>

      <ListaContenido :videos="videos" />
    </div>
  </div>
</template>

<script>
import ListaContenido from "@/components/curso/ListaContenido";
import Comentarios from "@/components/curso/Comentarios";

export default {
  layout: "clase",
  components: {
    ListaContenido,
    Comentarios,
  },
  created() {
    this.$store.dispatch("fetchVideos");
    this.$store.dispatch("fetchComentarios",1);

  },
  

  computed: {
    videos() {
      return this.$store.getters["getVideos"];
    },
    comments() {
      return this.$store.getters["getComentarios"];
    },
    loading() {
      return this.videos[0] ? true : false;
    },
  },
  data() {
    return {};
  },
};
</script>

<style>
</style>