<template>
  <div class="message"
       :class="[
        `msg--${type}`
      ]"
       :style="{
    opacity: show ? '1' : '0',
    zIndex: show ? '10' : '-10',
    top: show ? '30px' : '-30px'}">
    <icon :name="type"></icon>
    <div class="content">{{content}}</div>
  </div>
</template>

<script>
  import icon from './icon'
  export default {
    name: 'message',
    components: {
      icon
    },
    data() {
      return {
        timer: null,
        type: 'info',
        show: false,
        content: '这是一条提示'
      }
    },
    watch: {
      show(val) {
        this.clear()
        if(val) {
          this.timer = setTimeout(() => {
            this.show = false
          }, 2000)
        } else {
          this.show = false
        }
      }
    },
    methods: {
      clear() {
        this.timer && clearTimeout(this.timer)
      }
    },
    mounted() {
      this.$bus.on('openMessage', (content) => {
        this.show = true
        this.content = content
      })
      this.$bus.on('closeMessage', () => {
        this.show = false
      })

    },
    beforeDestroy() {
      this.clear()
    }
  }
</script>

<style scoped>
  .message{
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    box-sizing: border-box;
    display: flex;
    align-items: center;
    min-width: 240px;
    max-width: 500px;
    margin-bottom: 15px;
    padding: 12px 15px 12px 20px;
    border-radius: 6px;
    overflow: hidden;
    border: 1px solid #DCDFE6;
    transition: opacity .4s ease-in-out, top .4s ease-in-out;/*从Y轴的30px处渐渐移动到上面*/
  }
  .content{
    padding-left: 10px;
  }
  .msg--info{
    color: #909399;
    background-color: #edf2fc;
  }
  .msg--success{
    color: #67C23A;
    background: #f0f9eb;
    border-color: #e1f3d8;
  }
  .msg--warning{
    color: #E6A23C;
    background-color: #fdf6ec;
    border-color: #faecd8;
  }
  .msg--error{
    color: #F56C6C;
    background-color: #fef0f0;
    border-color: #fde2e2;
  }
</style>


