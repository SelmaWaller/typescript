<script setup lang="ts"></script>

<template>
  <header class="bg-slate-50 shadow-sm">
    <nav class="container mx-auto max-w-6xl flex justify-between p-5">
      <div>
        <NuxtLink class="mr-6 py-1 px-2 rounded router-link" to="/shop"
          >Home</NuxtLink
        >
        <NuxtLink class="mr-6 py-1 px-2 rounded router-link" to="/shop/about"
          >About</NuxtLink
        >
      </div>
      <NuxtLink class="py-1 px-2 rounded router-link" to="/shop/cart"
        >Cart</NuxtLink
      >
    </nav>
  </header>

  <div class="container mx-auto max-w-6xl p-5">
    <slot />
  </div>

  <footer>
    <nav class="bg-slate-50 shadow-sm">
      <div class="container mx-auto max-w-6xl flex p-5">
        <NuxtLink class="mr-6 py-1 px-2 rounded router-link" to="/"
          >Masterclass</NuxtLink
        >
        <NuxtLink class="mr-6 py-1 px-2 rounded router-link" to="/ts-docs"
          >Typescript docs</NuxtLink
        >
      </div>
    </nav>
  </footer>
</template>

<style lang="scss" scoped>
.router-link {
  border: 1px solid rgba(182, 194, 203, 0);
  &:hover {
    border: 1px solid rgba(182, 194, 203, 0.3);
    background: rgba(228, 237, 244, 0.3);
  }
  &-exact-active {
    background: rgb(228, 237, 244);
    border: 1px solid rgb(182, 194, 203);
    &:hover {
      background: rgb(228, 237, 244);
      border: 1px solid rgb(182, 194, 203);
    }
  }
}
</style>
