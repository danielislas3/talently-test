<template>
  <div>
    <div class="flex justify-between">
      <div class="w-2/3 mr-12">
        <div class="">
          <iframe
            :src="`https://player.vimeo.com/video/${
              video.video_url.split('/')[3]
            }`"
            width="720"
            height="360"
            controls
          ></iframe>
        </div>
        <div class="bg-white mb-6 rounded-sm p-6">
          <p class="curso_video_item_title_section text-5xl mb-2">
            {{ video.title }}
          </p>
          <p>
            {{ video.article.split("libero")[0] }}
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
import { mapActions } from "vuex";

export default {
  layout: "clase",
  components: {
    ListaContenido,
    Comentarios,
  },
  created() {
    this.$store.commit("setVideoActual", this.$route.params.id);
    this.$store.dispatch("fetchComentarios",this.$route.params.id);
  },

  computed: {
    videos() {
      return this.$store.getters["getVideos"];
    },
     comments() {
      return this.$store.getters["getComentarios"];
    },
    video: {
      get() {
        return this.$store.state.video;
      },
    },
  },
  data() {
    return {};
  },
};
</script>

<style>
</style>