<script setup>
import { computed } from 'vue'
const chartOptions = computed(() => {
  return {
    series: [
      {
        name: 'Earnings this month:',
        data: [
          '60.42',
          '16.70',
          '7.02',
          '5.42',
          '2.88',
          '2.07',
          '1.91',
          '1.85',
          '0.91',
          '0.83',
        ],
      },
      {
        name: 'Expense this month:',
        data: [
          '60.42',
          '16.70',
          '7.02',
          '5.42',
          '2.88',
          '2.07',
          '1.91',
          '1.85',
          '0.91',
          '0.83',
        ],
      },
    ],
    chartOptions: {
      grid: {
        borderColor: 'rgba(0,0,0,0.1)',
        strokeDashArray: 5,
        xaxis: {
          lines: {
            show: false,
          },
        },
      },
      plotOptions: {
        bar: { horizontal: false, columnWidth: '20%', borderRadius: [3] },
      },
      chart: {
        type: 'bar',
        height: 370,
        offsetX: -15,
        toolbar: { show: true },
        foreColor: '#adb0bb',
        fontFamily: 'inherit',
        sparkline: { enabled: false },
      },
      dataLabels: { enabled: false },
      markers: { size: 0 },
      legend: { show: false },
      xaxis: {
        type: 'category',
        categories: [
          'ETH',
          'TRON',
          'BNB',
          'ARB',
          'SOL',
          'AVAX',
          'OP',
          'MATIC',
          '',
          'ADA',
        ],
        labels: {
          style: { cssClass: 'grey--text lighten-2--text fill-color' },
        },
      },
      yaxis: {
        show: true,
        min: 0,
        max: 100,
        tickAmount: 4,
        labels: {
          style: {
            cssClass: 'grey--text lighten-2--text fill-color',
          },
        },
      },
      stroke: {
        show: true,
        width: 3,
        lineCap: 'butt',
        colors: ['transparent'],
      },
      tooltip: { theme: 'light' },

      responsive: [
        {
          breakpoint: 600,
          options: {
            plotOptions: {
              bar: {
                borderRadius: 3,
              },
            },
          },
        },
      ],
    },
  }
})
</script>
<template>
  <div>
    <div>
      <div class="sm:flex align-center justify-space-between">
        <h1 class="text-xl font-semibold text-current">
          Sales Overview
        </h1>
      </div>
      <div class="mt-6">
        <apexchart
          type="bar"
          height="370px"
          :options="chartOptions.chartOptions"
          :series="chartOptions.series"
        >
        </apexchart>
      </div>
    </div>
  </div>
</template>
