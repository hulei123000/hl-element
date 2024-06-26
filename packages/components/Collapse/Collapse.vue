<script setup lang="ts">
import type { CollapseEmits, CollapseProps, CollapseItemName } from './type'
import { ref, provide, watch, watchEffect } from 'vue'
import { Collapse_CTX_KEY } from './constants'
import { debugWarn } from '@hl-element/utils'
const COMP_NAME = 'HlCollapse' as const
defineOptions({
  name: COMP_NAME 
})
const props = defineProps<CollapseProps>()
const emits = defineEmits<CollapseEmits>()
const activeNames = ref(props.modelValue)
watchEffect(() => {
  if (props.accordion && activeNames.value.length > 1) {
    // console.warn('accordion模式下，modelValue数组长度不能大于1');
    debugWarn(COMP_NAME, 'accordion模式下，modelValue数组长度不能大于1')
  }
})

// 点击项函数
function handleItemClick(item: CollapseItemName) {
  // TODO
  let _activeNames = [...activeNames.value]
  if (props.accordion) {
    _activeNames = [_activeNames[0] === item ? '' : item]
    updateActiveNames(_activeNames)
    return
  }
  const index = _activeNames.indexOf(item)
  if (index > -1) {
    _activeNames.splice(index, 1)
  } else {
    _activeNames.push(item)
  }
  updateActiveNames(_activeNames)
}

// 更新激活的面板
function updateActiveNames(newNames: CollapseItemName[]) {
  activeNames.value = newNames
  emits('update:modelValue', newNames)
  emits('change', newNames)
}

watch(() => props.modelValue, (newNames) => updateActiveNames(newNames))
provide(Collapse_CTX_KEY, {
  handleItemClick,
  activeNames
})
</script>

<template>
  <div class="hl-collapse">
    <slot></slot>
  </div>
</template>

<style scoped>
@import './style.css';
</style>