<template>
  <div class="category-page">
    <div class="category-content">
      <category-sidebar :categories="categories" :active-id="activeCategoryId" />
      <category-goods :goods-list="goodsList" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

import CategoryGoods from './components/category-goods.vue'
import CategorySidebar from './components/category-sidebar.vue'

interface CategoryItem {
  id: number
  name: string
}

interface GoodsItem {
  id: number
  name: string
  price: number
  thumb: string
}

const categories = ref<CategoryItem[]>([
  { id: 1, name: '男士T恤' },
  { id: 2, name: '女士连衣裙' },
  { id: 3, name: '运动休闲' },
  { id: 4, name: '时尚外套' },
  { id: 5, name: '裤子系列' },
  { id: 6, name: '鞋履配件' }
])

const activeCategoryId = ref<number>(1)

const goodsList = ref<GoodsItem[]>([
  {
    id: 1,
    name: '纯棉修身短袖T恤',
    price: 79.9,
    thumb: 'https://picsum.photos/300/300?random=20'
  },
  {
    id: 2,
    name: '冰丝透气长袖衬衫',
    price: 129.9,
    thumb: 'https://picsum.photos/300/300?random=21'
  },
  {
    id: 3,
    name: '潮流印花圆领卫衣',
    price: 159.9,
    thumb: 'https://picsum.photos/300/300?random=22'
  },
  {
    id: 4,
    name: '商务休闲西装外套',
    price: 299.9,
    thumb: 'https://picsum.photos/300/300?random=23'
  },
  {
    id: 5,
    name: '宽松直筒牛仔裤',
    price: 139.9,
    thumb: 'https://picsum.photos/300/300?random=24'
  },
  {
    id: 6,
    name: '舒适运动鞋',
    price: 259.9,
    thumb: 'https://picsum.photos/300/300?random=25'
  }
])

onMounted(async () => {})
</script>

<style lang="scss" scoped>
.category-page {
  min-height: calc(100vh - 100px);
  background: #f7f8fa;
  display: flex;
  .category-content {
    flex: 1;
    display: flex;
  }
}
</style>
