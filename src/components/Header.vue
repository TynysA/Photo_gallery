<template>
    <header class="header" id="header">
      <div class="container">
        <div class="header__inner">
            <div @click="$router.push('/')"  class="header__logo">
              <img src="../assets/header_logo.svg" alt="" />
            </div>
          <div class="header__search not"></div>
            <div @click="$router.push('/likes')" class="header__likes">
              <img src="../assets/like.svg" alt="">
              <div class="likes__text">Избранное</div>
            </div>
        </div>
      </div>
    </header>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>
  .not{
    display: none;
  }
  .header{
    background: #000000;
  }

  .container{
    padding: 0px 12%;
  }
  .header__inner{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 27px 0px ;
    color: white;
  }
  .header__logo{
    width: 13%;
  }
  .header__logo img{
    width: 100%;
  }
  .header__likes{
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
  }
  .header__likes img{
    max-width: 22px;
  }
  .likes__text{
    margin-left: 10px;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
  }
</style>