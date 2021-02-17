<template>
  <div class="bg-white rounded-sm w-1/3 p-6 h-full">
    <h3 class="curso_video_item_title_section text-5xl">Contenido</h3>
    <div v-for="(item, index) in videos.videos" :key="index">
      <VideoItem :video="item" />
    </div>
  </div>
</template>

<script>
import VideoItem from "@/components/curso/VideoItem";
import { mapState, mapActions } from "vuex";

export default {
  created() {
    this.$store.dispatch("videos/fetchVideos");
  },
   computed: {
    ...mapState(["videos"])
  },
  components: {
    VideoItem,
  },

  data() {
    return {

    };
  },
};
</script>

<style>
</style>