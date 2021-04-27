import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import NotFound from '@/components/NotFound'
import StudentList from '@/components/students/StudentList'
import WorkList from '@/components/students/WorkList'
import DataOverView from '@/components/dataAnalysis/DataOverView'
import Mapdata from '@/components/dataAnalysis/Mapdata'

Vue.use(Router);

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   redirect:'./login',
    //   hidden: true
    // },
    {
      path: '/home',
      name: '学生管理',
      component: Home,
      iconClass: 'fa fa-users',
      children:[
        {
          path: '/home/student',
          name: '学生列表',
          component: StudentList,
          iconClass: 'fa fa-list-alt',
        },
        {
          path: '/home/work',
          name: '作业列表',
          component: WorkList,
          iconClass: 'fa fa-list',
        }
      ]
    },
    {
      path: '/home',
      name: '数据分析',
      component: Home,
      iconClass: 'fa fa-bar-chart',
      children:[
        {
          path: '/home/dataview',
          name: '数据概览',
          component: DataOverView,
          iconClass: 'fa fa-line-chart',
        },
        {
          path: '/home/mapdata',
          name: '地图概览',
          component: Mapdata,
          iconClass: 'fa fa-map-o',
        },
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      hidden: true
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound,
      hidden: true
    }
  ],
  mode: "history"
})
