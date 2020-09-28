<template>
  <nav>
    <div class="logo" @click="jump(0)">
      <img src="../assets/images/logo.jpg" alt="logo">
    </div>
    <ul>
      <li v-for="(item, index) in nav" @click="jump(item.index)" :class="[{'active':index+1 === activeIndex}]">
        {{item.label}}
      </li>
    </ul>
  </nav>
</template>

<script>
  import icon from './icon'
  export default {
    name: 'gallery-nav',
    components: {
      icon
    },
    data() {
      return {
        activeIndex: 0,
        nav: [
          {
            label: '恩宁路总览',
            index: 1
          },
          {
            label: '永庆坊',
            index: 2
          },
        ]
      }
    },
    methods: {
      jump(index) {
        if (index === this.activeIndex) {
          return
        }
        const pages = ['/', '/OverView', '/yongQingFang']
        this.activeIndex = index
        this.$router.push(pages[index])
      }
    },
    mounted() {
      this.$bus.on('changeIndex', (index) => {
        this.activeIndex = index
        console.log('ok')
      })
    }
  }
</script>

<style lang="scss" scoped>
  nav{
    display: flex;
    align-items: center;
    box-sizing: border-box;
    margin: auto;
    width: 70vw;
    height: 60px;
    max-width: 1600px;
    min-width: 1200px;
    font-size: 1.25em;
    letter-spacing: .2em;
    .logo{
      flex: auto;
      height: 100%;
      background-color: white;
    }
    ul{
      flex: 1 1 80%;
      padding-right: 40%;
      height: 100%;
      display: flex;
      li{
        flex: auto;
        height: 100%;
        line-height: 60px;
        list-style: none;
        color: white;
        cursor: pointer;
        transition: all ease-in-out .5s;
        &:hover{
          color: white;
          background-color: rgb(238, 162, 164);
        }
      }
      .active{
        color: white;
        background-color: rgb(238, 162, 164);
      }
    }
  }
</style>
