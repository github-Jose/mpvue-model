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
      icon: ''
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
          icon: data.icon || ''
        }
        state = Object.assign(state, defaultData)
      }
    }
  })
  // 注册显示方法到全局
  v.prototype.$messageModel = function (data) {
    if (!(data instanceof Object)) {
      console.log('传参错误')
    } else {
      v.prototype.$modelStore.commit('showModel', data)
    }
  }
}
