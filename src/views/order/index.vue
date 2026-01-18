<template>
  <div class="mine-page">
    <div class="mine-list">
      <van-cell
        v-for="item in mineItems"
        :key="item.text"
        :icon="item.icon"
        :title="item.text"
        is-link
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { showToast } from 'vant'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

interface UserInfoProps {
  avatar: string
  name: string
  description: string
}

interface MineItem {
  icon: string
  text: string
  path: string
}

const router = useRouter()

// 用户信息
const userInfo = ref<UserInfoProps>({
  avatar: 'https://picsum.photos/100/100?random=40',
  name: '用户名',
  description: '个人简介'
})

const mineItems = ref<MineItem[]>([
  { icon: 'orders-o', text: '我的订单', path: '/orders' },
  { icon: 'star-o', text: '我的收藏', path: '/favorites' },
  { icon: 'setting-o', text: '设置', path: '/settings' },
  { icon: 'info-o', text: '关于我们', path: '/about' }
])
</script>

<style lang="scss" scoped>
.mine-page {
  min-height: calc(100vh - 1.22667rem);
  background: #f7f8fa;
  .user-info {
    display: flex;
    align-items: center;
    padding: 20px;
    background: white;
    margin-bottom: 10px;

    .user-detail {
      flex: 1;
      margin-left: 15px;

      .user-name {
        font-size: 16px;
        color: #333;
      }

      .user-description {
        font-size: 12px;
        color: #999;
      }
    }

    .van-icon {
      color: #999;
    }
  }
  .mine-list {
    background: white;
  }
}
</style>
