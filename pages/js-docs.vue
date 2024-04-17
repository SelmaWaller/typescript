<script setup lang="ts">
import Sidebar from "~/src/components/docs/Sidebar.vue";
import JSDocs from "~/src/components/docs/JSDocs.vue";
</script>

<template>
  <div class="gap-9 flex">
    <Sidebar title="Javascript" />
    <div class="my-6">
      <JSDocs />
    </div>
  </div>
</template>

<style scoped></style>
