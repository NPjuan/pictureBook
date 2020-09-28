<template>
  <div class="show">
    <header>
      <span @click="goBack" class="back">
        <icon name="back"></icon>
      </span>
      <p class="title">粤剧博物馆</p>
    </header>
    <div class="content">
      <div class="content__text">
        <p style="padding-top: 20px;">
          粤剧艺术博物馆是一座具有岭南风格、水乡特色的中国园林式博物馆。
        </p>
        <p>
          博物馆建筑沿荔枝湾涌三期分为南北两岸，建筑形制为岭南园林风格的仿古建筑群，内设基本陈列展厅、主题展厅、剧场、园林景区以及粤剧艺术传承与保护等配套区域。
        </p>
        <p>
          园林景区由岭南园林风格的仿古建筑群组成，总体布局沿十字轴骨架排布，环绕中心晚沙湖，错落六组院落空间，院院相连又相对独立，以传统建筑工艺、技法的“三雕二塑一嵌”（木雕、砖雕、石雕、灰塑、陶塑、嵌瓷）为装饰亮点。
        </p>
        <p>
          博物馆园林中心设有仿古戏台，每周定期举行粤剧粤曲展演，动态展示粤剧艺术特色。
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
    name: 'guangdongOperaMuseum',
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
        return require('../../assets/images/guangdongOperaMuseum1400x700.jpg')
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
      transform: translate3d(20px, 0 ,0)  rotate(180deg);
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
        }
      }
    }
  }
</style>


