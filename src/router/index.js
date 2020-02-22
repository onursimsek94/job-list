import Vue from 'vue'
import VueRouter from 'vue-router'
import JobList from '@/views/JobList'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/joblist',
  },
  {
    path: '/joblist',
    name: 'job-list',
    component: JobList,
  },
  {
    path: '/jobdetail/:id',
    name: 'job-detail',
    component: () => import('@/views/JobDetail.vue'),
    props: true,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
