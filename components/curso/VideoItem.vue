<template>
  <div class="flex my-6 justify-between cursor-pointer">
    <div class="curso_video_card flex justify-center">
      <i class="mt-5 fas fa-play-circle text-white text-4xl"></i>
    </div>
    <div class="mt-3">
      <p class="curso_video_item_title mb-3">{{ video.title }}</p>
      <span class="text-gray-500"> <i class="far fa-clock"></i> 5 min</span>
    </div>
    <i class="fas fa-check-circle text-4xl ml-2 mt-6 primary-color"></i>
    <img src="~/assets/img/0.png" alt="">


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