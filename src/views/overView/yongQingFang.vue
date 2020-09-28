<template>
  <div class="show">
    <header>
      <span @click="goBack" class="back">
        <icon name="back"></icon>
      </span>
      <p class="title">永庆坊</p>
    </header>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in gallery" @click="handleImageClick(item.src)">
          <img :src="item.src" alt="">
        </div>
      </div>
    </div>
    <EasyPreview :img-src="imgSrc" :options="options" :show-preview="showPreview"   @clickCloseButton="onClickCloseButton"></EasyPreview>
  </div>
</template>

<script>
  import EasyPreview from "easy-preview"
  import icon from '../../components/icon'
  import Swiper from 'swiper';
  export default {
    name: 'yongQingFang',
    components: {
      EasyPreview,
      icon
    },
    data() {
      return {
        showPreview: false,
        options: {
          controlByUsers: true,
          buttonExtraStyle: 'opacity: .6'
        },
        gallery: [
          {
            src: require('../../assets/images/yongQingFang/yongQingFang_0.png')
          },
          {
            src: require('../../assets/images/yongQingFang/yongQingFang_1.png')
          }
        ],
        imgSrc: require('../../assets/images/yongQingFang/yongQingFang_0.png')
      }
    },
    methods: {
      handleImageClick(src) {
        this.imgSrc = src
        this.showPreview = true
      },
      onClickCloseButton() {
        this.showPreview = false
      },
      goBack() {
        this.$router.go(-1)
      }
    },
    mounted() {
      const mySwiper = new Swiper('.swiper-container', {
        autoplay:false,
        loop:false
      })
    }
  }
</script>

<style scoped lang="scss">
  @keyframes move {
    from{
      transform: translate3d(0, 0 ,0) rotate(180deg);
    }
    to{
      transform: translate3d(20px, 0 ,0) rotate(180deg);
    }
  }
  .show{
    height: 100%;
    padding: 0 15px;
    overflow-y: auto;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    header{
      position: relative;
      width: 100%;
      flex: 0 0 50px;
      .back{
        position: absolute;
        top: 25px;
        left: 30px;
        cursor: pointer;
        font-size: 2em;
        animation: move 1s infinite;
        animation-direction: alternate;
      }
      .title{
        margin-top: 20px;
        font-size: 2.5em;
        text-indent: 0;
        text-align: center;
        font-weight: bold;
      }
    }
    .swiper-container {
      cursor: pointer;
      width: 100%;
      height: 100%;
      img {
        max-height: 100%;
      }
    }
  }
</style>


