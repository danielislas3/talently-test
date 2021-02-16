<template>
  <div class="bg-white rounded-sm w-1/3 p-6">
    <h3 class="curso_video_item_title_section text-5xl">Contenido</h3>
    <div v-for="(item, index) in videos" :key="index">
      <VideoItem :video="item"/>
    </div>
  </div>
</template>

<script>
import VideoItem from "@/components/curso/VideoItem";

export default {
   components: {
    VideoItem,
  },
  data() {

    return {
      videos: [
        {
          id: 1,
          title: "Quae.",
          description: "Eveniet aut vero.",
          video_url: "https://vimeo.com/39619054",
          article: "asdasdasd",
        },
        {
          id: 2,
          title: "asdasd.",
          description: "Eveniet aut vero.",
          video_url: "https://vimeo.com/39619054",
          article: "asdasdasd",
        },
      
      ],
    };
  },
};
</script>

<style>
</style>