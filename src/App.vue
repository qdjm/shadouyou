<template>
  <router-view></router-view>
</template>

<script setup>
import { provide } from 'vue'
import axios from 'axios'
import * as echarts from 'echarts'

// 设置基准路径
axios.defaults.baseURL = 'http://localhost:8745'

provide('axios', axios)
provide('echarts', echarts)
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: url('./assets/bg.png') no-repeat;
  background-size: cover;
}
</style>