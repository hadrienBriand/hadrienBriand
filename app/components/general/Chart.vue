<template>
  <v-chart 
    class="chart" 
    :option="option" 
    autoresize 
  />
</template>

<script setup lang="ts">
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { BarChart, LineChart, PieChart } from 'echarts/charts'
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent
} from 'echarts/components'
import VChart from 'vue-echarts'

// Enregistre les composants nécessaires
use([
  CanvasRenderer,
  BarChart,
  LineChart,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent
])

const props = defineProps<{
  option: any
}>()
</script>

<style scoped>
.chart {
  height: 400px;
  width: 100%;
}
</style>