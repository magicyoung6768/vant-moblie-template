<template>
  <div class="home-container">
    <van-swipe class="swipe-banner" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in swipeImages" :key="item.id">
        <img :src="item.url" alt="banner" />
      </van-swipe-item>
    </van-swipe>

    <van-grid :column-num="4" :border="false">
      <van-grid-item
        v-for="item in features"
        :key="item.text"
        :icon="item.icon"
        :text="item.text"
      />
    </van-grid>
    <div class="recommend-section">
      <h3 class="section-title">热门推荐</h3>
      <van-card
        v-for="item in recommends"
        :key="item.id"
        :price="item.price"
        :desc="item.desc"
        :title="item.title"
        :thumb="item.thumb"
      >
        <template #tags>
          <van-tag plain type="danger">{{ item.tag }}</van-tag>
        </template>
      </van-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface SwipeImage {
  id: number
  url: string
}

interface FeatureItem {
  icon: string
  text: string
}

interface RecommendItem {
  id: number
  title: string
  price: number
  desc: string
  thumb: string
  tag: string
}

const swipeImages = ref<SwipeImage[]>([
  {
    id: 1,
    url: 'https://picsum.photos/750/300?random=1'
  },
  {
    id: 2,
    url: 'https://picsum.photos/750/300?random=2'
  },
  {
    id: 3,
    url: 'https://picsum.photos/750/300?random=3'
  },
  {
    id: 4,
    url: 'https://picsum.photos/750/300?random=4'
  },
  {
    id: 5,
    url: 'https://picsum.photos/750/300?random=5'
  }
])

const features = ref<FeatureItem[]>([
  { icon: 'coupon-o', text: '限时抢购' },
  { icon: 'gift-o', text: '新品上市' },
  { icon: 'gold-coin-o', text: '积分商城' },
  { icon: 'fire-o', text: '热门推荐' },
  { icon: 'star-o', text: '我的收藏' },
  { icon: 'cart-o', text: '购物车' },
  { icon: 'service-o', text: '客户服务' },
  { icon: 'setting-o', text: '设置' }
])

const recommends = ref<RecommendItem[]>([
  {
    id: 1,
    title: '冰离子纯色翻领T恤',
    price: 59.9,
    desc: '舒适透气，夏季必备',
    thumb: 'https://picsum.photos/300/300?random=10',
    tag: '热卖'
  },
  {
    id: 2,
    title: '富士棉鎏金间色翻领短袖',
    price: 79.9,
    desc: '高端面料，品质保证',
    thumb: 'https://picsum.photos/300/300?random=11',
    tag: '畅销'
  },
  {
    id: 3,
    title: '富士棉拼色口袋款',
    price: 99.9,
    desc: '时尚设计，个性十足',
    thumb: 'https://picsum.photos/300/300?random=12',
    tag: '秒杀'
  },
  {
    id: 4,
    title: '32支高弹仿棉丝',
    price: 99.9,
    desc: '弹力十足，舒适贴身',
    thumb: 'https://picsum.photos/300/300?random=13',
    tag: '热卖'
  },
  {
    id: 5,
    title: '纯棉宽松圆领T恤',
    price: 69.9,
    desc: '100%纯棉，柔软亲肤',
    thumb: 'https://picsum.photos/300/300?random=14',
    tag: '新品'
  },
  {
    id: 6,
    title: '潮流印花短袖',
    price: 89.9,
    desc: '时尚印花，个性表达',
    thumb: 'https://picsum.photos/300/300?random=15',
    tag: '推荐'
  },
  {
    id: 7,
    title: '纯色简约POLO衫',
    price: 119.9,
    desc: '经典款式，商务休闲皆宜',
    thumb: 'https://picsum.photos/300/300?random=16',
    tag: '热销'
  },
  {
    id: 8,
    title: '透气网眼运动T恤',
    price: 79.9,
    desc: '运动必备，透气排汗',
    thumb: 'https://picsum.photos/300/300?random=17',
    tag: '运动'
  }
])
</script>

<style lang="scss" scoped>
.home-container {
  min-height: calc(100vh - 100px);
  background: #f7f8fa;
  .swipe-banner {
    img {
      width: 100%;
      height: auto;
    }
  }
  .section-title {
    padding: 15px;
    margin: 0;
    font-size: 16px;
    color: #333;
    background: white;
  }

  :deep(.van-card) {
    margin-top: 8px;
    border-radius: 8px;
  }
}
</style>
