<template>
  <div id="chart">
    <apexchart
      type="radialBar"
      height="390px"
      :options="chartOptions.chartOptions"
      :series="tvlTokens"
    ></apexchart>
  </div>
</template>

<script setup>
import { computed, toRefs } from 'vue'
const props = defineProps({
  nativeTokens: Object,
  tvlTokens: Object,
  tvl: Number,
})

const { nativeTokens, tvlTokens, tvl } = toRefs(props)

const chartOptions = computed(() => {
  return {
    chartOptions: {
      chart: {
        foreColor: '#ffffff',
        height: 300,
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          offsetY: 10,
          startAngle: 0,
          endAngle: 360,
          hollow: {
            margin: 0,
            size: '30%',
            background: 'transparent',
            image: undefined,
          },
          dataLabels: {
            name: {
              fontSize: '40px',
            },
            value: {
              fontSize: '10px',
            },
            total: {
              show: true,
              label: 'Total',
              margin: 10,
              formatter: function (w) {
                return Math.ceil(tvl.value / 1000000) + '  B'
              },
            },
          },
        },
      },
      colors: [
        '#0070B7',
        '#0090B5',
        '#0080B5',
        '#0070B5',
        '#0060B5',
        '#0050B5',
        '#0040B5',
        '#0030B5',
        '#0020B5',
        '#0010B5',
        '#0000B5',
      ],
      labels: [
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
      legend: {
        show: false,
        labels: {
          useSeriesColors: true,
        },
        markers: {
          size: 10,
        },
        itemMargin: {
          vertical: 3,
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              show: false,
            },
          },
        },
      ],
    },
  }
})
</script>

<style lang="scss" scoped></style>
