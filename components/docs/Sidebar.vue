<script setup lang="ts"></script>

<template>
  <div class="sidebar">
    <div class="sidebar__wrapper">
      <h2 class="text-3xl my-6 text-slate-900">Typescript docs</h2>
      <ul class="mb-7 col-2">
        <li class="my-2">
          <NuxtLink class="py-1 px-2 router-link rounded" to="#inference"
            >Inference</NuxtLink
          >
        </li>
        <li class="my-2">
          <NuxtLink
            class="py-1 px-2 router-link rounded"
            to="#null-and-undefined"
            >Null & Undefined</NuxtLink
          >
        </li>
        <li class="my-2">
          <NuxtLink
            class="py-1 px-2 router-link rounded"
            to="#arrays-and-object-literals"
            >Arrays & Object literals</NuxtLink
          >
        </li>
        <li class="my-2">
          <NuxtLink class="py-1 px-2 router-link rounded" to="#functions"
            >Functions</NuxtLink
          >
        </li>
        <li class="my-2">
          <NuxtLink class="py-1 px-2 router-link rounded" to="#any"
            >Any</NuxtLink
          >
        </li>
        <li class="my-2">
          <NuxtLink class="py-1 px-2 router-link rounded" to="#tuples"
            >Tuples</NuxtLink
          >
        </li>
        <li class="my-2">
          <NuxtLink class="py-1 px-2 router-link rounded" to="#interfaces"
            >Interfaces</NuxtLink
          >
        </li>
        <li class="my-2">
          <NuxtLink
            class="py-1 px-2 router-link rounded"
            to="#function-signatures"
            >Function signatures</NuxtLink
          >
        </li>
        <li class="my-2">
          <NuxtLink class="py-1 px-2 router-link rounded" to="#type-aliases"
            >Type aliases</NuxtLink
          >
        </li>
        <li class="my-2">
          <NuxtLink class="py-1 px-2 router-link rounded" to="#union-types"
            >Union types</NuxtLink
          >
        </li>
        <li class="my-2">
          <NuxtLink class="py-1 px-2 router-link rounded" to="#type-guards"
            >Type guards</NuxtLink
          >
        </li>
        <li class="my-2">
          <NuxtLink class="py-1 px-2 router-link rounded" to="#classes"
            >Classes</NuxtLink
          >
        </li>
        <li class="my-2">
          <NuxtLink class="py-1 px-2 router-link rounded" to="#generics"
            >Generics</NuxtLink
          >
        </li>
        <li class="my-2">
          <NuxtLink class="py-1 px-2 router-link rounded" to="#sets"
            >Sets</NuxtLink
          >
        </li>
        <li class="my-2">
          <NuxtLink class="py-1 px-2 router-link rounded" to="#enums"
            >Enums</NuxtLink
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sidebar {
  width: 100%;
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
