import { createStore } from 'vuex'

// 将封装的状态模块引入
import user from './modules/user'
import cart from './modules/cart'
import order from './modules/order'

export default createStore({
  // 添加 modules 选项
  modules: {
    user,
    cart,
    order
  }
})