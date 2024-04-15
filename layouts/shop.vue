<script setup lang="ts"></script>

<template>
  <nav class="bg-slate-50 shadow-sm">
    <div class="container mx-auto max-w-6xl flex justify-between p-5">
      <div>
        <NuxtLink to="/shop">Shop</NuxtLink>
      </div>
      <NuxtLink to="#"><i class="material-icons">shopping_bag</i></NuxtLink>
    </div>
  </nav>

  <div class="container mx-auto max-w-6xl p-5">
    <slot />
    <footer>
      <nav>
        <ul>
          <li><NuxtLink class="pr-6" to="/">Masterclass</NuxtLink></li>
          <li>
            <NuxtLink class="pr-6" to="/docs">Typescript docs</NuxtLink>
          </li>
        </ul>
      </nav>
    </footer>
  </div>
</template>
