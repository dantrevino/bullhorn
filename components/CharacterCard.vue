<script setup lang="ts">
const props = defineProps({
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  id: {
    type: String,
    required: true
  },
  species: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  }
})
</script>
<template>
  <div>
  <NuxtImg :src="image" :alt="name" />
  <div>
    <p class="text-xl">{{ name }}</p>
    <p class="text-xl">{{ id }}</p>
    <p class="text-xl">{{ status }}</p>
    <p class="text-xl">{{ species }}</p>
    <p class="text-xl">{{ location }}</p>
  </div>
  </div>
</template>