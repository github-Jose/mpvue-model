<template>
  <div class="action-sheet" :class="{'show': currentValue}">
    <div class="wrap-pannel">
      <div class="sheet">
        <div class="title">{{title}}</div>
        <div class="operating" v-for="(item, index) in actions" :key="index" @click="operate(index)">{{item}}</div>
        <div class="delete-operating operating" @click="deleteSomething">{{cancelText}}</div>
      </div>
      <div class="cancel" @click="cancel">取消</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: Boolean,
    actions: {
      type: Array,
      default: () => []
    },
    cancelText: {
      type: String,
      default: '删除'
    },
    title: {
      type: String,
      default: '默认标题'
    }
  },
  data () {
    return {
      hide: false,
      currentValue: false
    }
  },
  methods: {
    cancel () {
      this.currentValue = false
    },
    operate (index) {
      this.currentValue = false
      this.$emit('operate', index)
    },
    deleteSomething () {
      this.currentValue = false
      this.$emit('deleteSomething')
    }
  },
  watch: {
    value (val) {
      this.currentValue = val
    },
    currentValue (val) {
      this.$emit('input', val)
    }
  }
}
</script>

<style lang="less" scoped>
.action-sheet {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  opacity: 0;
  z-index: -1;
  transition: all 0.25s;
  &.show {
    opacity: 1;
    z-index: 1;
    .wrap-pannel {
      transform: translateY(0);
    }
  }
  .wrap-pannel {
    position: absolute;
    bottom: 24px;
    padding: 0 32px;
    box-sizing: border-box;
    transition: transform 0.25s;
    transform: translateY(100%);
    .sheet {
      background-color: #fff;
      border-radius: 16px;
      width: 100%;
      .title {
        font-size: 26px;
        color: #7f8593;
        text-align: center;
        width: 606px;
        height: 72px;
        overflow: hidden;
        margin: 0 auto;
        padding: 32px 40px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .operating {
        width: 100%;
        height: 96px;
        line-height: 96px;
        text-align: center;
        font-size: 32px;
        color: #181c28;
      }
      .delete-operating {
        color: #ff555f;
      }
    }
    .cancel {
      background-color: #fff;
      margin-top: 24px;
      border-radius: 16px;
      width: 100%;
      height: 88px;
      line-height: 88px;
      font-size: 32px;
      color: #181c28;
      text-align: center;
    }
  }
  // .slider-down {
  //   animation: sliderDown 0.3s linear;
  // }
  // @keyframes slider {
  //   0% {
  //     transform: translateY(100%);
  //   }
  //   100% {
  //     transform: translateY(0);
  //   }
  // }
  // @keyframes sliderDown {
  //   0% {
  //     transform: translateY(0%);
  //   }
  //   100% {
  //     transform: translateY(100%);
  //   }
  // }
}
</style>
