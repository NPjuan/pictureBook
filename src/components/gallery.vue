<template>
  <div class="gallery">
<!--    图片-->
    <div class="gallery__item" :class="isReady">
      <img :src="imageSrc" alt="image" class="gallery__img" @click="handleImageClick">
      <div class="text">
        <p class="title">绘本的意义和目的</p>
        <p>
          建筑历史文化是一本读不完的书，蕴含着城市的演变、社会制度的变更。而历史街区承担着的场所记忆，不应该被遗忘。因而我们选择从历史街区中提取元素，记录叙事空间的点滴进行文化创作，使信息变成记忆，由此促进文化的传承与发展。或许我们的城市建筑绘本将能成为广州的一个文化符号，让更多的人了解到广府文化。
        </p>
        <p>
          恩宁路的变更是城市建筑历史变更长河的一小段画卷，绘本只是描绘了这条漫漫长河的一小段画面，但也足够让人放慢城市更新的脚步，停在恩宁街路口，探探头，驻足观看那条传来阵阵伴随着打铜声响的悠扬戏曲声的青砖石板路。这里有驰名中外的过街骑楼，有遍地开花、彰显着身份和实力象征的西关大屋，名人故居云集于此。树影斑驳陆离，悬挂在半空中充满古朴韵味的朵朵油纸伞重重叠叠，色彩斑斓，点缀着老街的青砖绿瓦。阳光透过缤纷绚丽的满洲窗，光影琉璃的投影在石砖小路上璀璨铺设。沿着弯曲小巷，重脊高檐，工艺精美的趟栊大木门散发着西关大屋特有的古韵。而永庆坊的微改造就如同城市建筑的“有机更新”，打通了历史长河的分界限，进入了历史轮回的隧道，使过去与现在的文化融化贯通。
        </p>
        <p>
          城市更新是一辆不会停下的历史马车，事物的不断发展消亡也符合客观规律。我们熟悉的事物终究会被新的事物所取代，旧文化也会渐渐消失在历史长河里，并发展出新的文化。在这其中，我们能做的不过是用自己的微薄之力，尽可能地在不断发展的现代化城市里记录下些许旧城的历史文化记忆，保留下几代人乃至一个朝代的记忆精神场所。我们所想呈现就是真实的广府文化，而文化来源于生活的点点滴滴。人们用自己的方式努力生活，诉说的是广府文化平等、包容的特性。恩宁街头的打铜声响，时时传来的粤曲声，使得老城街头坊间多了几分温度。有了日常的生活，才有了带着人情味的文化。让人们在绘本里回想起自己记忆里的那段时光，或许能够会心一笑，这是我们所做绘本的意义之一。
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  import EasyPreview from "easy-preview"
  import galleryItem from './gallery-item'
  import icon from './icon'
  import detail from './detail'
  export default {
    name: 'gallery',
    components: {
      galleryItem,
      icon,
      detail,
      EasyPreview
    },
    data() {
      return {
        index: 0,
        items: [],
        images: [],
        ready: true,
        showPreview: false,
        options: {
          controlByUsers: true,
          showCloseButton: true,
          buttonExtraStyle: 'opacity: .6'
        }
      }
    },
    computed: {
      imageSrc() {
        return require(`../assets/images/gallery/gallery-${this.index}.png`)
      },
      isReady() {
        if (this.ready) {
          return 'animation'
        } else {
          return ''
        }
      }
    },
    methods: {
      handleImageClick() {
        this.showPreview = true
      },
      onClickCloseButton() {
        this.showPreview = false
      }
    },
    mounted() {
      this.items = document.querySelectorAll('.gallery__item')
      this.images = document.querySelectorAll('.gallery__img')
      this.images.forEach(image => {
        image.onload = () => {
          console.log('我加载好了')
          this.ready = true
          this.$bus.emit('closeMessage')
        }
      })
    },
  }
</script>

<style lang="scss" scoped>
  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity:1;
    }
  }
  .animation{
    animation-name: fade-in;
    animation-duration: 2s;
  }
  .gallery{
    .gallery__item{
      position: relative;
      width: 100%;
      height: 100%;
      overflow: hidden;
      cursor: pointer;
      .gallery__img{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        transition: all ease-in-out .5s;
      }
      .text{
        position: absolute;
        left: 0;
        top: -100%;
        width: 100%;
        height: 100%;
        padding: 50px 180px;
        text-align: left;
        text-indent: 2em;
        color: whitesmoke;
        opacity: 0;
        transition: top ease-in-out .5s, opacity ease-in-out .5s;
        .title{
          text-indent: 0;
          font-weight: bold;
          font-size: 2.2em;
        }
        p{
          padding: 15px;
        }
      }
      &:hover{
        .gallery__img{
          filter: blur(5px) brightness(.5);
        }
        .text{
          opacity: 1;
          top: 0;
        }
      }
    }
  }
</style>
