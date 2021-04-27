<template>
  <div class="work-list">
    <el-card>
      <!--      查询组件-->
      <el-form :inline="true" :model="formInline" class="demo-form-inline" size="small">
        <el-form-item>
          <el-button type="primary" @click="addStudent">新增</el-button>
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
        <el-table-column prop="age" label="年龄" align="center" ></el-table-column>
        <el-table-column prop="sex_text" label="性别" align="center" ></el-table-column>
        <el-table-column prop="class" label="班级" align="center" ></el-table-column>
        <el-table-column prop="state" label="状态" align="center" ></el-table-column>
        <el-table-column prop="address" label="地址" align="center" ></el-table-column>
        <el-table-column prop="phone" label="联系方式" align="center" ></el-table-column>
        <el-table-column  label="操作" align="center" >
          
          <template slot-scope="scope">
            <el-button type="primary" size="mini" @click="updateInfo(scope.row)"><i class="el-icon-edit"></i></el-button>
            <el-button type="danger" size="mini"><i class="el-icon-delete"></i></el-button>
          </template>
        </el-table-column>
      </el-table>
      <!--      修改弹窗组件-->
      <el-dialog :title="state ?'修改学生信息' : '添加学生信息'" :visible.sync="dialogFormVisible" width="500px">
        <el-form :model="form">
          <el-form-item label="姓名" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="学号" :label-width="formLabelWidth">
            <el-input v-model="form.number" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="年龄" :label-width="formLabelWidth">
            <el-input v-model="form.age" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="性别" :label-width="formLabelWidth">
            <el-radio v-model="form.sex" label="1">男</el-radio>
            <el-radio v-model="form.sex" label="2">女</el-radio>
          </el-form-item>
          <el-form-item label="班级" :label-width="formLabelWidth">
            <el-select v-model="form.class" placeholder="请选择班级">
              <el-option label="一班" value='1'></el-option>
              <el-option label="二班" value="2"></el-option>
              <el-option label="三班" value='3'></el-option>
              <el-option label="四班" value="4"></el-option>
              <el-option label="五班" value='5'></el-option>
              <el-option label="六班" value="6"></el-option>
              <el-option label="七班" value='7'></el-option>
              <el-option label="八班" value="8"></el-option>
              <el-option label="九班" value='9'></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="地址" :label-width="formLabelWidth">
            <el-input v-model="form.address" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="联系方式" :label-width="formLabelWidth">
            <el-input v-model="form.phone" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="sure">确 定</el-button>
        </div>
      </el-dialog>
      <!--      <page></page>-->
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
        form: {},
        formLabelWidth: '80px',
        state: false,
        total: 0,
        currentPage: 1,
        pagesize: 10
      }
    },
    created() {
      this.getDataList()
    },
    methods:{
      sure(){
        if (this.state){
          //调用修改接口
        }else {
          //调用新增接口
        }
        this.dialogFormVisible = false
      },
      addStudent(){   //新增
        this.state = false;
        this.form = {
          sex: '1'
        };
        this.dialogFormVisible = true
      },
      updateInfo(row){     //修改
        this.state = true;
        this.form = {...row};
        console.log(row);
        this.dialogFormVisible = true
      },
      del(){  ///删除
        this.$alert('确认删除吗吗', '删除提示', {
          confirmButtonText: '确定',
          callback: action => {
            //对接删除接口
          }
        });
      },
      onSubmit() {    //查询
        console.log('submit!');
      },
      getDataList() {
        this.service.get("studentList")
          .then(res => {
            console.log(res);
            if (res.data.status === '200'){
              res.data.data.forEach(item => {
                item.sex === '1' ? item.sex_text ="男" : item.sex_text ="女"
              });
              this.tableData = [...res.data.data];
              this.total = res.data.total;
              // console.log(this.total)
            }
          })
          .catch(arr => {
            console.log(arr);
          })
      },
      handleSizeChange(val) {
        this.pagesize = val;
        this.currentPage = 1;
        // console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        this.currentPage = val
        // console.log(`当前页: ${val}`);
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
