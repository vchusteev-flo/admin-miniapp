<script setup lang="ts">
import {
	CategoryScale,
	Chart as ChartJS,
	Legend,
	LinearScale,
	LineElement,
	PointElement,
	Title,
	Tooltip
} from 'chart.js';
import { Line } from 'vue-chartjs';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Monthly Total',
      data: [1234, 2234, 3234, 2734, 3734, 4234, 4734, 3734, 4234, 4534, 4934, 5234],
      borderColor: '#8884d8',
      tension: 0.1,
      borderWidth: 2
    }
  ]
}

const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      grid: {
        display: false
      },
      ticks: {
        color: '#888888',
        font: {
          size: 12
        }
      }
    },
    y: {
      grid: {
        display: false
      },
      ticks: {
        color: '#888888',
        font: {
          size: 12
        }
      }
    }
  }
}
</script>

<template>
  <div style="height: 350px">
    <Line :data="data" :options="options" />
  </div>
</template>
