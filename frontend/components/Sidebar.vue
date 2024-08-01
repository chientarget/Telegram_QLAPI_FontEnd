<template>
  <div class="flex flex-col h-screen bg-gray-800 text-white w-64">
    <div class="flex items-center justify-center h-20 bg-red-600">
      <span class="text-2xl font-bold">viettelAi</span>
    </div>
    <nav class="flex-1 px-2 py-4 space-y-2">
      <router-link to="/dashboard" class="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 rounded-md">
        <span class="material-icons">dashboard</span>
        <span class="ml-2">Dashboard</span>
      </router-link>
      <router-link to="/profile" class="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 rounded-md">
        <span class="material-icons">person</span>
        <span class="ml-2">Profile</span>
      </router-link>
    </nav>
  </div>
</template>

<script setup lang="ts">
</script>
