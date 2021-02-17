<template>
  <div class="bg-white rounded-sm w-1/3 p-6 h-full" v-cloak>
    <h3 class="curso_video_item_title_section text-5xl">Contenido</h3>
    <div v-for="(item, index) in videos" :key="index">
      <VideoItem :video="item" />
    </div>
  </div>
</template>

<script>
import VideoItem from "@/components/curso/VideoItem";

export default {
  props: {
    videos: {},
  },

  components: {
    VideoItem,
  },

  data() {
    return {};
  },
};
</script>

<style>
</style>