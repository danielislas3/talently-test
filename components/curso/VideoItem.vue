<template>
  <div class="flex my-6 justify-between">
    <div class="flex">
      <div class="curso_video_card flex justify-center cursor-pointer">
        <i class="mt-5 fas fa-play-circle text-white text-4xl"></i>
      </div>

      <div class="mt-3 ml-5">
        <p class="curso_video_item_title mb-3">{{ video.title }}</p>
        <span class="text-gray-500"> <i class="far fa-clock"></i> 5 min</span>
      </div>
    </div>
    <!-- <i class="fas fa-check-circle text-4xl ml-2 mt-6 primary-color"></i> -->
    <img
      src="~/assets/img/50.png"
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
};
</script>

<style>
</style>