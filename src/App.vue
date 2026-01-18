<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'

const route = useRoute()
const tabBar = ref([
  {
    id: 1,
    name: '首页',
    path: '/',
    icon: 'apps-o'
  },
  {
    id: 2,
    name: '分类',
    path: '/category',
    icon: 'home-o'
  },
  {
    id: 3,
    name: '购物车',
    path: '/cart',
    icon: 'cart-o'
  },
  { id: 4, name: '我的', path: '/mine', icon: 'user-o' }
])
const activeTab = ref(0)
const title = computed(() => tabBar.value.find(e => e.path === route.path)?.name)
</script>

<template>
  <!-- 顶部导航栏 -->
  <van-nav-bar :title="title" fixed placeholder safe-area-inset-top>
    <template #left>
      <van-icon name="search" size="18" />
    </template>
  </van-nav-bar>
  <RouterView />
  <!-- 底部导航 -->
  <van-tabbar v-if="title" v-model="activeTab" route fixed placeholder safe-area-inset-bottom>
    <van-tabbar-item v-for="item in tabBar" :key="item.id" :icon="item.icon" :to="item.path">
      {{ item.name }}
    </van-tabbar-item>
  </van-tabbar>
</template>

<style lang="scss" scoped></style>
