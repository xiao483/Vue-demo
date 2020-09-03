<template>
  <div class="data-over-view">
    <el-card>
      <div id="main1"></div>
    </el-card>
    <el-card>
      <div id="main2"></div>
    </el-card>
  </div>
</template>
<script>
  export default {
    data(){
      return{
      }
    },
    mounted(){
// 基于准备好的dom，初始化echarts实例
      var myChart1 = this.$echarts.init(document.getElementById('main1'))
// 绘制图表
      myChart1.setOption({
        title: {
          text: 'ECharts demo'
        },
        tooltip: {},
        xAxis: {
          data: ['苹果', '香蕉', '哈密瓜', '西瓜', '芒果', '蜜桃']
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      });
      var myChart2 = this.$echarts.init(document.getElementById('main2'))
      myChart2.setOption({
        title: {
          text: '世界人口总量',
          subtext: '数据来自网络'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          data: ['2019年', '2020年']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'value',
          boundaryGap: [0, 0.01]
        },
        yAxis: {
          type: 'category',
          data: ['巴西', '印尼', '美国', '印度', '中国', '世界人口(万)']
        },
        series: [
          {
            name: '2019年',
            type: 'bar',
            data: [18203, 23489, 29034, 104970, 131744, 630230]
          },
          {
            name: '2020年',
            type: 'bar',
            data: [19325, 23438, 31000, 121594, 134141, 681807]
          }
        ]
      })
    }
  }
</script>
<style lang="scss">
.data-over-view{
  width: 100%;
  display: flex;
  justify-content: space-between;
  .el-card{
    width: 50%;
    padding:20px 0;
    #main1,#main2{
      height: 300px;
      padding:20px 0;
    }
  }

}
</style>
