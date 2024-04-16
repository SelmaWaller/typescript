<script setup lang="ts">
defineProps(["error"]);

const handleClearError = () => clearError({ redirect: "/" });
</script>

<template>
  <div class="mt-7 p-12 max-w-sm mx-auto text-center card">
    <p class="mb-7 text-9xl font-bold">{{ error.statusCode }}</p>
    <p class="mt-7 text-6xl">Ooops</p>
    <p class="mt-7">{{ error.message }}</p>
    <button class="btn mt-7" @click="handleClearError">Go home</button>
  </div>
</template>

<style scoped></style>
