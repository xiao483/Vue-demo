<template>
  <div class="home">
    <el-container>
      <el-header>
        <div class="co-icon">
          <i :class="isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'" @click= "coll" :label="true"></i>
        </div>
        <div> <span class="title">后台管理系统</span></div>
        <div >
          <i class="el-icon-user-solid"></i>
          {{user}}
          <span @click="loginout" class="exit">退出</span>
        </div>
      </el-header>
      <el-container class="main">
        <Menu></Menu>
        <el-main>
          <!--        面包屑-->
          <el-card>
            <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item v-for="(item,index) in $route.matched" :key="index">
              {{item.name}}
            </el-breadcrumb-item>
            </el-breadcrumb>
          </el-card>
<!--          路由出口-->
          <router-view></router-view>
<!--          底部公共组件-->
          <Font></Font>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Menu from './common/Menu'
import Font from "./common/Font"
export default {
  name: 'Home',
  components: {
    Menu,
    Font
  },
  data () {
    return {
      isCollapse: false,
      user: ''
    }
  },
  created() {
    this.user = localStorage.getItem('username')
  },
  methods:{
    //推出登录
    loginout(){
      this.$alert('确认退出吗', '退出提示', {
        confirmButtonText: '确定',
        callback: action => {
          localStorage.clear();
          this.$router.push('/login')
        }
      });
    },
    coll(){
      this.isCollapse = !this.isCollapse;
      if(this.isCollapse){
        localStorage.setItem('isCollapse',1)
      }else {
        localStorage.setItem('isCollapse',0)
      }
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.home {

  .co-icon{
    width: 45px;
    height: 45px;
    border: 1px solid #E6DFE2;
    margin: auto 0;
    background-color: #abcfd1;
    i {
      position: absolute;
      top: 24px;
      left: 35px;
      cursor: pointer;
    }
  }
  .el-header {
    background-color: #878fd1;
    color: #333;
    text-align: center;
    line-height: 60px;
    display: flex;
    justify-content: space-between;
    .exit{
      font-size: 14px;
      cursor: pointer;
    }
  }
.main {
  width: 100%;
  position: absolute;
  top: 60px;
  bottom: 0;
  overflow: hidden;
  .el-main {
    background-color: #e9eef3;
    color: #999;
    text-align: center;
    /*line-height: 160px;*/
  }
}

}
</style>
