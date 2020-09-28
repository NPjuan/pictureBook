<template>
  <div class="window">
    <div class="view">
      <img src="../../assets/images/map.jpg" alt="overViewImage">
        <pointer v-for="(detail, index) in page" :details="detail" @click.native="showDetail(index)" :key="index"></pointer>
<!--      <span v-for="(item, index) in page" class="point" :style="{-->
<!--        top: item.top,-->
<!--        left: item.left-->
<!--      }" @click="showDetail(index)" :key="index">-->
<!--        <span v-if="index === 0" class="point__title" style="top: -20px; left: 35px">{{item.label}}</span>-->
<!--        <span v-else class="point__title">{{item.label}}</span>-->
<!--        <span class="point__shape-fix">-->
<!--          <span class="point__shape">-->
<!--          <img :src="item.src" alt="">-->
<!--        </span>-->
<!--        </span>-->
<!--      </span>-->
    </div>
    <div class="introduce">
      <div class="text">
        <p class="title">
          恩宁路总览
        </p>
        <p>
          走进恩宁路，仿佛置身于诗词中的世界。都道东山的少爷西关的小姐，才子与佳人的故事似乎在这里的每一处楼台亭榭青砖瓦巷都能够完美演绎。这里的人们也正如这条路的名字一样，生活恩泽、安宁。
        </p>
        <p>
          映入眼帘的第一道风景莫过于这里的骑楼，十九世纪初过番的华人带来了风靡东南亚的“五脚基”，成为了广州街景的一大特色。沿着铺满光滑的麻石小道，就来到了极具岭南特色的西关大屋，砖木结构的西关大屋使用的全是青砖，可推移的木趟栊大门缓缓打开，窗户上图案缤纷绚丽，令人神摇目夺。
        </p>
        <p>
          远处的戏曲声飘来，思绪也开始飘散，驻足于眼前的永庆坊。作为广州第一个旧城微改造项目，永庆坊完成了她的华丽转身。不仅保留了青砖屋、趟栊门、满洲窗、石板路这些传统元素，同时也赋予了她新的生命。新旧文化的完美融合，仿佛带来了时光的错位。阳光慵懒地从屋顶的青砖滑落，恍惚间，西关小姐撑着纸伞款款走过，走入车水马龙的繁华中。
        </p>
        <p>
           这条古老的巷弄充满着岁月的沧桑，在历史的变迁中时光也为她注入了新的生机与活力。在风光无限的西关老城里，在安逸宁静的恩宁路里，许许多多祖祖辈辈生活在这里的人们依然在努力的生活着，那股烟火气一直世代传承，不曾消散。
        </p>
        <p>
          在城市不断发展的同时，我们也别忘了这些美好光景。
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  import icon from '../../components/icon.vue'
  import pointer from '../../components/pointer'
  export default {
    name: 'catalog',
    components: {
      icon,
      pointer
    },
    data() {
      return {
        pages: ['enNingRoad', 'yongQingFang', 'guangdongOperaMuseum','pengQingStreet'],
        page: [{
          name: 'enNingRoad',
          label: '恩宁路',
          top: '59%',
          left: '26%',
          src: require('../../assets/images/preView/enNingRoad1400x630.png')
        },{
          name: 'yongQingFang',
          label: '永庆坊',
          top: '46%',
          left: '26%',
          src: require('../../assets/images/preView/yongQingFangEntry1400.png')
        },{
          name: 'guangdongOperaMuseum',
          label: '粤剧博物馆',
          top: '40%',
          left: '43%',
          src: require('../../assets/images/preView/guangdongOperaMuseum1400x700.jpg')
        },{
          name: 'pengQingStreet',
          label: '蓬庆社区',
          top: '57%',
          left: '16%',
          src: require('../../assets/images/preView/pengQingcommunity1400x798.jpg')
        }]
      }
    },
    methods: {
      showDetail(index) {
        console.log('index', index)
        if (index === 1) {
          this.$bus.$emit('changeIndex', 2)
          this.$router.push('/yongQingFang/catalog')
          return
        }
        this.$router.push(this.pages[index])
      },
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
  .window{
    height: 100%;
    .view{
      position: relative;
      display: inline-block;
      height: 100%;
      width: 50%;
      img{
        width: 99%;
      }
    }
    .introduce{
      display: inline-flex;
      height: 100%;
      width: 50%;
      padding: 20px;
      line-height: 1.5em;
      vertical-align: top;
      flex-direction: column;
      align-items: stretch;
      justify-content:center;
      overflow: auto;
      .text{
        height: 100%;
        padding: 15px;
        .title{
          font-size: 2em;
          text-indent: 0;
          text-align: right;
          padding-bottom: 1em;
        }
        p{
          width: 100%;
          text-indent: 2em;
          text-align: left;
          padding-bottom: 10px;
          font-size: 1em;
        }
      }
    }
  }
</style>


