import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
Vue.use(VueRouter)

const demo1 = () => import('@/views/demo/demo1')
const demo101 = () => import('@/views/demo/demo101')
// const a404 = () => import('@/view/demo/a404')
const flvPlayer = () => import('@/views/flv/flvPlayer')
const routes = [
  {
    path: '/',
    redirect: '/s1',
    hidden: true
  },
  // flv文件夹下面的
  {
    path: '/flvPlayer/:id?',
    name: 'FlvPlayer',
    component: flvPlayer
  },
  // testio文件夹下面的
  {
    path: '/ahome/home/:id?',
    name: 'Ahome',
    component: () => import('@/views/testio/ahome')
  },
  {
    path: '/ghome/home/:id?',
    name: 'Ghome',
    component: () => import('@/views/testio/ghome')
  },
  {
    path: '/s1/:id?',
    name: 'S1',
    component: () => import('@/views/testio/s1')
  },
  {
    path: '/s2/:id?',
    name: 'S2',
    component: () => import('@/views/testio/s2')
  },
  // demo2
  {
    path: '/demo2/:test?',
    name: 'Demo2',
    component: () => import('@/views/demo/demo2')
  },
  {
    path: '/demo1/:test?',//正则匹配，一个或者多个数字
    name: 'Demo1',
    // meta: {
    //   title: '这是德莫 demo1',
    //   rid: '776878ghjbhjvu778'
    // },
    component: demo1,
    // redirect: 'Demo2' //重定向
    alias: '/newdemo1'
  },

  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
 
  {
    path: '*',
    name: 'a',
    component: () => import('@/views/demo/a')
  },
]

const router = new VueRouter({
  routes
})

// 路由守卫
router.beforeEach((to,from,next) => {
  if(to.path === '/ghome/home' || to.path === '/s1') {
      next()
  } else {
    const token = localStorage.getItem('a')
      if (token) {
        next();
        console.log('有token')
    } else {
        router.push('/s2')
        console.log('无token')
    }

  }
})

export default router

// export default new router