<script setup>
import { BarChart2, Home, Server, Settings } from 'lucide-vue-next';
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="w-40 bg-white h-full shadow-lg">
    <div class="flex items-center justify-center h-16 border-b">
      <h1 class="text-2xl font-bold text-blue-600">Data Pulse</h1>
    </div>
    <nav class="mt-6">
      <RouterLink to="/" class="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100">
        <Home class="h-5 w-5 mr-3" />
        Dashboard
      </RouterLink>
      <RouterLink to="/analytics" class="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100">
        <BarChart2 class="h-5 w-5 mr-3" />
        Analytics
      </RouterLink>
      <RouterLink to="/endpoints" class="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100">
        <Server class="h-5 w-5 mr-3" />
        Endpoints
      </RouterLink>
      <RouterLink to="/settings" class="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100">
        <Settings class="h-5 w-5 mr-3" />
        Settings
      </RouterLink>
    </nav>
  </div>
</template>