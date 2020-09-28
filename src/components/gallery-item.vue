<template>
  <div class="gallery__item">
    <img :src="imgSrc" :alt="index">
  </div>
</template>

<script>
  export default {
    name: 'gallery-item',
    props: {
      index: {
        type: Number,
        default: 0
      }
    },
    data() {

    },
    computed: {
      imgSrc() {
        return require(`../assets/images/index/gallery-${this.index}.png`)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .gallery__item{
    position: relative;
    height: 100%;
  }
  .gallery__img{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }


</style>
