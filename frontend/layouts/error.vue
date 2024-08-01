<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="text-center">
      <h1 class="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <p class="text-2xl text-gray-600 mb-8">Trang không tìm thấy</p>
      <NuxtLink to="/" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300">
        Quay lại trang chủ
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  error: Object
})
</script>