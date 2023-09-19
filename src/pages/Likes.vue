<template>
  <div class="likes" v-if="$store.getters.lengthLikes > 0">
    <div class="likes__title">Избранныe</div>
    <ImageList :images="$store.getters.getLikes" />
  </div>
  <div class="likes__not" v-else>
    <div class="empty__title">У вас нету Избранных картинок</div>
  </div>
</template>

<script>
import ImageList from "@/components/ImageList.vue";

export default {
  name: "Likes",
  components: { ImageList },
};
</script>

<style scoped>
.likes {
  font-family: Roboto;
}
.likes__title {
  margin-top: 10px;
  text-align: center;
  font-size: 64px;
  font-weight: 700;
}
.empty__title {
  margin-top: 30px;
  text-align: center;
  font-size: 54px;
  font-weight: 600;
}
@media (max-width: 800px) {
  .likes__title {
    font-size: 44px;
  }
  .empty__title {
    font-size: 34px;
  }
}
</style>
