<script setup>
definePageMeta({
  layout: "shop",
});
useHead({
  title: "Shop | About",
  meta: [{ name: "description", content: "Masterclass shop" }],
});

/* const { tulledata } = await useFetch("/api/ninja?name=mario", {
  method: "post",
  body: { number: 30 },
}); */

const { data } = await useFetch("/api/currency/NOK");
</script>

<template>
  <div>
    <h2 class="text-3xl my-6 text-slate-900">About</h2>
    <!--<p>{{ tulledata }}</p>-->
    <p>{{ data }}</p>
  </div>
</template>

<style lang="scss" scoped></style>
