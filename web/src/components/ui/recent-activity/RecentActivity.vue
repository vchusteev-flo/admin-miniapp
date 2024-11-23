<script setup>
import { Activity } from 'lucide-vue-next';

const activities = [
  { id: 1, event: "API key created", time: "2 minutes ago" },
  { id: 2, event: "New endpoint added", time: "1 hour ago" },
  { id: 3, event: "Rate limit increased", time: "3 hours ago" },
  { id: 4, event: "Database backup", time: "5 hours ago" },
  { id: 5, event: "System update", time: "1 day ago" },
]
</script>

<template>
  <div class="space-y-8">
    <div v-for="activity in activities" :key="activity.id" class="flex">
      <div class="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-600 mr-4">
        <Activity class="w-5 h-5" />
      </div>
      <div>
        <p class="text-sm font-medium">{{ activity.event }}</p>
        <p class="text-xs text-gray-500">{{ activity.time }}</p>
      </div>
    </div>
  </div>
</template>
