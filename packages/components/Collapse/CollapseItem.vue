<script setup lang="ts">
import type { CollapseItemProps } from './type'
import { inject, computed } from 'vue'
import { Collapse_CTX_KEY } from './constants'
import { HlIcon } from '../Icon';
import transitionEvents from './transitionEvents';
defineOptions({ name: 'HlCollapseItem' })
const props = defineProps<CollapseItemProps>()

const ctx = inject(Collapse_CTX_KEY, void 0)

const isActive = computed(() => {
  return ctx?.activeNames.value?.includes(props.name)
})

function handleClick() {
  if (props.disabled) {
    return
  }
  ctx?.handleItemClick(props.name)
}
</script>

<template>
  <div class="hl-collapse-item" :class="{
    'is-disabled': disabled,
  }">
    <div class="hl-collapse-item__header" :id="`item-header-${name}`" :class="{
      'is-disabled': disabled,
      'is-active': isActive,
    }" @click="handleClick">
      <span class="hl-collapse-item__title">
        <slot name="title">
          {{ title }}
        </slot>
      </span>
      <Hl-icon icon="angle-right" class="header-angle" />
    </div>
    <transition name="slide" v-on="transitionEvents">
      <div class="hl-collapse-item__wapper" v-show="isActive">
        <div class="hl-collapse-item__content" :id="`item-content-${name}`">
          <slot></slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
@import './style.css';
</style>