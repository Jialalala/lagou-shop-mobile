<template>
  <div class="order-item">
    <div class="link" @click="handleRouter">
      <van-card
        :num="itemData.totalNum"
        :price="itemData.price"
        :desc="itemData.desc"
        :title="itemData.storeName"
        :thumb="itemData.image"
      >
        <template #footer>
          <p class="total">总价：￥{{ itemData.totalPrice}}</p>
          <van-button size="mini">延长收货</van-button>
          <van-button size="mini">查看物流</van-button>
          <van-button size="mini" class="confirm">确认收货</van-button>
        </template>
      </van-card> 
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
// 接收父组件传递的数据
const { itemData } = defineProps({
  itemData: {
    type: Object,
    require: true
  }
})

const handleRouter = () => {
  router.push({
    name: 'order-detail',
    params: {
      orderId: itemData.orderId
    }
  })
}
</script>

<style lang="scss" scoped>
:deep(.van-card) {
  width: 100%;
  .van-card__content {
    flex: 1;
  }
}

:deep(.van-card__title) {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: 14px;
  font-weight: 700;
}
.van-card__footer {
  .total {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 5px;
  }
  .van-button {
    padding: 5px 10px;
    margin-right: 5px;
    border-radius: 10px;
    border: 1px solid #ccc;
    background: #F2F2F2;
  }
  .van-button.confirm {
    border-color: #F2270C;
    color: #F2270C;
    background-color: #FCEDEB;
  }
}
</style>