<template>
  <div class="search">
    <div class="container">
      <div class="search__inner">
        <div class="search__block">
          <form @submit.prevent>
            <input
              v-on:change="changeSearchPhoto"
              v-model="search"
              type="text"
              placeholder="Поиск"
            />
            <img @click="searchPhoto" src="../assets/icon__search.svg" alt="" />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      search: "",
    };
  },
  methods: {
    searchPhoto(event) {
      this.$emit("search", this.search);
      //this.search = "";
    },
    changeSearchPhoto(event) {
      this.$emit("search", this.search);
    },
  },
};
</script>

<style scoped>
input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration {
  display: none;
}
.search {
  padding: 92px 0px;
  position: relative;
  z-index: 0;
  background: url("../assets/header_back.png");
}
.search::before {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  z-index: 2;
  background: rgba(0, 0, 0, 0.5);
}
.search__inner {
  position: relative;
  z-index: 5;
  width: 100%;
  display: flex;
  justify-content: center;
}
.search__block {
  position: relative;
  width: 50%;
  min-width: 300px;
}
.search__block input {
  padding: 14px 14px 14px 6%;
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 28px;
  outline: none;
  width: 100%;
  border: none;
}
.search__block img {
  cursor: pointer;
  border: none;
  background-color: transparent;
  position: absolute;
  z-index: 1000;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
}
</style>
