<template>
    <div class="login">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span class="title">后台管理系统</span>
        </div>
        <el-form ref="form" :model="form" :rules="rules" label-width="80px" class="form-box">
          <el-form-item label="用户名" prop="username">
            <el-input v-model="form.username" ></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="form.password" ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button class="loginBtn" type="primary" @click="login('form')" >登录</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        form: {
          username: '',
          password: '',
        },
        rules:{
          username:[
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 7 个字符', trigger: 'blur' }
          ],
          password:[
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 5, max: 12, message: '长度在 5 到 12 个字符', trigger: 'blur' }
          ]
        }
      }
    },
    methods:{
      login(form){
        this.$refs[form].validate((valid) => {
          if (valid) {
            this.service.post('/login', this.form)
              .then( (res) => {
                console.log(res);
                // if (res.data.status === '200'){
                //   this.$message({
                //     message: '登录成功',
                //     type: 'success',
                //     duration: 1000
                //   });
                  this.$router.push('/home/student')
                  localStorage.setItem('token', res.data.data.token)
                  localStorage.setItem('username',res.data.data.username)
                // }else {
                //   console.log(res.data.msg)
                // }
              })
              .catch(function (err) {
                console.log(err);
              });
          } else {
            console.log('error submit!!');
            return false;
          }
        })
      }
    },
  }
</script>
<style lang="scss">
.login {
  width: 100vw;
  height: 100vh;
  background: #ccc;
  .box-card {
    width: 480px;
    position: absolute;
    top: 200px;
    left: 50%;
    transform: translateX(-50%);
    .title {
      font-size: 28px;
    }
    .form-box{
      width: 350px;
    }
    .loginBtn{
      width: 100%;
    }
  }
}
</style>
