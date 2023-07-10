<template>
  <div>
    <header>
        数据可视化
    </header>
    <main>
      <section class="leftCon">
        <ChartStyle>
          <LeftTopChart />
        </ChartStyle>

        <ChartStyle>
          <LeftBottomChart />
        </ChartStyle>
      </section>

      <section class="centerCon">
        <mapPage />
      </section>

      <section class="rightCon">
        <ChartStyle>
          <RightTopChart />
        </ChartStyle>

        <ChartStyle>
          <RightBottomChart />
        </ChartStyle>
      </section>
    </main>
  </div>
</template>

<script setup>
import ChartStyle from '../components/ChartStyle.vue'
import LeftTopChart from '../components/LeftTopChart.vue'
import LeftBottomChart from '../components/LeftBottomChart.vue'
import RightTopChart from '../components/RightTopChart.vue'
import RightBottomChart from '../components/RightBottomChart.vue'
import mapPage from '../components/mapPage.vue'
import { inject } from 'vue'

const $http = inject('axios')
const $echarts = inject('echarts')
</script>

<style scoped lang="scss">
header {
  color: white;
  font-size: 1.579vw;
  height: 3.947vw;
  text-align: center;
  line-height: 3.947vw;
  background-color: rgba(0, 0, 255, 0.2);
}

main {
  overflow: hidden;
  display: flex;
  padding: 8px 8px 0px;
  .leftCon, .rightCon {
    flex: 7;
  }
  .centerCon { 
    flex: 10;
    border: 1px solid rgba(12, 130, 255, .2);
    margin: 15px 10px;
  }
}
</style>