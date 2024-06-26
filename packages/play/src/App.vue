<script setup lang="ts">
import { ref } from 'vue'
const args = ref([])
</script>

<template>
  <hl-button type="primary" size="small">你好</hl-button>
  <hl-collapse v-bind="args">
      <hl-collapse-item name="a" title="Title a">
        <div>this is content a</div>
      </hl-collapse-item>
      <hl-collapse-item name="b" title="title b">
        <div>this is content b</div>
      </hl-collapse-item>
      <hl-collapse-item name="c" title="title c  disable" disabled>
        <div>this is content c</div>
      </hl-collapse-item>
    </hl-collapse>
</template>

<style scoped>

</style>
