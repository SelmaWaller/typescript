<script setup lang="ts">
const props = defineProps(["title", "items"]);
</script>
<template>
  <div class="sidebar">
    <div class="sidebar__wrapper">
      <h2 class="text-3xl my-6 text-slate-900">{{ title }} docs</h2>
      <ul class="mb-7 col-2">
        <li v-for="item in items" class="my-2">
          <NuxtLink class="py-1 px-2 router-link rounded" :to="`#${item.id}`">{{
            item.name
          }}</NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sidebar {
  width: 50%;
  position: relative;
  &__wrapper {
    position: fixed;
  }
}
.router-link {
  border: 1px solid rgba(182, 194, 203, 0);
  &:hover {
    border: 1px solid rgba(182, 194, 203, 0.3);
    background: rgba(228, 237, 244, 0.3);
  }
}
</style>
