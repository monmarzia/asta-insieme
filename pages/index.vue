<template>
  <div class="main-container">
    <FilterBar />
    <div class="container flex w-full justify-center">
      <template v-for="img in imgs">
        <FeaturedCard :image="img" />
      </template>
    </div>
  </div>
</template>

<script setup>
const imgs = [
  "/images/avi-waxman-f9qZuKoZYoY-unsplash.jpg",
  "/images/ronnie-george-9gGvNWBeOq4-unsplash.jpg",
  "/images/webaliser-_TPTXZd9mOo-unsplash.jpg",
];
</script>

<style scoped></style>
