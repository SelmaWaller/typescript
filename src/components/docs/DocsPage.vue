<script setup lang="ts">
import Sidebar from "./Sidebar.vue";
const props = defineProps(["title", "items"]);
</script>

<template>
  <div class="gap-9 flex">
    <Sidebar :title="title" :items="items" />
    <div class="my-6">
      <slot />
    </div>
  </div>
</template>

<style scoped></style>
