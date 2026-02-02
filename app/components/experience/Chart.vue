<template>
    <GeneralChart class="h-48"  :option="experienceChartOption"  style="height: 300px" />
</template>

<script setup lang="ts">
    
const currentYear = new Date().getFullYear()
const startFirstYear = 2018;

const colorMode = useColorMode()

const isDark = computed(() => colorMode.value === 'dark')


const generateYears = () => {
  const years = []
  for (let year = 2018; year <= currentYear; year++) {
    years.push(year)
  }
  return years
}

const calculateExperience = (startYear: number =startFirstYear ) => {
    const allYears = generateYears()
    return allYears.map(year => {
        if(year < startYear) return 
        return  year - startYear 
    })
}

const experienceChartOption = computed(() => {
  const textColor = isDark.value ? '#e5e7eb' : '#374151'
  const axisLineColor = isDark.value ? '#4b5563' : '#d1d5db'
  
  return {
    backgroundColor: 'transparent',
    grid: {
      top: '10%',
      bottom: '20%',
      left: '8%',
      right: '4%'
    },
    tooltip: {
      trigger: 'axis',
      backgroundColor: isDark.value ? '#1f2937' : '#fff',
      borderColor: isDark.value ? '#374151' : '#e5e7eb',
      textStyle: {
        color: textColor
      },
      formatter: (params: any) => {
        let result = params[0].name + '<br/>'
        params.forEach((param: any) => {
          if (param.value !== null && param.value !== undefined && param.value !== 0) {
            result += `${param.marker} ${param.seriesName}: ${param.value} ans<br/>`
          }
        })
        return result
      }
    },
    legend: {
      data: ['Expérience Front-end', 'Expérience Full-stack'],
      bottom: 0,
      textStyle: {
        color: textColor
      }
    },
    xAxis: {
      type: 'category',
      data: generateYears(),
      boundaryGap: false,
      axisLine: {
        lineStyle: {
          color: axisLineColor
        }
      },
      axisLabel: {
        color: textColor
      }
    },
    yAxis: {
      type: 'value',
      min: 0,
      max: 5,
      axisLine: {
        lineStyle: {
          color: axisLineColor
        }
      },
      splitLine: {
        lineStyle: {
          color: isDark.value ? '#374151' : '#e5e7eb'
        }
      },
      axisLabel: {
        margin: 25,
        color: textColor,
        formatter: (value: number) => {
          if (value === 0) return 'Noob'
          if (value === 5) return 'PGM *'
          return ''
        }
      }
    },
    series: [
      {
        name: 'Expérience Front-end',
        type: 'line',
        data: calculateExperience(),
        smooth: true,
        itemStyle: {
          color: '#42b983'
        },
        areaStyle: {
          opacity: 0.3
        }
      },
      {
        name: 'Expérience Full-stack',
        type: 'line',
        data: calculateExperience(2024),
        smooth: true,
        itemStyle: {
          color: '#3b82f6'
        },
        areaStyle: {
          opacity: 0.3
        }
      }
    ]
  }
})
</script>