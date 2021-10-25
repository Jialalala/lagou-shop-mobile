const state = {
  // 用于存储订单的数据(_status,_type,order_id,cartInfo,cart_num,truePrice,store_name,image,pay_price)
  orderList: []
}
const getters = {}
const mutations = {
  // 用户功能，设置用户 Token
  addToOrder (state, payload) {
    // payload 应该为包含 sku 全部信息的对象，具体参考 state.cartList 说明
    state.orderList.push(payload)
  },
  // 清除数据
  clear (state) {
    state.orderList = []
  },
}
const actions = {}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}