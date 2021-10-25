<template>
  <!-- 顶部区域 -->
  <van-nav-bar
    :title="msg"
    left-text="返回"
    left-arrow
  >
    <template #right>
      <van-icon name="ellipsis" size="18" />
    </template>
  </van-nav-bar>

  <van-cell-group>
    <van-cell class="wuliu">
      <img src="http://datong.crmeb.net/public/uploads/attach/2019/03/28/5c9ccca12638a.gif" alt="">
      <div class="order-info">
        <p class="statu" v-text="title"></p>
        <p class="message">当前位置：北京市北京东北区巧北京市北京东北区巧手啦啦啦啦北京市北京东北区巧北京市北京东北区巧手啦啦啦啦</p>
      </div>
      <span class="look">查看物流</span>
    </van-cell>
    <van-cell>
      <img src="http://datong.crmeb.net/public/uploads/attach/2019/03/28/5c9ccca12638a.gif" alt="">
      <div class="order-info">
        <p>订单号：{{ Oid }}</p>
        <p>收货地址：{{ address }}</p>
      </div>
    </van-cell>
  </van-cell-group>
  
  <div class="link" @click="handleRouter">
    <van-card
      :num="totalNum"
      :price="price"
      :title="storeName"
      :thumb="image"
    >
      <template #footer>
        <p class="total">总价：￥{{ totalPrice}}</p>
      </template>
    </van-card> 
    </div>
  
</template>

<script setup>
import { getOrderDetail } from '@/api/order'
import { computed, ref } from '@vue/reactivity'

// 存储订单详情的所有数据
const orderDetail = ref({})
const newStatus = computed(() => orderDetail.value?._status)
const cartInfo =  computed(() => orderDetail.value?.cartInfo[0]) 
const productInfo = computed(() => cartInfo.value?.productInfo) 
const attrInfo = computed(() => productInfo.value?.attrInfo) 
const productId = computed(() => cartInfo.value?.product_id)


const Oid = computed(() => orderDetail.value?.order_id)
const msg = computed(() => newStatus.value?._msg)
const title = computed(() => newStatus.value?._title)
const address = computed(() => orderDetail.value?.user_address)
const totalNum = computed(() => orderDetail.value?.total_num)
const totalPrice = computed(() => orderDetail.value?.total_price)
const storeName = computed(() => productInfo.value?.store_name)
const image = computed(() => attrInfo.value?.image)


const { orderId } = defineProps({
  orderId: {
    type: String,
    required: true
  }
})

const initOrderDetail = async () => {
  const { data } = await getOrderDetail(orderId)
  if (data.status !== 200) { return }
  orderDetail.value = data.data
}

initOrderDetail()

import { useRouter } from 'vue-router'
const router = useRouter()
// 点击跳转
const handleRouter = () => {
  router.push({
    name: 'product',
    params: {
      productId: productId.value
    }
  })
}
</script>

<style lang="scss" scoped>
.van-nav-bar {
  position: fixed !important;
  width: 100%;
}

.wuliu {
  padding-top: 45px;
}

:deep(.van-cell__value) {
  display: flex;
  align-items: center;
  width: 100%;
  img {
    width: 30px;
    height: 30px;
    margin-right: 15px;
  }

  .order-info {
    flex: 1;

    .statu {
      font-size: 14px;
      font-weight: 700;
    }

    .message {
      font-size: 14px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      color: #ccc;
    }
  }

  .look {
    border: 1px solid #ccc;
    padding: 0 4px;
    font-size: 12px;
    border-radius: 12px;
    overflow: hidden;
  }
}
</style>