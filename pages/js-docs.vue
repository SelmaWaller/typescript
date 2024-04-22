<script setup lang="ts">
import DocsPage from "~/src/components/docs/DocsPage.vue";
import JSDocs from "~/src/components/docs/JSDocs.vue";
import items from "~/data/js-items.json";
</script>

<template>
  <DocsPage title="Javascript" :items="items.items">
    <JSDocs />
  </DocsPage>
</template>

<style scoped></style>
