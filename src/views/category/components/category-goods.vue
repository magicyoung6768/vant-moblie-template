<template>
  <div class="category-goods">
    <van-grid :column-num="2" :gutter="10">
      <van-grid-item v-for="item in goodsList" :key="item.id" :icon="item.thumb" :text="item.name">
        <template #text>
          <div class="goods-info">
            <div class="goods-name">{{ item.name }}</div>
            <div class="goods-price">¥{{ item.price }}</div>
          </div>
        </template>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script setup lang="ts">
interface GoodsItem {
  id: number
  name: string
  price: number
  thumb: string
}

defineProps<{
  goodsList: GoodsItem[]
}>()
</script>

<style lang="scss" scoped>
.category-goods {
  flex: 1;
  padding: 10px;
  background: white;

  .goods-info {
    text-align: center;

    .goods-name {
      font-size: 14px;
      color: #333;
    }

    .goods-price {
      font-size: 12px;
      color: #f44;
    }
  }
}
:deep(.van-grid-item__icon) {
  font-size: 60px;
}
</style>
