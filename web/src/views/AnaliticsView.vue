<script setup>
import { ref, onMounted } from "vue";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip
} from "chart.js";
import { Bar } from "vue-chartjs";
import axios from "axios";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Data for the bar chart
const data = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      label: "Weekly Requests",
      data: [4000, 3000, 2000, 2780, 1890, 2390, 3490],
      backgroundColor: "#8884d8"
    }
  ]
};

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
};

// Fetch data from MongoDB endpoint
const tableData = ref([]);
const isLoading = ref(false);
const error = ref(null);

const fetchData = async () => {
  isLoading.value = true;
  try {
    const response = await axios.get("https://tasty-bananas-tickle.loca.lt/inquiries");
    tableData.value = response.data.map(item => ({
      ...item,
      date: new Intl.DateTimeFormat("en-US", { year: "numeric", month: "2-digit", day: "2-digit" }).format(new Date(item.date))
    }));
  } catch (err) {
    error.value = "Failed to load data.";
    console.error(err);
  } finally {
    isLoading.value = false;
  }
};

onMounted(() => {
  fetchData();
});
</script>

<template>
  <div class="space-y-6">
    <h1 class="text-2xl font-bold">Analytics</h1>
    
    <!-- Weekly Requests Bar Chart -->
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
    
    <!-- Top Endpoints List -->
    <Card>
      <CardHeader>
        <CardTitle>Top Endpoints</CardTitle>
      </CardHeader>
      <CardContent>
        <ul class="space-y-2">
          <li class="flex justify-between items-center" v-for="(endpoint, index) in [
            { name: '/api/users', value: '1,234,567' },
            { name: '/api/products', value: '987,654' },
            { name: '/api/orders', value: '456,789' },
            { name: '/api/auth', value: '345,678' },
            { name: '/api/analytics', value: '234,567' }
          ]" :key="index">
            <span class="text-sm">{{ endpoint.name }}</span>
            <span class="text-sm font-medium">{{ endpoint.value }}</span>
          </li>
        </ul>
      </CardContent>
    </Card>
    
    <!-- Dynamic Data Table -->
    <Card>
      <CardHeader>
        <CardTitle>Inquiries Table</CardTitle>
      </CardHeader>
      <CardContent>
        <div class="">
          <table class="min-w-full border-collapse border border-gray-300 text-sm">
            <thead>
              <tr class="bg-gray-100">
                <th class="border border-gray-300 px-4 py-2">Date</th>
                <th class="border border-gray-300 px-4 py-2">User ID</th>
                <th class="border border-gray-300 px-4 py-2">User Name</th>
                <th class="border border-gray-300 px-4 py-2">Car Model</th>
              </tr>
            </thead>
            <tbody>
              <tr v-if="isLoading">
                <td colspan="4" class="text-center py-4">Loading...</td>
              </tr>
              <tr v-if="error">
                <td colspan="4" class="text-center text-red-500 py-4">{{ error }}</td>
              </tr>
              <tr v-for="(inquiry, index) in tableData" :key="index">
                <td class="border border-gray-300 px-4 py-2">{{ inquiry.date }}</td>
                <td class="border border-gray-300 px-4 py-2">{{ inquiry.userId }}</td>
                <td class="border border-gray-300 px-4 py-2">{{ inquiry.userName }}</td>
                <td class="border border-gray-300 px-4 py-2">{{ inquiry.carModel }}</td>
              </tr>
              <tr v-if="tableData.length === 0 && !isLoading && !error">
                <td colspan="4" class="text-center py-4">No data available</td>
              </tr>
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  </div>
</template>
