<template>
  <div class="wrap" @click.self="close" v-if="show">
    <div class="container">
      <div class="exhibition">
      </div>
      <div class="introduce"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'detail',
    data() {
      return {
        show: true
      }
    },
    methods: {
      close() {
        this.show = false
      }
    },
    mounted() {
      const maxIndex = [...document.body.querySelectorAll('*')].reduce((r, e) => Math.max(r, +window.getComputedStyle(e).zIndex || 0), 0)
      this.$el.style.zIndex = maxIndex+1
    }
  }
</script>

<style scoped lang="scss">
  .wrap{
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    z-index: 2;
    background-color: rgba(0,0,0,.6);
    .container{
      width: 80vw;
      height: 40vw;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      .exhibition{
        background-color: wheat;
      }
      .introduce{
        background-color: aquamarine;
      }
    }
  }
</style>


