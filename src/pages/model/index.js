import Vuex from 'vuex'

export default function registryModel (v) {
  v.use(Vuex)

  // 将store挂到全局
  v.prototype.$modelStore = new Vuex.Store({
    state: {
      toggle: false,
      title: '',
      inner: '',
      success: null,
      fail: null,
      type: '',
      icon: '',
      duration: '',
      tip: true
    },
    mutations: {
      hideModel (state) {
        state.toggle = false
      },
      showModel (state, data) {
        if (state.toggle) return
        let defaultData = {
          toggle: true,
          title: data.title || '提示',
          inner: data.inner || '提示内容',
          success: data.success || null,
          fail: data.fail || null,
          type: data.type || '',
          icon: data.icon || '',
          duration: data.duration || 2000,
          tip: data.tip = data.tip ? data.tip = true : data.tip = false
        }
        state = Object.assign(state, defaultData)
      },
      showLoading (state) {
        state.toggle = true
        state.type = 'loading'
        state.icon = '/static/imgs/success-right.png'
      },
      hideLoading (state) {
        state.toggle = false
        state.type = ''
        state.icon = ''
      }
    }
  })
  // 注册显示方法到全局
  v.prototype.$messageModel = function (data) {
    if (!(data instanceof Object)) {
      console.log('传参错误')
    } else {
      if (data.type === 'messageBox' || data.type === 'message') {
        v.prototype.$modelStore.commit('showModel', data)
      }
    }
  }
  // 注册loading显示方法
  v.prototype.$showLoading = function () {
    v.prototype.$modelStore.commit('showLoading')
  }
  // 注册loading隐藏方法
  v.prototype.$hideLoading = function () {
    v.prototype.$modelStore.commit('hideLoading')
  }
}
