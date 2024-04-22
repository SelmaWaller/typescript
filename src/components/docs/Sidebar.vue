<script setup lang="ts">
const props = defineProps(["title", "items"]);
</script>

<template>
  <div class="sidebar">
    <div class="sidebar__wrapper">
      <h2 class="text-3xl my-6 text-slate-900">{{ title }} docs</h2>
      <ul class="mb-7 col-2">
        <li v-for="item in items" class="my-2">
          <NuxtLink class="text-slate-900" :to="`#${item.id}`">{{
            item.name
          }}</NuxtLink>
          <ul>
            <li v-for="i in item.subItems" class="my-2 sidebar__sublinks">
              <NuxtLink class="text-slate-600" :to="`#${i.id}`">{{
                i.name
              }}</NuxtLink>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sidebar {
  min-width: 270px;
  position: relative;
  border-right: 1px solid rgba(182, 194, 203, 0.5);
  margin-right: 20px;
  position: relative;
  a:hover {
    color: rgb(39, 191, 103);
  }
  &__wrapper {
    position: sticky;
    top: 20px;
  }
  &__sublinks {
    margin: 0;
    padding: 0 0 0 10px;
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
