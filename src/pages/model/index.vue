<template>
  <div :class="{wrap: type === 'messageBox'}" v-if="toggle">
    <div class="message-box" v-if="type === 'messageBox'">
      <div class="title">{{title}}</div>
      <div class="message-inner">{{inner}}</div>
      <div class="message-operating">
        <!-- <div class="certain" @click="callBack">确定</div> -->
        <div class="detele">
          <div class="detele-cancel" @click="cancel">取消</div>
          <div class="detele-button" @click="deleteSomething">删除</div>
        </div>
      </div>
    </div>
    <div v-if="type === 'message'" class="message-tip">
      <div class="message-tip-item" :class="{haveIcon: icon !== ''}">
        <div class="message-icon" v-if="icon">
          <image :src="icon" mode="widthFix"/>
        </div>
        <div class="message-text" :class="{noicon: icon === ''}">{{inner}}</div>
      </div>
    </div>
    <div v-if="type === 'loading'" class="loading">
      <div class="loading-item">
        <image :src="icon" mode="widthFix" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    title () {
      return this.$modelStore.state.title
    },
    inner () {
      return this.$modelStore.state.inner
    },
    toggle () {
      return this.$modelStore.state.toggle
    },
    success () {
      return this.$modelStore.state.success
    },
    fail () {
      return this.$modelStore.state.fail
    },
    type () {
      return this.$modelStore.state.type
    },
    icon () {
      return this.$modelStore.state.icon
    }
  },
  mounted () {},
  methods: {
    // async getData () {
    //   let all = await this.$net()
    //   console.log(all)
    // },
    callBack () {
      this.$modelStore.commit('hideModel')
      // console.log(this.success())
      this.success()
    },
    deleteSomething () {
      this.$modelStore.commit('hideModel')
      // console.log('删除')
      this.fail()
    },
    cancel () {
      this.$modelStore.commit('hideModel')
    }
  }
}
</script>

<style lang="less" scoped>
.wrap {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
}
.message-box {
  width: 540px;
  height: 288px;
  background: #ffffff;
  border-radius: 16px;
  overflow: hidden;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  .title {
    font-size: 32px;
    color: #181c28;
    text-align: center;
    margin-top: 40px;
    margin-bottom: 24px;
  }
  .message-inner {
    font-size: 26px;
    color: #181c28;
    text-align: center;
    width: 460px;
    height: 72px;
    overflow: hidden;
    margin-bottom: 32px;
    margin: 0 auto;
  }
  .message-operating {
    width: 100%;
    height: 88px;
    position: absolute;
    bottom: 0;
    .certain {
      width: 100%;
      height: 88px;
      background: #ffffff;
      box-shadow: inset 0 1px 0 0 #eeeef0;
      text-align: center;
      line-height: 88px;
    }
    .detele {
      width: 100%;
      height: 88px;
      background-color: #fff;
      box-shadow: inset 0 1px 0 0 #eeeef0;
      display: flex;
      overflow: hidden;
      .detele-cancel {
        width: 50%;
        height: 100%;
        text-align: center;
        font-size: 32px;
        line-height: 88px;
        color: #181c28;
      }
      .detele-button {
        width: 50%;
        height: 100%;
        text-align: center;
        font-size: 32px;
        line-height: 88px;
        color: #ff555f;
      }
    }
  }
}
.message-tip {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  white-space:nowrap;
  .message-tip-item {
    opacity: 0.85;
    background: #000000;
    border-radius: 16px;
    .message-text {
      font-size: 32px;
      color: #ffffff;
      text-align: center;
    }
    .noicon {
      padding: 32px 64px;
    }
    .message-icon {
      width: 88px;
      // height: 61px;
      display: flex;
      align-items: center;
      justify-content: center;
      image{
        width: 100%;
      }
    }
  }
  .haveIcon {
    // width: 240px;
    height: 240px;
    overflow: hidden;
    .message-icon {
      margin: 0 auto;
      margin-top: 61px;
    }
    .message-text {
      margin-top: 30px;
      font-size: 26px;
      color: #FFFFFF;
      padding: 0 68px;
    }
  }
}
.loading {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  .loading-item {
    opacity: 0.85;
    background: #000000;
    border-radius: 16px;
    width: 240px;height: 240px;
    display: flex;
    justify-content: center;
    align-items: center;
    image {
      width: 49px;
    }
  }
}
</style>

