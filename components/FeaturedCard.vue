<template>
    <div class="card">
          <div class="relative">
            <img :src="img.image" class="card-img" />
            <span class="chips-pink absolute top-1.5 right-1.5">- 30%</span>
          </div>
          <p class="mt-6">
            VILLETTA VIA MAESTRO FILLIOL 4 FENESTRELLE MENTOULLES DI 184,05 MQ. OLTRE BOX
            E TERRENI
          </p>
          <p class="text-xs text-gray-800 mt-4">
            m2 184,05 | n° camere 3 | n° bagni 2 | Beni acc. 2
          </p>
          <p class="mt-4">Offerta minima <span> € 79.312,00</span></p>
          <div class="flex w-full justify-between mt-6">
            <span class="text-xs text-pink-500">Scadenza asta 17 gennaio 2023</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6  hover:text-pink-500"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </div>
        </div>
</template>

<script setup>
const img = defineProps(['image']);
// const imgUrl = '/images/webaliser-_TPTXZd9mOo-unsplash.jpg'
</script>

<style scoped>

</style>