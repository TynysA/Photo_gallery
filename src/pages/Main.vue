<template>
  <div class="main">
    <Search @search="searchPhoto" />
    <ImageList :images="images" />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import ImageList from "@/components/ImageList.vue";
import Search from "@/components/Search.vue";
export default {
  components: {
    Search,
    ImageList,
    Header,
  },
  name: "Main",
  data() {
    return {
      // accessKey: "0yC2q2TbgoMTm5t0pRpYktvhBTH780A2L7sYEPaHqmo",
      accessKey: "HwoR01N0VfZ90Kh5JAOZozBVecUxJ65ekUjxrvmnW1o",
      url: "https://api.unsplash.com/",
      images: [],
      modalVisiable: false,
    };
  },
  mounted() {
    this.fetchRandomPhoto();
  },
  methods: {
    fetchRandomPhoto() {
      let url =
        this.url + "photos/random" + `?count=8&client_id=${this.accessKey}`;
      fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          // console.log("json", json);
          this.images = json;
        })
        .catch((err) => {
          console.log("errro", err);
        });
    },
    createPost(post) {
      this.posts.push(post);
    },
    searchPhoto(search) {
      let url =
        this.url +
        "search/photos" +
        `?query=` +
        search +
        `&client_id=${this.accessKey}`;
      fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          this.images = json.results;
        })
        .catch((err) => {
          console.log("errro", err);
        });
    },
  },
};
</script>

<style scoped>
.main {
  margin-bottom: 40px;
}
</style>
