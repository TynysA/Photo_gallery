<template>
  <div class="images">
    <div class="container">
      <div class="images__inner">
        <div @click="$router.push(`/${image.id}`)" class="image__block" v-for="image in images">
          <img :src="image.urls.regular" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ImageList",
  props:{
    images:{
      type: Array,
    },
  },
  methods: {
  },
}
</script>

<style scoped>
  .images{
    margin-top: 37px;
  }
  .images__inner{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    flex-wrap: wrap;
    position: relative;
  }
  .image__block{
    width: 31%;
    margin-top: 30px;
    cursor: pointer;
  }
  .image__block img{
    width: 100%;
    max-width: 473px;
    height: 100%;
    max-height: 440px;
    object-fit: cover;
  }
  @media(max-width:740px){
    .image__block{
      width:100%;
    }
    .image__block img{
      max-width: none;
    }
  }

</style>