<template>
  <div class="menu">
<!--    导航栏-->
    <el-aside :width="isCollapse? '65px':'200px'">
      <el-menu
        router
        :default-active="activePath"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        :collapse= 'isCollapse'>
        <template v-for="(item , index) in menus">
          <el-submenu :index="index+''" :key="index" v-if="!item.hidden">
            <template slot="title">
              <i :class="item.iconClass"></i>
              <span slot="title">{{item.name}}</span>
            </template>
            <el-menu-item-group v-for="(child,index) in item.children" :key="index">
              <el-menu-item :index="child.path"><i :class="child.iconClass"></i>{{child.name}}</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </template>
      </el-menu>
    </el-aside>
  </div>
</template>
<script>
  export default {
    data() {
      return{
        isCollapse: false,
        menus: [],
        activePath: '',
      }
    },
    created() {
      this.menus = this.$router.options.routes
      this.activePath = this.menus[1].children[0].path
      this.coll()
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      coll(){
        var coll = Number(localStorage.getItem('isCollapse'))
        if (coll === 0 ){
          this.isCollapse = false
        }else {
          this.isCollapse = true
        }
        console.log(this.isCollapse)
      }
    }
  }
</script>
<style lang="scss">
  .menu{
    .el-aside {
      background-color: #D3dce6;
      color: #333;
      text-align: center;
      line-height: 200px;
      .el-menu {
        height: 100%;
      }
    }
  }
</style>
