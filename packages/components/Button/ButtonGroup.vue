<script setup lang="ts">
import type { ButtonGroupProps } from './type'
import { ref, provide, toRef, reactive } from 'vue'
import { BUTTON_GROUP_CTX_KEY } from './constants.ts'
defineOptions({
  name: 'HlButtonGroup'
})
const props = defineProps<ButtonGroupProps>()

provide(BUTTON_GROUP_CTX_KEY, reactive({
  size: toRef(props, 'size'),
  type: toRef(props, 'type'),
  disabled: toRef(props, 'disabled')
}))
</script>

<template>
  <div class="hl-button-group">
    <slot></slot>
  </div>
</template>

<style scoped>
@import "./style.css";
</style>