<template>
  <div class="category-sidebar">
    <van-sidebar v-model="activeId" @change="handleChange">
      <van-sidebar-item v-for="item in categories" :key="item.id" :title="item.name" />
    </van-sidebar>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

interface CategoryItem {
  id: number
  name: string
}

const props = defineProps<{
  categories: CategoryItem[]
  activeId: number
}>()

const emit = defineEmits<{
  (event: 'change', id: number): void
}>()

const activeId = ref(props.activeId)

watch(
  () => props.activeId,
  newVal => {
    activeId.value = newVal
  }
)

const handleChange = (index: number) => {
  const id = props.categories[index].id
  emit('change', id)
}
</script>

<style lang="scss" scoped>
.category-sidebar {
  width: 80px;
  background: #f7f8fa;
}
</style>
