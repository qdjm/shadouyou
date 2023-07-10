<template>
  <h5>
    库存统计
  </h5>
  <div class="chart" ref="chart">
    我是图表
  </div>
</template>

<script setup>
import { inject, onMounted, reactive, ref } from 'vue';

let data = reactive({})
let $echarts = inject('echarts')
let $http = inject('axios')
const chart = ref(null) 

const getState = async () => {
  data = await $http({
    url: '/three/data'
  })
}

onMounted(() => {
  getState().then(() => {
    let myChart = $echarts.init(chart.value)
    myChart.setOption({
      legend: {
        top: 'bottom'
      },
      tooltip: {
        show: true
      },
      series: [
        {
          type: 'pie',
          data: data.data.chartThree.chartData,
          radius: [10, 100],
          center: ['50%', '45%'],
          roseType: 'area',
          itemStyle: {
            borderRadius: 10
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