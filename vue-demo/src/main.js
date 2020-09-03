// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//引入ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import  service from './service'
import echarts from 'echarts'   //引入echarts
//使用ElementUI
Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.prototype.service = service;  //axios挂载到原型
Vue.prototype.$echarts = echarts;   //echarts挂载到原型
import 'font-awesome/css/font-awesome.min.css'   //引入font-awesome

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
