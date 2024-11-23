<script setup lang='ts'>
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";

const endpoints = [
  { name: "/api/users", method: "GET", requests: "1.23M", avgResponseTime: "45ms", errorRate: "0.02%" },
  { name: "/api/products", method: "POST", requests: "987K", avgResponseTime: "78ms", errorRate: "0.05%" },
  { name: "/api/orders", method: "PUT", requests: "456K", avgResponseTime: "62ms", errorRate: "0.03%" },
  { name: "/api/auth", method: "POST", requests: "789K", avgResponseTime: "55ms", errorRate: "0.01%" },
  { name: "/api/analytics", method: "GET", requests: "345K", avgResponseTime: "92ms", errorRate: "0.07%" },
]

defineOptions({
  name: 'EndpointsPage'
})
</script>

<template>
  <div class="space-y-6">
    <h1 class="text-2xl font-bold">API Endpoints</h1>
    <Card v-for="(endpoint, index) in endpoints" :key="index">
      <CardHeader>
        <CardTitle class="text-lg">{{ endpoint.name }}</CardTitle>
      </CardHeader>
      <CardContent>
        <div class="grid grid-cols-2 gap-2 text-sm">
          <div>Method:</div>
          <div class="font-medium">{{ endpoint.method }}</div>
          <div>Requests:</div>
          <div class="font-medium">{{ endpoint.requests }}</div>
          <div>Avg. Response Time:</div>
          <div class="font-medium">{{ endpoint.avgResponseTime }}</div>
          <div>Error Rate:</div>
          <div class="font-medium">{{ endpoint.errorRate }}</div>
        </div>
      </CardContent>
    </Card>
  </div>
</template>