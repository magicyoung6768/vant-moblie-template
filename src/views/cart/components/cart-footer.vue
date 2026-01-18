<template>
  <div class="cart-footer">
    <van-checkbox v-model="checkedAll" @change="handleCheckAll">全选</van-checkbox>
    <div class="total">
      <span>合计：¥{{ totalPrice }}</span>
      <span>共{{ totalCount }}件</span>
    </div>
    <van-button type="danger" @click="handleSubmit">结算</van-button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  checkedAll: boolean
  totalPrice: number
  totalCount: number
}>()

const emit = defineEmits<{
  (event: 'check-all', checked: boolean): void
  (event: 'submit'): void
}>()

const checkedAll = computed({
  get() {
    return props.checkedAll
  },
  set(newVal) {
    emit('check-all', newVal)
  }
})

const handleCheckAll = (checked: boolean) => {
  emit('check-all', checked)
}

const handleSubmit = () => {
  emit('submit')
}
</script>

<style lang="scss" scoped>
.cart-footer {
  position: fixed;
  bottom: 50px;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background: white;
  border-top: 1px solid #f7f8fa;

  .total {
    flex: 1;
    margin: 0 10px;
    text-align: right;

    span {
      display: block;
      font-size: 12px;
    }
  }

  .van-button {
    width: 100px;
  }
}
</style>
