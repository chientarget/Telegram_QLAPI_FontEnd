<template>
  <div v-if="isLoading" class=" fixed inset-0 bg-white flex justify-center items-center h-screen z-20 ">
    <div class="flex justify-center items-center flex-col">
      <div class="text-2xl text-black mb-5 self-center">Loading...</div>
      <div class="loader-bar h-2 rounded bg-black w-[30%] h-[10px] "></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref, onMounted} from 'vue'

const isLoading = ref(true)

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 3000)
})
</script>

<style scoped>

.loader-bar {
  animation: loader-bar-animation 2s ease-in-out infinite;
}

@keyframes loader-bar-animation {
  0% {
    transform: translateX(-100%);
  }

  50% {
    transform: translateX(100%);
  }

  100% {
    transform: translateX(-100%);
  }
}
</style>