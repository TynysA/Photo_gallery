<template>
  <div class="big_image">
      <div class="modal">
          <div class="container">
            <div class="modal__inner">
              <div class="modal__header">
                <div class="modal__user">
                  <div class="modal__icon">
                    <img :src="this.bigImage.user.profile_image.medium" alt="">
                  </div>
                  <div class="modal__info">
                    <div class="modal__name">{{this.bigImage.user.name}}</div>
                    <div class="modal__username">@{{this.bigImage.user.username}}</div>
                  </div>
                </div>
                <div class="modal__actions">
                  <div  @click="$store.commit('addToLikes', this.bigImage)" class="modal__like">
                    <img src="../assets/like_black.svg" alt="">
                  </div>
                  <div @click="downloadPhoto" class="modal__downloand">Downloand</div>
                </div>
              </div>
              <div class="modal__image">
                <img :src="this.bigImage.urls.regular" alt="">
              </div>
            </div>
<!--            <Modal :bigImage="bigImage" />-->
          </div>
      </div>
  </div>
</template>

<script>
import svgIcon from '../assets/like_black.svg';
export default {
  name: "BigImage",
  data() {
    return {
      accessKey: '0yC2q2TbgoMTm5t0pRpYktvhBTH780A2L7sYEPaHqmo',
      url: 'https://api.unsplash.com/photos/',
      bigImage: {},
    }
  },
  created(){
    let url = this.url + `${this.$route.params.id}?client_id=${this.accessKey}`;
    fetch(url).then((response) =>{
      return response.json()
    }).then((json)=>{
      this.bigImage = json;
    }).catch((err)=>{
      console.log('err',err)
    })
    let liked = this.$store.commit('findThat', this.bigImage);
    console.log(document.querySelector(".modal__like"));
    if (liked){
      document.querySelector(".modal__like").classList.add("liked");
    }
  },
  methods:{
    downloadPhoto(){

    }
  },
}
</script>

<style scoped>
  .big_image{
    position: fixed;
    top: 12%;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1050;
    overflow: scroll;
    color: white;
    background: url('../assets/back.png');
    background-size: cover;
    padding-bottom: 100px;
  }
  .container{
    padding: 0px 12%;
  }
  .modal__inner{
    margin-top: 40px;
  }
  .modal__user{
    display: flex;
  }
  .modal__icon{
    margin-right: 20px;
  }
  .modal__icon img{
    border: 1px solid #FFFFFF;
    border-radius: 8px;
  }
  .modal__header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 44px;
  }
  .modal__info{
    font-weight: 400;
    font-size: 30px;
    line-height: 35px;

    /* Gray 6 */
    color: #F2F2F2;
  }
  .modal__actions{
    display: flex;
  }
  .modal__like{
    padding: 13px 13px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    cursor: pointer;
  }
  .modal__downloand{
    margin-left: 20px;
    display: flex;
    padding: 0px 23px;
    align-items: center;
    color: black;
    background: #FFF200;
    border: 1px solid #FFF200;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    text-decoration: none;
  }
  .modal__image img{
    width: 100%;
  }
  .liked{
    display: none;
  }
</style>