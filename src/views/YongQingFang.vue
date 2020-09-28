<template>
  <div class="overView">
    <router-view>

    </router-view>
  </div>
</template>

<script>
  import icon from '../components/icon.vue'
  export default {
    name: 'YongQingFang',
    components: {
      icon
    },
    data() {
      return {
      }
    },
    computed: {
      imageSrc() {
        const pages = ['enNingRoad1400x630.png']
        return require(`../assets/images/${pages[this.pagesIndex]}`)
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
      this.$router.push({
        path: '/yongQingFang/catalog'
      })
    }
  }
</script>

<style scoped lang="scss">

  .overView{
    background-color: whitesmoke;
    overflow-y: auto;
  }
</style>
