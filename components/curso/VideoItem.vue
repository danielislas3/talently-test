<template>
  <div class="flex my-6 justify-between" v-cloak>
    <div class="flex">
      <nuxt-link :to="`/curso/${video.id}`">
        <div class="curso_video_card flex justify-center cursor-pointer">
          <i class="mt-5 fas fa-play-circle text-white text-4xl"></i>
        </div>
      </nuxt-link>

      <div class="mt-3 ml-5">
        <p class="curso_video_item_title mb-3">{{ video.title }}</p>
        <span class="text-gray-500"> <i class="far fa-clock"></i> 5 min</span>
      </div>
    </div>
    <i
      v-if="imgProgress === false"
      class="fas fa-check-circle text-2xl ml-2 mt-6 primary-color"
    ></i>
    <img
      v-else
      :src="require(`~/assets/img/${imgProgress}.png`)"
      class="curso_video_img_progresso mt-6"
      alt="progreso"
    />
  </div>
</template>

<script>
export default {
  props: {
    video: {},
  },
  computed: {
    imgProgress() {
      const x = this.video.progress;
      switch (true) {
        case x <= 2:
          return '0';
        case x >= 3 && x < 5:
          return 25;
        case x >= 5 && x < 7:
          return 50;
        case x >= 7 && x < 10:
          return 75;
        case x == 10:
          return false;
      }
    },
  },
};
</script>

<style>
</style>