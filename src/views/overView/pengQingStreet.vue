<template>
  <div class="show">
    <span @click="goBack" class="back">
      <icon name="back"></icon>
    </span>
    <p class="title">蓬庆社区</p>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in gallery" @click="handleImageClick(item.src)">
          <img :src="item.src" alt="index">
        </div>
      </div>
      <div class="swiper-button-prev"></div><!--左箭头。如果放置在swiper-container外面，需要自定义样式。-->
      <div class="swiper-button-next"></div><!--右箭头。如果放置在swiper-container外面，需要自定义样式。-->
    </div>
    <p style="padding-top: 20px;">
      走进恩宁路，仿佛置身于诗词中的世界。都道东山的少爷西关的小姐，才子与佳人的故事似乎在这里的每一处楼台亭榭青砖瓦巷都能够完美演绎。
    </p>
    <p>
      映入眼帘的第一道风景莫过于骑楼，十九世纪初过番的华人带来了风靡东南亚的“五脚基”，成为了广州街景的一大特色。沿着光滑的麻石小道，就来到了极具岭南特色的西关大屋，缓缓推开古朴的木趟栊大门，窗户上的图案缤纷绚丽，令人神摇目夺。
    </p>
    <p>
      循着悠扬的戏曲声向前迈进，思绪也开始飘散，最终驻足于眼前的永庆坊。作为广州第一个旧城微改造项目，永庆坊实现了新旧文化的完美融合，仿佛带来了时光的错位。
    </p>
    <p>
      这条古老的巷弄充满着岁月的沧桑，在历史的变迁中时光也为她注入了新的生机与活力。在风光无限的西关老城里，在安逸宁静的恩宁路里，许多祖祖辈辈生活在这里的人们依然在努力的生活着，那股烟火气一直世代传承，不曾消散。
    </p>
    <p>
      在城市不断发展的同时，我们也别忘了这些美好光景。
    </p>
    <EasyPreview :img-src="imgSrc" :options="options" :show-preview="showPreview"   @clickCloseButton="onClickCloseButton"></EasyPreview>

  </div>
</template>

<script>
  import EasyPreview from "easy-preview"
  import icon from '../../components/icon'
  import Swiper from 'swiper';
  export default {
    name: 'pengQingStreet',
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
        imgSrc: require('../../assets/images/pengQing/pengQing_0.jpg'),
        gallery: [{
          src: require('../../assets/images/pengQing/pengQing_0.jpg')
        },{
          src: require('../../assets/images/pengQing/pengQing_1.jpg')
        },{
          src: require('../../assets/images/pengQing/pengQing_2.png')
        },]
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
        loop:false,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
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
    width: 90%;
    height: 100%;
    margin: auto;
    .back{
      position: absolute;
      top: 35px;
      left: 80px;
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
    .swiper-container{
      display: inline-block;
      width: 70%;
      height: 75%;
      float: right;
      margin-top: 20px;
      margin-left: 40px;
      margin-bottom: 10px;
      overflow: hidden;
      cursor: pointer;
      text-align: center;
      img {
        max-width: 100%;
      }
    }
    p{
      text-indent: 2em;
      padding: 10px;
      font-size: 1em;
      text-align: left;
      line-height: 1.5;
    }
  }
</style>


