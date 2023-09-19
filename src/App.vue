<template>
  <div class="app">
    <Header />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "@/components/Header.vue"
export default {
  components: {
    Header,
  },
  name: 'App'
}
</script>

<style scoped>
  * {
    margin: 0px;
    padding: 0px;
    border: 0px;
    box-sizing: border-box;
  }
</style>