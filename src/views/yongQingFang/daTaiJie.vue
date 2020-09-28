<template>
  <div class="show">
    <header>
      <span @click="goBack" class="back">
        <icon name="back"></icon>
      </span>
      <p class="title">大台阶</p>
    </header>
    <div class="content">
      <div class="content__text">
        <p style="padding-top: 20px;">
          “大台阶”位于永庆坊深处，身旁伴着木色的大台阶，很是显眼。建筑由竹筒屋结合钢结构改造而成。竹筒屋进深大而开间小，新增的钢结构依附在原竹筒屋一侧，加大了开间，同时延进深方向布置空间，置入功能。一二层用作休闲娱乐，三四层用作办公。立面上，新增的“钢与玻璃”，与保留的砖砌墙面形成了强烈的虚实对比，由传统到现代的材料过渡，印证了永庆坊的新生。
        </p>
        <p>
          东侧的大台阶是永庆坊中不可或缺的公共空间，它将“大台阶”一二层在室外连接起来，用作为游客的休融场所、居民的活动空间、孩子的游乐阶梯等。
        </p>
      </div>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="item in gallery" @click="handleImageClick(item.src)">
            <img :src="item.src" alt="">
          </div>
        </div>
      </div>
      <div class="swiper-button-prev"></div><!--左箭头。如果放置在swiper-container外面，需要自定义样式。-->
      <div class="swiper-button-next"></div><!--右箭头。如果放置在swiper-container外面，需要自定义样式。-->
    </div>
    <EasyPreview :img-src="imgSrc" :options="options" :show-preview="showPreview"   @clickCloseButton="onClickCloseButton"></EasyPreview>
  </div>
</template>

<script>
  import Swiper from 'swiper';
  import EasyPreview from "easy-preview"
  import icon from '../../components/icon'
  export default {
    name: 'daTaijie',
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
            src: require('../../assets/images/daTaiJie21200x1200.jpg')
          },
          {
            src: require('../../assets/images/daTaiJie2.jpg')
          }
        ],
        imgSrc: require('../../assets/images/daTaiJie21200x1200.jpg')
      }
    },
    methods: {
      handleImageClick() {
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
    .content{
      display: flex;
      justify-content: space-around;
      align-items: center;
      height: 85%;
      width: 100%;
      .content__text{
        width: 800px;
        padding: 20px 100px;
      }
      .swiper-container{
        cursor: pointer;
        height: 500px;
        width: 500px;
        margin-right: 100px;
        text-align: center;
        img {
          max-height: 100%;
        }
      }
    }
  }
</style>


