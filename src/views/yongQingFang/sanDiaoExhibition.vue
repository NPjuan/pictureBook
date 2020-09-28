<template>
  <div class="enNingRoad">
    <span @click="goBack" class="back">
      <icon name="back"></icon>
    </span>
    <p class="title">三雕一绣展览馆</p>
    <img :src="imgSrc" alt="sanDiao"  @click="handleImageClick">
    <p style="padding-top: 20px;">
      “塾”是片区中供小朋友培养业余爱好的教学空间，建筑由三栋红砖楼组成，结构相对完好，有着十分完整的历史陈迹。在改造过程中，设计师把钢结构的植入作为一个呈现历史质感和历史光景的载体，尽量弱化新材料新元素带来的影响。新旧结构在空间里产生了强烈的对比。改造后，一楼为“三雕一彩一绣展馆”，多展出老广州雕刻、彩绘、刺绣作品以及创作技艺，建筑装饰也加入了不少木雕的元素，主要在护栏、窗、墙面修饰上等方面，使得建筑别具一格。
    </p>
    <p>
      一层的展厅的氛围也不同于传统展厅的沉闷安静，悦耳的琴声，舞蹈的乐曲，茶楼的生活气息都使得展厅以及整个建筑活泼起来。二层的小隔间有一个小吧台，主要作为这栋建筑里工作人员的茶水间，同时也是一处歇息之所，也有游客在此聚集交谈，虽然空间较小，但氛围浓厚，有时这里还会作为小剧场或者小型的演出场所，老戏骨来这里即兴演绎一首粤曲，或者音乐厅的人来弹奏一首钢琴曲。每当这个时候，都会吸引不少游客的围观，享受这免费的视听盛宴。而表演者把来这里当作自己的一种兴趣，可以表演可以和他人聊聊天的小天地。
    </p>
    <p>
      二层以上以及后面的小隔间中保留了原计划舞厅和音乐厅的功能，同时也加入了茶楼的功能，引入广州早茶文化，给展厅增添了不少活力。人们在茶楼“饮早茶”的同时还能聆听到钢琴乐队的弹奏，用新的更符合年轻人的生活方式去将茶文化传承下来。
    </p>
    <p>
      通过巧妙的设计，使得展馆的人并不能直接上到二楼，因此整栋建筑从底层往上，呈现了由公共到半开放的过程。但从下往上，空间却逐渐开阔。建筑外部的玻璃幕墙设计，以及建筑前后两部分连接处的庭院让空间变得更加通透，各个空间节点产生不同的视线对话关系，激活了空间活力。展览、茶楼、音乐厅、舞厅等功能使得该建筑有了人情味，满当当的生活气息，贴近了人们的生活。
    </p>
    <EasyPreview :img-src="imgSrc" :options="options" :show-preview="showPreview"   @clickCloseButton="onClickCloseButton"></EasyPreview>
  </div>
</template>

<script>
  import EasyPreview from "easy-preview"
  import icon from '../../components/icon'
  export default {
    name: 'sanDiaoExhibtion',
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
        return require('../../assets/images/sanDiaoExhibition.jpg')
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
  .enNingRoad{
    width: 90%;
    margin: auto;
    .back{
      position: absolute;
      top: 20px;
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
    img{
      display: inline-block;
      width: 60%;
      float: right;
      margin-top: 20px;
      margin-left: 40px;
      margin-bottom: 10px;
      cursor: pointer;
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


