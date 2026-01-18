<template>
  <div class="cart-item">
    <van-checkbox :name="item.id" v-model="cartItem.checked" @change="handleChange" />
    <van-card :price="item.price" :title="item.name" :thumb="item.thumb">
      <template #footer>
        <van-stepper v-model="cartItem.count" :min="1" @change="handleCountChange" />
      </template>
    </van-card>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

interface CartItem {
  id: number
  name: string
  price: number
  count: number
  thumb: string
  checked: boolean
}

const props = defineProps<{
  item: CartItem
}>()

const cartItem = computed(() => props.item)

const emit = defineEmits<{
  (event: 'change', item: CartItem): void
}>()

const handleChange = (checked: boolean) => {
  console.log(checked)
  emit('change', { ...cartItem.value, checked })
}

const handleCountChange = (count: number) => {
  emit('change', { ...cartItem.value, count })
}
</script>

<style lang="scss" scoped>
.cart-item {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  background: white;
  padding: 10px;

  .van-checkbox {
    margin-right: 10px;
  }

  .van-card {
    flex: 1;
  }
}
</style>
