<template>
  <div class="pageing">
    <el-pagination
      background
      layout="total, sizes, prev, pager, next, jumper"
      :total="1000">
    </el-pagination>
  </div>
</template>
<script>
  export default {
    data() {
      return{

      }
    },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    },
  }
</script>
<style lang="scss">
.pageing{
  /*text-align: right;*/
  margin-top: 20px;
}
</style>
