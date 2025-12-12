<template>
  <div class="app">
    <div class="bg-main"></div>

    <div>
      <DoGlassButton />
    </div>
  </div>
</template>

<script setup lang="ts">
import DoGlassButton from "@/components/DoGlassButton.vue";

defineExpose({})
</script>

<style lang="scss" scoped>
.app {
}
</style>
