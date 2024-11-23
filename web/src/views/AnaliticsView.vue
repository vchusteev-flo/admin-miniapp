<script setup>
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	BarElement,
	CategoryScale,
	Chart as ChartJS,
	Legend,
	LinearScale,
	Title,
	Tooltip
} from 'chart.js';
import { Bar } from 'vue-chartjs';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

const data = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [{
    label: 'Weekly Requests',
    data: [4000, 3000, 2000, 2780, 1890, 2390, 3490],
    backgroundColor: '#8884d8'
  }]
}

const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      grid: {
        display: true,
        drawBorder: false
      }
    },
    y: {
      grid: {
        display: true,
        drawBorder: false
      }
    }
  }
}
</script>

<template>
  <div class="space-y-6">
    <h1 class="text-2xl font-bold">Analytics</h1>
    <Card>
      <CardHeader>
        <CardTitle>Weekly Requests</CardTitle>
      </CardHeader>
      <CardContent>
        <div style="height: 200px">
          <Bar :data="data" :options="options" />
        </div>
      </CardContent>
    </Card>
    <Card>
      <CardHeader>
        <CardTitle>Top Endpoints</CardTitle>
      </CardHeader>
      <CardContent>
        <ul class="space-y-2">
          <li class="flex justify-between items-center">
            <span class="text-sm">/api/users</span>
            <span class="text-sm font-medium">1,234,567</span>
          </li>
          <li class="flex justify-between items-center">
            <span class="text-sm">/api/products</span>
            <span class="text-sm font-medium">987,654</span>
          </li>
          <li class="flex justify-between items-center">
            <span class="text-sm">/api/orders</span>
            <span class="text-sm font-medium">456,789</span>
          </li>
          <li class="flex justify-between items-center">
            <span class="text-sm">/api/auth</span>
            <span class="text-sm font-medium">345,678</span>
          </li>
          <li class="flex justify-between items-center">
            <span class="text-sm">/api/analytics</span>
            <span class="text-sm font-medium">234,567</span>
          </li>
        </ul>
      </CardContent>
    </Card>
  </div>
</template>
