<template>
  <div class="cart-page">
    <div class="cart-list">
      <van-checkbox-group v-model="checkedIds">
        <cart-item
          v-for="item in cartList"
          :key="item.id"
          :item="item"
          @change="handleItemChange"
        />
      </van-checkbox-group>
    </div>
    <cart-footer
      :checked-all="isCheckedAll"
      :total-price="totalPrice"
      :total-count="totalCount"
      @check-all="handleCheckAll"
      @submit="handleSubmit"
    />
  </div>
</template>

<script setup lang="ts">
import { showConfirmDialog, showToast } from 'vant'
import { computed, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

import CartFooter from './components/cart-footer.vue'
import CartItem from './components/cart-item.vue'

interface CartGoodsItem {
  id: number
  name: string
  price: number
  count: number
  thumb: string
  checked: boolean
}

const router = useRouter()

const cartList = ref<CartGoodsItem[]>([
  {
    id: 1,
    name: '冰离子纯色翻领',
    price: 99.9,
    count: 1,
    thumb: 'https://picsum.photos/300/300?random=30',
    checked: true
  },
  {
    id: 2,
    name: '富士棉拼色款',
    price: 199.9,
    count: 2,
    thumb: 'https://picsum.photos/300/300?random=31',
    checked: false
  },
  {
    id: 3,
    name: '富士棉拼色款',
    price: 139.9,
    count: 1,
    thumb: 'https://picsum.photos/300/300?random=32',
    checked: false
  }
])

const checkedIds = ref<number[]>([])

onMounted(async () => {
  checkedIds.value = cartList.value.filter(item => item.checked).map(item => item.id)
})

// 是否全选
const isCheckedAll = computed(() => {
  return checkedIds.value.length === cartList.value.length
})

// 总价
const totalPrice = computed(() => {
  return cartList.value
    .filter(item => checkedIds.value.includes(item.id))
    .reduce((sum, item) => sum + item.price * item.count, 0)
})

// 总数量
const totalCount = computed(() => {
  return cartList.value
    .filter(item => checkedIds.value.includes(item.id))
    .reduce((sum, item) => sum + item.count, 0)
})

// 处理商品项变化
const handleItemChange = (item: CartGoodsItem) => {
  const index = cartList.value.findIndex(cartItem => cartItem.id === item.id)
  if (index !== -1) {
    cartList.value[index] = item
  }
}

// 全选/取消全选
const handleCheckAll = (checked: boolean) => {
  checkedIds.value = checked ? cartList.value.map(item => item.id) : []
}

// 提交订单
const handleSubmit = () => {
  if (checkedIds.value.length === 0) {
    showToast('请选择商品')
    return
  }
}
</script>

<style lang="scss" scoped>
.cart-page {
  min-height: calc(100vh - 100px);
  background: #f7f8fa;

  .cart-list {
    padding-bottom: 100px;
  }
}
</style>
