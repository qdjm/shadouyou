<template>
  <h5>
    产品月销
  </h5>
  <div class="chart" ref="chart">
    我是图表
  </div>
</template>

<script setup>
import { inject, ref, reactive, onMounted } from 'vue';

const $http = inject('axios')
const $echarts = inject('echarts')
const chart = ref(null)
let data = reactive({})

const getState = async () => {
  data = await $http({
    url: '/two/data'
  })
}

onMounted(() => {
  getState().then(() => {
    const myChart = $echarts.init(chart.value)
    myChart.setOption({
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#E6B600'
          }
        }
      },
      legend: {
        data: ['服饰', '数码', '家电', '家居', '日化']
      },
      grid: {
        left: '1%',
        right: '5%',
        bottom: '6%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: data.data.chartTwo.chartData.day,
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
      series: [
        {
          name: '服饰',
          type: 'line',
          data: data.data.chartTwo.chartData.num.Chemicals,
          smooth: true,
          showSymbol: false,
          stack: 'Total',
          lineStyle: {
            width: 0
          },
          emphasis: {
            focus: 'series'
          },
          areaStyle: {
            opacity: 0.8,
            color: new $echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "rgb(128, 255, 165)",
              },
              {
                offset: 1,
                color: "rgb(1, 191, 236)",
              }
            ]
            )
          }
        },
        {
          name: '数码',
          type: 'line',
          data: data.data.chartTwo.chartData.num.Clothes,
          stack: "Total", //数据堆叠
          smooth: true, //折线图平滑效果 变成曲线图
          showSymbol: false, //   隐藏所有数据点
          areaStyle: {
            opacity: 0.8,
            color: new $echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "rgb(0, 221, 255)",
              },
              {
                offset: 1,
                color: "rgb(77, 119, 255)",
              },
            ]),
          },
          lineStyle: {
            // 设置线段样式
            width: 0,
          },
          emphasis: {
            //设置高亮的图形样式和标签样式
            focus: "series", //只显示选中的内容高亮
          },
        },
        {
          name: '家电',
          type: 'line',
          data: data.data.chartTwo.chartData.num.Electrical,
          stack: "Total", //数据堆叠
          smooth: true, //折线图平滑效果 变成曲线图
          showSymbol: false, //   隐藏所有数据点
          areaStyle: {
            opacity: 0.8,
            color: new $echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "rgb(55, 162, 255)",
              },
              {
                offset: 1,
                color: "rgb(116, 21, 219)",
              },
            ]),
          },
          lineStyle: {
            // 设置线段样式
            width: 0,
          },
          emphasis: {
            //设置高亮的图形样式和标签样式
            focus: "series", //只显示选中的内容高亮
          },
        },
        {
          name: '家居',
          type: 'line',
          data: data.data.chartTwo.chartData.num.digit,
          stack: "Total", //数据堆叠
          smooth: true, //折线图平滑效果 变成曲线图
          showSymbol: false, //   隐藏所有数据点
          areaStyle: {
            opacity: 0.8,
            color: new $echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "rgb(255, 0, 135)",
              },
              {
                offset: 1,
                color: "rgb(135, 0, 157)",
              },
            ]),
          },
          lineStyle: {
            // 设置线段样式
            width: 0,
          },
          emphasis: {
            //设置高亮的图形样式和标签样式
            focus: "series", //只显示选中的内容高亮
          },
        },
        {
          name: '日化',
          type: 'line',
          data: data.data.chartTwo.chartData.num.gear,
          stack: "Total", //数据堆叠
          smooth: true, //折线图平滑效果 变成曲线图
          showSymbol: false, //   隐藏所有数据点
          areaStyle: {
            opacity: 0.8,
            color: new $echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "rgb(255, 191, 0)",
              },
              {
                offset: 1,
                color: "rgb(224, 62, 76)",
              },
            ]),
          },
          lineStyle: {
            // 设置线段样式
            width: 0,
          },
          emphasis: {
            //设置高亮的图形样式和标签样式
            focus: "series", //只显示选中的内容高亮
          },
        },
      ]
    })
  })
})
</script>

<style>
.chart {
  height: 280px;
}

h5 {
  height: 38px;
  color: white;
  text-align: center;
  line-height: 38px;
}
</style>