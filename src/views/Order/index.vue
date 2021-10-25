<template>
  <van-cell-group>
    <!-- 标签切换区域 -->
    <van-cell class="tags">
      <van-button
        size="small"
        class="active"
      >全部订单</van-button>
      <van-button
        size="small"
      >待付款</van-button>
      <van-button
        size="small"
      >待发货</van-button>
      <van-button
        size="small"
      >待收货</van-button>
      <van-button
        size="small"
      >待评价</van-button>
      <van-button
        size="small"
      >已完成</van-button>
    </van-cell>
    <!-- 订单列表 -->
    <div class="order-list" v-if="hasOrder">
      <order-item
        v-for="item in orderList"
        :key="item.id"
        :itemData="item"
      />
    </div>

    <!-- 当订单为空时展示 -->
    <van-empty v-else description="还没有订单哦~" />
    
  </van-cell-group>

  <!-- 更改底部 -->
  <layout-footer></layout-footer>
</template>

<script setup>
import LayoutFooter from '@/components/LayoutFooter.vue'
import OrderItem from './components/OrderItem.vue'
import { ref, computed } from '@vue/reactivity'
import { getOrderList } from '@/api/order'
import { nextTick } from '@vue/runtime-core'

import { useStore } from 'vuex'
import indexVue from '../Search/index.vue'
const store = useStore()

// 订单列表数据
// ---- 1 列表数据处理 ----
// 存储数据
const orderList = computed(() => store.state.order.orderList)
// 检测订单是否为空
const hasOrder = computed(() => orderList.value.length !== 0)

const initOrderList = async () => {
  const { data } = await getOrderList()
  if (data.status !== 200) { return }
  // orderList.value = data.data
  // 请求到新数据后，将原始数据清空，随后更新为新数据
  store.commit('order/clear')

  await nextTick()
  data.data.forEach(item => {
    // 提交给 addToOrder 的数据必须符合要求
    // 用于存储订单的数据(order_id,_status,cartInfo,_type,cart_num,truePrice,store_name,image,pay_price)
    store.commit('order/addToOrder', {
      orderId: item.order_id,
      totalNum: item.total_num,
      totalPrice: item.total_price,
      // status: item._status,
      desc: item._status._msg,
      statusType: item._status._type,
      // cartInfo: item.cartInfo,
      // productInfo: item.cartInfo[0].productInfo,
      // attrInfo: item.cartInfo[0].productInfo.attrInfo,
      image: item.cartInfo[0].productInfo.attrInfo.image,
      // 单价
      price: item.cartInfo[0].productInfo.attrInfo.price,
      storeName: item.cartInfo[0].productInfo.store_name,
    })
  })
}
initOrderList()

</script>

<style lang="scss" scoped>
.van-cell-group {
  background-color: #f2f2f2;
  :deep(.van-cell__value) {
    display: flex;
    justify-content: space-between;
    .van-button {
      border-radius: 15px;
    }
  
    .active {
      background-color: #fbc546;
    }
  }
}
</style>