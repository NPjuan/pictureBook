<template>
  <div class="wrapper" :style="{
    top: deviationTop,
    left: deviationLeft
  }">
    <span class="label">{{details.label}}</span>
    <div class="thumbnail">
      <img :src="details.src" alt="thumbnail">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'pointer',
    props: {
      details: Object,
    },
    data() {
      return {

      }
    },
    computed: {
      deviationTop() {
        let top = this.details.top
        return  `${parseInt(top, 10) - 12}%`
      },
      deviationLeft() {
        let left = this.details.left
        return  `${parseInt(left, 10) - 3}%`
      }
    }
  }
</script>

<style lang="scss" scoped>
 .wrapper{
   position: absolute;
   width: 60px;
   height: 60px;
   cursor: pointer;
   text-align: center;
   .label{
     display: inline-block;
     width: 80px;
     margin-left: -5px;
     font-size: .9em;
   }
   .thumbnail{
     display: flex;
     flex-direction: column;
     align-items: center;
     width: 65px;
     height: 70px;
     background: url("../assets/images/pointer.png") no-repeat;
     background-size: contain;
     img{
       margin-top: 9px;
       margin-left: 2px;
       max-width: 40px;
       border-radius: 50%;
     }
   }
 }
</style>
