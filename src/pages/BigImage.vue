<template>
  <div class="big_image">
    <div class="modal">
      <div class="container">
        <div class="modal__inner">
          <div class="modal__header">
            <div class="modal__user">
              <div class="modal__icon">
                <img :src="this.bigImage?.user?.profile_image?.medium" alt="" />
              </div>
              <div class="modal__info">
                <div class="modal__name">{{ this.bigImage?.user?.name }}</div>
                <div class="modal__username">
                  @{{ this.bigImage?.user?.username }}
                </div>
              </div>
            </div>
            <div class="modal__actions">
              <div
                @click="removeLike"
                class="modal__like isLiked"
                v-if="isLiked"
              >
                It is liked
              </div>
              <div @click="addToLike" class="modal__like" v-else>
                <img src="../assets/like_black.svg" alt="" />
              </div>
              <a
                target="_blank"
                :href="this.bigImage?.urls?.regular"
                download
                class="modal__download"
              >
                <img src="../assets/icon__downlowd.png" alt="" />
                Downloand
              </a>
            </div>
          </div>
          <div class="modal__image">
            <img :src="this.bigImage?.urls?.regular" alt="" />
          </div>
        </div>
        <!--            <Modal :bigImage="bigImage" />-->
      </div>
    </div>
  </div>
</template>

<script>
import svgIcon from "../assets/like_black.svg";
export default {
  name: "BigImage",
  components: {
    svgIcon,
  },
  data() {
    return {
      accessKey: "0yC2q2TbgoMTm5t0pRpYktvhBTH780A2L7sYEPaHqmo",
      //accessKey: "HwoR01N0VfZ90Kh5JAOZozBVecUxJ65ekUjxrvmnW1o",
      url: "https://api.unsplash.com/photos/",
      bigImage: {},
      isLiked: false,
    };
  },
  created() {
    let url = this.url + `${this.$route.params.id}?client_id=${this.accessKey}`;
    let liked = false;
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        this.bigImage = json;
        this.isLiked = this.$store.getters.findThatLiked(json.id);
      })
      .catch((err) => {
        console.log("err", err);
      });
  },
  methods: {
    downloadPhoto() {
      const photoUrl = this.bigImage?.urls?.regular;

      const anchor = document.createElement("a");
      anchor.href = photoUrl;
      anchor.download = "downloaded-photo.jpg"; // Set the desired file name

      // Trigger a click event on the anchor to prompt the download
      anchor.style.display = "none"; // Hide the anchor element
      document.body.appendChild(anchor);
      anchor.click();

      // Clean up the temporary anchor element
      document.body.removeChild(anchor);
    },
    addToLike() {
      this.$store.commit("addToLikes", this.bigImage);
      this.isLiked = true;
    },
    removeLike() {
      this.$store.commit("removeFromLikes", this.bigImage);
      this.isLiked = false;
    },
  },
};
</script>

<style scoped>
.big_image {
  margin-top: 5px;
  overflow: scroll;
  color: white;
  background-size: cover;
  padding-bottom: 60px;
}
.container {
  padding: 0px 12%;
}
.modal__inner {
  margin-top: 20px;
}
.modal__user {
  display: flex;
}
.modal__icon {
  margin-right: 20px;
}
.modal__icon img {
  border: 1px solid #ffffff;
  border-radius: 8px;
}
.modal__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
.modal__info {
  line-height: 35px;
}
.modal__name {
  color: #000;
  font-size: 26px;
  font-weight: 400;
}
.modal__username {
  color: #bdbdbd;
  font-size: 22px;
  font-weight: 400;
}
.modal__actions {
  display: flex;
}
.modal__like {
  padding: 13px 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  cursor: pointer;
}
.isLiked {
  color: black;
}
.modal__download {
  cursor: pointer;
  margin-left: 20px;
  display: flex;
  padding: 0px 23px;
  align-items: center;
  color: black;
  background: #fff200;
  border: 1px solid #fff200;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  text-decoration: none;
}
.modal__download img {
  display: none;
}
.modal__image img {
  width: 100%;
  height: 100%;
}
.liked {
  display: none;
}
@media (max-width: 740px) {
  .modal__icon {
    margin-right: 4px;
  }
  .modal__like {
    padding: 10px;
  }
  .modal__download {
    padding: 0 10px;
    margin-left: 8px;
    font-size: 0;
  }
  .modal__download img {
    display: block;
  }
}
</style>
