<template>
  <div class="work-list">
    <el-card>
      <!--      查询组件-->
      <el-form :inline="true" :model="formInline" class="demo-form-inline" size="small">
        <el-form-item>
          <el-button type="primary" @click="addwork">提交作业</el-button>
        </el-form-item>
        <el-form-item label="姓名">
          <el-input v-model="formInline.name" placeholder="姓名"></el-input>
        </el-form-item>
        <el-form-item label="学号">
          <el-input v-model="formInline.number" placeholder="学号"></el-input>
        </el-form-item>
        <el-form-item label="班级">
          <el-select v-model="formInline.class" placeholder="班级">
            <el-option label="一班" value="shanghai"></el-option>
            <el-option label="二班" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
      <!--      显示列表组件-->
      <el-table :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"  style="width: 100%">
        <el-table-column prop="name" label="姓名" align="center" ></el-table-column>
        <el-table-column prop="number" label="学号" align="center" ></el-table-column>
        <el-table-column prop="class" label="班级" align="center" ></el-table-column>
        <el-table-column prop="data" label="提交日期" align="center" ></el-table-column>
        <el-table-column prop="state_text" label="状态" align="center" ></el-table-column>
        <el-table-column  label="操作" align="center" >
          <template slot-scope="scope">
            <el-button type="primary" size="mini" @click="approver(scope.row)">审批</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :page-sizes="[10,20,30,40,50]"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total">
      </el-pagination>
    </el-card>
  </div>
</template>
<script>
  import page from "../common/Pageing";
  export default {
    components:{
      page
    },
    data() {
      return {
        formInline: {
          user: '',
        },
        tableData: [],
        dialogFormVisible: false,
        // data: {},
        formLabelWidth: '80px',
        total: 0,
        currentPage: 1,
        pagesize: 10,
      }
    },
    created() {
      this.getDataList()
    },
    methods:{
      addwork(){   //添加作业
      },
      approver(row){     //审批
        this.state = true;
        this.form = {...row};
        console.log(row);
        this.dialogFormVisible = true
      },
      onSubmit() {    //查询
        console.log('submit!');
      },
      getDataList() {
        this.service.get("work")
          .then(res => {
            // console.log(res);
            // console.log(res.data.list)
            if (res.data.status === '200'){
              res.data.list.forEach(item => {
                item.state === '1' ? item.state_text ="未审批" : item.state_text ="已审批"

              });
              this.tableData = [...res.data.list];
              this.total = res.data.total;
            }
          })
          .catch(arr => {
            console.log(arr);
          })
      },
      handleSizeChange(val) {
        this.pagesize = val;
        this.currentPage = 1;
      },
      handleCurrentChange(val) {
        this.currentPage = val
      }
    },
  }
</script>
<style lang="scss">
  .work-list{
    .demo-form-inline{
      text-align: left;
    }
    .el-dialog{
      .el-select{
        width: 100%;
      }
      .el-radio{
        margin-right: 65px;
      }
    }
  }
</style>
