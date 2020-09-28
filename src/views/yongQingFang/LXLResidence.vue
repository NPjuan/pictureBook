<template>
  <div class="show">
    <header>
      <span @click="goBack" class="back">
        <icon name="back"></icon>
      </span>
      <p class="title">李小龙故居</p>
    </header>
    <div class="content">
      <div class="content__text">
        <p style="padding-top: 20px;">
          李小龙祖居位于恩宁路永庆一巷13号，原为李小龙父亲——粤剧“四大名丑”之一李海泉所购置的一座“西关大屋”。它始建于民国时期，一正一偏布局，深三进，占地面积约 207 平方米。保持了时代特色的砖木结构，内有雕花大梁， 彩色雕花玻璃屏风等西关特色家具。
          西关大屋是清末豪门富商在广州城西“西关角”一带兴建的极具岭南特色的广州传统民间住宅形式，被称为“西关大屋”。西关大屋多为砖木结构、青砖石脚、高大正门用花岗石装嵌。其平面布局按传统的正堂屋形式，基本上纵深方向展开。其典型平面为三间两廊；左右对称，中间为主厅堂。
        </p>
      </div>
      <img :src="imgSrc" alt="opera" @click="handleImageClick">
    </div>
    <EasyPreview :img-src="imgSrc" :options="options" :show-preview="showPreview"   @clickCloseButton="onClickCloseButton"></EasyPreview>
  </div>
</template>

<script>
  import EasyPreview from "easy-preview"
  import icon from '../../components/icon'
  export default {
    name: 'LXLResidence',
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
        }
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
    computed: {
      imgSrc() {
        return require('../../assets/images/LXLResident1400x700.jpg')
      }
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
    padding: 15px;
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
      flex: auto;
      justify-content: center;
      align-items: center;
      img{
        max-width: 75%;
        cursor: pointer;
      }
      .content__text{
        flex: auto;
        p{
          text-indent: 2em;
          padding: 10px;
          font-size: 1em;
          text-align: left;
          line-height: 1.5;
          font-weight: initial;
        }
      }
    }
  }
</style>


