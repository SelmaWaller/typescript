<script setup lang="ts">
const { product } = defineProps(["product"]);
</script>

<template>
  <div class="card text-center">
    <img
      :src="product.image"
      style="max-height: 100px"
      class="m-auto"
      alt="Product image"
    />
    <p class="text-gray-500 m-4 truncate">{{ product.title }}</p>
    <NuxtLink :to="`/shop/${product.id}`">
      <p class="btn my-4">View details</p></NuxtLink
    >
  </div>
</template>

<style scoped></style>
