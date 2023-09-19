<template>
  <div class="modal__inner">
    <div class="modal__header">
      <div class="modal__user">
        <div class="modal__icon"></div>
        <div class="modal__info">
          <div class="modal__name">Vincent van Gogh</div>
          <div class="modal__username">@vincentvangogh</div>
        </div>
      </div>
      <div class="modal__actions">
        <div class="modal__like">
          <img src="../assets/like.svg" alt="">
        </div>
        <div class="modal__downloand">Downloand</div>
      </div>
    </div>
    <div class="modal__image">
      <img :src="bigImage.urls.regular" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props:{
    bigImage:{
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>

</style>