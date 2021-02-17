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
    this.$store.dispatch("fetchComentarios", this.$route.params.id);
  },
  mounted() {
    this.watchVimeo();
  },
  beforeDestroy() {
    console.log("ACTUALIZANDO ESTADO");
    this.updateProgress({
      videoId: this.$route.params.id,
      progress: this.progress,
    });
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
    return {
      duration: null,
      progress: 0,
    };
  },
  methods: {
    ...mapActions(["updateProgress"]),

    async watchVimeo() {
      const iframe = document.querySelector("iframe");
      const player = new Vimeo.Player(iframe);

      player.on("play", ({ percent }) => {
        this.progress = Math.round(percent * 10);
        this.setNewProgress();
      });
      player.on("pause", ({ percent }) => {
        this.progress = Math.round(percent * 10);
        this.setNewProgress();
      });
      player.on("ended", ({ percent }) => {
        this.progress = Math.round(percent * 10);
        this.setNewProgress();
      });

      const duration = await player.getDuration();
      this.duration = duration;
    },
    setNewProgress() {
      console.log("ACTUALIZANDO ESTADO");
      this.updateProgress({
        videoId: this.$route.params.id,
        progress: this.progress,
      });
    },
  },
};
</script>

<style>
</style>