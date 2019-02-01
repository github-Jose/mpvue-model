<template>
  <div class="test">
    <div class="message" @click="message">message</div>
    <div class="message" @click="messageIcon">messageIcon</div>
    <div class="message" @click="loading">loading</div>
    <div class="message" @click="model">model</div>
    <div class="message" @click="showSheet">actionSheet</div>
    <model/>
    <!-- action-sheet用到了双向绑定的原理 -->
    <action-sheet
      v-model="toggle"
      :actions="actions"
      @operate="operate"
      @deleteSomething="deteleSomething"
      title="标题"
    />
  </div>
</template>

<script>
import model from '../model/index.vue'
import actionSheet from 'c/actionSheet/index'
export default {
  data () {
    return {
      show: 'model',
      actions: ['操作一', '操作二'],
      toggle: false
    }
  },
  methods: {
    // 没有icon
    message () {
      this.$messageModel({
        type: 'message'
      })
    },
    // 有icon
    messageIcon () {
      this.$messageModel({
        type: 'message',
        icon: '/static/imgs/success-right.png',
        inner: '' // 提示内容
      })
    },
    // loading
    loading () {
      this.$showLoading()
      setTimeout(() => {
        this.$hideLoading()
      }, 5000)
    },
    // 模态框
    model (e) {
      this.$messageModel({
        type: 'messageBox',
        title: '你好', // 标题
        inner: '哈哈哈哈', // 内容
        tip: true, // 切换
        success: () => {
          // 要使用箭头函数
          console.log(this.show)
        },
        fail: () => {
          // 删除按钮触发 // 此处有待改进
          console.log(this.show)
        }
      })
      console.log(e)
    },
    // operate
    operate (ind) {
      console.log(this.actions[ind])
    },
    deteleSomething () {
      console.log('删除')
    },
    showSheet (e) {
      this.toggle = true
    }
  },
  mounted () {},
  components: {
    model,
    actionSheet
  }
}
</script>

<style scoped>
.message {
  width: 80%;
  height: 88px;
  line-height: 88px;
  background: #4283f4;
  border-radius: 16px;
  margin: 0 auto;
  text-align: center;
  margin-top: 30px;
  color: #fff;
}
</style>
