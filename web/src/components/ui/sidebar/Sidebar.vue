<script setup>
import { BarChart2, Home, Server, Settings } from 'lucide-vue-next';
import { RouterLink } from 'vue-router';
</script>
<!-- 
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
</template> -->
<template>
  <nav class="flex justify-around items-center h-16 bg-white border-t">
    <RouterLink to="/" class="flex flex-col items-center" :class="{ 'text-blue-600': $route.path === '/', 'text-gray-600': $route.path !== '/' }">
      <Home class="h-6 w-6" />
      <span class="text-xs mt-1">Home</span>
    </RouterLink>
    <RouterLink to="/analytics" class="flex flex-col items-center" :class="{ 'text-blue-600': $route.path === '/analytics', 'text-gray-600': $route.path !== '/analytics' }">
      <BarChart2 class="h-6 w-6" />
      <span class="text-xs mt-1">Analytics</span>
    </RouterLink>
    <RouterLink to="/endpoints" class="flex flex-col items-center" :class="{ 'text-blue-600': $route.path === '/endpoints', 'text-gray-600': $route.path !== '/endpoints' }">
      <Server class="h-6 w-6" />
      <span class="text-xs mt-1">Endpoints</span>
    </RouterLink>
    <RouterLink to="/settings" class="flex flex-col items-center" :class="{ 'text-blue-600': $route.path === '/settings', 'text-gray-600': $route.path !== '/settings' }">
      <Settings class="h-6 w-6" />
      <span class="text-xs mt-1">Settings</span>
    </RouterLink>
  </nav>
</template>