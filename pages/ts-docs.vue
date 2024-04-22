<template>
  <DocsPage title="Typescript" :items="items.items">
    <TSDocs />
  </DocsPage>
</template>

<script setup lang="ts">
import DocsPage from "~/src/components/docs/DocsPage.vue";
import TSDocs from "~/src/components/docs/TSDocs.vue";
import items from "~/data/ts-items.json";
</script>
