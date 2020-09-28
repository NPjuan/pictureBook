<template>
  <div class="show">
    <header>
      <span @click="goBack" class="back">
        <icon name="back"></icon>
      </span>
      <p class="title">云·六克拉</p>
    </header>
    <div class="content">
      <div class="content__text">
        <p style="padding-top: 20px;">
          “云”是永庆街区中所有办公、会议、接待功能空间的主要入口。该建筑是街区中始建时间最早的，历史最为悠久。不同历史时期的不断加建拆除重建使得建筑的第五立面自然形成了层层折叠的关系，这也是现状建筑的最大特色。
        </p>
        <p>
          原始建筑的屋面早已腐朽崩落，墙体为双层空心砖墙，是不能正常使用的危房，急需空心回填及加强结构。考虑历史的延续性，设计师保留了四面红砖墙，在不破坏原有旧红砖质感的同时，在砖墙内部灌浆加固。外墙除却修旧如旧，也加入新材料的使用，如钢窗框、金属落水管、钢板补丁。
        </p>
        <p>
          设计师在屋面形式上“顺势而为”，保留不同历史时期形成的多重折叠屋面的空间。并在建筑内部嵌入现代的钢柱梁结构系统，建造全新的屋面结构体系。折面屋顶营造了不一样的室内空间， 增添了活力于原本静态的空间里，使空间流动起来。
        </p>
        <p>
          新材料与新构件的加入，使原本的历史记忆得以重现并延续下来，也满足了现代功能的使用。“云”的一层主要为独立设计师的珠宝设计品展示区，有的展品也售卖。展示区域对着建筑的小前院。而顺着大台阶上二层，是珠宝设计师的办公空间，散落的图纸和设计材料，都是珠宝设计师的灵感所在。
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
    name: 'liuKela',
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
        return require('../../assets/images/liuKeLa800x800.png')
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
        max-width: 40%;
        margin-right: 50px;
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


