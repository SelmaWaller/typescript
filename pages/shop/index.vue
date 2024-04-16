<script setup lang="ts">
definePageMeta({
  layout: "shop",
});

useHead({
  title: "Shop",
  meta: [{ name: "description", content: "Masterclass shop" }],
});

const { data: products } = await useFetch("https://fakestoreapi.com/products");
</script>

<template>
  <div>
    <h2 class="text-3xl my-6 text-slate-900">Shop</h2>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="p in products">
        <ProductCard :product="p" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
