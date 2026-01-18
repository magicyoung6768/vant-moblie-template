<script setup lang="ts" name="AppComponent">
//测试 unplugin-vue-components 插件的自动注册功能
const props = defineProps({
  msg: {
    type: String,
    default: '测试'
  }
})
const tap = () => {
  console.log(props.msg)
}
</script>

<template>
  <div class="flex">
    <h1 class="text-[14px]">{{ msg }}</h1>
    <h2 class="text-[14px]" @click="tap">点击</h2>
  </div>
</template>

<style lang="scss" scoped></style>
