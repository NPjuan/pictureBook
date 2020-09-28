<template>
  <div id="app">
    <div>
      <galleryNav></galleryNav>
      <router-view :class="classes"></router-view>
    </div>
    <message></message>
  </div>
</template>

<script>
  import galleryNav from './components/gallery-nav'
  import message from './components/message'
  export default {
    name: 'app',
    components: {
      message,
      galleryNav
    },
    computed: {
      classes() {
        return ['container']
      }
    }
  }
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50; /*缺省文本字体颜色*/
  width: 100%;
  height: 100vh;
  background: #B79891;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to top, #94716B, #B79891);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to top, #94716B, #B79891); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  display: flex;
  justify-content: center;
  align-items: center;
  .container{
    position: relative;
    margin: 0 auto;
    width: 70vw;
    height: 35vw;
    max-width: 1600px;
    max-height: 800px;
    min-width: 1200px;
    min-height: 600px;
  }
}
</style>
