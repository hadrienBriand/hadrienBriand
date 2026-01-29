<template>
    <GeneralChart class="h-48"  :option="experienceChartOption"  style="height: 300px" />
</template>

<script setup lang="ts">
    
const currentYear = new Date().getFullYear()
const startFirstYear = 2018;
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

const experienceChartOption = {
grid: {
    top: '10%',
    bottom: '20%',   
    left: '8%',
    right: '4%'
  },
  tooltip: {
    trigger: 'axis',
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
    bottom: 0
  },
  xAxis: {
    type: 'category',
    data: generateYears(),
    boundaryGap: false
  },
  yAxis: {
    type: 'value',
    min: 0,
    max:5,
    axisLabel: {
        margin:25,
    formatter: (value: number) => {
      if (value === 0) return 'Noob'
      if (value === 5) return 'Evan You *'
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
        color: 'blue' 
      },
      areaStyle: {
        opacity: 0.3
      }
    }
  ]
}
</script>