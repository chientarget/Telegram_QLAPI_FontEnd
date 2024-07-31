<template>
  <div>
    <LoadingIndicator />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import LoadingIndicator from '~/components/LoadingIndicator.vue'
</script>