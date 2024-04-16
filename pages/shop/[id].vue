<script setup lang="ts">
definePageMeta({
  layout: "shop",
});

const { id } = useRoute().params;
const uri = "https://fakestoreapi.com/products/" + id;

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: null;
  rate: number;
  count: number;
}

const { data } = await useFetch<Product>(uri);

if (!data.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Product not found",
    fatal: true,
  });
}

const product = data.value;
</script>

<template>
  <div>
    <Head>
      <Title>Shop | {{ product.title }}</Title>
      <Meta name="description" :content="product.description" />
    </Head>
    <ProductDetails :product="product" />
  </div>
</template>

<style scoped></style>
