<!-- pages/404.vue -->
<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <h1 class="text-6xl font-bold text-gray-800 mb-4">404</h1>
    <p class="text-xl text-gray-600 mb-8">Oops! Trang bạn đang tìm kiếm không tồn tại.</p>
    <NuxtLink
        to="/"
        class="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
    >
      Quay lại trang chủ
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
// Nếu bạn cần thêm logic, bạn có thể đặt nó ở đây
import { useHead } from '#app'

useHead({
  title: 'Trang không tìm thấy | 404',
  meta: [
    { name: 'description', content: 'Trang 404 tùy chỉnh cho ứng dụng Nuxt' }
  ]
})
</script>