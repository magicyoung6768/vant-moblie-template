<template>
  <div class="order-page">
    <div class="order-summary">
      <span class="order-count">共 {{ orders.length }} 笔订单</span>
      <UseTimeAgo :time="lastUpdated">
        <template #default="{ timeAgo }">
          <span class="order-updated">数据更新于 {{ timeAgo }}</span>
        </template>
      </UseTimeAgo>
    </div>
    <div class="order-list">
      <van-cell
        v-for="item in orders"
        :key="item.id"
        :title="item.title"
        :value="`¥${item.amount}`"
        is-link
      >
        <template #label>
          <div class="order-meta">
            <span class="order-no">{{ item.id }}</span>
            <UseTimeAgo :time="item.time">
              <template #default="{ timeAgo }">
                <span class="order-time">{{ timeAgo }}</span>
              </template>
            </UseTimeAgo>
            <van-tag plain type="primary">{{ item.status }}</van-tag>
          </div>
        </template>
      </van-cell>
    </div>
  </div>
</template>

<script setup lang="ts">
import { UseTimeAgo } from '@vueuse/components'
import { ref } from 'vue'

interface OrderItem {
  id: string
  title: string
  status: string
  amount: number
  time: number
}

const now = Date.now()

const orders = ref<OrderItem[]>([
  {
    id: '20261016001',
    title: '冰离子纯色翻领T恤 等2件',
    status: '待付款',
    amount: 159.8,
    time: now - 1000 * 60 * 5
  },
  {
    id: '20261015007',
    title: '富士棉拼色口袋款',
    status: '待发货',
    amount: 99.9,
    time: now - 1000 * 60 * 60 * 6
  },
  {
    id: '20261014012',
    title: '潮流印花短袖 等3件',
    status: '已完成',
    amount: 239.7,
    time: now - 1000 * 60 * 60 * 24 * 2
  }
])

const lastUpdated = ref(now - 1000 * 60 * 30)
</script>

<style lang="scss" scoped>
.order-page {
  min-height: calc(100vh - 100px);
  background: #f7f8fa;

  .order-summary {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 15px;
    font-size: 12px;
    color: #999;
    background: white;
  }

  .order-list {
    background: white;
  }

  .order-meta {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 12px;
    color: #999;

    .order-no {
      color: #666;
    }

    .order-time {
      color: #999;
    }
  }
}
</style>
