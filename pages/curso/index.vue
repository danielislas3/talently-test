<template>
  <div>
    <div class="flex justify-between ">
      <iframe
        src="https://player.vimeo.com/video/39619054"
        width="640"
        height="360"
        controls
      ></iframe>
      <ListaContenido/>
    </div>
  </div>
</template>

<script>
import ListaContenido from "@/components/curso/ListaContenido";

export default {
  components: {
    ListaContenido,
  },
  layout: "clase",
};
</script>

<style>
</style>