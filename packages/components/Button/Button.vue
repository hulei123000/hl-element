<template>
  <component
    :is="tag"
    class="hl-button"
    ref="_ref"
    :autofocus="autofocus"
    :type="tag === 'button' ? nativeType : void 0"
    :disabled="disabled || loading ? true : void 0"
    :class="{
      [`hl-button--${type}`]: type,
      [`hl-button--${size}`]: size,
      'is-disabled': disabled,
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
      'is-loading': loading
    }"
    @click="(e: MouseEvent) => useThrottle ? throttleClick(e) : handleClick(e)"
  >
    <template v-if="loading">
      <slot name="loading">
        <HlIcon
            :icon="loadingIcon ?? 'spinner'"
            class="loading-icon"
            :style="iconStyle"
            size="1x"
            spin
        />
      </slot>
    </template>
    <HlIcon
      v-if="icon && !loading"
      :icon="icon"
      :style="iconStyle"
      size="1x"
    />
    <slot></slot>
  </component>
</template>

<script setup lang="ts">
import type { ButtonEmits, ButtonInstance, ButtonProps } from './type.ts'
import { computed, ref, inject } from 'vue'
import { throttle } from 'lodash-es'
import HlIcon from '../Icon/Icon.vue'
import { BUTTON_GROUP_CTX_KEY } from './constants.ts'

defineOptions({
  name: 'HlButton'
})
const props = withDefaults(defineProps<ButtonProps>(), {
  tag: 'button',
  nativeType: 'button',
  useThrottle: true,
  throttleDuration: 500
})

const ctx = inject(BUTTON_GROUP_CTX_KEY, void 0)
const size = computed(() => ctx?.size ?? props.size ?? '')
const type = computed(() => ctx?.type ?? props.type ?? '')
const disabled = computed(() => ctx?.disabled || props.disabled || false)

const buttonEmits = defineEmits<ButtonEmits>()
const handleClick = (e: MouseEvent) => buttonEmits('click', e)
const throttleClick = throttle(handleClick, props.throttleDuration, { trailing: false })

const slots = defineSlots()
// Icon和按钮文字(如果有的话)的间隔
const iconStyle = computed(() => ({
  marginRight: slots.default ? '6px' : '0px'
}))
const _ref = ref<HTMLButtonElement>()

defineExpose<ButtonInstance>({
  ref: _ref
})
</script>

<style scoped>
@import "./style.css";
</style>