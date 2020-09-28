<template>
  <div class="main">
    <div class="catalog" :class="catalogIntroClass">
      <img src="../../assets/images/yongQingfang.jpg" alt="yongQingFang">
      <pointer v-for="(detail, index) in page" :details="detail" @click.native="showDetail(index)" :key="index"></pointer>
    </div>
    <div class="intro-content" :class="contentIntroClass">
      <p>脚踏青砖，思绪还在重脊高檐和过街骑楼中飘飞，永庆坊已经出现在面前。它藏身在骑楼与骑楼的小巷里，带着它厚重的历史韵味，正如门后屹立的两只威严石狮般肃穆而庄严，诉说着它独有的故事。</p>
      <p>永庆坊长年累月的改造，设计师始终认为保留永庆坊历史街区的街巷肌理、建筑风貌是对它最大的尊重，唯有对街区历史的梳理、居民的调研才能最大程度留存街区风貌。设计师在宏观尺度上，疏通原有街巷，保留了建筑原有承重结构，植入微空间串联起社区生活；微观尺度上，运用城市“针灸法”，沿永庆大街选取三栋建筑体进行改造。</p>
      <p>在永庆坊这一竖两横的空间里，打通的是过去与现在的桥梁，永庆坊的华丽转身，诉说的是“立足过去，面向未来”的故事。在这里，最具有人文历史的西关大屋——李小龙故居经过修缮后已成为文物保护单位的展览馆，而永庆坊最重要的商业建筑——万科云，承接着永庆坊过去与现在的联系，是两排背靠背的竹筒屋改造而来的宽敞透彻的共享办公空间。</p>
    </div>
    <div class="intro-btn" @click="handleIntro" :class="btnIntroClass">
      <span>{{ isIntro ? '收起简介' : '展开简介'}}</span>
    </div>
  </div>
</template>

<script>
  import pointer from '../../components/pointer'
  import icon from '../../components/icon.vue'
  export default {
    name: 'catalog',
    components: {
      icon,
      pointer
    },
    data() {
      return {
        isIntro: false,
        pages: [
          'LXLResidence',
          'daTaiJie',
          'liuKeLa',
          'sanDiaoExhibition',
          'jiuWuCang',
          'yongQingFangEntry',
          'catCafe',
          'yongQingYiXiang',
          'lianLangExhibition',
          'yongQingErXiang'
        ],
        page: [{
          name: 'LXLResidence',
          label: '李小龙故居',
          top: '39%',
          left: '13%',
          src: require('../../assets/images/preView/LXLResident1400x700.jpg')
        },{
          name: 'daTaiJie',
          label: '大台阶',
          top: '37%',
          left: '72%',
          src: require('../../assets/images/preView/daTaiJie800x600.jpg')
        }, {
          name: 'liuKeLa',
          label: '六克拉',
          top: '40%',
          left: '63%',
          src: require('../../assets/images/preView/liuKeLa800x800.png')
        },{
          name: 'sanDiaoYiXiuExhibition',
          label: '三雕一绣展览馆',
          top: '60%',
          left: '50%',
          src: require('../../assets/images/preView/sanDiaoExhibition.jpg')
        },{
          name: 'jiuWuCang',
          label: '旧物仓',
          top: '54%',
          left: '57%',
          src: require('../../assets/images/preView/jiuWuCang1400x990.jpg')
        },{
          name: 'yongQingFangEntry',
          label: '永庆坊入口',
          top: '80%',
          left: '54%',
          src: require('../../assets/images/preView/yongQingFangEntry1400.png')
        }, {
          name: 'catCafe',
          label: '猫咖',
          top: '25%',
          left: '67%',
          src: require('../../assets/images/preView/catCafe_0.jpg')
        }, {
          name: 'yongQingYiXiang',
          label: '永庆一巷',
          top: '46%',
          left: '25%',
          src: require('../../assets/images/preView/yongQingYiXiang_0.png')
        },{
          name: 'lianLangExhibition',
          label: '连廊展厅',
          top: '29%',
          left: '41%',
          src: require('../../assets/images/preView/lianLang_1.png')
        },{
          name: 'yongQingErXiang',
          label: '永庆二巷',
          top: '34%',
          left: '57%',
          src: require('../../assets/images/preView/yongQingEr_0.jpg')
        }]
      }
    },
    computed: {
      catalogIntroClass() {
        return this.isIntro ? 'catalog--intro' : ''
      },
      btnIntroClass() {
        return this.isIntro ? 'btn--intro' : ''

      },
      contentIntroClass() {
        return this.isIntro ? 'content--intro' : ''
      }
    },
    methods: {
      showDetail(index) {
        if (index < this.pages.length) {
          this.$router.push(this.pages[index])
        }
      },
      handleIntro() {
        this.isIntro = !this.isIntro
      }
    }
  }
</script>

<style scoped lang="scss">
  @keyframes breathing {
    0%{
      transform: scale(1.1);
    }
    100%{
      transform: scale(1.25);
    }
  }
  .main{
    position: relative;
    perspective: 1000px;
    overflow: hidden;
    .catalog{
      display: block;
      margin: auto;
      width: 100%;
      height: 100%;
      transition: transform .5s ease-in-out;
      transform-origin: left center;
      img{
        display: block;
        margin: auto;
        width: 100%;
        height: 100%;
      }
      .point{
        position: absolute;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        font-size: 1em;
        .point__title{
          display: inline-block;
          white-space: nowrap;
          top: -60px;
          position: absolute;
        }
        .point__shape-fix{
          position: absolute;
          width: 53px;
          height: 53px;
          background-color: burlywood;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 50%;
        }
        .point__shape{
          position: absolute;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background-color: white;
          cursor: pointer;
          overflow: hidden;
          img{
            width: 125%;
          }
        }
      }
    }
    .catalog--intro{
      transform: rotateY(35deg);
    }
    .intro-btn{
      position: absolute;
      right: 0;
      top: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 60px;
      font-size: 1.5em;
      color: whitesmoke;
      border-radius: 4px;
      padding: 20px;
      cursor: pointer;
      margin-top: 20px;
      margin-right: 40px;
      background-color: #eea2a4;
      transition: right .5s ease-in-out;
      .intro-btn__icon{
        transform: rotate(180deg);
        color: whitesmoke;
      }
    }
    .btn--intro{
     right: 330px;
    }
    .intro-content{
      position: absolute;
      right: -350px;
      top: 0;
      width: 350px;
      height: 100%;
      padding: 30px 20px;
      transition: right .5s ease-in-out;
      p{
        text-indent: 2em;
        text-align: left;
        padding-top: 15px;
      }
    }
    .content--intro{
      right: 0;
    }
  }


</style>


