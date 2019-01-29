<template>
  <div>
    <div
      class="row"
      v-for="(item, index) in items"
      :key="index"
      :class="{'grey-bg': index % 2 === 0}"
    >{{ item }}</div>
    <model />
  </div>
</template>

<script>
import model from '../model/index.vue'
export default {
  data () {
    return {
      test: '1',
      items: ['1 - keep walking, be 2 with you.', '2 - keep walking, be 2 with you.']
    }
  },
  methods: {},
  mounted () {
    for (var i = 1; i <= 20; i++) {
      this.items.push(i + ' - keep walking, be 2 with you.')
    }
    this.$messageModel({
      type: 'loading',
      icon: '/static/imgs/success-right.png'
    })
    // this.$messageModel({
    //   inner: '登录成功',
    //   type: 'message',
    //   icon: '/static/imgs/success-right.png',
    //   success: () => {
    //     console.log(this.items)
    //   },
    //   fail: () => {
    //     console.log(this.test)
    //   }
    // })
    // this.$messageModel({
    //   title: '你好',
    //   inner: '这是一行描述文字，如果这里有两行是这种效果，不允许三行文字出现。',
    //   type: 'messageBox',
    //   success: () => {
    //     console.log(this.items)
    //   },
    //   fail: () => {
    //     console.log(this.test)
    //   }
    // })
  },
  components: {
    model
  }
}
</script>

<style scoped>
.row {
  width: 100%;
  height: 100px;
  padding: 20px 0;
  font-size: 32px;
  line-height: 60px;
  text-align: center;
  color: #444;
  background-color: #fff;
}
.grey-bg {
  background-color: #eee;
}
</style>
