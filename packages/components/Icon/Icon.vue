<script setup lang="ts">
import type { IconProps } from './type.ts'
import { computed } from 'vue'
import { omit } from 'lodash-es'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
defineOptions({
  name: 'HlIcon',
  inheritAttrs: false // 关闭透传
})

const props = defineProps<IconProps>()

// 将组件传递的属性过滤掉type和color
const filterProps = computed(() => {
  return omit(props, ['type', 'color'])
})

// 图标的颜色根据Icon组件传递的color属性
// 如果没有color属性，则使用默认颜色(继承)
const customStyle = computed(() => {
  return {
    color: props.color ?? void 0
  }
})
</script>

<template>
  <i class="hl-icon" :class="[`hl-icon-${type}`]" :style="customStyle" v-bind="$attrs">
    <FontAwesomeIcon v-bind="filterProps"></FontAwesomeIcon>
  </i>
</template>

<style>
@import './style.css';
</style>