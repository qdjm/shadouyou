<template>
  <div class="map" ref="chinaMap"></div>
</template>

<script setup>
import axios from 'axios';
import { inject, onMounted, reactive, ref } from 'vue';

let mapData = reactive({})
let $echarts = inject('echarts')
const chinaMap = ref(null)

const getState = async () => {
  mapData = await axios.get('http://localhost:5173/map/china.json')
}

onMounted(() => {
  getState().then(() => {
    $echarts.registerMap('china', mapData.data)
    let myChart = $echarts.init(chinaMap.value)
    myChart.setOption({
      geo: {
        map: 'china',
        itemStyle: {
          areaColor: '#0099ff',
          borderColor: '#00ffff',
          shadowColor: 'rgba(230, 130, 70, 0.5)',
          shadowBlur: 30,
        },
        emphasis: {
          focus: 'self'
        }
      },
      tooltip: {
        trigger: 'item'
      },
      title: {
        text: '城市销量',
        left: '45%',
        top: '3%',
        textStyle: {
          color: '#FFF',
          fontSize: 16,
          textShadowBlur: 10,
          textShadowColor: '#33FFFF'
        }
      },
      visualMap: {
        type: 'continuous',
        min: 100,
        max: 5000,
        calculable: true,
        inRange: {
          color: ['#50A3BA', '#EAC736', '#D94E5D'],
        },
        textStyle: {
          color: '#FFFFFF'
        }
      },
      series: [
        {
          type: 'scatter',
          itemStyle: {
            color: 'red',
          },
          coordinateSystem: 'geo',
          data: [
            { name: "北京", value: [116.46, 39.92, 4367] },
            { name: "上海", value: [121.48, 31.22, 8675] },
            { name: "深圳", value: [114.07, 22.62, 2461] },
            { name: "广州", value: [113.23, 23.16, 187] },
            { name: "西安", value: [108.45, 34, 3421] },
          ]
        }
      ]
    })
  })
})
</script>

<style>
.map {
  width: 100%;
  height: 100%;
}
</style>