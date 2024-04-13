<script setup lang="ts"></script>

<template>
  <nav class="bg-slate-50 shadow-sm">
    <div class="container mx-auto max-w-6xl flex justify-between p-5">
      <div>
        <NuxtLink class="pr-6" to="/">Home</NuxtLink>
        <NuxtLink class="pr-6" to="/docs">Docs</NuxtLink>
      </div>
      <NuxtLink to="/shop">Shop</NuxtLink>
    </div>
  </nav>

  <div class="container mx-auto max-w-6xl p-5">
    <slot />
  </div>
</template>
