<template>
  <h5>
    产品类别
  </h5>
  <div class="chart" ref="chart"></div>
</template>

<script setup>
import { inject, ref, reactive, onMounted } from 'vue';

const $echarts = inject('echarts')
const $http = inject('axios')

let data = reactive({})
const chart = ref(null)

const getState = async () => {
  data = await $http({
    url: '/four/data'
  })
}

onMounted(() => {
  getState().then(() => {
    let myChart = $echarts.init(chart.value)
    myChart.setOption({
      grid: {
        left: '3%',
        right: '4%',
        bottom: '15%',
        containLabel: 'true'
      },
      xAxis: {
        type: 'category',
        data: data.data.chartOne.chartData.day,
        axisLine: {
          lineStyle: {
            color: '#FFFFFF'
          }
        }
      },
      yAxis: {
        type: 'value',
        axisLine: {
          lineStyle: {
            color: '#FFFFFF'
          }
        }
      },
      legend: {},
      tooltip: {
        trigger: 'axis',
        xisPointer: {
          type: 'shadow'
        }
      },
      series: [
        {
          name: '服饰',
          type: 'bar',
          data: data.data.chartOne.chartData.num.gear,
          stack: 'total',
          label: {
            show: true
          },
          emphasis: {
            focus: 'series'
          }
        },
        {
          name: '数码',
          type: 'bar',
          data: data.data.chartOne.chartData.num.Clothes,
          stack: 'total',
          label: {
            show: true
          },
          emphasis: {
            focus: 'series'
          }
        },
        {
          name: '家电',
          type: 'bar',
          data: data.data.chartOne.chartData.num.Electrical,
          stack: 'total',
          label: {
            show: true
          },
          emphasis: {
            focus: 'series'
          }
        },
        {
          name: '家居',
          type: 'bar',
          data: data.data.chartOne.chartData.num.digit,
          stack: 'total',
          label: {
            show: true
          },
          emphasis: {
            focus: 'series'
          }
        },
        {
          name: '日化',
          type: 'bar',
          data: data.data.chartOne.chartData.num.Chemicals,
          stack: 'total',
          label: {
            show: true
          },
          emphasis: {
            focus: 'series'
          }
        }
      ]
    })
  })
})
</script>

<style scoped lang="scss">
.chart {
  height: 310px;
}
</style>