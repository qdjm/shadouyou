<template>
  <h5>
    销售总量
  </h5>
  <div class="chart" ref="chart"></div>
</template>

<script setup>
import { inject, onMounted, reactive, ref } from 'vue';

const $echarts = inject('echarts')
const $http = inject('axios')
const chart = ref(null)

let data = reactive({})
let xData = reactive([])
let yData = reactive([])

const getState = async () => {
  data = await $http({
    url: '/one/data'
  })
}

const setData = () => {
  xData = data.data.chartOne.chartData.map(item => item.title)
  yData = data.data.chartOne.chartData.map(item => item.num)
}

onMounted(() => {
  // 初始化 echarts
  const myEchart = $echarts.init(chart.value)

  getState().then(() => {
    setData()
    myEchart.setOption({
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      grid: {
        top: '3%',
        left: '1%',
        right: '6%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'value',
        axisLine: {
          lineStyle: {
            color: '#FFFFFF'
          }
        }
      },
      yAxis: {
        type: 'category',
        data: xData,
        axisLine: {
          lineStyle: {
            color: '#FFFFFF'
          }
        }
      },
      series: [
        {
          type: 'bar',
          data: yData,
          label: {
            show: true,
            position: 'right'
          },
          itemStyle: {
            borderRadius: [0, 20, 20, 0],
            color: new $echarts.graphic.LinearGradient(0, 0, 1, 0,
              [
                {
                  offset: 0,
                  color: '#005EAA'
                },
                {
                  offset: 0.5,
                  color: '#339CA8'
                },
                {
                  offset: 1,
                  color: '#CDA819'
                }
              ]
            )
          }
        }
      ]
    })
  })
})
</script>

<style scoped lang="scss">
.chart {
  height: 270px;
}

h5 {
  height: 38px;
  color: white;
  text-align: center;
  line-height: 38px;
}
</style>