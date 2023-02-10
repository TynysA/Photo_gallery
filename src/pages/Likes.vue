<template>
  <div class="likes">
    <ImageList :images="$store.getters.getLikes"/>
  </div>
</template>

<script>
import ImageList from "@/components/ImageList.vue";

export default {
  name: "Likes",
  components: {ImageList}
}
</script>

<style scoped>

</style>